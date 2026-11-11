# TSK-MOR-010 — Manter estoque e selecionar quantidades

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 628 a 691) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Manter estoque e selecionar quantidades.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Saber o que está disponível e separar apenas o que será entregue. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** itens confirmados. **Fluxo:** salvar entradas; listar nome, material e quantidade; selecionar itens e quantidades disponíveis; iniciar escolha de ponto. Identificação e quantidade não equivalem a peso medido.

**Decisão posterior — 10/10/2026:** o caminho rápido mantém itens somente na memória do fluxo, sem inclusão automática no estoque. Cancelar, sair para outra área, recarregar ou fechar a aba elimina o rascunho. Abrir a rota em outra aba preserva o fluxo; retornar exige GPS novo. Falhas recuperáveis preservam os itens enquanto a pessoa continua no fluxo. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes em PD-006; ver [handoff](../../../ux/morador-v6-handoff.md#jornada-e-regras-aprovadas).

**Exceções:** impedir seleção superior à quantidade disponível; evitar gravação duplicada por repetição de confirmação. Exclusão e ajustes manuais do estoque são PD-006.

**Regras:**

Regras de origem: RN-004, RN-007. Conferir texto e situação na V6.

**Exceções:** impedir seleção superior à quantidade disponível; evitar gravação duplicada por repetição de confirmação. Exclusão e ajustes manuais do estoque são PD-006.

**Atenção:** a proposta antiga de persistir itens rápidos no estoque após abandono foi superada pela decisão de 10/10/2026. Aplicar rascunho em memória; não considerar os contratos reais de PD-006 concluídos por essa decisão.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.


**Critérios de aceite:**

- **CA-01:** Dado cinco latas disponíveis, quando o usuário seleciona duas, então a sessão de descarte contém duas, sem baixar o estoque antes da entrega.
- **CA-02:** Dado uma seleção maior que o saldo, quando tenta prosseguir, então o sistema impede a operação e informa a quantidade disponível.
- **CA-03:** Dado apenas o registro de itens, quando o estoque é atualizado, então não há crédito de pontos.

**Dependências:**

TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007; ficha [TSK-MOR-010 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-006](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

**Casos detalhados e ficha de origem:** [TSK-MOR-010](../../../planejamento/modulos/m02.md#tsk-mor-010).

<a id="tsk-mor-011"></a>
