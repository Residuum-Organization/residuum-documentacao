# Residuum: guia da documentação

> **Atualizado em:** 14/11/2026 · Só arquivos `.md`; diagramas em Mermaid. O código fica em `residuum-backend` e `residuum-frontend`.

## Onde está cada coisa

| Pasta | O que tem | Comece por |
|---|---|---|
| [`00-diagnostico`](00-diagnostico/) | Diagnóstico, **decisões em aberto**, roteiro de revisão | [Decisões pendentes](00-diagnostico/decisoes-pendentes.md) |
| [`01-planejamento`](01-planejamento/) | Visão, PRD, backlog, 27 decisões (PD), regras de negócio | [Visão e escopo](01-planejamento/visao-e-escopo.md) |
| [`02-arquitetura`](02-arquitetura/) | SAD, ADRs, modelo de dados, diagramas, stacks, branches | [SAD](02-arquitetura/sad.md) |
| [`03-ux`](03-ux/) | Protótipo no FigCraft, índice de telas | [Protótipo](03-ux/prototipo-figcraft.md) |
| [`04-desenvolvimento`](04-desenvolvimento/) | API | [API](04-desenvolvimento/api.md) |
| [`05-qualidade`](05-qualidade/) | Plano e casos de teste | [Plano de testes](05-qualidade/plano-de-testes.md) |
| [`06-operacao`](06-operacao/) | Deploy e notas de versão | [Guia de deploy](06-operacao/guia-de-deploy.md) |
| [`07-usuario`](07-usuario/) | Manual do usuário | [Manual](07-usuario/manual-do-usuario.md) |
| [`08-manutencao`](08-manutencao/) | Diário de bordo, governança, rotina de reuniões, Kanban, **prompt de retomada** | [Prompt de retomada](08-manutencao/prompt-de-retomada.md) |
| [`09-pesquisa`](09-pesquisa/) | Mercado, concorrentes, pontos, piloto, pagamento | [Índice](09-pesquisa/README.md) |
| [`historico`](historico/) | Versões antigas (V1 a V6, tasks, UX V6 e V2), só para rastreio | [Histórico](historico/README.md) |

## Atalhos por assunto

| Preciso de | Documento |
|---|---|
| O que está decidido e o que falta decidir | [Decisões pendentes](00-diagnostico/decisoes-pendentes.md) |
| Requisitos e regras de negócio | [PRD/SRS](01-planejamento/prd-srs.md) · [Regras](01-planejamento/regras/regras-de-negocio.md) |
| Backlog por perfil e por onda | [Backlog e histórias](01-planejamento/backlog-e-historias.md) |
| Decisões individuais (PD-001 a PD-027) | [Índice das decisões](01-planejamento/decisoes/README.md) |
| Regras de pontos, campanhas e sorteios | [Campanhas](01-planejamento/regras/regras-de-campanhas.md) · [Saldo e vouchers](01-planejamento/regras/regras-de-saldo-vouchers-sorteios.md) |
| Decisões de arquitetura (ADR) | [`02-arquitetura/adr`](02-arquitetura/adr/) |
| Retomar o trabalho de documentação | [Prompt de retomada](08-manutencao/prompt-de-retomada.md) |

## Convenções

- **Uma decisão em aberto vive em um só lugar:** [decisões pendentes](00-diagnostico/decisoes-pendentes.md).
- Nomes em minúsculas e com hífen; pastas numeradas na ordem de leitura.
- O que foi substituído vai para [`historico`](historico/README.md), nunca é apagado.
- Documento preparado não é teste executado: os documentos distinguem requisito, proposta, teste planejado e evidência.
- Detalhes de contribuição: [CONTRIBUTING](../CONTRIBUTING.md).
