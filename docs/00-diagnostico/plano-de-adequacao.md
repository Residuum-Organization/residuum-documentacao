# Plano de adequação da documentação — por partes

> **Estado:** revisão · **Dono:** a definir · **Atualizado em:** 10/11/2026
> **Fontes:** [matriz de adequação](matriz-de-adequacao.md), [decisões pendentes](decisoes-pendentes.md), 9 análises dos módulos.
> **Lacunas:** donos por parte; datas.


## Context
Já existem 17 esboços (commit `388b94f`, branch `docs/regras-de-campanhas`) e a [matriz de adequação](matriz-de-adequacao.md). Agora o pedido é um **plano de adequação em 6 partes, nesta ordem**: (1) Planejamento e requisitos → (2) Arquitetura e design → (3) Desenvolvimento → (4) Qualidade → (5) Operação e usuário → (6) Manutenção. A manutenção define como a documentação vive: **tudo centralizado em `Residuum-Organization/residuum-documentacao`**, otimizado para o time se localizar, organizado por **GitHub Flow**, com histórico e possibilidade de voltar a uma versão anterior. Tudo em `.md`, detalhado mas fácil de ler (molde: resumo de 5 linhas → tabela/diagrama → detalhes recolhidos; ≤ ~300 linhas por arquivo).

Esta etapa só planeja. Nada é alterado até a aprovação.

## Regras comuns às 6 partes
- **1 parte = 1 branch curta + 1 Pull Request** (`docs/parte-N-<tema>`), revisado por outra pessoa e mesclado na `main`. GitHub Flow já vale desde o PR da parte 1; a parte 6 só o formaliza e o protege.
- **Pré-requisito zero (antes da parte 1):** publicar na org. O clone aponta para o fork `Vinny1313/residuum-documentacao`; é preciso adicionar o remote da org e enviar a base. `[A CONFIRMAR]` se a org já tem conteúdo (risco de conflito).
- Cada parte termina com: arquivos mesclados, `grep "LACUNA|DECISÃO|VERIFICAR"` da parte zerado ou justificado, e estado do documento mudando de *esboço → revisão → definitivo* no bloco do topo.
- Os documentos de origem ficam preservados (movidos para `docs/historico/`), nunca apagados.
- Decisões são tomadas fora do repositório e **registradas** em `decisoes.md` antes de entrarem no PRD.

---

## Parte 1 — Planejamento e requisitos
**Documentos:** Visão e Escopo · PRD/SRS · Backlog e histórias.
**Esboços:** `docs/01-planejamento/{visao-e-escopo,prd-srs,backlog-e-historias}.md`.

| # | Tarefa | Fonte | Bloqueio |
|---|---|---|---|
| 1.1 | Reunião de 30 min: decisões 1–6 de `00-diagnostico/decisoes-pendentes.md` (valor do ponto, quem confirma, estorno, responsável do ponto, cancelar sorteio, dono do parecer jurídico) | análises dos 4 módulos | Produto |
| 1.2 | Registrar as decisões em `docs/planejamento/modulos/decisoes.md` (TSK-DEC-010–013) e fatiar esse arquivo (3768 linhas) em índice + um arquivo por assunto | `decisoes.md` | 1.1 |
| 1.3 | Visão: fechar "fora de escopo", metas numéricas do piloto, 3 números do problema (de `docs/pesquisa/`) | `visao-do-projeto.md`, pesquisa | metas = Produto |
| 1.4 | PRD: reconciliar V6 × regras de saldo × código; reescrever RN-008 e RF-019; uma tabela regra→fonte→status por perfil; metas de RNF (desempenho, disponibilidade) | V6 (1703 linhas), `regras-de-negocio.md`, `regras-de-campanhas.md` | 1.1 |
| 1.5 | Fatiar a V6 em anexos por perfil (usuário, ponto, cooperativa, admin) e arquivar `backend/docs/requisitos.md` e `frontend/docs/requisitos.md` | V6, duplicatas | 1.4 |
| 1.6 | Backlog: converter as 93 atividades de `tasks-gerais.md` (6591 linhas) em histórias "Como… quero… para…" com aceite, agrupadas nas ondas 0–6; um arquivo por módulo | `tasks-gerais.md`, ondas do README das análises | 1.4 |
| 1.7 | Mesclar a branch `docs/regras-de-campanhas` e atualizar V6/handoff/critério da Sprint 1 com o valor do ponto | git, `scrum-e-sequencia.md` | 1.1 |

**Pronto quando:** PRD sem `[DECISÃO]` aberta das 6 bloqueantes; backlog cobre as 93 atividades e os 71 achados (F, F-, PON, ADM); só existe um PRD.

**Progresso (10/11/2026):** 1.2 decisões fatiadas em 27 arquivos (PD-001 a PD-027) · 1.5 V6 fatiada em 20 arquivos por módulo (duplicatas do backend e frontend continuam por arquivar) · 1.6 backlog fatiado em 66 arquivos de atividade · 1.7 PRs #1 a #3 mescladas · 1.4 PRD reescrito como índice mestre com 6 contradições · **faltam** 1.1 (reunião com o produto), 1.3 (metas do piloto) e converter as 66 atividades em histórias. Os arquivos grandes originais continuam em `docs/planejamento/modulos/` e `docs/requisitos/`; serão movidos para o histórico na parte 6, junto com a correção dos links que apontam para eles.

## Parte 2 — Arquitetura e design
**Documentos:** SAD · Diagramas · Modelo de dados · Wireframes/UX.
**Esboços:** `docs/02-arquitetura/{sad,diagramas,modelo-de-dados}.md`, `docs/03-ux/indice-de-telas.md`.

| # | Tarefa | Fonte | Bloqueio |
|---|---|---|---|
| 2.1 | **Gerar o ER real** a partir de `backend/app/models` e das 32 migrações (hoje o esboço usa só nomes citados nas análises); dicionário de colunas; corrigir singular×plural | código do backend | acesso ao código |
| 2.2 | SAD: topologia (onde roda banco/API/front), ambientes, backups, logs; confirmar versão do Python (3.10 no README × 3.11 no deploy) | `stacks-e-integracoes.md`, `deploy.yaml` | infra: Tecnologia |
| 2.3 | Diagramas: validar os 4 estados contra os valores reais gravados (ex.: `concluida` × `registrada`); acrescentar contas, pagamento e vínculo | propostas S2/A1/C4/P4 | 1.1 (ator da confirmação) |
| 2.4 | Decisão de arquitetura (ADR curto em `.md`) para: ledger único, vínculo N:N, idempotência, estados no backend | propostas S1, P1, S3 | PD-023 |
| 2.5 | UX: link do Figma por perfil, capturas atuais, fluxo de navegação por perfil em Mermaid; converter `morador-v6-figma-ledger.json`/`manifest.json` em tabela `.md` | `docs/ux/` | acesso ao Figma |
| 2.6 | Wireframes dos perfis sem desenho: responsável, cooperativa, admin (em baixa fidelidade, descritos em `.md`) | propostas P13, C9, A1 | Produto/UX |

**Pronto quando:** ER bate com o banco migrado; todo estado do diagrama existe no código ou está marcado "proposto"; todas as telas listadas têm rota e link.

## Parte 3 — Desenvolvimento
**Documentos:** API · README (×3) · CONTRIBUTING.
**Esboços:** `docs/04-desenvolvimento/api.md`, `CONTRIBUTING.md`; READMEs da raiz, backend e frontend.

| # | Tarefa | Fonte | Bloqueio |
|---|---|---|---|
| 3.1 | API: subir o backend, exportar `/openapi.json`, gerar uma tabela por rota (método, perfil, request, response, erros); marcar rotas a remover (`/descartar`, `/pontuacao/resgates`, `cadastro-cooperativa`) | código do backend | ambiente rodando |
| 3.2 | Reescrever o README do backend (746 linhas → setup, variáveis, rodar, testar, ≤ 100 linhas) e retirar QR/papéis antigos; mover o resto para a API/SAD | `backend/README.md` | 3.1 |
| 3.3 | Idem no frontend (retirar promessa de QR offline); ambos apontam para o repositório central | `frontend/README.md` | — |
| 3.4 | Testar o setup **do zero** em máquina limpa (clone → docker → migrar → rodar) e corrigir o README com o que quebrou | — | — |
| 3.5 | CONTRIBUTING: confirmar o fluxo real da equipe, preencher o que está `[LACUNA]`, alinhar com o GitHub Flow da parte 6; criar `PULL_REQUEST_TEMPLATE.md` | esboço | 6 (fluxo) |
| 3.6 | Arquivar `GUIA-INTEGRACAO-FRONT.md` e `PEDENCIAS-ENVIADAS-PELO-FRONT.md`; migrar `backend/docs/admin-*.md` para o repositório central | backend | — |

**Pronto quando:** qualquer pessoa nova roda o projeto só com o README; toda rota pública ou removível está classificada.

## Parte 4 — Qualidade
**Documentos:** Plano de testes · Casos de teste.
**Esboços:** `docs/05-qualidade/{plano-de-testes,casos-de-teste}.md`.

| # | Tarefa | Fonte | Bloqueio |
|---|---|---|---|
| 4.1 | Plano: cronograma, responsáveis, ambiente de homologação; decidir Vitest no front | `testes-integrados.md` (933 linhas) | 2.2 |
| 4.2 | Casos de teste: converter os ~70 achados para o molde (pré/passos/esperado) com dados concretos; ligar cada caso ao requisito do PRD e à história do backlog | fichas F/F-/PON/ADM | 1.4, 1.6 |
| 4.3 | Documentar a infraestrutura de teste em PostgreSQL (`postgres-test`, rollback por teste, invariante do saldo) | seção 5 das propostas | — |
| 4.4 | Registrar o estado dos 71 testes existentes e os 3 que esperam o comportamento antigo | `backend/tests` | — |
| 4.5 | Matriz de rastreabilidade requisito ↔ história ↔ caso ↔ resultado | partes 1–4 | — |
| 4.6 | Execução e evidência: preencher status só com teste realmente executado | — | código corrigido |

**Pronto quando:** todo requisito crítico tem ao menos um caso; nenhum caso marcado ✅ sem evidência.

## Parte 5 — Operação e usuário
**Documentos:** Guia de deploy · Notas de versão · Manual do usuário.
**Esboços:** `docs/06-operacao/{guia-de-deploy,release-notes}.md`, `docs/07-usuario/manual-do-usuario.md`.

| # | Tarefa | Fonte | Bloqueio |
|---|---|---|---|
| 5.1 | Deploy: documentar homologação e produção (URLs, quem publica), deploy do front (`vercel.json`), variáveis e flags, e procedimento de reversão; conferir `alembic upgrade heads` | `deploy.yaml`, `.env.example` | 2.2 |
| 5.2 | Release notes: definir versionamento (tags), migrar `backend/CHANGES.md`, escrever o retroativo | `CHANGES.md` | — |
| 5.3 | Manual do usuário: reescrever a partir da V5 para a V6, com capturas atuais | `manual_funcionalidades.md` | 1.1 (valor do ponto e ator) |
| 5.4 | Manuais de responsável, cooperativa e admin: escrever **depois** que as telas existirem | partes 2 e 3 | telas |
| 5.5 | FAQ e correção da landing (caridade, ingressos, kg) | `LandingPage.jsx` | Produto |
| 5.6 | Remover os PDFs após conversão (`manual_funcionalidades.pdf`, DLR V4/V5) para `historico/` como `.md` | `frontend/docs/` | — |

**Pronto quando:** deploy reproduzido por quem não o escreveu; manual revisado com ao menos 3 usuários.

## Parte 6 — Manutenção (GitHub Flow no repositório central)
**Documento:** `docs/08-manutencao/governanca-da-documentacao.md` + arquivos de configuração do repositório.

### 6.1 Repositório central e navegação
- `Residuum-Organization/residuum-documentacao` é a **única fonte**. Backend e frontend: README curto + link; sem `docs/` próprio.
- **README da raiz como mapa**: tabela "preciso de… → abra…" (por perfil: dev, QA, produto, ops) e "comece por aqui" de 5 linhas.
- Cada pasta numerada (`00`–`08`) tem um `README.md` índice; nomes em minúsculas com hífen; todo arquivo com o bloco *Estado / Dono / Fontes / Lacunas*; links relativos.
- Arquivos com mais de ~300 linhas são divididos. Histórico fica em `docs/historico/`.
- Uma página `00-diagnostico/matriz-de-adequacao.md` viva, atualizada a cada PR.

### 6.2 GitHub Flow adaptado à documentação
```
main (sempre publicável) ── branch curta ── commits ── Pull Request ── revisão ── merge ── apagar branch
```
1. `main` protegida: só recebe por PR, com 1 aprovação e CI verde, sem push direto, histórico linear (squash merge).
2. Uma branch por mudança: `docs/<parte>-<tema>` (ex.: `docs/api-rotas-admin`), curta e apagada ao mesclar.
3. Commits `docs(escopo): resumo no imperativo`; PR cita a tarefa/decisão e o código que motivou a mudança.
4. Revisão por quem é **dono** do documento (arquivo `CODEOWNERS`): Produto (parte 1, 5.3), Tecnologia (2, 3, 5.1), QA (4).
5. **Mudou o código? Muda a doc no mesmo ciclo**: o PR de código no backend/front cita o PR de documentação.

### 6.3 Histórico e retorno a versões anteriores
- **Histórico**: o próprio Git (`git log -- <arquivo>`) + squash merge dá um commit legível por mudança.
- **Versões da documentação**: tag `docs-vMAJOR.MINOR` e uma *Release* no GitHub por marco (fim de sprint, antes do piloto, após cada decisão grande). Cada release é o "retrato" do que valia naquela data.
- **Regressão**: reverter um PR com `git revert` (preserva histórico); voltar a um retrato com `git checkout docs-vX.Y -- docs/` num PR de restauração. Nunca reescrever a `main`.
- **Decisões** ficam em `decisoes.md` com data, responsável e motivo, e referenciam o PR que as aplicou. Um `CHANGELOG-DOCS.md` resume o que mudou por versão, em linguagem simples.

### 6.4 Automação mínima (CI do repositório)
- Verificar links quebrados, Markdown válido e bloco de estado presente (base: o esboço em `tmp/reorganizacao-2026-10-17/verificacao-gerador/.github/workflows/verificar-documentacao.yml`).
- Falhar se entrar arquivo que não seja `.md` em `docs/` (exceto `docs/03-ux/evidencias/`).
- Gerar o relatório de pendências (`LACUNA|DECISÃO|VERIFICAR`) como comentário no PR.
- Templates em `.github/`: `PULL_REQUEST_TEMPLATE.md`, issues "problema na documentação" e "proposta de alteração" (existem rascunhos em `tmp/`), `CODEOWNERS`.

### 6.5 Limpeza e ações que exigem o administrador da org
| Ação | Quem |
|---|---|
| Ativar proteção da `main`, exigir revisão e CI | Administrador da org (configuração do GitHub, não faço pelo código) |
| Publicar a base na org e conferir conflito com o conteúdo existente | Eu, com sua autorização do envio |
| Remover `tmp/` e consolidar duplicatas | Eu, em PR |
| Nomear donos por documento | Produto/Tecnologia |

**Pronto quando:** `main` protegida; primeiro PR de qualquer pessoa passa pelo fluxo completo; existe a tag `docs-v1.0` e a prova de que `git revert` de um PR restaura o estado anterior.

---

## Ordem e dependências
```
Pré-0 publicar na org ─▶ 1 Planejamento ─▶ 2 Arquitetura ─▶ 3 Desenvolvimento ─▶ 4 Qualidade ─▶ 5 Operação/usuário ─▶ 6 Manutenção
                              │ (decisões 1–6)       │ (ER real)         │ (OpenAPI)         │ (código corrigido)      │ (telas)         (GitHub Flow já em uso desde a parte 1)
```
Pontos que podem andar em paralelo: 2.1 (ER) e 3.1 (API) não dependem das decisões; 3.2–3.4 (READMEs) idem. Pontos que só fecham depois do código: 4.6 e 5.4.

## Riscos
| Risco | Mitigação |
|---|---|
| Decisões 1–6 não saem | PRD fica "em revisão" com valores provisórios marcados; manual e casos de teste não são publicados como definitivos |
| Org já tem conteúdo diferente do clone local | Comparar antes de enviar; abrir PR em vez de empurrar para a `main` |
| Documentar o que ainda será corrigido no código | Cada regra traz coluna "código hoje × proposto"; nada é afirmado como pronto sem verificação |
| Documentação volta a divergir | CODEOWNERS, regra "código e doc no mesmo ciclo", CI de links, release por marco |

## Verificação do plano (ao executar cada parte)
- Abrir os arquivos no GitHub e conferir renderização (tabelas e Mermaid).
- `grep -rn "LACUNA\|DECISÃO\|VERIFICAR" docs/` por parte: a contagem só pode cair.
- Link-check no CI; `find docs -type f ! -name '*.md'` vazio (exceto evidências).
- Teste cego: pessoa que não escreveu o documento executa o README/deploy/caso de teste e relata onde travou.
- Revert de teste: reverter um PR de documentação e confirmar que o repositório volta ao estado anterior.
