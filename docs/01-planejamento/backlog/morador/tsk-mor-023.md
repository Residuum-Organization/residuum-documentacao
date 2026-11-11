# TSK-MOR-023 — Consultar detalhes e condições da campanha

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1380 a 1435) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar detalhes e condições da campanha.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Entender o que precisa fazer antes de participar. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** campanha consultável. **Fluxo:** apresentar título, descrição, imagem/vídeo disponível, período, produtos ou materiais elegíveis, quantidade/meta, condições de participação, custo quando houver e benefício; oferecer a ação aplicável à campanha.

**Exceções:** não anunciar recompensa sem regra publicada. A campanha deve esclarecer se exige descarte, uso de pontos ou outra condição aprovada; leitura de nota não comprova automaticamente descarte. Condições de participação e frequência são PD-011.

**Regras:**

Regras de origem: RN-019. Conferir texto e situação na V6.

**Exceções:** não anunciar recompensa sem regra publicada. A campanha deve esclarecer se exige descarte, uso de pontos ou outra condição aprovada; leitura de nota não comprova automaticamente descarte. Condições de participação e frequência são PD-011.

**Critérios de aceite:**

- **CA-01:** Dado campanha baseada no descarte de um produto, quando abre seus detalhes, então o morador vê produto, meta e benefício configurados.
- **CA-02:** Dado campanha com vídeo, quando os detalhes são exibidos, então a mídia é acessível e as condições também estão disponíveis em texto.

**Dependências:**

TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019; ficha [TSK-MOR-023 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-023](../../../planejamento/modulos/m05.md#tsk-mor-023).

<a id="tsk-mor-024"></a>
