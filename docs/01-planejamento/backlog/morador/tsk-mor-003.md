# TSK-MOR-003 — Recuperar acesso

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 229 a 284) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Recuperar acesso.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Retomar o uso sem depender de intervenção informal da equipe. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Objetivo e fluxo:** solicitar recuperação de senha, receber instruções pelo canal validado, apresentar token de recuperação, cadastrar nova senha e invalidar o token após uso.

**Pré-condições:** mecanismo de recuperação disponível. **Exceções:** token inválido, expirado ou já utilizado não altera a senha; mensagens de solicitação não devem revelar se uma pessoa está cadastrada.

**Dados e resultado:** identificador da conta, solicitação e confirmação; credenciais recuperadas sem expor senha anterior. Canal, prazo e política de senha dependem de PD-003.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado um token válido, quando o titular confirma uma senha aceita, então poderá autenticar-se com a nova senha.
- **CA-02:** Dado um token usado ou inválido, quando houver nova tentativa, então a senha permanece inalterada.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-006; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-003 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-MOR-003](../../../planejamento/modulos/m01.md#tsk-mor-003).

<a id="tsk-mor-004"></a>
