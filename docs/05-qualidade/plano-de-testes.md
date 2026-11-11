# Plano de testes

> **Estado:** esboço · **Dono:** QA · **Atualizado em:** 11/11/2026
> **Fontes:** `testes-integrados.md` (planejado), seções de testes das propostas.
> **Lacunas:** cronograma, responsáveis, ferramentas de front.

## Resumo

Hoje há **71 testes**, todos em SQLite, em 3 arquivos (`test_campanhas`, `test_identificacao_residuo`, `test_transferencia_lote`). O SQLite ignora trava de linha e índices parciais, então **não pega** os problemas mais graves (crédito em dobro, corrida de saldo). O plano abaixo move os testes críticos para PostgreSQL.

## Estratégia

| Nível | O que cobre | Ferramenta | Banco |
|---|---|---|---|
| Unitário | Funções puras (pontos, GPS, haversine) | pytest | SQLite ok |
| Integração | Rotas + regras + banco | pytest + httpx | **PostgreSQL** |
| Concorrência | 2 threads no mesmo saldo/descarte | pytest | **PostgreSQL** |
| Migração | subir e descer cada migração | Alembic | PostgreSQL |
| Front | Perfis (`roles.js`: quem vê qual tela) e valores mostrados ao usuário | **Vitest** + RTL (decidido em 11/11/2026) | — |
| Ponta a ponta | Roteiro manual por perfil | manual | ambiente de teste |

## Infraestrutura necessária

- Serviço `postgres-test` no `docker-compose.yml` (com tmpfs) e variável `TEST_DATABASE_URL`. **Decidido em 11/11/2026:** PostgreSQL de teste em **Docker local e no CI** (GitHub Actions); os testes **não tocam** no banco da Neon.
- Cada teste dentro de transação com rollback.
- `pytest` e `httpx` em `requirements-dev.txt` (hoje fora do `requirements`).
- CI que rode a suíte a cada PR `[LACUNA]` hoje só existe deploy no backend.

## Invariantes (rodam em todo teste de saldo)

1. `soma(Pontuacao.pontos) == usuario.pontuacao_total`
2. No máximo 1 crédito por descarte
3. Nenhuma rota de admin apaga entidade com movimento de pontos

## Escopo por onda

| Onda | Testes críticos |
|---|---|
| 0 | Cadastro público de cooperativa e pedido público de ponto fecham; `/painel-testes` fora da produção; cooperativa sem vínculo → 403; sorteio não apura antes do fim |
| 1 | Criar descarte não credita; confirmar credita **10 pontos uma vez**; envios no mesmo ponto em **60 min** viram um descarte; descarte confirmado **sem estorno** (só ajuste do admin); reenvio idempotente |
| 2 | Usuário inativo → 401; **código individual** usado duas vezes → recusa; **501ª conta** recusada; **duas contas ao mesmo tempo na última vaga** → só uma entra (teste de concorrência); conta excluída devolve a vaga |
| 3+ | Só PET e lata; GPS com raio de **100 m** por ponto; ponto **cheio** bloqueado; cancelar sorteio devolve pontos; dobro = **10 × N descartes**; coleta **parcial** baixa só o coletado; "a caminho" e cancelamento da coleta |

## Testes existentes a corrigir

`test_transferencia_lote.py` (linhas 119, 185, 201 esperam o comportamento antigo) e `test_confirmacoes_acumulam_pontos_e_estoque` (cria pendente direto no banco, por isso não pega o crédito em dobro).

## Critérios de saída

Suíte verde em PostgreSQL no CI; invariantes ativas; roteiro manual de ponta a ponta executado e registrado.

## O que falta para fechar

- [ ] `[LACUNA]` datas, responsáveis, ambiente de homologação
- [ ] Registrar evidências executadas (hoje tudo é "planejado")
- [x] Vitest adotado no front; testes de banco em Docker local + CI (11/11/2026)
