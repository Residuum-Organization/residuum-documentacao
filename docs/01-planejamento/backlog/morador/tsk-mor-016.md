# TSK-MOR-016 — Exibir confirmação e histórico de descartes

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 987 a 1041) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Exibir confirmação e histórico de descartes.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Ver o resultado da entrega e continuar para Home ou Loja. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** operação concluída. **Fluxo:** exibir ponto, itens/quantidades, resultado e 10 pontos básicos; separar eventual bônus e saldo; oferecer “Voltar para Home” e “Ir para a Loja”; disponibilizar o registro no histórico pessoal.

**Exceções:** falha não usa tela de sucesso. Bônus ainda não confirmado não aparece como já creditado. Histórico deve distinguir registro no estoque de entrega realizada.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** falha não usa tela de sucesso. Bônus ainda não confirmado não aparece como já creditado. Histórico deve distinguir registro no estoque de entrega realizada.

**Critérios de aceite:**

- **CA-01:** Dado descarte concluído, quando a confirmação aparece, então apresenta a recompensa e ambas as ações de navegação.
- **CA-02:** Dado “Ir para a Loja”, quando o morador seleciona a ação, então acessa a loja autenticado.
- **CA-03:** Dado consulta ao histórico, quando localiza a entrega, então os dados correspondem ao descarte concluído.

**Dependências:**

TSK-MOR-015; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-020; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-016 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

**Casos detalhados e ficha de origem:** [TSK-MOR-016](../../../planejamento/modulos/m03.md#tsk-mor-016).

<a id="tsk-mor-017"></a>
