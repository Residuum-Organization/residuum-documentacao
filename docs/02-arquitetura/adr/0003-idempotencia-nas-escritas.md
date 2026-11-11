# ADR-0003 — Idempotência nas escritas

[Voltar ao índice](README.md)

> **Estado:** proposta · **Origem:** solução S3 do módulo morador · **Depende de:** nada

## Contexto

Voucher e bilhete já usam o cabeçalho `Idempotency-Key`, e o lote usa `chave_idempotencia` no corpo. O `POST /descarte` e o `POST /inventario/{id}/descartar` não usam chave: cada reenvio por timeout ou clique duplo cria outro descarte. A V6 exige que toda repetição recupere o resultado anterior (RF-021). Ver achado F05.

## Decisão

1. **Um padrão só:** cabeçalho `Idempotency-Key` (8 a 128 caracteres), aceitando também o campo do corpo por uma versão.
2. Mesma chave e mesmo conteúdo → devolve o resultado original (200). Mesma chave com conteúdo diferente → 409. Corrida entre duas chamadas → o `UNIQUE (usuario_id, chave)` barra e a segunda relê.
3. Vale para: descarte, lote, confirmar e rejeitar, cancelar sorteio, ajuste e reversão do admin, pedido de coleta.
4. O front gera uma chave por tentativa e a reaproveita enquanto o conteúdo não muda (já existe `utils/idempotency.js`).

## Consequências

- **Melhora:** reenvio seguro; base para fila offline futura.
- **Custa:** coluna `chave_idempotencia` + índice único em `descarte` e nas outras tabelas.

## Alternativas

- Chave gerada no servidor: não resolve o reenvio.
- Aposentar `POST /descarte` e manter só o lote: possível, se a [PD-006](../../01-planejamento/decisoes/pd-006.md) escolher um único fluxo.
