# TSK-MOR-015 — Confirmar entrega e movimentar estoques

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 924 a 986) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Confirmar entrega e movimentar estoques.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Concluir a entrega sem perder embalagens ou receber créditos repetidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** presença válida, itens disponíveis e ponto apto a recebê-los conforme regras validadas. **Fluxo:** apresentar resumo; receber confirmação explícita; revalidar itens, material e ponto; registrar descarte; baixar somente as quantidades entregues do estoque do morador; registrar entrada correspondente no ponto; conceder 10 pontos básicos uma vez.

**Exceções:** repetição, concorrência, incompatibilidade ou falha não devem gerar baixa parcial, saldo negativo ou crédito duplicado. Estimativas do ponto não se tornam peso medido. Bônus deve ter vínculo rastreável, sem reaplicar crédito básico se processado posteriormente.

**Regras:**

Regras de origem: RN-007, RN-008. Conferir texto e situação na V6.

**Exceções:** repetição, concorrência, incompatibilidade ou falha não devem gerar baixa parcial, saldo negativo ou crédito duplicado. Estimativas do ponto não se tornam peso medido. Bônus deve ter vínculo rastreável, sem reaplicar crédito básico se processado posteriormente.

**Atenção:** seleção não baixa estoque; apenas confirmação validada produz entrega e 10 pontos. Bônus posterior não bloqueia nem repete o crédito básico.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.


**Critérios de aceite:**

- **CA-01:** Dado três latas e entrega válida de uma, quando confirma, então restam duas no estoque, o ponto registra uma recebida e o morador ganha 10 pontos básicos.
- **CA-02:** Dado a mesma confirmação reenviada, quando é processada, então o descarte e seus efeitos ocorrem uma única vez.
- **CA-03:** Dado falha na conclusão, quando a operação não termina, então o sistema não apresenta sucesso com estoque ou crédito básico incompletos.

**Dependências:**

TSK-MOR-010, TSK-MOR-014, TSK-MOR-017; TSK-TRA-000 e controles transversais aplicáveis. O crédito em TSK-MOR-017 integra o mesmo resultado consistente; não são duas confirmações independentes.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.
- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008; ficha [TSK-MOR-015 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-011](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

**Casos detalhados e ficha de origem:** [TSK-MOR-015](../../../planejamento/modulos/m03.md#tsk-mor-015).

<a id="tsk-mor-016"></a>
