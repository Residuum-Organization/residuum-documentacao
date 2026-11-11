# TSK-ADM-006 — Gerir pontos temporários

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2465 a 2520) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Gerir pontos temporários.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Operar eventos sem perder informações quando o ponto encerra. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** cadastro do ponto. **Entrada:** identificação do evento/ação e início/fim de funcionamento. **Fluxo:** cadastrar como temporário; disponibilizar durante o período autorizado; retirar da lista de locais disponíveis quando encerrado; preservar registros.

**Exceções:** rejeitar término anterior ao início. Encerramento com materiais remanescentes não pode apagar estoque nem cancelar automaticamente uma coleta. Prorrogação e tratamento do saldo remanescente são PD-009.

**Regras:**

Regras de origem: RN-021. Conferir texto e situação na V6.

**Exceções:** rejeitar término anterior ao início. Encerramento com materiais remanescentes não pode apagar estoque nem cancelar automaticamente uma coleta. Prorrogação e tratamento do saldo remanescente são PD-009.

**Critérios de aceite:**

- **CA-01:** Dado ponto temporário fora do período, quando o morador busca local disponível, então o ponto não é oferecido como destino ativo.
- **CA-02:** Dado término de um evento com coletas anteriores, quando o ponto deixa de receber, então os registros permanecem consultáveis aos perfis autorizados.

**Dependências:**

TSK-ADM-005; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021; ficha [TSK-ADM-006 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-ADM-006](../../../planejamento/modulos/m06.md#tsk-adm-006).

<a id="tsk-adm-007"></a>
