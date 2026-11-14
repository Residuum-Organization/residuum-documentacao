# PRD / Especificação de Requisitos

> **Estado:** revisão · **Dono:** Produto · **Atualizado em:** 11/11/2026
> **Fontes:** V6 ([por módulo](requisitos/README.md)), [regras de saldo, vouchers e sorteios](../requisitos/regras-de-saldo-vouchers-sorteios.md) (22/10), [regras de campanhas](../requisitos/regras-de-campanhas.md) (21/10), [regras de negócio](../requisitos/regras-de-negocio.md), análises dos 4 módulos.
> **Pendências:** reunidas em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md)

## Resumo

Este é o **índice mestre dos requisitos**. Ele não repete a V6: diz **qual documento vale para cada assunto** e **onde as fontes se contradizem**. Regra de precedência: **o documento mais recente decidido pelo time vence a V6**, até o produto validar formalmente. Nenhuma das decisões do time de 21 e 22/10 foi validada pelo produto. As respostas de Vinicius em 11/11/2026 (pontos, confirmação, acesso, vínculo, sorteio) já estão aplicadas aqui.

## Quem vale para quê

| Assunto | Documento que vale | Observação |
|---|---|---|
| Pontos por descarte | [PD-010](decisoes/pd-010.md) e V6 (RN-008) | **10 pontos por descarte concluído**, por operação (decidido em 11/11/2026). Os 5 por unidade de 22/10 viraram histórico |
| Campanhas | [Regras de campanhas](../requisitos/regras-de-campanhas.md) | Participar é grátis; bônus separado; pagamento pelo botão "Receber pontos" |
| Vouchers e sorteios | Saldo, vouchers e sorteios | Sorteio **só de teste**, 1 bilhete por usuário |
| Todo o resto | [V6 por módulo](requisitos/README.md) | M01 a M11 e RNF |
| Resumo das regras | [Regras de negócio](../requisitos/regras-de-negocio.md) | Guia de leitura; diz 10 pontos, **de acordo** com a decisão de 11/11 |

## Contradições entre as fontes e como foram resolvidas

| # | Tema | Fonte A | Fonte B | Resolução |
|---|---|---|---|---|
| 1 | Valor do ponto | V6 RF-021, handoff, regras de negócio: 10 por descarte, **não** por embalagem | Saldo: 5 por unidade (decidido 22/10) | **Resolvido em 11/11: vale 10 por descarte.** Corrigir regras de saldo, campanhas e o código ([PD-010](decisoes/pd-010.md)) |
| 2 | Materiais | V6 RN-003: só PET e lata | Campanhas aceita plástico, metal, papel, vidro, orgânico, eletrônico | **Resolvido em 11/11:** no início, campanhas usam **só `pet` e `lata`**. Outros materiais ficam para o futuro, junto com a expansão dos pontos ([PD-011](decisoes/pd-011.md)) |
| 3 | Quem confirma o descarte | V6 RF-019: o **usuário** confirma | Código e saldo: o **operador** confirma | **Resolvido em 11/11: o operador confirma**; o GPS só libera o envio |
| 4 | Crédito da campanha | Campanha: só pelo botão "Receber pontos" | V6 RF-022: "apurar e registrar bônus", sem dizer se é automático | **Resolvido em 11/11: pelo botão "Receber pontos"**, como nas regras de campanhas. **O bônus não recebido até o fim da campanha se perde** (12/11) |
| 5 | Idempotência | V6 RF-021: toda repetição recupera o resultado | Saldo: só voucher e bilhete usam `Idempotency-Key` | **Resolvido:** estender o `Idempotency-Key` ao descarte ([ADR-0003](../02-arquitetura/adr/0003-idempotencia-nas-escritas.md)) |
| 6 | Crédito do descarte | V6/saldo: uma vez, na confirmação | Código atual credita no envio **e** na confirmação (F01) | **Resolvido:** credita uma vez, na confirmação ([ADR-0001](../02-arquitetura/adr/0001-livro-unico-de-pontos.md)). O código ainda precisa ser corrigido (PR-1) |

## Requisitos por perfil (visão resumida)

Legenda: ✅ conforme · ❌ violada pelo código · ⏳ não implementada · ❓ depende de decisão

### Usuário
| ID | Regra | Código hoje |
|---|---|---|
| RN-001 | Cadastro **aberto**; o controle é um **teto de 500 contas** (configurável; pode subir a 1000), com trava de vagas no banco; conta excluída devolve a vaga; sem vagas, lista de espera (revisto em 12/11) | ❌ aberto |
| RN-003 | Só PET e lata, unidades inteiras | ❌ aceita outros materiais e decimais |
| RN-004 | Registrar item não dá pontos | ✅ |
| RN-006 | Presença por GPS recente, sem QR; **raio de 100 m ajustável por ponto** (decidido em 11/11) | ❌ raio fixo de 1000 m, sem idade da posição |
| RN-007 | Baixa de estoque só na confirmação | ❌ baixa dupla no lote |
| RN-008 | Pontos uma única vez, na confirmação do operador, **10 por descarte**; descartes no mesmo ponto em 60 min contam como um | ❌ crédito em dobro; ❌ paga 5 por unidade |
| RF-005/008 | Acesso desabilitado é negado | ❌ sem campo `ativo` |
| RF-006 | Recuperar acesso por token de uso único | ⏳ |
| RF-021 | Repetir operação não repete efeito | ❌ no descarte; ✅ em voucher e bilhete |
| PD-010 | Descarte confirmado é final: sem estorno; erro vira ajuste do admin | ❌ ainda há estorno |
| RF-023 | Extrato com origem de cada lançamento | ❌ só débitos têm origem |
| RN-019a | Voucher: código do parceiro, validade em dias, estoque pelo admin | ✅ |
| RN-019b | Sorteio: 1 bilhete, descarte com GPS, só teste | ✅ no usuário; ❌ admin apura antes do fim |

### Responsável pelo ponto (vínculo N:N, gerido pelo admin: [PD-023](decisoes/pd-023.md))
| ID | Regra | Código hoje |
|---|---|---|
| RN-011 | Pontos cadastrados **só pelo admin** (confirmado em 11/11, contra o pedido aberto do levantamento de abril) | ❌ há pedido público sem login (`/solicitacoes-pontos-coleta`) |
| RF-034 | Responsável edita materiais, com autoria | ❌ |
| RN-012 | Responsável pede coleta ao admin | ⏳ |
| RF-032 | Temporário tem início e fim | ❌ só fim |
| RN-007 | Ponto incompatível não conclui entrega | ❌ lista vazia aceita tudo |

### Cooperativa
| ID | Regra | Código hoje |
|---|---|---|
| RN-011 | Só o admin cria cooperativa | ❌ **cadastro público** (crítico) |
| RN-013 | Só a cooperativa atribuída aceita | ✅ |
| RN-015 | Coleta parcial não zera o ponto (**decidido em 11/11: coleta parcial permitida**) | ❌ o código zera o ponto inteiro |
| RN-016 | Pesagem não gera pontos | ✅ |
| RN-014 | Rota e horário previstos | ⏳ |

### Administrador
| ID | Regra | Código hoje |
|---|---|---|
| RF-004 | Admin cadastra usuário | ⏳ |
| RN-019b | Só o admin apura, depois do fim | ❌ apura antes |
| RN-017/018 | Pagamento à cooperativa: **manual com comprovante no piloto**, API depois; pagador Residuum; valor por kg e material (11/11) | ⏳ |
| RN-020 | Relatórios por plano | ⏳ |

## Requisitos não funcionais

| Tema | Requisito (V6) | Situação |
|---|---|---|
| Integridade | Saldo = soma dos lançamentos (RNF-003) | ❌ |
| Concorrência | Trava de linha em créditos e débitos | ❌ créditos sem trava; ✅ débitos |
| Segurança | Sessão revogável (RNF-002) | ❌ |
| Privacidade | Dados mínimos por perfil (RNF-005) | ❌ cooperativa vê dados de todos |
| Disponibilidade e backup | RNF-007 a 011 | `[LACUNA]` depende de [PD-026](decisoes/pd-026.md) |
| Desempenho e dispositivos | RNF-001 e 006 | `[LACUNA]` depende de [PD-025](decisoes/pd-025.md) |

Texto completo: [requisitos não funcionais](requisitos/08-requisitos-nao-funcionais.md).

## Rastreabilidade

Requisito → atividade (`TSK-…`) → achado (F, F-, PON, ADM) → caso de teste. Atividades em [backlog](backlog/README.md); decisões em [decisões](decisoes/README.md).

## O que falta para fechar

- [ ] Alterar o código do backend: 10 por descarte, janela de 60 min, dobro em descartes, sem estorno de confirmado, vínculo N:N, teto de contas
- [ ] Arquivar `backend/docs/requisitos.md` e `frontend/docs/requisitos.md` (duplicatas, fora deste repositório)
- [ ] Marcar a V6 original como histórico
