# Roteiro de revisão da documentação

> **Estado:** em uso · **Dono:** Vinicius · **Atualizado em:** 11/11/2026
> **Para quê:** ler os documentos novos um por um, dar o seu parecer e acompanhar o progresso por módulo.
> **Tempo total estimado:** cerca de **2h40 de leitura**, mais pausas e anotações (**~3h15**). Cabe numa tarde.

## Como usar

1. Siga a **Lista 1** na ordem. Ela já está na ordem de leitura recomendada.
2. Marque `[x]` em **Feito** e escreva o parecer em **Meu parecer** (ou em uma palavra: ✅ ok · ✏️ ajustar · ❌ refazer · ❓ dúvida).
3. A **Lista 2** mostra o progresso por módulo. Copie a tabela para a sua agenda.
4. Quando terminar um bloco, me passe os pareceres e eu ajusto os arquivos na própria branch.

Os tempos são **leitura atenta mais anotação** (cerca de 200 palavras por minuto, com folga). Documentos marcados *rascunho* têm muitas lacunas de propósito: o que importa é a estrutura, não o texto.

---

## Lista 1: documentos gerados, na ordem de leitura

### Bloco 1: Produto (≈ 34 min)

| # | Documento | Min | O que avaliar | Feito | Meu parecer |
|---|---|---|---|---|---|
| 1 | [Visão e escopo](../01-planejamento/visao-e-escopo.md) | 10 | Só o que mudou: números do problema (seção 1), pendências (seção 4), metas do piloto (seção 6) | [x] | ✏️ ajustado em 11/11: metas aprovadas; leitura do código de barras sem limite (manual recomendado após 2 falhas); Manaus com SINISA 2024; "usuário" em todos os documentos; estudo de PD-009 e PD-014 |
| 2 | [Decisões pendentes](decisoes-pendentes.md) | 5 | Quais decisões você ou o produto precisam tomar | [x] | ✅ 11/11: as 6 decisões que travavam foram respondidas (pontos, operador confirma, confirmação final, N:N com admin, sorteio devolve, parecer adiado) |
| 3 | [PRD](../01-planejamento/prd-srs.md) | 8 | Qual documento vale para cada assunto; as 6 contradições | [x] | ✅ 11/11: contradições 1 a 4 resolvidas (pontos, materiais só PET e lata no início, operador confirma, bônus pelo botão); 5 e 6 são correções de código |
| 4 | [Backlog e histórias](../01-planejamento/backlog-e-historias.md) | 6 | Ondas de entrega e as histórias-modelo | [x] | ✅ 11/11: ondas mantidas; 5 histórias novas das decisões do dia; coleta parcial permitida (PD-014) |
| 5 | [Matriz de adequação](matriz-de-adequacao.md) | 5 | O que existe × o que falta nos 14 documentos | [x] | ✏️ 11/11: atualizada; a pedido, trabalhamos nos 3 "ausentes" (diagramas, API, CONTRIBUTING) |

*Opcional:* [Plano de adequação](plano-de-adequacao.md), 15 min. Já foi aprovado; releia só se quiser rever a ordem das partes.

### Bloco 2: Pesquisas (≈ 21 min)

| # | Documento | Min | O que avaliar | Feito | Meu parecer |
|---|---|---|---|---|---|
| 6 | [Dados do problema](../pesquisa/dados-do-problema.md) | 6 | Os 3 números e os `[VERIFICAR fonte]` | [x] | ✏️ 11/11: 3 números da Visão com fonte (fonte dos 23% corrigida); 4 restantes conferidos: Norte trocado por 38,7% (Abrema 2025), SINISA 2024 acrescentado; PEVs e dados de 2020/2021 a confirmar com a Semulsp |
| 7 | [Controle de acesso](../pesquisa/controle-de-acesso.md) | 4 | Qual opção você prefere; valor de X | [x] | ✅ 11/11: trava de vagas no banco, X = 500, código individual de uso único, vaga devolvida ao excluir conta, lista de espera |
| 8 | [Fontes de produtos e notas](../pesquisa/fontes-de-produtos-e-notas.md) | 6 | Quais testes você quer que a equipe faça | [x] | ✅ 11/11: 50 códigos de barras em 2 fontes, 10 notas da SEFAZ-AM, leitura nos celulares do piloto; material com sugestão + confirmação sempre |
| 9 | [Provedores de pagamento](../pesquisa/provedores-de-pagamento.md) | 5 | API no MVP ou pagamento manual primeiro? | [x] | ✅ 11/11: manual com comprovante no piloto, API depois; pagador Residuum; valor por kg e material |

### Bloco 3: Arquitetura e design (≈ 46 min)

| # | Documento | Min | O que avaliar | Feito | Meu parecer |
|---|---|---|---|---|---|
| 10 | [Arquitetura (SAD)](../02-arquitetura/sad.md) | 7 | Stack, camadas e o fluxo "como é hoje" | [x] | ✏️ 11/11: alinhado às decisões; produção = API na Vercel + PostgreSQL na Neon; backups e homologação a confirmar |
| 11 | [Diagramas](../02-arquitetura/diagramas.md) | 5 | Estados "hoje × proposto" | [x] | ✏️ 11/11: alinhados às decisões; novos diagramas de pagamento manual e de campanha; coleta com "a caminho" e cancelamento por admin e cooperativa |
| 12 | [Modelo de dados](../02-arquitetura/modelo-de-dados.md) | 8 | A tabela de achados e a nota sobre a branch do backend | [x] | ✏️ 11/11: modelo proposto alinhado; estrutura conferida com a Neon (= `main`, 22 tabelas); `senha_hash` no pedido público de ponto |
| 13 | [Dicionário de dados](../02-arquitetura/dados/README.md) | 10 | Leia o índice e **um** dos três arquivos; os outros por amostra | [x] | ✅ 11/11: ok; acrescentadas as diferenças do banco da Neon |
| 14 | [ADRs](../02-arquitetura/adr/README.md) | 10 | Aceitar, rejeitar ou ajustar cada uma das 5 propostas | [x] | ✅ 11/11: as 5 aceitas, ajustadas às decisões do dia (10 por descarte sem estorno, N:N, "a caminho", código individual e teto de 500) |
| 15 | [Índice de telas](../03-ux/indice-de-telas.md) | 6 | Telas por perfil e o que está sem desenho | [x] | ✏️ 11/11: 11 telas que mudam e 3 novas pelas decisões; ponto cheio bloqueia e sugere outro (PD-009) |

### Bloco 4: Rascunhos das partes 3 a 6 (≈ 28 min)

Estes documentos estão **em esboço**. Avalie a estrutura e o que falta; o conteúdo será preenchido nas próximas partes.

| # | Documento | Min | Parte | Feito | Meu parecer |
|---|---|---|---|---|---|
| 16 | [API](../04-desenvolvimento/api.md) | 4 | 3 | [ ] | 🆕 reescrita em 11/11 (113 rotas), na PR #9 |
| 17 | [Como contribuir](../../CONTRIBUTING.md) | 3 | 3 | [ ] | 🆕 reescrito em 11/11, na PR #9 |
| 18 | [Plano de testes](../05-qualidade/plano-de-testes.md) | 3 | 4 | [ ] | |
| 19 | [Casos de teste](../05-qualidade/casos-de-teste.md) | 5 | 4 | [ ] | |
| 20 | [Guia de deploy](../06-operacao/guia-de-deploy.md) | 4 | 5 | [ ] | |
| 21 | [Notas de versão](../06-operacao/release-notes.md) | 2 | 5 | [ ] | |
| 22 | [Manual do usuário](../07-usuario/manual-do-usuario.md) | 4 | 5 | [ ] | |
| 23 | [Governança da documentação](../08-manutencao/governanca-da-documentacao.md) | 3 | 6 | [ ] | |

### Bloco 5: Arquivos fatiados, por amostra (≈ 30 min)

São **cópias fatiadas do texto original** (cerca de 82 mil palavras no total). **Não é preciso ler tudo**: confira só que o conteúdo bate com a origem e que a navegação funciona.

| # | Amostra | Min | O que conferir | Feito | Meu parecer |
|---|---|---|---|---|---|
| 24 | [Índice dos requisitos](../01-planejamento/requisitos/README.md) e [M04 pontuação](../01-planejamento/requisitos/m04-pontuacao-saldo-e-extrato.md) | 10 | O texto do M04 é igual ao da V6, linhas 576 a 665 | [ ] | |
| 25 | [Índice das decisões](../01-planejamento/decisoes/README.md) e [PD-010](../01-planejamento/decisoes/pd-010.md) | 10 | A coluna "Situação" está correta | [ ] | |
| 26 | [Índice do backlog](../01-planejamento/backlog/README.md), [pasta do usuário](../01-planejamento/backlog/morador/README.md) e [TSK-MOR-017](../01-planejamento/backlog/morador/tsk-mor-017.md) | 10 | As 93 atividades estão onde se espera | [ ] | |

**Total:** 159 min de leitura (2h40), fora o plano opcional.

---

## Lista 2: mapa de progresso por módulo

Cada módulo é uma pasta de `docs/`. Copie esta tabela para a sua agenda e atualize.

| Módulo | Pasta | Documentos | Escrito | Revisado por você |
|---|---|---|---|---|
| 00 Diagnóstico | `00-diagnostico` | matriz, plano, decisões pendentes, este roteiro | 🟡 revisão | ☐ 0/3 |
| 01 Planejamento e requisitos | `01-planejamento` | visão, PRD, backlog, + 3 pastas fatiadas | 🟡 revisão | ☐ 0/3 + amostra |
| Pesquisas de apoio | `pesquisa` | 4 documentos novos | 🟡 revisão | ☐ 0/4 |
| 02 Arquitetura | `02-arquitetura` | SAD, diagramas, modelo de dados, dicionário, 5 ADRs | 🟡 revisão | ☐ 0/5 |
| 03 UX | `03-ux` | índice de telas | 🟡 revisão | ☐ 0/1 |
| 04 Desenvolvimento | `04-desenvolvimento` + raiz | API, CONTRIBUTING | 🔴 esboço | ☐ 0/2 |
| 05 Qualidade | `05-qualidade` | plano de testes, casos de teste | 🔴 esboço | ☐ 0/2 |
| 06 Operação | `06-operacao` | deploy, notas de versão | 🔴 esboço | ☐ 0/2 |
| 07 Usuário | `07-usuario` | manual | 🔴 esboço | ☐ 0/1 |
| 08 Manutenção | `08-manutencao` | governança, diário de bordo | 🔴 esboço | ☐ 0/1 |

### Requisitos por perfil (ordem sugerida: usuário → ponto → cooperativa → administrador)

Para quando você quiser aprofundar além da amostra. Cada linha junta o requisito, o backlog e o que pode estar pendente.

| Ordem | Perfil | Requisitos (V6 fatiada) | Backlog | Decisões relacionadas |
|---|---|---|---|---|
| 1 | **Usuário** | [M01 acesso](../01-planejamento/requisitos/m01-acesso-usuarios-e-convites.md), [M02 cadastro](../01-planejamento/requisitos/m02-cadastro-de-residuos-e-estoque.md), [M03 entrega](../01-planejamento/requisitos/m03-mapa-presenca-e-descarte.md), [M04 pontos](../01-planejamento/requisitos/m04-pontuacao-saldo-e-extrato.md), [M05 loja](../01-planejamento/requisitos/m05-loja-campanhas-vouchers-e-sorteios.md) | [26 atividades](../01-planejamento/backlog/morador/README.md) | PD-001 a 006, 010 a 013 |
| 2 | **Ponto de coleta** | [M06 pontos e painel](../01-planejamento/requisitos/m06-pontos-de-coleta-e-painel-do-responsavel.md) | [5 atividades](../01-planejamento/backlog/ponto-de-coleta/README.md) | PD-007, 009, 023 |
| 3 | **Cooperativa** | [M07 coletas](../01-planejamento/requisitos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md) | [4 atividades](../01-planejamento/backlog/cooperativa/README.md) | PD-014, 017, 018 |
| 4 | **Administrador** | [M08 pagamento](../01-planejamento/requisitos/m08-pagamento-das-coletas.md), [M09 painel](../01-planejamento/requisitos/m09-administracao-indicadores-e-relatorios.md), [M10 planos](../01-planejamento/requisitos/m10-planos-e-acesso-comercial-a-dados.md), [M11 mídias](../01-planejamento/requisitos/m11-midias-e-comunicacao.md) | [17 atividades](../01-planejamento/backlog/administrador/README.md) | PD-015, 016, 019 a 021, 024 |
| 5 | **Transversal** | [Regras](../01-planejamento/requisitos/07-regras-de-negocio-consolidadas.md), [RNF](../01-planejamento/requisitos/08-requisitos-nao-funcionais.md) | [14 atividades](../01-planejamento/backlog/transversais/README.md) | PD-022, 025, 026 |

---

## Agenda sugerida para a tarde (a partir das 13h30)

| Horário | Bloco | Duração |
|---|---|---|
| 13:30 – 14:05 | **1. Produto** (documentos 1 a 5) | 35 min |
| 14:05 – 14:30 | **2. Pesquisas** (6 a 9) | 25 min |
| 14:30 – 15:20 | **3. Arquitetura e design** (10 a 15) | 50 min |
| 15:20 – 15:30 | Pausa | 10 min |
| 15:30 – 16:00 | **4. Rascunhos das partes 3 a 6** (16 a 23) | 30 min |
| 16:00 – 16:35 | **5. Fatiados por amostra** (24 a 26) | 35 min |
| 16:35 – 16:55 | **Fechamento:** reunir pareceres e decidir os merges | 20 min |

**É possível terminar numa tarde?** Sim, a leitura dos 23 documentos autorais e das 3 amostras cabe em cerca de 3h25 com pausa, se você não parar para decidir assuntos de produto no meio. As decisões que dependem do produto (valor do ponto, quem confirma o descarte, X de usuários, API de pagamento) **ficam anotadas, não resolvidas**: resolvê-las exige conversa com outras pessoas e não cabe no mesmo bloco.

**O que não cabe:** ler todo o texto original fatiado (≈ 82 mil palavras, mais de 6 horas). Esse texto já existia; o que mudou foi só a divisão em arquivos.

## Depois da revisão

1. Me passe os pareceres (cole a tabela preenchida).
2. Eu ajusto os arquivos em cada branch.
3. Ordem de mescla das Pull Requests: ver o [diário de bordo de 11/11](../08-manutencao/diario-de-bordo/2026-11-11.md).
