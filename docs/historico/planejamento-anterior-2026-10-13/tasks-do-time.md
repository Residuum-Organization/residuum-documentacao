# Residuum — tasks de desenvolvimento do time

**Documento anterior, preservado para rastreabilidade.** Para executar o trabalho atual, consulte o [documento geral das tasks](../../planejamento/modulos/tasks-gerais.md). Este arquivo não é uma segunda lista vigente de atividades.


**[Documento geral das atividades por módulo e perfil](../../planejamento/modulos/README.md)** — modelo padronizado, testes, proposta de Scrum e matriz de importância; responsáveis e datas a preencher pela equipe.


**Acompanhamento:** [abrir o Kanban no Miro](https://miro.com/app/board/uXjVGjiRgKQ=/?moveToWidget=3458764686954066612). As 93 tasks agora são cartões agrupados por área. Use este guia e as fichas completas como documentação de apoio; veja [como utilizar o Kanban](../../planejamento/kanban-miro.md).

**No Miro:** [abrir o guia de tasks do time](https://miro.com/app/board/uXjVGjiRgKQ=/?moveToWidget=3458764686953010924) ou [abrir os 27 pacotes de adequação](https://miro.com/app/board/uXjVGjiRgKQ=/?moveToWidget=3458764686953010926). Os documentos detalhados por assunto estão ligados ao guia e ao índice de Documentações.

[Voltar ao guia dos documentos](../../README.md)

**Para apresentar na reunião:** comece pelos pacotes de adequação do código existente. Abra as tarefas detalhadas para conferir histórias, subtarefas, critérios e decisões de cada capacidade.

## Documentos de trabalho

| Documento | Conteúdo | Uso |
|---|---|---|
| [Adequação e reativação do MVP](tasks-adequacao-reativacao-mvp-v1.md) | 27 pacotes ADE-000 a ADE-026 | Referência principal para executar mudanças na implementação existente |
| [Tasks de desenvolvimento V1](tasks-desenvolvimento-mvp-v1.md) | 93 fichas TSK por perfil, qualidade e decisões | Histórias, entregas demonstráveis, subtarefas, dependências e critérios de aceite |

**ADE e TSK não são duas listas independentes de entregas.** Cada pacote ADE referencia as TSK correspondentes. Divida o trabalho em cartões menores quando necessário, mantendo esses vínculos e evitando duplicação.

## Ordem proposta de execução

| Etapa | Pacotes | Resultado esperado |
|---|---|---|
| Preparar base | ADE-000; iniciar ADE-024 a ADE-026 | Ambiente reproduzível e base de trabalho conferida |
| Acesso e dados | ADE-001 a ADE-004 | Perfis/vínculos, convites, sessão e contrato de materiais/unidades |
| Jornada principal | ADE-005, ADE-009 a ADE-013 e parte independente de ADE-006 | Cadastro manual → estoque → ponto → GPS → descarte único → 10 pontos e histórico |
| Agilizar cadastro | ADE-006 a ADE-008 | Descarte rápido, scanner e nota com revisão e alternativa manual |
| Operação | ADE-014 a ADE-017 e parte operacional de ADE-023 | Ocupação → pedido → agendamento/aceite → rota → pesagem e saldo conciliado |
| Loja e comercial | ADE-018 a ADE-023 | Pagamento, campanhas, vouchers/sorteios, mídias, planos e relatórios |
| Qualidade ao longo das entregas | ADE-024 a ADE-026 | Testes, privacidade, auditoria, dispositivos, desempenho e recuperação |

A sequência é proposta para refinamento; não estabelece calendário. Consulte as dependências e os recortes bloqueados nas fichas.

## Tarefas detalhadas por assunto

- [Diagnóstico inicial](tasks-desenvolvimento-mvp-v1.md#3-diagnóstico-do-mvp-existente): 1 tarefa.
- [Morador](tasks-desenvolvimento-mvp-v1.md#4-morador): 26 tarefas.
- [Responsável pelo ponto](tasks-desenvolvimento-mvp-v1.md#5-responsável-pelo-ponto): 5 tarefas.
- [Cooperativa](tasks-desenvolvimento-mvp-v1.md#6-cooperativa): 4 tarefas.
- [Administrador](tasks-desenvolvimento-mvp-v1.md#7-administrador): 17 tarefas.
- [Capacidades transversais](tasks-desenvolvimento-mvp-v1.md#8-capacidades-transversais): 13 tarefas.
- [Decisão e investigação](tasks-desenvolvimento-mvp-v1.md#9-tarefas-de-decisão-e-investigação): 27 tarefas.

## Como distribuir e acompanhar

Cada ficha ADE descreve trabalho a executar, base a reaproveitar, camadas afetadas, dependências, pendências e critérios de aceite. Produto resolve regras; design trata fluxos/estados; frontend integra a jornada; backend aplica contratos e efeitos persistidos; QA verifica os resultados. A divisão nominal deve ser combinada com o time.

Responsável, esforço, sprint e data continuam **a definir pela equipe**. Não há declaração de conclusão nesta organização. Separe o trecho que pode avançar de qualquer decisão bloqueante e preserve os critérios da V6.

Uma entrega exige implementação revisada, critérios verificados, evidências de interface/API/dados e permissões, reenvio/concorrência quando aplicáveis e limitações explícitas. Consulte a definição de conclusão dos documentos originais.

## Atenção à decisão posterior da jornada

A decisão de 10/10/2026 sobre rascunho do descarte rápido e GPS novo está na [visão](../../visao/visao-do-projeto.md#decisão-de-experiência-do-morador--10102026) e no [handoff](../../ux/morador-v6-handoff.md). Leia com ADE-006 e TSK-MOR-005; não trate gravação automática de itens rápidos no estoque como regra aprovada.
