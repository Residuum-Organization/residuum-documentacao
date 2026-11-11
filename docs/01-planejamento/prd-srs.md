# PRD / Especificação de Requisitos

> **Estado:** esboço · **Dono:** Produto · **Atualizado em:** 10/11/2026
> **Fontes:** V6 (`docs/requisitos/requisitos-mvp-v6.md`), regras de saldo/vouchers/sorteios, 4 análises por módulo.
> **Lacunas:** 8 · **Decisões pendentes:** D1, D2, D3, PD-023

## Resumo

Este documento será a **única fonte** de requisitos. Hoje a V6 e o código divergem em pontos centrais. A tabela abaixo mostra cada regra, de onde vem e se o código a cumpre. A V6 completa (1703 linhas) será fatiada por perfil e ficará como anexo.

Legenda: ✅ conforme · ❌ violada · ⏳ não implementada · ❓ depende de decisão

## Requisitos funcionais por perfil

### Morador
| ID | Regra | Fonte | Código |
|---|---|---|---|
| RN-001 | Cadastro só por convite | V6 | ❌ cadastro aberto |
| RN-003 | Só PET e lata, unidades inteiras | V6 | ❌ aceita papel, vidro; decimais |
| RN-004 | Registrar item não dá pontos | V6 | ✅ |
| RN-006 | Presença por GPS recente, sem QR | V6 | ❌ raio 1000 m, sem idade |
| RN-007 | Selecionar não baixa estoque; baixa só ao confirmar | V6 | ❌ baixa dupla no lote |
| RN-008 | Pontos uma única vez, na confirmação | V6 / saldo | ❌ crédito em dobro `[DECISÃO: D1]` |
| RF-005/008 | Acesso desabilitado é negado | V6 | ❌ sem campo `ativo` |
| RF-006 | Recuperar senha por token de uso único | V6 | ⏳ |
| RF-021 | Repetir operação não repete efeito | V6 | ❌ falta idempotência no descarte |
| RF-023 | Extrato com origem de cada lançamento | V6 | ❌ |

### Responsável pelo ponto `[DECISÃO: PD-023]`
| ID | Regra | Código |
|---|---|---|
| RN-011 | Pontos cadastrados só pelo admin | ❌ cadastro público existe |
| RF-034 | Responsável edita materiais, com auditoria | ❌ |
| RN-012 | Responsável pede coleta ao admin | ⏳ |
| RF-032 | Temporário tem início e fim | ❌ só fim |
| RN-007 | Ponto incompatível não conclui entrega | ❌ lista vazia aceita tudo |

### Cooperativa
| ID | Regra | Código |
|---|---|---|
| RN-011 | Só o admin cria cooperativa | ❌ **cadastro público** (crítico) |
| RN-013 | Só a cooperativa atribuída aceita | ✅ |
| RN-015 | Coleta parcial não zera o ponto | ❌ |
| RN-016 | Pesagem não gera pontos | ✅ |
| RN-014 | Rota e horário previstos | ⏳ |

### Administrador
| ID | Regra | Código |
|---|---|---|
| RF-004 | Admin cadastra morador | ⏳ |
| RN-019b | 1 bilhete por pessoa, só admin apura, após o fim | ❌ apura antes |
| RN-017/018 | Pagamento por API | ⏳ |
| RN-020 | Relatórios por plano | ⏳ |

## Requisitos não funcionais

| Tema | Requisito | Situação |
|---|---|---|
| Integridade | Saldo = soma dos lançamentos | ❌ |
| Concorrência | Trava de linha em créditos e débitos | ❌ créditos sem trava |
| Segurança | Sessão revogável; token fora de `localStorage` | ❌ |
| Privacidade | Cooperativa não vê dados pessoais de outros | ❌ |
| Desempenho, disponibilidade, escala | `[LACUNA]` sem metas nas fontes |
| LGPD | Anonimizar em vez de apagar | ❌ `[DECISÃO: D4]` |

## Rastreabilidade

Cada requisito aponta para: ficha de achado (F01–F23, F-01–F-14, PON-01–16, ADM-01–18) → solução (S/C/P/A) → PR proposto → teste. A planilha completa fica em [backlog](backlog-e-historias.md).

## O que falta para fechar

- [ ] Decisões 1–6 de [decisoes-pendentes](../00-diagnostico/decisoes-pendentes.md)
- [ ] Reescrever RN-008 e RF-019 com o valor e o ator definidos
- [ ] `[LACUNA]` metas de desempenho e disponibilidade
- [ ] Fatiar a V6 em anexos por perfil e arquivar duplicatas (`backend/docs/requisitos.md`, `frontend/docs/requisitos.md`)
