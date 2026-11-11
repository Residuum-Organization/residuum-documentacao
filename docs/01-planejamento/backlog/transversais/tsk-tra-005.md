# TSK-TRA-005 — Resiliência de localização e consulta externa

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3445 a 3500) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Resiliência de localização e consulta externa.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Manter falhas externas explícitas sem falso sucesso; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** GPS confirmado; parâmetros pendentes. **Origem:** RNF007 da V5.

Falhas de GPS, mapas e consulta de produtos/notas devem ser apresentadas sem inventar resultados. Negação de GPS não pode ser convertida em presença válida. Entrada manual deve permanecer acessível para falhas de identificação. Timeout, tentativas, precisão e validade da posição dependem de PD-004 e PD-008.

**Verificação:** simular permissão negada, baixa precisão, localização antiga, indisponibilidade e recuperação. **BDD:** dado GPS inválido, quando o morador tenta concluir, então os itens e pontos não são movimentados indevidamente.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado GPS inválido, quando o morador tenta concluir, então os itens e pontos não são movimentados indevidamente.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-004:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços
- **PD-008:** Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-004; ficha [TSK-TRA-005 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-009](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009), [ADE-010](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010), [ADE-016](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

**Casos detalhados e ficha de origem:** [TSK-TRA-005](../../../planejamento/modulos/transversal.md#tsk-tra-005).

<a id="tsk-tra-006"></a>
