# Residuum — avaliação da organização em módulos e dos testes

**Documento anterior, preservado para rastreabilidade.** Para executar o trabalho atual, consulte o [documento geral das tasks](../../01-planejamento/01-atividades-gerais.md). Este arquivo não é uma segunda lista vigente de atividades.


**Data:** 13/10/2026. **Prazo informado pela equipe:** 20/11/2026.

**Conclusão:** a documentação oferece uma boa base para trabalhar por módulos, mas precisa de complementos de acompanhamento e de detalhamento dos testes antes de virar um plano de execução com prazo confirmado. Os módulos já existem na V6; não é necessário criar outra divisão funcional do zero.

Esta é uma revisão documental. Não houve execução de testes, inspeção de novas versões do código, consulta ao estado atual do Miro ou homologação da aplicação. Resultados de execução mencionados abaixo são registros das fontes, com seus limites originais.

## 1. Base avaliada

| Documento | Enquadramento no modelo | Ajuste recomendado |
|---|---|---|
| [Requisitos V6](../../02-produto/02-requisitos-mvp-v6.md), módulos e seção 13 | 11 módulos, 53 RF, 12 RNF, regras, critérios e 29 cenários integrados | Vincular cada atividade ao módulo e desdobrar cenários em casos reproduzíveis |
| [Tasks de desenvolvimento](tasks-desenvolvimento-mvp-v1.md) | 93 fichas: 53 funcionais, 12 de qualidade, 27 de decisão e uma de diagnóstico | Uniformizar os campos do modelo; explicitar responsável, início, entrega, sprint e evidências por atividade |
| [Adequação e reativação](tasks-adequacao-reativacao-mvp-v1.md) | 27 pacotes de mudanças no código existente, vinculados às TSK | Usar como agrupamento de execução; dividir pacotes extensos em atividades pequenas |
| [Guia do time](tasks-do-time.md) e [Kanban](../../08-manutencao/02-mapa-de-migracao.md#exclusoes-anteriores) (documento excluído; consulte o registro de migração) | Sequência, relações entre ADE/TSK e estados do trabalho | Adicionar módulo e acompanhamento ao cartão existente, evitando outra lista independente de status |
| [Diagnóstico comparativo](../../03-tecnologia/03-diagnostico-mvp-v1.md) | Evidências anteriores, divergências e ações por requisito | Usar os achados como origem de regressões; confirmar no código de trabalho se ainda se aplicam |
| [Roteiro com moradores](../../04-ux/01-morador-v6/03-teste-com-usuarios.md) | Teste de usabilidade com preparação, tarefas e medidas | Criar atividade de execução, responsável, datas e registro por participante; sessões continuam pendentes |
| [Validação do morador](../../04-ux/01-morador-v6/02-validacao.md) | Registro de testes da demonstração, com limites explícitos | Vincular evidências às atividades pertinentes; não usá-las como aprovação do backend real |
| [Handoff do morador](../../04-ux/01-morador-v6/01-handoff.md) | Jornadas, decisões posteriores, contratos e erros esperados | Incorporar decisões posteriores no refinamento e testar integração real separadamente |
| [Estado da V2](../../04-ux/02-demonstracao-v2/01-status.md) | Experimentos de uma demonstração independente e pendências | Manter separado da homologação do MVP; não importar status como entrega concluída |
| [Rotina de reuniões](../../08-manutencao/02-mapa-de-migracao.md#exclusoes-anteriores) (documento excluído; consulte o registro de migração) | Alinhamentos com idealizador e equipe | Se Scrum for adotado, combinar eventos e responsabilidades; a agenda atual não descreve o processo completo |

A visão, o guia de regras e os registros posteriores orientam a interpretação. Os documentos históricos servem para rastreabilidade: seus prazos antigos, regras substituídas e marcações de conclusão não determinam o estado atual.

Foi conferida a estrutura das 93 fichas TSK. Todas têm conteúdo de objetivo/valor e menção a evidências; nenhuma apresenta campos separados com os nomes “Data de início” e “Data de entrega”. As 12 fichas de qualidade têm verificação/BDD dentro da descrição, em vez de uma seção uniforme de critérios de aceite. As 27 fichas de decisão seguem um formato próprio, que deve ser preservado ao converter decisões em atividades de análise.

Essa conferência estrutural não comprova suficiência dos testes nem ausência de lacunas funcionais.

## 2. Organização recomendada dos módulos

Preservar os identificadores da V6. A tabela relaciona módulos aos pacotes existentes; pacotes compartilhados não são novas entregas para cada módulo.

| Módulo existente | RF | Pacotes ADE relacionados | Cenários integrados de referência |
|---|---|---|---|
| M01 — Acesso, usuários e convites | 001–008 | 001–003 | CT-001–003; complementar testes de sessão, recuperação, perfil e permissões |
| M02 — Cadastro de resíduos e estoque | 009–014 | 004–008 | CT-004–008, junto ao descarte |
| M03 — Mapa, presença e descarte | 015–020 | 009–012; interface com 006 e 013 | CT-007–011, CT-028 |
| M04 — Pontuação, saldo e extrato | 021–025 | 011–012, 019–020 | CT-011–014 |
| M05 — Loja, campanhas, vouchers e sorteios | 026–030 | 019–020 | CT-012–014 |
| M06 — Pontos de coleta e painel do responsável | 031–037 | 013–015; interfaces com 004 e 017 | CT-009, CT-015–017, CT-020 |
| M07 — Cooperativas, solicitações e execução de coletas | 038–043 | 015–017 | CT-018–021 |
| M08 — Pagamento das coletas | 044–046 | 018 | CT-021–023 |
| M09 — Administração, indicadores e relatórios | 047–049 | 022–023 | CT-024–026 |
| M10 — Planos e acesso comercial a dados | 050–052 | 022, com consumidores em 023 | CT-024–025 |
| M11 — Mídias e comunicação | 053 | 021; notificações dependem da decisão correspondente | CT-027 |
| Trabalho transversal — ambiente e qualidade | 12 RNF e diagnóstico | 000, 024–026 e controles das fichas funcionais | CT-029 e verificações de qualidade de cada jornada |

As relações de CT nesta tabela são orientação para refinamento, não uma declaração de cobertura completa. Os 29 cenários integrados não substituem os critérios individuais dos requisitos, nem os casos de falha, limite e permissão de cada atividade.

**Módulo não precisa corresponder a uma pessoa exclusiva.** Uma pessoa pode coordenar sua entrega e contar com revisão e apoio de outras. Login, autorização, materiais, descarte e pontuação exigem contratos compartilhados para evitar regras duplicadas.

## 3. Adequação ao modelo combinado

| Campo | Situação documental | Como adequar |
|---|---|---|
| Nome da atividade | Presente nos títulos TSK e ADE | Preservar ID e título; acrescentar módulo |
| Objetivo | Presente como objetivo, história, valor ou finalidade | Escrever um objetivo direto, sem apagar o detalhe original |
| Responsável | Há papéis sugeridos; nomes permanecem a definir | Registrar responsável nominal e apoio/revisor de QA |
| Data de início | Há menção geral a data, sem campo separado por atividade | Registrar prevista e, quando ocorrer, efetiva |
| Data de entrega | Não separada do início; prazos atuais não definidos | Distinguir previsão de envio ao QA e conclusão efetiva após aprovação |
| Descrição | Presente nas fichas funcionais e de qualidade | Manter fluxo, dados, exceções e resultado; decisões descrevem a questão e os impactos |
| Regras | Presentes na V6 e nas referências | Trazer síntese com RN/PD de origem; separar regra aprovada de parâmetro pendente |
| Critérios de aceite | Presentes em BDD ou verificação | Usar seção uniforme; tornar parâmetros indefinidos visíveis como bloqueio |
| Dependências | Presentes como entrega/bloqueios; decisões listam impactos | Distinguir requisito para iniciar de relação informativa entre atividades |
| Evidências de entrega | Exigência prevista; resultados existentes são específicos de snapshots/demos | Manter esperado separado de produzido e vincular critério, versão e resultado |

Acrescentar também prioridade, sprint, estado, pendências e referências. Não preencher nomes, estimativas ou datas por suposição.

## 4. Avaliação dos testes

**Cenários da V6:** estão alinhados às jornadas e são úteis para homologação integrada. Porém, muitos agrupam situações diferentes na mesma linha. Por exemplo, CT-010 combina GPS negado, antigo e distante; CT-013 combina saldo insuficiente e compra válida. Cada situação deve ganhar um caso com pré-condições, dados, passos e resultado próprio.

**Testes anteriores do backend:** o diagnóstico registra 17 executados, com oito aprovados e nove falhos, em SQLite e por chamadas locais. Algumas expectativas são legadas. Para cada teste, identificar o requisito atual e decidir se deve ser mantido, atualizado ou substituído. Não restaurar uma regra antiga apenas para obter teste aprovado. Esses resultados não foram reproduzidos nesta revisão.

**Testes da demonstração do morador:** o registro informa 12 testes de regras/contratos aprovados, fluxos de navegador e verificações automatizadas de acessibilidade. São evidências úteis dessa demonstração; não comprovam autorização HTTP, persistência, concorrência ou transações no servidor real.

**Teste com moradores:** o roteiro está preparado e os registros dos cinco participantes estão vazios. A meta de interação digital em até dois minutos não foi comprovada. Execução, recrutamento, análise e reteste devem entrar como atividades próprias.

**V2 independente:** existem verificações exploratórias limitadas e pendências de compilação registradas. Não misturar seus resultados com os da V6 ou assumir que etapas não iniciadas foram concluídas.

**Formato recomendado para cada caso de teste:** ID; módulo/atividade/RF/RNF/RN de origem; pré-condições; dados; passos; resultado esperado; ambiente e versão; resultado observado; evidência; situação e defeito associado. Teste planejado permanece “Não executado”; só registrar aprovação após execução comprovada.

## 5. Pontos que exigem conciliação

1. **Rascunho do descarte rápido:** o backlog original ainda contém trechos com alternativas pendentes, mas a atualização de 10/10 e o handoff definem rascunho na memória do fluxo, abandono sem transferência automática para estoque e GPS novo no retorno da rota. Atualizar as fichas afetadas explicitamente, mantendo a origem da decisão; isso não resolve todas as pendências da jornada.
2. **Estado das implementações:** “a diagnosticar” é o estado inicial do backlog; o diagnóstico posterior e a demonstração não homologam todas as atividades. Registrar o estado atual por capacidade e versão, sem importar “Done” histórico.
3. **GPS e regras comerciais:** valores de fixture não são parâmetros aprovados de produção. Regras de capacidade, conciliação, campanhas, vouchers, sorteios, pagamentos e planos ainda têm pendências. Testes dependentes precisam da decisão ou de recorte explícito.
4. **Duplicação de trabalho:** ADE e TSK representam agrupamento e detalhamento do mesmo trabalho. Preservar vínculos e uma fonte de acompanhamento.
5. **Equipe:** a informação mais recente nesta conversa é de seis pessoas com atuação full stack, incluindo quem exerce análise e QA. Não presumir quatro desenvolvedores exclusivos nem seis pessoas disponíveis integralmente. Distribuir funções e registrar horas efetivas de cada pessoa.

## 6. Execução até 20/11/2026

O prazo é uma restrição informada nesta conversa, não uma estimativa validada. Contar pacotes ou tarefas não mede esforço. A documentação não permite garantir que todo o escopo cabe no período.

Proposta de preparação:

1. Classificar as atividades existentes como reaproveitar, adaptar, desenvolver, validar ou decidir, confirmando a base atual.
2. Identificar o conjunto indispensável para a entrega; qualquer adiamento de escopo deve ser uma decisão explícita.
3. Refinar as dependências e resolver primeiro as decisões que bloqueiam o conjunto selecionado.
4. Estimar com a equipe após examinar código e integrações; considerar disponibilidade de análise, desenvolvimento, revisão e QA.
5. Planejar ciclos semanais com entregas completas e validação durante o ciclo. Atualizar a previsão a partir das entregas efetivamente aceitas.
6. Reservar, como proposta, 14–20/11 para estabilização, regressão e preparação da entrega. A equipe deve confirmar a disponibilidade e o recorte; não há compromisso automático de concluir todos os módulos antes disso.

A ordem documental favorece ambiente e acesso, jornada principal e integridade, operação e capacidades comerciais, mantendo qualidade ao longo do trabalho. Esta ordem precisa ser conciliada com as prioridades que o analista/equipe definir.

Se Scrum for adotado, o modelo de fichas continua útil. Combinar objetivo do produto e de cada sprint, ordenação do backlog, responsabilidades de Product Owner/Scrum Master, planejamento, acompanhamento diário, revisão e retrospectiva. A equipe organiza a execução e a qualidade deve integrar o trabalho da sprint. A agenda atual de alinhamentos não comprova adoção de Scrum.

## 7. Exemplo de atividade no modelo

**Módulos:** M03 e M04. **Origem:** ADE-011; TSK-MOR-015 e TSK-MOR-017; RF-MVP-019 e RF-MVP-021; RN-007, RN-008 e RN-016; CT-008 e CT-011.

**Nome:** Adequar confirmação de descarte e crédito básico único.

**Objetivo:** concluir uma entrega com estoques e recompensa coerentes, sem duplicar efeitos.

**Responsável:** a definir pela equipe. **Revisor/QA:** a definir.

**Data de início prevista/efetiva:** a definir. **Data prevista de envio ao QA:** a definir. **Data de entrega prevista/efetiva após aprovação:** a definir. **Sprint:** a definir. **Prioridade documental proposta:** P0.

**Descrição:** adaptar a confirmação integrada para registrar a entrega, baixar somente as unidades selecionadas do estoque pessoal quando a origem for estoque, adicionar material ao ponto e creditar dez pontos básicos uma única vez. No caminho rápido, observar a decisão posterior de rascunho sem inclusão automática no estoque pessoal.

**Regras:** selecionar ou registrar itens não concede pontos; recompensa básica é por operação concluída; pesagem posterior não gera novo crédito; reenvio não duplica efeitos.

**Critérios de aceite:** com estoque pessoal de dez unidades e seleção de três, uma entrega válida deixa sete no estoque pessoal, acrescenta três ao ponto e gera dez pontos básicos; repetir a mesma operação mantém os efeitos; falha ou impedimento não produz sucesso parcial. Parâmetros de presença, capacidade e controles associados devem estar aprovados para o recorte testado.

**Dependências:** contratos de materiais/unidades, estoque, ponto e GPS conforme fichas relacionadas; permissões e decisões bloqueantes aplicáveis. Preservar as dependências completas da ADE-011 na execução.

**Evidências de entrega esperadas:** versão/ambiente, resultado da interface e API, comparação dos registros persistidos antes/depois, teste de reenvio e concorrência pertinente. **Evidências produzidas nesta revisão:** nenhuma; esta ficha é um exemplo documental.

## 8. Encaminhamento

Os documentos se enquadram no planejamento por módulos, com complementos. A ação recomendada é reorganizar a entrada e o acompanhamento das atividades existentes nos 11 módulos, uniformizar os campos e detalhar os casos de teste. O refinamento deve preservar regras, rastreabilidade e resultados reais separados de planos e demonstrações.

Esta avaliação cria uma referência para revisão da equipe; não modifica as fichas originais, não atribui pessoas nem prazos individuais e não altera cartões externos.
