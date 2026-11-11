# Modelo de dados

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Fonte:** código do backend, branch `feature/mor-025-026-vouchers-sorteios` (commit `11f0d8e`, 22/10/2026), lido dos arquivos `app/models/*.py` e das 34 migrações Alembic. **Não foi executado contra um banco PostgreSQL.**
> **Lacunas:** 3 · Dicionário de colunas em [dados/](dados/README.md).

## Resumo

O banco tem **27 tabelas** em 5 grupos. Todas as regras de negócio importantes ainda dependem do código, não do banco: poucas tabelas têm restrições únicas ou `CHECK`. As maiores fragilidades são o **saldo de pontos** (sem lançamento com origem nos créditos), o **vínculo do ponto** (um único campo `cooperativa_id` serve a dois papéis) e o uso de **JSON** para estoque e materiais.

**Qual branch é "o banco"?** A `main` do backend parou em 28/07/2026. As tabelas de campanhas, vouchers, sorteios e as colunas de idempotência só existem nas branches de feature (ainda sem PR). Este documento descreve a mais completa. Ver [mapa de branches](../tecnologia/mapa-de-branches.md).

| Onde | Migrações | Cabeça única |
|---|---|---|
| `feature/mor-025-026-vouchers-sorteios` (esta) | 34 | `d3f9b81a6e25` |
| `feature/mor-023-024-campanhas` (checkout local) | 32 | `a41c7e92d5b3` `[VERIFICAR]` |
| `main` | `[LACUNA]` não contada | — |

## Visão geral (ER)

```mermaid
erDiagram
  ENDERECO ||--o{ USUARIO : "mora em"
  USUARIO ||--o{ PONTUACAO : "ganha"
  USUARIO ||--o{ RESGATE_PONTUACAO : "gasta"
  USUARIO ||--o{ INVENTARIO_USUARIO : "guarda"
  USUARIO ||--o{ DESCARTE : "faz"
  USUARIO ||--o{ TRANSFERENCIA_LOTE : "envia"
  INVENTARIO_USUARIO ||--o{ DESCARTE : "origina"
  TRANSFERENCIA_LOTE ||--o{ DESCARTE : "agrupa"
  PONTO_COLETA ||--o{ DESCARTE : "recebe"
  PONTO_COLETA ||--o{ HORARIOS_DISPONIBILIDADE : "abre"
  PONTO_COLETA ||--o{ SOLICITACAO_COLETA : "gera"
  PONTO_COLETA ||--o{ AGENDAS : "agenda"
  PONTO_COLETA ||--o{ QRCODE_TOKEN : "emite (sem uso)"
  USUARIO |o--o{ PONTO_COLETA : "cooperativa_id"
  USUARIO ||--o{ SOLICITACAO_COLETA : "admin_id e cooperativa_id"
  SOLICITACAO_PONTO_COLETA }o--o| PONTO_COLETA : "vira"
  SORTEIOS ||--o{ BILHETE_SORTEIO : "vende"
  USUARIO ||--o{ BILHETE_SORTEIO : "compra"
  VOUCHERS ||--o{ VOUCHER_CODIGO : "estoca"
  VOUCHERS ||--o{ RESGATE_VOUCHER : "resgatado em"
  USUARIO ||--o{ RESGATE_VOUCHER : "resgata"
  RESGATE_VOUCHER |o--o| VOUCHER_CODIGO : "entrega"
  CAMPANHAS ||--o{ CAMPANHA_REQUISITO : "exige"
  CAMPANHAS ||--o{ CAMPANHA_MECANICA : "bonifica"
  CAMPANHAS ||--o{ INSCRICAO_CAMPANHA : "tem"
  USUARIO ||--o{ INSCRICAO_CAMPANHA : "participa"
  INSCRICAO_CAMPANHA ||--o{ CAMPANHA_BONUS : "recebe"
  USUARIO ||--o{ AUDIT_LOG : "admin_id"
  USUARIO |o--o{ NOTIFICACOES : "avisa"
```

## Grupos de tabelas

| Grupo | Tabelas | Dicionário |
|---|---|---|
| Pessoas e pontos | `usuario`, `endereco`, `pontuacao`, `resgate_pontuacao`, `audit_log`, `notificacoes` | [pessoas-e-pontos](dados/pessoas-e-pontos.md) |
| Entrega e coleta | `inventario_usuario`, `transferencia_lote`, `descarte`, `ponto_coleta`, `horarios_disponibilidade`, `solicitacao_coleta`, `solicitacao_ponto_coleta`, `agendas`, `estoque`, `qrcode_token`, `cooperativa` | [entrega-e-coleta](dados/entrega-e-coleta.md) |
| Loja | `vouchers`, `voucher_codigo`, `resgate_voucher`, `sorteios`, `bilhete_sorteio`, `campanhas`, `campanha_requisito`, `campanha_mecanica`, `inscricao_campanha`, `campanha_bonus` | [loja](dados/loja.md) |

## Estados gravados hoje

| Entidade | Valores encontrados no código |
|---|---|
| `descarte.status` | `pendente`, `confirmado`, `rejeitado`, `revertido`; `concluido` aparece em código sem uso |
| `transferencia_lote.status` | `pendente` |
| `inventario_usuario.status` | `disponivel`, `em_transferencia`, `finalizado` (o comentário do modelo diz `cancelado`) |
| `ponto_coleta.status` | `ativo`, `cheio`, `inativo` (e o campo `ativo` 0/1 duplica a informação) |
| `solicitacao_coleta.status` | `solicitada`, `aceita`, `concluida`, `recusada` |
| `solicitacao_ponto_coleta.status` | `pendente`, `aprovada`, `rejeitada`, `cancelada` (único com `CHECK`) |
| `sorteios.status` | `ativo`, `encerrado` |
| `vouchers.status` / `resgate_voucher.status` | `ativo`, `inativo` / `ativo` |
| `campanhas.status` | `ativa` (e `encerrada` por exclusão lógica proposta) `[VERIFICAR]` |
| `resgate_pontuacao.origem` | `resgate`, `voucher`, `sorteio` |

Apenas um status tem `CHECK` no banco. Os demais aceitam qualquer texto.

## Regras que o banco já garante

| Regra | Tabela | Mecanismo |
|---|---|---|
| E-mail único | `usuario` | `UNIQUE` |
| 1 bilhete por usuário por sorteio | `bilhete_sorteio` | `UNIQUE (sorteio_id, usuario_id)` |
| Número do bilhete único no sorteio | `bilhete_sorteio` | `UNIQUE (sorteio_id, numero)` |
| Idempotência de bilhete, voucher e lote | `bilhete_sorteio`, `resgate_voucher`, `transferencia_lote` | `UNIQUE (usuario_id, chave_idempotencia)` |
| Código de voucher único no sistema | `voucher_codigo`, `resgate_voucher` | `UNIQUE (codigo)` |
| Uma inscrição por campanha e usuário | `inscricao_campanha` | `UNIQUE` |
| Bônus pago uma vez por mecânica | `campanha_bonus` | `UNIQUE (inscricao_id, mecanica)` |
| Item com código de barras ou sem rótulo | `inventario_usuario` | `CHECK` de identificação |

## Regras que o banco **não** garante

Todas as abaixo dependem só do código (e por isso falham em concorrência ou fora das rotas):

- **Saldo = soma dos lançamentos.** `usuario.pontuacao_total` é um número solto; `pontuacao` não tem origem nem referência.
- **Um crédito por descarte.** Nada impede dois lançamentos para o mesmo descarte.
- **Saldo nunca negativo.** Sem `CHECK`.
- **Quantidades inteiras.** `descarte.quantidade` e `inventario_usuario.quantidade` são `Float`.
- **Materiais válidos.** `tipo_residuo` é texto livre.
- **Uma solicitação de coleta ativa por ponto.** Só no código da rota.
- **Histórico preservado ao apagar.** `sorteios → bilhete_sorteio` e `campanhas → inscricao_campanha → campanha_bonus` apagam em cascata.

## Achados da leitura do código

| # | Achado | Efeito |
|---|---|---|
| 1 | Tabela `cooperativa` (model `Cooperativa`) **não é usada** por nenhuma rota; seu `relationship` aponta para um nome que `PontoColeta` não tem | Código morto que parece cadastro de cooperativa. Cooperativa de verdade é `usuario.role = 'cooperativa'` |
| 2 | `ponto_coleta.cooperativa_id` aponta para `usuario` e serve a cooperativa **e** ao responsável do ponto | Não há vínculo N:N nem separação de papéis (PD-023) |
| 3 | `qrcode_token` existe, mas a V6 proíbe QR (RN-006) | Dívida técnica; `descarte` e `ponto_coleta` ainda a referenciam |
| 4 | `estoque` guarda total por tipo, sem FK | Sem uso claro nas fontes `[VERIFICAR]` |
| 5 | `ponto_coleta.inventario` e `tipos_residuos_aceitos` são JSON | Sem integridade; estoque do ponto não é consultável por SQL |
| 6 | `solicitacao_coleta.inventario_solicitado` guarda uma "foto" do estoque em JSON | Causa do achado F-04 (zerar pelo snapshot) |
| 7 | `descarte.usuario_id` é nulo-permitido; `descarte` tem coordenadas do ponto copiadas | Dados duplicados que podem divergir do cadastro |
| 8 | Tabelas no plural (`sorteios`, `vouchers`, `campanhas`) e no singular (`usuario`, `descarte`) | Inconsistência de nomes |

## Modelo proposto (resumo)

Colunas e tabelas novas propostas nas análises: ledger em `pontuacao` (origem, referência, chave), `usuario.ativo` e `token_version`, `convite`, `recuperacao_senha`, `vinculo_operacional`, `coleta_item`, `resultado_sorteio`, `lead_ponto_coleta`, `pagamento`, `plano`. Detalhes e justificativas em [ADRs](adr/README.md). Nada disso existe no código.

## O que falta para fechar

- [ ] `[VERIFICAR]` subir o banco, aplicar as 34 migrações e comparar o esquema físico com este documento
- [ ] `[LACUNA]` contar migrações e conferir a cabeça da `main` do backend
- [ ] `[LACUNA]` decidir o que fazer com `cooperativa`, `qrcode_token` e `estoque` (remover ou usar)
- [ ] Atualizar quando a branch for mesclada na `main`
