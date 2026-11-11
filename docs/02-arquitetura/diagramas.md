# Diagramas de fluxo e de estado

> **Estado:** esboço · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Fontes:** propostas S2 (descarte), A1 (sorteio), C4 (coleta), P4 (pedido de coleta).
> Os diagramas mostram o **desenho proposto**, não o comportamento atual. `[DECISÃO: D2]` define o ator da confirmação.

## Resumo

Quatro máquinas de estado explicam quase todas as regras do sistema. Cada transição inválida deve responder **409**.

## 1. Descarte

```mermaid
stateDiagram-v2
  [*] --> pendente: morador entrega (GPS válido) — reserva o item
  pendente --> confirmado: operador confirma — credita pontos 1 vez
  pendente --> rejeitado: operador rejeita — item volta
  confirmado --> revertido: admin reverte — estorna o valor gravado
```

## 2. Sorteio

```mermaid
stateDiagram-v2
  [*] --> rascunho
  rascunho --> publicado: publicar
  publicado --> encerrado: data_fim passou
  encerrado --> apurado: admin apura
  publicado --> cancelado: cancelar (devolve pontos)
  encerrado --> cancelado: cancelar (devolve pontos)
```

## 3. Solicitação de coleta

```mermaid
stateDiagram-v2
  [*] --> pedida: responsável pede
  pedida --> solicitada: admin encaminha
  solicitada --> aceita: cooperativa aceita
  solicitada --> recusada: cooperativa recusa [DECISÃO D-C2]
  aceita --> em_execucao: iniciar
  em_execucao --> registrada: concluir (baixa por material)
```

## 4. Entrega pelo morador (sequência)

```mermaid
sequenceDiagram
  participant M as Morador
  participant A as API
  participant O as Operador
  M->>A: POST entrega (GPS novo + Idempotency-Key)
  A-->>M: pendente (sem pontos)
  O->>A: PUT confirmar (quantidade ≤ declarada)
  A->>A: baixa reserva + 1 lançamento no ledger
  A-->>M: pontos creditados
```

## O que falta para fechar

- [ ] Diagrama de contas (convite → ativo → desativado → anonimizado)
- [ ] Diagrama de pagamento `[DECISÃO: D8]`
- [ ] `[VERIFICAR NO CÓDIGO]` estados reais gravados hoje (ex.: `concluida` × `registrada`)
