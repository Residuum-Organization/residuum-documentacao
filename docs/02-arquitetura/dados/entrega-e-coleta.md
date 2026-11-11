# Dicionário: entrega e coleta

[Voltar ao índice](README.md) · Fonte: `app/models/` da branch `feature/mor-025-026-vouchers-sorteios`.

## inventario_usuario (estoque do usuário)

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| usuario_id | FK→usuario | |
| tipo_residuo | texto(50) | livre (achado F09) |
| quantidade | **float** | disponível ao usuário (achado F23) |
| quantidade_reservada | float | em descartes pendentes; hoje o lote não a usa (F02) |
| descricao, observacao | texto N | |
| codigo_barras | texto(64) N | |
| sem_rotulo | bool | `CHECK`: ou tem código, ou é sem rótulo |
| status | texto(30) | `disponivel`, `em_transferencia`, `finalizado` |
| data_cadastro, data_atualizacao | timestamp | |

## transferencia_lote (envio em lote)

| Coluna | Tipo | Observação |
|---|---|---|
| id | texto(36) PK | UUID |
| usuario_id, ponto_coleta_id | FK | |
| chave_idempotencia | texto(128) | `UNIQUE (usuario_id, chave_idempotencia)` |
| usuario_lat, usuario_long | float | posição no envio |
| usuario_precisao | float N | sem idade da posição |
| status | texto(20) | `pendente` |
| total_itens, peso_total, pontos_estimados | int, float, int | `peso_total` soma unidades |
| data_criacao | timestamp | |

## descarte

| Coluna | Tipo | Observação |
|---|---|---|
| id_descarte | int PK | |
| usuario_id | FK→usuario N | |
| ponto_coleta_id | FK→ponto_coleta N | |
| inventario_usuario_id | FK N | item de origem |
| transferencia_lote_id | FK→transferencia_lote N | `ON DELETE SET NULL` |
| quantidade, quantidade_confirmada | **float** | |
| tipo_residuo | texto(50) | livre |
| status | texto(20) | `pendente` (padrão), `confirmado`, `rejeitado`, `revertido` |
| usuario_lat, usuario_long, usuario_precisao | float N | |
| ponto_lat, ponto_long | float N | cópia das coordenadas do ponto |
| qrcode_token_id | FK→qrcode_token N | sem uso |
| codigo_barras_validado, sem_rotulo_validado, identificacao_manual | texto, bool, texto | `sem_rotulo_validado` é preenchido com valor fixo (PON-06) |
| identificado_por_id, identificado_em | FK→usuario N, timestamp N | |
| data_desc | timestamp | |

Não há `chave_idempotencia` própria (achado F05) nem referência ao lançamento de pontos.

## ponto_coleta

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| nome, endereco | texto | |
| latitude, longitude | float | |
| raio_operacao | float | padrão **1000** m (PON-09) |
| capacidade_maxima | float N | comentada como "kg", comparada com unidades (PON-08) |
| tipos_residuos_aceitos | `JSON` | lista; vazia aceita tudo (PON-07) |
| inventario | `JSON` | unidades por material |
| horario_funcionamento | texto N | texto livre; grade em `horarios_disponibilidade` |
| status | texto(20) | `ativo`, `cheio`, `inativo` |
| ativo | int | 0/1, duplica `status` (PON-13) |
| cooperativa_id | FK→usuario N | dono **e** cooperativa (PON-01) |
| data_final | timestamp N | só fim; sem início nem tipo (PON-14) |
| data_criacao, data_atualizacao | timestamp | |

## horarios_disponibilidade

| Coluna | Tipo |
|---|---|
| id | int PK |
| ponto_coleta_id | FK `ON DELETE CASCADE` |
| dia_semana | int |
| hora_abertura, hora_fechamento | hora |

## solicitacao_coleta

| Coluna | Tipo | Observação |
|---|---|---|
| id | int PK | |
| admin_id, cooperativa_id | FK→usuario | ambos obrigatórios; `RESTRICT` |
| ponto_coleta_id | FK | `RESTRICT` |
| status | texto(30) | `solicitada`, `aceita`, `concluida`, `recusada` |
| percentual_ocupacao, quantidade_inventario, capacidade_maxima | float | foto no momento do pedido |
| inventario_solicitado | `JSON` | foto do estoque (causa de F-04) |
| quantidade_coletada | float N | |
| pesos_reais | `JSON` N | sem validação (F-05) |
| observacao, motivo_recusa | texto N | |
| data_solicitacao, data_aceite, data_conclusao, data_atualizacao | timestamp | |

Sem operador de aceite/conclusão, sem estado `em_execucao`, sem estado `pedida` (responsável).

## solicitacao_ponto_coleta (cadastro público de ponto)

Campos de solicitante (`tipo_solicitante`, `documento`, `responsavel_nome`, `responsavel_telefone`, `email`, **`senha_hash`**), dados do ponto (`nome_ponto`, `endereco`, `latitude`, `longitude`, `horario_funcionamento`, `tipos_residuos_aceitos`, `capacidade_maxima`), revisão (`status` com `CHECK`, `motivo_rejeicao`, `observacao_admin`, `revisado_por_id`, `revisado_em`), vínculos (`usuario_id`, `ponto_coleta_id`) e datas.

## agendas

| Coluna | Tipo |
|---|---|
| id | int PK |
| ponto_coleta_id | FK |
| data | data |
| turno_id | texto(50) |
| status | texto(50), padrão `agendado` |

Sem ligação com a solicitação de coleta nem com a cooperativa.

## Tabelas sem uso claro

| Tabela | Colunas | Situação |
|---|---|---|
| estoque | `id_estoque` PK, `tipo_residuo` U, `quantidade_total` float, `ultima_atualizacao` | Sem FK. `[VERIFICAR]` se alguma rota a lê |
| qrcode_token | `id` PK, `token` U(36), `ponto_coleta_id` FK, `data_geracao`, `data_expiracao`, `ativo`, `descarte_id` FK | Nenhuma rota usa; V6 proíbe QR |
| cooperativa | `id` PK, `nome_razaoSocial`, `cnpj_cpf` U, `endereco`, `telefone`, `email`, `residuos_aceitos`, `agenda_funcionamento`, `historico_coleta`, `status` | Nenhuma rota usa; relacionamento quebrado |
