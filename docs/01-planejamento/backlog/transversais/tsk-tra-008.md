# TSK-TRA-008 — Disponibilidade, backups e recuperação

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3611 a 3665) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Disponibilidade, backups e recuperação.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Demonstrar recuperação e monitorar disponibilidade; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação. **Origem:** RNF010 e RNF016 antigos.

Referências anteriores: backups diários, RPO de 24 horas e RTO de 4 horas; disponibilidade de 99% em horário comercial. Janela comercial, cálculo, alertas, retenção de backups e metas vigentes são PD-026. Uso de cloud gerenciada não comprova cumprimento desses objetivos.

**Verificação:** executar restauração em ambiente controlado, medir recuperação e demonstrar monitoramento. **BDD:** dado backup válido, quando restauração de teste é realizada, então dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado backup válido, quando restauração de teste é realizada, então dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-026:** Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-007; ficha [TSK-TRA-008 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-008](../../../planejamento/modulos/transversal.md#tsk-tra-008).

<a id="tsk-tra-009"></a>
