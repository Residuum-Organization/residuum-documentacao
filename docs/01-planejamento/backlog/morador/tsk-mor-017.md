# TSK-MOR-017 — Creditar recompensa básica provisória

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1042 a 1098) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Creditar recompensa básica provisória.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Receber a recompensa provisória pela entrega concluída. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** RF-MVP-019 concluído de forma consistente. **Fluxo:** registrar crédito de 10 pontos vinculado ao descarte e ao morador; atualizar saldo; tornar o lançamento consultável. Dez pontos são por descarte, não por embalagem, produto, kg, scanner ou nota fiscal.

**Exceções e resultado:** não creditar no cadastro, início de rota, chegada sem confirmação ou pesagem da cooperativa. Repetições devem recuperar o resultado anterior. Quantidades e materiais não alteram os 10 pontos básicos da regra provisória.

**Regras:**

Regras de origem: RN-008, RN-010, RN-016. Conferir texto e situação na V6.

**Exceções e resultado:** não creditar no cadastro, início de rota, chegada sem confirmação ou pesagem da cooperativa. Repetições devem recuperar o resultado anterior. Quantidades e materiais não alteram os 10 pontos básicos da regra provisória.

**Critérios de aceite:**

- **CA-01:** Dado um descarte válido contendo vários itens, quando é concluído, então recebe um crédito básico de 10 pontos.
- **CA-02:** Dado uma pesagem da cooperativa sobre materiais já entregues, quando é registrada, então nenhum novo crédito básico é gerado para os moradores.
- **CA-03:** Dado confirmação repetida, quando é processada, então o saldo não aumenta novamente.

**Dependências:**

Sem dependência funcional anterior específica; verificar fundamentos da etapa; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-010. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-010:** Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016; ficha [TSK-MOR-017 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-011](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

**Casos detalhados e ficha de origem:** [TSK-MOR-017](../../../planejamento/modulos/m04.md#tsk-mor-017).

<a id="tsk-mor-018"></a>
