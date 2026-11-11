# Regras de campanhas

**Situação:** regras informadas pelo time (Vinny) em 2026-10-21 e implementadas nas branches `feature/mor-023-024-campanhas` (backend e frontend). **Ainda não validadas formalmente com o produto.** Elas cobrem boa parte da [PD-011](../planejamento/modulos/decisoes.md#tsk-dec-011), mas a decisão só fecha depois dessa validação e dos pontos listados em "Em aberto".

Atividades relacionadas: TSK-MOR-022 (loja), TSK-MOR-023 (detalhe da campanha) e TSK-MOR-024 (campanhas). Regras de origem: RN-009, RN-010 e RN-019 em [Regras de negócio](regras-de-negocio.md).

## Princípios

1. **Cada campanha é única.** O admin monta a campanha no editor: acesso, requisitos, missões e mecânicas de bônus. Cada campanha pode funcionar de um jeito, de acordo com as parcerias.
2. **Participar é gratuito**, mas só quem aperta **Participar** recebe os bônus da campanha. Participar nunca paga pontos.
3. **Nenhum descarte conta antes de participar.** Vale para requisitos de entrada, missões e mecânicas.
4. **Ao cumprir os requisitos, o morador ganha pontos.** O morador recebe os pontos pelo botão **Receber pontos**, uma vez por recompensa.
5. **Pontos não são dinheiro** (RN-010). A campanha concede benefícios da plataforma.

## Acesso: pública e privada

| | Pública | Privada |
|---|---|---|
| Quem pode apertar Participar | qualquer morador | qualquer morador |
| Quando os bônus valem | depois de participar | depois de participar **e** de cumprir os requisitos de entrada |
| Requisitos de entrada | não tem | pelo menos um |

Na campanha privada, os requisitos de entrada são o primeiro desafio depois da adesão. Exemplo: reciclar 5 latas de Coca-Cola. Enquanto não forem cumpridos, nenhum bônus é liberado, mesmo que as missões estejam completas.

## Requisitos e missões

Cada item mede uma quantidade de unidades de **descartes confirmados**:

- **Papel:** `entrada` (só em campanha privada) ou `missao`.
- **Material:** `plastico`, `metal`, `papel`, `vidro`, `organico` ou `eletronico`. Em branco significa qualquer material.
- **Códigos de barras:** lista opcional. O produto é identificado pelo código de barras do descarte ou, se não houver, do item do inventário. Não existe catálogo de produtos (PD-004).
- **Quantidade:** número inteiro de 1 ou mais.

**Missões:** a campanha define os **pontos de recompensa** (valor fixo). Quando **todas** as missões chegam na quantidade, o morador pode receber a recompensa, uma única vez. O valor não depende de quanto o morador reciclou além da meta.

## O que conta como progresso

Um descarte conta para um requisito ou mecânica quando:

1. o morador já participa da campanha;
2. o descarte está com status `confirmado` (pendente ou rejeitado não conta);
3. a data de registro do descarte é igual ou posterior ao momento da adesão e está dentro da vigência da campanha;
4. o material e/ou o código de barras batem com o definido (material é comparado sem diferenciar maiúsculas de minúsculas);
5. a quantidade somada usa a quantidade confirmada (ou a registrada, se não houver confirmação), em unidades inteiras.

Consequências:

- Um descarte registrado antes da adesão e confirmado depois **não conta**, porque vale a data de registro.
- Os mesmos descartes podem contar para a entrada, para as missões e para o dobro de pontos ao mesmo tempo.

## Mecânicas de bônus

O admin liga e desliga cada mecânica no editor. Uma campanha tem no máximo uma mecânica de cada tipo, e as mecânicas são independentes entre si e das missões. Cada uma tem sua meta, seu botão **Receber pontos** e paga uma vez. Mecânica desligada não aparece para o morador e não paga. Novas mecânicas entrarão conforme as parcerias.

### Dobro de pontos (`dobro_pontos`)

O admin define o **resíduo** (material e/ou código de barras) e a **quantidade** necessária para ganhar o bônus.

O morador que participa e recicla essa quantidade, depois de aderir, recebe de bônus **os pontos básicos dessas unidades** (ou seja, dobra o que elas valem). O ponto básico é **5 por unidade** (decisão do time em 2026-10-22; ver [Regras de saldo, vouchers e sorteios](regras-de-saldo-vouchers-sorteios.md)), então uma meta de 4 unidades paga 20 pontos. O valor usa a mesma função da pontuação do descarte e acompanha a regra base se ela mudar.

## Pagamento

- O morador recebe pelo botão **Receber pontos**. O sistema não credita sozinho na confirmação do descarte.
- O pagamento é protegido contra clique duplo: a adesão é travada e existe uma restrição de pagamento único por mecânica.
- Missões: `recompensa_concedida_em` na adesão. Mecânicas: uma linha em `campanha_bonus` por adesão e mecânica.
- Campanha com status diferente de `ativa` não paga. Campanha fora da vigência deixa de aparecer na lista e no detalhe, e o progresso só considera descartes até a data de fim; o endpoint de pagamento exige apenas o status `ativa`, então um morador que concluiu a meta dentro da vigência ainda consegue receber depois do fim.

## Validações do cadastro (admin)

- Campanha privada precisa de pelo menos um requisito de entrada.
- Campanha pública não pode ter requisito de entrada.
- Pontos de recompensa maiores que zero exigem pelo menos uma missão.
- Dobro de pontos exige quantidade de 1 ou mais e o resíduo definido (material e/ou código de barras).
- Cada mecânica aparece no máximo uma vez por campanha.
- Campanhas antigas (sem missões) continuam editáveis: a validação só roda quando acesso, pontos, requisitos ou mecânicas mudam.

## Telas

| Perfil | Tela | O que faz |
|---|---|---|
| Admin | `/nova-campanha` e `/campanhas/:id` | cadastra e edita acesso, requisitos, missões, mecânicas, condições e vigência |
| Morador | `/loja` (aba Campanhas) | lista campanhas; botão **Participar** e link de detalhes; selo PRIVADA |
| Morador | `/loja/campanhas/:id` | acesso, recompensa, requisitos de entrada, missões e bônus com barras de progresso; **Participar** e **Receber pontos** |

## API

| Método e rota | Quem | Função |
|---|---|---|
| `GET /campanhas` | público | campanhas ativas dentro da vigência |
| `GET /campanhas/{id}` | público | detalhe de campanha consultável (404 se inativa, encerrada ou futura) |
| `GET /campanhas/admin` | admin | todas as campanhas |
| `POST /campanhas`, `PUT /campanhas/{id}`, `DELETE /campanhas/{id}` | admin | cadastro. `requisitos` e `mecanicas`, quando enviados no PUT, substituem a lista; ausentes mantêm |
| `POST /campanhas/{id}/participar` | morador | adesão gratuita (400 se já participa) |
| `GET /campanhas/{id}/progresso` | morador | progresso de entrada, missões e mecânicas, `acesso_liberado` e recompensas disponíveis |
| `POST /campanhas/{id}/recompensa` | morador | paga a recompensa das missões (uma vez) |
| `POST /campanhas/{id}/mecanicas/{tipo}/bonus` | morador | paga o bônus da mecânica (uma vez) |
| `GET /campanhas/minhas-inscricoes` | morador | campanhas em que participa |

Tabelas: `campanhas` (inclui `acesso` e `condicoes`), `campanha_requisito`, `campanha_mecanica`, `inscricao_campanha` (inclui `recompensa_concedida_em`) e `campanha_bonus`. Migrations `3b1f6d2a9c47`, `5d8e1a7b3c20` e `a41c7e92d5b3`. Regras em `app/services/campanha_service.py`.

## Em aberto (PD-011 e relacionadas)

- **Validar estas regras com o produto** e registrar a decisão em TSK-DEC-011.
- **Crédito automático** ao confirmar o descarte, em vez do botão Receber pontos. A avaliação já está isolada no serviço, mas o ponto de chamada é o fluxo mais sensível do sistema (bugs AUD-001 e AUD-002).
- **Acúmulo entre campanhas, limites por usuário ou período** e **mudança ou cancelamento** de campanha com adesões. Hoje, excluir uma campanha apaga as adesões e os registros ligados.
- **Comprovação do produto:** o requisito por código de barras só progride se o descarte ou o item do inventário tiver o código gravado. A validação de identificação do backend está desativada.
- **Mídia e vídeo** da campanha (PD-024 e TSK-ADM-017).
- **Notificação** de conclusão de missão (PD-021).
- **Outras mecânicas** previstas para parcerias futuras.
- **Campanhas antigas:** adesões que já tinham recebido pontos foram marcadas como pagas na migração. Campanhas sem missões não pagam pontos.

## Testes

`tests/test_campanhas.py` (19 casos) no backend cobre: detalhe e vigência, adesão gratuita, adesão repetida, descartes anteriores à adesão, entrada bloqueando bônus em privada, quem não participa, pagamento único, dobro de pontos (inclusive desligado e em privada), independência entre missões e dobro, e validações de cadastro. A API foi exercitada de ponta a ponta em ambiente local. **A interface ainda não foi validada visualmente.**
