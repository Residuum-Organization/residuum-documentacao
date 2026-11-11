# TSK-MOR-014 — Validar presença por GPS

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 867 a 923) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Validar presença por GPS.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Confirmar a presença no ponto antes de concluir a entrega. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto e itens selecionados; permissão de localização. **Fluxo:** obter posição recente e informação de precisão; comparar com o ponto segundo os parâmetros aprovados; liberar confirmação se válida; registrar a evidência necessária à operação.

**Exceções:** fora do raio, posição antiga, baixa precisão ou falha de obtenção não concluem entrega. Exibir impedimento e permitir nova tentativa conforme política. GPS é indício de proximidade, não prova de entrega física. Não existe alternativa por QR ou aprovação retroativa neste escopo.

**Regras:**

Regras de origem: RN-006. Conferir texto e situação na V6.

**Exceções:** fora do raio, posição antiga, baixa precisão ou falha de obtenção não concluem entrega. Exibir impedimento e permitir nova tentativa conforme política. GPS é indício de proximidade, não prova de entrega física. Não existe alternativa por QR ou aprovação retroativa neste escopo.

**Critérios de aceite:**

- **CA-01:** Dado posição aceita pelos parâmetros validados, quando a presença é verificada, então o sistema permite confirmar o descarte no ponto escolhido.
- **CA-02:** Dado GPS indisponível ou posição rejeitada, quando tenta concluir, então não há baixa de itens nem recompensa e o motivo é apresentado.

**Dependências:**

TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-008, PD-027. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-008:** Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença
- **PD-027:** Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006; ficha [TSK-MOR-014 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-010](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010).

**Casos detalhados e ficha de origem:** [TSK-MOR-014](../../../planejamento/modulos/m03.md#tsk-mor-014).

<a id="tsk-mor-015"></a>
