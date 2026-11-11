# TSK-MOR-026 — Administrar sorteios e registrar participações

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1551 a 1608) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Administrar sorteios e registrar participações.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Participar de sorteio com regras compreensíveis e registro confiável. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** sorteio publicado com regras validadas. **Fluxo:** administrador cadastra descrição, prêmio, período e condições; morador consulta e confirma participação; registrar inscrição e custo se aplicável; apurar resultado conforme mecanismo aprovado; disponibilizar resultado e notificação prevista.

**Exceções:** custo em pontos, quantidade de chances, limites, algoritmo, cancelamento, prêmio e condições de realização aguardam PD-013. Seleção aleatória e e-mail da V5 são referências para validação, não autorização para realizar promoção sem regras acordadas.

**Regras:**

Regras de origem: RN-019. Conferir texto e situação na V6.

**Exceções:** custo em pontos, quantidade de chances, limites, algoritmo, cancelamento, prêmio e condições de realização aguardam PD-013. Seleção aleatória e e-mail da V5 são referências para validação, não autorização para realizar promoção sem regras acordadas.

**Critérios de aceite:**

- **CA-01:** Dado sorteio com custo aprovado, quando a participação é confirmada com saldo suficiente, então registra participação e débito vinculados.
- **CA-02:** Dado inscrições e método de apuração validados, quando o resultado é apurado, então registra os ganhadores e a execução para consulta autorizada.
- **CA-03:** Dado inscrição reenviada da mesma operação, quando processada, então não cria chances adicionais involuntariamente.

**Dependências:**

TSK-MOR-021, TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-013, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-013:** Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização
- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-026 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-026](../../../planejamento/modulos/m05.md#tsk-mor-026).

<a id="ponto"></a>
