# TSK-MOR-009 — Revisar itens antes da inclusão

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 574 a 627) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Revisar itens antes da inclusão.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Corrigir identificação e quantidade antes de gravar embalagens. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** itens obtidos por scanner, nota ou formulário. **Fluxo:** apresentar nome, material e quantidade; permitir correção e seleção dos itens a incluir; confirmar explicitamente. Produtos fora dos dois materiais iniciais não devem ser classificados silenciosamente como PET ou lata.

**Resultado:** lista validada para estoque ou descarte rápido. Cancelar a revisão não conclui descarte. Características desconhecidas devem aparecer como informação a completar, não como resultado confirmado da consulta.

**Regras:**

Regras de origem: RN-003, RN-004, RN-005. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado uma importação com material desconhecido, quando o usuário tenta confirmar, então o material deve ser completado antes da inclusão.
- **CA-02:** Dado uma lista revisada, quando a confirma, então somente os itens selecionados e suas quantidades revisadas são incluídos.

**Dependências:**

TSK-MOR-008; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-005. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-005:** Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-009 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-007](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

**Casos detalhados e ficha de origem:** [TSK-MOR-009](../../../planejamento/modulos/m02.md#tsk-mor-009).

<a id="tsk-mor-010"></a>
