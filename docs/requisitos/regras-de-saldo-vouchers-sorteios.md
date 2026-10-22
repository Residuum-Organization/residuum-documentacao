# Regras de saldo, vouchers e sorteios

**Situação:** regras informadas pelo time (Vinny) em 2026-10-22 e implementadas nas branches `feature/mor-025-026-vouchers-sorteios` (backend e frontend). **Ainda não validadas formalmente com o produto.** Cobrem parte de PD-012 e PD-013; as decisões só fecham depois dessa validação e dos pontos de "Em aberto" e "Propostas".

Atividades relacionadas: TSK-MOR-025 (vouchers) e TSK-MOR-026 (sorteios). Regras de origem: RN-009, RN-010 e RN-019 em [Regras de negócio](regras-de-negocio.md) e RF-MVP-029/030 na [V6](requisitos-mvp-v6.md).

## Vouchers

| Tema | Regra (informada pelo time) | Como ficou |
|---|---|---|
| Limite de unidades | O administrador escolhe a quantidade. | Campo `quantidade_disponivel` do voucher, editado pelo admin. |
| Código e parceiro | Os parceiros enviam os códigos, o admin cadastra no sistema e o sistema libera para o morador. | O admin cola os códigos (um por linha). Cada código soma 1 ao estoque. Cada resgate entrega o próximo código disponível. Sem códigos cadastrados, o sistema gera um código próprio (`RSDM-XXXXXXXX`), como antes. |
| Validade do código | Segue as parcerias futuras; o admin edita. | `validade_codigo_dias` no voucher: o código vale esse número de dias a partir do resgate. Em branco, sem prazo. Mudar o valor vale só para resgates futuros. Código vencido aparece como **expirado** para o morador. |
| Instruções de uso | Construir instruções objetivas. | O admin pode escrever o texto; em branco, vale o texto padrão (abaixo). O morador vê no detalhe do voucher e em Minhas recompensas. |
| Cancelamento e devolução de pontos | **Em aberto.** | Não implementado: um resgate não é cancelado e os pontos não voltam. |

Texto padrão das instruções:

1. Resgate o voucher. O código aparece em Meus resgates.
2. Informe o código ao parceiro (nome do parceiro do voucher) na hora de usar o benefício.
3. Cada código vale uma única vez.

Quando há prazo, entra a linha "O código vale por N dias a partir do resgate" (antes do resgate) ou "Use até dd/mm/aaaa" (depois, horário de Manaus). A frase "cada código vale uma única vez" é uma premissa minha para o texto padrão (cada morador recebe um código próprio do parceiro); o admin pode trocar o texto se a parceria for diferente.

**Gestão dos códigos (admin):**

- `POST /vouchers/{id}/codigos` cadastra uma lista (até 1.000 por vez, até 40 caracteres cada). Espaços nas pontas e repetições no mesmo envio são ignorados. Código que já existe em qualquer voucher, ou que já foi entregue, recusa o envio inteiro (409), porque o código é único no sistema.
- `GET /vouchers/{id}/codigos` mostra disponíveis e entregues.
- `DELETE /vouchers/{id}/codigos/{codigo_id}` remove um código que ainda não foi entregue e tira 1 do estoque. Código entregue não pode ser removido.
- Com códigos cadastrados, o resgate exige um código disponível: aumentar a quantidade na mão sem cadastrar códigos não libera resgates.

**Detalhe:** `GET /vouchers/{id}` (público) devolve o voucher ativo e vigente com `instrucoes_uso`.

## Regra inicial de pontos e faixas de recompensa

Regra informada pelo time em 2026-10-22, **inicial e sujeita a mudança**. Nenhum valor foi cadastrado no sistema: o admin define o custo de cada oferta e usa as faixas como referência.

> Regra: 1 descarte = 5 pontos.

| Pontos | Descartes | Resgate | Objetivo |
|---|---|---|---|
| 10 | 2 | 5% de desconto na próxima compra ou 1 brinde simples (ex.: ecobag da loja) | Recompensa rápida na primeira experiência |
| 25 | 5 | Voucher de 10% de desconto ou frete grátis na loja online | Primeiro marco de fidelidade |
| 50 | 10 | 15% de desconto ou voucher de R$ 30,00 | Hábito de descartar |
| 100 | 20 | 20% de desconto, voucher de R$ 70,00 ou produto básico | Recompensa de médio prazo |
| 250 | 50 | 30% de desconto, voucher de R$ 200,00 ou produto intermediário | Clientes engajados |
| 500 | 100 | 40% de desconto, voucher de R$ 450,00 ou produto premium | "Embaixadores" da marca |
| 1.000 | 200 | 50% de desconto (ou o teto da loja), voucher de R$ 1.000,00 ou kit VIP / produto estrela | Nível máximo de fidelidade |

**Conflito a decidir (não alterado no código):** a V6 define **10 pontos básicos por descarte** e o código hoje paga 10 pontos por unidade confirmada (AUD-002). A regra acima diz **5 pontos por descarte**. Trocar o valor muda o saldo de todos os moradores, a mecânica de dobro de pontos das campanhas e todas as faixas acima. Até a decisão, o sistema continua com 10.

Interpretação: as faixas valem como referência de **custo em pontos** das ofertas (vouchers e, se o time quiser, o custo do bilhete de sorteio). O texto fala em "cliente" e "loja"; tratei como a loja do parceiro.

## Sorteios e bilhetes

### Como está hoje

- Participar exige sorteio ativo e na vigência, **descarte confirmado com GPS** e saldo suficiente. O custo (`custo_pontos` do sorteio) é debitado do saldo.
- **1 bilhete por usuário por sorteio.** Numeração sequencial no sorteio.
- Apuração só pelo admin, depois do fim da vigência: sorteia um bilhete ao acaso, encerra o sorteio e registra o resultado. Não apura duas vezes. O resultado é público.
- Custo: o admin escolhe o `custo_pontos` de cada sorteio; as faixas da seção anterior são a referência inicial.
- "1 bilhete" e "exige descarte com GPS" são regras herdadas da V5. **Continuam até o time decidir outra coisa.**

### Notificação (decidido: simples)

Ao apurar, o sistema cria um aviso para cada participante:

- **Ganhador:** "Parabéns! Você ganhou o sorteio '…': prêmio (bilhete nº …)."
- **Demais participantes:** "O sorteio '…' foi apurado. Veja o resultado na Loja."

O morador vê os avisos não lidos no topo da Loja e marca "Entendi" (`GET /notificacoes/minhas` e `PATCH /notificacoes/minhas/{id}/lida`). Os avisos de morador são separados dos alertas operacionais (ponto cheio) e não aparecem no painel do admin e da cooperativa. Não há e-mail, push nem SMS (integração I05 continua em aberto).

### Propostas para o que o time ainda não sabe responder

Nada abaixo está implementado. São sugestões para a reunião de decisão (PD-013).

1. **Algoritmo de apuração**
   - *Recomendado para começar:* manter o sorteio feito pelo sistema (aleatório criptográfico) e reforçar a prova: guardar junto do resultado o total de bilhetes e um hash da lista (número + participante) tirada na hora da apuração, e publicar o resultado com data e quem apurou. Qualquer pessoa autorizada consegue conferir que a lista não mudou.
   - *Alternativa mais auditável:* usar o resultado da Loteria Federal para escolher o bilhete (por exemplo, o resto da divisão do número sorteado pelo total de bilhetes). Terceiros conferem sem confiar no sistema, e a numeração sequencial dos bilhetes já permite isso. Costuma ser a forma usada em promoções reais.
2. **Cancelamento**
   - Antes da apuração: o admin cancela o sorteio, o status vira `cancelado` e **todos os pontos dos bilhetes voltam** automaticamente, com origem "estorno de sorteio" no extrato.
   - Depois da apuração: não cancela. Se o ganhador não responder, sorteia-se um **suplente** dentro de um prazo (por exemplo, 30 dias), registrado do mesmo jeito.
3. **Prêmio**
   - Produto ou serviço doado por parceiro, nunca dinheiro (ver condições legais). O sorteio guarda a descrição e o valor declarado.
   - Entrega: o admin entra em contato pelo canal do cadastro, registra a entrega no sistema e guarda o comprovante.
4. **Condições legais**
   - A [Lei 5.768/1971](https://legis.senado.leg.br/norma/547644/publicacao/15714470) exige **autorização prévia** para distribuir prêmios por sorteio, vale-brinde ou concurso com fim de propaganda; fora dos casos previstos, ninguém pode distribuir ou prometer prêmios dessa forma. A competência hoje é da Secap (Ministério da Fazenda), por meio do sistema de promoção comercial, com taxa de fiscalização. É proibido converter o prêmio em dinheiro, e a realização sem autorização gera multa e proibição de novas operações. Fontes: [Migalhas, sorteios e autorização prévia](https://www.migalhas.com.br/depeso/337965/os-sorteios-e-a-necessidade-de-autorizacao-previa), [nota informativa da Secap](https://www.gov.br/economia/pt-br/centrais-de-conteudo/publicacoes/notas-informativas/2020/nota-informativa_secap.pdf).
   - **Não confirmei** se um sorteio em que a participação custa pontos ganhos com reciclagem se enquadra nessa exigência. Isso precisa de parecer de advogado especializado ou consulta à Secap antes de qualquer sorteio com prêmio real.
   - Enquanto isso, a recomendação é não publicar sorteio com prêmio real; usar sorteios de teste, sem prêmio, nos ambientes de demonstração.
5. **Chances e limites** (decisão do time pendente): hoje 1 bilhete por usuário. Proposta: o admin define no sorteio o máximo de bilhetes por usuário (padrão 1) e o custo por bilhete sai das faixas. A chave de idempotência já impede bilhete duplicado por reenvio.

## Saldo e débito de pontos

Todo débito passa por um único serviço (`app/services/saldo_service.py`, `debitar_pontos`): trava a linha do usuário (`SELECT ... FOR UPDATE`), lê o saldo do banco, recusa se faltar saldo e grava o evento no extrato com a origem. Dois resgates em paralelo não gastam o mesmo saldo duas vezes. Usam o serviço: resgate de voucher, compra de bilhete e `POST /pontuacao/resgates`. O ajuste manual do admin também trava o usuário.

## Idempotência

`POST /vouchers/{id}/resgatar` e `POST /sorteios/{id}/comprar-bilhete` aceitam o cabeçalho opcional `Idempotency-Key` (até 80 caracteres):

| Situação | Resposta |
|---|---|
| Primeira vez com a chave | 201, debita e cria o registro |
| Mesma chave, mesmo voucher/sorteio | 200 com o registro já criado, sem debitar e sem baixar estoque |
| Mesma chave em outro voucher/sorteio | 409 |
| Sem chave | cada pedido é um resgate; no sorteio, o segundo bilhete do mesmo usuário continua recusado |

A chave é conferida antes das validações de estoque e vale por usuário. **A interface ainda não envia a chave:** ela precisa ser criada uma vez por intenção do morador (por exemplo, ao abrir o modal de confirmação) e repetida nas novas tentativas.

## Extrato com origem

Cada débito grava `resgate_pontuacao.origem`: `voucher`, `sorteio` ou `resgate`. O extrato (`GET /pontuacao/extrato`) devolve esse valor em `origem`. Eventos antigos foram classificados na migração pelo texto que já gravavam. Créditos e descartes mantêm `descarte` e `campanha`.

## Tabelas e migrations

- `c7a2e5b9d140`: `resgate_pontuacao.origem`; `chave_idempotencia` com unicidade `(usuario_id, chave_idempotencia)` em `resgate_voucher` e `bilhete_sorteio`.
- `d3f9b81a6e25`: `vouchers.instrucoes`, `vouchers.validade_codigo_dias`, `resgate_voucher.valido_ate`, tabela `voucher_codigo` (código único no sistema) e `notificacoes.usuario_id`.

Ambas partem da migration de campanhas (`a41c7e92d5b3`); a branch é empilhada sobre `feature/mor-023-024-campanhas`. **Nenhuma foi executada em PostgreSQL** (o Docker local estava parado); os testes rodam em SQLite criando as tabelas a partir dos modelos.

## Em aberto

- **Cancelamento e devolução de pontos do voucher** (decisão do time: em aberto).
- **Validação do código no parceiro:** o sistema entrega e controla o código, mas não confirma que o parceiro o aceitou; o voucher resgatado continua não provando uso (V6). Não há status "usado".
- **Validade por código:** hoje o prazo é um só por voucher, em dias após o resgate. Se o parceiro mandar códigos com data própria, será preciso guardar a data por código.
- **Valor da pontuação por descarte:** 5 (regra inicial informada) contra 10 (V6 e código). Ver conflito acima.
- **Propostas do sorteio** (algoritmo, cancelamento, prêmio, legal, chances) e **canal de notificação** além do aviso dentro do app.
- **Frontend sem Idempotency-Key.**
- **Créditos sem trava:** as rotas que somam pontos (descarte, inventário, campanhas) ainda não travam o usuário. Um crédito e um débito simultâneos podem, em teoria, perder um dos dois. Um serviço de crédito igual ao de débito é o próximo passo (parte de TSK-MOR-021).
- **TSK-ADM-004 e TSK-ADM-017:** perfil de admin e mídia da loja.

## Testes

`tests/test_vouchers_sorteios.py` (31 casos) no backend cobre: saldo lido do banco, recusa sem saldo sem alterar nada, resgate com baixa de estoque e origem, idempotência (inclusive no último do estoque), códigos do parceiro (soma ao estoque, repetidos, conflito, limite de tamanho, entrega na ordem, esgotamento, remoção), validade e expiração, instruções padrão e do admin, detalhe de voucher inativo, avisos do sorteio (ganhador e demais), leitura só dos próprios avisos e separação do painel operacional. Não cobre concorrência real entre conexões: o SQLite dos testes ignora `FOR UPDATE`, então o bloqueio precisa ser conferido em PostgreSQL. A interface compila, mas **não foi validada visualmente**.
