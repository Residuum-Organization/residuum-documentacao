# TSK-PON-001 — Editar materiais aceitos

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1619 a 1675) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Editar materiais aceitos.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Informar aos usuários quais embalagens o ponto recebe. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto existente e permissão. **Fluxo:** consultar materiais; editar seleção; salvar e refletir nos detalhes e critérios de descarte; registrar autor e alteração. Material aceito é diferente de material já acumulado.

**Exceções:** deixar de aceitar um material não elimina seu histórico ou estoque existente. Comportamento para usuário que já iniciou deslocamento e alterações simultâneas é PD-009.

**Regras:**

Regras de origem: RN-003. Conferir texto e situação na V6.

**Exceções:** deixar de aceitar um material não elimina seu histórico ou estoque existente. Comportamento para usuário que já iniciou deslocamento e alterações simultâneas é PD-009.

**Critérios de aceite:**

- **CA-01:** Dado responsável autorizado, quando altera os materiais aceitos, então as consultas posteriores apresentam a nova configuração.
- **CA-02:** Dado saldo de PET e retirada do PET da lista aceita, quando consulta o estoque, então o saldo anterior permanece registrado.
- **CA-03:** Dado responsável de outro ponto, quando tenta editar, então a operação é negada.

**Dependências:**

TSK-ADM-005, TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003; ficha [TSK-PON-001 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-013](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-PON-001](../../../planejamento/modulos/m06.md#tsk-pon-001).

<a id="tsk-pon-002"></a>
