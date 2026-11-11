# Decisões que bloqueiam a documentação definitiva

> **Estado:** revisão · **Dono:** Produto · **Atualizado em:** 10/11/2026
> **Fontes:** [27 decisões PD-001 a PD-027](../01-planejamento/decisoes/README.md), regras de 21 e 22/10, 4 análises por módulo.

## Resumo

Seis decisões travam a versão definitiva do PRD, do manual e dos casos de teste. Duas já têm resposta do **time** (21 e 22/10), mas **o produto ainda não validou**. As outras quatro estão abertas. Sugestão: **30 minutos** de reunião para validar as respostas do time e decidir as quatro abertas.

Numeração: **PD-xxx** é o identificador oficial da V6. A coluna "Análise" liga ao nome usado nos documentos de análise (D1, D2…).

## Bloqueiam (decidir primeiro)

| # | PD | Pergunta | Situação | Recomendação | Trava |
|---|---|---|---|---|---|
| 1 | [PD-010](../01-planejamento/decisoes/pd-010.md) | Quanto vale o ponto? | **Time decidiu 22/10: 5 por unidade confirmada.** Falta validar com o produto e decidir estorno e limite | Validar; corrigir V6, guia e handoff | PRD, manual, testes |
| 2 | [PD-006](../01-planejamento/decisoes/pd-006.md) / [PD-027](../01-planejamento/decisoes/pd-027.md) | Quem confirma o descarte? | Aberta. V6 diz usuário; código usa operador | Operador confirma; GPS só habilita o envio | PRD, API, manual |
| 3 | [PD-010](../01-planejamento/decisoes/pd-010.md) | Estorno maior que o saldo | Aberta | Bloquear (409) e mostrar o déficit | PRD, API |
| 4 | [PD-023](../01-planejamento/decisoes/pd-023.md) | Perfil "responsável pelo ponto" e vínculo | Aberta | Vínculo N:N | PRD, arquitetura, API |
| 5 | [PD-013](../01-planejamento/decisoes/pd-013.md) | Sorteio: cancelar devolve? Algoritmo? | **Time decidiu 22/10: só sorteios de teste, 1 bilhete por usuário.** Cancelar e algoritmo abertos | Cancelar devolve; sha256 com semente nos testes | PRD, manual |
| 6 | [PD-013](../01-planejamento/decisoes/pd-013.md) | Dono do parecer jurídico (Lei 5.768/71) | **Pendência legal aberta**, sem responsável | Nomear pessoa e prazo | Qualquer sorteio real |

## Podem seguir provisórios

| # | PD | Tema | Valor provisório |
|---|---|---|---|
| 7 | [PD-008](../01-planejamento/decisoes/pd-008.md) | GPS | Raio 100 m, precisão 60 m, idade 30 s (a V6 diz que os 100 m da V5 são referência, não parâmetro) |
| 8 | [PD-010](../01-planejamento/decisoes/pd-010.md) | Limite diário | 200 unidades/dia, a medir no piloto |
| 9 | [PD-001](../01-planejamento/decisoes/pd-001.md) / [PD-002](../01-planejamento/decisoes/pd-002.md) | Convite | Obrigatório para novos cadastros, atrás de flag |
| 10 | [PD-003](../01-planejamento/decisoes/pd-003.md) | Recuperação de senha | E-mail |
| 11 | [PD-022](../01-planejamento/decisoes/pd-022.md) | Excluir conta (LGPD) | Anonimizar, não apagar |
| 12 | [PD-014](../01-planejamento/decisoes/pd-014.md) | Recusa e lançamento avulso da cooperativa | Manter recusa com motivo; remover avulso no MVP |
| 13 | [PD-019](../01-planejamento/decisoes/pd-019.md) | Planos e relatórios | Plano único "piloto" |
| 14 | [PD-016](../01-planejamento/decisoes/pd-016.md) | Pagamento à cooperativa | Decidir antes da Sprint 4 |
| 15 | [PD-012](../01-planejamento/decisoes/pd-012.md) | Cancelar voucher e devolver pontos | Manter sem cancelamento no piloto |

## Contradições entre fontes a fechar junto

Lista completa no [PRD](../01-planejamento/prd-srs.md#contradições-entre-as-fontes-a-resolver). As principais: valor do ponto (V6 × saldo), materiais da campanha (6 materiais × só PET e lata) e quem confirma o descarte.

## Ações de registro

- [x] Mesclar as regras de campanhas, de saldo e o mapa de branches (PRs #1 a #3 da organização)
- [x] Fatiar as decisões em um arquivo por PD
- [ ] Reunião de validação com o produto (itens 1 a 6)
- [ ] Registrar as respostas no arquivo de cada PD e na tabela do índice
- [ ] Atualizar V6, handoff e critério da Sprint 1 com o valor do ponto

> [LACUNA] Quem do produto decide cada item e a data da reunião não constam nas fontes.
