# TSK-COO-003 — Acompanhar andamento da coleta

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2028 a 2087) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Acompanhar andamento da coleta.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Compartilhar o andamento sem confundir retirada e recebimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** registrar solicitação, aceite e entrega dos registros da coleta; apresentar situação e eventos com autoria; manter histórico. Proposta de estados: solicitada, aceita, em execução e registrada. Transição “em execução” depende de gatilho a definir.

**Exceções:** estados de recusada, cancelada ou concluída após revisão administrativa não são decisões confirmadas. Regras de correção e início real de execução aguardam PD-014 e PD-018.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** estados de recusada, cancelada ou concluída após revisão administrativa não são decisões confirmadas. Regras de correção e início real de execução aguardam PD-014 e PD-018.

**Atenção:** “em execução” e seu gatilho são propostos; não tornar essa passagem obrigatória sem resolver PD-014.

**Critérios de aceite:**

- **CA-01:** Dado aceite registrado, quando os atores autorizados consultam a coleta, então veem a mesma decisão com autoria e data.
- **CA-02:** Dado coleta registrada e pagamento ainda não confirmado, quando consultam o andamento, então situação operacional e financeira são exibidas separadamente.

**Dependências:**

TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014, PD-018, PD-017. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-017:** Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo
- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-042; RNF-MVP-001, RNF-MVP-002; ficha [TSK-COO-003 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015), [ADE-016](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

**Casos detalhados e ficha de origem:** [TSK-COO-003](../../../planejamento/modulos/m07.md#tsk-coo-003).

<a id="tsk-coo-004"></a>
