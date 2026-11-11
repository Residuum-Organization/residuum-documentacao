# Decisões de arquitetura (ADR)

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Fontes:** propostas S1 a S10, P1 a P13, A1 a A14 e C1 a C11 das análises por módulo.

## Resumo

Uma ADR registra **uma decisão técnica, o motivo e o que muda**. Todas abaixo estão como **proposta**: nenhuma foi aceita pela equipe nem implementada. Quando alguém aceitar, troque o estado e anote data e responsável.

Estados: **proposta** → **aceita** → **substituída** ou **rejeitada**.

| ADR | Decisão | Estado | Depende de |
|---|---|---|---|
| [0001](0001-livro-unico-de-pontos.md) | Livro único de pontos | proposta | [PD-010](../../01-planejamento/decisoes/pd-010.md) |
| [0002](0002-vinculo-entre-usuario-e-ponto.md) | Vínculo entre usuário e ponto | proposta | [PD-023](../../01-planejamento/decisoes/pd-023.md) |
| [0003](0003-idempotencia-nas-escritas.md) | Idempotência nas escritas | proposta | — |
| [0004](0004-estados-no-backend.md) | Estados no backend | proposta | [PD-006](../../01-planejamento/decisoes/pd-006.md), [PD-013](../../01-planejamento/decisoes/pd-013.md) |
| [0005](0005-conta-com-ciclo-de-vida.md) | Conta com ciclo de vida | proposta | [PD-001](../../01-planejamento/decisoes/pd-001.md), [PD-022](../../01-planejamento/decisoes/pd-022.md) |

## Molde

Contexto (o problema) → Decisão → Consequências (o que melhora e o que custa) → Alternativas → Estado e dependências.
