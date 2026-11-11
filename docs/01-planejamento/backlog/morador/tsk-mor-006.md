# TSK-MOR-006 — Identificar produto por código de barras

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 403 a 458) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Identificar produto por código de barras.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Evitar digitação quando o código do produto é reconhecido. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** câmera autorizada ou alternativa de entrada disponível. **Fluxo:** ler código do produto; consultar a fonte de produtos; apresentar nome e material quando identificável; permitir revisão e quantidade; confirmar conforme a intenção inicial.

**Exceções:** código ilegível, produto não encontrado e fonte indisponível permitem cadastro manual. Código de barras não comprova compra, consumo ou posse exclusiva da unidade física. A mesma leitura não pode multiplicar itens involuntariamente.

**Regras:**

Regras de origem: RN-003, RN-004. Conferir texto e situação na V6.

**Exceções:** código ilegível, produto não encontrado e fonte indisponível permitem cadastro manual. Código de barras não comprova compra, consumo ou posse exclusiva da unidade física. A mesma leitura não pode multiplicar itens involuntariamente.

**Critérios de aceite:**

- **CA-01:** Dado um código conhecido, quando a consulta termina, então o formulário é preenchido com os dados disponíveis para revisão.
- **CA-02:** Dado um código desconhecido, quando não há identificação, então o usuário pode informar nome, material e quantidade manualmente.

**Dependências:**

TSK-MOR-005, TSK-MOR-008, TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-004. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-004:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-006 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007).

**Casos detalhados e ficha de origem:** [TSK-MOR-006](../../../planejamento/modulos/m02.md#tsk-mor-006).

<a id="tsk-mor-007"></a>
