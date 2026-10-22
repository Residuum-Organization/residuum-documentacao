# Regras de saldo, vouchers e sorteios

**Situação:** parte técnica de TSK-MOR-025 (vouchers) e TSK-MOR-026 (sorteios) que não depende de decisão de produto, implementada na branch `feature/mor-025-026-vouchers-sorteios` do backend. **Não resolve** PD-012, PD-013 nem PD-021; essas decisões continuam abertas (ver "Fora do escopo"). A interface não mudou.

Regras de origem: RN-009 e RN-010 em [Regras de negócio](regras-de-negocio.md). Depende da parte de débito consistente de TSK-MOR-021.

## Débito de pontos

Todo débito de pontos passa por um único serviço (`app/services/saldo_service.py`, função `debitar_pontos`):

1. trava a linha do usuário no banco (`SELECT ... FOR UPDATE`);
2. lê o saldo do banco, não da memória da requisição;
3. recusa se o saldo não cobre o valor (nada é alterado);
4. debita e grava o evento no extrato, com a origem.

Efeito: dois resgates em paralelo, de vouchers ou sorteios diferentes, não gastam o mesmo saldo duas vezes. Antes, só a linha do voucher ou do sorteio era travada.

Usam o serviço: resgate de voucher, compra de bilhete e `POST /pontuacao/resgates`. O ajuste manual do admin (`ajuste-pontuacao`) também trava o usuário antes de somar.

## Idempotência

`POST /vouchers/{id}/resgatar` e `POST /sorteios/{id}/comprar-bilhete` aceitam o cabeçalho opcional `Idempotency-Key` (até 80 caracteres):

| Situação | Resposta |
|---|---|
| Primeira vez com a chave | 201, debita e cria o registro |
| Mesma chave, mesmo voucher/sorteio | 200 com o registro já criado, sem debitar e sem baixar estoque |
| Mesma chave em outro voucher/sorteio | 409 |
| Sem chave | comportamento anterior: cada pedido é um resgate; no sorteio, o segundo bilhete do mesmo usuário continua recusado (1 por sorteio) |

O reenvio com chave funciona mesmo que o voucher tenha acabado no meio tempo, porque a chave é conferida antes das validações de estoque. A chave vale por usuário (`usuario_id` + chave é único no banco).

**Ainda não usado pela interface.** O frontend não envia a chave: ela precisa ser criada uma vez por intenção do morador (por exemplo, ao abrir o modal de confirmação) e repetida nas novas tentativas. Uma chave nova a cada chamada não protege nada.

## Extrato com origem

Cada débito grava `resgate_pontuacao.origem`: `voucher`, `sorteio` ou `resgate` (resgate genérico). O extrato (`GET /pontuacao/extrato`) devolve esse valor em `origem`; antes todos vinham como `resgate`. Eventos antigos foram classificados na migração pelo texto que já gravavam (`sorteio:` na referência e "Resgate de voucher:" na descrição). Créditos e descartes mantêm as origens `descarte` e `campanha`.

## Tabelas e migration

Migration `c7a2e5b9d140`: coluna `origem` em `resgate_pontuacao`, coluna `chave_idempotencia` com restrição única `(usuario_id, chave_idempotencia)` em `resgate_voucher` e `bilhete_sorteio`. Ela parte da migration `a41c7e92d5b3` (campanhas); a branch é empilhada sobre `feature/mor-023-024-campanhas`. **Não foi executada em PostgreSQL** (o Docker local estava parado); os testes rodam em SQLite criando as tabelas a partir dos modelos.

## Fora do escopo (decisões abertas)

- **PD-012:** emissão, validade, uso no parceiro, cancelamento e devolução de pontos do voucher. O código ainda é gerado no resgate, sem validade. Não existe endpoint de detalhe do voucher nem instruções de uso (CA-02 de MOR-025).
- **PD-013:** chances por sorteio, regra de elegibilidade e apuração. Continuam as regras herdadas da V5: 1 bilhete por usuário e descarte confirmado com GPS. A idempotência já está pronta para quando as chances mudarem.
- **PD-021:** notificação do resultado do sorteio.
- **TSK-MOR-021, parte de crédito:** as rotas que somam pontos (descarte, inventário e campanhas) ainda não travam o usuário. Um crédito e um débito simultâneos podem, em teoria, perder um dos dois. Um serviço de crédito igual ao de débito é o próximo passo.
- **TSK-ADM-004 e TSK-ADM-017:** perfil de admin e mídia da loja.

## Testes

`tests/test_vouchers_sorteios.py` (15 casos): saldo lido do banco, recusa sem saldo sem alterar nada, resgate com baixa de estoque e origem, reenvio com chave (inclusive no último do estoque), chave em outro voucher/sorteio, segundo bilhete com outra chave e extrato com as três origens. Não cobre concorrência real entre conexões: o SQLite dos testes ignora `FOR UPDATE`, então o bloqueio em si precisa ser conferido em PostgreSQL.
