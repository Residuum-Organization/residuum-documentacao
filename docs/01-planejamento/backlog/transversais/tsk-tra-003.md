# TSK-TRA-003 — Autenticação e autorização

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3336 a 3391) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Autenticação e autorização.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Impedir acesso horizontal e vertical indevido; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado com ajuste confirmado de perfis. **Origem:** RNF005 e RNF017 antigos.

Todas as operações protegidas devem validar sessão, perfil e vínculo no serviço responsável. Credenciais devem ser protegidas; segredos de integração não podem ser expostos no cliente ou nos documentos. Alterações administrativas devem ter autoria. Política de sessão, senha e papéis depende de PD-003 e PD-023.

**Verificação:** testar acesso horizontal entre moradores/pontos/cooperativas e acesso vertical às funções administrativas. **BDD:** dado usuário sem vínculo, quando envia requisição direta a dados de outro ponto, então a operação é negada mesmo que tenha um plano pago.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado usuário sem vínculo, quando envia requisição direta a dados de outro ponto, então a operação é negada mesmo que tenha um plano pago.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-002; ficha [TSK-TRA-003 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-003](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-TRA-003](../../../planejamento/modulos/transversal.md#tsk-tra-003).

<a id="tsk-tra-004"></a>
