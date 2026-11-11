# TSK-PON-002 — Acompanhar estoque e ocupação do ponto

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1676 a 1735) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Acompanhar estoque e ocupação do ponto.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Acompanhar o material acumulado e preparar a retirada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** apresentar entradas por material, quantidades registradas, coletas e situação de ocupação; atualizar após descartes e retiradas; distinguir quantidades de embalagens, estimativas e pesos efetivamente coletados.

**Exceções:** não converter número de latas em kg reais sem regra validada. Método de ocupação, unidade da capacidade e tratamento de coleta parcial são PD-009 e PD-014. O painel operacional e os relatórios pagos são capacidades distintas; acesso mínimo precisa de PD-019.

**Regras:**

Regras de origem: RN-015, RN-021. Conferir texto e situação na V6.

**Exceções:** não converter número de latas em kg reais sem regra validada. Método de ocupação, unidade da capacidade e tratamento de coleta parcial são PD-009 e PD-014. O painel operacional e os relatórios pagos são capacidades distintas; acesso mínimo precisa de PD-019.

**Critérios de aceite:**

- **CA-01:** Dado entradas de PET e lata, quando consulta o painel, então identifica os materiais separadamente.
- **CA-02:** Dado peso medido registrado na coleta, quando consulta indicadores, então ele não é apresentado como o peso individual comprovado de cada descarte.
- **CA-03:** Dado informação apenas estimada, quando é exibida, então aparece identificada como estimativa.

**Dependências:**

TSK-ADM-005, TSK-MOR-015; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009, PD-014, PD-019, PD-018. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento
- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados
- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021; ficha [TSK-PON-002 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-014](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014), [ADE-017](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

**Casos detalhados e ficha de origem:** [TSK-PON-002](../../../planejamento/modulos/m06.md#tsk-pon-002).

<a id="tsk-pon-003"></a>
