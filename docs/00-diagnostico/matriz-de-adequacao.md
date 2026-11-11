# Matriz de adequação da documentação

> **Estado:** esboço · **Dono:** a definir · **Atualizado em:** 10/11/2026
> **Fontes:** inventário do repositório local + 9 documentos de análise (README, módulos 01–04 e propostas de solução).
> **Lacunas abertas:** ver coluna "O que falta".

## Resumo

O Residuum tem **muita** documentação, mas ela está **espalhada em 3 repositórios, repetida e contraditória**. De 14 documentos que um projeto de software normalmente tem, **1 não existe**, **3 existem mas estão desatualizados ou conflitantes** e **10 existem só em parte**. O trabalho principal não é escrever do zero: é **juntar, reconciliar e fatiar**.

Legenda: ✅ pronto · 🟡 parcial · 🔴 conflitante/desatualizado · ⚪ ausente

## Matriz

| # | Documento | Situação | O que já temos | O que falta para o definitivo | Esboço |
|---|---|---|---|---|---|
| 1 | Visão e Escopo | 🟡 | `docs/visao/visao-do-projeto.md` | Lista do que **não** será feito; métricas do piloto | [visao-e-escopo](../01-planejamento/visao-e-escopo.md) |
| 2 | PRD / SRS | 🔴 | V6 (1703 linhas) + regras de negócio | Decisões D1–D12 fechadas; uma versão só | [prd-srs](../01-planejamento/prd-srs.md) |
| 3 | Backlog e histórias | 🟡 | 93 atividades em `tasks-gerais.md` | Formato "Como… quero… para…"; ondas | [backlog](../01-planejamento/backlog-e-historias.md) |
| 4 | Arquitetura (SAD) | 🟡 | `stacks-e-integracoes.md`, `arquitetura-refatoracao-banco.md` | Camadas, ledger, auth, ambientes | [sad](../02-arquitetura/sad.md) |
| 5 | Diagramas | ⚪ | Só descrições em texto nas propostas | ER do banco; estados de descarte, sorteio, coleta | [diagramas](../02-arquitetura/diagramas.md) · [dados](../02-arquitetura/modelo-de-dados.md) |
| 6 | Wireframes / UX | 🟡 | `docs/ux/` (só morador V6) | Telas do responsável, cooperativa e admin | [indice-de-telas](../03-ux/indice-de-telas.md) |
| 7 | Documentação de API | ⚪ | Só OpenAPI automático; README do backend defasado | Tabela por rota, com rotas a remover | [api](../04-desenvolvimento/api.md) |
| 8 | README | 🔴 | 3 READMEs (raiz, back, front) | Remover QR/papéis antigos; setup testado | ver `README.md` |
| 9 | CONTRIBUTING | ⚪ | Rascunho em `tmp/` | Branches, commits, PR, Definição de Pronto | [CONTRIBUTING](../../CONTRIBUTING.md) |
| 10 | Plano de testes | 🟡 | `testes-integrados.md` (planejado) | Evidências; testes em PostgreSQL | [plano](../05-qualidade/plano-de-testes.md) |
| 11 | Casos de teste | 🟡 | Critérios "Aceite + teste" nas fichas | Formato pré-condição/passos/esperado | [casos](../05-qualidade/casos-de-teste.md) |
| 12 | Guia de deploy | 🟡 | `deploy.yaml`, Dockerfiles | Ambientes, variáveis, flags, rollback | [deploy](../06-operacao/guia-de-deploy.md) |
| 13 | Notas de versão | 🟡 | `backend/CHANGES.md` | Versionamento; front | [release-notes](../06-operacao/release-notes.md) |
| 14 | Manual do usuário | 🔴 | `frontend/docs/manual_funcionalidades.md` (V5) | Refazer por perfil pós-V6 | [manual](../07-usuario/manual-do-usuario.md) |

## Problemas que atravessam vários documentos

1. **Sem fonte única.** Requisitos existem em 3 lugares (`docs/requisitos`, `backend/docs/requisitos.md`, `frontend/docs/requisitos.md`).
2. **Contradições de regra.** 10 pontos por operação (V6) × 5 por unidade (regras de saldo e código). Quem confirma o descarte também diverge. Detalhes em [decisoes-pendentes](decisoes-pendentes.md).
3. **Arquivos grandes demais para ler.** `tasks-gerais.md` (6591 linhas), `decisoes.md` (3768), V6 (1703).
4. **Docs obsoletos ainda no código.** `GUIA-INTEGRACAO-FRONT.md` e `PEDENCIAS-ENVIADAS-PELO-FRONT.md` no backend; READMEs ainda prometem QR code.
5. **Formatos fora de `.md`.** PDFs em `frontend/docs/` (DLR V4/V5, manual) precisam ser convertidos.
6. **Lixo de trabalho versionável.** Pasta `tmp/` com cópias e tentativas de reorganização.

## Detalhes: inventário por repositório

- **Documentação** (`docs/`, 65 arquivos): visão, requisitos, planejamento por módulo (m01–m11), UX do morador, pesquisa de mercado, histórico.
- **Backend:** README de 746 linhas, `CHANGES.md`, `docs/` (admin-features, requisitos), 32 migrações Alembic, 3 arquivos de teste, um workflow (migração + deploy Vercel, sem CI de testes).
- **Frontend:** README, `docs/` (requisitos, ata, falas de reunião, manual, PDFs), CI e templates de issue.

## Como usar esta matriz

Cada esboço traz no topo o bloco *Estado / Fontes / Lacunas* e marcas no texto:
`[LACUNA]` falta informação · `[DECISÃO: Dx]` depende de decisão · `[VERIFICAR NO CÓDIGO]` precisa conferir.
Para listar tudo que falta: `grep -rn "LACUNA\|DECISÃO\|VERIFICAR" docs/`.
