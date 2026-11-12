# Arquitetura de Software (SAD)

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 11/11/2026
> **Fontes:** código do backend (branch `feature/mor-025-026-vouchers-sorteios`, `11f0d8e`) e do frontend (`package.json`, `App.jsx`, `ci.yml`), [stacks e integrações](../tecnologia/stacks-e-integracoes.md), [mapa de branches](../tecnologia/mapa-de-branches.md), propostas das análises.
> **Lacunas:** 5 · Decisões de arquitetura propostas em [adr/](adr/README.md)

## Resumo

Aplicação web em duas partes: uma **API** (Python/FastAPI + PostgreSQL) e uma **interface** (React/Vite). A API tem **15 grupos de rotas e 111 endpoints**. A arquitetura é simples e adequada ao MVP, mas tem três fragilidades: pontos alterados em vários lugares, permissão por papel sem vínculo ao ponto e três fluxos diferentes de confirmação do descarte. O que **está implantado** (hospedagem, banco, ambientes) não está documentado.

## Visão geral

```mermaid
flowchart LR
  U[Navegador / celular] --> F[Frontend React + Vite]
  F -->|HTTPS JSON + JWT Bearer| B[Backend FastAPI]
  B --> D[(PostgreSQL na Neon)]
  F -.mapas.-> M[OpenStreetMap / Google Maps]
  B -.migrações.-> A[Alembic]
  G[GitHub Actions] -->|merge na main| A
  G -->|deploy hook| V[Vercel: hospeda a API]
```

## Stack (versões do código)

| Camada | Tecnologia | Versão |
|---|---|---|
| API | FastAPI, Uvicorn | 0.115.0, 0.32.0 |
| Dados | SQLAlchemy, Alembic, psycopg2 | 2.0.36, 1.13.3, 2.9.10 |
| Validação | Pydantic, email-validator | 2.9.2, 2.2.0 |
| Segurança | python-jose, passlib, bcrypt | 3.5.0, 1.7.4, 4.0.1 |
| Linguagem | Python | 3.11 (Dockerfile) · 3.12 nos testes · README diz 3.10+ |
| Interface | React, Vite, React Router | 18, `vite`, 7 |
| Estado e formulários | TanStack Query, React Hook Form, Zod, Axios | 4, 7, 3, 1 |
| Visual | Tailwind CSS, Radix UI, Recharts, Lucide | — |
| Mapas e leitura | Leaflet / React-Leaflet, `@react-google-maps/api`, `react-zxing` (código de barras) | — |
| Relatórios | jsPDF + autotable | — |
| Build | pnpm, Node | CI: pnpm 9 / Node 20 · local: pnpm 11 / Node 24 |

## Backend por camadas (`backend/app`)

| Pasta | Papel |
|---|---|
| `routes/` | 15 arquivos de endpoints: `admin` (28), `campanha` (11), `voucher` (11), `sorteio` (10), `inventario_usuario` (8), `ponto_coleta` (8), `cooperativa` (8), `auth` (6), `descarte` (6), demais menores |
| `services/` | Regras: `saldo_service` (débito com trava), `pontuacao_service` (5 pontos por unidade **no código**; a regra decidida em 11/11 é 10 por descarte), `campanha_service`, `voucher_service`, `extrato_pontos_service`, `ponto_coleta_service`, `localizacao_service` (GPS), `transferencia_lote_service`, `audit_service`, outros |
| `models/` | 21 arquivos, 27 tabelas — ver [modelo de dados](modelo-de-dados.md) |
| `schemas/` | Contratos Pydantic de entrada e saída |
| `dependencies/` | `get_current_user`, `require_role`, `validar_acesso_operacional_ao_ponto` |
| `core/` | Segurança (JWT), decoradores (`@public`), exceções |

## Autenticação e permissão (como é hoje)

1. Login devolve **access token** e **refresh token** (JWT). O refresh vale 30 dias.
2. Um filtro global exige token em toda rota, exceto as marcadas `@public`.
3. Cada rota restringe por **papel** com `require_role(...)`: `usuario`, `admin`, `cooperativa`, `ponto_coleta`, `parceiro`.
4. Para operar um ponto, `validar_acesso_operacional_ao_ponto` libera `admin` e **qualquer** `cooperativa`; `ponto_coleta` e `parceiro` só o ponto cujo `cooperativa_id` é o seu.

Não há desativação de conta, revogação de sessão, teto de contas nem limite de tentativas.

## Fluxo principal: entrega do usuário (como é hoje)

```mermaid
sequenceDiagram
  participant M as Usuário
  participant A as API
  participant O as Operador
  M->>A: POST /inventario/transferencias (lote + GPS)
  A->>A: cria descartes pendentes, baixa o estoque
  A->>A: credita pontos (1ª vez)
  O->>A: PUT /descarte/{id}/confirmar
  A->>A: baixa estoque de novo, credita pontos (2ª vez)
```

Os dois créditos e as duas baixas são o defeito F01/F02. O desenho proposto está em [diagramas](diagramas.md) e na [ADR-0001](adr/0001-livro-unico-de-pontos.md).

## Decisões de desenho (aceitas)

| ADR | Decisão | Motivo |
|---|---|---|
| [0001](adr/0001-livro-unico-de-pontos.md) | Livro único de pontos (ledger) | Fim do crédito em dobro |
| [0002](adr/0002-vinculo-entre-usuario-e-ponto.md) | Vínculo usuário↔ponto | Cooperativa só opera o que é dela |
| [0003](adr/0003-idempotencia-nas-escritas.md) | Idempotência em toda escrita sensível | Reenvio não repete efeito |
| [0004](adr/0004-estados-no-backend.md) | Estados com transições explícitas | `PUT` nunca muda estado |
| [0005](adr/0005-conta-com-ciclo-de-vida.md) | Conta com ciclo de vida | Desativar e revogar sessão |

As cinco foram **aceitas em 11/11/2026**, ajustadas às decisões do dia. Nenhuma está implementada.

## Ambientes e entrega

| Item | Situação |
|---|---|
| Local | `docker-compose.yml` (banco) + `uvicorn` + `pnpm dev` |
| CI do backend | Só `deploy.yaml`: a cada push na `main` roda `alembic upgrade heads` e chama o deploy hook da Vercel. **Não roda testes** |
| CI do frontend | `ci.yml`: instala, `build` e Prettier (`\|\| true`: falha de formato é ignorada) |
| Testes | 3 arquivos no backend (SQLite em memória); nenhum no frontend |
| Produção | **API na Vercel** (deploy hook do `deploy.yaml`); **banco PostgreSQL na Neon** (informado por Vinicius em 11/11/2026 como "neodb" `[VERIFICAR nome]`). `[LACUNA]` frontend também na Vercel? |
| Backups | Projeto Neon com **histórico de 6 horas** para restaurar (configuração lida em 11/11/2026). **Não há backup diário** conhecido; o DLR pedia RPO 24 h / RTO 4 h. `[VERIFICAR]` se um restore já foi testado |
| Projeto do banco | `residuum-dev` (PostgreSQL 18, região São Paulo). Há um segundo projeto sem nome e sem uso `[VERIFICAR]` se é para produção |
| Homologação | `[LACUNA]` não há ambiente de homologação conhecido |
| Quem publica | Quem faz merge na `main` do backend dispara migração e deploy automaticamente `[LACUNA]` pessoas com essa permissão |

## Riscos e dívidas

- Testes em SQLite ignoram `FOR UPDATE` e índices parciais.
- `/painel-testes` público e CORS aberto (`allow_origins=["*"]`) `[VERIFICAR]`.
- Branches de feature com tabelas novas **ainda não estão na `main`** do backend.
- Código sem uso: tabelas `cooperativa`, `qrcode_token`, `estoque`.
- Itens dados como feitos no Backlog v2 do Drive (Terraform, Secrets Manager, criptografia LGPD, backups) **não aparecem no código** `[VERIFICAR]`.

### Riscos de produto e operação

Levantados no DLR V4 e no Plano de Tasks (jun/2026, Google Drive; ver o [comparativo](../00-diagnostico/comparativo-documentos-drive.md)), revistos com as decisões de 11/11/2026.

| Risco | Probabilidade (DLR) | Impacto (DLR) | Mitigação hoje |
|---|---|---|---|
| Scanner e GPS instáveis em Android de entrada | Alta | Crítico | Testar nos celulares do piloto; cadastro manual após 2 falhas de leitura; raio de 100 m ajustável por ponto |
| Fraude nos pontos | Média | Alto | Operador confirma; confirmação final; janela de 60 min; idempotência no descarte (a fazer) |
| LGPD antes do lançamento | Alta | Crítico | Excluir conta anonimiza (PD-022); criptografia de dados pessoais `[VERIFICAR]` |
| Parceiros de voucher não confirmados | Alta | Médio | Sorteios só de teste; campanhas só PET e lata |
| Excesso de engenharia antes de validar | Alta | Alto | Escopo do piloto fechado na Visão (100 usuários, 3 pontos, 8 semanas) |

## O que falta para fechar

- [ ] `[LACUNA]` topologia real: onde rodam API, banco e frontend; backups; RPO/RTO (PD-026)
- [ ] `[LACUNA]` observabilidade, logs e alertas
- [ ] `[LACUNA]` política de segredos e rotação do `SECRET_KEY`
- [ ] `[DECISÃO: PD-023]` modelo de vínculo (ADR-0002)
- [ ] `[VERIFICAR]` quais rotas estão ativas na `main` do backend
- [ ] Conciliar versões de Python (3.10/3.11/3.12) e Node/pnpm (CI × local)
