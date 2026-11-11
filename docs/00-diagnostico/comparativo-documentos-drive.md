# Comparativo: documentos do Google Drive × repositório

> **Estado:** revisão · **Dono:** Produto · **Elaborado em:** 11/11/2026
> **Fontes:** 12 documentos das pastas de projeto no Google Drive (abril a junho de 2026), listados abaixo; código do backend na branch `feature/mor-025-026-vouchers-sorteios` (`11f0d8e`).
> **Lacunas:** relatórios individuais de alunos não foram lidos (contêm dados pessoais); pastas "Segurança e Teste" e "Cloud" estavam vazias.

## Resumo

Os documentos do Drive são **anteriores** à V6 (outubro de 2026) e às decisões de 11/11/2026. Servem como **histórico**: mostram de onde vieram os requisitos (RF001 a RF030) e o que a equipe entregou em maio. Quatro pontos conflitavam com o que vale hoje; todos foram decididos em 11/11. Várias entregas marcadas como "feitas" no Backlog v2 **não aparecem no código** e devem ser tratadas como não verificadas.

## Documentos lidos

| Pasta | Documento | Data | Uso aqui |
|---|---|---|---|
| Estratégico | Levantamento de Requisitos (v1.0, reunião com o fundador) | 16/04/2026 | Origem dos RF001–RF027 e RNF001–RNF011 |
| Gestão | Levantamento de Requisitos V4.0 (matriz impacto × esforço) | jun/2026 | Prioridades e o que ficou fora do MVP |
| Gestão | Plano de Tasks por Módulo (OKR, sprints 1–5) | jun/2026 | Metas por módulo e riscos |
| Gestão | Backlog v2 | 07/06/2026 | Status declarado das entregas |
| Gestão | Relatório de entrega (modelo) | 07/06/2026 | Modelo de relatório; sem conteúdo técnico |
| Banco de Dados | Relatório final e relatório de liderança | jun/2026 | Histórico: modelagem MySQL e conversão para PostgreSQL |
| Back-end | Documentação técnica consolidada | 21/05/2026 | Histórico do fluxo de descarte (maio) |
| Back-end | Documentação das implementações (RF010, RF012–RF014) | 15/05/2026 | Idem |
| Back-end | Relatório de alterações (tasks 5 a 11) | 16/05/2026 | Idem |
| Back-end | Infraestrutura e persistência; validação de descarte | 16 e 17/05/2026 | Idem |

## Conflitos e como ficaram (decididos em 11/11/2026)

| Tema | Drive (abr–jun/2026) | Decisão de 11/11/2026 |
|---|---|---|
| Pontos | Depois da pesagem da cooperativa, proporcionais ao peso (**10 por kg**) | **10 por descarte**, na confirmação do operador; a pesagem não gera pontos ([PD-010](../01-planejamento/decisoes/pd-010.md)) |
| Quem cria ponto de coleta | Qualquer CPF ou CNPJ pede; admin aprova (RF003–RF005) | **Só o admin cadastra** (RN-011). O pedido público deve sair do código |
| Raio do GPS | 100 m configurável (DLR); 1.000 m fixo (código de maio) | **100 m por padrão, ajustável por ponto** ([PD-008](../01-planejamento/decisoes/pd-008.md)) |
| QR Code no ponto | Implementado em maio (token de 1 h) | **Fora do MVP**; fica como evolução (PD-027) |

A regra dos pontos mudou quatro vezes: 10 por kg (maio) → 10 por operação (V6) → 5 por unidade (22/10) → **10 por descarte (11/11)**.

## Entregas declaradas e não encontradas no código `[VERIFICAR]`

O Backlog v2 marca como **Done**, mas o backend atual não mostra:

| Item declarado | O que se vê no código |
|---|---|
| Terraform (IaC) e Secrets Manager | Deploy pela Vercel (`deploy.yaml`); sem Terraform |
| Criptografia de CPF e localização (LGPD) | Não encontrada |
| Backups automáticos e teste de restore | Não encontrados no repositório |
| Lighthouse como gate no CI | Backend sem CI de testes |
| Pontos com "Gift-Back" proporcional após pesagem | Substituído; ver conflitos acima |

## Outras diferenças

| Tema | Drive | Hoje |
|---|---|---|
| Prazo do MVP | 30/06/2026 | 20/11/2026 ([Visão](../01-planejamento/visao-e-escopo.md)) |
| Materiais | Começar com PET; depois papel e papelão. O código de maio aceitava 9 tipos | **PET e lata** no MVP |
| Campanhas | Só depois de 1 parceiro comercial confirmado | Já implementadas; só PET e lata no início |
| Ferramentas sugeridas | Cloud Run, NextAuth, React Admin | FastAPI, React + Vite, Vercel |

## O que aproveitar

- **"~13 pontos públicos de coleta em Manaus, além de grandes supermercados"**: informação da reunião de 16/04/2026 com o fundador. Pode entrar nos [dados do problema](../pesquisa/dados-do-problema.md), citando a reunião como fonte.
- **Identidade visual:** fundo branco, azul-marinho `#1F4E79`, cinza e verde de apoio; "tom de tecnologia, não de empresa ambiental tradicional" (RNF009).
- **Objetivos de negócio:** base qualificada de quem descarta, descentralizar pontos, dados para rotas das cooperativas, receita com venda de dados (com consentimento).
- **Riscos:** scanner e GPS instáveis em Android de entrada; fraude nos pontos; LGPD antes do lançamento; parceiros não confirmados; excesso de engenharia antes de validar.
- **Histórico do banco:** modelagem em MySQL Workbench convertida para PostgreSQL (`SERIAL`, `TIMESTAMP`, `BOOLEAN`, `CHECK` no lugar de `ENUM`). O banco atual é versionado por Alembic; o modelo do Drive é anterior.

## O que falta

- [ ] Conferir com a equipe os itens `[VERIFICAR]` (Terraform, LGPD, backups)
- [ ] Levar os "~13 pontos públicos" para os dados do problema
- [ ] Levar a identidade visual para o índice de telas e o manual
- [ ] Levar a tabela de riscos para o SAD
