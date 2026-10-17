# Residuum — guia dos documentos

**[Documento geral das atividades por módulo e perfil](../../01-planejamento/README.md)** — modelo padronizado, testes, proposta de Scrum e matriz de importância; responsáveis e datas a preencher pela equipe.


**Para a reunião de 13/10/2026:** siga a ordem abaixo. Cada assunto tem uma referência principal; versões antigas ficam em `historico`.

| Ordem | Assunto | Documento para abrir | O que apresentar |
|---|---|---|---|
| 1 | Visão do projeto | [Problemática e solução](../../02-produto/01-visao.md) | Problema, participantes, solução, valor esperado, fluxo e limites do MVP |
| 2 | Estudo realizado | [Estudos e diagnóstico](../../03-tecnologia/04-estudos.md) | Referências utilizadas, análise do MVP existente, resultados e limites das evidências |
| 3 | Requisitos | [Especificação do MVP V6](../../02-produto/02-requisitos-mvp-v6.md) | Escopo, 53 requisitos funcionais, 12 não funcionais, permissões e critérios de aceite |
| 4 | Regras de negócio | [Guia das regras](../../02-produto/03-regras-de-negocio.md) | Acesso, materiais, descarte, recompensas, coleta, pagamento e dados |
| 5 | Tasks de desenvolvimento | [Kanban do time](../../08-manutencao/02-mapa-de-migracao.md#exclusoes-anteriores) (documento excluído; consulte o registro de migração) e [guia de apoio](tasks-do-time.md) | 93 cartões por área no Miro; documentação de critérios e pacotes ADE preservada |
| 6 | Encaminhamentos | [Pendências da V6](../../02-produto/02-requisitos-mvp-v6.md#12-pendências-de-decisão) e [roteiro de adequação](tasks-adequacao-reativacao-mvp-v1.md) | Decisões necessárias, prioridades, responsáveis e próximos passos a acordar |

## Como conduzir a apresentação

Comece pelo problema e pela solução. Mostre a jornada do morador e a jornada da cooperativa, diferenciando descarte, coleta e pagamento. Em seguida, explique o resultado do estudo do código: existe base reaproveitável, mas há falhas de integridade e acesso que precisam de adequação.

Nos requisitos, use o sumário da V6 para navegar por módulo; não é necessário ler os 53 RF durante a reunião. Nas regras, destaque que registrar não concede pontos, cada descarte concluído concede 10 pontos básicos uma vez e pesagem não concede novamente a recompensa. Termine pelas tasks de desenvolvimento, sua ordem de execução e pelas decisões que impedem completar capacidades do MVP.

As [stacks e integrações](../../03-tecnologia/01-stacks-e-integracoes.md) permanecem como consulta complementar. Tasks são as tarefas do time; stacks são as tecnologias.

**Resultado esperado da reunião:** alinhar o entendimento do produto e registrar quais decisões e pacotes de trabalho serão tratados, com responsáveis. Este guia não aprova requisitos nem define um novo prazo de entrega.

## Onde estamos

- **Especificação:** V6 consolidada para validação, com decisões ainda pendentes. Consulte a situação de cada requisito.
- **Implementação existente:** diagnóstico de 09/10/2026 registra 4 capacidades para reaproveitar, 34 para ajustar e 15 para construir. Isso não é percentual de conclusão.
- **Experiência do morador:** [handoff V6](../../04-ux/01-morador-v6/01-handoff.md), [validação técnica](../../04-ux/01-morador-v6/02-validacao.md) e [plano de teste com usuários](../../04-ux/01-morador-v6/03-teste-com-usuarios.md). Integração real e validação com moradores permanecem pendentes conforme esses registros.
- **Demonstração V2:** [estado no Lovable](../../04-ux/02-demonstracao-v2/01-status.md), entrega parcial com continuidade bloqueada por créditos.

## Consulta por pasta

| Pasta | Quando consultar |
|---|---|
| `visao` | Entender o negócio e consultar as referências de origem |
| `estudos` | Localizar e interpretar os estudos existentes |
| `requisitos` | Conferir comportamento esperado, regras, critérios e decisões abertas |
| `tecnologia` | Consultar a base tecnológica documentada e as integrações |
| `diagnostico` | Examinar evidências detalhadas e comparação do código com a V6 |
| `planejamento` | Planejar execução, adequação e reuniões |
| `ux` | Consultar interface, protótipos, evidências e validação do morador |
| `historico` | Recuperar versões anteriores; não usar como escopo vigente |

## Qual documento prevalece em cada assunto

A V6 é a referência funcional consolidada. A visão explica o negócio; o diagnóstico descreve o snapshot de código examinado; o planejamento organiza o trabalho; os registros de UX documentam decisões e entregas de experiência. Guias de estudos, regras e stacks facilitam o acesso às fontes, sem substituir seus detalhes.

Há decisões posteriores da experiência do morador registradas na visão e no handoff de 10/10/2026, inclusive sobre o rascunho do descarte rápido. Leia esses registros junto à V6. Divergências devem ser conciliadas explicitamente, sem assumir que um protótipo ou documento histórico aprovou uma nova regra.
