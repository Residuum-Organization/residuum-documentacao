# TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 341 a 402) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Disponibilizar Registrar e Descarte rápido.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Escolher entre guardar embalagens para depois e iniciar a entrega imediatamente. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** login realizado. **Fluxo:** “Registrar” abre a entrada de resíduos e conclui com inclusão no estoque; “Descarte rápido” abre diretamente o scanner e, após revisão dos itens, segue para pontos de coleta. A tela permite alternar para nota fiscal e entrada manual.

**Exceções e resultado:** câmera negada não elimina a entrada manual. Cancelamento não conclui descarte nem concede pontos. A identificação da intenção deve ser preservada ao trocar a forma de cadastro.

**Regras:**

Regras de origem: RN-004. Conferir texto e situação na V6.

**Exceções e resultado:** câmera negada não elimina a entrada manual. Cancelamento não conclui descarte nem concede pontos. A identificação da intenção deve ser preservada ao trocar a forma de cadastro.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.


**Critérios de aceite:**

- **CA-01:** Dado a ação Registrar, quando o cadastro é confirmado, então os itens ficam no estoque sem recompensa.
- **CA-02:** Dado Descarte rápido, quando os itens são revisados e confirmados, então o usuário segue para escolha de ponto sem uma etapa obrigatória de navegação pelo estoque.
- **CA-03:** Dado um rascunho de Descarte rápido revisado, quando cancela, navega para outra área, recarrega ou fecha a aba do fluxo, então o rascunho é eliminado, sem inclusão automática no estoque nem pontos.
- **CA-04:** Dado itens no rascunho rápido, quando abre a rota em outra aba e retorna ao fluxo, então os itens continuam no fluxo e a confirmação exige uma nova leitura GPS.
- **CA-05:** Dado itens no rascunho e falha recuperável de confirmação, quando a pessoa permanece no fluxo e tenta novamente, então os itens são preservados e a repetição da mesma operação não duplica efeitos.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004; ficha [TSK-MOR-005 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

**Casos detalhados e ficha de origem:** [TSK-MOR-005](../../../planejamento/modulos/m02.md#tsk-mor-005).

<a id="tsk-mor-006"></a>
