# Documentação da API

> **Estado:** revisão · **Dono:** Backend · **Atualizado em:** 11/11/2026
> **Fontes:** rotas lidas no código do backend, branch `feature/mor-025-026-vouchers-sorteios` (commit `11f0d8e`, 22/10/2026), arquivos `app/main.py` e `app/routes/*.py`. Decisões de produto de 11/11/2026 ([PD-010](../01-planejamento/decisoes/pd-010.md), [PD-006](../01-planejamento/decisoes/pd-006.md), [PD-014](../01-planejamento/decisoes/pd-014.md), [PD-023](../01-planejamento/decisoes/pd-023.md)).
> **Lacunas:** corpos de requisição e resposta por rota (exportar `/openapi.json`); erros específicos por rota.

## Resumo

A API é **REST em JSON**, feita em FastAPI, com **113 rotas** (111 nos 15 arquivos de rotas, mais 2 em `app/main.py`). Toda rota exige login (**JWT Bearer**), exceto as marcadas como **pública**. A coluna "Muda" diz o que precisa mudar por causa das decisões de 11/11/2026 ou dos achados das análises. Com o backend rodando, a lista viva está em `/docs` (Swagger) e `/openapi.json`.

## Convenções

| Item | Como é |
|---|---|
| Autenticação | `Authorization: Bearer <token>`. Uma dependência global (`require_auth_unless_public`) exige o token, exceto nas rotas com `@public` |
| Perfis (`role`) | `usuario`, `ponto_coleta` (responsável pelo ponto), `cooperativa`, `admin` |
| Idempotência | Header `Idempotency-Key` hoje só em resgate de voucher e compra de bilhete. **Deve ser estendido ao descarte** (achado F05) |
| Erros | 400 inválido · 401 sem sessão · 403 sem permissão · 404 não encontrado · 409 conflito de estado · 422 validação |

**Legenda da coluna "Muda":** 🔴 remover ou fechar · 🟠 mudar por decisão de 11/11 · 🟡 ajuste por achado · — sem mudança prevista.

## Rotas por grupo

### Geral

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET | `/` | pública | — |
| GET | `/painel-testes` | pública | 🔴 painel de testes exposto em produção `[DECISÃO: remover ou proteger]` |

### Autenticação e conta

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| POST | `/usuarios` | pública | 🟠 exigir o **código individual** (uso único) e respeitar o **teto de 500 contas** (trava de vagas no banco) |
| POST | `/login` | pública | — |
| POST | `/refresh` | pública | 🟡 conferir se a conta está ativa |
| GET, PUT | `/me` | logado | — |
| GET | `/perfil` | logado | — |
| PUT | `/me/endereco` | logado | — |
| GET | `/usuario/metricas` | logado | — |

### Inventário do usuário

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET, POST | `/me/inventario` | logado | 🟡 só PET e lata, quantidades inteiras |
| GET, PUT, DELETE | `/me/inventario/{item_id}` | logado | — |
| POST | `/me/inventario/transferencias` | logado | 🟡 o lote deve só reservar o item, sem baixa dupla |
| GET | `/me/inventario/transferencias/{lote_id}` | logado | — |
| POST | `/me/inventario/{item_id}/descartar` | logado | 🔴 confirma o descarte sozinho; o **operador** é quem confirma |

### Descarte

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| POST | `/descarte/` | logado | 🟠 cria **pendente, sem pontos**; aplicar a **janela de 60 min no mesmo ponto**; raio do GPS passa de 1.000 m fixo para **100 m ajustável por ponto** |
| GET | `/descarte/historico` | logado | — |
| GET | `/descarte/historico/geral` | admin | — |
| GET | `/descarte/pendentes` | admin, cooperativa, ponto_coleta | 🟠 filtrar pelos pontos **vinculados** ao responsável (N:N) |
| GET | `/descarte/cooperativa-discartes` | admin, cooperativa, ponto_coleta | 🟡 nome com erro de grafia ("discartes") |
| PUT | `/descarte/{id_descarte}/confirmar` | admin, cooperativa, ponto_coleta | 🟠 **único ponto de crédito: 10 pontos por descarte**; confirmação é **final** |

### Pontos de coleta

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| POST | `/pontos-coleta` | admin | — |
| GET | `/pontos-coleta` | logado | 🟡 dizer se o ponto está disponível e o motivo (cheio, fechado) |
| GET | `/pontos-coleta/{ponto_id}` | logado | — |
| GET | `/pontos-coleta/{ponto_id}/dashboard` | admin, cooperativa, ponto_coleta | 🟡 ocupação mistura kg e unidades ([estudo](../pesquisa/capacidade-e-execucao-da-coleta.md)) |
| PUT | `/pontos-coleta/{ponto_id}` | admin, cooperativa | 🟠 o **responsável vinculado** também edita materiais, com autoria |
| PUT | `/pontos-coleta/{ponto_id}/horarios` | admin, cooperativa | — |
| GET | `/meu-ponto-coleta` | ponto_coleta, cooperativa, admin | 🟠 com N:N, devolver **a lista** de pontos do responsável |
| GET | `/pontos` | logado | 🟡 **é um apelido** de `/pontos-coleta` (mesma função, mesmos filtros; conferido no código em 11/11/2026). Manter só uma |
| POST | `/solicitacoes-pontos-coleta` | pública | 🔴 **remover**: só o admin cadastra pontos (RN-011, confirmado em 11/11) |
| GET | `/solicitacoes-pontos-coleta/minha` | logado | 🔴 remover junto com o pedido público |

### Cooperativa

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| POST | `/cooperativa/cadastro-cooperativa` | pública | 🔴 **fechar**: só o admin cria cooperativa (crítico) |
| POST | `/cooperativa/lancamento-avulso` | cooperativa, ponto_coleta | 🟡 grava a cooperativa como `admin_id`; marcar a origem |
| GET | `/cooperativa/solicitacoes-coleta` | cooperativa, ponto_coleta | — |
| POST | `/cooperativa/solicitacoes-coleta/{id}/aceitar` | cooperativa | — |
| POST | `/cooperativa/solicitacoes-coleta/{id}/concluir` | cooperativa | 🟠 **coleta parcial**: baixar só o que foi levado, por material; hoje zera o ponto |
| POST | `/cooperativa/solicitacoes-coleta/{id}/recusar` | cooperativa | — |
| GET | `/cooperativa/pontos-coleta` | cooperativa, ponto_coleta | 🟡 ver só os pontos ligados à cooperativa |
| POST | `/cooperativa/descartes/{id_descarte}/rejeitar` | cooperativa, ponto_coleta | — |

### Pontuação

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET | `/pontuacao/extrato` | logado | 🟡 mostrar a origem de cada lançamento (RF-023) |
| GET | `/pontuacao/resgates` | logado | — |
| POST | `/pontuacao/resgates` | logado | 🔴 **remover**: qualquer usuário debita pontos sem regra |

### Campanhas

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET | `/campanhas` | pública | — |
| GET | `/campanhas/{campanha_id}` | pública | — |
| GET | `/campanhas/admin` | admin | — |
| POST | `/campanhas` | admin | 🟠 aceitar só PET e lata no início |
| PUT, DELETE | `/campanhas/{campanha_id}` | admin | — |
| GET | `/campanhas/minhas-inscricoes` | logado | — |
| POST | `/campanhas/{campanha_id}/participar` | logado | — |
| GET | `/campanhas/{campanha_id}/progresso` | logado | 🟠 meta do **dobro em descartes**, não em unidades |
| POST | `/campanhas/{campanha_id}/recompensa` | logado | — (botão "Receber pontos") |
| POST | `/campanhas/{campanha_id}/mecanicas/{tipo}/bonus` | logado | 🟠 dobro paga **10 × N descartes** |

### Vouchers

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET | `/vouchers` | pública | — |
| GET | `/vouchers/{voucher_id}` | pública | — |
| GET | `/vouchers/admin` | admin | — |
| POST | `/vouchers` | admin | — |
| PUT, DELETE | `/vouchers/{voucher_id}` | admin | — |
| POST | `/vouchers/{voucher_id}/resgatar` | logado | — (usa `Idempotency-Key`) |
| GET | `/vouchers/meus-resgates` | logado | — |
| GET, POST | `/vouchers/{voucher_id}/codigos` | admin | — |
| DELETE | `/vouchers/{voucher_id}/codigos/{codigo_id}` | admin | — |

### Sorteios (só de teste)

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET | `/sorteios` | pública | — |
| GET | `/sorteios/{sorteio_id}` | pública | — |
| GET | `/sorteios/{sorteio_id}/resultado` | pública | — |
| GET | `/sorteios/admin` | admin | — |
| POST | `/sorteios` | admin | — |
| PUT, DELETE | `/sorteios/{sorteio_id}` | admin | 🟡 DELETE deve responder 409 se houver bilhetes |
| POST | `/sorteios/{sorteio_id}/sortear` | admin | 🟡 só depois do fim do sorteio (hoje apura antes) |
| POST | `/sorteios/{sorteio_id}/comprar-bilhete` | logado | — (usa `Idempotency-Key`) |
| GET | `/sorteios/meus-bilhetes` | logado | — |
| — | cancelar sorteio | admin | 🟠 **nova**: cancelar devolve os pontos dos bilhetes ([PD-013](../01-planejamento/decisoes/pd-013.md)) |

### Notificações

| Método | Rota | Perfil | Muda |
|---|---|---|---|
| GET | `/notificacoes/minhas` | logado | — |
| PATCH | `/notificacoes/minhas/{notificacao_id}/lida` | logado | — |
| GET | `/notificacoes/` | admin, cooperativa | — |
| PATCH | `/notificacoes/{notificacao_id}/lida` | admin, cooperativa | — |

### Administração (prefixo `/admin`, todas só admin)

| Método | Rota | Muda |
|---|---|---|
| GET | `/admin/pontos-coleta/alertas` | 🟡 limiar de 80% sobre ocupação com unidades misturadas |
| POST | `/admin/pontos-coleta/{ponto_id}/solicitacoes-coleta` | — |
| DELETE | `/admin/pontos-coleta/{ponto_id}` | — (desativa) |
| GET | `/admin/usuarios` | — |
| GET, PATCH, DELETE | `/admin/usuarios/{usuario_id}` | 🟡 DELETE deve anonimizar (LGPD, PD-022) e **devolver a vaga** do teto |
| PATCH | `/admin/usuarios/{usuario_id}/role` | — |
| POST | `/admin/usuarios/{usuario_id}/ajuste-pontuacao` | 🟠 passa a ser **o** caminho para corrigir descarte confirmado (com motivo) |
| GET | `/admin/descartes` | — |
| GET | `/admin/descartes/{id_descarte}` | — |
| POST | `/admin/descartes/{id_descarte}/rejeitar` | — |
| POST | `/admin/descartes/{id_descarte}/reverter` | 🔴 **remover**: descarte confirmado não é estornado ([PD-010](../01-planejamento/decisoes/pd-010.md)) |
| GET | `/admin/solicitacoes-pontos-coleta` | — |
| GET | `/admin/solicitacoes-pontos-coleta/{solicitacao_id}` | — |
| POST | `/admin/solicitacoes-pontos-coleta/{solicitacao_id}/aprovar` | 🔴 sem pedido público, o fluxo de aprovação perde uso |
| POST | `/admin/solicitacoes-pontos-coleta/{solicitacao_id}/rejeitar` | — |
| GET | `/admin/estoque` | — |
| GET | `/admin/estoque/por-ponto` | 🟡 ocupação mistura kg e unidades |
| GET | `/admin/metrics/resumo` | — |
| GET | `/admin/metrics/por-tipo-residuo` | — |
| GET | `/admin/metrics/ranking-usuarios` | — |
| GET | `/admin/metrics/descartes-por-periodo` | — |
| GET | `/admin/metrics/ocupacao-pontos` | 🟡 mesma questão de unidade |
| GET | `/admin/auditoria` | — |
| GET | `/admin/relatorios/descartes.csv` | — |
| GET | `/admin/relatorios/usuarios.csv` | — |
| GET | `/admin/relatorios/auditoria.csv` | — |
| GET, POST | `/admin/agenda` | — (também cooperativa) |
| PUT, DELETE | `/admin/agenda/{agenda_id}` | — (também cooperativa) |

## Rotas que faltam (decididas, ainda sem código)

| Método | Rota sugerida | Para quê | Origem |
|---|---|---|---|
| POST | `/admin/codigos-acesso` | Gerar **códigos individuais de uso único** e ver vagas restantes | Teto de 500 |
| POST | `/lista-espera` | Pública: deixar e-mail quando as vagas acabarem | Decisão de 11/11 |
| POST, DELETE | `/admin/pontos-coleta/{id}/responsaveis/{usuario_id}` | Ligar e desligar responsáveis | [PD-023](../01-planejamento/decisoes/pd-023.md) |
| POST | `/sorteios/{id}/cancelar` | Cancelar e devolver pontos | [PD-013](../01-planejamento/decisoes/pd-013.md) |
| POST | `/cooperativa/solicitacoes-coleta/{id}/iniciar` | Cooperativa marca "a caminho" | [PD-014](../01-planejamento/decisoes/pd-014.md) |
| POST | `/cooperativa/solicitacoes-coleta/{id}/cancelar` e `/admin/solicitacoes-coleta/{id}/cancelar` | Cancelar com motivo, antes da conclusão | PD-014 |
| POST | `/admin/solicitacoes-coleta/{id}/pagamento` | Marcar "pago" e anexar comprovante (pagamento manual no piloto) | [PD-016](../01-planejamento/decisoes/pd-016.md) |
| POST | `/admin/cooperativas` | Admin cria cooperativa | RN-011 |
| POST | `/senha/recuperar`, `/senha/redefinir` | Recuperar acesso | RF-006, [PD-003](../01-planejamento/decisoes/pd-003.md) |

Os nomes acima são **sugestões**; a equipe de backend decide.

## O que falta para fechar

- [x] Tabela completa de rotas, lida do código (11/11/2026)
- [ ] Exportar `/openapi.json` e anexar corpos de requisição e resposta
- [ ] Exemplos reais e erros específicos por rota
- [ ] Marcar as rotas 🔴 com a data em que forem removidas
- [ ] Refazer esta lista quando a branch `feature/mor-025-026-vouchers-sorteios` entrar na `main` do backend
