# Residuum — Cooperativa

[Documento geral](../01-atividades-gerais.md) · [Guia das tasks](../README.md) · [Fluxo e qualidade](../../05-qualidade/01-fluxo-e-qualidade.md)

**Atualização:** 17/10/2026. **Atividades próprias:** 4.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

## Épicos e funcionalidades

### Solicitações e aceite

- [TSK-COO-001 — Consultar e aceitar solicitação de coleta](#tsk-coo-001)

### Agenda, rota e acompanhamento

- [TSK-COO-002 — Fornecer rota e agendamento no painel](#tsk-coo-002)
- [TSK-COO-003 — Acompanhar andamento da coleta](#tsk-coo-003)

### Pesagem e retirada

- [TSK-COO-004 — Registrar materiais e pesos retirados](#tsk-coo-004)

## Fichas completas

<a id="tsk-coo-001"></a>

## TSK-COO-001 — Consultar e aceitar solicitação de coleta

**Nome da atividade:** Consultar e aceitar solicitação de coleta.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Decidir se pode atender à coleta que lhe foi atribuída. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** solicitação atribuída e ainda passível de aceite. **Fluxo:** consultar ponto, materiais aceitos e agendamento; confirmar aceite; registrar operador e momento; refletir decisão no painel administrativo.

**Exceções:** outra cooperativa não pode aceitar; repetição não cria nova coleta. Recusa, silêncio, prazo de resposta e cancelamento aguardam PD-014. Não existe oferta indiscriminada para primeira cooperativa que responder.

**Regras:**

Regras de origem: RN-013. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado solicitação destinada à cooperativa, quando seu operador aceita, então o administrador e a cooperativa consultam o aceite registrado.
- **CA-02:** Dado cooperativa diferente, quando tenta aceitar, então a operação é negada.
- **CA-03:** Dado aceite repetido da mesma solicitação, quando processado, então não duplica coleta ou compromisso.

**Dependências:**

TSK-ADM-009; TSK-TRA-000 e controles transversais aplicáveis.

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

**Rastreabilidade:** RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013; ficha [TSK-COO-001 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

### História, contexto e subtarefas

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero confirmar que a cooperativa realizará a coleta proposta para decidir se pode atender à coleta que lhe foi atribuída.

**Valor e relevância:** Decidir se pode atender à coleta que lhe foi atribuída. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar e aceitar solicitação atribuída uma única vez, expondo decisão aos atores autorizados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar e aceitar solicitação de coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-COO-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-001; RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013.

**Pré-condições e dados:** solicitação destinada à cooperativa. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: seu operador aceita.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador e a cooperativa consultam o aceite registrado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-COO-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-COO-001; RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013.

**Pré-condições e dados:** cooperativa diferente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta aceitar.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a operação é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-COO-001-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-COO-001; RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013.

**Pré-condições e dados:** aceite repetido da mesma solicitação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não duplica coleta ou compromisso.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-coo-002"></a>

## TSK-COO-002 — Fornecer rota e agendamento no painel

**Nome da atividade:** Fornecer rota e agendamento no painel.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Planejar a ida ao ponto com rota e horário fornecidos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** coleta atribuída, ponto georreferenciado e serviço de mapas disponível. **Fluxo:** exibir localização e agendamento; obter rota via integração prevista com Google Maps; apresentar orientação no painel.

**Exceções:** falha da API deve manter identificação do ponto e compromisso acessíveis. Origem do trajeto, navegação externa/interna da cooperativa, atualização da rota e estimativa de chegada são PD-017. Não inclui prova do caminho percorrido ou rastreamento contínuo.

**Regras:**

Regras de origem: RN-014. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado coleta atribuída com destino válido, quando o operador abre o painel, então vê ponto e agendamento fornecidos pela plataforma.
- **CA-02:** Dado rota obtida pelo serviço, quando é exibida, então está identificada como orientação planejada e não como trajeto realizado.

**Dependências:**

TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-017. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-017:** Define a origem da rota, a navegação e os horários ou estimativas apresentados à cooperativa.

**Registros das decisões relacionadas:** [PD-017](../04-decisoes.md#tsk-dec-017).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014; ficha [TSK-COO-002 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-016](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

### História, contexto e subtarefas

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero disponibilizar destino, rota planejada e horário previsto sem preenchimento manual da cooperativa para planejar a ida ao ponto com rota e horário fornecidos.

**Valor e relevância:** Planejar a ida ao ponto com rota e horário fornecidos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Apresentar destino, agendamento e rota planejada pelo serviço aprovado sem alegar trajeto realizado.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Fornecer rota e agendamento no painel” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-COO-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-002; RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014.

**Pré-condições e dados:** coleta atribuída com destino válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o operador abre o painel.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê ponto e agendamento fornecidos pela plataforma.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-COO-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-COO-002; RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014.

**Pré-condições e dados:** rota obtida pelo serviço. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é exibida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** está identificada como orientação planejada e não como trajeto realizado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-coo-003"></a>

## TSK-COO-003 — Acompanhar andamento da coleta

**Nome da atividade:** Acompanhar andamento da coleta.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Compartilhar o andamento sem confundir retirada e recebimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** registrar solicitação, aceite e entrega dos registros da coleta; apresentar situação e eventos com autoria; manter histórico. Proposta de estados: solicitada, aceita, em execução e registrada. Transição “em execução” depende de gatilho a definir.

**Exceções:** estados de recusada, cancelada ou concluída após revisão administrativa não são decisões confirmadas. Regras de correção e início real de execução aguardam PD-014 e PD-018.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Atenção:** “em execução” e seu gatilho são propostos; não tornar essa passagem obrigatória sem resolver PD-014.

**Critérios de aceite:**

- **CA-01:** Dado aceite registrado, quando os atores autorizados consultam a coleta, então veem a mesma decisão com autoria e data.
- **CA-02:** Dado coleta registrada e pagamento ainda não confirmado, quando consultam o andamento, então situação operacional e financeira são exibidas separadamente.

**Dependências:**

TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014, PD-018, PD-017. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Define transições e exceções da solicitação e execução da coleta, incluindo aceite, cancelamento e retirada parcial.
- **PD-017:** Define a origem da rota, a navegação e os horários ou estimativas apresentados à cooperativa.
- **PD-018:** Define precisão, correção e conciliação dos pesos e contagens necessários ao movimento de retirada.

**Registros das decisões relacionadas:** [PD-014](../04-decisoes.md#tsk-dec-014), [PD-018](../04-decisoes.md#tsk-dec-018), [PD-017](../04-decisoes.md#tsk-dec-017).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-042; RNF-MVP-001, RNF-MVP-002; ficha [TSK-COO-003 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015), [ADE-016](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

### História, contexto e subtarefas

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com estados propostos para validação.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero mostrar a progressão da solicitação sem confundir operação e pagamento para compartilhar o andamento sem confundir retirada e recebimento.

**Valor e relevância:** Compartilhar o andamento sem confundir retirada e recebimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar eventos de solicitação, aceite e registro; transições não definidas permanecem condicionadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Acompanhar andamento da coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-COO-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-003; RF-MVP-042; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** aceite registrado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os atores autorizados consultam a coleta.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** veem a mesma decisão com autoria e data.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-COO-003-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-COO-003; RF-MVP-042; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** coleta registrada e pagamento ainda não confirmado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consultam o andamento.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** situação operacional e financeira são exibidas separadamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-coo-004"></a>

## TSK-COO-004 — Registrar materiais e pesos retirados

**Nome da atividade:** Registrar materiais e pesos retirados.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Informar à administração quais materiais retirou e seus pesos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** solicitação aceita e acesso autorizado. **Entrada:** material PET e/ou lata de alumínio e peso medido de cada material; kg como unidade de apresentação herdada da V5, precisão a validar.

**Fluxo:** abrir coleta; preencher os materiais retirados e pesos; revisar; enviar; disponibilizar registros ao administrador; refletir movimentação do ponto segundo regra de conciliação validada. Somente materiais presentes na retirada devem ser informados; campo ausente não significa peso medido zero.

**Exceções:** rejeitar peso negativo e registrar falha sem concluir. Coleta parcial, peso zero, correção e reconciliação com embalagens em estoque são PD-014 e PD-018. Não zerar automaticamente todo o ponto só porque houve coleta.

**Regras:**

Regras de origem: RN-003, RN-014, RN-015, RN-016. Conferir texto e situação na V6.

**Atenção:** aceite é a pré-condição confirmada. Não converter unidades em kg nem zerar material remanescente sem conciliação aprovada.

**Critérios de aceite:**

- **CA-01:** Dado coleta aceita, quando registra 12 kg de PET e 3 kg de alumínio, então o administrador consulta os dois pesos vinculados ao ponto, à coleta e à cooperativa.
- **CA-02:** Dado registro reenviado da mesma operação, quando processado, então não duplica retirada ou peso contabilizado.
- **CA-03:** Dado pesagem registrada, quando o resultado é gravado, então não credita novamente os 10 pontos dos moradores.

**Dependências:**

TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014, PD-018. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Define transições e exceções da solicitação e execução da coleta, incluindo aceite, cancelamento e retirada parcial.
- **PD-018:** Define precisão, correção e conciliação dos pesos e contagens necessários ao movimento de retirada.

**Registros das decisões relacionadas:** [PD-014](../04-decisoes.md#tsk-dec-014), [PD-018](../04-decisoes.md#tsk-dec-018).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016; ficha [TSK-COO-004 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-017](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

### História, contexto e subtarefas

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero informar o que efetivamente foi retirado do ponto por material para informar à administração quais materiais retirou e seus pesos.

**Valor e relevância:** Informar à administração quais materiais retirou e seus pesos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Registrar PET/alumínio e pesos por material na coleta aceita, sem novo crédito ao morador e sem zerar o ponto por inferência.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Registrar materiais e pesos retirados” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-COO-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-004; RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.

**Pré-condições e dados:** coleta aceita. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: registra 12 kg de PET e 3 kg de alumínio.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador consulta os dois pesos vinculados ao ponto, à coleta e à cooperativa.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-COO-004-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-COO-004; RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.

**Pré-condições e dados:** registro reenviado da mesma operação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não duplica retirada ou peso contabilizado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-COO-004-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-COO-004; RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.

**Pré-condições e dados:** pesagem registrada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o resultado é gravado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não credita novamente os 10 pontos dos moradores.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>
