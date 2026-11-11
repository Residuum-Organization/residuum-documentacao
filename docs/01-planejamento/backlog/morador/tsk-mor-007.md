# TSK-MOR-007 — Importar itens de nota fiscal

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 459 a 517) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Importar itens de nota fiscal.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Cadastrar embalagens de uma compra com menos esforço. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** leitura da nota e fonte de consulta disponíveis. **Fluxo:** escanear o identificador da nota; buscar informações; apresentar os itens e quantidades disponíveis; identificar possíveis embalagens PET e lata; permitir selecionar, revisar, corrigir e confirmar somente os resíduos desejados.

**Exceções:** nota indisponível ou ilegível permite entrada manual. Nome comercial ou volume não garante identificação do material. Importação não descarta automaticamente nem concede pontos. Reimportação da nota deve ter comportamento definido em PD-005.

**Regras:**

Regras de origem: RN-003, RN-004, RN-005. Conferir texto e situação na V6.

**Exceções:** nota indisponível ou ilegível permite entrada manual. Nome comercial ou volume não garante identificação do material. Importação não descarta automaticamente nem concede pontos. Reimportação da nota deve ter comportamento definido em PD-005.

**Critérios de aceite:**

- **CA-01:** Dado uma nota consultável com produtos identificados, quando a importação termina, então o formulário apresenta as informações recuperadas antes da confirmação.
- **CA-02:** Dado material não identificado, quando o morador revisa, então pode escolher PET ou lata manualmente.
- **CA-03:** Dado uma falha de consulta, quando o sistema informa o erro, então nenhuma recompensa é gerada e o cadastro manual permanece disponível.

**Dependências:**

TSK-MOR-005, TSK-MOR-008, TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-005, PD-004, PD-022. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-004:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços
- **PD-005:** Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?
- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-007 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

**Casos detalhados e ficha de origem:** [TSK-MOR-007](../../../planejamento/modulos/m02.md#tsk-mor-007).

<a id="tsk-mor-008"></a>
