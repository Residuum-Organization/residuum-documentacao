# Residuum: resumo operacional da metodologia de trabalho

Guia rápido para planejar, executar, revisar e validar as atividades do Residuum.

**Atualização:** 17/10/2026.
**Repositório:** [Abrir a documentação do Residuum](https://github.com/Vinny1313/residuum-documentacao).
**Versão dos documentos completos:** [branch codex/reorganizar-documentacao](https://github.com/Vinny1313/residuum-documentacao/tree/codex/reorganizar-documentacao).
**Miro:** [Abrir o quadro de trabalho](https://miro.com/app/board/uXjVGjiRgKQ=/).

## 1. Onde consultar e atualizar as informações

- **Miro:** acompanha o andamento, responsáveis, datas, estimativas, sprints, bloqueios e evidências da execução.
- **Fichas por perfil:** são as fontes editáveis das atividades, com descrição, regras, critérios de aceite, dependências, subtarefas e testes.
- **Módulos M01–M11:** organizam as mesmas fichas por domínio. Não criam outras entregas.
- **Documento geral:** compila automaticamente as fichas; sua edição não é manual.
- **Requisitos V6, regras de negócio e decisões aprovadas:** orientam o comportamento esperado. A proposta de sprints organiza o planejamento, sem comprovar implementação.

Consulte: [guia dos documentos](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/README.md) e [guia do planejamento](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/README.md).

## 2. Como usar o Kanban e as tasks

Convenção operacional das colunas já usadas no quadro:

- **A refinar:** esclarecer escopo, critérios, dependências e pendências antes de selecionar o trabalho.
- **Pronta para desenvolvimento:** atividade detalhada e com condições de execução do recorte confirmadas.
- **Em desenvolvimento:** implementação ou correção em andamento.
- **Em revisão:** entrega em revisão pela equipe.
- **Em validação:** QA verifica critérios de aceite, efeitos e evidências.
- **Concluída:** revisão e validação aprovadas, com evidências associadas à versão.
- **Bloqueada:** existe um impedimento que inviabiliza o avanço; registrar motivo e quem pode esclarecê-lo.

Ao assumir uma task, leia a ficha completa, confira os controles transversais aplicáveis e preencha responsável, datas, estimativa e sprint no quadro. Preserve o ID original, como TSK-MOR-001. O prefixo do módulo no título é uma identificação de domínio, não um novo ID.

Dúvidas podem ser esclarecidas com analista ou QA durante o trabalho. Se apenas um trecho depender de uma decisão, os trechos independentes podem continuar. A presença de uma pendência na documentação não bloqueia automaticamente a atividade inteira.

Consulte: [como trabalhar nas tasks](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/README.md) e [fluxo das atividades](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/05-qualidade/01-fluxo-e-qualidade.md#fluxo-de-atividades).

## 3. Perfis, módulos e atividades compartilhadas

**Perfil** organiza a jornada e a leitura das fichas. **Módulo** organiza o domínio funcional. **Épico** agrupa funcionalidades relacionadas. **Task** é a atividade identificável com entrega e critérios próprios.

Existem 66 atividades de execução: 26 de Morador, 5 de Ponto de coleta, 4 de Cooperativa, 17 de Administrador e 14 transversais. TSK-TRA-001 também pertence ao módulo M10; as outras 13 permanecem como fundamentos transversais.

Fichas completas por perfil:

- [Morador: acesso, registro, descarte, pontos e recompensas](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/02-perfis/01-morador.md).
- [Ponto de coleta: materiais, estoque, solicitação e relatórios](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/02-perfis/02-ponto-de-coleta.md).
- [Cooperativa: aceite, agenda, acompanhamento e retirada](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/02-perfis/03-cooperativa.md).
- [Administrador: acessos, operação, pagamentos, planos e mídias](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/02-perfis/04-administrador.md).
- [Transversal: fundamentos compartilhados e qualidade](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/02-perfis/05-transversal.md).

Índices completos dos módulos:

- [M01 — Acesso, usuários e convites](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m01-acesso-usuarios-e-convites.md).
- [M02 — Cadastro de resíduos e estoque](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m02-cadastro-de-residuos-e-estoque.md).
- [M03 — Mapa, presença e descarte](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m03-mapa-presenca-e-descarte.md).
- [M04 — Pontuação, saldo e extrato](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m04-pontuacao-saldo-e-extrato.md).
- [M05 — Loja, campanhas, vouchers e sorteios](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m05-loja-campanhas-vouchers-e-sorteios.md).
- [M06 — Pontos de coleta e painel do responsável](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md).
- [M07 — Cooperativas, solicitações e execução de coletas](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md).
- [M08 — Pagamento das coletas](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m08-pagamento-das-coletas.md).
- [M09 — Administração, indicadores e relatórios](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m09-administracao-indicadores-e-relatorios.md).
- [M10 — Planos e acesso comercial a dados](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m10-planos-e-acesso-comercial-a-dados.md).
- [M11 — Mídias e comunicação](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/03-modulos/m11-midias-e-comunicacao.md).

Uma atividade compartilhada mantém uma única ficha de origem e referências cruzadas. Os perfis não representam arquiteturas separadas ou equipes exclusivas.

Consulte também: [mapa das entregas por perfil](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/06-entregas-por-perfil.md).

## 4. Sprints, responsabilidades e rotina

A sequência proposta é **Morador → Ponto de coleta → Cooperativa → Administrador**, seguida de um ciclo final de integração e entrega.

A ordem define foco e demonstração. Convites, vínculos, pontos e atribuição/agendamento precisam existir quando as jornadas anteriores dependem deles. Antecipar esse fundamento mínimo não equivale a concluir todo o painel administrativo.

A seleção definitiva, duração, início e capacidade de cada sprint precisam ser confirmados pela equipe. O prazo informado de **20/11/2026** não garante todo o escopo. Scanner, nota fiscal, campanhas, vouchers e sorteios permanecem no backlog, sujeitos a decisões e capacidade.

- **Product Owner:** responde pelo objetivo do produto e pela ordenação do backlog; nome a definir.
- **Scrum Master:** apoia a aplicação de Scrum e a remoção de impedimentos; nome a definir.
- **Developers:** organizam a execução e produzem o incremento, incluindo desenvolvimento e testes.
- **Analista:** apoia requisitos, critérios, decisões e esclarecimentos.
- **QA:** participa do detalhamento e da sprint; validação não fica reservada ao último ciclo.

A rotina proposta inclui refinamento contínuo, Sprint Planning, Daily Scrum de 15 minutos para Developers, Sprint Review e Sprint Retrospective. Datas e horários permanecem a combinar.

Consulte: [proposta completa de Scrum e sprints](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/07-sprints.md).

## 5. Como priorizar e tratar decisões

A matriz usa **impacto na entrega × urgência**. Suas classificações são propostas documentais; prioridade não substitui estimativa nem confirma seleção para uma sprint.

Segurança, integridade e dependências da jornada devem orientar a ordenação. Defeitos atuais de segurança ou integridade exigem reavaliação conforme evidência, independentemente do perfil planejado.

Quando uma dúvida alterar requisito ou regra, registre a decisão e atualize os critérios antes de implementar o trecho afetado. Relacione a pendência PD à task correspondente e registre o impedimento no quadro quando ele realmente impedir o avanço.

Decisões documentais não são funcionalidades adicionais. Aprovar uma decisão não conclui a implementação que depende dela. Pendências gerais de evolução futura não são bloqueios automáticos do MVP.

Consulte: [matriz de prioridades](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/05-matriz-prioridades.md), [decisões relacionadas às tasks](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/04-decisoes.md) e [pendências gerais para avaliação posterior](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/01-planejamento/08-pendencias-gerais.md).

## 6. Revisão, QA e definição de concluído

O fluxo é: **analista detalha → equipe desenvolve e revisa → QA valida → atividade concluída com evidências**.

Se houver falha, QA registra resultado esperado, resultado observado e evidências. A equipe corrige e QA valida novamente. O ciclo se repete até atender os critérios e a definição comum de conclusão.

Para concluir, verificar:

- Implementação revisada e critérios específicos atendidos.
- Permissões e dados persistidos coerentes.
- Falhas relevantes e cenários de repetição/concorrência verificados quando aplicáveis.
- Evidências com versão, ambiente, executor, data e resultado observado.
- Documentação e limitações associadas à versão entregue.

Casos planejados não equivalem a testes executados ou aprovados. Capturas de tela, sozinhas, não comprovam persistência, autorização ou integridade. Simulações não concluem uma integração real.

As 66 atividades possuem 147 casos individuais de execução. Os 45 casos integrados complementam a validação; registros de decisão e avaliação futura possuem casos próprios.

Consulte: [fluxo e definição de conclusão](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/05-qualidade/01-fluxo-e-qualidade.md) e [casos de teste integrados](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/05-qualidade/02-testes-integrados.md).

## 7. Como manter a documentação

Edite a fonte correta e preserve IDs, critérios, referências e evidências. Alterações de comportamento exigem decisão explícita da equipe. Atualize o compilado pelo processo de geração e submeta a alteração à revisão de outro integrante.

Issues documentais registram problemas e propostas de documentação. O quadro acompanha a execução do produto.

Consulte: [como contribuir e revisar alterações](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/CONTRIBUTING.md) e [convenções da documentação](https://github.com/Vinny1313/residuum-documentacao/blob/codex/reorganizar-documentacao/docs/08-manutencao/01-convencoes.md).

Este resumo organiza as orientações existentes para consulta diária. As descrições das colunas explicitam a convenção operacional do quadro; os documentos completos preservam os critérios e limites de cada atividade.

