# ADR-0004 — Estados no backend

[Voltar ao índice](README.md)

> **Estado:** proposta · **Origem:** soluções S2 (descarte), A1 (sorteio), C4 (coleta) · **Depende de:** [PD-006](../../01-planejamento/decisoes/pd-006.md), [PD-013](../../01-planejamento/decisoes/pd-013.md), [PD-014](../../01-planejamento/decisoes/pd-014.md)

## Contexto

Os status são texto livre (só `solicitacao_ponto_coleta` tem `CHECK`). O `PUT` do sorteio aceita qualquer campo, inclusive `status`; o front encerra o sorteio por `PUT` e o admin apura antes da data. O descarte tem **três fluxos** de confirmação. Ver F01 a F04, ADM-01, ADM-02, F-08.

## Decisão

1. Cada entidade com ciclo de vida tem uma **tabela de transições permitidas** no backend e uma função `transicionar(entidade, para)`.
2. O `PUT` **nunca** muda o estado; cada mudança é um endpoint próprio (`publicar`, `cancelar`, `sortear`, `aceitar`, `iniciar`, `concluir`).
3. Transição inválida → **409**. Cada transição grava autor, data e, quando for o caso, motivo.
4. `CHECK` no banco lista os valores válidos.
5. "Encerrado" do sorteio é **derivado** da data, não gravado por clique.
6. Nada com movimento de pontos é apagado: cancela, arquiva ou anonimiza.

Desenhos em [diagramas](../diagramas.md).

## Consequências

- **Melhora:** regras auditáveis; o front deixa de ser a única barreira.
- **Custa:** migração de valores antigos (`concluida` → `registrada`, `ativo` → `publicado`) e novas rotas.

## Alternativas

- Biblioteca de máquina de estados: adiciona dependência para poucas entidades.
- Manter texto livre: a causa de vários achados críticos.
