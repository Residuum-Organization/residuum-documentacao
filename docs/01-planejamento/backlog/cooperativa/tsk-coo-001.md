# TSK-COO-001 — Consultar e aceitar solicitação de coleta

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1915 a 1971) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar e aceitar solicitação de coleta.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Decidir se pode atender à coleta que lhe foi atribuída. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** solicitação atribuída e ainda passível de aceite. **Fluxo:** consultar ponto, materiais aceitos e agendamento; confirmar aceite; registrar operador e momento; refletir decisão no painel administrativo.

**Exceções:** outra cooperativa não pode aceitar; repetição não cria nova coleta. Recusa, silêncio, prazo de resposta e cancelamento aguardam PD-014. Não existe oferta indiscriminada para primeira cooperativa que responder.

**Regras:**

Regras de origem: RN-013. Conferir texto e situação na V6.

**Exceções:** outra cooperativa não pode aceitar; repetição não cria nova coleta. Recusa, silêncio, prazo de resposta e cancelamento aguardam PD-014. Não existe oferta indiscriminada para primeira cooperativa que responder.

**Critérios de aceite:**

- **CA-01:** Dado solicitação destinada à cooperativa, quando seu operador aceita, então o administrador e a cooperativa consultam o aceite registrado.
- **CA-02:** Dado cooperativa diferente, quando tenta aceitar, então a operação é negada.
- **CA-03:** Dado aceite repetido da mesma solicitação, quando processado, então não duplica coleta ou compromisso.

**Dependências:**

TSK-ADM-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013; ficha [TSK-COO-001 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-COO-001](../../../planejamento/modulos/m07.md#tsk-coo-001).

<a id="tsk-coo-002"></a>
