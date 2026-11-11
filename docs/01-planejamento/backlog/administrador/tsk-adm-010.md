# TSK-ADM-010 — Preparar informações de pagamento

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2698 a 2756) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Preparar informações de pagamento.

**Módulo:** M08 — Pagamento das coletas. **Módulos afetados:** M08.

**Objetivo:** Preparar uma remuneração ligada à coleta correta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** integração selecionada e condições aprovadas. **Entrada:** identificação da coleta e cooperativa, valor definido segundo futura regra e dados do recebedor exigidos pela API.

**Fluxo:** consultar a coleta; apresentar identificação do recebedor e valor; obter confirmação administrativa. Não definir tabela por kg, material ou distância, nem permitir cálculo implícito.

**Exceções:** sem valor ou dados financeiros válidos, pagamento não pode ser iniciado. Aprovação da coleta, negociação de valor e condições de liberação ainda são PD-015 e PD-016.

**Regras:**

Regras de origem: RN-017. Conferir texto e situação na V6.

**Exceções:** sem valor ou dados financeiros válidos, pagamento não pode ser iniciado. Aprovação da coleta, negociação de valor e condições de liberação ainda são PD-015 e PD-016.

**Critérios de aceite:**

- **CA-01:** Dado valor e recebedor definidos pela política aprovada, quando o administrador prepara o pagamento, então vê coleta, destinatário e valor antes de confirmar.
- **CA-02:** Dado dados obrigatórios ausentes, quando tenta prosseguir, então o sistema impede envio à API e informa o que falta.

**Dependências:**

TSK-COO-004, TSK-ADM-008; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-015, PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?
- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017; ficha [TSK-ADM-010 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

**Casos detalhados e ficha de origem:** [TSK-ADM-010](../../../planejamento/modulos/m08.md#tsk-adm-010).

<a id="tsk-adm-011"></a>
