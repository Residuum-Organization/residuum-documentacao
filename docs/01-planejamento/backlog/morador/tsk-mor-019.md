# TSK-MOR-019 — Consultar saldo e extrato de pontos

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1156 a 1212) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar saldo e extrato de pontos.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Entender o saldo e a origem de cada movimentação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado. **Fluxo:** mostrar saldo disponível e lançamentos, com data, natureza crédito/débito, quantidade, descrição e origem; distinguir crédito básico, bônus, voucher e participação paga, quando aplicável; permitir consultar o vínculo da operação.

**Exceções e resultado:** extrato de outra pessoa não é acessível. Consulta falha não deve ser confundida com saldo zero. Expiração, ajustes administrativos e estornos ainda exigem regras aprovadas em PD-010 e PD-012.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções e resultado:** extrato de outra pessoa não é acessível. Consulta falha não deve ser confundida com saldo zero. Expiração, ajustes administrativos e estornos ainda exigem regras aprovadas em PD-010 e PD-012.

**Critérios de aceite:**

- **CA-01:** Dado crédito de 10 pontos e débito aprovado de 4, quando consulta o extrato, então encontra os dois lançamentos e saldo de 6, na ausência de outros movimentos.
- **CA-02:** Dado um bônus de campanha, quando consulta o lançamento, então identifica sua origem separadamente da recompensa básica.

**Dependências:**

TSK-MOR-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-010, PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-010:** Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos
- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-023; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-019 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

**Casos detalhados e ficha de origem:** [TSK-MOR-019](../../../planejamento/modulos/m04.md#tsk-mor-019).

<a id="tsk-mor-020"></a>
