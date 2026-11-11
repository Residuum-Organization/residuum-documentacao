# TSK-TRA-002 — Plataforma responsiva e compatibilidade

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3281 a 3335) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Plataforma responsiva e compatibilidade.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Permitir uso das jornadas em dispositivos suportados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação. **Origem:** RNF001 e RNF004 antigos.

O produto deve permitir uso em navegador móvel e desktop, com câmera e localização onde suportadas. Modo PWA deve ser verificado antes de ser declarado compatível. Estados de permissão negada, leitura falha e formulário manual devem ser compreensíveis. Fluxos principais devem permitir navegação por teclado e identificação dos campos; esta orientação de acessibilidade é proposta de qualidade para validação.

**Verificação:** executar login, cadastro manual, scanner, retorno de mapas e confirmação em matriz de dispositivos aprovada. Referência anterior: cinco modelos Android; seleção atual pendente em PD-025. **BDD:** dado navegador suportado, quando um fluxo é executado, então controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado navegador suportado, quando um fluxo é executado, então controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-025:** Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-001; ficha [TSK-TRA-002 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-002](../../../planejamento/modulos/transversal.md#tsk-tra-002).

<a id="tsk-tra-003"></a>
