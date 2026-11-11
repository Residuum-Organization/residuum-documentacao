# Dicionário: loja (vouchers, sorteios, campanhas)

[Voltar ao índice](README.md) · Fonte: `app/models/` da branch `feature/mor-025-026-vouchers-sorteios`.

## vouchers

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| titulo, parceiro | texto(255) | |
| descricao, instrucoes | texto N | instruções de uso (padrão no código) |
| custo_pontos | int | |
| quantidade_disponivel | int | estoque |
| validade_codigo_dias | int N | dias a partir do resgate; em branco = sem prazo |
| status | texto(30) | `ativo` (padrão), `inativo` |
| data_inicio, data_fim | timestamp N | vigência |

## voucher_codigo

Código enviado pelo parceiro e cadastrado pelo admin.

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| voucher_id | FK→vouchers | `ON DELETE CASCADE` |
| codigo | texto(40) U | único no sistema |
| status | texto(20) | `disponivel` (padrão) |
| resgate_id | FK→resgate_voucher N | preenchido na entrega |

## resgate_voucher

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| voucher_id, usuario_id | FK | |
| codigo | texto(40) U | |
| pontos_utilizados | int | |
| status | texto(20) | `ativo` |
| chave_idempotencia | texto(80) N | `UNIQUE (usuario_id, chave_idempotencia)` |
| valido_ate | timestamp N | |
| criado_em | timestamp | |

## sorteios

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| titulo, premio | texto(255) | |
| descricao | texto N | |
| custo_pontos | int | editável a qualquer momento (ADM-02) |
| status | texto(30) | `ativo`, `encerrado`; sem `rascunho`, `apurado`, `cancelado` |
| data_inicio, data_fim | timestamp N | |
| criado_em, atualizado_em | timestamp | |

Bilhetes são apagados em cascata com o sorteio (ADM-01). Não há tabela de resultado; a apuração vive em `audit_log` (ADM-09).

## bilhete_sorteio

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| sorteio_id | FK→sorteios | |
| usuario_id | FK→usuario | |
| numero | int | sequencial no sorteio |
| pontos_utilizados | int | valor a devolver em cancelamento |
| chave_idempotencia | texto(80) N | |
| criado_em | timestamp | |

Restrições: `UNIQUE (sorteio_id, usuario_id)`, `UNIQUE (sorteio_id, numero)`, `UNIQUE (usuario_id, chave_idempotencia)`.

## campanhas

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| titulo, patrocinador | texto(255) | |
| descricao, condicoes | texto N | |
| patrocinador_logo_url | texto(500) N | |
| pontos_recompensa | int | pago uma vez ao cumprir as missões |
| acesso | texto(20) | `publica` (padrão), `privada` |
| status | texto(30) | `ativa` (padrão) |
| data_inicio, data_fim | timestamp N | |

## Tabelas ligadas à campanha

| Tabela | Colunas principais | Restrição / observação |
|---|---|---|
| campanha_requisito | campanha_id FK `CASCADE`, `papel` (`entrada` ou `missao`), `tipo_residuo` N, `codigos_barras` `JSON` N, `quantidade` int | filtros vazios = qualquer descarte confirmado |
| campanha_mecanica | campanha_id FK `CASCADE`, `tipo` (ex.: `dobro_pontos`), `ativa`, `config` `JSON` | `UNIQUE (campanha_id, tipo)` |
| inscricao_campanha | campanha_id FK, usuario_id FK, `pontos_concedidos`, `recompensa_concedida_em` N | `UNIQUE (campanha_id, usuario_id)` |
| campanha_bonus | inscricao_id FK `CASCADE`, `mecanica`, `pontos`, `concedido_em` | `UNIQUE (inscricao_id, mecanica)`; **não aparece no extrato** (ADM-08) |

`campanha_requisito.tipo_residuo` aceita qualquer texto, inclusive materiais fora do MVP (ver [PRD, contradição 2](../../01-planejamento/prd-srs.md)).
