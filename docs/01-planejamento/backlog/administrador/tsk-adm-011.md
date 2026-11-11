# TSK-ADM-011 — Iniciar pagamento por API

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2757 a 2814) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Iniciar pagamento por API.

**Módulo:** M08 — Pagamento das coletas. **Módulos afetados:** M08.

**Objetivo:** Pagar a coleta dentro da plataforma com rastreabilidade. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** informações válidas e condição de autorização aprovada. **Fluxo:** administrador confirma; plataforma envia ordem ao provedor; vincula identificador externo à coleta; registra resposta inicial; aguarda resultado quando o processamento não for imediato.

**Exceções:** envio não significa que dinheiro foi recebido. Reenvio por timeout deve reutilizar a identificação da mesma ordem, evitando pagamento duplicado. Concluir coleta ou aceitar solicitação não inicia pagamento automaticamente.

**Regras:**

Regras de origem: RN-017. Conferir texto e situação na V6.

**Exceções:** envio não significa que dinheiro foi recebido. Reenvio por timeout deve reutilizar a identificação da mesma ordem, evitando pagamento duplicado. Concluir coleta ou aceitar solicitação não inicia pagamento automaticamente.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado e ordem válida, quando confirma o pagamento, então a plataforma solicita processamento e registra a identificação da ordem.
- **CA-02:** Dado a mesma confirmação repetida, quando processada, então não produz duas ordens de pagamento para a mesma operação.
- **CA-03:** Dado coleta concluída sem ação administrativa de pagamento, quando consulta o financeiro, então não aparece automaticamente como paga.

**Dependências:**

TSK-ADM-010; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-015, PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?
- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017; ficha [TSK-ADM-011 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

**Casos detalhados e ficha de origem:** [TSK-ADM-011](../../../planejamento/modulos/m08.md#tsk-adm-011).

<a id="tsk-adm-012"></a>
