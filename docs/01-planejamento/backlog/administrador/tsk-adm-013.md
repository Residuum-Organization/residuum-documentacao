# TSK-ADM-013 — Disponibilizar visão administrativa da operação

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2872 a 2927) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Disponibilizar visão administrativa da operação.

**Módulo:** M09 — Administração, indicadores e relatórios. **Módulos afetados:** M09.

**Objetivo:** Supervisionar pontos e coletas em uma visão comum. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** acessar cadastros de usuários, pontos, cooperativas, convites e loja; acompanhar ocupação e pedidos; encaminhar solicitações; consultar andamento e pagamentos; acessar indicadores e relatórios conforme permissões e plano.

**Exceções:** privilégio administrativo não contorna automaticamente limites comerciais de relatórios, pois o usuário confirmou restrição também para esse perfil. Definir informações operacionais mínimas em PD-019 para não bloquear agendamento e pagamento.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** privilégio administrativo não contorna automaticamente limites comerciais de relatórios, pois o usuário confirmou restrição também para esse perfil. Definir informações operacionais mínimas em PD-019 para não bloquear agendamento e pagamento.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado, quando acessa a área, então encontra os cadastros e ações administrativas previstas para seu perfil.
- **CA-02:** Dado informações necessárias a uma coleta, quando consulta a operação, então o comportamento respeita a matriz de acesso operacional aprovada, separada da matriz de relatórios.

**Dependências:**

TSK-ADM-005, TSK-ADM-008, TSK-ADM-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-047; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-013 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

**Casos detalhados e ficha de origem:** [TSK-ADM-013](../../../planejamento/modulos/m09.md#tsk-adm-013).

<a id="tsk-adm-014"></a>
