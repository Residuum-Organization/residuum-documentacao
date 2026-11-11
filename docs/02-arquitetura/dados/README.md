# Dicionário de dados

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Fonte:** `app/models/*.py` da branch `feature/mor-025-026-vouchers-sorteios` (commit `11f0d8e`). Visão geral e ER em [modelo-de-dados](../modelo-de-dados.md).

## Resumo

Uma tabela por bloco, com coluna, tipo e observação. Só aparecem as colunas relevantes para entender a regra; chaves, `nullable` e restrições estão indicadas.

Convenções: **PK** chave primária · **FK→x** chave estrangeira · **N** aceita nulo · **U** único · `JSON` coluna JSON.

| Arquivo | Tabelas |
|---|---|
| [pessoas-e-pontos](pessoas-e-pontos.md) | usuario, endereco, pontuacao, resgate_pontuacao, audit_log, notificacoes |
| [entrega-e-coleta](entrega-e-coleta.md) | inventario_usuario, transferencia_lote, descarte, ponto_coleta, horarios_disponibilidade, solicitacao_coleta, solicitacao_ponto_coleta, agendas, estoque, qrcode_token, cooperativa |
| [loja](loja.md) | vouchers, voucher_codigo, resgate_voucher, sorteios, bilhete_sorteio, campanhas e tabelas ligadas |
