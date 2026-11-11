# TSK-COO-004 — Registrar materiais e pesos retirados

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2088 a 2149) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Registrar materiais e pesos retirados.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Informar à administração quais materiais retirou e seus pesos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** solicitação aceita e acesso autorizado. **Entrada:** material PET e/ou lata de alumínio e peso medido de cada material; kg como unidade de apresentação herdada da V5, precisão a validar.

**Fluxo:** abrir coleta; preencher os materiais retirados e pesos; revisar; enviar; disponibilizar registros ao administrador; refletir movimentação do ponto segundo regra de conciliação validada. Somente materiais presentes na retirada devem ser informados; campo ausente não significa peso medido zero.

**Exceções:** rejeitar peso negativo e registrar falha sem concluir. Coleta parcial, peso zero, correção e reconciliação com embalagens em estoque são PD-014 e PD-018. Não zerar automaticamente todo o ponto só porque houve coleta.

**Regras:**

Regras de origem: RN-003, RN-014, RN-015, RN-016. Conferir texto e situação na V6.

**Exceções:** rejeitar peso negativo e registrar falha sem concluir. Coleta parcial, peso zero, correção e reconciliação com embalagens em estoque são PD-014 e PD-018. Não zerar automaticamente todo o ponto só porque houve coleta.

**Atenção:** aceite é a pré-condição confirmada. Não converter unidades em kg nem zerar material remanescente sem conciliação aprovada.

**Critérios de aceite:**

- **CA-01:** Dado coleta aceita, quando registra 12 kg de PET e 3 kg de alumínio, então o administrador consulta os dois pesos vinculados ao ponto, à coleta e à cooperativa.
- **CA-02:** Dado registro reenviado da mesma operação, quando processado, então não duplica retirada ou peso contabilizado.
- **CA-03:** Dado pesagem registrada, quando o resultado é gravado, então não credita novamente os 10 pontos dos moradores.

**Dependências:**

TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014, PD-018. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016; ficha [TSK-COO-004 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-017](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

**Casos detalhados e ficha de origem:** [TSK-COO-004](../../../planejamento/modulos/m07.md#tsk-coo-004).

<a id="administrador"></a>
