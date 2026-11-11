# TSK-MOR-004 — Consultar e editar perfil

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 285 a 340) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar e editar perfil.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Manter informações pessoais corretas e consultar a própria conta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado. **Fluxo:** consultar seus dados; editar campos permitidos; visualizar descartes concluídos, pontuação e recompensas; acessar extrato e estoque. Alterar e-mail ou identificadores exige política ainda a validar.

**Exceções e resultado:** usuário não pode editar registros de descarte ou saldo por esse formulário. Alteração falha não deve substituir os dados válidos anteriores. Não é permitido consultar o perfil privado de outro morador.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções e resultado:** usuário não pode editar registros de descarte ou saldo por esse formulário. Alteração falha não deve substituir os dados válidos anteriores. Não é permitido consultar o perfil privado de outro morador.

**Critérios de aceite:**

- **CA-01:** Dado um morador autenticado, quando consulta o perfil, então vê seus dados, saldo e históricos disponíveis.
- **CA-02:** Dado uma alteração válida em campo permitido, quando a salva, então o perfil apresenta o novo valor sem alterar pontos ou descartes.

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

**Rastreabilidade:** RF-MVP-007; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-004 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-MOR-004](../../../planejamento/modulos/m01.md#tsk-mor-004).

<a id="tsk-mor-005"></a>
