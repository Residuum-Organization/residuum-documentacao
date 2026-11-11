# TSK-ADM-007 — Classificar contexto e funcionamento do ponto

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2521 a 2576) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Classificar contexto e funcionamento do ponto.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Contextualizar o ponto e orientar o horário de atendimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** classificar contexto como condomínio, residência, apartamento, loja, faculdade ou outro rótulo aprovado; manter tipo fixo/temporário em campo separado; cadastrar horários e disponibilidade; apresentar informações no mapa e no painel.

**Exceções:** contexto não altera automaticamente material aceito ou permissões. Formato de tags versus categoria única e permissão de edição dos horários aguardam PD-009. Funcionamento não é o mesmo que operador conectado.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** contexto não altera automaticamente material aceito ou permissões. Formato de tags versus categoria única e permissão de edição dos horários aguardam PD-009. Funcionamento não é o mesmo que operador conectado.

**Critérios de aceite:**

- **CA-01:** Dado uma faculdade com ponto temporário, quando consulta seu cadastro, então contexto e duração são informações separadas.
- **CA-02:** Dado horários cadastrados, quando abre os detalhes, então a informação corresponde ao cadastro atual.

**Dependências:**

TSK-ADM-005; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-033; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-007 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-ADM-007](../../../planejamento/modulos/m06.md#tsk-adm-007).

<a id="tsk-adm-008"></a>
