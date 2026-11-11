# TSK-PON-004 — Solicitar coleta ao administrador

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1793 a 1848) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Solicitar coleta ao administrador.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Pedir retirada ao administrador e acompanhar o encaminhamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** responsável vinculado ao ponto. **Fluxo:** selecionar o ponto autorizado; registrar pedido e informações pertinentes; encaminhar ao painel administrativo; acompanhar encaminhamento. O administrador também pode iniciar coleta sem pedido prévio do ponto.

**Exceções:** não gerar solicitações duplicadas por repetição de envio. Regras para múltiplos pedidos abertos, cancelamento e informações opcionais são PD-014.

**Regras:**

Regras de origem: RN-012. Conferir texto e situação na V6.

**Exceções:** não gerar solicitações duplicadas por repetição de envio. Regras para múltiplos pedidos abertos, cancelamento e informações opcionais são PD-014.

**Critérios de aceite:**

- **CA-01:** Dado responsável autorizado, quando envia um pedido, então o administrador pode consultá-lo com identificação do ponto e solicitante.
- **CA-02:** Dado pedido ainda não encaminhado, quando a cooperativa consulta sua área, então ele não aparece como coleta atribuída a ela.

**Dependências:**

TSK-PON-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-PON-004 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-PON-004](../../../planejamento/modulos/m06.md#tsk-pon-004).

<a id="tsk-pon-005"></a>
