# Casos de teste

> **Estado:** esboço · **Dono:** QA · **Atualizado em:** 10/11/2026
> **Fontes:** critérios "Aceite + teste" das fichas F, F-, PON e ADM.
> **Lacunas:** dados de entrada concretos; execução e evidência.

## Resumo

Molde único para todo caso: **ID · requisito · pré-condição · passos · resultado esperado · status**. Abaixo, os casos mais críticos já no molde. Os demais seguem a mesma forma, a partir das fichas.

Status: ⬜ planejado · ✅ passou · ❌ falhou. Hoje **nenhum foi executado**.

## Usuário

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-MOR-01 | F01 | Saldo 0; lote de 4 latas | 1. Enviar lote 2. Ver saldo 3. Operador confirma 4 | Saldo 0 após enviar; 20 após confirmar; 1 lançamento | ⬜ |
| CT-MOR-02 | F02 | Item com 10 | Lote de 4 → confirmar 4 | Estoque 6, reservado 0 | ⬜ |
| CT-MOR-03 | F04 | Item 10, lote 4 | Ponto rejeita | Estoque 10, saldo inalterado | ⬜ |
| CT-MOR-04 | F05 | Mesmo POST 3× com a mesma chave | Reenviar | 1 descarte | ⬜ |
| CT-MOR-05 | F09 | — | Cadastrar `vidro` | 422 | ⬜ |
| CT-MOR-06 | F23 | — | Quantidade 2,5 | 422 | ⬜ |
| CT-MOR-07 | F12 | GPS a 200 m de precisão | Enviar entrega | 422 `precisao` | ⬜ |
| CT-MOR-08 | F10 | — | "Descartar agora" e voltar | Estoque inalterado | ⬜ |

## Cooperativa e ponto

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-COO-01 | F-01 | Sem login | POST cadastro de cooperativa | 401/410 | ⬜ |
| CT-COO-02 | F-02 | Coop. A e ponto da coop. B | A confirma descarte de B | 403 | ⬜ |
| CT-COO-03 | F-04 | Ponto: PET 180 | Coletar 30 | PET 150; outros intactos | ⬜ |
| CT-COO-04 | F-05 | — | Concluir com peso −50 | 422 | ⬜ |
| CT-PON-01 | PON-07 | Ponto sem materiais | Criar descarte | Rejeita | ⬜ |
| CT-PON-02 | PON-08 | Capacidade lata 100 | 100 latas / 99 latas | cheio / ativo | ⬜ |
| CT-PON-03 | PON-14 | Temporário com fim antes do início | Salvar | 422 | ⬜ |

## Administrador

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-ADM-01 | ADM-01 | Sorteio com bilhete | DELETE | 409 | ⬜ |
| CT-ADM-02 | ADM-01 | 3 bilhetes de 50 | Cancelar | Cada saldo +50; cancelar 2× = 1 crédito | ⬜ |
| CT-ADM-03 | ADM-02 | Sorteio com bilhete | Alterar custo | 409 | ⬜ |
| CT-ADM-04 | ADM-02 | Antes de `data_fim` | Sortear | 400 | ⬜ |
| CT-ADM-05 | ADM-03 | Saldo 20; estorno 50 | Reverter | 409, `deficit` | ⬜ |
| CT-ADM-06 | ADM-04 | Usuário comum | POST `/pontuacao/resgates` | 404/405 | ⬜ |
| CT-ADM-07 | ADM-05 | Conta desativada | Qualquer chamada | 401 | ⬜ |

## Ponta a ponta (roteiro manual)

1. Cadastrar com convite → descarte rápido → operador confirma → extrato mostra **1** lançamento → admin reverte → saldo volta.
2. Admin cria sorteio (rascunho) → publica → 3 compram → tenta editar custo (bloqueado) → cancela → 3 devoluções no extrato.

## O que falta para fechar

- [ ] Dados concretos (usuários, pontos, valores) em fixtures
- [ ] Converter as demais fichas (≈ 70 achados) para este molde
- [ ] Registrar data, quem executou e evidência
