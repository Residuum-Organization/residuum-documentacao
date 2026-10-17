# Residuum — Morador

[Documento geral](../01-atividades-gerais.md) · [Guia das tasks](../README.md) · [Fluxo e qualidade](../../05-qualidade/01-fluxo-e-qualidade.md)

**Atualização:** 17/10/2026. **Atividades próprias:** 26.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

## Épicos e funcionalidades

### Acesso e perfil

- [TSK-MOR-001 — Cadastrar morador por convite](#tsk-mor-001)
- [TSK-MOR-002 — Autenticar e encerrar sessão](#tsk-mor-002)
- [TSK-MOR-003 — Recuperar acesso](#tsk-mor-003)
- [TSK-MOR-004 — Consultar e editar perfil](#tsk-mor-004)

### Registro e estoque

- [TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido](#tsk-mor-005)
- [TSK-MOR-006 — Identificar produto por código de barras](#tsk-mor-006)
- [TSK-MOR-007 — Importar itens de nota fiscal](#tsk-mor-007)
- [TSK-MOR-008 — Cadastrar resíduo manualmente](#tsk-mor-008)
- [TSK-MOR-009 — Revisar itens antes da inclusão](#tsk-mor-009)
- [TSK-MOR-010 — Manter estoque e selecionar quantidades](#tsk-mor-010)

### Localização, presença e descarte

- [TSK-MOR-011 — Consultar pontos próximos compatíveis](#tsk-mor-011)
- [TSK-MOR-012 — Consultar detalhes do ponto](#tsk-mor-012)
- [TSK-MOR-013 — Encaminhar morador à navegação externa](#tsk-mor-013)
- [TSK-MOR-014 — Validar presença por GPS](#tsk-mor-014)
- [TSK-MOR-015 — Confirmar entrega e movimentar estoques](#tsk-mor-015)
- [TSK-MOR-016 — Exibir confirmação e histórico de descartes](#tsk-mor-016)

### Pontuação, saldo e extrato

- [TSK-MOR-017 — Creditar recompensa básica provisória](#tsk-mor-017)
- [TSK-MOR-018 — Aplicar bônus de campanha](#tsk-mor-018)
- [TSK-MOR-019 — Consultar saldo e extrato de pontos](#tsk-mor-019)
- [TSK-MOR-020 — Apurar metas de descarte das campanhas](#tsk-mor-020)
- [TSK-MOR-021 — Debitar pontos com consistência](#tsk-mor-021)

### Loja, campanhas, vouchers e sorteios

- [TSK-MOR-022 — Consultar a loja de recompensas](#tsk-mor-022)
- [TSK-MOR-023 — Consultar detalhes e condições da campanha](#tsk-mor-023)
- [TSK-MOR-024 — Administrar e participar de campanhas](#tsk-mor-024)
- [TSK-MOR-025 — Administrar e adquirir vouchers](#tsk-mor-025)
- [TSK-MOR-026 — Administrar sorteios e registrar participações](#tsk-mor-026)

## Fichas completas

<a id="tsk-mor-001"></a>

## TSK-MOR-001 — Cadastrar morador por convite

**Nome da atividade:** Cadastrar morador por convite.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** criar acesso do morador sem permitir cadastro público irrestrito.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** convite individual ou compartilhado válido. **Dados herdados:** nome, e-mail, telefone e endereço; obrigatoriedade, CPF e senha aguardam PD-003.

**Fluxo:** abrir o link; verificar disponibilidade do convite; preencher e revisar os dados; apresentar informações de privacidade aplicáveis; validar entradas; criar conta e consumir o convite na mesma conclusão lógica.

**Exceções:** campos inválidos, e-mail já cadastrado e falha de gravação não devem consumir vaga nem duplicar a conta. A política de verificação de e-mail precisa de validação.

**Regras:**

Regras de origem: RN-001. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um convite válido e dados aceitos, quando o morador conclui o formulário, então a conta é criada vinculada ao consumo do convite.
- **CA-02:** Dado uma tentativa sem convite autorizado, quando o formulário é enviado, então o sistema impede a criação da conta.
- **CA-03:** Dado uma falha de validação, quando o cadastro não termina, então o convite mantém sua disponibilidade anterior.

**Dependências:**

TSK-ADM-001, TSK-ADM-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003, PD-001, PD-022, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-001:** Define validade, limites e consumo dos convites usados nesta atividade.
- **PD-002:** Define as condições de criação e habilitação das contas e dos acessos envolvidos.
- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.
- **PD-022:** Define tratamento, proteção e retenção dos dados pessoais acessados ou produzidos por esta atividade.

**Registros das decisões relacionadas:** [PD-003](../04-decisoes.md#tsk-dec-003), [PD-001](../04-decisoes.md#tsk-dec-001), [PD-022](../04-decisoes.md#tsk-dec-022), [PD-002](../04-decisoes.md#tsk-dec-002).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-MOR-001 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero criar acesso do morador sem permitir cadastro público irrestrito para entrar no piloto autorizado sem cadastros indevidos.

**Valor e relevância:** Entrar no piloto autorizado sem cadastros indevidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Concluir cadastro por convite válido, sem consumir autorização em cadastro malsucedido.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar morador por convite” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-001; RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um convite válido e dados aceitos. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador conclui o formulário.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a conta é criada vinculada ao consumo do convite.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-001; RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** uma tentativa sem convite autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o formulário é enviado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema impede a criação da conta.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-001-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-001; RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** uma falha de validação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o cadastro não termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o convite mantém sua disponibilidade anterior.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-002"></a>

## TSK-MOR-002 — Autenticar e encerrar sessão

**Nome da atividade:** Autenticar e encerrar sessão.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Acessar os próprios dados e encerrar o acesso com segurança. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Objetivo e fluxo:** permitir login com e-mail e senha, validar a conta, abrir a área correspondente ao perfil e encerrar a sessão quando solicitado. Biblioteca de autenticação não é fixada por este documento.

**Pré-condições:** conta habilitada. **Exceções:** credenciais incorretas, acesso desabilitado e sessão expirada impedem ações protegidas. Uso do convite habilita cadastro, não é uma credencial de login permanente.

**Resultado:** acesso de acordo com perfil e vínculos. Tempo de sessão, múltiplos perfis e situação das contas existentes são PD-002 e PD-023.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado credenciais válidas e conta habilitada, quando o usuário faz login, então acessa sua área autorizada.
- **CA-02:** Dado uma sessão encerrada, quando se tenta executar uma ação protegida, então nova autenticação é exigida.
- **CA-03:** Dado um morador autenticado, quando tenta funções administrativas, então o acesso é negado também no serviço que processa a operação.

**Dependências:**

Sem dependência funcional anterior específica; verificar fundamentos da etapa; TSK-TRA-000 e controles transversais aplicáveis.

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

**Rastreabilidade:** RF-MVP-005; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-002 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** herdado para validação.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero autenticar e encerrar sessão para acessar os próprios dados e encerrar o acesso com segurança.

**Valor e relevância:** Acessar os próprios dados e encerrar o acesso com segurança. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Demonstrar login e logout dos perfis habilitados, com proteção das operações após encerramento.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Autenticar e encerrar sessão” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-002; RF-MVP-005; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** credenciais válidas e conta habilitada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o usuário faz login.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** acessa sua área autorizada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-002; RF-MVP-005; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma sessão encerrada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: se tenta executar uma ação protegida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** nova autenticação é exigida.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-002-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-002; RF-MVP-005; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um morador autenticado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta funções administrativas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o acesso é negado também no serviço que processa a operação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-003"></a>

## TSK-MOR-003 — Recuperar acesso

**Nome da atividade:** Recuperar acesso.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Retomar o uso sem depender de intervenção informal da equipe. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Objetivo e fluxo:** solicitar recuperação de senha, receber instruções pelo canal validado, apresentar token de recuperação, cadastrar nova senha e invalidar o token após uso.

**Pré-condições:** mecanismo de recuperação disponível. **Exceções:** token inválido, expirado ou já utilizado não altera a senha; mensagens de solicitação não devem revelar se uma pessoa está cadastrada.

**Dados e resultado:** identificador da conta, solicitação e confirmação; credenciais recuperadas sem expor senha anterior. Canal, prazo e política de senha dependem de PD-003.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado um token válido, quando o titular confirma uma senha aceita, então poderá autenticar-se com a nova senha.
- **CA-02:** Dado um token usado ou inválido, quando houver nova tentativa, então a senha permanece inalterada.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.

**Registros das decisões relacionadas:** [PD-003](../04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-006; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-003 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E2.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** herdado para validação.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero recuperar acesso para retomar o uso sem depender de intervenção informal da equipe.

**Valor e relevância:** Retomar o uso sem depender de intervenção informal da equipe. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Recuperar acesso pelo canal e política aprovados sem expor conta ou credencial.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Recuperar acesso” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-003; RF-MVP-006; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um token válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o titular confirma uma senha aceita.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** poderá autenticar-se com a nova senha.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-003-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-003; RF-MVP-006; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um token usado ou inválido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: houver nova tentativa.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a senha permanece inalterada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-004"></a>

## TSK-MOR-004 — Consultar e editar perfil

**Nome da atividade:** Consultar e editar perfil.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Manter informações pessoais corretas e consultar a própria conta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado. **Fluxo:** consultar seus dados; editar campos permitidos; visualizar descartes concluídos, pontuação e recompensas; acessar extrato e estoque. Alterar e-mail ou identificadores exige política ainda a validar.

**Exceções e resultado:** usuário não pode editar registros de descarte ou saldo por esse formulário. Alteração falha não deve substituir os dados válidos anteriores. Não é permitido consultar o perfil privado de outro morador.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado um morador autenticado, quando consulta o perfil, então vê seus dados, saldo e históricos disponíveis.
- **CA-02:** Dado uma alteração válida em campo permitido, quando a salva, então o perfil apresenta o novo valor sem alterar pontos ou descartes.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.

**Registros das decisões relacionadas:** [PD-003](../04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-007; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-004 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E2.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** herdado para validação.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero reunir dados pessoais, histórico de descartes, saldo e recompensas adquiridas para manter informações pessoais corretas e consultar a própria conta.

**Valor e relevância:** Manter informações pessoais corretas e consultar a própria conta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar e editar somente campos permitidos do próprio perfil.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar e editar perfil” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-004; RF-MVP-007; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um morador autenticado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o perfil.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê seus dados, saldo e históricos disponíveis.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-004-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-004; RF-MVP-007; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma alteração válida em campo permitido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a salva.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o perfil apresenta o novo valor sem alterar pontos ou descartes.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-005"></a>

## TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido

**Nome da atividade:** Disponibilizar Registrar e Descarte rápido.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Escolher entre guardar embalagens para depois e iniciar a entrega imediatamente. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** login realizado. **Fluxo:** “Registrar” abre a entrada de resíduos e conclui com inclusão no estoque; “Descarte rápido” abre diretamente o scanner e, após revisão dos itens, segue para pontos de coleta. A tela permite alternar para nota fiscal e entrada manual.

**Exceções e resultado:** câmera negada não elimina a entrada manual. Cancelamento não conclui descarte nem concede pontos. A identificação da intenção deve ser preservada ao trocar a forma de cadastro.

**Regras:**

Regras de origem: RN-004. Conferir texto e situação na V6.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Critérios de aceite:**

- **CA-01:** Dado a ação Registrar, quando o cadastro é confirmado, então os itens ficam no estoque sem recompensa.
- **CA-02:** Dado Descarte rápido, quando os itens são revisados e confirmados, então o usuário segue para escolha de ponto sem uma etapa obrigatória de navegação pelo estoque.
- **CA-03:** Dado um rascunho de Descarte rápido revisado, quando cancela, navega para outra área, recarrega ou fecha a aba do fluxo, então o rascunho é eliminado, sem inclusão automática no estoque nem pontos.
- **CA-04:** Dado itens no rascunho rápido, quando abre a rota em outra aba e retorna ao fluxo, então os itens continuam no fluxo e a confirmação exige uma nova leitura GPS.
- **CA-05:** Dado itens no rascunho e falha recuperável de confirmação, quando a pessoa permanece no fluxo e tenta novamente, então os itens são preservados e a repetição da mesma operação não duplica efeitos.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Restam contratos reais de ajuste/exclusão, confirmação e concorrência. O rascunho em memória, abandono sem estoque e GPS novo no retorno já estão definidos.

**Registros das decisões relacionadas:** [PD-006](../04-decisoes.md#tsk-dec-006).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004; ficha [TSK-MOR-005 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero usar a mesma experiência de entrada com intenções distintas para escolher entre guardar embalagens para depois e iniciar a entrega imediatamente.

**Valor e relevância:** Escolher entre guardar embalagens para depois e iniciar a entrega imediatamente. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Apresentar Registrar e Descarte rápido com entrada comum; a ação rápida abre o scanner diretamente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Disponibilizar Registrar e Descarte rápido” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 5 casos planejados desta atividade</summary>

#### TSK-MOR-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** a ação Registrar. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o cadastro é confirmado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens ficam no estoque sem recompensa.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** Descarte rápido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os itens são revisados e confirmados.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o usuário segue para escolha de ponto sem uma etapa obrigatória de navegação pelo estoque.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-005-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** um rascunho de Descarte rápido revisado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: cancela, navega para outra área, recarrega ou fecha a aba do fluxo.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o rascunho é eliminado, sem inclusão automática no estoque nem pontos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-005-CT-04

**Critério vinculado:** CA-04. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** itens no rascunho rápido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre a rota em outra aba e retorna ao fluxo.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens continuam no fluxo e a confirmação exige uma nova leitura GPS.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-005-CT-05

**Critério vinculado:** CA-05. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** itens no rascunho e falha recuperável de confirmação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a pessoa permanece no fluxo e tenta novamente.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens são preservados e a repetição da mesma operação não duplica efeitos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-006"></a>

## TSK-MOR-006 — Identificar produto por código de barras

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

**Critérios de aceite:**

- **CA-01:** Dado um código conhecido, quando a consulta termina, então o formulário é preenchido com os dados disponíveis para revisão.
- **CA-02:** Dado um código desconhecido, quando não há identificação, então o morador pode informar nome, material e quantidade manualmente.

**Dependências:**

TSK-MOR-005, TSK-MOR-008, TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-004. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-004:** Define a fonte e o contrato da consulta externa, seus dados disponíveis, limites e falhas.

**Registros das decisões relacionadas:** [PD-004](../04-decisoes.md#tsk-dec-004).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-006 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E3.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero reduzir preenchimento manual a partir do identificador da embalagem para evitar digitação quando o código do produto é reconhecido.

**Valor e relevância:** Evitar digitação quando o código do produto é reconhecido. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Ler código de barras, consultar fonte aprovada e permitir revisão ou cadastro manual quando não identificado.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Identificar produto por código de barras” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-006; RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.

**Pré-condições e dados:** um código conhecido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a consulta termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o formulário é preenchido com os dados disponíveis para revisão.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-006-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-006; RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.

**Pré-condições e dados:** um código desconhecido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: não há identificação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o morador pode informar nome, material e quantidade manualmente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-007"></a>

## TSK-MOR-007 — Importar itens de nota fiscal

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

- **PD-004:** Define a fonte e o contrato da consulta externa, seus dados disponíveis, limites e falhas.
- **PD-005:** Define a proteção contra importação repetida e a seleção dos itens efetivamente disponíveis.
- **PD-022:** Define tratamento, proteção e retenção dos dados pessoais acessados ou produzidos por esta atividade.

**Registros das decisões relacionadas:** [PD-005](../04-decisoes.md#tsk-dec-005), [PD-004](../04-decisoes.md#tsk-dec-004), [PD-022](../04-decisoes.md#tsk-dec-022).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-007 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E3.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero preencher rapidamente o cadastro a partir dos produtos de uma compra, inspirado na facilidade de uso do Méliuz, sem cashback financeiro no MVP para cadastrar embalagens de uma compra com menos esforço.

**Valor e relevância:** Cadastrar embalagens de uma compra com menos esforço. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar nota suportada, selecionar itens e preencher formulário revisável, sem cashback ou descarte automático.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Importar itens de nota fiscal” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-007; RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** uma nota consultável com produtos identificados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a importação termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o formulário apresenta as informações recuperadas antes da confirmação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-007-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-007; RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** material não identificado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador revisa.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** pode escolher PET ou lata manualmente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-007-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-007; RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** uma falha de consulta. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o sistema informa o erro.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** nenhuma recompensa é gerada e o cadastro manual permanece disponível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-008"></a>

## TSK-MOR-008 — Cadastrar resíduo manualmente

**Nome da atividade:** Cadastrar resíduo manualmente.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Cadastrar PET e lata mesmo quando a leitura não funciona. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado na tela compartilhada. **Entrada:** nome do produto/resíduo, material PET ou lata de alumínio e quantidade de embalagens.

**Fluxo:** preencher campos; validar material e quantidade; revisar; adicionar os itens conforme Registrar ou Descarte rápido. Quantidade deve ser inteira e positiva para contagem de embalagens; peso é informado pela cooperativa em operação distinta.

**Exceções e resultado:** não aceitar quantidade zero/negativa ou material fora do escopo; informar o campo inválido sem perder os demais dados válidos.

**Regras:**

Regras de origem: RN-003, RN-004. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado nome, material aceito e quantidade válida, quando o cadastro é confirmado, então os itens são adicionados conforme a intenção da ação.
- **CA-02:** Dado quantidade inválida, quando o morador tenta confirmar, então o sistema solicita correção e não adiciona os itens.

**Dependências:**

TSK-MOR-005; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-008 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-005](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero permitir entrada sem depender do scanner ou da nota para cadastrar PET e lata mesmo quando a leitura não funciona.

**Valor e relevância:** Cadastrar PET e lata mesmo quando a leitura não funciona. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Formulário com nome, material PET/lata de alumínio, quantidade e inclusão revisável.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar resíduo manualmente” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-008; RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.

**Pré-condições e dados:** nome, material aceito e quantidade válida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o cadastro é confirmado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens são adicionados conforme a intenção da ação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-008-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-008; RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.

**Pré-condições e dados:** quantidade inválida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador tenta confirmar.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema solicita correção e não adiciona os itens.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-009"></a>

## TSK-MOR-009 — Revisar itens antes da inclusão

**Nome da atividade:** Revisar itens antes da inclusão.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Corrigir identificação e quantidade antes de gravar embalagens. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** itens obtidos por scanner, nota ou formulário. **Fluxo:** apresentar nome, material e quantidade; permitir correção e seleção dos itens a incluir; confirmar explicitamente. Produtos fora dos dois materiais iniciais não devem ser classificados silenciosamente como PET ou lata.

**Resultado:** lista validada para estoque ou descarte rápido. Cancelar a revisão não conclui descarte. Características desconhecidas devem aparecer como informação a completar, não como resultado confirmado da consulta.

**Regras:**

Regras de origem: RN-003, RN-004, RN-005. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado uma importação com material desconhecido, quando o usuário tenta confirmar, então o material deve ser completado antes da inclusão.
- **CA-02:** Dado uma lista revisada, quando a confirma, então somente os itens selecionados e suas quantidades revisadas são incluídos.

**Dependências:**

TSK-MOR-008; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-005. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-005:** Define a proteção contra importação repetida e a seleção dos itens efetivamente disponíveis.

**Registros das decisões relacionadas:** [PD-005](../04-decisoes.md#tsk-dec-005).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-009 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-007](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero evitar que informação incompleta da leitura seja tratada como confirmação do usuário para corrigir identificação e quantidade antes de gravar embalagens.

**Valor e relevância:** Corrigir identificação e quantidade antes de gravar embalagens. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Revisar itens importados ou digitados, completar material desconhecido e confirmar inclusão uma vez.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Revisar itens antes da inclusão” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-009; RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** uma importação com material desconhecido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o usuário tenta confirmar.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o material deve ser completado antes da inclusão.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-009-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-009; RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** uma lista revisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a confirma.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** somente os itens selecionados e suas quantidades revisadas são incluídos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-010"></a>

## TSK-MOR-010 — Manter estoque e selecionar quantidades

**Nome da atividade:** Manter estoque e selecionar quantidades.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Saber o que está disponível e separar apenas o que será entregue. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** itens confirmados. **Fluxo:** salvar entradas; listar nome, material e quantidade; selecionar itens e quantidades disponíveis; iniciar escolha de ponto. Identificação e quantidade não equivalem a peso medido.

**Decisão posterior — 10/10/2026:** o caminho rápido mantém itens somente na memória do fluxo, sem inclusão automática no estoque. Cancelar, sair para outra área, recarregar ou fechar a aba elimina o rascunho. Abrir a rota em outra aba preserva o fluxo; retornar exige GPS novo. Falhas recuperáveis preservam os itens enquanto a pessoa continua no fluxo. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes em PD-006; ver [handoff](../../04-ux/01-morador-v6/01-handoff.md#jornada-e-regras-aprovadas).

**Exceções:** impedir seleção superior à quantidade disponível; evitar gravação duplicada por repetição de confirmação. Exclusão e ajustes manuais do estoque são PD-006.

**Regras:**

Regras de origem: RN-004, RN-007. Conferir texto e situação na V6.

**Atenção:** a proposta antiga de persistir itens rápidos no estoque após abandono foi superada pela decisão de 10/10/2026. Aplicar rascunho em memória; não considerar os contratos reais de PD-006 concluídos por essa decisão.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Critérios de aceite:**

- **CA-01:** Dado cinco latas disponíveis, quando o morador seleciona duas, então a sessão de descarte contém duas, sem baixar o estoque antes da entrega.
- **CA-02:** Dado uma seleção maior que o saldo, quando tenta prosseguir, então o sistema impede a operação e informa a quantidade disponível.
- **CA-03:** Dado apenas o registro de itens, quando o estoque é atualizado, então não há crédito de pontos.

**Dependências:**

TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Restam contratos reais de ajuste/exclusão, confirmação e concorrência. O rascunho em memória, abandono sem estoque e GPS novo no retorno já estão definidos.

**Registros das decisões relacionadas:** [PD-006](../04-decisoes.md#tsk-dec-006).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007; ficha [TSK-MOR-010 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-006](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado; persistência do caminho rápido definida na decisão de UX de 10/10/2026, com contratos reais ainda pendentes.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero apresentar itens disponíveis e permitir seleção de parte ou de todo o estoque para descarte para saber o que está disponível e separar apenas o que será entregue.

**Valor e relevância:** Saber o que está disponível e separar apenas o que será entregue. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Consultar estoque pessoal e selecionar quantidades disponíveis; registrar não concede pontos.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Manter estoque e selecionar quantidades” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-010; RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007.

**Pré-condições e dados:** cinco latas disponíveis. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador seleciona duas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a sessão de descarte contém duas, sem baixar o estoque antes da entrega.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-010-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-010; RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007.

**Pré-condições e dados:** uma seleção maior que o saldo. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta prosseguir.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema impede a operação e informa a quantidade disponível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-010-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-010; RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007.

**Pré-condições e dados:** apenas o registro de itens. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o estoque é atualizado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não há crédito de pontos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-011"></a>

## TSK-MOR-011 — Consultar pontos próximos compatíveis

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

- **PD-007:** Define as condições de busca e elegibilidade do ponto: localização, materiais, horário e lotação.

**Registros das decisões relacionadas:** [PD-007](../04-decisoes.md#tsk-dec-007).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007; ficha [TSK-MOR-011 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-009](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero encontrar locais que recebam os materiais selecionados para encontrar um destino que receba o material selecionado.

**Valor e relevância:** Encontrar um destino que receba o material selecionado. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Consultar pontos próximos e compatíveis sem confundir estimativa de distância com presença comprovada.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar pontos próximos compatíveis” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-011; RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007.

**Pré-condições e dados:** seleção de latas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador consulta pontos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** identifica quais recebem alumínio.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-011-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-011; RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007.

**Pré-condições e dados:** seleção de PET e lata. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta concluir tudo em um ponto que só aceita PET.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema não confirma a entrega incompatível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-011-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-011; RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007.

**Pré-condições e dados:** ausência de ponto compatível. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a consulta termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** informa a indisponibilidade sem alterar estoque ou saldo.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-012"></a>

## TSK-MOR-012 — Consultar detalhes do ponto

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

- **PD-007:** Define as condições de busca e elegibilidade do ponto: localização, materiais, horário e lotação.
- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.
- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.

**Registros das decisões relacionadas:** [PD-019](../04-decisoes.md#tsk-dec-019), [PD-007](../04-decisoes.md#tsk-dec-007), [PD-009](../04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-016; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-012 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-009](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** herdado com ajustes confirmados.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero fornecer informações para decidir onde entregar os resíduos para decidir onde entregar com informações operacionais claras.

**Valor e relevância:** Decidir onde entregar com informações operacionais claras. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Exibir localização, materiais e disponibilidade do ponto selecionado conforme regras aprovadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar detalhes do ponto” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-012; RF-MVP-016; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um ponto consultável. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre seus detalhes.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o morador vê localização, materiais e informações de funcionamento cadastradas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-012-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-012; RF-MVP-016; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um ponto temporário fora do período válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é consultado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não é apresentado como local atualmente disponível para descarte.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-013"></a>

## TSK-MOR-013 — Encaminhar morador à navegação externa

**Nome da atividade:** Encaminhar morador à navegação externa.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Chegar ao ponto escolhido usando o aplicativo de mapas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto selecionado com coordenadas válidas. **Fluxo:** oferecer navegação; abrir aplicativo/serviço externo com o ponto como destino; permitir retorno ao fluxo para confirmar a entrega.

**Exceções:** indisponibilidade do navegador de mapas deve preservar ponto e itens. Não marcar chegada ou descarte com base apenas na abertura da rota. A rota abre em outra aba e conserva o fluxo; no retorno, exigir GPS novo. Fechar a aba do fluxo elimina o rascunho rápido conforme decisão de 10/10/2026; contratos reais continuam sujeitos a PD-006.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Critérios de aceite:**

- **CA-01:** Dado um ponto escolhido, quando o morador inicia navegação, então o destino enviado corresponde ao ponto selecionado.
- **CA-02:** Dado apenas a abertura da navegação, quando retorna, então a entrega ainda exige validação de presença e confirmação.

**Dependências:**

TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Restam contratos reais de ajuste/exclusão, confirmação e concorrência. O rascunho em memória, abandono sem estoque e GPS novo no retorno já estão definidos.
- **PD-007:** Define as condições de busca e elegibilidade do ponto: localização, materiais, horário e lotação.

**Registros das decisões relacionadas:** [PD-006](../04-decisoes.md#tsk-dec-006), [PD-007](../04-decisoes.md#tsk-dec-007).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-017; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-013 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-009](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero orientar o trajeto sem exigir acompanhamento contínuo dentro do Residuum para chegar ao ponto escolhido usando o aplicativo de mapas.

**Valor e relevância:** Chegar ao ponto escolhido usando o aplicativo de mapas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Abrir navegação externa com destino correto e retornar ao fluxo sem registrar descarte pela abertura da rota.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Encaminhar morador à navegação externa” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-013; RF-MVP-017; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um ponto escolhido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador inicia navegação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o destino enviado corresponde ao ponto selecionado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-013-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-013; RF-MVP-017; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** apenas a abertura da navegação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: retorna.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a entrega ainda exige validação de presença e confirmação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-014"></a>

## TSK-MOR-014 — Validar presença por GPS

**Nome da atividade:** Validar presença por GPS.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Confirmar a presença no ponto antes de concluir a entrega. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** ponto e itens selecionados; permissão de localização. **Fluxo:** obter posição recente e informação de precisão; comparar com o ponto segundo os parâmetros aprovados; liberar confirmação se válida; registrar a evidência necessária à operação.

**Exceções:** fora do raio, posição antiga, baixa precisão ou falha de obtenção não concluem entrega. Exibir impedimento e permitir nova tentativa conforme política. GPS é indício de proximidade, não prova de entrega física. Não existe alternativa por QR ou aprovação retroativa neste escopo.

**Regras:**

Regras de origem: RN-006. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado posição aceita pelos parâmetros validados, quando a presença é verificada, então o sistema permite confirmar o descarte no ponto escolhido.
- **CA-02:** Dado GPS indisponível ou posição rejeitada, quando tenta concluir, então não há baixa de itens nem recompensa e o motivo é apresentado.

**Dependências:**

TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-008. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-008:** Define os parâmetros GPS que permitem aceitar ou rejeitar a presença na confirmação.

**Registros das decisões relacionadas:** [PD-008](../04-decisoes.md#tsk-dec-008).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006; ficha [TSK-MOR-014 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-010](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero condicionar a confirmação à proximidade com o ponto escolhido para confirmar a presença no ponto antes de concluir a entrega.

**Valor e relevância:** Confirmar a presença no ponto antes de concluir a entrega. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Validar GPS com parâmetros aprovados, impedindo conclusão com presença inválida ou permissão negada.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Validar presença por GPS” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-014-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-014; RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006.

**Pré-condições e dados:** posição aceita pelos parâmetros validados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a presença é verificada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema permite confirmar o descarte no ponto escolhido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-014-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-014; RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006.

**Pré-condições e dados:** GPS indisponível ou posição rejeitada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta concluir.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não há baixa de itens nem recompensa e o motivo é apresentado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-015"></a>

## TSK-MOR-015 — Confirmar entrega e movimentar estoques

**Nome da atividade:** Confirmar entrega e movimentar estoques.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Concluir a entrega sem perder embalagens ou receber créditos repetidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** presença válida, itens disponíveis e ponto apto a recebê-los conforme regras validadas. **Fluxo:** apresentar resumo; receber confirmação explícita; revalidar itens, material e ponto; registrar descarte; baixar somente as quantidades entregues do estoque do morador; registrar entrada correspondente no ponto; conceder 10 pontos básicos uma vez.

**Exceções:** repetição, concorrência, incompatibilidade ou falha não devem gerar baixa parcial, saldo negativo ou crédito duplicado. Estimativas do ponto não se tornam peso medido. Bônus deve ter vínculo rastreável, sem reaplicar crédito básico se processado posteriormente.

**Regras:**

Regras de origem: RN-007, RN-008. Conferir texto e situação na V6.

**Atenção:** seleção não baixa estoque; apenas confirmação validada produz entrega e 10 pontos. Bônus posterior não bloqueia nem repete o crédito básico.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Critérios de aceite:**

- **CA-01:** Dado três latas e entrega válida de uma, quando confirma, então restam duas no estoque, o ponto registra uma recebida e o morador ganha 10 pontos básicos.
- **CA-02:** Dado a mesma confirmação reenviada, quando é processada, então o descarte e seus efeitos ocorrem uma única vez.
- **CA-03:** Dado falha na conclusão, quando a operação não termina, então o sistema não apresenta sucesso com estoque ou crédito básico incompletos.

**Dependências:**

TSK-MOR-010, TSK-MOR-014, TSK-MOR-017; TSK-TRA-000 e controles transversais aplicáveis. O crédito em TSK-MOR-017 integra o mesmo resultado consistente; não são duas confirmações independentes.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de rascunho e abandono aplicada em 10/10/2026. PD-006 permanece parcial para contratos reais, concorrência e confirmação; demais PD listadas abaixo continuam sujeitas ao recorte e à aprovação.

- **PD-006:** Restam contratos reais de ajuste/exclusão, confirmação e concorrência. O rascunho em memória, abandono sem estoque e GPS novo no retorno já estão definidos.
- **PD-009:** Define cálculo de ocupação, limites de funcionamento e tratamento de remanescentes usados pela atividade.

**Registros das decisões relacionadas:** [PD-006](../04-decisoes.md#tsk-dec-006), [PD-009](../04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008; ficha [TSK-MOR-015 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-011](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero registrar entrega única e consistente dos itens ao ponto para concluir a entrega sem perder embalagens ou receber créditos repetidos.

**Valor e relevância:** Concluir a entrega sem perder embalagens ou receber créditos repetidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Persistir descarte, baixa pessoal, entrada no ponto e crédito básico como resultado consistente e único.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Confirmar entrega e movimentar estoques” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-015-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-015; RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008.

**Pré-condições e dados:** três latas e entrega válida de uma. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: confirma.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** restam duas no estoque, o ponto registra uma recebida e o morador ganha 10 pontos básicos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-015-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-015; RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008.

**Pré-condições e dados:** a mesma confirmação reenviada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o descarte e seus efeitos ocorrem uma única vez.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-015-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-015; RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008.

**Pré-condições e dados:** falha na conclusão. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a operação não termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema não apresenta sucesso com estoque ou crédito básico incompletos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-016"></a>

## TSK-MOR-016 — Exibir confirmação e histórico de descartes

**Nome da atividade:** Exibir confirmação e histórico de descartes.

**Módulo:** M03 — Mapa, presença e descarte. **Módulos afetados:** M03.

**Objetivo:** Ver o resultado da entrega e continuar para Home ou Loja. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** operação concluída. **Fluxo:** exibir ponto, itens/quantidades, resultado e 10 pontos básicos; separar eventual bônus e saldo; oferecer “Voltar para Home” e “Ir para a Loja”; disponibilizar o registro no histórico pessoal.

**Exceções:** falha não usa tela de sucesso. Bônus ainda não confirmado não aparece como já creditado. Histórico deve distinguir registro no estoque de entrega realizada.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado descarte concluído, quando a confirmação aparece, então apresenta a recompensa e ambas as ações de navegação.
- **CA-02:** Dado “Ir para a Loja”, quando o morador seleciona a ação, então acessa a loja autenticado.
- **CA-03:** Dado consulta ao histórico, quando localiza a entrega, então os dados correspondem ao descarte concluído.

**Dependências:**

TSK-MOR-015; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-020; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-016 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero tornar compreensível o resultado da entrega e permitir consulta posterior para ver o resultado da entrega e continuar para Home ou Loja.

**Valor e relevância:** Ver o resultado da entrega e continuar para Home ou Loja. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Mostrar confirmação e histórico, distinguindo 10 pontos confirmados de bônus ainda pendente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Exibir confirmação e histórico de descartes” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-016-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-016; RF-MVP-020; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** descarte concluído. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a confirmação aparece.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** apresenta a recompensa e ambas as ações de navegação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-016-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-016; RF-MVP-020; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** “Ir para a Loja”. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador seleciona a ação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** acessa a loja autenticado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-016-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-016; RF-MVP-020; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** consulta ao histórico. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: localiza a entrega.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os dados correspondem ao descarte concluído.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-017"></a>

## TSK-MOR-017 — Creditar recompensa básica provisória

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

- **PD-010:** Define limites, ajustes e prevenção de créditos indevidos; a regra provisória aprovada continua sendo dez pontos por descarte concluído, uma única vez.

**Registros das decisões relacionadas:** [PD-010](../04-decisoes.md#tsk-dec-010).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016; ficha [TSK-MOR-017 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-011](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero conceder 10 pontos por operação de descarte concluída enquanto o modelo definitivo não é elaborado para receber a recompensa provisória pela entrega concluída.

**Valor e relevância:** Receber a recompensa provisória pela entrega concluída. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Creditar 10 pontos básicos por operação concluída, com origem rastreável e sem repetição na pesagem.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Creditar recompensa básica provisória” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-017-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-017; RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016.

**Pré-condições e dados:** um descarte válido contendo vários itens. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** recebe um crédito básico de 10 pontos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-017-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-017; RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016.

**Pré-condições e dados:** uma pesagem da cooperativa sobre materiais já entregues. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é registrada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** nenhum novo crédito básico é gerado para os moradores.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-017-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-017; RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016.

**Pré-condições e dados:** confirmação repetida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o saldo não aumenta novamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-018"></a>

## TSK-MOR-018 — Aplicar bônus de campanha

**Nome da atividade:** Aplicar bônus de campanha.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Receber benefício adicional quando cumpre uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** campanha publicada, regra aprovada e eventos elegíveis registrados. **Fluxo:** verificar participação e condições; apurar produto, quantidade ou meta configurados; registrar bônus separado do crédito básico; atualizar o saldo e indicar a campanha de origem.

**Exceções:** não presumir que a compra gera bônus nem que campanhas se acumulam. Eventos manuais podem não comprovar um produto específico. Elegibilidade, janela de apuração, repetição, limites e evidência do produto são PD-011.

**Regras:**

Regras de origem: RN-009. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado regra validada de bônus por descarte elegível, quando a condição é cumprida, então o bônus é registrado com a campanha e o evento que o originaram.
- **CA-02:** Dado uma campanha não elegível, quando um descarte é concluído, então os 10 pontos básicos permanecem sem bônus indevido.
- **CA-03:** Dado um bônus já processado para o mesmo evento e regra, quando o processamento é repetido, então não há duplicação.

**Dependências:**

TSK-MOR-017, TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Define elegibilidade, metas, bônus e alterações das campanhas que afetam esta atividade.

**Registros das decisões relacionadas:** [PD-011](../04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-018 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero conceder pontos adicionais por produto elegível ou meta de descarte para receber benefício adicional quando cumpre uma campanha.

**Valor e relevância:** Receber benefício adicional quando cumpre uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Apurar bônus elegível segundo regra aprovada, separado do básico e sem duplicar lançamentos.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Aplicar bônus de campanha” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-018-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-018; RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** regra validada de bônus por descarte elegível. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a condição é cumprida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o bônus é registrado com a campanha e o evento que o originaram.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-018-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-018; RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** uma campanha não elegível. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um descarte é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os 10 pontos básicos permanecem sem bônus indevido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-018-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-018; RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** um bônus já processado para o mesmo evento e regra. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o processamento é repetido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não há duplicação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-019"></a>

## TSK-MOR-019 — Consultar saldo e extrato de pontos

**Nome da atividade:** Consultar saldo e extrato de pontos.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Entender o saldo e a origem de cada movimentação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado. **Fluxo:** mostrar saldo disponível e lançamentos, com data, natureza crédito/débito, quantidade, descrição e origem; distinguir crédito básico, bônus, voucher e participação paga, quando aplicável; permitir consultar o vínculo da operação.

**Exceções e resultado:** extrato de outra pessoa não é acessível. Consulta falha não deve ser confundida com saldo zero. Expiração, ajustes administrativos e estornos ainda exigem regras aprovadas em PD-010 e PD-012.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado crédito de 10 pontos e débito aprovado de 4, quando consulta o extrato, então encontra os dois lançamentos e saldo de 6, na ausência de outros movimentos.
- **CA-02:** Dado um bônus de campanha, quando consulta o lançamento, então identifica sua origem separadamente da recompensa básica.

**Dependências:**

TSK-MOR-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-010, PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-010:** Define limites, ajustes e prevenção de créditos indevidos; a regra provisória aprovada continua sendo dez pontos por descarte concluído, uma única vez.
- **PD-012:** Define custo, disponibilidade, emissão, uso e cancelamento dos vouchers e seus efeitos sobre os pontos.

**Registros das decisões relacionadas:** [PD-010](../04-decisoes.md#tsk-dec-010), [PD-012](../04-decisoes.md#tsk-dec-012).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-023; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-019 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E2.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado por consolidação.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero explicar como o saldo foi formado e utilizado para entender o saldo e a origem de cada movimentação.

**Valor e relevância:** Entender o saldo e a origem de cada movimentação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar saldo e extrato de créditos/débitos com vínculo a descarte, bônus e aquisição.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar saldo e extrato de pontos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-019-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-019; RF-MVP-023; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** crédito de 10 pontos e débito aprovado de 4. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o extrato.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra os dois lançamentos e saldo de 6, na ausência de outros movimentos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-019-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-019; RF-MVP-023; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um bônus de campanha. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o lançamento.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** identifica sua origem separadamente da recompensa básica.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-020"></a>

## TSK-MOR-020 — Apurar metas de descarte das campanhas

**Nome da atividade:** Apurar metas de descarte das campanhas.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Acompanhar quanto falta para cumprir a meta de uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** campanha com meta validada. **Fluxo:** considerar eventos elegíveis segundo a regra publicada; atualizar progresso; apresentar quantidade atingida, meta e condição restante; sinalizar cumprimento sem antecipar prêmio não confirmado.

**Exceções:** registro no estoque não conta como descarte. Não deduzir compra ou entrega a partir da leitura de código. Definir o que comprova o produto específico e se descartes anteriores à adesão contam em PD-011.

**Regras:**

Regras de origem: RN-009. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado campanha com meta de cinco unidades e dois descartes elegíveis somando três, quando o progresso é apurado, então apresenta três de cinco.
- **CA-02:** Dado apenas itens cadastrados no estoque, quando a meta é consultada, então eles não são tratados como unidades já descartadas.

**Dependências:**

TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Define elegibilidade, metas, bônus e alterações das campanhas que afetam esta atividade.

**Registros das decisões relacionadas:** [PD-011](../04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-020 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero indicar o progresso em campanhas que exigem descarte de determinada quantidade ou produto para acompanhar quanto falta para cumprir a meta de uma campanha.

**Valor e relevância:** Acompanhar quanto falta para cumprir a meta de uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Mostrar progresso a partir de eventos elegíveis, mantendo quantidades e condições da campanha rastreáveis.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Apurar metas de descarte das campanhas” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-020-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-020; RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** campanha com meta de cinco unidades e dois descartes elegíveis somando três. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o progresso é apurado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** apresenta três de cinco.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-020-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-020; RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** apenas itens cadastrados no estoque. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a meta é consultada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** eles não são tratados como unidades já descartadas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-021"></a>

## TSK-MOR-021 — Debitar pontos com consistência

**Nome da atividade:** Debitar pontos com consistência.

**Módulo:** M04 — Pontuação, saldo e extrato. **Módulos afetados:** M04.

**Objetivo:** Usar pontos sem saldo negativo ou cobranças duplicadas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** recompensa/participação válida, custo aprovado e saldo suficiente. **Fluxo:** apresentar custo; obter confirmação; verificar saldo atual e disponibilidade; registrar débito vinculado ao benefício adquirido; atualizar saldo e disponibilizar resultado.

**Exceções:** saldo insuficiente ou oferta indisponível não gera débito. Duas compras simultâneas devem respeitar saldo e limite. Não se presume pagamento complementar em dinheiro ou conversão monetária dos pontos.

**Regras:**

Regras de origem: RN-010. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado saldo insuficiente, quando o morador confirma a compra, então não há débito nem aquisição.
- **CA-02:** Dado confirmação reenviada da mesma operação, quando é processada, então não duplica débito ou benefício.
- **CA-03:** Dado duas aquisições concorrentes sem saldo para ambas, quando são processadas, então o saldo permanece não negativo.

**Dependências:**

TSK-MOR-019; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-012:** Define custo, disponibilidade, emissão, uso e cancelamento dos vouchers e seus efeitos sobre os pontos.

**Registros das decisões relacionadas:** [PD-012](../04-decisoes.md#tsk-dec-012).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010; ficha [TSK-MOR-021 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E5.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado por dependência das recompensas.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero cobrar os pontos definidos sem permitir saldo negativo ou compra duplicada para usar pontos sem saldo negativo ou cobranças duplicadas.

**Valor e relevância:** Usar pontos sem saldo negativo ou cobranças duplicadas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Realizar débito vinculado à aquisição/participação, validando saldo e concorrência.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Debitar pontos com consistência” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-021-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-021; RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010.

**Pré-condições e dados:** saldo insuficiente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador confirma a compra.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não há débito nem aquisição.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-021-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-021; RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010.

**Pré-condições e dados:** confirmação reenviada da mesma operação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não duplica débito ou benefício.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-021-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-021; RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010.

**Pré-condições e dados:** duas aquisições concorrentes sem saldo para ambas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: são processadas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o saldo permanece não negativo.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-022"></a>

## TSK-MOR-022 — Consultar a loja de recompensas

**Nome da atividade:** Consultar a loja de recompensas.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Descobrir recompensas e campanhas disponíveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** morador autenticado. **Fluxo:** acessar pela confirmação do descarte ou navegação da plataforma; consultar campanhas vigentes, sorteios e vouchers; visualizar título, representação visual, condições resumidas e custo quando aplicável; abrir detalhes antes de participar ou comprar.

**Exceções:** catálogo vazio deve informar ausência de ofertas. Ofertas não publicadas não são apresentadas como compráveis. A loja comercializa benefícios com pontos; cashback financeiro está fora do MVP.

**Regras:**

Regras de origem: RN-010. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado campanhas e vouchers publicados, quando o morador abre a loja, então encontra as ofertas disponíveis e pode consultar detalhes.
- **CA-02:** Dado catálogo sem ofertas vigentes, quando o abre, então vê uma mensagem adequada sem opções fictícias de compra.

**Dependências:**

TSK-MOR-023, TSK-MOR-024, TSK-MOR-025, TSK-MOR-026; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010; ficha [TSK-MOR-022 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero descobrir campanhas, sorteios e vouchers disponíveis para descobrir recompensas e campanhas disponíveis.

**Valor e relevância:** Descobrir recompensas e campanhas disponíveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Consultar Loja com ofertas publicadas e condições claras, mantendo pontos distintos de dinheiro.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar a loja de recompensas” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-022-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-022; RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010.

**Pré-condições e dados:** campanhas e vouchers publicados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador abre a loja.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra as ofertas disponíveis e pode consultar detalhes.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-022-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-022; RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010.

**Pré-condições e dados:** catálogo sem ofertas vigentes. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o abre.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê uma mensagem adequada sem opções fictícias de compra.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-023"></a>

## TSK-MOR-023 — Consultar detalhes e condições da campanha

**Nome da atividade:** Consultar detalhes e condições da campanha.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Entender o que precisa fazer antes de participar. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** campanha consultável. **Fluxo:** apresentar título, descrição, imagem/vídeo disponível, período, produtos ou materiais elegíveis, quantidade/meta, condições de participação, custo quando houver e benefício; oferecer a ação aplicável à campanha.

**Exceções:** não anunciar recompensa sem regra publicada. A campanha deve esclarecer se exige descarte, uso de pontos ou outra condição aprovada; leitura de nota não comprova automaticamente descarte. Condições de participação e frequência são PD-011.

**Regras:**

Regras de origem: RN-019. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado campanha baseada no descarte de um produto, quando abre seus detalhes, então o morador vê produto, meta e benefício configurados.
- **CA-02:** Dado campanha com vídeo, quando os detalhes são exibidos, então a mídia é acessível e as condições também estão disponíveis em texto.

**Dependências:**

TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Define elegibilidade, metas, bônus e alterações das campanhas que afetam esta atividade.

**Registros das decisões relacionadas:** [PD-011](../04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019; ficha [TSK-MOR-023 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero explicar o que fazer e o que poderá ganhar antes da adesão para entender o que precisa fazer antes de participar.

**Valor e relevância:** Entender o que precisa fazer antes de participar. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Abrir campanha e consultar descrição, vigência, condições e benefícios aprovados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar detalhes e condições da campanha” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-023-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-023; RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019.

**Pré-condições e dados:** campanha baseada no descarte de um produto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre seus detalhes.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o morador vê produto, meta e benefício configurados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-023-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-023; RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019.

**Pré-condições e dados:** campanha com vídeo. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os detalhes são exibidos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a mídia é acessível e as condições também estão disponíveis em texto.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-024"></a>

## TSK-MOR-024 — Administrar e participar de campanhas

**Nome da atividade:** Administrar e participar de campanhas.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Participar de campanhas que tenham condições publicadas pela administração. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** permissão administrativa para gestão; campanha publicada para participação. **Entrada administrativa:** título, descrição, mídia, período e regra de meta, elegibilidade e recompensa. **Fluxo:** preparar cadastro; validar informações; publicar conforme regra aprovada; permitir adesão quando exigida; acompanhar progresso.

**Exceções:** não herdar a obrigação da V5 de ter parceiro confirmado antes de toda campanha. Alteração de campanha já participada, adesão automática/manual e bônus acumulados dependem de PD-011. Participação com custo depende de confirmação e RF-MVP-025.

**Regras:**

Regras de origem: RN-009, RN-019. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado administrador autorizado e campanha com dados e regra validados, quando a publica, então ela fica consultável pelos moradores elegíveis.
- **CA-02:** Dado um morador, quando tenta alterar a regra da campanha, então a alteração é negada.
- **CA-03:** Dado uma condição de participação publicada, quando o morador adere, então a participação obedece à condição exibida, sem cobranças ocultas.

**Dependências:**

TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-011:** Define elegibilidade, metas, bônus e alterações das campanhas que afetam esta atividade.

**Registros das decisões relacionadas:** [PD-011](../04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019; ficha [TSK-MOR-024 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero permitir campanhas internas geridas pelo administrador e participação pelos moradores para participar de campanhas que tenham condições publicadas pela administração.

**Valor e relevância:** Participar de campanhas que tenham condições publicadas pela administração. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Entregar gestão administrativa e participação do morador na mesma capacidade, com regras e permissões distintas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar e participar de campanhas” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-024-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-024; RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019.

**Pré-condições e dados:** administrador autorizado e campanha com dados e regra validados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a publica.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ela fica consultável pelos moradores elegíveis.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-024-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-024; RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019.

**Pré-condições e dados:** um morador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta alterar a regra da campanha.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a alteração é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-024-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-024; RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019.

**Pré-condições e dados:** uma condição de participação publicada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador adere.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a participação obedece à condição exibida, sem cobranças ocultas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-025"></a>

## TSK-MOR-025 — Administrar e adquirir vouchers

**Nome da atividade:** Administrar e adquirir vouchers.

**Módulo:** M05 — Loja, campanhas, vouchers e sorteios. **Módulos afetados:** M05.

**Objetivo:** Adquirir voucher com pontos e consultar as condições de uso. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** voucher cadastrado e publicado pelo administrador; custo e regras de uso aprovados. **Entrada:** título, descrição, benefício, custo em pontos, instruções e parâmetros de validade/disponibilidade conforme definição.

**Fluxo:** administrador cadastra oferta; morador consulta detalhes e confirma a compra; sistema debita pontos com consistência; disponibiliza voucher adquirido em sua área de recompensas. Forma de emissão do código e validação no parceiro ainda são PD-012.

**Exceções:** não emitir voucher sem aquisição confirmada nem cobrar por oferta indisponível. Limite de unidades, cancelamento e devolução de pontos precisam de validação.

**Regras:**

Regras de origem: RN-019. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado voucher disponível e saldo suficiente, quando o morador confirma, então uma aquisição é registrada e o débito corresponde ao custo exibido.
- **CA-02:** Dado voucher adquirido, quando consulta suas recompensas, então encontra o benefício e as instruções de uso aprovadas.

**Dependências:**

TSK-MOR-021, TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-012:** Define custo, disponibilidade, emissão, uso e cancelamento dos vouchers e seus efeitos sobre os pontos.

**Registros das decisões relacionadas:** [PD-012](../04-decisoes.md#tsk-dec-012).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-025 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero trocar pontos por cupons de promoção ou benefícios para adquirir voucher com pontos e consultar as condições de uso.

**Valor e relevância:** Adquirir voucher com pontos e consultar as condições de uso. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Entregar cadastro/publicação administrativa e aquisição pelo morador com estoque, saldo e regras aprovados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar e adquirir vouchers” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

#### TSK-MOR-025-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-025; RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** voucher disponível e saldo suficiente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador confirma.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** uma aquisição é registrada e o débito corresponde ao custo exibido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-025-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-025; RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** voucher adquirido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta suas recompensas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra o benefício e as instruções de uso aprovadas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-mor-026"></a>

## TSK-MOR-026 — Administrar sorteios e registrar participações

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

- **PD-013:** Define as condições de participação e realização dos sorteios antes de publicar ou efetivar suas operações.
- **PD-021:** Define os eventos e o contrato de notificação externa necessários à atividade, quando exigidos.

**Registros das decisões relacionadas:** [PD-013](../04-decisoes.md#tsk-dec-013), [PD-021](../04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-026 original](../../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

### História, contexto e subtarefas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.

**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero usar pontos para participar de sorteios com regras compreensíveis e resultado rastreável para participar de sorteio com regras compreensíveis e registro confiável.

**Valor e relevância:** Participar de sorteio com regras compreensíveis e registro confiável. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Entrega demonstrável:** Entregar gestão administrativa e inscrição do morador conforme condições aprovadas, incluindo custo quando aplicável.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar sorteios e registrar participações” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

#### TSK-MOR-026-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-026; RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** sorteio com custo aprovado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a participação é confirmada com saldo suficiente.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** registra participação e débito vinculados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-026-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-026; RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** inscrições e método de apuração validados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o resultado é apurado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** registra os ganhadores e a execução para consulta autorizada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-MOR-026-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-026; RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** inscrição reenviada da mesma operação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não cria chances adicionais involuntariamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>
