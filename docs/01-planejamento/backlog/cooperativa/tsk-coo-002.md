# TSK-COO-002 — Fornecer rota e agendamento no painel

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1972 a 2027) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Fornecer rota e agendamento no painel.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Planejar a ida ao ponto com rota e horário fornecidos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** coleta atribuída, ponto georreferenciado e serviço de mapas disponível. **Fluxo:** exibir localização e agendamento; obter rota via integração prevista com Google Maps; apresentar orientação no painel.

**Exceções:** falha da API deve manter identificação do ponto e compromisso acessíveis. Origem do trajeto, navegação externa/interna da cooperativa, atualização da rota e estimativa de chegada são PD-017. Não inclui prova do caminho percorrido ou rastreamento contínuo.

**Regras:**

Regras de origem: RN-014. Conferir texto e situação na V6.

**Exceções:** falha da API deve manter identificação do ponto e compromisso acessíveis. Origem do trajeto, navegação externa/interna da cooperativa, atualização da rota e estimativa de chegada são PD-017. Não inclui prova do caminho percorrido ou rastreamento contínuo.

**Critérios de aceite:**

- **CA-01:** Dado coleta atribuída com destino válido, quando o operador abre o painel, então vê ponto e agendamento fornecidos pela plataforma.
- **CA-02:** Dado rota obtida pelo serviço, quando é exibida, então está identificada como orientação planejada e não como trajeto realizado.

**Dependências:**

TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-017. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-017:** Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014; ficha [TSK-COO-002 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-016](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

**Casos detalhados e ficha de origem:** [TSK-COO-002](../../../planejamento/modulos/m07.md#tsk-coo-002).

<a id="tsk-coo-003"></a>
