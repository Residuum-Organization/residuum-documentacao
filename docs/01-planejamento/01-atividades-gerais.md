# Residuum — documento geral das atividades

<!-- GERADO: edite os documentos por perfil e execute scripts/gerar-atividades.mjs. -->

**Atualização das fontes:** 17/10/2026. **Prazo informado:** 20/11/2026; sujeito ao recorte e à capacidade definidos pela equipe.

Este documento compila as **66 fichas completas de execução**: 26 do morador, cinco do ponto de coleta, quatro da cooperativa, 17 da administração e 14 transversais. Seus critérios e 147 casos individuais de software são preservados. Os 26 registros de decisão necessários à execução são acessados por referências; sua aprovação não representa implementação concluída. Os 45 casos integrados e seis recortes técnicos complementam as fichas sem acrescentar funcionalidades.

**Fonte de edição:** documentos por perfil e arquivos de apoio. As pendências das fichas se limitam ao impacto na implementação, integração, teste ou aceite. Questões gerais e evolução futura são acompanhadas em documento separado.

## Navegação

- [Fluxo de trabalho e qualidade](#fluxo-de-atividades)
- [Morador](#morador) — [fonte editável](02-perfis/01-morador.md)
- [Ponto de coleta](#ponto) — [fonte editável](02-perfis/02-ponto-de-coleta.md)
- [Cooperativa](#cooperativa) — [fonte editável](02-perfis/03-cooperativa.md)
- [Administrador](#administrador) — [fonte editável](02-perfis/04-administrador.md)
- [Fundamentos compartilhados e qualidade](#compartilhadas) — [fonte editável](02-perfis/05-transversal.md)
- [Decisões relacionadas](#decisoes)
- [Arquitetura, refatoração e banco](#tecnicas)
- [Matriz de importância](#matriz)
- [Casos integrados](#testes)

[Guia das tasks](README.md) · [Sequência por perfil](06-entregas-por-perfil.md) · [Proposta de sprints](07-sprints.md)

Fonte editável das orientações compartilhadas de desenvolvimento, revisão, QA e evidências.

<a id="fluxo-de-atividades"></a>

## Fluxo de atividades: desenvolvimento, QA e conclusão

Os diagramas seguem da **esquerda para a direita**. O primeiro mostra a entrega aprovada; os seguintes explicam correções e dúvidas.

### Caminho principal

```mermaid
flowchart LR
    A["1. Analista de sistemas<br/>detalha e encaminha a atividade"] --> B["2. Equipe desenvolve<br/>e revisa a atividade"]
    B --> C["3. QA valida pelos<br/>critérios de aceite"]
    C -->|"Aprovada, com evidências"| D["4. Atividade concluída"]
```

### Quando o QA encontrar problemas

```mermaid
flowchart LR
    E["QA registra os problemas<br/>e devolve a atividade"] --> F["Equipe de desenvolvimento<br/>faz as correções"]
    F --> G["QA valida novamente<br/>os critérios e as correções"]
```

O QA registra o resultado esperado, o observado e as evidências do problema. **Se a nova validação aprovar, a atividade é concluída. Se ainda houver problemas, retorna ao desenvolvimento e passa por nova validação após a correção.** Esse ciclo se repete até atender os critérios e a definição de conclusão.

### Quando houver dúvidas durante o desenvolvimento

```mermaid
flowchart LR
    H["Equipe identifica<br/>uma dúvida"] --> I["Consulta o analista<br/>de sistemas ou o QA"]
    I --> J["Dúvida esclarecida:<br/>equipe continua a atividade"]
```

Dúvidas que alterem requisitos ou regras devem ter a decisão registrada e os critérios atualizados antes da implementação do trecho afetado. Quando uma dúvida impedir o avanço, registrar o bloqueio e a pessoa responsável por esclarecê-la; os trechos independentes podem continuar.

### Responsabilidades e conclusão

O analista detalha e esclarece requisitos; a equipe organiza a execução; a entrega passa por revisão e QA. Critérios atendidos e evidências registradas permitem concluir a atividade. Problemas retornam ao desenvolvimento e são validados novamente após correção. Dúvidas podem ser esclarecidas com analista ou QA durante todo o processo.

Preservar a definição comum de conclusão: revisão, critérios verificados, permissões e dados coerentes, falhas relevantes testadas e documentação/evidências associadas à versão. Critérios de aceite permanecem específicos da atividade. Uma decisão documental não conclui a implementação dependente.

## Evidências anteriores e decisões posteriores

Os casos vinculados às tasks são planejados, inclusive verificações documentais de decisões. Evidência exigida está separada de resultado produzido. Os testes anteriores da [demonstração do morador](../04-ux/01-morador-v6/02-validacao.md) não homologam o backend integrado; o [diagnóstico](../03-tecnologia/03-diagnostico-mvp-v1.md) tem versões e limites próprios; o [teste com moradores](../04-ux/01-morador-v6/03-teste-com-usuarios.md) permanece sem sessões humanas executadas.

A decisão de 10/10/2026 foi incorporada: descarte rápido usa rascunho em memória, abandono elimina os itens sem gravar no estoque, rota externa em outra aba preserva o fluxo e o retorno exige GPS novo. Falhas recuperáveis preservam itens enquanto a pessoa permanece no fluxo. PD-006 continua parcial para contratos reais, concorrência e confirmação. Parâmetros GPS demonstrativos e regras comerciais pendentes não foram transformados em políticas aprovadas.

<a id="morador"></a>

## Morador

[Fonte editável das fichas](02-perfis/01-morador.md).

**Atualização:** 17/10/2026. **Atividades próprias:** 26.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

### Épicos e funcionalidades

#### Acesso e perfil

- [TSK-MOR-001 — Cadastrar morador por convite](02-perfis/01-morador.md#tsk-mor-001)
- [TSK-MOR-002 — Autenticar e encerrar sessão](02-perfis/01-morador.md#tsk-mor-002)
- [TSK-MOR-003 — Recuperar acesso](02-perfis/01-morador.md#tsk-mor-003)
- [TSK-MOR-004 — Consultar e editar perfil](02-perfis/01-morador.md#tsk-mor-004)

#### Registro e estoque

- [TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido](02-perfis/01-morador.md#tsk-mor-005)
- [TSK-MOR-006 — Identificar produto por código de barras](02-perfis/01-morador.md#tsk-mor-006)
- [TSK-MOR-007 — Importar itens de nota fiscal](02-perfis/01-morador.md#tsk-mor-007)
- [TSK-MOR-008 — Cadastrar resíduo manualmente](02-perfis/01-morador.md#tsk-mor-008)
- [TSK-MOR-009 — Revisar itens antes da inclusão](02-perfis/01-morador.md#tsk-mor-009)
- [TSK-MOR-010 — Manter estoque e selecionar quantidades](02-perfis/01-morador.md#tsk-mor-010)

#### Localização, presença e descarte

- [TSK-MOR-011 — Consultar pontos próximos compatíveis](02-perfis/01-morador.md#tsk-mor-011)
- [TSK-MOR-012 — Consultar detalhes do ponto](02-perfis/01-morador.md#tsk-mor-012)
- [TSK-MOR-013 — Encaminhar morador à navegação externa](02-perfis/01-morador.md#tsk-mor-013)
- [TSK-MOR-014 — Validar presença por GPS](02-perfis/01-morador.md#tsk-mor-014)
- [TSK-MOR-015 — Confirmar entrega e movimentar estoques](02-perfis/01-morador.md#tsk-mor-015)
- [TSK-MOR-016 — Exibir confirmação e histórico de descartes](02-perfis/01-morador.md#tsk-mor-016)

#### Pontuação, saldo e extrato

- [TSK-MOR-017 — Creditar recompensa básica provisória](02-perfis/01-morador.md#tsk-mor-017)
- [TSK-MOR-018 — Aplicar bônus de campanha](02-perfis/01-morador.md#tsk-mor-018)
- [TSK-MOR-019 — Consultar saldo e extrato de pontos](02-perfis/01-morador.md#tsk-mor-019)
- [TSK-MOR-020 — Apurar metas de descarte das campanhas](02-perfis/01-morador.md#tsk-mor-020)
- [TSK-MOR-021 — Debitar pontos com consistência](02-perfis/01-morador.md#tsk-mor-021)

#### Loja, campanhas, vouchers e sorteios

- [TSK-MOR-022 — Consultar a loja de recompensas](02-perfis/01-morador.md#tsk-mor-022)
- [TSK-MOR-023 — Consultar detalhes e condições da campanha](02-perfis/01-morador.md#tsk-mor-023)
- [TSK-MOR-024 — Administrar e participar de campanhas](02-perfis/01-morador.md#tsk-mor-024)
- [TSK-MOR-025 — Administrar e adquirir vouchers](02-perfis/01-morador.md#tsk-mor-025)
- [TSK-MOR-026 — Administrar sorteios e registrar participações](02-perfis/01-morador.md#tsk-mor-026)

### Fichas completas

<a id="tsk-mor-001"></a>

### TSK-MOR-001 — Cadastrar morador por convite

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

**Registros das decisões relacionadas:** [PD-003](04-decisoes.md#tsk-dec-003), [PD-001](04-decisoes.md#tsk-dec-001), [PD-022](04-decisoes.md#tsk-dec-022), [PD-002](04-decisoes.md#tsk-dec-002).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-MOR-001 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-001; RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um convite válido e dados aceitos. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador conclui o formulário.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a conta é criada vinculada ao consumo do convite.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-001; RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** uma tentativa sem convite autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o formulário é enviado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema impede a criação da conta.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-001-CT-03

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

### TSK-MOR-002 — Autenticar e encerrar sessão

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

**Registros das decisões relacionadas:** [PD-002](04-decisoes.md#tsk-dec-002), [PD-023](04-decisoes.md#tsk-dec-023), [PD-003](04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-005; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-002 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-002; RF-MVP-005; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** credenciais válidas e conta habilitada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o usuário faz login.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** acessa sua área autorizada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-002; RF-MVP-005; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma sessão encerrada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: se tenta executar uma ação protegida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** nova autenticação é exigida.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-002-CT-03

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

### TSK-MOR-003 — Recuperar acesso

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

**Registros das decisões relacionadas:** [PD-003](04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-006; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-003 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-003; RF-MVP-006; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um token válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o titular confirma uma senha aceita.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** poderá autenticar-se com a nova senha.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-003-CT-02

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

### TSK-MOR-004 — Consultar e editar perfil

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

**Registros das decisões relacionadas:** [PD-003](04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-007; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-004 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-004; RF-MVP-007; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um morador autenticado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o perfil.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê seus dados, saldo e históricos disponíveis.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-004-CT-02

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

### TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido

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

**Registros das decisões relacionadas:** [PD-006](04-decisoes.md#tsk-dec-006).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004; ficha [TSK-MOR-005 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 5 casos planejados desta atividade</summary>

##### TSK-MOR-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** a ação Registrar. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o cadastro é confirmado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens ficam no estoque sem recompensa.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** Descarte rápido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os itens são revisados e confirmados.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o usuário segue para escolha de ponto sem uma etapa obrigatória de navegação pelo estoque.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-005-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** um rascunho de Descarte rápido revisado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: cancela, navega para outra área, recarrega ou fecha a aba do fluxo.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o rascunho é eliminado, sem inclusão automática no estoque nem pontos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-005-CT-04

**Critério vinculado:** CA-04. **Origem:** TSK-MOR-005; RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.

**Pré-condições e dados:** itens no rascunho rápido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre a rota em outra aba e retorna ao fluxo.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens continuam no fluxo e a confirmação exige uma nova leitura GPS.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-005-CT-05

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

### TSK-MOR-006 — Identificar produto por código de barras

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

**Registros das decisões relacionadas:** [PD-004](04-decisoes.md#tsk-dec-004).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-006 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-006; RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.

**Pré-condições e dados:** um código conhecido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a consulta termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o formulário é preenchido com os dados disponíveis para revisão.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-006-CT-02

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

### TSK-MOR-007 — Importar itens de nota fiscal

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

**Registros das decisões relacionadas:** [PD-005](04-decisoes.md#tsk-dec-005), [PD-004](04-decisoes.md#tsk-dec-004), [PD-022](04-decisoes.md#tsk-dec-022).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-007 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-007; RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** uma nota consultável com produtos identificados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a importação termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o formulário apresenta as informações recuperadas antes da confirmação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-007-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-007; RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** material não identificado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador revisa.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** pode escolher PET ou lata manualmente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-007-CT-03

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

### TSK-MOR-008 — Cadastrar resíduo manualmente

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

**Rastreabilidade:** RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-008 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-005](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-008; RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.

**Pré-condições e dados:** nome, material aceito e quantidade válida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o cadastro é confirmado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens são adicionados conforme a intenção da ação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-008-CT-02

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

### TSK-MOR-009 — Revisar itens antes da inclusão

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

**Registros das decisões relacionadas:** [PD-005](04-decisoes.md#tsk-dec-005).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-009 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-007](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-009; RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.

**Pré-condições e dados:** uma importação com material desconhecido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o usuário tenta confirmar.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o material deve ser completado antes da inclusão.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-009-CT-02

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

### TSK-MOR-010 — Manter estoque e selecionar quantidades

**Nome da atividade:** Manter estoque e selecionar quantidades.

**Módulo:** M02 — Cadastro de resíduos e estoque. **Módulos afetados:** M02.

**Objetivo:** Saber o que está disponível e separar apenas o que será entregue. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** itens confirmados. **Fluxo:** salvar entradas; listar nome, material e quantidade; selecionar itens e quantidades disponíveis; iniciar escolha de ponto. Identificação e quantidade não equivalem a peso medido.

**Decisão posterior — 10/10/2026:** o caminho rápido mantém itens somente na memória do fluxo, sem inclusão automática no estoque. Cancelar, sair para outra área, recarregar ou fechar a aba elimina o rascunho. Abrir a rota em outra aba preserva o fluxo; retornar exige GPS novo. Falhas recuperáveis preservam os itens enquanto a pessoa continua no fluxo. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes em PD-006; ver [handoff](../04-ux/01-morador-v6/01-handoff.md#jornada-e-regras-aprovadas).

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

**Registros das decisões relacionadas:** [PD-006](04-decisoes.md#tsk-dec-006).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007; ficha [TSK-MOR-010 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-006](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-010; RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007.

**Pré-condições e dados:** cinco latas disponíveis. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador seleciona duas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a sessão de descarte contém duas, sem baixar o estoque antes da entrega.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-010-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-010; RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007.

**Pré-condições e dados:** uma seleção maior que o saldo. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta prosseguir.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema impede a operação e informa a quantidade disponível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-010-CT-03

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

### TSK-MOR-011 — Consultar pontos próximos compatíveis

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

**Registros das decisões relacionadas:** [PD-007](04-decisoes.md#tsk-dec-007).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007; ficha [TSK-MOR-011 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-009](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-011; RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007.

**Pré-condições e dados:** seleção de latas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador consulta pontos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** identifica quais recebem alumínio.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-011-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-011; RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007.

**Pré-condições e dados:** seleção de PET e lata. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta concluir tudo em um ponto que só aceita PET.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema não confirma a entrega incompatível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-011-CT-03

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

### TSK-MOR-012 — Consultar detalhes do ponto

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

**Registros das decisões relacionadas:** [PD-019](04-decisoes.md#tsk-dec-019), [PD-007](04-decisoes.md#tsk-dec-007), [PD-009](04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-016; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-012 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-009](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-012; RF-MVP-016; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um ponto consultável. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre seus detalhes.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o morador vê localização, materiais e informações de funcionamento cadastradas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-012-CT-02

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

### TSK-MOR-013 — Encaminhar morador à navegação externa

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

**Registros das decisões relacionadas:** [PD-006](04-decisoes.md#tsk-dec-006), [PD-007](04-decisoes.md#tsk-dec-007).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-017; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-013 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-009](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-013; RF-MVP-017; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** um ponto escolhido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador inicia navegação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o destino enviado corresponde ao ponto selecionado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-013-CT-02

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

### TSK-MOR-014 — Validar presença por GPS

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

**Registros das decisões relacionadas:** [PD-008](04-decisoes.md#tsk-dec-008).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006; ficha [TSK-MOR-014 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-010](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-014-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-014; RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006.

**Pré-condições e dados:** posição aceita pelos parâmetros validados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a presença é verificada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema permite confirmar o descarte no ponto escolhido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-014-CT-02

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

### TSK-MOR-015 — Confirmar entrega e movimentar estoques

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

**Registros das decisões relacionadas:** [PD-006](04-decisoes.md#tsk-dec-006), [PD-009](04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008; ficha [TSK-MOR-015 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-011](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-015-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-015; RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008.

**Pré-condições e dados:** três latas e entrega válida de uma. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: confirma.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** restam duas no estoque, o ponto registra uma recebida e o morador ganha 10 pontos básicos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-015-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-015; RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008.

**Pré-condições e dados:** a mesma confirmação reenviada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o descarte e seus efeitos ocorrem uma única vez.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-015-CT-03

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

### TSK-MOR-016 — Exibir confirmação e histórico de descartes

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

**Rastreabilidade:** RF-MVP-020; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-016 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-016-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-016; RF-MVP-020; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** descarte concluído. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a confirmação aparece.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** apresenta a recompensa e ambas as ações de navegação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-016-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-016; RF-MVP-020; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** “Ir para a Loja”. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador seleciona a ação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** acessa a loja autenticado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-016-CT-03

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

### TSK-MOR-017 — Creditar recompensa básica provisória

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

**Registros das decisões relacionadas:** [PD-010](04-decisoes.md#tsk-dec-010).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016; ficha [TSK-MOR-017 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-011](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-017-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-017; RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016.

**Pré-condições e dados:** um descarte válido contendo vários itens. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** recebe um crédito básico de 10 pontos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-017-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-017; RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016.

**Pré-condições e dados:** uma pesagem da cooperativa sobre materiais já entregues. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é registrada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** nenhum novo crédito básico é gerado para os moradores.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-017-CT-03

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

### TSK-MOR-018 — Aplicar bônus de campanha

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

**Registros das decisões relacionadas:** [PD-011](04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-018 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-018-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-018; RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** regra validada de bônus por descarte elegível. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a condição é cumprida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o bônus é registrado com a campanha e o evento que o originaram.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-018-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-018; RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** uma campanha não elegível. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um descarte é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os 10 pontos básicos permanecem sem bônus indevido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-018-CT-03

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

### TSK-MOR-019 — Consultar saldo e extrato de pontos

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

**Registros das decisões relacionadas:** [PD-010](04-decisoes.md#tsk-dec-010), [PD-012](04-decisoes.md#tsk-dec-012).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-023; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-019 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-019-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-019; RF-MVP-023; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** crédito de 10 pontos e débito aprovado de 4. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o extrato.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra os dois lançamentos e saldo de 6, na ausência de outros movimentos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-019-CT-02

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

### TSK-MOR-020 — Apurar metas de descarte das campanhas

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

**Registros das decisões relacionadas:** [PD-011](04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-020 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-020-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-020; RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009.

**Pré-condições e dados:** campanha com meta de cinco unidades e dois descartes elegíveis somando três. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o progresso é apurado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** apresenta três de cinco.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-020-CT-02

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

### TSK-MOR-021 — Debitar pontos com consistência

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

**Registros das decisões relacionadas:** [PD-012](04-decisoes.md#tsk-dec-012).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010; ficha [TSK-MOR-021 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-021-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-021; RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010.

**Pré-condições e dados:** saldo insuficiente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador confirma a compra.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não há débito nem aquisição.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-021-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-021; RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010.

**Pré-condições e dados:** confirmação reenviada da mesma operação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não duplica débito ou benefício.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-021-CT-03

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

### TSK-MOR-022 — Consultar a loja de recompensas

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

**Rastreabilidade:** RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010; ficha [TSK-MOR-022 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-022-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-022; RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010.

**Pré-condições e dados:** campanhas e vouchers publicados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador abre a loja.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra as ofertas disponíveis e pode consultar detalhes.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-022-CT-02

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

### TSK-MOR-023 — Consultar detalhes e condições da campanha

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

**Registros das decisões relacionadas:** [PD-011](04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019; ficha [TSK-MOR-023 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-023-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-023; RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019.

**Pré-condições e dados:** campanha baseada no descarte de um produto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: abre seus detalhes.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o morador vê produto, meta e benefício configurados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-023-CT-02

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

### TSK-MOR-024 — Administrar e participar de campanhas

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

**Registros das decisões relacionadas:** [PD-011](04-decisoes.md#tsk-dec-011).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019; ficha [TSK-MOR-024 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-024-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-024; RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019.

**Pré-condições e dados:** administrador autorizado e campanha com dados e regra validados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a publica.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ela fica consultável pelos moradores elegíveis.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-024-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-024; RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019.

**Pré-condições e dados:** um morador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta alterar a regra da campanha.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a alteração é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-024-CT-03

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

### TSK-MOR-025 — Administrar e adquirir vouchers

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

**Registros das decisões relacionadas:** [PD-012](04-decisoes.md#tsk-dec-012).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-025 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-MOR-025-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-025; RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** voucher disponível e saldo suficiente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador confirma.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** uma aquisição é registrada e o débito corresponde ao custo exibido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-025-CT-02

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

### TSK-MOR-026 — Administrar sorteios e registrar participações

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

**Registros das decisões relacionadas:** [PD-013](04-decisoes.md#tsk-dec-013), [PD-021](04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-026 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-MOR-026-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-MOR-026; RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** sorteio com custo aprovado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a participação é confirmada com saldo suficiente.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** registra participação e débito vinculados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-026-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-MOR-026; RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** inscrições e método de apuração validados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o resultado é apurado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** registra os ganhadores e a execução para consulta autorizada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-MOR-026-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-MOR-026; RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.

**Pré-condições e dados:** inscrição reenviada da mesma operação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não cria chances adicionais involuntariamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="ponto"></a>

## Ponto de coleta

[Fonte editável das fichas](02-perfis/02-ponto-de-coleta.md).

**Atualização:** 17/10/2026. **Atividades próprias:** 5.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

### Épicos e funcionalidades

#### Materiais aceitos e estoque

- [TSK-PON-001 — Editar materiais aceitos](02-perfis/02-ponto-de-coleta.md#tsk-pon-001)
- [TSK-PON-002 — Acompanhar estoque e ocupação do ponto](02-perfis/02-ponto-de-coleta.md#tsk-pon-002)

#### Alertas e solicitação de retirada

- [TSK-PON-003 — Sinalizar necessidade de coleta](02-perfis/02-ponto-de-coleta.md#tsk-pon-003)
- [TSK-PON-004 — Solicitar coleta ao administrador](02-perfis/02-ponto-de-coleta.md#tsk-pon-004)

#### Relatórios

- [TSK-PON-005 — Consultar relatórios dos pontos](02-perfis/02-ponto-de-coleta.md#tsk-pon-005)

### Fichas completas

<a id="tsk-pon-001"></a>

### TSK-PON-001 — Editar materiais aceitos

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

**Registros das decisões relacionadas:** [PD-009](04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003; ficha [TSK-PON-001 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-013](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-PON-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-001; RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003.

**Pré-condições e dados:** responsável autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: altera os materiais aceitos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** as consultas posteriores apresentam a nova configuração.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-001; RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003.

**Pré-condições e dados:** saldo de PET e retirada do PET da lista aceita. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o estoque.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o saldo anterior permanece registrado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-001-CT-03

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

### TSK-PON-002 — Acompanhar estoque e ocupação do ponto

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

**Registros das decisões relacionadas:** [PD-009](04-decisoes.md#tsk-dec-009), [PD-014](04-decisoes.md#tsk-dec-014), [PD-019](04-decisoes.md#tsk-dec-019), [PD-018](04-decisoes.md#tsk-dec-018).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021; ficha [TSK-PON-002 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-014](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014), [ADE-017](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-PON-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-002; RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021.

**Pré-condições e dados:** entradas de PET e lata. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta o painel.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** identifica os materiais separadamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-002; RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021.

**Pré-condições e dados:** peso medido registrado na coleta. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta indicadores.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ele não é apresentado como o peso individual comprovado de cada descarte.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-002-CT-03

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

### TSK-PON-003 — Sinalizar necessidade de coleta

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

**Registros das decisões relacionadas:** [PD-009](04-decisoes.md#tsk-dec-009), [PD-021](04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013; ficha [TSK-PON-003 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-014](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-PON-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-003; RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013.

**Pré-condições e dados:** nível atingindo o limite validado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o indicador é atualizado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador e o responsável visualizam a necessidade de coleta.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-003-CT-02

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

### TSK-PON-004 — Solicitar coleta ao administrador

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

**Registros das decisões relacionadas:** [PD-014](04-decisoes.md#tsk-dec-014).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-PON-004 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-PON-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-004; RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** responsável autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: envia um pedido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador pode consultá-lo com identificação do ponto e solicitante.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-004-CT-02

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

### TSK-PON-005 — Consultar relatórios dos pontos

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

**Registros das decisões relacionadas:** [PD-020](04-decisoes.md#tsk-dec-020), [PD-019](04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-PON-005 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022), [ADE-023](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-PON-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-PON-005; RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** ponto autorizado e plano com o relatório. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta um período.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra dados correspondentes aos eventos registrados e às unidades indicadas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-PON-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-PON-005; RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** relatório não incluído no plano. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: solicita acesso.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema informa a restrição sem retornar os dados protegidos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="cooperativa"></a>

## Cooperativa

[Fonte editável das fichas](02-perfis/03-cooperativa.md).

**Atualização:** 17/10/2026. **Atividades próprias:** 4.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

### Épicos e funcionalidades

#### Solicitações e aceite

- [TSK-COO-001 — Consultar e aceitar solicitação de coleta](02-perfis/03-cooperativa.md#tsk-coo-001)

#### Agenda, rota e acompanhamento

- [TSK-COO-002 — Fornecer rota e agendamento no painel](02-perfis/03-cooperativa.md#tsk-coo-002)
- [TSK-COO-003 — Acompanhar andamento da coleta](02-perfis/03-cooperativa.md#tsk-coo-003)

#### Pesagem e retirada

- [TSK-COO-004 — Registrar materiais e pesos retirados](02-perfis/03-cooperativa.md#tsk-coo-004)

### Fichas completas

<a id="tsk-coo-001"></a>

### TSK-COO-001 — Consultar e aceitar solicitação de coleta

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

**Registros das decisões relacionadas:** [PD-014](04-decisoes.md#tsk-dec-014).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013; ficha [TSK-COO-001 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-COO-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-001; RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013.

**Pré-condições e dados:** solicitação destinada à cooperativa. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: seu operador aceita.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador e a cooperativa consultam o aceite registrado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-COO-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-COO-001; RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013.

**Pré-condições e dados:** cooperativa diferente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta aceitar.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a operação é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-COO-001-CT-03

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

### TSK-COO-002 — Fornecer rota e agendamento no painel

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

**Registros das decisões relacionadas:** [PD-017](04-decisoes.md#tsk-dec-017).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014; ficha [TSK-COO-002 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-016](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-COO-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-002; RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014.

**Pré-condições e dados:** coleta atribuída com destino válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o operador abre o painel.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê ponto e agendamento fornecidos pela plataforma.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-COO-002-CT-02

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

### TSK-COO-003 — Acompanhar andamento da coleta

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

**Registros das decisões relacionadas:** [PD-014](04-decisoes.md#tsk-dec-014), [PD-018](04-decisoes.md#tsk-dec-018), [PD-017](04-decisoes.md#tsk-dec-017).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-042; RNF-MVP-001, RNF-MVP-002; ficha [TSK-COO-003 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015), [ADE-016](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-COO-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-003; RF-MVP-042; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** aceite registrado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os atores autorizados consultam a coleta.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** veem a mesma decisão com autoria e data.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-COO-003-CT-02

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

### TSK-COO-004 — Registrar materiais e pesos retirados

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

**Registros das decisões relacionadas:** [PD-014](04-decisoes.md#tsk-dec-014), [PD-018](04-decisoes.md#tsk-dec-018).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016; ficha [TSK-COO-004 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-017](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-COO-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-COO-004; RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.

**Pré-condições e dados:** coleta aceita. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: registra 12 kg de PET e 3 kg de alumínio.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o administrador consulta os dois pesos vinculados ao ponto, à coleta e à cooperativa.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-COO-004-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-COO-004; RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.

**Pré-condições e dados:** registro reenviado da mesma operação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não duplica retirada ou peso contabilizado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-COO-004-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-COO-004; RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.

**Pré-condições e dados:** pesagem registrada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o resultado é gravado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não credita novamente os 10 pontos dos moradores.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="administrador"></a>

## Administrador

[Fonte editável das fichas](02-perfis/04-administrador.md).

**Atualização:** 17/10/2026. **Atividades próprias:** 17.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

A gestão de campanhas, vouchers e sorteios também depende das fichas [TSK-MOR-024 — Administrar e participar de campanhas](02-perfis/01-morador.md#tsk-mor-024), [TSK-MOR-025 — Administrar e adquirir vouchers](02-perfis/01-morador.md#tsk-mor-025), [TSK-MOR-026 — Administrar sorteios e registrar participações](02-perfis/01-morador.md#tsk-mor-026). Elas conservam uma única ficha editável no perfil morador.

### Épicos e funcionalidades

#### Convites, moradores e acessos

- [TSK-ADM-001 — Gerenciar convites individuais](02-perfis/04-administrador.md#tsk-adm-001)
- [TSK-ADM-002 — Gerenciar convites compartilhados](02-perfis/04-administrador.md#tsk-adm-002)
- [TSK-ADM-003 — Cadastrar morador pela administração](02-perfis/04-administrador.md#tsk-adm-003)
- [TSK-ADM-004 — Administrar acessos e vínculos](02-perfis/04-administrador.md#tsk-adm-004)

#### Pontos de coleta

- [TSK-ADM-005 — Cadastrar e administrar pontos de coleta](02-perfis/04-administrador.md#tsk-adm-005)
- [TSK-ADM-006 — Gerir pontos temporários](02-perfis/04-administrador.md#tsk-adm-006)
- [TSK-ADM-007 — Classificar contexto e funcionamento do ponto](02-perfis/04-administrador.md#tsk-adm-007)

#### Cooperativas e agendamentos

- [TSK-ADM-008 — Cadastrar cooperativa e seus acessos](02-perfis/04-administrador.md#tsk-adm-008)
- [TSK-ADM-009 — Solicitar e agendar coleta administrativamente](02-perfis/04-administrador.md#tsk-adm-009)

#### Pagamentos

- [TSK-ADM-010 — Preparar informações de pagamento](02-perfis/04-administrador.md#tsk-adm-010)
- [TSK-ADM-011 — Iniciar pagamento por API](02-perfis/04-administrador.md#tsk-adm-011)
- [TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento](02-perfis/04-administrador.md#tsk-adm-012)

#### Visão administrativa e indicadores

- [TSK-ADM-013 — Disponibilizar visão administrativa da operação](02-perfis/04-administrador.md#tsk-adm-013)
- [TSK-ADM-014 — Exibir gráficos e indicadores](02-perfis/04-administrador.md#tsk-adm-014)

#### Planos e mídias

- [TSK-ADM-015 — Representar planos e benefícios de dados](02-perfis/04-administrador.md#tsk-adm-015)
- [TSK-ADM-016 — Associar contratação e vigência de plano](02-perfis/04-administrador.md#tsk-adm-016)
- [TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja](02-perfis/04-administrador.md#tsk-adm-017)

### Fichas completas

<a id="tsk-adm-001"></a>

### TSK-ADM-001 — Gerenciar convites individuais

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

**Registros das decisões relacionadas:** [PD-001](04-decisoes.md#tsk-dec-001), [PD-002](04-decisoes.md#tsk-dec-002).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-001 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-001; RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um convite individual válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um cadastro é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema cria um usuário e marca o convite como utilizado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-001; RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** o mesmo convite usado em duas confirmações simultâneas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: ambas forem processadas.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** somente um cadastro poderá consumir esse convite.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-001-CT-03

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

### TSK-ADM-002 — Gerenciar convites compartilhados

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

**Registros das decisões relacionadas:** [PD-001](04-decisoes.md#tsk-dec-001), [PD-002](04-decisoes.md#tsk-dec-002).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-002 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-002; RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um link vigente com vagas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um cadastro é concluído.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o contador aumenta em uma unidade.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-002; RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.

**Pré-condições e dados:** um link expirado ou esgotado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: houver tentativa de cadastro.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a inscrição não é concluída.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-002-CT-03

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

### TSK-ADM-003 — Cadastrar morador pela administração

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

**Registros das decisões relacionadas:** [PD-002](04-decisoes.md#tsk-dec-002), [PD-003](04-decisoes.md#tsk-dec-003), [PD-022](04-decisoes.md#tsk-dec-022).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-ADM-003 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-003; RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um administrador autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: cria um morador com dados válidos.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o cadastro fica disponível e a autoria é registrada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-003-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-003; RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001.

**Pré-condições e dados:** um perfil sem essa permissão. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta a operação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a criação é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-003-CT-03

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

### TSK-ADM-004 — Administrar acessos e vínculos

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

**Registros das decisões relacionadas:** [PD-002](04-decisoes.md#tsk-dec-002), [PD-023](04-decisoes.md#tsk-dec-023), [PD-003](04-decisoes.md#tsk-dec-003).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-004 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-004; RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** um responsável vinculado a um ponto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: acessa o painel.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** atua apenas nos pontos autorizados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-004-CT-02

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

### TSK-ADM-005 — Cadastrar e administrar pontos de coleta

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

**Registros das decisões relacionadas:** [PD-003](04-decisoes.md#tsk-dec-003), [PD-009](04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-005 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-005; RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** cadastro válido realizado pelo administrador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o ponto é habilitado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** aparece nas consultas conforme sua disponibilidade e materiais.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-005; RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** um morador. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: tenta cadastrar um ponto diretamente.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a função administrativa não é autorizada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-005-CT-03

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

### TSK-ADM-006 — Gerir pontos temporários

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

**Registros das decisões relacionadas:** [PD-009](04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021; ficha [TSK-ADM-006 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-006; RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021.

**Pré-condições e dados:** ponto temporário fora do período. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador busca local disponível.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o ponto não é oferecido como destino ativo.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-006-CT-02

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

### TSK-ADM-007 — Classificar contexto e funcionamento do ponto

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

**Registros das decisões relacionadas:** [PD-009](04-decisoes.md#tsk-dec-009).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-033; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-007 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-007; RF-MVP-033; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma faculdade com ponto temporário. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consulta seu cadastro.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** contexto e duração são informações separadas.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-007-CT-02

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

### TSK-ADM-008 — Cadastrar cooperativa e seus acessos

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

**Registros das decisões relacionadas:** [PD-003](04-decisoes.md#tsk-dec-003), [PD-016](04-decisoes.md#tsk-dec-016), [PD-023](04-decisoes.md#tsk-dec-023).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-008 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-015](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-008; RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011.

**Pré-condições e dados:** administrador autorizado e dados aceitos. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: cadastra a cooperativa.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ela fica identificada por CNPJ e seus operadores possuem vínculos definidos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-008-CT-02

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

### TSK-ADM-009 — Solicitar e agendar coleta administrativamente

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

**Registros das decisões relacionadas:** [PD-014](04-decisoes.md#tsk-dec-014), [PD-015](04-decisoes.md#tsk-dec-015), [PD-021](04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-ADM-009 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-009; RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** administrador autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: envia a solicitação.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a cooperativa escolhida vê ponto e agendamento para decidir sobre o aceite.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-009-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-009; RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012.

**Pré-condições e dados:** solicitação recém-enviada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o administrador consulta.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ela não é exibida como já aceita.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-009-CT-03

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

### TSK-ADM-010 — Preparar informações de pagamento

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

**Registros das decisões relacionadas:** [PD-015](04-decisoes.md#tsk-dec-015), [PD-016](04-decisoes.md#tsk-dec-016).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017; ficha [TSK-ADM-010 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-010; RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017.

**Pré-condições e dados:** valor e recebedor definidos pela política aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o administrador prepara o pagamento.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** vê coleta, destinatário e valor antes de confirmar.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-010-CT-02

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

### TSK-ADM-011 — Iniciar pagamento por API

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

**Registros das decisões relacionadas:** [PD-015](04-decisoes.md#tsk-dec-015), [PD-016](04-decisoes.md#tsk-dec-016).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017; ficha [TSK-ADM-011 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-011; RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017.

**Pré-condições e dados:** administrador autorizado e ordem válida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: confirma o pagamento.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a plataforma solicita processamento e registra a identificação da ordem.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-011-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-011; RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017.

**Pré-condições e dados:** a mesma confirmação repetida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não produz duas ordens de pagamento para a mesma operação.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-011-CT-03

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

### TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento

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

**Registros das decisões relacionadas:** [PD-016](04-decisoes.md#tsk-dec-016).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018; ficha [TSK-ADM-012 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-ADM-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-012; RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018.

**Pré-condições e dados:** confirmação autêntica de pagamento bem-sucedido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a ordem passa a apresentar pagamento confirmado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-012-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-012; RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018.

**Pré-condições e dados:** falha ou resultado ainda incerto. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: consultado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema não informa que a cooperativa recebeu.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-012-CT-03

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

### TSK-ADM-013 — Disponibilizar visão administrativa da operação

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

**Registros das decisões relacionadas:** [PD-019](04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-047; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-013 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-013; RF-MVP-047; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** administrador autorizado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: acessa a área.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra os cadastros e ações administrativas previstas para seu perfil.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-013-CT-02

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

### TSK-ADM-014 — Exibir gráficos e indicadores

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

**Registros das decisões relacionadas:** [PD-020](04-decisoes.md#tsk-dec-020).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P2.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-048; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-014 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-014-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-014; RF-MVP-048; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** uma definição aprovada de atividade. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o gráfico é consultado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** exibe período, universo e contagem compatíveis com essa definição.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-014-CT-02

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

### TSK-ADM-015 — Representar planos e benefícios de dados

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

**Registros das decisões relacionadas:** [PD-019](04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-015 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-015-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-015; RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** catálogo de planos aprovado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o usuário consulta as modalidades.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** encontra benefícios e condições correspondentes à matriz publicada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-015-CT-02

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

### TSK-ADM-016 — Associar contratação e vigência de plano

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

**Registros das decisões relacionadas:** [PD-019](04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-016 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-016-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-016; RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** contratação reconhecida pelo processo aprovado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o plano é associado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os acessos previstos ficam vinculados ao titular e à vigência corretos.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-016-CT-02

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

### TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja

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

**Registros das decisões relacionadas:** [PD-024](04-decisoes.md#tsk-dec-024), [PD-021](04-decisoes.md#tsk-dec-021).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-053; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-017 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-021](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-021).

#### História, contexto e subtarefas

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

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-ADM-017-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-ADM-017; RF-MVP-053; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** vídeo em formato e tamanho aprovados. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o administrador o adiciona à campanha.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a oferta consegue apresentá-lo aos usuários autorizados.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-ADM-017-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-ADM-017; RF-MVP-053; RNF-MVP-001, RNF-MVP-002.

**Pré-condições e dados:** mídia rejeitada ou envio interrompido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a ação termina.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o sistema informa a falha e não apresenta um arquivo inexistente como disponível.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="compartilhadas"></a>

## Fundamentos compartilhados e qualidade

[Fonte editável das fichas](02-perfis/05-transversal.md).

**Atualização:** 17/10/2026. **Atividades próprias:** 14.

Fonte de edição das fichas deste perfil. Responsáveis, datas, estimativas e sprint permanecem a preencher pela equipe. Os casos são planejados; sua reorganização não representa execução ou aprovação. As pendências abaixo se limitam ao trabalho e ao aceite das tasks.

Estas atividades acompanham as jornadas pertinentes desde o início, incluindo autorização por perfil, vínculo e plano. Não representam uma etapa de QA somente ao final.

### Épicos e funcionalidades

#### Diagnóstico, acesso e integridade

- [TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6](02-perfis/05-transversal.md#tsk-tra-000)
- [TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano](02-perfis/05-transversal.md#tsk-tra-001)
- [TSK-TRA-002 — Plataforma responsiva e compatibilidade](02-perfis/05-transversal.md#tsk-tra-002)
- [TSK-TRA-003 — Autenticação e autorização](02-perfis/05-transversal.md#tsk-tra-003)
- [TSK-TRA-004 — Integridade, concorrência e idempotência](02-perfis/05-transversal.md#tsk-tra-004)

#### Resiliência, privacidade e experiência

- [TSK-TRA-005 — Resiliência de localização e consulta externa](02-perfis/05-transversal.md#tsk-tra-005)
- [TSK-TRA-006 — Proteção de dados e privacidade](02-perfis/05-transversal.md#tsk-tra-006)
- [TSK-TRA-007 — Desempenho e experiência](02-perfis/05-transversal.md#tsk-tra-007)

#### Operação, integrações e entrega

- [TSK-TRA-008 — Disponibilidade, backups e recuperação](02-perfis/05-transversal.md#tsk-tra-008)
- [TSK-TRA-009 — Auditoria e observabilidade](02-perfis/05-transversal.md#tsk-tra-009)
- [TSK-TRA-010 — Segurança das integrações](02-perfis/05-transversal.md#tsk-tra-010)
- [TSK-TRA-011 — Segurança e desempenho de mídias](02-perfis/05-transversal.md#tsk-tra-011)
- [TSK-TRA-012 — Padronização e entrega técnica](02-perfis/05-transversal.md#tsk-tra-012)
- [TSK-TRA-013 — Evolução e capacidade](02-perfis/05-transversal.md#tsk-tra-013)

### Fichas completas

<a id="tsk-tra-000"></a>

### TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6

**Nome da atividade:** Inventariar a implementação e definir a adequação à V6.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** como equipe de desenvolvimento, queremos comparar o MVP existente à V6 para preservar o que funciona e corrigir as diferenças com evidência.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

obter acesso autorizado ao código e ambiente; registrar versão, telas, serviços, persistência e integrações por requisito. Para cada capacidade, classificar: compatível com evidência, divergente, ausente ou não verificável. Produzir tabela com comportamento observado, esperado, evidência, risco e ação recomendada (reaproveitar, ajustar ou implementar). Ausência de acesso é impedimento, não ausência de funcionalidade.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado uma capacidade avaliada, quando o diagnóstico é registrado, então há requisito, versão, comportamento observado, evidência e ação recomendada.
- **CA-02:** Dado um item histórico marcado como entregue, quando não há evidência atual, então ele permanece não verificado.
- **CA-03:** Dado falta de acesso ao ambiente, quando se conclui o inventário documental, então a limitação é registrada sem afirmar que a aplicação foi validada.

**Dependências:**

acesso ao código/ambiente e credenciais de avaliação adequadas; não fornecidos neste repositório de documentos.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0, E1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** todos os RF/RNF da matriz da seção 10; RNF-MVP-011; ficha [TSK-TRA-000 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-000](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-000).

#### História, contexto e subtarefas

**Prioridade:** P0, E1. **Valor:** evitar retrabalho e encontrar divergências herdadas antes de distribuir as entregas.

**História:** como equipe de desenvolvimento, queremos comparar o MVP existente à V6 para preservar o que funciona e corrigir as diferenças com evidência.

**Responsabilidade sugerida:** produto, frontend, backend e QA. Esforço, nomes e prazo a definir.

**Descrição e entrega:** obter acesso autorizado ao código e ambiente; registrar versão, telas, serviços, persistência e integrações por requisito. Para cada capacidade, classificar: compatível com evidência, divergente, ausente ou não verificável. Produzir tabela com comportamento observado, esperado, evidência, risco e ação recomendada (reaproveitar, ajustar ou implementar). Ausência de acesso é impedimento, não ausência de funcionalidade.

**Subtarefas:**

1. Localizar versão do MVP e documentar como executar em ambiente de avaliação.
2. Percorrer as quatro jornadas com dados de teste e comparar critérios relevantes.
3. Identificar regras antigas de pesagem/pontuação, cadastro público e QR que conflitam com a V6.
4. Apontar efeitos em dados e migrações possíveis; proposta de migração depende de análise, sem excluir dados reais.
5. Vincular achados às tarefas deste documento e registrar estimativas apenas após refinamento.

#### Casos de teste

<details>
<summary>Exibir os 3 casos planejados desta atividade</summary>

##### TSK-TRA-000-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-000; todos os RF/RNF da matriz da seção 10; RNF-MVP-011.

**Pré-condições e dados:** uma capacidade avaliada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o diagnóstico é registrado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** há requisito, versão, comportamento observado, evidência e ação recomendada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-TRA-000-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-TRA-000; todos os RF/RNF da matriz da seção 10; RNF-MVP-011.

**Pré-condições e dados:** um item histórico marcado como entregue. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: não há evidência atual.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ele permanece não verificado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-TRA-000-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-TRA-000; todos os RF/RNF da matriz da seção 10; RNF-MVP-011.

**Pré-condições e dados:** falta de acesso ao ambiente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: se conclui o inventário documental.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a limitação é registrada sem afirmar que a aplicação foi validada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-001"></a>

### TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano

**Nome da atividade:** Autorizar dados por perfil, vínculo e plano.

**Módulo:** M10 — Planos e acesso comercial a dados. **Módulos afetados:** M10.

**Objetivo:** Garantir que benefício comercial não permita consultar dados indevidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** sessão válida e matriz de benefícios aprovada. **Fluxo:** verificar perfil; identificar pontos/organizações autorizados; verificar plano e benefício; retornar somente os dados permitidos. A checagem ocorre no serviço que entrega os dados, não apenas na interface.

**Exceções:** pagar por relatório não autoriza dados pessoais identificáveis de toda a rede. Administrador também está sujeito ao plano para relatórios, conforme decisão; privilégios técnicos e operação mínima precisam ser diferenciados em PD-019.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado responsável com plano válido, quando solicita dados de ponto sem vínculo autorizado, então a requisição é negada.
- **CA-02:** Dado administrador sem benefício de relatório no plano, quando pede esse relatório, então o privilégio administrativo não libera automaticamente o benefício.

**Dependências:**

TSK-ADM-004, TSK-ADM-015, TSK-ADM-016; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Define os benefícios, a vigência e a contratação de plano usados para autorizar os dados desta atividade.

**Registros das decisões relacionadas:** [PD-019](04-decisoes.md#tsk-dec-019).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-052; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-TRA-001 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

#### História, contexto e subtarefas

**Perfil principal:** usuário autorizado. **Prioridade:** P0. **Etapa:** E5.

**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.

**Estado da especificação V6:** confirmado com pendências.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como usuário autorizado, quero aplicar restrições comerciais e de acesso em conjunto para garantir que benefício comercial não permita consultar dados indevidos.

**Valor e relevância:** Garantir que benefício comercial não permita consultar dados indevidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Entrega demonstrável:** Autorizar dados pela combinação de sessão, perfil, vínculo, abrangência e benefício vigente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Autorizar dados por perfil, vínculo e plano” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os critérios e os casos vinculados e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

#### Casos de teste

<details>
<summary>Exibir os 2 casos planejados desta atividade</summary>

##### TSK-TRA-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-001; RF-MVP-052; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** responsável com plano válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: solicita dados de ponto sem vínculo autorizado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a requisição é negada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

##### TSK-TRA-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-TRA-001; RF-MVP-052; RNF-MVP-001, RNF-MVP-002; RN-020.

**Pré-condições e dados:** administrador sem benefício de relatório no plano. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: pede esse relatório.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o privilégio administrativo não libera automaticamente o benefício.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-002"></a>

### TSK-TRA-002 — Plataforma responsiva e compatibilidade

**Nome da atividade:** Plataforma responsiva e compatibilidade.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Permitir uso das jornadas em dispositivos suportados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação. **Origem:** RNF001 e RNF004 antigos.

O produto deve permitir uso em navegador móvel e desktop, com câmera e localização onde suportadas. Modo PWA deve ser verificado antes de ser declarado compatível. Estados de permissão negada, leitura falha e formulário manual devem ser compreensíveis. Fluxos principais devem permitir navegação por teclado e identificação dos campos; esta orientação de acessibilidade é proposta de qualidade para validação.

**Verificação:** executar login, cadastro manual, scanner, retorno de mapas e confirmação em matriz de dispositivos aprovada. Referência anterior: cinco modelos Android; seleção atual pendente em PD-025. **BDD:** dado navegador suportado, quando um fluxo é executado, então controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado navegador suportado, quando um fluxo é executado, então controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-025:** Define dispositivos, rede, carga e metas verificáveis necessários ao aceite da atividade.

**Registros das decisões relacionadas:** [PD-025](04-decisoes.md#tsk-dec-025).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-001; ficha [TSK-TRA-002 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

#### História, contexto e subtarefas

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Produto/design, frontend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos permitir uso das jornadas em dispositivos suportados para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Permitir uso das jornadas em dispositivos suportados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Definir matriz; verificar formulários, câmera/GPS, retorno do mapa e controles por teclado conforme orientação aprovada.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-002; RNF-MVP-001.

**Pré-condições e dados:** navegador suportado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um fluxo é executado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-003"></a>

### TSK-TRA-003 — Autenticação e autorização

**Nome da atividade:** Autenticação e autorização.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Impedir acesso horizontal e vertical indevido; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado com ajuste confirmado de perfis. **Origem:** RNF005 e RNF017 antigos.

Todas as operações protegidas devem validar sessão, perfil e vínculo no serviço responsável. Credenciais devem ser protegidas; segredos de integração não podem ser expostos no cliente ou nos documentos. Alterações administrativas devem ter autoria. Política de sessão, senha e papéis depende de PD-003 e PD-023.

**Verificação:** testar acesso horizontal entre moradores/pontos/cooperativas e acesso vertical às funções administrativas. **BDD:** dado usuário sem vínculo, quando envia requisição direta a dados de outro ponto, então a operação é negada mesmo que tenha um plano pago.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado usuário sem vínculo, quando envia requisição direta a dados de outro ponto, então a operação é negada mesmo que tenha um plano pago.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-003:** Define os dados obrigatórios e as verificações de cadastro, acesso ou recuperação aplicáveis à atividade.
- **PD-023:** Define vínculos, acúmulo de perfis e duração ou revogação das sessões que autorizam a operação.

**Registros das decisões relacionadas:** [PD-003](04-decisoes.md#tsk-dec-003), [PD-023](04-decisoes.md#tsk-dec-023).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-002; ficha [TSK-TRA-003 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-003](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Backend, segurança e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos impedir acesso horizontal e vertical indevido para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Impedir acesso horizontal e vertical indevido; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Testar requisições diretas entre moradores, pontos e cooperativas; proteger sessões e revogações no serviço.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-003; RNF-MVP-002.

**Pré-condições e dados:** usuário sem vínculo. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: envia requisição direta a dados de outro ponto.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a operação é negada mesmo que tenha um plano pago.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-004"></a>

### TSK-TRA-004 — Integridade, concorrência e idempotência

**Nome da atividade:** Integridade, concorrência e idempotência.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Preservar efeitos únicos e consistentes; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação, necessário às regras confirmadas. **Origem:** RNF006 antigo.

Operações de convite, descarte, crédito/débito, aquisição, coleta e pagamento devem evitar efeitos duplicados. A confirmação do descarte deve manter consistentes registro, movimentação de estoque e crédito básico. Bônus posterior deve ter estado rastreável e não repetir o básico. A solução técnica de transações e processamento será definida pela equipe.

**Verificação:** reenvio, timeout e operações concorrentes sobre última vaga, saldo ou quantidade. **BDD:** dado uma operação reenviada, quando é processada, então os efeitos de negócio ocorrem uma vez e o resultado anterior pode ser reconhecido.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado uma operação reenviada, quando é processada, então os efeitos de negócio ocorrem uma vez e o resultado anterior pode ser reconhecido.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-003; ficha [TSK-TRA-004 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002), [ADE-004](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-011](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011), [ADE-017](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017), [ADE-018](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018), [ADE-020](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020), [ADE-024](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-024).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos preservar efeitos únicos e consistentes para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Preservar efeitos únicos e consistentes; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Testar concorrência pela última vaga, quantidade e saldo; falhas intermediárias e reenvio de descarte, aquisição, coleta e pagamento.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-004; RNF-MVP-003.

**Pré-condições e dados:** uma operação reenviada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os efeitos de negócio ocorrem uma vez e o resultado anterior pode ser reconhecido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-005"></a>

### TSK-TRA-005 — Resiliência de localização e consulta externa

**Nome da atividade:** Resiliência de localização e consulta externa.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Manter falhas externas explícitas sem falso sucesso; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** GPS confirmado; parâmetros pendentes. **Origem:** RNF007 da V5.

Falhas de GPS, mapas e consulta de produtos/notas devem ser apresentadas sem inventar resultados. Negação de GPS não pode ser convertida em presença válida. Entrada manual deve permanecer acessível para falhas de identificação. Timeout, tentativas, precisão e validade da posição dependem de PD-004 e PD-008.

**Verificação:** simular permissão negada, baixa precisão, localização antiga, indisponibilidade e recuperação. **BDD:** dado GPS inválido, quando o morador tenta concluir, então os itens e pontos não são movimentados indevidamente.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado GPS inválido, quando o morador tenta concluir, então os itens e pontos não são movimentados indevidamente.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-004:** Define a fonte e o contrato da consulta externa, seus dados disponíveis, limites e falhas.
- **PD-008:** Define os parâmetros GPS que permitem aceitar ou rejeitar a presença na confirmação.

**Registros das decisões relacionadas:** [PD-004](04-decisoes.md#tsk-dec-004), [PD-008](04-decisoes.md#tsk-dec-008).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-004; ficha [TSK-TRA-005 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-009](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009), [ADE-010](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010), [ADE-016](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Frontend, backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos manter falhas externas explícitas sem falso sucesso para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Manter falhas externas explícitas sem falso sucesso; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Simular falhas separadas de scanner, consulta, mapas e GPS; manter alternativa manual para identificação e impedimento de descarte sem presença.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-005; RNF-MVP-004.

**Pré-condições e dados:** GPS inválido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador tenta concluir.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens e pontos não são movimentados indevidamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-006"></a>

### TSK-TRA-006 — Proteção de dados e privacidade

**Nome da atividade:** Proteção de dados e privacidade.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Minimizar e proteger dados pessoais necessários; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação de produto/jurídico. **Origem:** RNF005 antigo.

Definir finalidade e dados mínimos para moradores, localização e nota fiscal; proteger transmissão e armazenamento; restringir relatórios por autorização; registrar escolhas aplicáveis de compartilhamento. Não tratar consentimento como requisito universal ou comprovação automática de conformidade legal. A política de privacidade, base de tratamento, retenção e atendimento ao titular são PD-022.

**Verificação:** revisar dados coletados, logs, exportações e acesso direto; comprovar que credenciais, tokens de notas e dados pessoais desnecessários não aparecem em logs comuns. **BDD:** dado relatório sem autorização para dados identificáveis, quando é solicitado, então não retorna identificadores pessoais.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado relatório sem autorização para dados identificáveis, quando é solicitado, então não retorna identificadores pessoais.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-022:** Define tratamento, proteção e retenção dos dados pessoais acessados ou produzidos por esta atividade.

**Registros das decisões relacionadas:** [PD-022](04-decisoes.md#tsk-dec-022).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-005; ficha [TSK-TRA-006 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-025](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Produto, segurança, backend e validação especializada. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos minimizar e proteger dados pessoais necessários para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Minimizar e proteger dados pessoais necessários; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Inventariar dados e finalidade; revisar logs, compartilhamento, exportações e acesso; implementar política aprovada de retenção.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-006; RNF-MVP-005.

**Pré-condições e dados:** relatório sem autorização para dados identificáveis. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é solicitado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não retorna identificadores pessoais.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-007"></a>

### TSK-TRA-007 — Desempenho e experiência

**Nome da atividade:** Desempenho e experiência.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Comprovar desempenho e usabilidade por cenário; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** metas herdadas a validar. **Origem:** RNF004 e RNF008 antigos; S6.

Referências anteriores: carregamento principal/mapa inferior a 3 segundos em cenário 4G; Lighthouse mínimo 70; cadastro em até dois minutos; sucesso de pelo menos 80% em teste com cinco usuários. Cada métrica precisa de definição de dispositivo, rede, carga, roteiro e medida em PD-025. Lighthouse não comprova sozinho o tempo do mapa ou a usabilidade.

**Verificação:** medir os fluxos no cenário aprovado e registrar resultados. **BDD:** dado cenário de desempenho validado, quando a página é medida, então o resultado é comparado à meta correspondente com evidência.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado cenário de desempenho validado, quando a página é medida, então o resultado é comparado à meta correspondente com evidência.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-025:** Define dispositivos, rede, carga e metas verificáveis necessários ao aceite da atividade.

**Registros das decisões relacionadas:** [PD-025](04-decisoes.md#tsk-dec-025).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-006; ficha [TSK-TRA-007 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

#### História, contexto e subtarefas

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Frontend, backend, produto e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos comprovar desempenho e usabilidade por cenário para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Comprovar desempenho e usabilidade por cenário; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Aprovar cenário e metas; medir carregamento/mapa, tempo de cadastro e sucesso de uso com evidência; separar medição de Lighthouse.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-007; RNF-MVP-006.

**Pré-condições e dados:** cenário de desempenho validado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a página é medida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o resultado é comparado à meta correspondente com evidência.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-008"></a>

### TSK-TRA-008 — Disponibilidade, backups e recuperação

**Nome da atividade:** Disponibilidade, backups e recuperação.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Demonstrar recuperação e monitorar disponibilidade; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação. **Origem:** RNF010 e RNF016 antigos.

Referências anteriores: backups diários, RPO de 24 horas e RTO de 4 horas; disponibilidade de 99% em horário comercial. Janela comercial, cálculo, alertas, retenção de backups e metas vigentes são PD-026. Uso de cloud gerenciada não comprova cumprimento desses objetivos.

**Verificação:** executar restauração em ambiente controlado, medir recuperação e demonstrar monitoramento. **BDD:** dado backup válido, quando restauração de teste é realizada, então dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado backup válido, quando restauração de teste é realizada, então dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-026:** Define ambiente, entrega, disponibilidade e recuperação necessários para validar a operação.

**Registros das decisões relacionadas:** [PD-026](04-decisoes.md#tsk-dec-026).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-007; ficha [TSK-TRA-008 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

#### História, contexto e subtarefas

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Operação, backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos demonstrar recuperação e monitorar disponibilidade para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Demonstrar recuperação e monitorar disponibilidade; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Inventariar infraestrutura; aprovar metas; executar restauração controlada e registrar tempo, dados recuperados e alertas.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-008; RNF-MVP-007.

**Pré-condições e dados:** backup válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: restauração de teste é realizada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-009"></a>

### TSK-TRA-009 — Auditoria e observabilidade

**Nome da atividade:** Auditoria e observabilidade.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Investigar operações sem expor segredos; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para validação. **Origem:** RF030 básico, RNF006 e RNF014 antigos.

Registrar identificador, autoria, horário, entidade e resultado das operações relevantes; permitir correlação entre descarte, pontos, coleta e pagamento; proteger contra alteração indevida. Separar trilha de negócio e diagnóstico de erro. Não exigir stack trace em toda operação bem-sucedida, como sugeriam os documentos anteriores.

Retenção anterior de 12 meses é referência a revisar em PD-022/PD-026. Logs, monitoramento de falhas e disponibilidade são necessários; tracing distribuído e cold storage não entram por padrão.

**Verificação:** percorrer uma operação de ponta a ponta sem expor segredos. **BDD:** dado pagamento iniciado, quando se investiga sua execução, então é possível associar autor, coleta, ordem e retornos do provedor.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado pagamento iniciado, quando se investiga sua execução, então é possível associar autor, coleta, ordem e retornos do provedor.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-022:** Define tratamento, proteção e retenção dos dados pessoais acessados ou produzidos por esta atividade.
- **PD-026:** Define ambiente, entrega, disponibilidade e recuperação necessários para validar a operação.

**Registros das decisões relacionadas:** [PD-022](04-decisoes.md#tsk-dec-022), [PD-026](04-decisoes.md#tsk-dec-026).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-008; ficha [TSK-TRA-009 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-011](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011), [ADE-012](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012), [ADE-017](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017), [ADE-025](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Backend, operação e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos investigar operações sem expor segredos para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Investigar operações sem expor segredos; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Relacionar autoria, evento, entidade e resultado; percorrer descarte→pontos e coleta→ordem→retorno; testar proteção da trilha.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-009; RNF-MVP-008.

**Pré-condições e dados:** pagamento iniciado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: se investiga sua execução.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** é possível associar autor, coleta, ordem e retornos do provedor.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-010"></a>

### TSK-TRA-010 — Segurança das integrações

**Nome da atividade:** Segurança das integrações.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Confiar nas integrações sem expor chaves; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** detalhamento técnico para validação. **Origem:** RNF015 e RNF017 antigos.

Proteger chaves, limitar permissões e autenticar retornos financeiros conforme o provedor. Não expor credenciais de serviços nos scanners, páginas públicas ou vídeos. Distinguir API de catálogo, consulta de nota, mapa, pagamento e mensagens; falha de uma não deve produzir sucesso fictício em outra.

**Verificação:** revisar configuração, acessos e retornos inválidos. **BDD:** dado retorno de pagamento sem autenticidade válida, quando é recebido, então não altera a ordem para paga.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado retorno de pagamento sem autenticidade válida, quando é recebido, então não altera a ordem para paga.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-009; ficha [TSK-TRA-010 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-016](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016), [ADE-018](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018), [ADE-025](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Backend, segurança e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos confiar nas integrações sem expor chaves para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Confiar nas integrações sem expor chaves; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Revisar permissões/chaves, verificar autenticidade de callbacks e falhas de consulta; impedir retorno inválido de alterar pagamento.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-010; RNF-MVP-009.

**Pré-condições e dados:** retorno de pagamento sem autenticidade válida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é recebido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não altera a ordem para paga.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-011"></a>

### TSK-TRA-011 — Segurança e desempenho de mídias

**Nome da atividade:** Segurança e desempenho de mídias.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Publicar mídias com limites e controles aprovados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** imagem/vídeo confirmado; limites pendentes. **Origem:** RF028 antigo e S7.

Validar arquivo, tipo e limites no serviço, controlar permissão de envio e evitar execução de conteúdo arbitrário. A descrição da oferta não deve depender exclusivamente do vídeo. Estratégia de carregamento e armazenamento precisa considerar dispositivos móveis e a diferença entre imagem e vídeo.

**Verificação:** upload válido, tipo incompatível, limite excedido e envio interrompido. **BDD:** dado arquivo fora das políticas aprovadas, quando é enviado, então não é publicado como mídia válida.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado arquivo fora das políticas aprovadas, quando é enviado, então não é publicado como mídia válida.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-010; ficha [TSK-TRA-011 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-021](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-021).

#### História, contexto e subtarefas

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Frontend, backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos publicar mídias com limites e controles aprovados para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Publicar mídias com limites e controles aprovados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Validar arquivos no serviço, permissões de envio, interrupção e carregamento móvel; manter condições da oferta em texto.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-011; RNF-MVP-010.

**Pré-condições e dados:** arquivo fora das políticas aprovadas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é enviado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não é publicado como mídia válida.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-012"></a>

### TSK-TRA-012 — Padronização e entrega técnica

**Nome da atividade:** Padronização e entrega técnica.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Padronizar entregas reproduzíveis pela equipe; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** herdado para revisão da equipe. **Origem:** RNF002, RNF009, RNF012 e RNF013 antigos.

Manter critérios comuns de revisão, qualidade e implantação para a equipe de seis pessoas. Documentar configuração dos ambientes e executar verificações básicas antes da entrega. IaC, gestão de segredos, pipeline e identidade visual devem ser reconciliados com o MVP existente. Terraform, Cloud Run, ECS, ferramentas de autenticação e componentes de UI citados antes são referências, não uma migração autorizada.

**Verificação:** demonstrar procedimento reproduzível de entrega e configuração, com validações pertinentes. **BDD:** dado uma alteração aprovada, quando passa pelo processo definido, então há evidência de verificação e identificação da versão entregue.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado uma alteração aprovada, quando passa pelo processo definido, então há evidência de verificação e identificação da versão entregue.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-011; ficha [TSK-TRA-012 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-000](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-000), [ADE-024](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-024).

#### História, contexto e subtarefas

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Equipe técnica e operação. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos padronizar entregas reproduzíveis pela equipe para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Padronizar entregas reproduzíveis pela equipe; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Documentar ambientes e configuração, revisão e pipeline atual; demonstrar entrega identificável; não impor migração de tecnologia.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-012; RNF-MVP-011.

**Pré-condições e dados:** uma alteração aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: passa pelo processo definido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** há evidência de verificação e identificação da versão entregue.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="tsk-tra-013"></a>

### TSK-TRA-013 — Evolução e capacidade

**Nome da atividade:** Evolução e capacidade.

**Módulo:** TRANSVERSAL — Ambiente, diagnóstico e qualidade.

**Objetivo:** Conhecer limites e permitir evolução sem reinterpretar histórico; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Situação:** proposta para validação. **Origem:** RNF003 e RNF011 antigos.

Documentar limites do MVP e pontos de extensão para novos materiais, pontuação definitiva e cashback sem implementar antecipadamente esses comportamentos. Dimensionamento, simultaneidade e volume esperado precisam de PD-025. Evitar pressupor que sistemas distribuídos, sharding ou integrações genéricas sejam necessários.

**Verificação:** revisar separação das responsabilidades de cadastro, descarte, pontuação, coleta, pagamentos e planos. **BDD:** dado mudança futura da pontuação, quando é especificada, então a regra provisória e seu histórico são identificáveis sem reinterpretar silenciosamente lançamentos anteriores.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado mudança futura da pontuação, quando é especificada, então a regra provisória e seu histórico são identificáveis sem reinterpretar silenciosamente lançamentos anteriores.

**Dependências:**

TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Não há pendência específica citada; confirmar as condições comuns antes de liberar o recorte.

- **PD-025:** Define dispositivos, rede, carga e metas verificáveis necessários ao aceite da atividade.

**Registros das decisões relacionadas:** [PD-025](04-decisoes.md#tsk-dec-025).

**Estimativa de esforço:** A definir pela equipe após refinamento técnico.

**Prioridade de origem:** P2; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-012; ficha [TSK-TRA-013 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../07-historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

#### História, contexto e subtarefas

**Prioridade:** P2; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Responsabilidade sugerida:** Arquitetura/backend, produto e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos conhecer limites e permitir evolução sem reinterpretar histórico para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Conhecer limites e permitir evolução sem reinterpretar histórico; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Revisar responsabilidades e carga aprovada; identificar regra provisória e extensões futuras sem construir cashback ou novos materiais.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

#### Casos de teste

<details>
<summary>Exibir os 1 casos planejados desta atividade</summary>

##### TSK-TRA-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-013; RNF-MVP-012.

**Pré-condições e dados:** mudança futura da pontuação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é especificada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a regra provisória e seu histórico são identificáveis sem reinterpretar silenciosamente lançamentos anteriores.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

</details>

<a id="decisoes"></a>

## Decisões relacionadas às tasks

As fichas de execução indicam quais decisões alteram seu trabalho ou aceite. Consulte os registros abaixo para alternativas, aprovação e verificações documentais. A decisão de UX de PD-006 já aprovada permanece vigente; somente seus contratos reais ainda abertos condicionam os trechos dependentes.

<a id="tsk-dec-001"></a>

- [TSK-DEC-001 — PD-001](04-decisoes.md#tsk-dec-001)

<a id="tsk-dec-002"></a>

- [TSK-DEC-002 — PD-002](04-decisoes.md#tsk-dec-002)

<a id="tsk-dec-003"></a>

- [TSK-DEC-003 — PD-003](04-decisoes.md#tsk-dec-003)

<a id="tsk-dec-004"></a>

- [TSK-DEC-004 — PD-004](04-decisoes.md#tsk-dec-004)

<a id="tsk-dec-005"></a>

- [TSK-DEC-005 — PD-005](04-decisoes.md#tsk-dec-005)

<a id="tsk-dec-006"></a>

- [TSK-DEC-006 — PD-006](04-decisoes.md#tsk-dec-006)

<a id="tsk-dec-007"></a>

- [TSK-DEC-007 — PD-007](04-decisoes.md#tsk-dec-007)

<a id="tsk-dec-008"></a>

- [TSK-DEC-008 — PD-008](04-decisoes.md#tsk-dec-008)

<a id="tsk-dec-009"></a>

- [TSK-DEC-009 — PD-009](04-decisoes.md#tsk-dec-009)

<a id="tsk-dec-010"></a>

- [TSK-DEC-010 — PD-010](04-decisoes.md#tsk-dec-010)

<a id="tsk-dec-011"></a>

- [TSK-DEC-011 — PD-011](04-decisoes.md#tsk-dec-011)

<a id="tsk-dec-012"></a>

- [TSK-DEC-012 — PD-012](04-decisoes.md#tsk-dec-012)

<a id="tsk-dec-013"></a>

- [TSK-DEC-013 — PD-013](04-decisoes.md#tsk-dec-013)

<a id="tsk-dec-014"></a>

- [TSK-DEC-014 — PD-014](04-decisoes.md#tsk-dec-014)

<a id="tsk-dec-015"></a>

- [TSK-DEC-015 — PD-015](04-decisoes.md#tsk-dec-015)

<a id="tsk-dec-016"></a>

- [TSK-DEC-016 — PD-016](04-decisoes.md#tsk-dec-016)

<a id="tsk-dec-017"></a>

- [TSK-DEC-017 — PD-017](04-decisoes.md#tsk-dec-017)

<a id="tsk-dec-018"></a>

- [TSK-DEC-018 — PD-018](04-decisoes.md#tsk-dec-018)

<a id="tsk-dec-019"></a>

- [TSK-DEC-019 — PD-019](04-decisoes.md#tsk-dec-019)

<a id="tsk-dec-020"></a>

- [TSK-DEC-020 — PD-020](04-decisoes.md#tsk-dec-020)

<a id="tsk-dec-021"></a>

- [TSK-DEC-021 — PD-021](04-decisoes.md#tsk-dec-021)

<a id="tsk-dec-022"></a>

- [TSK-DEC-022 — PD-022](04-decisoes.md#tsk-dec-022)

<a id="tsk-dec-023"></a>

- [TSK-DEC-023 — PD-023](04-decisoes.md#tsk-dec-023)

<a id="tsk-dec-024"></a>

- [TSK-DEC-024 — PD-024](04-decisoes.md#tsk-dec-024)

<a id="tsk-dec-025"></a>

- [TSK-DEC-025 — PD-025](04-decisoes.md#tsk-dec-025)

<a id="tsk-dec-026"></a>

- [TSK-DEC-026 — PD-026](04-decisoes.md#tsk-dec-026)

<a id="tsk-dec-027"></a>

[Registro transferido para avaliação posterior](08-pendencias-gerais.md#tsk-dec-027).

<a id="tecnicas"></a>

As seis fichas abaixo desdobram trabalho técnico já previsto nos pacotes ADE. Seus identificadores TEC são recortes de execução; não são seis novas funcionalidades nem devem ser somados às 66 atividades de execução como escopo independente. Os 27 registros de decisão são acompanhados separadamente. Manter vínculo ao cartão TSK/ADE pertinente; se criar subtarefas no quadro, evitar duplicar status e contabilização.

**Para todas as fichas:** responsável, data de início, data de entrega e sprint = **A definir pelo analista/equipe**. O envio ao QA e a conclusão após aprovação devem ser registrados separadamente. **Evidências produzidas nesta adequação:** nenhuma execução técnica; todos os testes abaixo são planejados. Disponibilidade, arquitetura e esquema físico atuais precisam ser conferidos no código de trabalho.

## TEC-01 — Verificar ambiente e migrações do banco

**Nome da atividade:** Verificar ambiente e migrações do banco de avaliação.

**Objetivo:** reproduzir a base de trabalho e comprovar criação/atualização do banco antes das entregas.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** confirmar versões, configuração da API e cadeia de migrações; preparar procedimento reproduzível; aplicar e validar migrações em banco isolado de avaliação, incluindo compatibilidade com dados sintéticos representativos. Não migrar nem corrigir dados de produção por esta ficha documental.

**Regras:** inspeção estática de migrações não comprova aplicação; erro não pode ser registrado como inicialização bem-sucedida. Configuração deve preservar segredos.

**Critérios de aceite:** a base vazia de avaliação recebe o esquema previsto; atualização de base sintética compatível preserva registros; API conecta à base correta; procedimento e versão ficam registrados; falhas relevantes são documentadas.

**Dependências:** acesso ao código, banco de avaliação e política de ambiente/recuperação. **Origem:** ADE-000; TSK-TRA-000, TSK-TRA-012; AUD-014–016; PD-026.

**Evidências de entrega:** logs sem segredos, versão, migrações aplicadas, verificações de esquema/dados e procedimento reproduzível. **Testes planejados:** criar base vazia; atualizar base sintética representativa; verificar conexão e resultado; comparar registros antes/depois.

## TEC-02 — Padronizar contratos de materiais e unidades

**Nome da atividade:** Padronizar contratos de materiais e unidades entre interface, API e banco.

**Objetivo:** impedir confusão entre embalagens, capacidade e peso coletado.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** alinhar PET e lata de alumínio, quantidades inteiras positivas, peso medido da cooperativa e campos de ocupação; mapear contratos e consumidores; propor compatibilidade/migração quando o esquema atual exigir.

**Regras:** não converter unidades em kg por suposição; não excluir materiais históricos sem decisão e plano de compatibilidade; parâmetros de capacidade e conciliação dependem de aprovação.

**Critérios de aceite:** cadastro/estoque/descarte usam os materiais e unidades acordados; peso operacional permanece separado; entradas inválidas são rejeitadas sem efeito; consumidores usam o mesmo contrato; tratamento de legado está documentado.

**Dependências:** TEC-01; decisões PD-009/PD-018 para efeitos dependentes. **Origem:** ADE-004; TSK-MOR-008, TSK-MOR-010, TSK-PON-002, TSK-COO-004; AUD-007.

**Evidências de entrega:** contrato, rastreabilidade de campos/consumidores, resultados de validações e proposta de compatibilidade. **Testes planejados:** cadastrar quantidade válida; rejeitar quantidade inválida; registrar peso operacional; comprovar que contagem pessoal não foi reinterpretada como peso.

## TEC-03 — Refatorar confirmação e efeitos do descarte

**Nome da atividade:** Refatorar confirmação de descarte para uma operação consistente.

**Objetivo:** impedir dupla baixa, dupla entrada e duplo crédito.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** revisar as responsabilidades e os consumidores das rotas existentes; concentrar validação, entrega, movimento de estoque e crédito básico em uma operação consistente, com reenvio seguro e proteção concorrente. A organização interna será definida após inspeção; não prescrever migração de framework ou novo serviço sem necessidade.

**Regras:** dez pontos básicos por operação concluída; seleção/registro e pesagem posterior não creditam; origem rápida não cria estoque pessoal automaticamente; investigar legado sem recalcular dados reais por inferência.

**Critérios de aceite:** estoque inicial dez e entrega de três deixam sete, acrescentam três ao ponto e creditam dez pontos uma vez; reenvio não repete efeitos; falha e concorrência não deixam saldos negativos ou sucesso parcial.

**Dependências:** TEC-01/02, acessos, ponto, GPS e contratos aprovados do recorte. **Origem:** ADE-011; TSK-MOR-015, TSK-MOR-017, TSK-TRA-004; AUD-001/002; PD-006/009/010.

**Evidências de entrega:** revisão, contrato e registros antes/depois na API e no banco de avaliação. **Testes planejados:** CT-011-01 a CT-011-03 do [roteiro integrado](../05-qualidade/02-testes-integrados.md), com concorrência no banco de avaliação pertinente.

## TEC-04 — Adequar retirada e conciliação da coleta

**Nome da atividade:** Adequar movimento de retirada sem apagar remanescentes ou novas entradas.

**Objetivo:** preservar saldo correto do ponto quando a cooperativa registra a coleta.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** revisar efeitos persistidos e responsabilidade da conclusão operacional; aplicar política aprovada de retirada parcial, contagem/peso e entradas posteriores; validar materiais e pesos no serviço.

**Regras:** peso negativo não é aceito; zero, precisão e correção seguem decisão; peso não define quantidade retirada por inferência; pesagem não gera novo crédito básico ao morador.

**Critérios de aceite:** retirada preserva remanescentes e entradas posteriores conforme conciliação aprovada; valores inválidos não são persistidos; repetição não duplica retirada; crédito do morador não é repetido.

**Dependências:** TEC-01/02, coleta aceita e PD-009/014/018 aprovadas para o recorte. **Origem:** ADE-014/017; TSK-PON-002, TSK-COO-004, TSK-TRA-004; AUD-004/005.

**Evidências de entrega:** movimentos e saldos antes/depois, contrato e resultados de falha/reenvio. **Testes planejados:** CT-019 e CT-020 integrados; complementar peso negativo e reenvio segundo a regra aprovada.

## TEC-05 — Adequar autorização por perfil e vínculo

**Nome da atividade:** Adequar autorização no serviço por perfil, vínculo e atribuição.

**Objetivo:** impedir acesso indevido entre moradores, pontos, cooperativas e administração.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** revisar controles compartilhados e aplicar restrições às leituras/escritas pertinentes; alinhar interface e API à mesma matriz de acesso; separar benefício comercial de vínculo operacional.

**Regras:** esconder botão não é autorização; cooperativa opera somente atribuições autorizadas; plano pago não concede vínculo; operadores e sessões dependem da política aprovada.

**Critérios de aceite:** usuário autorizado acessa seu recorte; requisição direta sem vínculo é negada sem efeito; revogação respeita política aprovada; acesso horizontal e vertical são testados.

**Dependências:** vínculos/contas sintéticas, TEC-01 e decisões PD-002/003/023 pertinentes. **Origem:** ADE-001/003/022; TSK-ADM-004, TSK-TRA-003, TSK-TRA-001; AUD-003/008.

**Evidências de entrega:** matriz de acesso, respostas HTTP e ausência de mudanças não autorizadas no banco. **Testes planejados:** acesso autorizado; tentativa entre pontos sem vínculo; tentativa vertical; acesso comercial sem vínculo conforme CT-025.

## TEC-06 — Adequar regressões e procedimento técnico de entrega

**Nome da atividade:** Adequar testes de regressão e procedimento reproduzível de entrega.

**Objetivo:** verificar as regras atuais e evitar que alterações reintroduzam defeitos.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** mapear testes legados à V6, atualizar expectativas superadas com rastreabilidade, acrescentar regressões dos achados e definir verificações reproduzíveis de build, API, persistência e jornadas. Conferir ambientes local e de integração utilizados pela equipe.

**Regras:** teste antigo aprovado não torna uma regra antiga válida; registrar contexto, versão e limites; não remover falhas sem análise; restauração e testes destrutivos apenas em avaliação isolada.

**Critérios de aceite:** expectativas têm requisito atual associado; fluxo completo detecta duplicidade/perda de saldo; execução e resultados são reproduzíveis; falhas e limitações permanecem explícitas.

**Dependências:** TEC-01 e recortes implementados; parâmetros de PD-025/026 quando necessários. **Origem:** ADE-024–026; TSK-TRA-012, TSK-TRA-008, TSK-TRA-009; AUD-016.

**Evidências de entrega:** relação requisito/teste, logs e resultados por versão, procedimento e evidências das jornadas. **Testes planejados:** executar regressões pertinentes; validar alteração isolada; percorrer jornada entre perfis; verificar restauração/auditoria conforme CT-029.

<a id="matriz"></a>

## Matriz de importância

**Eixos escolhidos:** impacto na entrega × urgência. As classificações abaixo são propostas documentais, não estimativas nem decisões definitivas do analista. Responsáveis, datas e ordenação final permanecem a definir.

### Critérios da matriz

- **Impacto alto:** segurança/integridade, bloqueio da jornada ou fundamento marcado P0 na origem. A importância independe de estar na primeira sprint.
- **Impacto moderado:** capacidade necessária ao recorte de negócio/qualidade, sem bloqueio imediato identificado na origem. Não significa dispensável.
- **Urgente:** proposta de resolver agora porque apoia o primeiro recorte do morador, sua segurança/integridade ou uma decisão preparatória necessária. Revisar após confirmar versão, escopo e disponibilidade.
- **Não urgente nesta etapa:** planejar para o perfil/recorte subsequente ou avaliar futuro; não significa que cabe adiar além da deadline.

Se aparecer defeito atual de segurança ou integridade, reclassificar imediatamente conforme evidência, independentemente da etapa de perfil. Uma prioridade P0 comercial não torna toda a Loja urgente antes da jornada principal. Esforço não foi estimado.

| Impacto / urgência | Urgente | Não urgente nesta etapa |
|---|---|---|
| Alto | Refinar e resolver primeiro; manter qualidade | Planejar antes da jornada que depende do item; antecipar se houver risco ativo |
| Moderado | Reservar capacidade para o recorte atual | Ordenar nos próximos recortes conforme objetivo e dependências |
| Baixo | Validar a razão da urgência antes de consumir capacidade | Avaliar futuramente; não incorporar ao MVP automaticamente |

### Matriz das 66 atividades de execução

Vínculos levam à ficha padronizada. Atividades de decisão são trabalho de análise; não são funcionalidades adicionais.

| Atividade | Módulo | Impacto proposto | Urgência proposta | Justificativa |
|---|---|---|---|---|
| [TSK-MOR-001 — Cadastrar morador por convite](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-mor-001) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002, PD-003, PD-022. |
| [TSK-MOR-002 — Autenticar e encerrar sessão](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-mor-002) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002, PD-003, PD-023. |
| [TSK-MOR-003 — Recuperar acesso](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-mor-003) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003. |
| [TSK-MOR-004 — Consultar e editar perfil](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-mor-004) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003. |
| [TSK-ADM-001 — Gerenciar convites individuais](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-adm-001) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002. |
| [TSK-ADM-002 — Gerenciar convites compartilhados](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-adm-002) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002. |
| [TSK-ADM-003 — Cadastrar morador pela administração](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-adm-003) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-002, PD-003, PD-022. |
| [TSK-ADM-004 — Administrar acessos e vínculos](03-modulos/m01-acesso-usuarios-e-convites.md#tsk-adm-004) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002, PD-003, PD-023. |
| [TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido](03-modulos/m02-cadastro-de-residuos-e-estoque.md#tsk-mor-005) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-MOR-006 — Identificar produto por código de barras](03-modulos/m02-cadastro-de-residuos-e-estoque.md#tsk-mor-006) | M02 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004. |
| [TSK-MOR-007 — Importar itens de nota fiscal](03-modulos/m02-cadastro-de-residuos-e-estoque.md#tsk-mor-007) | M02 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004, PD-005, PD-022. |
| [TSK-MOR-008 — Cadastrar resíduo manualmente](03-modulos/m02-cadastro-de-residuos-e-estoque.md#tsk-mor-008) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-MOR-009 — Revisar itens antes da inclusão](03-modulos/m02-cadastro-de-residuos-e-estoque.md#tsk-mor-009) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-005. |
| [TSK-MOR-010 — Manter estoque e selecionar quantidades](03-modulos/m02-cadastro-de-residuos-e-estoque.md#tsk-mor-010) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-MOR-011 — Consultar pontos próximos compatíveis](03-modulos/m03-mapa-presenca-e-descarte.md#tsk-mor-011) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007. |
| [TSK-MOR-012 — Consultar detalhes do ponto](03-modulos/m03-mapa-presenca-e-descarte.md#tsk-mor-012) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007, PD-009, PD-019. |
| [TSK-MOR-013 — Encaminhar morador à navegação externa](03-modulos/m03-mapa-presenca-e-descarte.md#tsk-mor-013) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006, PD-007. |
| [TSK-MOR-014 — Validar presença por GPS](03-modulos/m03-mapa-presenca-e-descarte.md#tsk-mor-014) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-008. |
| [TSK-MOR-015 — Confirmar entrega e movimentar estoques](03-modulos/m03-mapa-presenca-e-descarte.md#tsk-mor-015) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006, PD-009. |
| [TSK-MOR-016 — Exibir confirmação e histórico de descartes](03-modulos/m03-mapa-presenca-e-descarte.md#tsk-mor-016) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-MOR-017 — Creditar recompensa básica provisória](03-modulos/m04-pontuacao-saldo-e-extrato.md#tsk-mor-017) | M04 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010. |
| [TSK-MOR-018 — Aplicar bônus de campanha](03-modulos/m04-pontuacao-saldo-e-extrato.md#tsk-mor-018) | M04 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-019 — Consultar saldo e extrato de pontos](03-modulos/m04-pontuacao-saldo-e-extrato.md#tsk-mor-019) | M04 | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010, PD-012. |
| [TSK-MOR-020 — Apurar metas de descarte das campanhas](03-modulos/m04-pontuacao-saldo-e-extrato.md#tsk-mor-020) | M04 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-021 — Debitar pontos com consistência](03-modulos/m04-pontuacao-saldo-e-extrato.md#tsk-mor-021) | M04 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-MOR-022 — Consultar a loja de recompensas](03-modulos/m05-loja-campanhas-vouchers-e-sorteios.md#tsk-mor-022) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-MOR-023 — Consultar detalhes e condições da campanha](03-modulos/m05-loja-campanhas-vouchers-e-sorteios.md#tsk-mor-023) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-024 — Administrar e participar de campanhas](03-modulos/m05-loja-campanhas-vouchers-e-sorteios.md#tsk-mor-024) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-025 — Administrar e adquirir vouchers](03-modulos/m05-loja-campanhas-vouchers-e-sorteios.md#tsk-mor-025) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-MOR-026 — Administrar sorteios e registrar participações](03-modulos/m05-loja-campanhas-vouchers-e-sorteios.md#tsk-mor-026) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-013, PD-021. |
| [TSK-PON-001 — Editar materiais aceitos](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-pon-001) | M06 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009. |
| [TSK-PON-002 — Acompanhar estoque e ocupação do ponto](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-pon-002) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009, PD-014, PD-018, PD-019. |
| [TSK-PON-003 — Sinalizar necessidade de coleta](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-pon-003) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009, PD-021. |
| [TSK-PON-004 — Solicitar coleta ao administrador](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-pon-004) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-ADM-005 — Cadastrar e administrar pontos de coleta](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-adm-005) | M06 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003, PD-009. |
| [TSK-ADM-006 — Gerir pontos temporários](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-adm-006) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009. |
| [TSK-ADM-007 — Classificar contexto e funcionamento do ponto](03-modulos/m06-pontos-de-coleta-e-painel-do-responsavel.md#tsk-adm-007) | M06 | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-009. |
| [TSK-COO-001 — Consultar e aceitar solicitação de coleta](03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md#tsk-coo-001) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-COO-002 — Fornecer rota e agendamento no painel](03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md#tsk-coo-002) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-017. |
| [TSK-COO-003 — Acompanhar andamento da coleta](03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md#tsk-coo-003) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-017, PD-018. |
| [TSK-COO-004 — Registrar materiais e pesos retirados](03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md#tsk-coo-004) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-018. |
| [TSK-ADM-008 — Cadastrar cooperativa e seus acessos](03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md#tsk-adm-008) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003, PD-016, PD-023. |
| [TSK-ADM-009 — Solicitar e agendar coleta administrativamente](03-modulos/m07-cooperativas-solicitacoes-e-execucao-de-coletas.md#tsk-adm-009) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-015, PD-021. |
| [TSK-ADM-010 — Preparar informações de pagamento](03-modulos/m08-pagamento-das-coletas.md#tsk-adm-010) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015, PD-016. |
| [TSK-ADM-011 — Iniciar pagamento por API](03-modulos/m08-pagamento-das-coletas.md#tsk-adm-011) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015, PD-016. |
| [TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento](03-modulos/m08-pagamento-das-coletas.md#tsk-adm-012) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-016. |
| [TSK-PON-005 — Consultar relatórios dos pontos](03-modulos/m09-administracao-indicadores-e-relatorios.md#tsk-pon-005) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019, PD-020. |
| [TSK-ADM-013 — Disponibilizar visão administrativa da operação](03-modulos/m09-administracao-indicadores-e-relatorios.md#tsk-adm-013) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-014 — Exibir gráficos e indicadores](03-modulos/m09-administracao-indicadores-e-relatorios.md#tsk-adm-014) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-020. |
| [TSK-ADM-015 — Representar planos e benefícios de dados](03-modulos/m10-planos-e-acesso-comercial-a-dados.md#tsk-adm-015) | M10 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-016 — Associar contratação e vigência de plano](03-modulos/m10-planos-e-acesso-comercial-a-dados.md#tsk-adm-016) | M10 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano](03-modulos/m10-planos-e-acesso-comercial-a-dados.md#tsk-tra-001) | M10 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja](03-modulos/m11-midias-e-comunicacao.md#tsk-adm-017) | M11 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-021, PD-024. |
| [TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6](02-perfis/05-transversal.md#tsk-tra-000) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-002 — Plataforma responsiva e compatibilidade](02-perfis/05-transversal.md#tsk-tra-002) | TRANSVERSAL | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-025. |
| [TSK-TRA-003 — Autenticação e autorização](02-perfis/05-transversal.md#tsk-tra-003) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003, PD-023. |
| [TSK-TRA-004 — Integridade, concorrência e idempotência](02-perfis/05-transversal.md#tsk-tra-004) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-005 — Resiliência de localização e consulta externa](02-perfis/05-transversal.md#tsk-tra-005) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004, PD-008. |
| [TSK-TRA-006 — Proteção de dados e privacidade](02-perfis/05-transversal.md#tsk-tra-006) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-022. |
| [TSK-TRA-007 — Desempenho e experiência](02-perfis/05-transversal.md#tsk-tra-007) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-025. |
| [TSK-TRA-008 — Disponibilidade, backups e recuperação](02-perfis/05-transversal.md#tsk-tra-008) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-026. |
| [TSK-TRA-009 — Auditoria e observabilidade](02-perfis/05-transversal.md#tsk-tra-009) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-022, PD-026. |
| [TSK-TRA-010 — Segurança das integrações](02-perfis/05-transversal.md#tsk-tra-010) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-TRA-011 — Segurança e desempenho de mídias](02-perfis/05-transversal.md#tsk-tra-011) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-TRA-012 — Padronização e entrega técnica](02-perfis/05-transversal.md#tsk-tra-012) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-013 — Evolução e capacidade](02-perfis/05-transversal.md#tsk-tra-013) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-025. |

### Recortes técnicos vinculados

Não somar estes recortes novamente às atividades de origem.

| Recorte | Impacto proposto | Urgência proposta | Motivo |
|---|---|---|---|
| TEC-01 — Ambiente e migrações | Alto | Urgente | Base reproduzível para avaliação e persistência |
| TEC-02 — Materiais e unidades | Alto | Urgente | Contrato comum da jornada e dos saldos |
| TEC-03 — Confirmação do descarte | Alto | Urgente | Correção de duplicidade e resultado consistente |
| TEC-04 — Retirada e conciliação | Alto | Não urgente nesta etapa | Preparar antes da cooperativa; antecipar se defeito estiver ativo |
| TEC-05 — Autorização | Alto | Urgente | Restrição de acesso acompanha todas as entregas |
| TEC-06 — Regressões e entrega | Alto | Urgente | Iniciar com a base e acompanhar todas as sprints |

[Abrir fichas técnicas](../03-tecnologia/02-arquitetura-e-banco.md).

### Revisão pelo analista/equipe

Confirmar o recorte indispensável, a existência atual dos bloqueios e as horas disponíveis. Usar impacto e urgência junto às dependências para ordenar o backlog. Preencher responsáveis e datas nas fichas; atualizar a proposta quando houver evidência nova. A matriz não autoriza excluir itens nem confirma que todo o backlog cabe até 20/11/2026.



<a id="testes"></a>

## Casos integrados de validação

Desdobramento dos 29 cenários da seção 13 da V6. São casos planejados; não foram executados nesta adequação. Complementam os casos das atividades e os requisitos de qualidade. Dados numéricos aqui são exemplos sintéticos de avaliação; políticas e valores comerciais precisam de aprovação. Condições não definidas impedem homologação do trecho dependente.

Para cada execução preencher: executor, data, ambiente, versão, resultado observado, evidência e defeito. Resultado esperado e observado são campos separados. Testes de integridade exigem conferir registros persistidos; concorrência deve usar o banco e os controles do ambiente real de avaliação.

### CT-001 — Usar convite individual duas vezes e em paralelo

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-001, TSK-MOR-001.

#### CT-001-01 — uso inicial

**Pré-condições e dados:** Convite individual válido e ainda não usado; dois cadastros sintéticos distintos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir o primeiro cadastro.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma conta criada e um consumo do convite.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-001-02 — reutilização

**Pré-condições e dados:** Convite individual válido e ainda não usado; dois cadastros sintéticos distintos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Tentar um segundo cadastro com o convite consumido.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Segundo cadastro negado, sem nova conta.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-001-03 — concorrência

**Pré-condições e dados:** Convite individual válido e ainda não usado; dois cadastros sintéticos distintos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar simultaneamente dois cadastros com o mesmo convite novo.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Apenas um cadastro autorizado; consumo coerente.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-002 — Concorrer pela última vaga de convite compartilhado

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-002, TSK-MOR-001.

#### CT-002-01 — última vaga

**Pré-condições e dados:** Convite compartilhado válido com uma única vaga restante; limite aprovado.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar simultaneamente dois cadastros distintos.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Somente um consome a última vaga; limite não excedido.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-003 — Abrir link expirado e enviar cadastro inválido

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-001, TSK-MOR-001.

#### CT-003-01 — expiração

**Pré-condições e dados:** Convites e dados sintéticos; política de validade aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar cadastro com convite expirado.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Nenhuma conta criada nem vaga consumida.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-003-02 — dados inválidos

**Pré-condições e dados:** Convites e dados sintéticos; política de validade aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar dados inválidos com convite disponível.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Nenhuma conta criada; disponibilidade do convite preservada.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-004 — Registrar manualmente duas latas

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-008, TSK-MOR-010.

#### CT-004-01 — registro

**Pré-condições e dados:** Morador autorizado; estoque e pontos iniciais registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Cadastrar manualmente duas latas válidas.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Estoque aumenta em duas latas; pontos não mudam.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-005 — Importar nota com PET, lata e item sem material identificável

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-007, TSK-MOR-009.

#### CT-005-01 — revisão

**Pré-condições e dados:** Fonte aprovada com nota sintética contendo PET, lata e item sem material identificável.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Importar, revisar e selecionar itens; complementar material ausente manualmente.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Apenas itens revisados e selecionados seguem; nenhum descarte ou crédito automático.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-006 — Falhar scanner/consulta de produto/nota

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-006, TSK-MOR-007, TSK-MOR-008.

#### CT-006-01 — scanner

**Pré-condições e dados:** Morador autorizado; simular falha controlada no ambiente de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Impedir leitura do código e usar entrada manual.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Falha compreensível e alternativa manual disponível; nenhum dado inventado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-006-02 — produto

**Pré-condições e dados:** Morador autorizado; simular falha controlada no ambiente de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Provocar indisponibilidade da consulta de produto.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mensagem de falha e alternativa manual; sem crédito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-006-03 — nota

**Pré-condições e dados:** Morador autorizado; simular falha controlada no ambiente de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Provocar indisponibilidade da consulta da nota.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mensagem de falha e alternativa manual; sem crédito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-007 — Descarte rápido de lata de Coca-Cola identificada

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02, M03, M04. **Atividades:** TSK-MOR-005, TSK-MOR-014, TSK-MOR-015, TSK-MOR-017.

#### CT-007-01 — rápido

**Pré-condições e dados:** Lata identificável, ponto compatível, GPS válido conforme política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Revisar item, escolher ponto, abrir rota externa, retornar com GPS novo e confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Um descarte concluído e dez pontos básicos; sem etapa obrigatória de estoque permanente.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-008 — Selecionar parte do estoque para entrega

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02, M03. **Atividades:** TSK-MOR-010, TSK-MOR-015.

#### CT-008-01 — parcial

**Pré-condições e dados:** Estoque pessoal com cinco latas; selecionar duas; ponto e presença válidos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Selecionar duas latas e confirmar a entrega.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Seleção não baixa antecipadamente; após confirmação restam três latas no estoque pessoal.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-009 — Entregar PET em ponto que não aceita PET

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03, M06. **Atividades:** TSK-MOR-011, TSK-MOR-015, TSK-PON-001.

#### CT-009-01 — incompatível

**Pré-condições e dados:** PET selecionado e ponto que não aceita PET; saldos iniciais registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Tentar confirmar entrega de PET nesse ponto.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Confirmação negada, sem baixa, entrada ou crédito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-010 — Negar GPS, usar posição antiga ou fora do raio aprovado

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03. **Atividades:** TSK-MOR-014, TSK-MOR-015.

#### CT-010-01 — permissão negada

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Negar permissão de localização e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem conclusão, baixa ou crédito; orientação para recuperar.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-010-02 — posição antiga

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Fornecer leitura além da idade aprovada e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Presença recusada; sem efeitos de descarte.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-010-03 — fora do raio

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Fornecer leitura fora do raio aprovado e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Presença recusada; sem efeitos de descarte.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-010-04 — imprecisa

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Fornecer leitura além da precisão aprovada e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Presença recusada; sem efeitos de descarte.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-011 — Reenviar confirmação e provocar falha concorrente

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03, M04. **Atividades:** TSK-MOR-015, TSK-MOR-017, TSK-TRA-004.

#### CT-011-01 — reenvio

**Pré-condições e dados:** Operação identificável com saldo disponível; banco de avaliação com controles de concorrência reais.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Confirmar e reenviar a mesma operação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Um descarte, uma baixa, uma entrada e um crédito básico.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-011-02 — falha parcial

**Pré-condições e dados:** Operação identificável com saldo disponível; banco de avaliação com controles de concorrência reais.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Provocar falha controlada durante a transação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem sucesso parcial ou saldos divergentes.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-011-03 — concorrência

**Pré-condições e dados:** Operação identificável com saldo disponível; banco de avaliação com controles de concorrência reais.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar operações concorrentes disputando o mesmo saldo.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem saldo negativo ou duplicação; resultados coerentes com operações autorizadas.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-012 — Concluir descarte elegível a campanha

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M04, M05. **Atividades:** TSK-MOR-018, TSK-MOR-020, TSK-MOR-024.

#### CT-012-01 — bônus

**Pré-condições e dados:** Campanha, período e elegibilidade aprovados; descarte elegível.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir descarte elegível e consultar lançamentos.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Básico e bônus separados e vinculados; regra aplicada uma vez.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-013 — Comprar voucher sem saldo e depois com saldo

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M04, M05. **Atividades:** TSK-MOR-021, TSK-MOR-025.

#### CT-013-01 — saldo insuficiente

**Pré-condições e dados:** Oferta e custo aprovados, estoque disponível e contas sintéticas.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar voucher com saldo inferior ao custo.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem emissão nem débito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-013-02 — saldo suficiente

**Pré-condições e dados:** Oferta e custo aprovados, estoque disponível e contas sintéticas.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar e confirmar voucher com saldo suficiente.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma aquisição e débito do custo aprovado, vinculados e consistentes.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-014 — Participar em sorteio conforme regra aprovada

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M05. **Atividades:** TSK-MOR-026.

#### CT-014-01 — participação

**Pré-condições e dados:** Sorteio e regras aprovados; participante elegível e saldo quando necessário.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Confirmar participação e reenviar a mesma operação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Registro e custo conforme regra; sem duplicidade involuntária.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-015 — Encerrar ponto temporário com material remanescente

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-ADM-006.

#### CT-015-01 — encerramento

**Pré-condições e dados:** Ponto temporário com estoque remanescente e encerramento configurado.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Encerrar o ponto e consultar busca, estoque e histórico.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Ponto não oferecido como disponível; remanescentes e histórico preservados.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-016 — Editar materiais aceitos no ponto

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-PON-001.

#### CT-016-01 — materiais

**Pré-condições e dados:** Responsável vinculado; ponto com materiais aceitos e estoque anterior.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Editar materiais aceitos e repetir consulta do ponto.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Consulta atualizada; estoque anterior preservado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-017 — Responsável solicitar retirada

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-PON-004.

#### CT-017-01 — pedido

**Pré-condições e dados:** Responsável vinculado e necessidade de retirada registrada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar solicitação de coleta e consultar painéis.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Pedido ao administrador; nenhuma atribuição automática à cooperativa.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-018 — Administrador solicitar e cooperativa aceitar

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07. **Atividades:** TSK-ADM-009, TSK-COO-001.

#### CT-018-01 — aceite

**Pré-condições e dados:** Administrador autorizado; cooperativa cadastrada; política de agendamento aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Administrador atribui e agenda; cooperativa atribuída aceita.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Pedido, atribuição, horário e aceite rastreáveis.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-019 — Cooperativa registrar 12 kg PET e 3 kg alumínio

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07. **Atividades:** TSK-COO-004.

#### CT-019-01 — pesagem

**Pré-condições e dados:** Coleta aceita, cooperativa atribuída, materiais PET/alumínio e pesos de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Registrar 12 kg de PET e 3 kg de alumínio.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Pesos por material vinculados à coleta; nenhum novo ponto básico ao morador.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-020 — Registrar coleta parcial

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06, M07. **Atividades:** TSK-PON-002, TSK-COO-004.

#### CT-020-01 — retirada parcial

**Pré-condições e dados:** Retirada parcial, entradas posteriores e remanescentes; conciliação de unidades/pesos aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir coleta parcial e consultar movimentos e saldos.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Movimento conforme regra aprovada; remanescentes e novas entradas preservados, sem zerar por inferência.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-021 — Concluir coleta sem pagar

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07, M08. **Atividades:** TSK-COO-004, TSK-ADM-012.

#### CT-021-01 — separação de estados

**Pré-condições e dados:** Coleta aceita; pagamento ainda não confirmado.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir coleta sem executar pagamento e consultar ambos os estados.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Conclusão operacional não declara pagamento confirmado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-022 — Administrador iniciar pagamento e repetir após timeout

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M08. **Atividades:** TSK-ADM-011.

#### CT-022-01 — timeout

**Pré-condições e dados:** Provedor/condições aprovados, ambiente de avaliação e ordem identificável.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Iniciar pagamento, provocar timeout controlado e consultar/repetir a mesma ordem.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma ordem lógica e resultado conciliável; sem nova cobrança por repetição.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-023 — Receber retorno de pagamento inválido, repetido ou incerto

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M08. **Atividades:** TSK-ADM-012.

#### CT-023-01 — retorno inválido

**Pré-condições e dados:** Retornos sintéticos do provedor no ambiente de avaliação; política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Processar retorno sem autenticidade ou identificação válida.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem confirmação financeira falsa.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-023-02 — retorno repetido

**Pré-condições e dados:** Retornos sintéticos do provedor no ambiente de avaliação; política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Processar duas vezes o mesmo retorno confirmado.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma confirmação lógica; sem duplicidade.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-023-03 — retorno incerto

**Pré-condições e dados:** Retornos sintéticos do provedor no ambiente de avaliação; política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Processar resultado pendente/incerto e consultar situação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mantém pendência conforme regra, sem declarar recebimento confirmado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-024 — Solicitar relatório sem benefício de plano

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M09, M10. **Atividades:** TSK-PON-005, TSK-TRA-001.

#### CT-024-01 — sem benefício

**Pré-condições e dados:** Perfil/vínculo autorizado, mas plano sem benefício de relatório; matriz aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar relatório pela interface e pelo serviço.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Restrição de plano aplicada, inclusive ao administrador segundo regra aprovada.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-025 — Ter plano pago e pedir dados de ponto sem autorização

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M10. **Atividades:** TSK-TRA-001.

#### CT-025-01 — sem vínculo

**Pré-condições e dados:** Usuário com plano pago e sem vínculo com outro ponto.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar dados do ponto não autorizado diretamente ao serviço.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Acesso negado; benefício pago não cria vínculo.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-026 — Exibir ativo, aberto e conectado

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M09. **Atividades:** TSK-ADM-014.

#### CT-026-01 — indicadores

**Pré-condições e dados:** Definições e janela temporal de ativo, aberto e conectado aprovadas.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Preparar registros em estados distintos e consultar indicadores.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Cada indicador usa seu conceito e janela; não confunde atividade com abertura ou conexão.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-027 — Adicionar imagem/vídeo válido e inválido

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M11. **Atividades:** TSK-ADM-017.

#### CT-027-01 — mídia válida

**Pré-condições e dados:** Administrador autorizado; formatos, tamanho/duração e publicação aprovados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar imagem/vídeo permitido e consultar oferta.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mídia aceita disponível e condições essenciais também em texto.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-027-02 — mídia inválida

**Pré-condições e dados:** Administrador autorizado; formatos, tamanho/duração e publicação aprovados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar arquivo fora da política aprovada.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Arquivo rejeitado, sem publicação falsa ou perda das condições em texto.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-028 — Abrir confirmação e seguir para Home ou Loja

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03. **Atividades:** TSK-MOR-016.

#### CT-028-01 — Home

**Pré-condições e dados:** Descarte já confirmado e saldos registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Abrir confirmação e seguir para Home.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Navegação funciona; descarte e saldos não são repetidos.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-028-02 — Loja

**Pré-condições e dados:** Descarte já confirmado e saldos registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Abrir confirmação e seguir para Loja.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Navegação funciona; descarte e saldos não são repetidos.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-029 — Restaurar backup e investigar crédito/pagamento

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** TRANSVERSAL. **Atividades:** TSK-TRA-008, TSK-TRA-009.

#### CT-029-01 — restauração

**Pré-condições e dados:** Backup do ambiente de avaliação e metas de recuperação aprovadas; registros de crédito/pagamento.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Restaurar backup isoladamente e verificar dados/jornadas.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Recuperação medida e comparada às metas; nenhum uso de banco real.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

#### CT-029-02 — auditoria

**Pré-condições e dados:** Backup do ambiente de avaliação e metas de recuperação aprovadas; registros de crédito/pagamento.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Localizar a cadeia de eventos de crédito/pagamento na base restaurada.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Origem e efeitos consultáveis e coerentes com permissões.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.
