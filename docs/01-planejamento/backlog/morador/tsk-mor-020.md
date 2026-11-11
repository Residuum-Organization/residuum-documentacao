# TSK-MOR-020 — Apurar metas de descarte das campanhas

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1213 a 1268) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Apurar metas de descarte das campanhas.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Acompanhar quanto falta para cumprir a meta de uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** campanha com meta validada. **Fluxo:** considerar eventos elegíveis segundo a regra publicada; atualizar progresso; apresentar quantidade atingida, meta e condição restante; sinalizar cumprimento sem antecipar prêmio não confirmado.

**Exceções:** registro no estoque não conta como descarte. Não deduzir compra ou entrega a partir da leitura de código. Definir o que comprova o produto específico e se descartes anteriores à adesão contam em PD-011.

**Regras:**

Regras de origem: RN-009. Conferir texto e situação na V6.

**Exceções:** registro no estoque não conta como descarte. Não deduzir compra ou entrega a partir da leitura de código. Definir o que comprova o produto específico e se descartes anteriores à adesão contam em PD-011.

**Critérios de aceite:**

- **CA-01:** Dado campanha com meta de cinco unidades e dois descartes elegíveis somando três, quando o progresso é apurado, então apresenta três de cinco.
- **CA-02:** Dado apenas itens cadastrados no estoque, quando a meta é consultada, então eles não são tratados como unidades já descartadas.

**Dependências:**

TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-020 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-020](../../../planejamento/modulos/m04.md#tsk-mor-020).

<a id="tsk-mor-021"></a>
