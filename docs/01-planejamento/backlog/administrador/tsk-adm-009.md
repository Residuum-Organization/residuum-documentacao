# TSK-ADM-009 — Solicitar e agendar coleta administrativamente

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2637 a 2697) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Solicitar e agendar coleta administrativamente.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Coordenar a retirada escolhendo cooperativa e agendamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto e cooperativa cadastrados; necessidade identificada pelo administrador ou pedido recebido. **Entrada:** ponto, cooperativa e data/horário previstos.

**Fluxo:** consultar ocupação; selecionar cooperativa; informar agendamento; enviar solicitação; registrar autoria e horário do envio; apresentar no painel da cooperativa para aceite. O horário é previsto até o aceite, conforme estado proposto na seção 10.

**Exceções:** envio não significa aceite. Reatribuição, conflito de horários e alterações após aceite são PD-014. Valor não será calculado automaticamente antes da definição de PD-015.

**Regras:**

Regras de origem: RN-012. Conferir texto e situação na V6.

**Exceções:** envio não significa aceite. Reatribuição, conflito de horários e alterações após aceite são PD-014. Valor não será calculado automaticamente antes da definição de PD-015.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado, quando envia a solicitação, então a cooperativa escolhida vê ponto e agendamento para decidir sobre o aceite.
- **CA-02:** Dado solicitação recém-enviada, quando o administrador consulta, então ela não é exibida como já aceita.
- **CA-03:** Dado necessidade identificada diretamente pelo administrador, quando solicita, então não exige pedido prévio do responsável.

**Dependências:**

TSK-ADM-005, TSK-ADM-008; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014, PD-015, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?
- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-ADM-009 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-ADM-009](../../../planejamento/modulos/m07.md#tsk-adm-009).

<a id="tsk-adm-010"></a>
