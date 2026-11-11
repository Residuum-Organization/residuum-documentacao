# Diagramas de fluxo e de estado

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Fontes:** estados gravados no código (branch `feature/mor-025-026-vouchers-sorteios`) e propostas S2, A1, C4, P4 das análises. ER em [modelo-de-dados](modelo-de-dados.md).
> **Lacunas:** 3

## Resumo

Cada estado abaixo aparece em dois diagramas: **hoje** (o que o código grava) e **proposto** (o desenho das análises). Os propostos dependem das decisões do produto; o ator da confirmação (operador ou usuário) é a [PD-006 / PD-027](../01-planejamento/decisoes/pd-006.md). Toda transição inválida deve responder **409**.

## 1. Descarte

**Hoje** (valores encontrados no código; `concluido` existe em código sem uso):

```mermaid
stateDiagram-v2
  [*] --> pendente: usuário envia (credita e baixa estoque)
  pendente --> confirmado: operador confirma (credita e baixa de novo)
  pendente --> rejeitado: operador rejeita (não estorna, não devolve)
  confirmado --> revertido: admin reverte (estorna parte)
```

**Proposto:**

```mermaid
stateDiagram-v2
  [*] --> pendente: usuário entrega com GPS válido (reserva o item, sem pontos)
  pendente --> confirmado: operador confirma (credita 1 vez, baixa a reserva)
  pendente --> rejeitado: operador rejeita, com motivo (o item volta)
  confirmado --> revertido: admin reverte (estorna o valor gravado)
```

## 2. Sorteio

**Hoje:** `ativo → encerrado`. O admin encerra por `PUT` e apura antes da data; excluir apaga os bilhetes.

**Proposto:**

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

**Hoje:** `solicitada → aceita → concluida`, e `solicitada → recusada`.

**Proposto:**

```mermaid
stateDiagram-v2
  [*] --> pedida: responsável pede
  pedida --> solicitada: admin encaminha
  solicitada --> aceita: cooperativa aceita
  solicitada --> recusada: cooperativa recusa [PD-014]
  aceita --> em_execucao: iniciar
  em_execucao --> registrada: concluir (baixa por material)
```

## 4. Conta

**Hoje:** uma conta existe ou não. Não há desativar.

**Proposto:**

```mermaid
stateDiagram-v2
  [*] --> convidado: admin cria convite
  convidado --> ativo: aceita o convite e define a senha
  ativo --> desativado: admin desativa (sessões caem)
  desativado --> ativo: admin reativa
  ativo --> anonimizado: exclusão (LGPD) [PD-022]
  desativado --> anonimizado
```

## 5. Entrega do usuário (sequência proposta)

```mermaid
sequenceDiagram
  participant M as Usuário
  participant A as API
  participant O as Operador
  M->>A: POST entrega (GPS novo + Idempotency-Key)
  A-->>M: pendente (sem pontos)
  O->>A: PUT confirmar (quantidade ≤ declarada)
  A->>A: baixa a reserva e grava 1 lançamento no livro de pontos
  A-->>M: pontos creditados
```

O fluxo atual está no [SAD](sad.md#fluxo-principal-entrega-do-morador-como-é-hoje).

## 6. Pedido de coleta pelo responsável (sequência proposta)

```mermaid
sequenceDiagram
  participant R as Responsável
  participant A as API
  participant D as Admin
  participant C as Cooperativa
  R->>A: POST pedido de coleta (Idempotency-Key)
  A-->>D: aviso de pedido
  D->>A: encaminha para uma cooperativa
  C->>A: aceita, inicia, conclui (unidades e peso por material)
  A->>A: baixa o estoque do ponto só pelo coletado
```

## O que falta para fechar

- [ ] `[VERIFICAR]` quais transições existem de fato em cada rota (ex.: quem pode `revertido`)
- [ ] `[LACUNA]` diagrama de pagamento (PD-016) e de campanha (adesão → missão → recompensa)
- [ ] `[DECISÃO: PD-006]` ator da confirmação do descarte
