# Residuum — Ponto de coleta

[Documento geral](../01-atividades-gerais.md) · [Guia das tasks](../README.md) · [Fluxo e qualidade](../../05-qualidade/01-fluxo-e-qualidade.md)

**Atualização:** 17/10/2026. **Atividades próprias:** 5.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

## Épicos e funcionalidades

### Materiais aceitos e estoque

- [TSK-PON-001 — Editar materiais aceitos](#tsk-pon-001)
- [TSK-PON-002 — Acompanhar estoque e ocupação do ponto](#tsk-pon-002)

### Alertas e solicitação de retirada

- [TSK-PON-003 — Sinalizar necessidade de coleta](#tsk-pon-003)
- [TSK-PON-004 — Solicitar coleta ao administrador](#tsk-pon-004)

### Relatórios

- [TSK-PON-005 — Consultar relatórios dos pontos](#tsk-pon-005)

## Fichas completas

<a id="tsk-pon-001"></a>

## TSK-PON-001 — Editar materiais aceitos

**Nome da atividade:** Editar materiais aceitos.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Informar aos moradores quais embalagens o ponto recebe. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto existente e permissão. **Fluxo:** consultar materiais; editar seleção; salvar e refletir nos detalhes e critérios de descarte; registrar autor e alteração. Material aceito é diferente de material já acumulado.

**Exceções:** deixar de aceitar um material não elimina seu histórico ou estoque existente. Comportamento para usuário que já iniciou deslocamento e alterações simultâneas é PD-009.

**Regras:**

Regras de origem: RN-003. Conferir texto e situação na V6.

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

- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.

**Registros das decisões relacionadas:** [PD-009](../04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003; ficha [TSK-PON-001 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-013](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

### História, contexto e subtarefas

**Perfil principal:** responsável pelo ponto. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero informar e alterar se o ponto recebe PET, lata de alumínio ou ambos para informar aos moradores quais embalagens o ponto recebe.

**Valor e relevância:** Informar aos moradores quais embalagens o ponto recebe. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Editar PET/lata aceitos por responsável vinculado ou administrador; atualizar consultas sem apagar estoque anterior.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Editar materiais aceitos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-PON-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-001; RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003.

**Pré-condições e dados:** responsável autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: altera os materiais aceitos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** as consultas posteriores apresentam a nova configuração.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-001; RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003.

**Pré-condições e dados:** saldo de PET e retirada do PET da lista aceita. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o estoque.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o saldo anterior permanece registrado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-001-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-PON-001; RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003.

**Pré-condições e dados:** responsável de outro ponto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta editar.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a operação é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-pon-002"></a>

## TSK-PON-002 — Acompanhar estoque e ocupação do ponto

**Nome da atividade:** Acompanhar estoque e ocupação do ponto.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Acompanhar o material acumulado e preparar a retirada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** apresentar entradas por material, quantidades registradas, coletas e situação de ocupação; atualizar após descartes e retiradas; distinguir quantidades de embalagens, estimativas e pesos efetivamente coletados.

**Exceções:** não converter número de latas em kg reais sem regra validada. Método de ocupação, unidade da capacidade e tratamento de coleta parcial são PD-009 e PD-014. O painel operacional e os relatórios pagos são capacidades distintas; acesso mínimo precisa de PD-019.

**Regras:**

Regras de origem: RN-015, RN-021. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado entradas de PET e lata, quando consulta o painel, então identifica os materiais separadamente.
- **CA-02:** Dado peso medido registrado na coleta, quando consulta indicadores, então ele não é apresentado como o peso individual comprovado de cada descarte.
- **CA-03:** Dado informação apenas estimada, quando é exibida, então aparece identificada como estimativa.

**Dependências:**

TSK-ADM-005, TSK-MOR-015; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009, PD-014, PD-019, PD-018. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.
- **PD-014:** Define transições e exceções da solicitação e execução da coleta, incluindo aceite, cancelamento e retirada parcial.
- **PD-018:** Define precisão, correção e conciliação dos pesos e contagens necessários ao movimento de retirada.
- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.

**Registros das decisões relacionadas:** [PD-009](../04-decisoes.md#tsk-dec-009), [PD-014](../04-decisoes.md#tsk-dec-014), [PD-019](../04-decisoes.md#tsk-dec-019), [PD-018](../04-decisoes.md#tsk-dec-018).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021; ficha [TSK-PON-002 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-014](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014), [ADE-017](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

### História, contexto e subtarefas

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero mostrar os materiais recebidos e a necessidade de retirada para acompanhar o material acumulado e preparar a retirada.

**Valor e relevância:** Acompanhar o material acumulado e preparar a retirada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Exibir estoque e ocupação com unidade e cálculo definidos, distinguindo embalagens de pesos medidos.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Acompanhar estoque e ocupação do ponto” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-PON-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-002; RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021.

**Pré-condições e dados:** entradas de PET e lata. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o painel.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** identifica os materiais separadamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-002; RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021.

**Pré-condições e dados:** peso medido registrado na coleta. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta indicadores.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ele não é apresentado como o peso individual comprovado de cada descarte.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-002-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-PON-002; RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021.

**Pré-condições e dados:** informação apenas estimada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é exibida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** aparece identificada como estimativa.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-pon-003"></a>

## TSK-PON-003 — Sinalizar necessidade de coleta

**Nome da atividade:** Sinalizar necessidade de coleta.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Identificar necessidade de retirada antes de comprometer a operação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** critério de ocupação aprovado. **Fluxo:** avaliar nível conforme parâmetro; sinalizar no painel do administrador e do responsável; disponibilizar início de pedido de coleta. Não encaminhar automaticamente à cooperativa.

**Exceções:** cálculo de nível, frequência de atualização, alertas externos e repetição são PD-009 e PD-021. Um alerta por si só não agenda retirada nem comprova que ela aconteceu.

**Regras:**

Regras de origem: RN-013. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado nível atingindo o limite validado, quando o indicador é atualizado, então o administrador e o responsável visualizam a necessidade de coleta.
- **CA-02:** Dado somente a sinalização de lotação, quando ela ocorre, então nenhuma cooperativa recebe coleta automaticamente atribuída.

**Dependências:**

TSK-PON-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.
- **PD-021:** Define os eventos e o contrato de notificação externa necessários à atividade, quando exigidos.

**Registros das decisões relacionadas:** [PD-009](../04-decisoes.md#tsk-dec-009), [PD-021](../04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013; ficha [TSK-PON-003 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-014](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014).

### História, contexto e subtarefas

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero evidenciar ponto próximo do limite ou cheio para apoiar agendamento para identificar necessidade de retirada antes de comprometer a operação.

**Valor e relevância:** Identificar necessidade de retirada antes de comprometer a operação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Sinalizar lotação no painel do ponto e administração, sem chamar cooperativa automaticamente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Sinalizar necessidade de coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-PON-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-003; RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013.

**Pré-condições e dados:** nível atingindo o limite validado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o indicador é atualizado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador e o responsável visualizam a necessidade de coleta.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-003-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-003; RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013.

**Pré-condições e dados:** somente a sinalização de lotação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: ela ocorre.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** nenhuma cooperativa recebe coleta automaticamente atribuída.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-pon-004"></a>

## TSK-PON-004 — Solicitar coleta ao administrador

**Nome da atividade:** Solicitar coleta ao administrador.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Pedir retirada ao administrador e acompanhar o encaminhamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** responsável vinculado ao ponto. **Fluxo:** selecionar o ponto autorizado; registrar pedido e informações pertinentes; encaminhar ao painel administrativo; acompanhar encaminhamento. O administrador também pode iniciar coleta sem pedido prévio do ponto.

**Exceções:** não gerar solicitações duplicadas por repetição de envio. Regras para múltiplos pedidos abertos, cancelamento e informações opcionais são PD-014.

**Regras:**

Regras de origem: RN-012. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado responsável autorizado, quando envia um pedido, então o administrador pode consultá-lo com identificação do ponto e solicitante.
- **CA-02:** Dado pedido ainda não encaminhado, quando a cooperativa consulta sua área, então ele não aparece como coleta atribuída a ela.

**Dependências:**

TSK-PON-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Define transições e exceções da solicitação e execução da coleta, incluindo aceite, cancelamento e retirada parcial.

**Registros das decisões relacionadas:** [PD-014](../04-decisoes.md#tsk-dec-014).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-PON-004 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

### História, contexto e subtarefas

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero pedir retirada sem escolher ou acionar diretamente a cooperativa para pedir retirada ao administrador e acompanhar o encaminhamento.

**Valor e relevância:** Pedir retirada ao administrador e acompanhar o encaminhamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Enviar pedido identificado para administração, sem atribuição automática à cooperativa.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Solicitar coleta ao administrador” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-PON-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-004; RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** responsável autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: envia um pedido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador pode consultá-lo com identificação do ponto e solicitante.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-004-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-004; RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** pedido ainda não encaminhado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a cooperativa consulta sua área.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ele não aparece como coleta atribuída a ela.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-pon-005"></a>

## TSK-PON-005 — Consultar relatórios dos pontos

**Nome da atividade:** Consultar relatórios dos pontos.

**Módulo:** M09 — Administração, indicadores e relatórios. **Módulos afetados:** M09.

**Objetivo:** Obter relatórios dos pontos autorizados conforme plano. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** selecionar ponto/período autorizado; consultar descartes, materiais, coletas e pesos medidos disponíveis; apresentar usuários associados aos eventos apenas no nível de detalhe permitido; aplicar limites do plano.

**Exceções:** peso coletado não significa material vendido ou comprado. Expressões como “quantas pessoas passaram” precisam de PD-020: GPS de confirmação não mede visitantes que não registraram eventos. Download CSV/PDF é PD-019, não inclusão automática.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado ponto autorizado e plano com o relatório, quando consulta um período, então encontra dados correspondentes aos eventos registrados e às unidades indicadas.
- **CA-02:** Dado relatório não incluído no plano, quando solicita acesso, então o sistema informa a restrição sem retornar os dados protegidos.

**Dependências:**

TSK-TRA-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-020, PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.
- **PD-020:** Define os conceitos, as janelas e a abrangência dos indicadores e relatórios apresentados.

**Registros das decisões relacionadas:** [PD-020](../04-decisoes.md#tsk-dec-020), [PD-019](../04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-PON-005 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022), [ADE-023](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

### História, contexto e subtarefas

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero consultar movimentação e resultados dos pontos, sem prometer dados ainda não definidos para obter relatórios dos pontos autorizados conforme plano.

**Valor e relevância:** Obter relatórios dos pontos autorizados conforme plano. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar relatórios com abrangência e unidades aprovadas; administrador também segue a política de plano.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar relatórios dos pontos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-PON-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-005; RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** ponto autorizado e plano com o relatório. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta um período.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra dados correspondentes aos eventos registrados e às unidades indicadas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-PON-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-005; RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** relatório não incluído no plano. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: solicita acesso.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema informa a restrição sem retornar os dados protegidos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>
