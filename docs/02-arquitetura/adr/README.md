# Decisões de arquitetura (ADR)

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 11/11/2026
> **Fontes:** propostas S1 a S10, P1 a P13, A1 a A14 e C1 a C11 das análises por módulo.

## Resumo

Uma ADR registra **uma decisão técnica, o motivo e o que muda**. As cinco foram **aceitas em 11/11/2026** por Vinicius, ajustadas às decisões do dia. **Nenhuma foi implementada** ainda.

Estados: **proposta** → **aceita** → **substituída** ou **rejeitada**.

| ADR | Decisão | Estado | Depende de |
|---|---|---|---|
| [0001](0001-livro-unico-de-pontos.md) | Livro único de pontos | **aceita** (11/11) | [PD-010](../../01-planejamento/decisoes/pd-010.md) |
| [0002](0002-vinculo-entre-usuario-e-ponto.md) | Vínculo entre usuário e ponto | **aceita** (11/11) | [PD-023](../../01-planejamento/decisoes/pd-023.md) |
| [0003](0003-idempotencia-nas-escritas.md) | Idempotência nas escritas | **aceita** (11/11) | — |
| [0004](0004-estados-no-backend.md) | Estados no backend | **aceita** (11/11) | [PD-006](../../01-planejamento/decisoes/pd-006.md), [PD-013](../../01-planejamento/decisoes/pd-013.md) |
| [0005](0005-conta-com-ciclo-de-vida.md) | Conta com ciclo de vida | **aceita** (11/11) | [PD-001](../../01-planejamento/decisoes/pd-001.md), [PD-022](../../01-planejamento/decisoes/pd-022.md) |

## Molde

Contexto (o problema) → Decisão → Consequências (o que melhora e o que custa) → Alternativas → Estado e dependências.
