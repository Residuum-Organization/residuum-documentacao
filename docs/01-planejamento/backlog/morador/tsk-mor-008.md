# TSK-MOR-008 — Cadastrar resíduo manualmente

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 518 a 573) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Cadastrar resíduo manualmente.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Cadastrar PET e lata mesmo quando a leitura não funciona. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado na tela compartilhada. **Entrada:** nome do produto/resíduo, material PET ou lata de alumínio e quantidade de embalagens.

**Fluxo:** preencher campos; validar material e quantidade; revisar; adicionar os itens conforme Registrar ou Descarte rápido. Quantidade deve ser inteira e positiva para contagem de embalagens; peso é informado pela cooperativa em operação distinta.

**Exceções e resultado:** não aceitar quantidade zero/negativa ou material fora do escopo; informar o campo inválido sem perder os demais dados válidos.

**Regras:**

Regras de origem: RN-003, RN-004. Conferir texto e situação na V6.

**Exceções e resultado:** não aceitar quantidade zero/negativa ou material fora do escopo; informar o campo inválido sem perder os demais dados válidos.

**Critérios de aceite:**

- **CA-01:** Dado nome, material aceito e quantidade válida, quando o cadastro é confirmado, então os itens são adicionados conforme a intenção da ação.
- **CA-02:** Dado quantidade inválida, quando o morador tenta confirmar, então o sistema solicita correção e não adiciona os itens.

**Dependências:**

TSK-MOR-005; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-008 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-005](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005).

**Casos detalhados e ficha de origem:** [TSK-MOR-008](../../../planejamento/modulos/m02.md#tsk-mor-008).

<a id="tsk-mor-009"></a>
