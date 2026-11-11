# TSK-MOR-025 — Administrar e adquirir vouchers

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1493 a 1550) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Administrar e adquirir vouchers.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Adquirir voucher com pontos e consultar as condições de uso. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** voucher cadastrado e publicado pelo administrador; custo e regras de uso aprovados. **Entrada:** título, descrição, benefício, custo em pontos, instruções e parâmetros de validade/disponibilidade conforme definição.

**Fluxo:** administrador cadastra oferta; morador consulta detalhes e confirma a compra; sistema debita pontos com consistência; disponibiliza voucher adquirido em sua área de recompensas. Forma de emissão do código e validação no parceiro ainda são PD-012.

**Exceções:** não emitir voucher sem aquisição confirmada nem cobrar por oferta indisponível. Limite de unidades, cancelamento e devolução de pontos precisam de validação.

**Regras:**

Regras de origem: RN-019. Conferir texto e situação na V6.

**Exceções:** não emitir voucher sem aquisição confirmada nem cobrar por oferta indisponível. Limite de unidades, cancelamento e devolução de pontos precisam de validação.

**Critérios de aceite:**

- **CA-01:** Dado voucher disponível e saldo suficiente, quando o morador confirma, então uma aquisição é registrada e o débito corresponde ao custo exibido.
- **CA-02:** Dado voucher adquirido, quando consulta suas recompensas, então encontra o benefício e as instruções de uso aprovadas.

**Dependências:**

TSK-MOR-021, TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-025 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-025](../../../planejamento/modulos/m05.md#tsk-mor-025).

<a id="tsk-mor-026"></a>
