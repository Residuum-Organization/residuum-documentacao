# TSK-MOR-013 — Encaminhar usuário à navegação externa

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 807 a 866) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Encaminhar usuário à navegação externa.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Chegar ao ponto escolhido usando o aplicativo de mapas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto selecionado com coordenadas válidas. **Fluxo:** oferecer navegação; abrir aplicativo/serviço externo com o ponto como destino; permitir retorno ao fluxo para confirmar a entrega.

**Exceções:** indisponibilidade do navegador de mapas deve preservar ponto e itens. Não marcar chegada ou descarte com base apenas na abertura da rota. A rota abre em outra aba e conserva o fluxo; no retorno, exigir GPS novo. Fechar a aba do fluxo elimina o rascunho rápido conforme decisão de 10/10/2026; contratos reais continuam sujeitos a PD-006.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** indisponibilidade do navegador de mapas deve preservar ponto e itens. Não marcar chegada ou descarte com base apenas na abertura da rota. A rota abre em outra aba e conserva o fluxo; no retorno, exigir GPS novo. Fechar a aba do fluxo elimina o rascunho rápido conforme decisão de 10/10/2026; contratos reais continuam sujeitos a PD-006.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.


**Critérios de aceite:**

- **CA-01:** Dado um ponto escolhido, quando o usuário inicia navegação, então o destino enviado corresponde ao ponto selecionado.
- **CA-02:** Dado apenas a abertura da navegação, quando retorna, então a entrega ainda exige validação de presença e confirmação.

**Dependências:**

TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.
- **PD-007:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do usuário

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-017; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-013 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-009](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

**Casos detalhados e ficha de origem:** [TSK-MOR-013](../../../planejamento/modulos/m03.md#tsk-mor-013).

<a id="tsk-mor-014"></a>
