# TSK-ADM-014 — Exibir gráficos e indicadores

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2928 a 2983) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Exibir gráficos e indicadores.

**Módulo:** M09 — Administração, indicadores e relatórios. **Módulos afetados:** M09.

**Objetivo:** Acompanhar a atividade da rede com indicadores interpretáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** apresentar totais e gráficos de usuários ativos, pontos ativos e cooperativas; distinguir habilitação cadastral, funcionamento do local e presença online; permitir contexto de período e abrangência conforme definições aprovadas.

**Exceções:** “ativo” não será calculado automaticamente como “logado agora”. Medição de presença online, janela de atividade, fuso e significado de cooperativa aberta são PD-020. Não inventar dados para preencher gráficos.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** “ativo” não será calculado automaticamente como “logado agora”. Medição de presença online, janela de atividade, fuso e significado de cooperativa aberta são PD-020. Não inventar dados para preencher gráficos.

**Critérios de aceite:**

- **CA-01:** Dado uma definição aprovada de atividade, quando o gráfico é consultado, então exibe período, universo e contagem compatíveis com essa definição.
- **CA-02:** Dado habilitação e conexão como indicadores distintos, quando são mostrados, então a legenda permite distinguir os conceitos.

**Dependências:**

TSK-ADM-013; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-020. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-020:** Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado

**Prioridade de origem:** P2.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-048; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-014 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

**Casos detalhados e ficha de origem:** [TSK-ADM-014](../../../planejamento/modulos/m09.md#tsk-adm-014).

<a id="tsk-adm-015"></a>
