# TSK-MOR-024 — Administrar e participar de campanhas

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1436 a 1492) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Administrar e participar de campanhas.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Participar de campanhas que tenham condições publicadas pela administração. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** permissão administrativa para gestão; campanha publicada para participação. **Entrada administrativa:** título, descrição, mídia, período e regra de meta, elegibilidade e recompensa. **Fluxo:** preparar cadastro; validar informações; publicar conforme regra aprovada; permitir adesão quando exigida; acompanhar progresso.

**Exceções:** não herdar a obrigação da V5 de ter parceiro confirmado antes de toda campanha. Alteração de campanha já participada, adesão automática/manual e bônus acumulados dependem de PD-011. Participação com custo depende de confirmação e RF-MVP-025.

**Regras:**

Regras de origem: RN-009, RN-019. Conferir texto e situação na V6.

**Exceções:** não herdar a obrigação da V5 de ter parceiro confirmado antes de toda campanha. Alteração de campanha já participada, adesão automática/manual e bônus acumulados dependem de PD-011. Participação com custo depende de confirmação e RF-MVP-025.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado e campanha com dados e regra validados, quando a publica, então ela fica consultável pelos moradores elegíveis.
- **CA-02:** Dado um morador, quando tenta alterar a regra da campanha, então a alteração é negada.
- **CA-03:** Dado uma condição de participação publicada, quando o morador adere, então a participação obedece à condição exibida, sem cobranças ocultas.

**Dependências:**

TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019; ficha [TSK-MOR-024 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-024](../../../planejamento/modulos/m05.md#tsk-mor-024).

<a id="tsk-mor-025"></a>
