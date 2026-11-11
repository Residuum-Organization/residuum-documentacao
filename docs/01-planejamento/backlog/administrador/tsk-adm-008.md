# TSK-ADM-008 — Cadastrar cooperativa e seus acessos

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2577 a 2636) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Cadastrar cooperativa e seus acessos.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Habilitar cooperativas identificadas para receber solicitações. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Entrada:** CNPJ, identificação da organização, contatos e operadores; dados financeiros serão definidos com o pagamento.

**Fluxo:** cadastrar organização; validar os dados conforme política aprovada; associar acessos; habilitar operação. Validação cadastral externa, documentos, áreas atendidas e cadastro do recebedor de pagamento aguardam definição.

**Exceções:** CNPJ não equivale automaticamente à comprovação de que a entidade é uma cooperativa. Cadastro incompleto não deve habilitar pagamento sem os dados exigidos pelo provedor. Desativação preserva histórico.

**Regras:**

Regras de origem: RN-011. Conferir texto e situação na V6.

**Exceções:** CNPJ não equivale automaticamente à comprovação de que a entidade é uma cooperativa. Cadastro incompleto não deve habilitar pagamento sem os dados exigidos pelo provedor. Desativação preserva histórico.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado e dados aceitos, quando cadastra a cooperativa, então ela fica identificada por CNPJ e seus operadores possuem vínculos definidos.
- **CA-02:** Dado acesso de uma cooperativa, quando consulta coletas, então visualiza somente as atribuídas ou autorizadas a sua organização.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003, PD-016, PD-023. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-008 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-015](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-ADM-008](../../../planejamento/modulos/m07.md#tsk-adm-008).

<a id="tsk-adm-009"></a>
