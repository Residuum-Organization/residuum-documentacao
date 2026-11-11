# TSK-MOR-018 — Aplicar bônus de campanha

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1099 a 1155) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Aplicar bônus de campanha.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Receber benefício adicional quando cumpre uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** campanha publicada, regra aprovada e eventos elegíveis registrados. **Fluxo:** verificar participação e condições; apurar produto, quantidade ou meta configurados; registrar bônus separado do crédito básico; atualizar o saldo e indicar a campanha de origem.

**Exceções:** não presumir que a compra gera bônus nem que campanhas se acumulam. Eventos manuais podem não comprovar um produto específico. Elegibilidade, janela de apuração, repetição, limites e evidência do produto são PD-011.

**Regras:**

Regras de origem: RN-009. Conferir texto e situação na V6.

**Exceções:** não presumir que a compra gera bônus nem que campanhas se acumulam. Eventos manuais podem não comprovar um produto específico. Elegibilidade, janela de apuração, repetição, limites e evidência do produto são PD-011.

**Critérios de aceite:**

- **CA-01:** Dado regra validada de bônus por descarte elegível, quando a condição é cumprida, então o bônus é registrado com a campanha e o evento que o originaram.
- **CA-02:** Dado uma campanha não elegível, quando um descarte é concluído, então os 10 pontos básicos permanecem sem bônus indevido.
- **CA-03:** Dado um bônus já processado para o mesmo evento e regra, quando o processamento é repetido, então não há duplicação.

**Dependências:**

TSK-MOR-017, TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-018 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-018](../../../planejamento/modulos/m04.md#tsk-mor-018).

<a id="tsk-mor-019"></a>
