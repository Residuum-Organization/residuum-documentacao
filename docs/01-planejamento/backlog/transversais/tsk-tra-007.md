# TSK-TRA-007 — Desempenho e experiência

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3556 a 3610) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Desempenho e experiência.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Comprovar desempenho e usabilidade por cenário; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** metas herdadas a validar. **Origem:** RNF004 e RNF008 antigos; S6.

Referências anteriores: carregamento principal/mapa inferior a 3 segundos em cenário 4G; Lighthouse mínimo 70; cadastro em até dois minutos; sucesso de pelo menos 80% em teste com cinco usuários. Cada métrica precisa de definição de dispositivo, rede, carga, roteiro e medida em PD-025. Lighthouse não comprova sozinho o tempo do mapa ou a usabilidade.

**Verificação:** medir os fluxos no cenário aprovado e registrar resultados. **BDD:** dado cenário de desempenho validado, quando a página é medida, então o resultado é comparado à meta correspondente com evidência.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado cenário de desempenho validado, quando a página é medida, então o resultado é comparado à meta correspondente com evidência.

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

**Rastreabilidade:** RNF-MVP-006; ficha [TSK-TRA-007 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-007](../../../planejamento/modulos/transversal.md#tsk-tra-007).

<a id="tsk-tra-008"></a>
