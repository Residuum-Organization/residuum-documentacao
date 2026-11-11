# TSK-MOR-012 — Consultar detalhes do ponto

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 749 a 806) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar detalhes do ponto.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Decidir onde entregar com informações operacionais claras. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto consultável. **Fluxo:** apresentar nome, endereço, posição no mapa, materiais aceitos, funcionamento, tipo fixo/temporário e disponibilidade. Exibição pública do volume acumulado depende de PD-019.

**Exceções e resultado:** diferenciar ponto desativado, fora do período temporário e condição de ocupação. Regra de recebimento durante fechamento ou lotação precisa ser definida; não se presume que ponto cheio aceite novos descartes.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções e resultado:** diferenciar ponto desativado, fora do período temporário e condição de ocupação. Regra de recebimento durante fechamento ou lotação precisa ser definida; não se presume que ponto cheio aceite novos descartes.

**Critérios de aceite:**

- **CA-01:** Dado um ponto consultável, quando abre seus detalhes, então o morador vê localização, materiais e informações de funcionamento cadastradas.
- **CA-02:** Dado um ponto temporário fora do período válido, quando é consultado, então não é apresentado como local atualmente disponível para descarte.

**Dependências:**

TSK-MOR-011; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019, PD-007, PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-007:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador
- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento
- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-016; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-012 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-009](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

**Casos detalhados e ficha de origem:** [TSK-MOR-012](../../../planejamento/modulos/m03.md#tsk-mor-012).

<a id="tsk-mor-013"></a>
