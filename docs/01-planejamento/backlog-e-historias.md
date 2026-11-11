# Backlog e histórias de usuário

> **Estado:** revisão · **Dono:** Produto · **Atualizado em:** 10/11/2026
> **Fontes:** [atividades por módulo](backlog/README.md) (93 = 66 de execução + 27 decisões), [decisões](decisoes/README.md), roteiro de PRs das análises.
> **Lacunas:** responsáveis, datas e sprints finais.

## Resumo

O backlog tem **93 atividades** (66 de execução, 27 decisões), agora **um arquivo por atividade**. Falta enxergá-lo em **ondas de entrega** e em forma de **histórias**. Abaixo, as ondas e as histórias-modelo; as demais atividades seguem o mesmo molde.

## Onde estão as atividades

| Perfil | Atividades | Pasta |
|---|---|---|
| Usuário | 26 | [backlog/morador](backlog/morador/README.md) |
| Ponto de coleta | 5 | [backlog/ponto-de-coleta](backlog/ponto-de-coleta/README.md) |
| Cooperativa | 4 | [backlog/cooperativa](backlog/cooperativa/README.md) |
| Administrador | 17 | [backlog/administrador](backlog/administrador/README.md) |
| Transversais (ambiente, segurança, qualidade) | 14 | [backlog/transversais](backlog/transversais/README.md) |
| Decisões | 27 | [decisoes](decisoes/README.md) |

## Ondas de entrega

| Onda | Entrega | Por quê |
|---|---|---|
| 0 | Contenção: fechar cadastro público de cooperativa, travar acesso por ponto, sorteio (estados, remover Heineken, remover `/pontuacao/resgates`) | Riscos críticos, sem decisão |
| 1 | Livro de pontos (ledger), fluxo único de confirmação, idempotência, reconciliação | Base de quase tudo |
| 2 | Vínculo usuário↔ponto; contas (convite, desativar, senha) | Destrava os perfis |
| 3 | Materiais PET/lata; front do usuário; cancelar sorteio | Dependem de 1 e 2 |
| 4 | Estados da coleta; edição do ponto; campanha/voucher; contas pelo admin | Fluxos operacionais |
| 5 | Extrato, disponibilidade, lead, QR removido | Experiência |
| 6 | Pagamento, planos, limpeza do legado | Sprints 3–4 |

Atividades `TSK-…` e ondas ainda **não estão ligadas**. `[LACUNA]` ligar cada atividade à sua onda (tabela na parte 4, rastreabilidade).

## Histórias-modelo

| ID | História | Aceite | Onda | Atividade |
|---|---|---|---|---|
| H-MOR-01 | Como **usuário**, quero ganhar pontos só quando o ponto confirmar minha entrega, para que meu saldo seja confiável. | Criar descarte não muda saldo; confirmar credita 1 vez | 1 | [TSK-MOR-017](backlog/morador/tsk-mor-017.md) e [TSK-MOR-015](backlog/morador/tsk-mor-015.md) |
| H-MOR-02 | Como **usuário**, quero que uma rejeição devolva meus itens ao estoque. | Item volta inteiro; saldo inalterado | 1 | [TSK-MOR-015](backlog/morador/tsk-mor-015.md) |
| H-MOR-03 | Como **usuário**, quero que "descartar agora" não grave nada se eu desistir. | Estoque inalterado ao voltar | 3 | [TSK-MOR-005](backlog/morador/tsk-mor-005.md) |
| H-MOR-04 | Como **usuário**, quero ver se o ponto está lotado ou fechado antes de ir. | Ponto indisponível aparece desabilitado com motivo | 5 | [TSK-MOR-011](backlog/morador/tsk-mor-011.md) |
| H-COO-01 | Como **admin**, quero ser o único a criar cooperativas, para evitar fraude. | Cadastro público responde 410 | 0 | [TSK-ADM-008](backlog/administrador/tsk-adm-008.md) |
| H-COO-02 | Como **cooperativa**, quero ver só os pontos ligados a mim. | Listas disjuntas entre cooperativas | 2 | [TSK-COO-001](backlog/cooperativa/tsk-coo-001.md) e [TSK-ADM-004](backlog/administrador/tsk-adm-004.md) |
| H-COO-03 | Como **cooperativa**, quero informar o que retirei por material, sem zerar o ponto. | Estoque baixa só pelo coletado | 4 | [TSK-COO-004](backlog/cooperativa/tsk-coo-004.md) |
| H-PON-01 | Como **responsável**, quero editar os materiais do meu ponto, com histórico. | Alteração gera registro de auditoria | 4 | [TSK-PON-001](backlog/ponto-de-coleta/tsk-pon-001.md) |
| H-PON-02 | Como **responsável**, quero pedir coleta quando o ponto encher. | Pedido aparece ao admin; duplicado → 409 | 4 | [TSK-PON-004](backlog/ponto-de-coleta/tsk-pon-004.md) |
| H-ADM-01 | Como **admin**, quero cancelar um sorteio devolvendo os pontos. | Cada bilhete devolve 1 vez | 3 | [TSK-MOR-026](backlog/morador/tsk-mor-026.md) |
| H-ADM-02 | Como **admin**, quero desativar uma conta sem apagar o histórico. | Próximo acesso responde 401 | 2 | [TSK-ADM-004](backlog/administrador/tsk-adm-004.md) |

As atividades acima foram cruzadas pelo título. Os 71 achados das análises (F, F-, PON, ADM) **ainda não estão ligados** às atividades; alguns problemas (por exemplo `/pontuacao/resgates` e o cadastro público de cooperativa) podem não ter atividade própria. `[LACUNA]` fazer esse cruzamento.

## Mapa de rastreio (achado → história)

| Módulo | Achados | Críticos |
|---|---|---|
| Usuário | F01–F23 | 11 |
| Cooperativa | F-01–F-14 | 5 |
| Ponto de coleta | PON-01–16 | 2 |
| Administrador | ADM-01–18 | 5 |

## O que falta para fechar

- [ ] Converter as 66 atividades de execução para o molde de história
- [ ] Ligar cada achado a uma atividade existente ou criar a atividade que falta
- [ ] `[LACUNA]` responsável, início e entrega por item
- [ ] `[LACUNA]` capacidade do time para dimensionar sprints
