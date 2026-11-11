# Decisões que bloqueiam a documentação definitiva

> **Estado:** esboço · **Dono:** Produto · **Atualizado em:** 10/11/2026
> **Fontes:** decisões D1–D12 dos módulos morador, ponto de coleta, cooperativa e administrador.

## Resumo

Seis decisões travam a versão definitiva do PRD, do manual e dos casos de teste. As demais podem seguir com o valor recomendado, marcado como provisório. Sugestão: **uma reunião de 30 minutos** para as quatro primeiras.

## Bloqueiam (decidir primeiro)

| # | Pergunta | Opções | Recomendação | Trava |
|---|---|---|---|---|
| 1 | Quanto vale o ponto? | 5 por unidade · 10 por operação | 5 por unidade; valor em configuração, gravado em cada lançamento | PRD, manual, testes |
| 2 | Quem confirma o descarte? | Operador do ponto · morador com GPS | Operador confirma; GPS só habilita o envio | PRD, API, manual |
| 3 | Estorno maior que o saldo | Bloquear (409) · saldo negativo · zerar | Bloquear e mostrar o déficit | PRD, API |
| 4 | Perfil "responsável pelo ponto" (PD-023) | Role novo 1:N · vínculo N:N · só renomear | Vínculo N:N | PRD, SAD, API |
| 5 | Sorteio: cancelar devolve? | Sempre · nunca com bilhetes | Sempre devolve; cancelar substitui apagar | PRD, manual |
| 6 | Quem é dono do parecer jurídico (Lei 5.768/71)? | Nomear pessoa e prazo | Nomear agora | Qualquer sorteio real |

## Podem seguir provisórios

| # | Tema | Valor provisório |
|---|---|---|
| 7 | GPS (PD-008) | Raio 100 m · precisão 60 m · idade 30 s |
| 8 | Limite diário | 200 unidades/dia, a medir no piloto |
| 9 | Convite no cadastro | Obrigatório para novos, atrás de flag |
| 10 | Recuperação de senha (PD-003) | E-mail |
| 11 | Excluir conta (LGPD) | Anonimizar, não apagar |
| 12 | Lançamento avulso da cooperativa | Remover no MVP |
| 13 | Planos e relatórios (PD-019) | Plano único "piloto" |
| 14 | Pagamento à cooperativa | Decidir antes da Sprint 4 |

## Ações de registro

- [ ] Registrar as decisões 1–6 em `decisoes.md` (TSK-DEC-010 a 013).
- [ ] Atualizar V6, handoff e critério da Sprint 1 com o valor do ponto.
- [ ] Mesclar a branch `docs/regras-de-campanhas` (regras de campanha só existem lá).

> [LACUNA] Quem decide cada item e a data da reunião não constam nas fontes.
