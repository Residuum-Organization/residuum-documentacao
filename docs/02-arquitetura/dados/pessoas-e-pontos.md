# Dicionário: pessoas e pontos

[Voltar ao índice](README.md) · Fonte: `app/models/` da branch `feature/mor-025-026-vouchers-sorteios`.

## usuario

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| nome, telefone | texto | obrigatórios |
| email | texto U | login |
| senha_hash | texto | bcrypt |
| pontuacao_total | int | saldo; padrão 0. Alterado em 6 pontos do código (achado F01/F13) |
| role | texto | `usuario` (padrão), `admin`, `cooperativa`, `ponto_coleta`, `parceiro` `[VERIFICAR]` |
| endereco_id | FK→endereco N | |

Não existem `ativo`, `token_version`, `criado_por_id` nem `anonimizado_em`.

## endereco

| Coluna | Tipo |
|---|---|
| id_end | int PK |
| rua, bairro, cep, cidade | texto |
| numero | int |

## pontuacao

Crédito de pontos. **Sem origem, referência nem chave de idempotência.**

| Coluna | Tipo | Observação |
|---|---|---|
| id_pontuacao | int PK | |
| pontos | int | positivo (crédito) ou negativo (estorno) |
| data_reg | timestamp | padrão `now()` |
| usuario_id | FK→usuario | |

## resgate_pontuacao

Débito de pontos (voucher, bilhete, resgate avulso).

| Coluna | Tipo | Observação |
|---|---|---|
| id_resgate | int PK | |
| pontos_utilizados | int | |
| descricao | texto(255) | |
| referencia | texto(255) N | ex.: `sorteio:12:bilhete:3` (texto, sem FK) |
| origem | texto(20) | `resgate` (padrão), `voucher`, `sorteio` |
| status | texto(20) | `resgatado` (padrão) |
| data_resgate | timestamp | |
| usuario_id | FK→usuario | indexada |

## audit_log

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| admin_id | FK→usuario | nome engana: guarda qualquer autor da ação |
| action | texto(60) | indexada, ex.: `sorteio.apurar` |
| target_type, target_id | texto(40), int N | recurso afetado |
| motivo | texto(255) N | |
| payload | `JSON` N | de/para |
| created_at | timestamp | indexada |

## notificacoes

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| mensagem | texto | |
| tipo | texto | padrão `ponto_cheio` |
| lida | bool | |
| criado_em | timestamp | |
| ponto_coleta_id | FK→ponto_coleta N | alerta operacional |
| usuario_id | FK→usuario N | aviso ao morador (sorteio apurado) |
