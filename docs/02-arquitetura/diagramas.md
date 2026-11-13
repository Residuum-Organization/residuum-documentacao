# Diagramas de fluxo e de estado

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 13/11/2026
> **Fontes:** estados gravados no código (branch `feature/mor-025-026-vouchers-sorteios`) e propostas S2, A1, C4, P4 das análises. ER em [modelo-de-dados](modelo-de-dados.md).
> **Lacunas:** 3

## Resumo

Cada estado abaixo aparece em dois diagramas: **hoje** (o que o código grava) e **novo desenho** (aprovado). Os novos desenhos seguem as decisões de 11/11/2026: **o operador do ponto confirma** ([PD-006 / PD-027](../01-planejamento/decisoes/pd-006.md)) e **a confirmação é final**, sem estorno ([PD-010](../01-planejamento/decisoes/pd-010.md)). Toda transição inválida deve responder **409**.

## 1. Descarte

**Hoje** (valores encontrados no código; `concluido` existe em código sem uso):

```mermaid
stateDiagram-v2
  [*] --> pendente: usuário envia (credita e baixa estoque)
  pendente --> confirmado: operador confirma (credita e baixa de novo)
  pendente --> rejeitado: operador rejeita (não estorna, não devolve)
  confirmado --> revertido: admin reverte (estorna parte)
```

**Novo desenho:**

```mermaid
stateDiagram-v2
  [*] --> pendente: usuário entrega com GPS válido (reserva o item, sem pontos)
  pendente --> confirmado: operador confirma (credita 10 pontos 1 vez, baixa a reserva)
  pendente --> rejeitado: operador rejeita, com motivo (o item volta)
  confirmado --> [*]: final (erro posterior vira ajuste manual do admin, fora do descarte)
  note right of pendente: envios do mesmo usuário no mesmo ponto em 60 min viram um só descarte
```

## 2. Sorteio

**Hoje:** `ativo → encerrado`. O admin encerra por `PUT` e apura antes da data; excluir apaga os bilhetes.

**Novo desenho:**

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

**Novo desenho:**

```mermaid
stateDiagram-v2
  [*] --> pedida: responsável pede
  pedida --> solicitada: admin encaminha
  solicitada --> aceita: cooperativa aceita
  solicitada --> recusada: cooperativa recusa, com motivo
  solicitada --> expirada: sem resposta em 48 h, volta ao admin
  aceita --> aceita: cooperativa reagenda (uma vez) e o ponto confirma
  aceita --> em_execucao: cooperativa marca "a caminho"
  solicitada --> cancelada: admin ou cooperativa cancela, com motivo
  aceita --> cancelada: admin ou cooperativa cancela, com motivo
  em_execucao --> cancelada: admin ou cooperativa cancela, com motivo
  em_execucao --> registrada: concluir (baixa só o que levou, por material; o resto fica no ponto)
```

## 4. Conta

**Hoje:** uma conta existe ou não. Não há desativar.

**Novo desenho:**

```mermaid
stateDiagram-v2
  [*] --> ativo: cadastro aberto, se houver vaga no teto (500, configurável)
  ativo --> desativado: admin desativa (sessões caem)
  desativado --> ativo: admin reativa
  ativo --> anonimizado: exclusão (LGPD) [PD-022], devolve a vaga
  desativado --> anonimizado: devolve a vaga
```

## 5. Entrega do usuário (sequência)

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

O fluxo atual está no [SAD](sad.md#fluxo-principal-entrega-do-usuário-como-é-hoje). Envios do mesmo usuário no mesmo ponto em 60 minutos viram **um** descarte e **10 pontos** ([PD-010](../01-planejamento/decisoes/pd-010.md)).

## 6. Pedido de coleta pelo responsável (sequência)

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

## 7. Pagamento à cooperativa no piloto (decidido em 11/11/2026)

```mermaid
sequenceDiagram
  participant C as Cooperativa
  participant A as API
  participant D as Admin
  participant B as Banco da Residuum
  C->>A: registra a coleta (peso por material)
  A-->>D: valor = kg × valor do material
  D->>B: paga fora do sistema (Pix ou TED)
  D->>A: marca "pago" e anexa o comprovante
```

Pagamento por API vem depois ([PD-016](../01-planejamento/decisoes/pd-016.md)). Valor por kg de cada material: `[LACUNA]` ([PD-015](../01-planejamento/decisoes/pd-015.md)).

## 8. Campanha com dobro de pontos (decidido em 11/11/2026)

```mermaid
stateDiagram-v2
  [*] --> aberta: admin publica (só PET e lata)
  aberta --> participando: usuário aperta "Participar"
  participando --> meta_cumprida: N descartes do material, contados depois da adesão
  meta_cumprida --> recebido: usuário aperta "Receber pontos" (10 × N)
```

Descartes no mesmo ponto em 60 minutos contam como **um** na meta. Ver [regras de campanhas](../requisitos/regras-de-campanhas.md).

## O que falta para fechar

- [ ] `[VERIFICAR]` quais transições existem de fato em cada rota (ex.: quem pode `revertido`)
