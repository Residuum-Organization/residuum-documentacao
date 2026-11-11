# TSK-MOR-011 — Consultar pontos próximos compatíveis

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 692 a 748) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar pontos próximos compatíveis.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Encontrar um destino que receba o material selecionado. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** seleção de resíduos ou consulta ao mapa. **Fluxo:** obter localização quando autorizada; mostrar pontos próximos no mapa; informar materiais aceitos; permitir filtros e escolha. Um ponto incompatível não pode ser usado para concluir a entrega daquele material.

**Exceções:** nenhum ponto elegível, GPS negado e serviço de mapas indisponível devem produzir mensagem clara sem concluir descarte. Busca por endereço sem GPS e descarte em mais de um ponto são PD-007.

**Regras:**

Regras de origem: RN-007. Conferir texto e situação na V6.

**Exceções:** nenhum ponto elegível, GPS negado e serviço de mapas indisponível devem produzir mensagem clara sem concluir descarte. Busca por endereço sem GPS e descarte em mais de um ponto são PD-007.

**Critérios de aceite:**

- **CA-01:** Dado seleção de latas, quando o morador consulta pontos, então identifica quais recebem alumínio.
- **CA-02:** Dado seleção de PET e lata, quando tenta concluir tudo em um ponto que só aceita PET, então o sistema não confirma a entrega incompatível.
- **CA-03:** Dado ausência de ponto compatível, quando a consulta termina, então informa a indisponibilidade sem alterar estoque ou saldo.

**Dependências:**

TSK-MOR-010, TSK-ADM-005, TSK-PON-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-007. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-007:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007; ficha [TSK-MOR-011 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-009](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

**Casos detalhados e ficha de origem:** [TSK-MOR-011](../../../planejamento/modulos/m03.md#tsk-mor-011).

<a id="tsk-mor-012"></a>
