# Residuum — Administrador

[Documento geral](../01-atividades-gerais.md) · [Guia das tasks](../README.md) · [Fluxo e qualidade](../../05-qualidade/01-fluxo-e-qualidade.md)

**Atualização:** 17/10/2026. **Atividades próprias:** 17.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

A gestão de campanhas, vouchers e sorteios também depende das fichas [TSK-MOR-024 — Administrar e participar de campanhas](01-morador.md#tsk-mor-024), [TSK-MOR-025 — Administrar e adquirir vouchers](01-morador.md#tsk-mor-025), [TSK-MOR-026 — Administrar sorteios e registrar participações](01-morador.md#tsk-mor-026). Elas conservam uma única ficha editável no perfil morador.

## Épicos e funcionalidades

### Convites, moradores e acessos

- [TSK-ADM-001 — Gerenciar convites individuais](#tsk-adm-001)
- [TSK-ADM-002 — Gerenciar convites compartilhados](#tsk-adm-002)
- [TSK-ADM-003 — Cadastrar morador pela administração](#tsk-adm-003)
- [TSK-ADM-004 — Administrar acessos e vínculos](#tsk-adm-004)

### Pontos de coleta

- [TSK-ADM-005 — Cadastrar e administrar pontos de coleta](#tsk-adm-005)
- [TSK-ADM-006 — Gerir pontos temporários](#tsk-adm-006)
- [TSK-ADM-007 — Classificar contexto e funcionamento do ponto](#tsk-adm-007)

### Cooperativas e agendamentos

- [TSK-ADM-008 — Cadastrar cooperativa e seus acessos](#tsk-adm-008)
- [TSK-ADM-009 — Solicitar e agendar coleta administrativamente](#tsk-adm-009)

### Pagamentos

- [TSK-ADM-010 — Preparar informações de pagamento](#tsk-adm-010)
- [TSK-ADM-011 — Iniciar pagamento por API](#tsk-adm-011)
- [TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento](#tsk-adm-012)

### Visão administrativa e indicadores

- [TSK-ADM-013 — Disponibilizar visão administrativa da operação](#tsk-adm-013)
- [TSK-ADM-014 — Exibir gráficos e indicadores](#tsk-adm-014)

### Planos e mídias

- [TSK-ADM-015 — Representar planos e benefícios de dados](#tsk-adm-015)
- [TSK-ADM-016 — Associar contratação e vigência de plano](#tsk-adm-016)
- [TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja](#tsk-adm-017)

## Fichas completas

<a id="tsk-adm-001"></a>

## TSK-ADM-001 — Gerenciar convites individuais

**Nome da atividade:** Gerenciar convites individuais.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** autorizar um único novo cadastro por link individual.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições e entrada:** administrador autenticado e autorizado; modalidade individual selecionada. Prazo e vinculação ao destinatário dependem de PD-001.

**Fluxo:** administrador gera o convite; o sistema cria um link com identificação não previsível; apresenta seu estado e disponibiliza o link para distribuição pelo administrador; o destinatário acessa o cadastro; após cadastro bem-sucedido, o convite é consumido uma única vez.

**Resultado e exceções:** cadastro falho não consome o convite. Link inexistente, expirado quando houver prazo, ou consumido não autoriza novo cadastro. Duas confirmações simultâneas não podem produzir dois usuários com o mesmo convite.

**Regras:**

Regras de origem: RN-001, RN-002. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um convite individual válido, quando um cadastro é concluído, então o sistema cria um usuário e marca o convite como utilizado.
- **CA-02:** Dado o mesmo convite usado em duas confirmações simultâneas, quando ambas forem processadas, então somente um cadastro poderá consumir esse convite.
- **CA-03:** Dado um link inválido ou já consumido, quando alguém tentar cadastrar-se, então o sistema informa o impedimento sem criar usuário.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-001, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-001:** Define validade, limites e consumo dos convites usados nesta atividade.
- **PD-002:** Define as condições de criação e habilitação das contas e dos acessos envolvidos.

**Registros das decisões relacionadas:** [PD-001](../04-decisoes.md#tsk-dec-001), [PD-002](../04-decisoes.md#tsk-dec-002).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-001 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero autorizar um único novo cadastro por link individual para controlar quem pode entrar na plataforma.

**Valor e relevância:** Controlar quem pode entrar na plataforma. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Criar e consultar link individual com limite de um cadastro; demonstrar bloqueio de reutilização.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Gerenciar convites individuais” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-001; RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um convite individual válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um cadastro é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema cria um usuário e marca o convite como utilizado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-001; RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** o mesmo convite usado em duas confirmações simultâneas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: ambas forem processadas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** somente um cadastro poderá consumir esse convite.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-001-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-001; RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um link inválido ou já consumido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: alguém tentar cadastrar-se.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema informa o impedimento sem criar usuário.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-002"></a>

## TSK-ADM-002 — Gerenciar convites compartilhados

**Nome da atividade:** Gerenciar convites compartilhados.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** controlar entrada de um grupo por um link com expiração e número máximo de cadastros.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições e entrada:** administrador autorizado; quantidade limite positiva e instante de expiração informados. Fuso e limites permitidos serão definidos em PD-001.

**Fluxo:** gerar link; acompanhar limite, cadastros concluídos e validade; permitir novas inscrições enquanto o convite estiver vigente e houver vagas; incrementar o consumo somente ao concluir cada cadastro.

**Resultado e exceções:** atingir o limite ou a expiração bloqueia novos cadastros. Atualização do contador e criação do usuário devem ser consistentes, inclusive na última vaga. Não se presume renovação automática.

**Regras:**

Regras de origem: RN-001, RN-002. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um link vigente com vagas, quando um cadastro é concluído, então o contador aumenta em uma unidade.
- **CA-02:** Dado um link expirado ou esgotado, quando houver tentativa de cadastro, então a inscrição não é concluída.
- **CA-03:** Dado apenas uma vaga restante e duas confirmações concorrentes, quando forem processadas, então no máximo uma nova conta será criada por esse link.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-001, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-001:** Define validade, limites e consumo dos convites usados nesta atividade.
- **PD-002:** Define as condições de criação e habilitação das contas e dos acessos envolvidos.

**Registros das decisões relacionadas:** [PD-001](../04-decisoes.md#tsk-dec-001), [PD-002](../04-decisoes.md#tsk-dec-002).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-002 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero controlar entrada de um grupo por um link com expiração e número máximo de cadastros para controlar o tamanho do piloto sem distribuir links pessoa a pessoa.

**Valor e relevância:** Controlar o tamanho do piloto sem distribuir links pessoa a pessoa. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Criar link compartilhado com expiração e limite, preservando a última vaga sob concorrência.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Gerenciar convites compartilhados” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-002; RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um link vigente com vagas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um cadastro é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o contador aumenta em uma unidade.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-002; RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um link expirado ou esgotado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: houver tentativa de cadastro.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a inscrição não é concluída.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-002-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-002; RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** apenas uma vaga restante e duas confirmações concorrentes. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: forem processadas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** no máximo uma nova conta será criada por esse link.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-003"></a>

## TSK-ADM-003 — Cadastrar morador pela administração

**Nome da atividade:** Cadastrar morador pela administração.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** permitir criação administrativa de moradores com rastreabilidade.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Entrada:** dados do morador conforme RF-MVP-003.

**Fluxo:** abrir cadastro administrativo; informar dados; validar duplicidade; criar o registro; registrar quem realizou a operação. Forma de ativação, entrega de acesso e eventual uso de convites nesse caminho são PD-002 e PD-003.

**Resultado:** morador cadastrado; sua criação não equivale a consentimento do titular, entrega de credenciais ou login realizado. Não se presume atuação do administrador em descartes do morador.

**Regras:**

Regras de origem: RN-001. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um administrador autorizado, quando cria um morador com dados válidos, então o cadastro fica disponível e a autoria é registrada.
- **CA-02:** Dado um perfil sem essa permissão, quando tenta a operação, então a criação é negada.
- **CA-03:** Dado um e-mail já utilizado, quando o cadastro é enviado, então o sistema informa o conflito sem criar conta duplicada.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-002, PD-003, PD-022. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-002:** Define as condições de criação e habilitação das contas e dos acessos envolvidos.
- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.
- **PD-022:** Define tratamento, proteção e retenção dos dados pessoais acessados ou produzidos por esta atividade.

**Registros das decisões relacionadas:** [PD-002](../04-decisoes.md#tsk-dec-002), [PD-003](../04-decisoes.md#tsk-dec-003), [PD-022](../04-decisoes.md#tsk-dec-022).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-ADM-003 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E2.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero permitir criação administrativa de moradores com rastreabilidade para apoiar moradores no ingresso assistido.

**Valor e relevância:** Apoiar moradores no ingresso assistido. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Cadastrar morador administrativamente segundo política aprovada, com autoria e acesso correto.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar morador pela administração” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-003; RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um administrador autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: cria um morador com dados válidos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o cadastro fica disponível e a autoria é registrada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-003-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-003; RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um perfil sem essa permissão. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta a operação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a criação é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-003-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-003; RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um e-mail já utilizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o cadastro é enviado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema informa o conflito sem criar conta duplicada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-004"></a>

## TSK-ADM-004 — Administrar acessos e vínculos

**Nome da atividade:** Administrar acessos e vínculos.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Delegar a operação mantendo limites de responsabilidade. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Fluxo:** localizar ou criar acesso operacional conforme política aprovada; associar responsável ao ponto ou operador à cooperativa; habilitar/desabilitar acesso; manter histórico de alterações.

**Exceções:** um vínculo não autoriza acesso a todos os pontos da rede. Exclusão física de contas e acúmulo de papéis não são definidos. O cadastro da organização não deve produzir uma senha compartilhada entre todos os operadores.

**Regras:**

Regras de origem: RN-011. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um responsável vinculado a um ponto, quando acessa o painel, então atua apenas nos pontos autorizados.
- **CA-02:** Dado um acesso desabilitado, quando tenta ação operacional, então a operação é negada.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-002, PD-023, PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-002:** Define as condições de criação e habilitação das contas e dos acessos envolvidos.
- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.
- **PD-023:** Define vínculos, acúmulo de perfis e duração ou revogação das sessões que autorizam a operação.

**Registros das decisões relacionadas:** [PD-002](../04-decisoes.md#tsk-dec-002), [PD-023](../04-decisoes.md#tsk-dec-023), [PD-003](../04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-004 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E1.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero associar acessos aos pontos e cooperativas e gerir habilitação das contas para delegar a operação mantendo limites de responsabilidade.

**Valor e relevância:** Delegar a operação mantendo limites de responsabilidade. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Associar e revogar acessos por perfil e organização, com aplicação no serviço e trilha de autoria.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar acessos e vínculos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-004; RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** um responsável vinculado a um ponto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: acessa o painel.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** atua apenas nos pontos autorizados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-004-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-004; RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** um acesso desabilitado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta ação operacional.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a operação é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-005"></a>

## TSK-ADM-005 — Cadastrar e administrar pontos de coleta

**Nome da atividade:** Cadastrar e administrar pontos de coleta.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Disponibilizar pontos confiáveis para descarte e gestão. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Entrada:** nome, endereço, coordenadas, responsável, contexto do local, tipo fixo/temporário, materiais aceitos, funcionamento e parâmetros de capacidade quando definidos.

**Fluxo:** criar ponto; associar responsável e dados operacionais; habilitar sua disponibilização; editar ou desativar com histórico. O novo fluxo substitui solicitação pública por CPF/CNPJ e fila de aprovação do cadastro.

**Exceções:** cadastro incompleto não deve produzir localização enganosa; desativação preserva histórico. Documentos exigidos para o ponto são PD-003; não exigir CNPJ de todo local residencial por inferência.

**Regras:**

Regras de origem: RN-011. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado cadastro válido realizado pelo administrador, quando o ponto é habilitado, então aparece nas consultas conforme sua disponibilidade e materiais.
- **CA-02:** Dado um morador, quando tenta cadastrar um ponto diretamente, então a função administrativa não é autorizada.
- **CA-03:** Dado desativação, quando o histórico é consultado, então as entregas e coletas anteriores continuam identificando o ponto.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003, PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.
- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.

**Registros das decisões relacionadas:** [PD-003](../04-decisoes.md#tsk-dec-003), [PD-009](../04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-005 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero centralizar o cadastro dos locais e seus responsáveis para disponibilizar pontos confiáveis para descarte e gestão.

**Valor e relevância:** Disponibilizar pontos confiáveis para descarte e gestão. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Cadastrar, editar e desativar pontos; associar responsável e disponibilizar dados operacionais com histórico.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar e administrar pontos de coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-005; RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** cadastro válido realizado pelo administrador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o ponto é habilitado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** aparece nas consultas conforme sua disponibilidade e materiais.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-005; RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** um morador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta cadastrar um ponto diretamente.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a função administrativa não é autorizada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-005-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-005; RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** desativação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o histórico é consultado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** as entregas e coletas anteriores continuam identificando o ponto.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-006"></a>

## TSK-ADM-006 — Gerir pontos temporários

**Nome da atividade:** Gerir pontos temporários.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Operar eventos sem perder informações quando o ponto encerra. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** cadastro do ponto. **Entrada:** identificação do evento/ação e início/fim de funcionamento. **Fluxo:** cadastrar como temporário; disponibilizar durante o período autorizado; retirar da lista de locais disponíveis quando encerrado; preservar registros.

**Exceções:** rejeitar término anterior ao início. Encerramento com materiais remanescentes não pode apagar estoque nem cancelar automaticamente uma coleta. Prorrogação e tratamento do saldo remanescente são PD-009.

**Regras:**

Regras de origem: RN-021. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado ponto temporário fora do período, quando o morador busca local disponível, então o ponto não é oferecido como destino ativo.
- **CA-02:** Dado término de um evento com coletas anteriores, quando o ponto deixa de receber, então os registros permanecem consultáveis aos perfis autorizados.

**Dependências:**

TSK-ADM-005; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.

**Registros das decisões relacionadas:** [PD-009](../04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021; ficha [TSK-ADM-006 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero operar pontos em eventos, feiras ou ações específicas por período determinado para operar eventos sem perder informações quando o ponto encerra.

**Valor e relevância:** Operar eventos sem perder informações quando o ponto encerra. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Gerir vigência de pontos temporários, retirar encerrados da disponibilidade e preservar materiais/histórico.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Gerir pontos temporários” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-006; RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021.

**Pré-condições e dados:** ponto temporário fora do período. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador busca local disponível.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o ponto não é oferecido como destino ativo.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-006-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-006; RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021.

**Pré-condições e dados:** término de um evento com coletas anteriores. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o ponto deixa de receber.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os registros permanecem consultáveis aos perfis autorizados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-007"></a>

## TSK-ADM-007 — Classificar contexto e funcionamento do ponto

**Nome da atividade:** Classificar contexto e funcionamento do ponto.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Contextualizar o ponto e orientar o horário de atendimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** classificar contexto como condomínio, residência, apartamento, loja, faculdade ou outro rótulo aprovado; manter tipo fixo/temporário em campo separado; cadastrar horários e disponibilidade; apresentar informações no mapa e no painel.

**Exceções:** contexto não altera automaticamente material aceito ou permissões. Formato de tags versus categoria única e permissão de edição dos horários aguardam PD-009. Funcionamento não é o mesmo que operador conectado.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado uma faculdade com ponto temporário, quando consulta seu cadastro, então contexto e duração são informações separadas.
- **CA-02:** Dado horários cadastrados, quando abre os detalhes, então a informação corresponde ao cadastro atual.

**Dependências:**

TSK-ADM-005; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.

**Registros das decisões relacionadas:** [PD-009](../04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-033; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-007 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com dados herdados.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero distinguir natureza do local e informar funcionamento para contextualizar o ponto e orientar o horário de atendimento.

**Valor e relevância:** Contextualizar o ponto e orientar o horário de atendimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Cadastrar classificação do local e funcionamento, respeitando permissões de edição aprovadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Classificar contexto e funcionamento do ponto” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-007; RF-MVP-033; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma faculdade com ponto temporário. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta seu cadastro.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** contexto e duração são informações separadas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-007-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-007; RF-MVP-033; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** horários cadastrados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre os detalhes.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a informação corresponde ao cadastro atual.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-008"></a>

## TSK-ADM-008 — Cadastrar cooperativa e seus acessos

**Nome da atividade:** Cadastrar cooperativa e seus acessos.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Habilitar cooperativas identificadas para receber solicitações. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Entrada:** CNPJ, identificação da organização, contatos e operadores; dados financeiros serão definidos com o pagamento.

**Fluxo:** cadastrar organização; validar os dados conforme política aprovada; associar acessos; habilitar operação. Validação cadastral externa, documentos, áreas atendidas e cadastro do recebedor de pagamento aguardam definição.

**Exceções:** CNPJ não equivale automaticamente à comprovação de que a entidade é uma cooperativa. Cadastro incompleto não deve habilitar pagamento sem os dados exigidos pelo provedor. Desativação preserva histórico.

**Regras:**

Regras de origem: RN-011. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado e dados aceitos, quando cadastra a cooperativa, então ela fica identificada por CNPJ e seus operadores possuem vínculos definidos.
- **CA-02:** Dado acesso de uma cooperativa, quando consulta coletas, então visualiza somente as atribuídas ou autorizadas a sua organização.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003, PD-016, PD-023. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.
- **PD-016:** Define provedor e contrato do pagamento, autorização, confirmação, conciliação e tratamento de repetição ou estorno.
- **PD-023:** Define vínculos, acúmulo de perfis e duração ou revogação das sessões que autorizam a operação.

**Registros das decisões relacionadas:** [PD-003](../04-decisoes.md#tsk-dec-003), [PD-016](../04-decisoes.md#tsk-dec-016), [PD-023](../04-decisoes.md#tsk-dec-023).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-008 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-015](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero habilitar organizações que executam coletas, identificadas por CNPJ para habilitar cooperativas identificadas para receber solicitações.

**Valor e relevância:** Habilitar cooperativas identificadas para receber solicitações. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Cadastrar cooperativa com CNPJ conforme política aprovada e vincular operadores autorizados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar cooperativa e seus acessos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-008; RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** administrador autorizado e dados aceitos. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: cadastra a cooperativa.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ela fica identificada por CNPJ e seus operadores possuem vínculos definidos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-008-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-008; RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** acesso de uma cooperativa. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta coletas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** visualiza somente as atribuídas ou autorizadas a sua organização.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-009"></a>

## TSK-ADM-009 — Solicitar e agendar coleta administrativamente

**Nome da atividade:** Solicitar e agendar coleta administrativamente.

**Módulo:** M07 — Cooperativas, solicitações e execução de coletas. **Módulos afetados:** M07.

**Objetivo:** Coordenar a retirada escolhendo cooperativa e agendamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto e cooperativa cadastrados; necessidade identificada pelo administrador ou pedido recebido. **Entrada:** ponto, cooperativa e data/horário previstos.

**Fluxo:** consultar ocupação; selecionar cooperativa; informar agendamento; enviar solicitação; registrar autoria e horário do envio; apresentar no painel da cooperativa para aceite. O horário é previsto até o aceite, conforme estado proposto na seção 10.

**Exceções:** envio não significa aceite. Reatribuição, conflito de horários e alterações após aceite são PD-014. Valor não será calculado automaticamente antes da definição de PD-015.

**Regras:**

Regras de origem: RN-012. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado, quando envia a solicitação, então a cooperativa escolhida vê ponto e agendamento para decidir sobre o aceite.
- **CA-02:** Dado solicitação recém-enviada, quando o administrador consulta, então ela não é exibida como já aceita.
- **CA-03:** Dado necessidade identificada diretamente pelo administrador, quando solicita, então não exige pedido prévio do responsável.

**Dependências:**

TSK-ADM-005, TSK-ADM-008; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-014, PD-015, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-014:** Define transições e exceções da solicitação e execução da coleta, incluindo aceite, cancelamento e retirada parcial.
- **PD-015:** Define o valor e a base de cálculo ou negociação da coleta antes de preparar seu pagamento.
- **PD-021:** Define os eventos e o contrato de notificação externa necessários à atividade, quando exigidos.

**Registros das decisões relacionadas:** [PD-014](../04-decisoes.md#tsk-dec-014), [PD-015](../04-decisoes.md#tsk-dec-015), [PD-021](../04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-ADM-009 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero selecionar quem retirará materiais de um ponto e propor o agendamento para coordenar a retirada escolhendo cooperativa e agendamento.

**Valor e relevância:** Coordenar a retirada escolhendo cooperativa e agendamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Selecionar ponto/cooperativa, propor horário e enviar solicitação para aceite, com ou sem pedido do ponto.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Solicitar e agendar coleta administrativamente” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-009; RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** administrador autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: envia a solicitação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a cooperativa escolhida vê ponto e agendamento para decidir sobre o aceite.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-009-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-009; RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** solicitação recém-enviada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o administrador consulta.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ela não é exibida como já aceita.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-009-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-009; RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** necessidade identificada diretamente pelo administrador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: solicita.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não exige pedido prévio do responsável.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-010"></a>

## TSK-ADM-010 — Preparar informações de pagamento

**Nome da atividade:** Preparar informações de pagamento.

**Módulo:** M08 — Pagamento das coletas. **Módulos afetados:** M08.

**Objetivo:** Preparar uma remuneração ligada à coleta correta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** integração selecionada e condições aprovadas. **Entrada:** identificação da coleta e cooperativa, valor definido segundo futura regra e dados do recebedor exigidos pela API.

**Fluxo:** consultar a coleta; apresentar identificação do recebedor e valor; obter confirmação administrativa. Não definir tabela por kg, material ou distância, nem permitir cálculo implícito.

**Exceções:** sem valor ou dados financeiros válidos, pagamento não pode ser iniciado. Aprovação da coleta, negociação de valor e condições de liberação ainda são PD-015 e PD-016.

**Regras:**

Regras de origem: RN-017. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado valor e recebedor definidos pela política aprovada, quando o administrador prepara o pagamento, então vê coleta, destinatário e valor antes de confirmar.
- **CA-02:** Dado dados obrigatórios ausentes, quando tenta prosseguir, então o sistema impede envio à API e informa o que falta.

**Dependências:**

TSK-COO-004, TSK-ADM-008; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-015, PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-015:** Define o valor e a base de cálculo ou negociação da coleta antes de preparar seu pagamento.
- **PD-016:** Define provedor e contrato do pagamento, autorização, confirmação, conciliação e tratamento de repetição ou estorno.

**Registros das decisões relacionadas:** [PD-015](../04-decisoes.md#tsk-dec-015), [PD-016](../04-decisoes.md#tsk-dec-016).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017; ficha [TSK-ADM-010 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências bloqueantes.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero identificar coleta, valor e recebedor antes de iniciar pagamento dentro da plataforma para preparar uma remuneração ligada à coleta correta.

**Valor e relevância:** Preparar uma remuneração ligada à coleta correta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar dados da coleta e registrar informações de pagamento segundo valor/condições aprovados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Preparar informações de pagamento” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-010; RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017.

**Pré-condições e dados:** valor e recebedor definidos pela política aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o administrador prepara o pagamento.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê coleta, destinatário e valor antes de confirmar.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-010-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-010; RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017.

**Pré-condições e dados:** dados obrigatórios ausentes. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta prosseguir.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema impede envio à API e informa o que falta.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-011"></a>

## TSK-ADM-011 — Iniciar pagamento por API

**Nome da atividade:** Iniciar pagamento por API.

**Módulo:** M08 — Pagamento das coletas. **Módulos afetados:** M08.

**Objetivo:** Pagar a coleta dentro da plataforma com rastreabilidade. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** informações válidas e condição de autorização aprovada. **Fluxo:** administrador confirma; plataforma envia ordem ao provedor; vincula identificador externo à coleta; registra resposta inicial; aguarda resultado quando o processamento não for imediato.

**Exceções:** envio não significa que dinheiro foi recebido. Reenvio por timeout deve reutilizar a identificação da mesma ordem, evitando pagamento duplicado. Concluir coleta ou aceitar solicitação não inicia pagamento automaticamente.

**Regras:**

Regras de origem: RN-017. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado e ordem válida, quando confirma o pagamento, então a plataforma solicita processamento e registra a identificação da ordem.
- **CA-02:** Dado a mesma confirmação repetida, quando processada, então não produz duas ordens de pagamento para a mesma operação.
- **CA-03:** Dado coleta concluída sem ação administrativa de pagamento, quando consulta o financeiro, então não aparece automaticamente como paga.

**Dependências:**

TSK-ADM-010; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-015, PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-015:** Define o valor e a base de cálculo ou negociação da coleta antes de preparar seu pagamento.
- **PD-016:** Define provedor e contrato do pagamento, autorização, confirmação, conciliação e tratamento de repetição ou estorno.

**Registros das decisões relacionadas:** [PD-015](../04-decisoes.md#tsk-dec-015), [PD-016](../04-decisoes.md#tsk-dec-016).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017; ficha [TSK-ADM-011 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências bloqueantes.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero efetuar pagamento à cooperativa a partir de ação administrativa para pagar a coleta dentro da plataforma com rastreabilidade.

**Valor e relevância:** Pagar a coleta dentro da plataforma com rastreabilidade. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Iniciar uma ordem lógica na API aprovada, protegendo repetições e sem concluir pelo mero envio.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Iniciar pagamento por API” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-011; RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017.

**Pré-condições e dados:** administrador autorizado e ordem válida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: confirma o pagamento.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a plataforma solicita processamento e registra a identificação da ordem.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-011-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-011; RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017.

**Pré-condições e dados:** a mesma confirmação repetida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não produz duas ordens de pagamento para a mesma operação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-011-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-011; RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017.

**Pré-condições e dados:** coleta concluída sem ação administrativa de pagamento. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o financeiro.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não aparece automaticamente como paga.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-012"></a>

## TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento

**Nome da atividade:** Acompanhar confirmação e falhas de pagamento.

**Módulo:** M08 — Pagamento das coletas. **Módulos afetados:** M08.

**Objetivo:** Saber se o pagamento foi confirmado, falhou ou continua pendente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** consultar ou receber atualização da ordem conforme integração; validar autenticidade do retorno; atualizar situação financeira; mostrar coleta, valor, identificador e resultado aos perfis autorizados.

**Exceções:** resposta desconhecida ou timeout não equivale a pagamento confirmado. Retorno repetido não reaplica o efeito. Ordem fora de sequência deve ser conciliada com o provedor. Estorno, reembolso, nova tentativa, tarifas e reconciliação aguardam PD-016.

**Regras:**

Regras de origem: RN-017, RN-018. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado confirmação autêntica de pagamento bem-sucedido, quando processada, então a ordem passa a apresentar pagamento confirmado.
- **CA-02:** Dado falha ou resultado ainda incerto, quando consultado, então o sistema não informa que a cooperativa recebeu.
- **CA-03:** Dado um retorno repetido, quando recebido novamente, então o resultado não gera nova ordem ou duplicidade financeira.

**Dependências:**

TSK-ADM-011; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-016:** Define provedor e contrato do pagamento, autorização, confirmação, conciliação e tratamento de repetição ou estorno.

**Registros das decisões relacionadas:** [PD-016](../04-decisoes.md#tsk-dec-016).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018; ficha [TSK-ADM-012 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com detalhamento de integração pendente.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero distinguir não iniciado, processamento e resultado informado pelo provedor para saber se o pagamento foi confirmado, falhou ou continua pendente.

**Valor e relevância:** Saber se o pagamento foi confirmado, falhou ou continua pendente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Processar evidência autenticada e conciliar estado financeiro, disponível também à cooperativa autorizada.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Acompanhar confirmação e falhas de pagamento” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-ADM-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-012; RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018.

**Pré-condições e dados:** confirmação autêntica de pagamento bem-sucedido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a ordem passa a apresentar pagamento confirmado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-012-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-012; RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018.

**Pré-condições e dados:** falha ou resultado ainda incerto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consultado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema não informa que a cooperativa recebeu.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-012-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-ADM-012; RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018.

**Pré-condições e dados:** um retorno repetido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: recebido novamente.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o resultado não gera nova ordem ou duplicidade financeira.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-013"></a>

## TSK-ADM-013 — Disponibilizar visão administrativa da operação

**Nome da atividade:** Disponibilizar visão administrativa da operação.

**Módulo:** M09 — Administração, indicadores e relatórios. **Módulos afetados:** M09.

**Objetivo:** Supervisionar pontos e coletas em uma visão comum. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** acessar cadastros de moradores, pontos, cooperativas, convites e loja; acompanhar ocupação e pedidos; encaminhar solicitações; consultar andamento e pagamentos; acessar indicadores e relatórios conforme permissões e plano.

**Exceções:** privilégio administrativo não contorna automaticamente limites comerciais de relatórios, pois o usuário confirmou restrição também para esse perfil. Definir informações operacionais mínimas em PD-019 para não bloquear agendamento e pagamento.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado, quando acessa a área, então encontra os cadastros e ações administrativas previstas para seu perfil.
- **CA-02:** Dado informações necessárias a uma coleta, quando consulta a operação, então o comportamento respeita a matriz de acesso operacional aprovada, separada da matriz de relatórios.

**Dependências:**

TSK-ADM-005, TSK-ADM-008, TSK-ADM-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.

**Registros das decisões relacionadas:** [PD-019](../04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-047; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-013 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero reunir os controles necessários para operar a rede para supervisionar pontos e coletas em uma visão comum.

**Valor e relevância:** Supervisionar pontos e coletas em uma visão comum. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Exibir panorama operacional com acesso autorizado e capacidade de abrir registros de origem.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Disponibilizar visão administrativa da operação” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-013; RF-MVP-047; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** administrador autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: acessa a área.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra os cadastros e ações administrativas previstas para seu perfil.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-013-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-013; RF-MVP-047; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** informações necessárias a uma coleta. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta a operação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o comportamento respeita a matriz de acesso operacional aprovada, separada da matriz de relatórios.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-014"></a>

## TSK-ADM-014 — Exibir gráficos e indicadores

**Nome da atividade:** Exibir gráficos e indicadores.

**Módulo:** M09 — Administração, indicadores e relatórios. **Módulos afetados:** M09.

**Objetivo:** Acompanhar a atividade da rede com indicadores interpretáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** apresentar totais e gráficos de usuários ativos, pontos ativos e cooperativas; distinguir habilitação cadastral, funcionamento do local e presença online; permitir contexto de período e abrangência conforme definições aprovadas.

**Exceções:** “ativo” não será calculado automaticamente como “logado agora”. Medição de presença online, janela de atividade, fuso e significado de cooperativa aberta são PD-020. Não inventar dados para preencher gráficos.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado uma definição aprovada de atividade, quando o gráfico é consultado, então exibe período, universo e contagem compatíveis com essa definição.
- **CA-02:** Dado habilitação e conexão como indicadores distintos, quando são mostrados, então a legenda permite distinguir os conceitos.

**Dependências:**

TSK-ADM-013; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-020. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-020:** Define os conceitos, as janelas e a abrangência dos indicadores e relatórios apresentados.

**Registros das decisões relacionadas:** [PD-020](../04-decisoes.md#tsk-dec-020).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P2.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-048; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-014 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P2. **Etapa:** E5.

**Justificativa:** amplia visibilidade com métricas que precisam de refinamento.

**Estado da especificação V6:** confirmado com pendências de definição.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero apresentar visão de usuários, pontos e cooperativas, incluindo participação e conexão para acompanhar a atividade da rede com indicadores interpretáveis.

**Valor e relevância:** Acompanhar a atividade da rede com indicadores interpretáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Exibir gráficos de usuários, pontos e cooperativas segundo métricas, janela e abrangência aprovadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Exibir gráficos e indicadores” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-014-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-014; RF-MVP-048; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma definição aprovada de atividade. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o gráfico é consultado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** exibe período, universo e contagem compatíveis com essa definição.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-014-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-014; RF-MVP-048; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** habilitação e conexão como indicadores distintos. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: são mostrados.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a legenda permite distinguir os conceitos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-015"></a>

## TSK-ADM-015 — Representar planos e benefícios de dados

**Nome da atividade:** Representar planos e benefícios de dados.

**Módulo:** M10 — Planos e acesso comercial a dados. **Módulos afetados:** M10.

**Objetivo:** Apresentar modalidades de acesso a dados de forma transparente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** apresentar modalidade, condições e benefícios aprovados; identificar quais capacidades estão disponíveis; manter uma matriz que relacione plano, relatório e abrangência. Não definir valores, quotas, ciclos ou pacote de dados nesta versão.

**Exceções:** plano grátis não significa ausência de controle operacional. Não confundir assinatura de dados com pontos da loja ou pagamento da coleta.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado catálogo de planos aprovado, quando o usuário consulta as modalidades, então encontra benefícios e condições correspondentes à matriz publicada.
- **CA-02:** Dado uma modalidade sem benefícios aprovados, quando a interface de planos é apresentada, então não anuncia capacidades comerciais indefinidas como disponíveis.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.

**Registros das decisões relacionadas:** [PD-019](../04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-015 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências bloqueantes.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero oferecer modalidades grátis, pré-paga e assinatura mensal para acesso a relatórios/indicadores para apresentar modalidades de acesso a dados de forma transparente.

**Valor e relevância:** Apresentar modalidades de acesso a dados de forma transparente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Mostrar planos grátis, pré-pago e mensal com matriz de benefícios aprovada, sem inventar pacote ou preço.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Representar planos e benefícios de dados” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-015-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-015; RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** catálogo de planos aprovado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o usuário consulta as modalidades.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra benefícios e condições correspondentes à matriz publicada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-015-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-015; RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** uma modalidade sem benefícios aprovados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a interface de planos é apresentada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não anuncia capacidades comerciais indefinidas como disponíveis.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-016"></a>

## TSK-ADM-016 — Associar contratação e vigência de plano

**Nome da atividade:** Associar contratação e vigência de plano.

**Módulo:** M10 — Planos e acesso comercial a dados. **Módulos afetados:** M10.

**Objetivo:** Vincular acesso comercial ao titular e à vigência contratada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo condicionado:** após contratação válida pelo processo aprovado, registrar titular, modalidade, situação e vigência aplicável; disponibilizar direitos; ajustar ao fim da validade conforme política. O usuário não definiu se o titular é conta, ponto ou organização.

**Exceções:** não presumir que a API de pagamento de cooperativas também cobra assinaturas. Renovação, inadimplência, pré-pago por tempo/consulta, migração e contratação manual ou automática são PD-019.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado contratação reconhecida pelo processo aprovado, quando o plano é associado, então os acessos previstos ficam vinculados ao titular e à vigência corretos.
- **CA-02:** Dado direito expirado segundo política aprovada, quando consulta benefício pago, então o acesso respeita a situação vigente.

**Dependências:**

TSK-ADM-015; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.

**Registros das decisões relacionadas:** [PD-019](../04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-016 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado como necessidade; processo a definir.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero identificar qual plano autoriza cada acesso e em qual período para vincular acesso comercial ao titular e à vigência contratada.

**Valor e relevância:** Vincular acesso comercial ao titular e à vigência contratada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Associar contratação e vigência segundo fluxo aprovado; não confundir com pagamento de coleta.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Associar contratação e vigência de plano” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-016-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-016; RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** contratação reconhecida pelo processo aprovado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o plano é associado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os acessos previstos ficam vinculados ao titular e à vigência corretos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-016-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-016; RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** direito expirado segundo política aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta benefício pago.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o acesso respeita a situação vigente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-adm-017"></a>

## TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja

**Nome da atividade:** Armazenar e apresentar imagens e vídeos da loja.

**Módulo:** M11 — Mídias e comunicação. **Módulos afetados:** M11.

**Objetivo:** Explicar ofertas com imagens e vídeos seguros e utilizáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** permissão administrativa e armazenamento disponível. **Fluxo:** selecionar imagem/vídeo; validar formato e tamanho aprovados; enviar e vincular à oferta; apresentar mídia aos moradores com descrição textual independente.

**Exceções:** upload falho não deve ser exibido como concluído; arquivo incompatível é rejeitado. O limite anterior de 5 MB não será imposto indistintamente a vídeo. Upload de arquivo versus link externo, formatos, tamanhos, duração e tratamento aguardam PD-024.

**Comunicação transversal:** solicitações e agendamentos devem aparecer nos respectivos painéis. Canal externo adicional, por e-mail ou outro meio, é uma proposta herdada que depende de PD-021 e integração I05; não confundir atualização de painel com entrega de uma mensagem externa.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado vídeo em formato e tamanho aprovados, quando o administrador o adiciona à campanha, então a oferta consegue apresentá-lo aos usuários autorizados.
- **CA-02:** Dado mídia rejeitada ou envio interrompido, quando a ação termina, então o sistema informa a falha e não apresenta um arquivo inexistente como disponível.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-024, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-021:** Define os eventos e o contrato de notificação externa necessários à atividade, quando exigidos.
- **PD-024:** Define formatos, limites, armazenamento e publicação das mídias utilizadas.

**Registros das decisões relacionadas:** [PD-024](../04-decisoes.md#tsk-dec-024), [PD-021](../04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-053; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-017 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-021](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-021).

### História, contexto e subtarefas

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com parâmetros pendentes.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero permitir mídia nas campanhas e demais ofertas que suportem a configuração para explicar ofertas com imagens e vídeos seguros e utilizáveis.

**Valor e relevância:** Explicar ofertas com imagens e vídeos seguros e utilizáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Publicar mídia válida por administrador autorizado e manter condições essenciais também em texto.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Armazenar e apresentar imagens e vídeos da loja” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-ADM-017-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-017; RF-MVP-053; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** vídeo em formato e tamanho aprovados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o administrador o adiciona à campanha.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a oferta consegue apresentá-lo aos usuários autorizados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-ADM-017-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-017; RF-MVP-053; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** mídia rejeitada ou envio interrompido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a ação termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema informa a falha e não apresenta um arquivo inexistente como disponível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>
