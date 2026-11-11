# TSK-TRA-006 — Proteção de dados e privacidade

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3501 a 3555) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Proteção de dados e privacidade.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Minimizar e proteger dados pessoais necessários; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação de produto/jurídico. **Origem:** RNF005 antigo.

Definir finalidade e dados mínimos para usuários, localização e nota fiscal; proteger transmissão e armazenamento; restringir relatórios por autorização; registrar escolhas aplicáveis de compartilhamento. Não tratar consentimento como requisito universal ou comprovação automática de conformidade legal. A política de privacidade, base de tratamento, retenção e atendimento ao titular são PD-022.

**Verificação:** revisar dados coletados, logs, exportações e acesso direto; comprovar que credenciais, tokens de notas e dados pessoais desnecessários não aparecem em logs comuns. **BDD:** dado relatório sem autorização para dados identificáveis, quando é solicitado, então não retorna identificadores pessoais.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado relatório sem autorização para dados identificáveis, quando é solicitado, então não retorna identificadores pessoais.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-005; ficha [TSK-TRA-006 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-025](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

**Casos detalhados e ficha de origem:** [TSK-TRA-006](../../../planejamento/modulos/transversal.md#tsk-tra-006).

<a id="tsk-tra-007"></a>
