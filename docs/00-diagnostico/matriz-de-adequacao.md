# Matriz de adequação da documentação

> **Estado:** revisão · **Dono:** Vinicius ·
> **Fontes:** inventário do repositório local + 9 documentos de análise (README, módulos 01–04 e propostas de solução).
> **Pendências:** coluna "O que falta" e [decisões pendentes](decisoes-pendentes.md).

## Resumo

O Residuum tem **muita** documentação, mas ela está **espalhada em 3 repositórios, repetida e contraditória**. De 14 documentos que um projeto de software normalmente tem, **1 não existe**, **3 existem mas estão desatualizados ou conflitantes** e **10 existem só em parte**. O trabalho principal não é escrever do zero: é **juntar, reconciliar e fatiar**.

Legenda: ✅ pronto · 🟡 parcial · 🔴 conflitante/desatualizado · ⚪ ausente

## Matriz

| # | Documento | Situação | O que já temos | O que falta para o definitivo | Esboço |
|---|---|---|---|---|---|
| 1 | Visão e Escopo | 🟡 | `docs/visao/visao-do-projeto.md` | Revisada em 11/11: limites, evolução fora do MVP e **metas do piloto aprovadas**. Falta a validação formal do produto | [visao-e-escopo](../01-planejamento/visao-e-escopo.md) |
| 2 | PRD / SRS | 🟡 | PRD como índice mestre; V6 fatiada em [20 arquivos](../01-planejamento/requisitos/README.md); regras de saldo e campanhas mescladas | Contradições 1 a 4 resolvidas em 11/11 (5 e 6 são correções de código). Falta a validação formal do produto | [prd-srs](../01-planejamento/prd-srs.md) |
| 3 | Backlog e histórias | 🟡 | 93 atividades em [um arquivo cada](../01-planejamento/backlog/README.md) + [27 decisões](../01-planejamento/decisoes/README.md) | 5 histórias novas em 11/11. Falta converter as demais e ligar os 71 achados às atividades | [backlog](../01-planejamento/backlog-e-historias.md) |
| 4 | Arquitetura (SAD) | 🟡 | [SAD](../02-arquitetura/sad.md) com versões e camadas do código; [5 ADRs](../02-arquitetura/adr/README.md) aceitas | Topologia real e homologação | [sad](../02-arquitetura/sad.md) |
| 5 | Diagramas | 🟡 | [ER real](../02-arquitetura/modelo-de-dados.md) com 27 tabelas e [dicionário](../02-arquitetura/dados/README.md); estados hoje × proposto | Conferir contra banco PostgreSQL; diagramas de pagamento | [diagramas](../02-arquitetura/diagramas.md) · [dados](../02-arquitetura/modelo-de-dados.md) |
| 6 | Wireframes / UX | 🟡 | [Índice de 42 telas](../03-ux/indice-de-telas.md) e **[protótipo no FigCraft](../03-ux/prototipo-figcraft.md)**: 82 telas novas, 12 fluxos, antes e depois, três perfis | Fechar o arquivo v7 (três larguras por tela), testar a apresentação e exportar os SVG para o Figma | [prototipo-figcraft](../03-ux/prototipo-figcraft.md) |
| 7 | Documentação de API | 🟡 | **11/11:** tabela das 113 rotas lida do código, com o que muda por decisão e as rotas que faltam | Corpos e erros por rota (exportar `/openapi.json`) | [api](../04-desenvolvimento/api.md) |
| 8 | README | 🔴 | 3 READMEs (raiz, back, front) | Remover QR/papéis antigos; setup testado | ver `README.md` |
| 9 | CONTRIBUTING | 🟡 | **11/11:** práticas reais da equipe (só `main`, PR, prefixos), regras de negócio e Definição de Pronto | Revisores obrigatórios; proteger a `main` (`feature/` padronizado em 11/11) | [CONTRIBUTING](../../CONTRIBUTING.md) |
| 10 | Plano de testes | 🟡 | `testes-integrados.md` (planejado) | Evidências; testes em PostgreSQL | [plano](../05-qualidade/plano-de-testes.md) |
| 11 | Casos de teste | 🟡 | Critérios "Aceite + teste" nas fichas | Formato pré-condição/passos/esperado | [casos](../05-qualidade/casos-de-teste.md) |
| 12 | Guia de deploy | 🟡 | `deploy.yaml`, Dockerfiles | Ambientes, variáveis, flags, rollback | [deploy](../06-operacao/guia-de-deploy.md) |
| 13 | Notas de versão | 🟡 | `backend/CHANGES.md` | Versionamento; front | [release-notes](../06-operacao/release-notes.md) |
| 14 | Manual do usuário | 🔴 | `frontend/docs/manual_funcionalidades.md` (V5) | Refazer por perfil pós-V6 | [manual](../07-usuario/manual-do-usuario.md) |

## Problemas que atravessam vários documentos

1. **Sem fonte única.** Requisitos existem em 3 lugares (`docs/requisitos`, `backend/docs/requisitos.md`, `frontend/docs/requisitos.md`).
2. **Contradições de regra.** ✅ Resolvidas na documentação em 11/11/2026: **10 pontos por descarte** e **o operador confirma**. O **código ainda diverge** (paga 5 por unidade). Detalhes em [decisoes-pendentes](decisoes-pendentes.md).
3. **Arquivos grandes demais para ler.** `tasks-gerais.md` (6591 linhas), `decisoes.md` (3768), V6 (1703).
4. **Docs obsoletos ainda no código.** `GUIA-INTEGRACAO-FRONT.md` e `PEDENCIAS-ENVIADAS-PELO-FRONT.md` no backend; READMEs ainda prometem QR code.
5. **Formatos fora de `.md`.** PDFs em `frontend/docs/` (DLR V4/V5, manual) precisam ser convertidos.
6. **Lixo de trabalho versionável.** Pasta `tmp/` com cópias e tentativas de reorganização.

## Detalhes: inventário por repositório

- **Documentação** (`docs/`, 65 arquivos): visão, requisitos, planejamento por módulo (m01–m11), UX do usuário, pesquisa de mercado, histórico.
- **Backend:** README de 746 linhas, `CHANGES.md`, `docs/` (admin-features, requisitos), 34 migrações Alembic (branch `feature/mor-025-026-vouchers-sorteios`), 3 arquivos de teste, um workflow (migração + deploy Vercel, sem CI de testes).
- **Frontend:** README, `docs/` (requisitos, ata, falas de reunião, manual, PDFs), CI e templates de issue.

## Como usar esta matriz

Cada esboço traz no topo o bloco *Estado / Fontes / Lacunas* e marcas no texto:
`[LACUNA]` falta informação · `[DECISÃO: Dx]` (não é mais usada nos documentos: as decisões em aberto ficam em [decisões pendentes](decisoes-pendentes.md)) · `[VERIFICAR NO CÓDIGO]` precisa conferir.
Para listar tudo que falta: `grep -rn "LACUNA\|DECISÃO\|VERIFICAR" docs/`.
