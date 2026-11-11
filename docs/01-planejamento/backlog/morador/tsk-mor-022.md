# TSK-MOR-022 — Consultar a loja de recompensas

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1326 a 1379) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar a loja de recompensas.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Descobrir recompensas e campanhas disponíveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** usuário autenticado. **Fluxo:** acessar pela confirmação do descarte ou navegação da plataforma; consultar campanhas vigentes, sorteios e vouchers; visualizar título, representação visual, condições resumidas e custo quando aplicável; abrir detalhes antes de participar ou comprar.

**Exceções:** catálogo vazio deve informar ausência de ofertas. Ofertas não publicadas não são apresentadas como compráveis. A loja comercializa benefícios com pontos; cashback financeiro está fora do MVP.

**Regras:**

Regras de origem: RN-010. Conferir texto e situação na V6.

**Exceções:** catálogo vazio deve informar ausência de ofertas. Ofertas não publicadas não são apresentadas como compráveis. A loja comercializa benefícios com pontos; cashback financeiro está fora do MVP.

**Critérios de aceite:**

- **CA-01:** Dado campanhas e vouchers publicados, quando o usuário abre a loja, então encontra as ofertas disponíveis e pode consultar detalhes.
- **CA-02:** Dado catálogo sem ofertas vigentes, quando o abre, então vê uma mensagem adequada sem opções fictícias de compra.

**Dependências:**

TSK-MOR-023, TSK-MOR-024, TSK-MOR-025, TSK-MOR-026; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010; ficha [TSK-MOR-022 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-022](../../../planejamento/modulos/m05.md#tsk-mor-022).

<a id="tsk-mor-023"></a>
