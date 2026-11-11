# TSK-PON-003 — Sinalizar necessidade de coleta

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1736 a 1792) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Sinalizar necessidade de coleta.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Identificar necessidade de retirada antes de comprometer a operação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** critério de ocupação aprovado. **Fluxo:** avaliar nível conforme parâmetro; sinalizar no painel do administrador e do responsável; disponibilizar início de pedido de coleta. Não encaminhar automaticamente à cooperativa.

**Exceções:** cálculo de nível, frequência de atualização, alertas externos e repetição são PD-009 e PD-021. Um alerta por si só não agenda retirada nem comprova que ela aconteceu.

**Regras:**

Regras de origem: RN-013. Conferir texto e situação na V6.

**Exceções:** cálculo de nível, frequência de atualização, alertas externos e repetição são PD-009 e PD-021. Um alerta por si só não agenda retirada nem comprova que ela aconteceu.

**Critérios de aceite:**

- **CA-01:** Dado nível atingindo o limite validado, quando o indicador é atualizado, então o administrador e o responsável visualizam a necessidade de coleta.
- **CA-02:** Dado somente a sinalização de lotação, quando ela ocorre, então nenhuma cooperativa recebe coleta automaticamente atribuída.

**Dependências:**

TSK-PON-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento
- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013; ficha [TSK-PON-003 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-014](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014).

**Casos detalhados e ficha de origem:** [TSK-PON-003](../../../planejamento/modulos/m06.md#tsk-pon-003).

<a id="tsk-pon-004"></a>
