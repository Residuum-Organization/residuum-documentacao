# TSK-MOR-021 — Debitar pontos com consistência

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1269 a 1325) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Debitar pontos com consistência.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Usar pontos sem saldo negativo ou cobranças duplicadas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** recompensa/participação válida, custo aprovado e saldo suficiente. **Fluxo:** apresentar custo; obter confirmação; verificar saldo atual e disponibilidade; registrar débito vinculado ao benefício adquirido; atualizar saldo e disponibilizar resultado.

**Exceções:** saldo insuficiente ou oferta indisponível não gera débito. Duas compras simultâneas devem respeitar saldo e limite. Não se presume pagamento complementar em dinheiro ou conversão monetária dos pontos.

**Regras:**

Regras de origem: RN-010. Conferir texto e situação na V6.

**Exceções:** saldo insuficiente ou oferta indisponível não gera débito. Duas compras simultâneas devem respeitar saldo e limite. Não se presume pagamento complementar em dinheiro ou conversão monetária dos pontos.

**Critérios de aceite:**

- **CA-01:** Dado saldo insuficiente, quando o morador confirma a compra, então não há débito nem aquisição.
- **CA-02:** Dado confirmação reenviada da mesma operação, quando é processada, então não duplica débito ou benefício.
- **CA-03:** Dado duas aquisições concorrentes sem saldo para ambas, quando são processadas, então o saldo permanece não negativo.

**Dependências:**

TSK-MOR-019; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010; ficha [TSK-MOR-021 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-021](../../../planejamento/modulos/m04.md#tsk-mor-021).

<a id="tsk-mor-022"></a>
