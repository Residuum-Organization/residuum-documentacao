# Visão e Escopo

> **Estado:** esboço · **Dono:** Produto · **Atualizado em:** 10/11/2026
> **Fontes:** `docs/visao/visao-do-projeto.md`, README das análises, V6.
> **Lacunas:** 4

## Resumo

O Residuum premia moradores com pontos por entregar **PET e latas de alumínio** em pontos de coleta. Os pontos viram vouchers, bilhetes de sorteio (de teste) e campanhas. Cooperativas recolhem e pesam o material. O administrador gere tudo. O objetivo do MVP é validar esse ciclo num **piloto** controlado.

## O problema

Reciclagem depende de o morador levar o material ao lugar certo, e hoje falta incentivo e rastreio. `[LACUNA]` Dados do problema (volume, região, custo) estão em `docs/pesquisa/`; resumir aqui em 3 números.

## Objetivos do MVP

| Objetivo | Como medir |
|---|---|
| Morador entrega e ganha pontos de forma confiável | Saldo = soma dos lançamentos (invariante) |
| Ponto e cooperativa operam só o que é deles | Zero acesso cruzado em testes |
| Piloto roda com sorteio **só de teste** | Flag `SORTEIOS_SOMENTE_TESTE` ligada |

`[LACUNA]` Metas numéricas do piloto (nº de moradores, pontos, entregas) não constam nas fontes.

## Perfis

| Perfil | Papel |
|---|---|
| Morador | Registra embalagens, entrega, usa pontos |
| Responsável pelo ponto | Cuida do ponto: materiais, estoque, pede coleta `[DECISÃO: PD-023]` |
| Cooperativa | Aceita, retira e pesa o material |
| Administrador | Cadastra, aprova, apura, ajusta |

## Dentro do escopo (MVP)

- Cadastro por convite · registro de PET e lata (unidades inteiras)
- Entrega com GPS e confirmação · pontos por unidade confirmada
- Loja: vouchers, sorteios de teste, campanhas
- Pedido e execução de coleta · painel administrativo

## Fora do escopo (por decisão ou por prazo)

| Item | Motivo |
|---|---|
| Sorteio com prêmio real | Lei 5.768/71 exige autorização; só testes até o parecer |
| Presença por QR code | V6 RN-006: só GPS |
| Outros materiais (papel, vidro…) | RN-003: só PET e lata |
| Conversão de latas em kg | RF-035: sem regra validada |
| Doação de pontos / cashback | RN-010: pontos não são dinheiro |
| Pagamento e planos | Sprint 4 `[DECISÃO: D8/D9]` |
| Leitura de código de barras e nota | Backlog (RN-005) |

## Prazo

Informado: **20/11/2026**. Não garante conclusão de todo o backlog.

## Glossário

**Descarte** entrega no ponto · **Lote** vários itens de uma vez · **Ledger** livro de lançamentos de pontos · **Vínculo** ligação usuário↔ponto · **PD-xxx** pendência de decisão.
