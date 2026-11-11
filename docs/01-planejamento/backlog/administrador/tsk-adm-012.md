# TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2815 a 2871) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Acompanhar confirmação e falhas de pagamento.

**Módulo:** M08 — Pagamento das coletas. **Módulos afetados:** M08.

**Objetivo:** Saber se o pagamento foi confirmado, falhou ou continua pendente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** consultar ou receber atualização da ordem conforme integração; validar autenticidade do retorno; atualizar situação financeira; mostrar coleta, valor, identificador e resultado aos perfis autorizados.

**Exceções:** resposta desconhecida ou timeout não equivale a pagamento confirmado. Retorno repetido não reaplica o efeito. Ordem fora de sequência deve ser conciliada com o provedor. Estorno, reembolso, nova tentativa, tarifas e reconciliação aguardam PD-016.

**Regras:**

Regras de origem: RN-017, RN-018. Conferir texto e situação na V6.

**Exceções:** resposta desconhecida ou timeout não equivale a pagamento confirmado. Retorno repetido não reaplica o efeito. Ordem fora de sequência deve ser conciliada com o provedor. Estorno, reembolso, nova tentativa, tarifas e reconciliação aguardam PD-016.

**Critérios de aceite:**

- **CA-01:** Dado confirmação autêntica de pagamento bem-sucedido, quando processada, então a ordem passa a apresentar pagamento confirmado.
- **CA-02:** Dado falha ou resultado ainda incerto, quando consultado, então o sistema não informa que a cooperativa recebeu.
- **CA-03:** Dado um retorno repetido, quando recebido novamente, então o resultado não gera nova ordem ou duplicidade financeira.

**Dependências:**

TSK-ADM-011; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018; ficha [TSK-ADM-012 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

**Casos detalhados e ficha de origem:** [TSK-ADM-012](../../../planejamento/modulos/m08.md#tsk-adm-012).

<a id="tsk-adm-013"></a>
