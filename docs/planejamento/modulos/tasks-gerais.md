# Residuum — documento geral das tasks

**Atualização:** 13/10/2026. **Deadline informada:** 20/11/2026.

Este documento reúne as 93 atividades existentes no modelo acordado: nome, objetivo, responsável, data de início, data de entrega, descrição, regras, critérios de aceite, dependências e evidências de entrega. Preserva os módulos, as referências e o detalhamento original, acrescenta testes planejados e aplica as decisões posteriores documentadas.

**Sequência das entregas:** morador → ponto de coleta → cooperativa → administrador. Fundamentos de ambiente, banco, autorização, convites e configuração mínima acompanham a jornada que depende deles. Responsáveis, datas individuais, estimativas e escolha final de sprint ficam para o analista/equipe preencherem.

Os 27 pacotes ADE agrupam o mesmo trabalho TSK. Os seis recortes técnicos incluídos aqui desdobram esse trabalho; não devem ser contados como novas funcionalidades. Classificações de importância e urgência são propostas para revisão. Nenhum teste foi executado para esta adequação documental.

## Navegação

- [Fluxo de atividades: desenvolvimento, QA e conclusão](#fluxo-de-atividades)
- [1. Morador](#morador)
- [2. Ponto de coleta](#ponto)
- [3. Cooperativa](#cooperativa)
- [4. Administrador](#administrador)
- [5. Autorização compartilhada, ambiente e qualidade](#compartilhadas)
- [6. Decisões e investigação](#decisoes)
- [7. Arquitetura, refatoração e banco](#tecnicas)
- [8. Matriz de importância](#matriz)
- [9. Casos integrados de validação](#testes)

**Documento separado:** [Proposta de Scrum e sprints](scrum-e-sequencia.md).

**Consulta alternativa:** [Guia e fichas por módulo](README.md).

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

Os casos abaixo são planejados, inclusive verificações documentais de decisões. Evidência exigida está separada de resultado produzido. Os testes anteriores da [demonstração do morador](../../ux/morador-v6-validacao.md) não homologam o backend integrado; o [diagnóstico](../../diagnostico/comparativo-mvp-estagio-v1.md) tem versões e limites próprios; o [teste com moradores](../../ux/morador-v6-teste-usuarios.md) permanece sem sessões humanas executadas.

A decisão de 10/10/2026 foi incorporada: descarte rápido usa rascunho em memória, abandono elimina os itens sem gravar no estoque, rota externa em outra aba preserva o fluxo e o retorno exige GPS novo. Falhas recuperáveis preservam itens enquanto a pessoa permanece no fluxo. PD-006 continua parcial para contratos reais, concorrência e confirmação. Parâmetros GPS demonstrativos e regras comerciais pendentes não foram transformados em políticas aprovadas.

<a id="morador"></a>

## 1. Morador

- [TSK-MOR-001 — Cadastrar morador por convite](#tsk-mor-001)
- [TSK-MOR-002 — Autenticar e encerrar sessão](#tsk-mor-002)
- [TSK-MOR-003 — Recuperar acesso](#tsk-mor-003)
- [TSK-MOR-004 — Consultar e editar perfil](#tsk-mor-004)
- [TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido](#tsk-mor-005)
- [TSK-MOR-006 — Identificar produto por código de barras](#tsk-mor-006)
- [TSK-MOR-007 — Importar itens de nota fiscal](#tsk-mor-007)
- [TSK-MOR-008 — Cadastrar resíduo manualmente](#tsk-mor-008)
- [TSK-MOR-009 — Revisar itens antes da inclusão](#tsk-mor-009)
- [TSK-MOR-010 — Manter estoque e selecionar quantidades](#tsk-mor-010)
- [TSK-MOR-011 — Consultar pontos próximos compatíveis](#tsk-mor-011)
- [TSK-MOR-012 — Consultar detalhes do ponto](#tsk-mor-012)
- [TSK-MOR-013 — Encaminhar morador à navegação externa](#tsk-mor-013)
- [TSK-MOR-014 — Validar presença por GPS](#tsk-mor-014)
- [TSK-MOR-015 — Confirmar entrega e movimentar estoques](#tsk-mor-015)
- [TSK-MOR-016 — Exibir confirmação e histórico de descartes](#tsk-mor-016)
- [TSK-MOR-017 — Creditar recompensa básica provisória](#tsk-mor-017)
- [TSK-MOR-018 — Aplicar bônus de campanha](#tsk-mor-018)
- [TSK-MOR-019 — Consultar saldo e extrato de pontos](#tsk-mor-019)
- [TSK-MOR-020 — Apurar metas de descarte das campanhas](#tsk-mor-020)
- [TSK-MOR-021 — Debitar pontos com consistência](#tsk-mor-021)
- [TSK-MOR-022 — Consultar a loja de recompensas](#tsk-mor-022)
- [TSK-MOR-023 — Consultar detalhes e condições da campanha](#tsk-mor-023)
- [TSK-MOR-024 — Administrar e participar de campanhas](#tsk-mor-024)
- [TSK-MOR-025 — Administrar e adquirir vouchers](#tsk-mor-025)
- [TSK-MOR-026 — Administrar sorteios e registrar participações](#tsk-mor-026)

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

**Exceções:** campos inválidos, e-mail já cadastrado e falha de gravação não devem consumir vaga nem duplicar a conta. A política de verificação de e-mail precisa de validação.

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

- **PD-001:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa
- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-MOR-001 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-MOR-001](m01.md#tsk-mor-001).

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

- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-005; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-002 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-MOR-002](m01.md#tsk-mor-002).

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

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-006; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-003 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-MOR-003](m01.md#tsk-mor-003).

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

**Exceções e resultado:** usuário não pode editar registros de descarte ou saldo por esse formulário. Alteração falha não deve substituir os dados válidos anteriores. Não é permitido consultar o perfil privado de outro morador.

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

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-007; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-004 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-MOR-004](m01.md#tsk-mor-004).

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

**Exceções e resultado:** câmera negada não elimina a entrada manual. Cancelamento não conclui descarte nem concede pontos. A identificação da intenção deve ser preservada ao trocar a forma de cadastro.

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

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004; ficha [TSK-MOR-005 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

**Casos detalhados e ficha de origem:** [TSK-MOR-005](m02.md#tsk-mor-005).

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

**Exceções:** código ilegível, produto não encontrado e fonte indisponível permitem cadastro manual. Código de barras não comprova compra, consumo ou posse exclusiva da unidade física. A mesma leitura não pode multiplicar itens involuntariamente.

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

- **PD-004:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-006 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007).

**Casos detalhados e ficha de origem:** [TSK-MOR-006](m02.md#tsk-mor-006).

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

**Rastreabilidade:** RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-007 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

**Casos detalhados e ficha de origem:** [TSK-MOR-007](m02.md#tsk-mor-007).

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

**Exceções e resultado:** não aceitar quantidade zero/negativa ou material fora do escopo; informar o campo inválido sem perder os demais dados válidos.

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

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004; ficha [TSK-MOR-008 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-005](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005).

**Casos detalhados e ficha de origem:** [TSK-MOR-008](m02.md#tsk-mor-008).

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

- **PD-005:** Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005; ficha [TSK-MOR-009 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-007](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008).

**Casos detalhados e ficha de origem:** [TSK-MOR-009](m02.md#tsk-mor-009).

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

**Decisão posterior — 10/10/2026:** o caminho rápido mantém itens somente na memória do fluxo, sem inclusão automática no estoque. Cancelar, sair para outra área, recarregar ou fechar a aba elimina o rascunho. Abrir a rota em outra aba preserva o fluxo; retornar exige GPS novo. Falhas recuperáveis preservam os itens enquanto a pessoa continua no fluxo. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes em PD-006; ver [handoff](../../ux/morador-v6-handoff.md#jornada-e-regras-aprovadas).

**Exceções:** impedir seleção superior à quantidade disponível; evitar gravação duplicada por repetição de confirmação. Exclusão e ajustes manuais do estoque são PD-006.

**Regras:**

Regras de origem: RN-004, RN-007. Conferir texto e situação na V6.

**Exceções:** impedir seleção superior à quantidade disponível; evitar gravação duplicada por repetição de confirmação. Exclusão e ajustes manuais do estoque são PD-006.

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

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007; ficha [TSK-MOR-010 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-005](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-005), [ADE-006](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006).

**Casos detalhados e ficha de origem:** [TSK-MOR-010](m02.md#tsk-mor-010).

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

**Rastreabilidade:** RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007; ficha [TSK-MOR-011 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-009](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

**Casos detalhados e ficha de origem:** [TSK-MOR-011](m03.md#tsk-mor-011).

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

**Exceções e resultado:** diferenciar ponto desativado, fora do período temporário e condição de ocupação. Regra de recebimento durante fechamento ou lotação precisa ser definida; não se presume que ponto cheio aceite novos descartes.

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

- **PD-007:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador
- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento
- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-016; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-012 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-009](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

**Casos detalhados e ficha de origem:** [TSK-MOR-012](m03.md#tsk-mor-012).

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

**Exceções:** indisponibilidade do navegador de mapas deve preservar ponto e itens. Não marcar chegada ou descarte com base apenas na abertura da rota. A rota abre em outra aba e conserva o fluxo; no retorno, exigir GPS novo. Fechar a aba do fluxo elimina o rascunho rápido conforme decisão de 10/10/2026; contratos reais continuam sujeitos a PD-006.

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

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.
- **PD-007:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-017; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-013 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-009](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009).

**Casos detalhados e ficha de origem:** [TSK-MOR-013](m03.md#tsk-mor-013).

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

**Exceções:** fora do raio, posição antiga, baixa precisão ou falha de obtenção não concluem entrega. Exibir impedimento e permitir nova tentativa conforme política. GPS é indício de proximidade, não prova de entrega física. Não existe alternativa por QR ou aprovação retroativa neste escopo.

**Critérios de aceite:**

- **CA-01:** Dado posição aceita pelos parâmetros validados, quando a presença é verificada, então o sistema permite confirmar o descarte no ponto escolhido.
- **CA-02:** Dado GPS indisponível ou posição rejeitada, quando tenta concluir, então não há baixa de itens nem recompensa e o motivo é apresentado.

**Dependências:**

TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-008, PD-027. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-008:** Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença
- **PD-027:** Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006; ficha [TSK-MOR-014 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-010](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010).

**Casos detalhados e ficha de origem:** [TSK-MOR-014](m03.md#tsk-mor-014).

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

**Exceções:** repetição, concorrência, incompatibilidade ou falha não devem gerar baixa parcial, saldo negativo ou crédito duplicado. Estimativas do ponto não se tornam peso medido. Bônus deve ter vínculo rastreável, sem reaplicar crédito básico se processado posteriormente.

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

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.
- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008; ficha [TSK-MOR-015 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-006](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-006), [ADE-011](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

**Casos detalhados e ficha de origem:** [TSK-MOR-015](m03.md#tsk-mor-015).

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

**Exceções:** falha não usa tela de sucesso. Bônus ainda não confirmado não aparece como já creditado. Histórico deve distinguir registro no estoque de entrega realizada.

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

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-020; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-016 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

**Casos detalhados e ficha de origem:** [TSK-MOR-016](m03.md#tsk-mor-016).

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

**Rastreabilidade:** RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016; ficha [TSK-MOR-017 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-011](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011).

**Casos detalhados e ficha de origem:** [TSK-MOR-017](m04.md#tsk-mor-017).

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

**Exceções:** não presumir que a compra gera bônus nem que campanhas se acumulam. Eventos manuais podem não comprovar um produto específico. Elegibilidade, janela de apuração, repetição, limites e evidência do produto são PD-011.

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

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-018 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-018](m04.md#tsk-mor-018).

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

**Exceções e resultado:** extrato de outra pessoa não é acessível. Consulta falha não deve ser confundida com saldo zero. Expiração, ajustes administrativos e estornos ainda exigem regras aprovadas em PD-010 e PD-012.

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

- **PD-010:** Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos
- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-023; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-019 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-012](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012).

**Casos detalhados e ficha de origem:** [TSK-MOR-019](m04.md#tsk-mor-019).

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

**Exceções:** registro no estoque não conta como descarte. Não deduzir compra ou entrega a partir da leitura de código. Definir o que comprova o produto específico e se descartes anteriores à adesão contam em PD-011.

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

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009; ficha [TSK-MOR-020 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-020](m04.md#tsk-mor-020).

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

**Exceções:** saldo insuficiente ou oferta indisponível não gera débito. Duas compras simultâneas devem respeitar saldo e limite. Não se presume pagamento complementar em dinheiro ou conversão monetária dos pontos.

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

- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010; ficha [TSK-MOR-021 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-021](m04.md#tsk-mor-021).

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

**Exceções:** catálogo vazio deve informar ausência de ofertas. Ofertas não publicadas não são apresentadas como compráveis. A loja comercializa benefícios com pontos; cashback financeiro está fora do MVP.

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

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010; ficha [TSK-MOR-022 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-022](m05.md#tsk-mor-022).

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

**Exceções:** não anunciar recompensa sem regra publicada. A campanha deve esclarecer se exige descarte, uso de pontos ou outra condição aprovada; leitura de nota não comprova automaticamente descarte. Condições de participação e frequência são PD-011.

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

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019; ficha [TSK-MOR-023 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-023](m05.md#tsk-mor-023).

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

**Exceções:** não herdar a obrigação da V5 de ter parceiro confirmado antes de toda campanha. Alteração de campanha já participada, adesão automática/manual e bônus acumulados dependem de PD-011. Participação com custo depende de confirmação e RF-MVP-025.

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

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019; ficha [TSK-MOR-024 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-019](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-019).

**Casos detalhados e ficha de origem:** [TSK-MOR-024](m05.md#tsk-mor-024).

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

**Exceções:** não emitir voucher sem aquisição confirmada nem cobrar por oferta indisponível. Limite de unidades, cancelamento e devolução de pontos precisam de validação.

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

- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-025 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-025](m05.md#tsk-mor-025).

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

**Rastreabilidade:** RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019; ficha [TSK-MOR-026 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-020](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020).

**Casos detalhados e ficha de origem:** [TSK-MOR-026](m05.md#tsk-mor-026).

<a id="ponto"></a>

## 2. Ponto de coleta

- [TSK-PON-001 — Editar materiais aceitos](#tsk-pon-001)
- [TSK-PON-002 — Acompanhar estoque e ocupação do ponto](#tsk-pon-002)
- [TSK-PON-003 — Sinalizar necessidade de coleta](#tsk-pon-003)
- [TSK-PON-004 — Solicitar coleta ao administrador](#tsk-pon-004)
- [TSK-PON-005 — Consultar relatórios dos pontos](#tsk-pon-005)

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

**Exceções:** deixar de aceitar um material não elimina seu histórico ou estoque existente. Comportamento para usuário que já iniciou deslocamento e alterações simultâneas é PD-009.

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

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003; ficha [TSK-PON-001 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-013](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-PON-001](m06.md#tsk-pon-001).

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

**Exceções:** não converter número de latas em kg reais sem regra validada. Método de ocupação, unidade da capacidade e tratamento de coleta parcial são PD-009 e PD-014. O painel operacional e os relatórios pagos são capacidades distintas; acesso mínimo precisa de PD-019.

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

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento
- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados
- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021; ficha [TSK-PON-002 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-014](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014), [ADE-017](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

**Casos detalhados e ficha de origem:** [TSK-PON-002](m06.md#tsk-pon-002).

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

**Exceções:** cálculo de nível, frequência de atualização, alertas externos e repetição são PD-009 e PD-021. Um alerta por si só não agenda retirada nem comprova que ela aconteceu.

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

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento
- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013; ficha [TSK-PON-003 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-014](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-014).

**Casos detalhados e ficha de origem:** [TSK-PON-003](m06.md#tsk-pon-003).

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

**Exceções:** não gerar solicitações duplicadas por repetição de envio. Regras para múltiplos pedidos abertos, cancelamento e informações opcionais são PD-014.

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

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-PON-004 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-PON-004](m06.md#tsk-pon-004).

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

**Exceções:** peso coletado não significa material vendido ou comprado. Expressões como “quantas pessoas passaram” precisam de PD-020: GPS de confirmação não mede visitantes que não registraram eventos. Download CSV/PDF é PD-019, não inclusão automática.

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

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo
- **PD-020:** Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-PON-005 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022), [ADE-023](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

**Casos detalhados e ficha de origem:** [TSK-PON-005](m09.md#tsk-pon-005).

<a id="cooperativa"></a>

## 3. Cooperativa

- [TSK-COO-001 — Consultar e aceitar solicitação de coleta](#tsk-coo-001)
- [TSK-COO-002 — Fornecer rota e agendamento no painel](#tsk-coo-002)
- [TSK-COO-003 — Acompanhar andamento da coleta](#tsk-coo-003)
- [TSK-COO-004 — Registrar materiais e pesos retirados](#tsk-coo-004)

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

**Exceções:** outra cooperativa não pode aceitar; repetição não cria nova coleta. Recusa, silêncio, prazo de resposta e cancelamento aguardam PD-014. Não existe oferta indiscriminada para primeira cooperativa que responder.

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

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013; ficha [TSK-COO-001 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-COO-001](m07.md#tsk-coo-001).

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

**Exceções:** falha da API deve manter identificação do ponto e compromisso acessíveis. Origem do trajeto, navegação externa/interna da cooperativa, atualização da rota e estimativa de chegada são PD-017. Não inclui prova do caminho percorrido ou rastreamento contínuo.

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

- **PD-017:** Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014; ficha [TSK-COO-002 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-016](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

**Casos detalhados e ficha de origem:** [TSK-COO-002](m07.md#tsk-coo-002).

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

**Exceções:** estados de recusada, cancelada ou concluída após revisão administrativa não são decisões confirmadas. Regras de correção e início real de execução aguardam PD-014 e PD-018.

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

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-017:** Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo
- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-042; RNF-MVP-001, RNF-MVP-002; ficha [TSK-COO-003 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015), [ADE-016](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

**Casos detalhados e ficha de origem:** [TSK-COO-003](m07.md#tsk-coo-003).

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

**Exceções:** rejeitar peso negativo e registrar falha sem concluir. Coleta parcial, peso zero, correção e reconciliação com embalagens em estoque são PD-014 e PD-018. Não zerar automaticamente todo o ponto só porque houve coleta.

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

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016; ficha [TSK-COO-004 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-004](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-017](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017).

**Casos detalhados e ficha de origem:** [TSK-COO-004](m07.md#tsk-coo-004).

<a id="administrador"></a>

## 4. Administrador

- [TSK-ADM-001 — Gerenciar convites individuais](#tsk-adm-001)
- [TSK-ADM-002 — Gerenciar convites compartilhados](#tsk-adm-002)
- [TSK-ADM-003 — Cadastrar morador pela administração](#tsk-adm-003)
- [TSK-ADM-004 — Administrar acessos e vínculos](#tsk-adm-004)
- [TSK-ADM-005 — Cadastrar e administrar pontos de coleta](#tsk-adm-005)
- [TSK-ADM-006 — Gerir pontos temporários](#tsk-adm-006)
- [TSK-ADM-007 — Classificar contexto e funcionamento do ponto](#tsk-adm-007)
- [TSK-ADM-008 — Cadastrar cooperativa e seus acessos](#tsk-adm-008)
- [TSK-ADM-009 — Solicitar e agendar coleta administrativamente](#tsk-adm-009)
- [TSK-ADM-010 — Preparar informações de pagamento](#tsk-adm-010)
- [TSK-ADM-011 — Iniciar pagamento por API](#tsk-adm-011)
- [TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento](#tsk-adm-012)
- [TSK-ADM-013 — Disponibilizar visão administrativa da operação](#tsk-adm-013)
- [TSK-ADM-014 — Exibir gráficos e indicadores](#tsk-adm-014)
- [TSK-ADM-015 — Representar planos e benefícios de dados](#tsk-adm-015)
- [TSK-ADM-016 — Associar contratação e vigência de plano](#tsk-adm-016)
- [TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja](#tsk-adm-017)

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

- **PD-001:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa
- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-001 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-ADM-001](m01.md#tsk-adm-001).

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

- **PD-001:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa
- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-002 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-ADM-002](m01.md#tsk-adm-002).

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

- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-ADM-003 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-ADM-003](m01.md#tsk-adm-003).

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

**Exceções:** um vínculo não autoriza acesso a todos os pontos da rede. Exclusão física de contas e acúmulo de papéis não são definidos. O cadastro da organização não deve produzir uma senha compartilhada entre todos os operadores.

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

- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-004 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001).

**Casos detalhados e ficha de origem:** [TSK-ADM-004](m01.md#tsk-adm-004).

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

**Exceções:** cadastro incompleto não deve produzir localização enganosa; desativação preserva histórico. Documentos exigidos para o ponto são PD-003; não exigir CNPJ de todo local residencial por inferência.

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

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-005 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-ADM-005](m06.md#tsk-adm-005).

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

**Exceções:** rejeitar término anterior ao início. Encerramento com materiais remanescentes não pode apagar estoque nem cancelar automaticamente uma coleta. Prorrogação e tratamento do saldo remanescente são PD-009.

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

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021; ficha [TSK-ADM-006 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-ADM-006](m06.md#tsk-adm-006).

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

**Exceções:** contexto não altera automaticamente material aceito ou permissões. Formato de tags versus categoria única e permissão de edição dos horários aguardam PD-009. Funcionamento não é o mesmo que operador conectado.

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

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-033; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-007 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-ADM-007](m06.md#tsk-adm-007).

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

**Exceções:** CNPJ não equivale automaticamente à comprovação de que a entidade é uma cooperativa. Cadastro incompleto não deve habilitar pagamento sem os dados exigidos pelo provedor. Desativação preserva histórico.

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

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-008 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-015](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-ADM-008](m07.md#tsk-adm-008).

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

**Exceções:** envio não significa aceite. Reatribuição, conflito de horários e alterações após aceite são PD-014. Valor não será calculado automaticamente antes da definição de PD-015.

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

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial
- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?
- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012; ficha [TSK-ADM-009 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-015](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-015).

**Casos detalhados e ficha de origem:** [TSK-ADM-009](m07.md#tsk-adm-009).

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

**Exceções:** sem valor ou dados financeiros válidos, pagamento não pode ser iniciado. Aprovação da coleta, negociação de valor e condições de liberação ainda são PD-015 e PD-016.

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

- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?
- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017; ficha [TSK-ADM-010 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

**Casos detalhados e ficha de origem:** [TSK-ADM-010](m08.md#tsk-adm-010).

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

**Exceções:** envio não significa que dinheiro foi recebido. Reenvio por timeout deve reutilizar a identificação da mesma ordem, evitando pagamento duplicado. Concluir coleta ou aceitar solicitação não inicia pagamento automaticamente.

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

- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?
- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017; ficha [TSK-ADM-011 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

**Casos detalhados e ficha de origem:** [TSK-ADM-011](m08.md#tsk-adm-011).

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

**Exceções:** resposta desconhecida ou timeout não equivale a pagamento confirmado. Retorno repetido não reaplica o efeito. Ordem fora de sequência deve ser conciliada com o provedor. Estorno, reembolso, nova tentativa, tarifas e reconciliação aguardam PD-016.

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

- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018; ficha [TSK-ADM-012 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-018](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018).

**Casos detalhados e ficha de origem:** [TSK-ADM-012](m08.md#tsk-adm-012).

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

**Exceções:** privilégio administrativo não contorna automaticamente limites comerciais de relatórios, pois o usuário confirmou restrição também para esse perfil. Definir informações operacionais mínimas em PD-019 para não bloquear agendamento e pagamento.

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

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-047; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-013 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

**Casos detalhados e ficha de origem:** [TSK-ADM-013](m09.md#tsk-adm-013).

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

**Exceções:** “ativo” não será calculado automaticamente como “logado agora”. Medição de presença online, janela de atividade, fuso e significado de cooperativa aberta são PD-020. Não inventar dados para preencher gráficos.

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

- **PD-020:** Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado

**Prioridade de origem:** P2.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-048; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-014 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-023](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

**Casos detalhados e ficha de origem:** [TSK-ADM-014](m09.md#tsk-adm-014).

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

**Exceções:** plano grátis não significa ausência de controle operacional. Não confundir assinatura de dados com pontos da loja ou pagamento da coleta.

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

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-015 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

**Casos detalhados e ficha de origem:** [TSK-ADM-015](m10.md#tsk-adm-015).

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

**Exceções:** não presumir que a API de pagamento de cooperativas também cobra assinaturas. Renovação, inadimplência, pré-pago por tempo/consulta, migração e contratação manual ou automática são PD-019.

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

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-016 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

**Casos detalhados e ficha de origem:** [TSK-ADM-016](m10.md#tsk-adm-016).

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

**Exceções:** upload falho não deve ser exibido como concluído; arquivo incompatível é rejeitado. O limite anterior de 5 MB não será imposto indistintamente a vídeo. Upload de arquivo versus link externo, formatos, tamanhos, duração e tratamento aguardam PD-024.

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

- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega
- **PD-024:** Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-053; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-017 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-021](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-021).

**Casos detalhados e ficha de origem:** [TSK-ADM-017](m11.md#tsk-adm-017).

<a id="compartilhadas"></a>

## 5. Autorização compartilhada, ambiente e qualidade

- [TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano](#tsk-tra-001)
- [TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6](#tsk-tra-000)
- [TSK-TRA-002 — Plataforma responsiva e compatibilidade](#tsk-tra-002)
- [TSK-TRA-003 — Autenticação e autorização](#tsk-tra-003)
- [TSK-TRA-004 — Integridade, concorrência e idempotência](#tsk-tra-004)
- [TSK-TRA-005 — Resiliência de localização e consulta externa](#tsk-tra-005)
- [TSK-TRA-006 — Proteção de dados e privacidade](#tsk-tra-006)
- [TSK-TRA-007 — Desempenho e experiência](#tsk-tra-007)
- [TSK-TRA-008 — Disponibilidade, backups e recuperação](#tsk-tra-008)
- [TSK-TRA-009 — Auditoria e observabilidade](#tsk-tra-009)
- [TSK-TRA-010 — Segurança das integrações](#tsk-tra-010)
- [TSK-TRA-011 — Segurança e desempenho de mídias](#tsk-tra-011)
- [TSK-TRA-012 — Padronização e entrega técnica](#tsk-tra-012)
- [TSK-TRA-013 — Evolução e capacidade](#tsk-tra-013)

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

**Exceções:** pagar por relatório não autoriza dados pessoais identificáveis de toda a rede. Administrador também está sujeito ao plano para relatórios, conforme decisão; privilégios técnicos e operação mínima precisam ser diferenciados em PD-019.

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

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-052; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-TRA-001 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

**Casos detalhados e ficha de origem:** [TSK-TRA-001](m10.md#tsk-tra-001).

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

**Prioridade de origem:** P0, E1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** todos os RF/RNF da matriz da seção 10; RNF-MVP-011; ficha [TSK-TRA-000 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-000](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-000).

**Casos detalhados e ficha de origem:** [TSK-TRA-000](transversal.md#tsk-tra-000).

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

- **PD-025:** Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-001; ficha [TSK-TRA-002 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-002](transversal.md#tsk-tra-002).

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

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-002; ficha [TSK-TRA-003 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001), [ADE-003](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-TRA-003](transversal.md#tsk-tra-003).

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

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-003; ficha [TSK-TRA-004 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002), [ADE-004](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-004), [ADE-011](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011), [ADE-017](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017), [ADE-018](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018), [ADE-020](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-020), [ADE-024](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-024).

**Casos detalhados e ficha de origem:** [TSK-TRA-004](transversal.md#tsk-tra-004).

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

- **PD-004:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços
- **PD-008:** Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-004; ficha [TSK-TRA-005 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-009](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-009), [ADE-010](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-010), [ADE-016](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016).

**Casos detalhados e ficha de origem:** [TSK-TRA-005](transversal.md#tsk-tra-005).

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

- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-005; ficha [TSK-TRA-006 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-008](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-025](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

**Casos detalhados e ficha de origem:** [TSK-TRA-006](transversal.md#tsk-tra-006).

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

- **PD-025:** Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-006; ficha [TSK-TRA-007 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-007](transversal.md#tsk-tra-007).

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

- **PD-026:** Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-007; ficha [TSK-TRA-008 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-008](transversal.md#tsk-tra-008).

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

- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais
- **PD-026:** Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-008; ficha [TSK-TRA-009 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-011](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-011), [ADE-012](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-012), [ADE-017](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-017), [ADE-025](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

**Casos detalhados e ficha de origem:** [TSK-TRA-009](transversal.md#tsk-tra-009).

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

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-009; ficha [TSK-TRA-010 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-007](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-007), [ADE-008](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-008), [ADE-016](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-016), [ADE-018](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-018), [ADE-025](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-025).

**Casos detalhados e ficha de origem:** [TSK-TRA-010](transversal.md#tsk-tra-010).

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

**Prioridade de origem:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-010; ficha [TSK-TRA-011 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-021](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-021).

**Casos detalhados e ficha de origem:** [TSK-TRA-011](transversal.md#tsk-tra-011).

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

**Prioridade de origem:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-011; ficha [TSK-TRA-012 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-000](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-000), [ADE-024](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-024).

**Casos detalhados e ficha de origem:** [TSK-TRA-012](transversal.md#tsk-tra-012).

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

- **PD-025:** Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade

**Prioridade de origem:** P2; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RNF-MVP-012; ficha [TSK-TRA-013 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-026](../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-026).

**Casos detalhados e ficha de origem:** [TSK-TRA-013](transversal.md#tsk-tra-013).

<a id="decisoes"></a>

## 6. Decisões e investigação

- [TSK-DEC-001 — Definir PD-001](#tsk-dec-001)
- [TSK-DEC-002 — Definir PD-002](#tsk-dec-002)
- [TSK-DEC-003 — Definir PD-003](#tsk-dec-003)
- [TSK-DEC-004 — Definir PD-004](#tsk-dec-004)
- [TSK-DEC-005 — Definir PD-005](#tsk-dec-005)
- [TSK-DEC-006 — Definir PD-006](#tsk-dec-006)
- [TSK-DEC-007 — Definir PD-007](#tsk-dec-007)
- [TSK-DEC-008 — Definir PD-008](#tsk-dec-008)
- [TSK-DEC-009 — Definir PD-009](#tsk-dec-009)
- [TSK-DEC-010 — Definir PD-010](#tsk-dec-010)
- [TSK-DEC-011 — Definir PD-011](#tsk-dec-011)
- [TSK-DEC-012 — Definir PD-012](#tsk-dec-012)
- [TSK-DEC-013 — Definir PD-013](#tsk-dec-013)
- [TSK-DEC-014 — Definir PD-014](#tsk-dec-014)
- [TSK-DEC-015 — Definir PD-015](#tsk-dec-015)
- [TSK-DEC-016 — Definir PD-016](#tsk-dec-016)
- [TSK-DEC-017 — Definir PD-017](#tsk-dec-017)
- [TSK-DEC-018 — Definir PD-018](#tsk-dec-018)
- [TSK-DEC-019 — Definir PD-019](#tsk-dec-019)
- [TSK-DEC-020 — Definir PD-020](#tsk-dec-020)
- [TSK-DEC-021 — Definir PD-021](#tsk-dec-021)
- [TSK-DEC-022 — Definir PD-022](#tsk-dec-022)
- [TSK-DEC-023 — Definir PD-023](#tsk-dec-023)
- [TSK-DEC-024 — Definir PD-024](#tsk-dec-024)
- [TSK-DEC-025 — Definir PD-025](#tsk-dec-025)
- [TSK-DEC-026 — Definir PD-026](#tsk-dec-026)
- [TSK-DEC-027 — Definir PD-027](#tsk-dec-027)

<a id="tsk-dec-001"></a>

### TSK-DEC-001 — Definir PD-001

**Nome da atividade:** Definir PD-001.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M01.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-ADM-001, TSK-ADM-002, TSK-MOR-001.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa

- **PD-001:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-001; RF-MVP-001 a RF-MVP-003; ficha [TSK-DEC-001 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-001](decisoes.md#tsk-dec-001).

<a id="tsk-dec-002"></a>

### TSK-DEC-002 — Definir PD-002

**Nome da atividade:** Definir PD-002.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M01.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-ADM-001, TSK-ADM-002, TSK-MOR-001, TSK-ADM-003, TSK-MOR-002, TSK-ADM-004.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?

- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-002; RF-MVP-003 a RF-MVP-005, RF-MVP-008; ficha [TSK-DEC-002 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-002](decisoes.md#tsk-dec-002).

<a id="tsk-dec-003"></a>

### TSK-DEC-003 — Definir PD-003

**Nome da atividade:** Definir PD-003.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M01, M06, M07.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-001, TSK-ADM-003, TSK-MOR-002, TSK-MOR-003, TSK-MOR-004, TSK-ADM-004, TSK-ADM-005, TSK-ADM-008.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-003; RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038; ficha [TSK-DEC-003 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-003](decisoes.md#tsk-dec-003).

<a id="tsk-dec-004"></a>

### TSK-DEC-004 — Definir PD-004

**Nome da atividade:** Definir PD-004.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M02.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-006, TSK-MOR-007.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços

- **PD-004:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-004; RF-MVP-010, RF-MVP-011; ficha [TSK-DEC-004 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-004](decisoes.md#tsk-dec-004).

<a id="tsk-dec-005"></a>

### TSK-DEC-005 — Definir PD-005

**Nome da atividade:** Definir PD-005.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M02.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-007, TSK-MOR-009.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?

- **PD-005:** Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-005; RF-MVP-011, RF-MVP-013; ficha [TSK-DEC-005 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-005](decisoes.md#tsk-dec-005).

<a id="tsk-dec-006"></a>

### TSK-DEC-006 — Definir PD-006

**Nome da atividade:** Definir PD-006.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M02, M03.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

incorporar a decisão de UX de 10/10/2026 (rascunho em memória, abandono elimina, rota em outra aba preserva, GPS novo no retorno, seleção parcial e ajuste/remoção sem pontos). Definir os contratos reais de ajuste/exclusão, concorrência e confirmação ainda pendentes, sem reabrir a decisão de rascunho nem declarar o backend pronto.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.


**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-010, TSK-MOR-013, TSK-MOR-015.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.

- **PD-006:** Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff.

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-006; RF-MVP-014, RF-MVP-017, RF-MVP-019; ficha [TSK-DEC-006 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-006](decisoes.md#tsk-dec-006).

<a id="tsk-dec-007"></a>

### TSK-DEC-007 — Definir PD-007

**Nome da atividade:** Definir PD-007.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M03.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-011, TSK-MOR-012, TSK-MOR-013.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador

- **PD-007:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-007; RF-MVP-015 a RF-MVP-017; ficha [TSK-DEC-007 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-007](decisoes.md#tsk-dec-007).

<a id="tsk-dec-008"></a>

### TSK-DEC-008 — Definir PD-008

**Nome da atividade:** Definir PD-008.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M03.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-014.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença

- **PD-008:** Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-008; RF-MVP-018 e RNF-MVP-004; ficha [TSK-DEC-008 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-008](decisoes.md#tsk-dec-008).

<a id="tsk-dec-009"></a>

### TSK-DEC-009 — Definir PD-009

**Nome da atividade:** Definir PD-009.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M06.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-012, TSK-MOR-015, TSK-ADM-005, TSK-ADM-006, TSK-ADM-007, TSK-PON-001, TSK-PON-002, TSK-PON-003.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-009; RF-MVP-031 a RF-MVP-036; ficha [TSK-DEC-009 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-009](decisoes.md#tsk-dec-009).

<a id="tsk-dec-010"></a>

### TSK-DEC-010 — Definir PD-010

**Nome da atividade:** Definir PD-010.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M04.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-017, TSK-MOR-019.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos

- **PD-010:** Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-010; RF-MVP-021, RF-MVP-023; ficha [TSK-DEC-010 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-010](decisoes.md#tsk-dec-010).

<a id="tsk-dec-011"></a>

### TSK-DEC-011 — Definir PD-011

**Nome da atividade:** Definir PD-011.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M04, M05.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-018, TSK-MOR-020, TSK-MOR-023, TSK-MOR-024.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

- **PD-011:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-011; RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028; ficha [TSK-DEC-011 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-011](decisoes.md#tsk-dec-011).

<a id="tsk-dec-012"></a>

### TSK-DEC-012 — Definir PD-012

**Nome da atividade:** Definir PD-012.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M04, M05.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-019, TSK-MOR-021, TSK-MOR-025.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

- **PD-012:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-012; RF-MVP-025, RF-MVP-029; ficha [TSK-DEC-012 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-012](decisoes.md#tsk-dec-012).

<a id="tsk-dec-013"></a>

### TSK-DEC-013 — Definir PD-013

**Nome da atividade:** Definir PD-013.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M05.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-026.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização

- **PD-013:** Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-013; RF-MVP-030; ficha [TSK-DEC-013 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-013](decisoes.md#tsk-dec-013).

<a id="tsk-dec-014"></a>

### TSK-DEC-014 — Definir PD-014

**Nome da atividade:** Definir PD-014.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M06, M07.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-PON-002, TSK-PON-004, TSK-ADM-009, TSK-COO-001, TSK-COO-003, TSK-COO-004.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial

- **PD-014:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-014; RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043; ficha [TSK-DEC-014 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-014](decisoes.md#tsk-dec-014).

<a id="tsk-dec-015"></a>

### TSK-DEC-015 — Definir PD-015

**Nome da atividade:** Definir PD-015.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M08.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-ADM-009, TSK-ADM-010, TSK-ADM-011.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?

- **PD-015:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-015; RF-MVP-044, RF-MVP-045; ficha [TSK-DEC-015 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-015](decisoes.md#tsk-dec-015).

<a id="tsk-dec-016"></a>

### TSK-DEC-016 — Definir PD-016

**Nome da atividade:** Definir PD-016.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M07, M08.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-ADM-008, TSK-ADM-010, TSK-ADM-011, TSK-ADM-012.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

- **PD-016:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-016; RF-MVP-038, RF-MVP-044 a RF-MVP-046; ficha [TSK-DEC-016 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-016](decisoes.md#tsk-dec-016).

<a id="tsk-dec-017"></a>

### TSK-DEC-017 — Definir PD-017

**Nome da atividade:** Definir PD-017.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M07.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-COO-002, TSK-COO-003.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo

- **PD-017:** Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-017; RF-MVP-041, RF-MVP-042; ficha [TSK-DEC-017 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-017](decisoes.md#tsk-dec-017).

<a id="tsk-dec-018"></a>

### TSK-DEC-018 — Definir PD-018

**Nome da atividade:** Definir PD-018.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M06, M07.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-PON-002, TSK-COO-003, TSK-COO-004.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados

- **PD-018:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-018; RF-MVP-035, RF-MVP-043; ficha [TSK-DEC-018 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-018](decisoes.md#tsk-dec-018).

<a id="tsk-dec-019"></a>

### TSK-DEC-019 — Definir PD-019

**Nome da atividade:** Definir PD-019.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M09, M10.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-012, TSK-PON-002, TSK-ADM-013, TSK-PON-005, TSK-ADM-015, TSK-ADM-016, TSK-TRA-001.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-019; RF-MVP-047, RF-MVP-049 a RF-MVP-052; ficha [TSK-DEC-019 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-019](decisoes.md#tsk-dec-019).

<a id="tsk-dec-020"></a>

### TSK-DEC-020 — Definir PD-020

**Nome da atividade:** Definir PD-020.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M09.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-ADM-014, TSK-PON-005.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado

- **PD-020:** Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-020; RF-MVP-048, RF-MVP-049; ficha [TSK-DEC-020 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-020](decisoes.md#tsk-dec-020).

<a id="tsk-dec-021"></a>

### TSK-DEC-021 — Definir PD-021

**Nome da atividade:** Definir PD-021.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M05, M06, M07, M11.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-026, TSK-PON-003, TSK-ADM-009, TSK-ADM-017.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-021; RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053; ficha [TSK-DEC-021 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-021](decisoes.md#tsk-dec-021).

<a id="tsk-dec-022"></a>

### TSK-DEC-022 — Definir PD-022

**Nome da atividade:** Definir PD-022.

**Módulo:** DECISOES — Decisões e investigação.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-001, TSK-ADM-003, TSK-MOR-007. Revisar todas as jornadas que tratem dados pessoais.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-022; RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais; ficha [TSK-DEC-022 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-022](decisoes.md#tsk-dec-022).

<a id="tsk-dec-023"></a>

### TSK-DEC-023 — Definir PD-023

**Nome da atividade:** Definir PD-023.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M01, M07.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-002, TSK-ADM-004, TSK-ADM-008.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-023; RF-MVP-005, RF-MVP-008, RF-MVP-038; ficha [TSK-DEC-023 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-023](decisoes.md#tsk-dec-023).

<a id="tsk-dec-024"></a>

### TSK-DEC-024 — Definir PD-024

**Nome da atividade:** Definir PD-024.

**Módulo:** DECISOES — Decisões e investigação. **Módulos afetados:** M11.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-ADM-017.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia

- **PD-024:** Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia

**Prioridade de origem:** P1 — desbloquear capacidade operacional/comercial.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-024; RF-MVP-053 e RNF-MVP-010; ficha [TSK-DEC-024 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-024](decisoes.md#tsk-dec-024).

<a id="tsk-dec-025"></a>

### TSK-DEC-025 — Definir PD-025

**Nome da atividade:** Definir PD-025.

**Módulo:** DECISOES — Decisões e investigação.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: tarefas transversais ou seção de evolução, conforme referências acima. Relacionar também TSK-TRA-002, TSK-TRA-007 e TSK-TRA-013.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade

- **PD-025:** Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-025; RNF-MVP-001, RNF-MVP-006, RNF-MVP-012; ficha [TSK-DEC-025 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-025](decisoes.md#tsk-dec-025).

<a id="tsk-dec-026"></a>

### TSK-DEC-026 — Definir PD-026

**Nome da atividade:** Definir PD-026.

**Módulo:** DECISOES — Decisões e investigação.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: tarefas transversais ou seção de evolução, conforme referências acima. Relacionar também TSK-TRA-008, TSK-TRA-009 e TSK-TRA-012.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega

- **PD-026:** Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega

**Prioridade de origem:** P0 — desbloquear fundamentos ou parâmetros da jornada.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-026; RNF-MVP-007 a RNF-MVP-011; ficha [TSK-DEC-026 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-026](decisoes.md#tsk-dec-026).

<a id="tsk-dec-027"></a>

### TSK-DEC-027 — Definir PD-027

**Nome da atividade:** Definir PD-027.

**Módulo:** DECISOES — Decisões e investigação.

**Objetivo:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado a pendência analisada, quando os responsáveis decidem, então o registro distingue regra aprovada de hipótese e adiamento.
- **CA-02:** Dado uma regra aprovada, quando é incorporada à V6, então os critérios e tarefas impactados usam o mesmo resultado esperado.
- **CA-03:** Dado ponto ainda não resolvido, quando a tarefa de implementação é refinada, então o efeito dependente continua identificado como bloqueado.

**Dependências:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-014.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP

- **PD-027:** Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP

**Prioridade de origem:** P2 — registro de evolução futura.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-027; Seção 14; ficha [TSK-DEC-027 original](../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

**Casos detalhados e ficha de origem:** [TSK-DEC-027](decisoes.md#tsk-dec-027).

<a id="tecnicas"></a>

## 7. Arquitetura, refatoração e banco

As seis fichas abaixo desdobram trabalho técnico já previsto nos pacotes ADE. Seus identificadores TEC são recortes de execução; não são seis novas funcionalidades nem devem ser somados às 93 atividades como escopo independente. Manter vínculo ao cartão TSK/ADE pertinente; se criar subtarefas no quadro, evitar duplicar status e contabilização.

**Para todas as fichas:** responsável, data de início, data de entrega e sprint = **A definir pelo analista/equipe**. O envio ao QA e a conclusão após aprovação devem ser registrados separadamente. **Evidências produzidas nesta adequação:** nenhuma execução técnica; todos os testes abaixo são planejados. Disponibilidade, arquitetura e esquema físico atuais precisam ser conferidos no código de trabalho.

### TEC-01 — Verificar ambiente e migrações do banco

**Nome da atividade:** Verificar ambiente e migrações do banco de avaliação.

**Objetivo:** reproduzir a base de trabalho e comprovar criação/atualização do banco antes das entregas.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** confirmar versões, configuração da API e cadeia de migrações; preparar procedimento reproduzível; aplicar e validar migrações em banco isolado de avaliação, incluindo compatibilidade com dados sintéticos representativos. Não migrar nem corrigir dados de produção por esta ficha documental.

**Regras:** inspeção estática de migrações não comprova aplicação; erro não pode ser registrado como inicialização bem-sucedida. Configuração deve preservar segredos.

**Critérios de aceite:** a base vazia de avaliação recebe o esquema previsto; atualização de base sintética compatível preserva registros; API conecta à base correta; procedimento e versão ficam registrados; falhas relevantes são documentadas.

**Dependências:** acesso ao código, banco de avaliação e política de ambiente/recuperação. **Origem:** ADE-000; TSK-TRA-000, TSK-TRA-012; AUD-014–016; PD-026.

**Evidências de entrega:** logs sem segredos, versão, migrações aplicadas, verificações de esquema/dados e procedimento reproduzível. **Testes planejados:** criar base vazia; atualizar base sintética representativa; verificar conexão e resultado; comparar registros antes/depois.

### TEC-02 — Padronizar contratos de materiais e unidades

**Nome da atividade:** Padronizar contratos de materiais e unidades entre interface, API e banco.

**Objetivo:** impedir confusão entre embalagens, capacidade e peso coletado.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** alinhar PET e lata de alumínio, quantidades inteiras positivas, peso medido da cooperativa e campos de ocupação; mapear contratos e consumidores; propor compatibilidade/migração quando o esquema atual exigir.

**Regras:** não converter unidades em kg por suposição; não excluir materiais históricos sem decisão e plano de compatibilidade; parâmetros de capacidade e conciliação dependem de aprovação.

**Critérios de aceite:** cadastro/estoque/descarte usam os materiais e unidades acordados; peso operacional permanece separado; entradas inválidas são rejeitadas sem efeito; consumidores usam o mesmo contrato; tratamento de legado está documentado.

**Dependências:** TEC-01; decisões PD-009/PD-018 para efeitos dependentes. **Origem:** ADE-004; TSK-MOR-008, TSK-MOR-010, TSK-PON-002, TSK-COO-004; AUD-007.

**Evidências de entrega:** contrato, rastreabilidade de campos/consumidores, resultados de validações e proposta de compatibilidade. **Testes planejados:** cadastrar quantidade válida; rejeitar quantidade inválida; registrar peso operacional; comprovar que contagem pessoal não foi reinterpretada como peso.

### TEC-03 — Refatorar confirmação e efeitos do descarte

**Nome da atividade:** Refatorar confirmação de descarte para uma operação consistente.

**Objetivo:** impedir dupla baixa, dupla entrada e duplo crédito.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** revisar as responsabilidades e os consumidores das rotas existentes; concentrar validação, entrega, movimento de estoque e crédito básico em uma operação consistente, com reenvio seguro e proteção concorrente. A organização interna será definida após inspeção; não prescrever migração de framework ou novo serviço sem necessidade.

**Regras:** dez pontos básicos por operação concluída; seleção/registro e pesagem posterior não creditam; origem rápida não cria estoque pessoal automaticamente; investigar legado sem recalcular dados reais por inferência.

**Critérios de aceite:** estoque inicial dez e entrega de três deixam sete, acrescentam três ao ponto e creditam dez pontos uma vez; reenvio não repete efeitos; falha e concorrência não deixam saldos negativos ou sucesso parcial.

**Dependências:** TEC-01/02, acessos, ponto, GPS e contratos aprovados do recorte. **Origem:** ADE-011; TSK-MOR-015, TSK-MOR-017, TSK-TRA-004; AUD-001/002; PD-006/009/010.

**Evidências de entrega:** revisão, contrato e registros antes/depois na API e no banco de avaliação. **Testes planejados:** CT-011-01 a CT-011-03 do [roteiro integrado](testes-integrados.md), com concorrência no banco de avaliação pertinente.

### TEC-04 — Adequar retirada e conciliação da coleta

**Nome da atividade:** Adequar movimento de retirada sem apagar remanescentes ou novas entradas.

**Objetivo:** preservar saldo correto do ponto quando a cooperativa registra a coleta.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** revisar efeitos persistidos e responsabilidade da conclusão operacional; aplicar política aprovada de retirada parcial, contagem/peso e entradas posteriores; validar materiais e pesos no serviço.

**Regras:** peso negativo não é aceito; zero, precisão e correção seguem decisão; peso não define quantidade retirada por inferência; pesagem não gera novo crédito básico ao morador.

**Critérios de aceite:** retirada preserva remanescentes e entradas posteriores conforme conciliação aprovada; valores inválidos não são persistidos; repetição não duplica retirada; crédito do morador não é repetido.

**Dependências:** TEC-01/02, coleta aceita e PD-009/014/018 aprovadas para o recorte. **Origem:** ADE-014/017; TSK-PON-002, TSK-COO-004, TSK-TRA-004; AUD-004/005.

**Evidências de entrega:** movimentos e saldos antes/depois, contrato e resultados de falha/reenvio. **Testes planejados:** CT-019 e CT-020 integrados; complementar peso negativo e reenvio segundo a regra aprovada.

### TEC-05 — Adequar autorização por perfil e vínculo

**Nome da atividade:** Adequar autorização no serviço por perfil, vínculo e atribuição.

**Objetivo:** impedir acesso indevido entre moradores, pontos, cooperativas e administração.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** revisar controles compartilhados e aplicar restrições às leituras/escritas pertinentes; alinhar interface e API à mesma matriz de acesso; separar benefício comercial de vínculo operacional.

**Regras:** esconder botão não é autorização; cooperativa opera somente atribuições autorizadas; plano pago não concede vínculo; operadores e sessões dependem da política aprovada.

**Critérios de aceite:** usuário autorizado acessa seu recorte; requisição direta sem vínculo é negada sem efeito; revogação respeita política aprovada; acesso horizontal e vertical são testados.

**Dependências:** vínculos/contas sintéticas, TEC-01 e decisões PD-002/003/023 pertinentes. **Origem:** ADE-001/003/022; TSK-ADM-004, TSK-TRA-003, TSK-TRA-001; AUD-003/008.

**Evidências de entrega:** matriz de acesso, respostas HTTP e ausência de mudanças não autorizadas no banco. **Testes planejados:** acesso autorizado; tentativa entre pontos sem vínculo; tentativa vertical; acesso comercial sem vínculo conforme CT-025.

### TEC-06 — Adequar regressões e procedimento técnico de entrega

**Nome da atividade:** Adequar testes de regressão e procedimento reproduzível de entrega.

**Objetivo:** verificar as regras atuais e evitar que alterações reintroduzam defeitos.

**Responsável:** A definir. **Data de início:** A definir. **Data de entrega:** A definir.

**Descrição:** mapear testes legados à V6, atualizar expectativas superadas com rastreabilidade, acrescentar regressões dos achados e definir verificações reproduzíveis de build, API, persistência e jornadas. Conferir ambientes local e de integração utilizados pela equipe.

**Regras:** teste antigo aprovado não torna uma regra antiga válida; registrar contexto, versão e limites; não remover falhas sem análise; restauração e testes destrutivos apenas em avaliação isolada.

**Critérios de aceite:** expectativas têm requisito atual associado; fluxo completo detecta duplicidade/perda de saldo; execução e resultados são reproduzíveis; falhas e limitações permanecem explícitas.

**Dependências:** TEC-01 e recortes implementados; parâmetros de PD-025/026 quando necessários. **Origem:** ADE-024–026; TSK-TRA-012, TSK-TRA-008, TSK-TRA-009; AUD-016.

**Evidências de entrega:** relação requisito/teste, logs e resultados por versão, procedimento e evidências das jornadas. **Testes planejados:** executar regressões pertinentes; validar alteração isolada; percorrer jornada entre perfis; verificar restauração/auditoria conforme CT-029.

<a id="matriz"></a>

## 8. Matriz de importância

**Eixos escolhidos:** impacto na entrega × urgência. As classificações abaixo são propostas documentais, não estimativas nem decisões definitivas do analista. Responsáveis, datas e ordenação final permanecem a definir.

### Critérios da matriz

- **Impacto alto:** segurança/integridade, bloqueio da jornada ou fundamento marcado P0 na origem. A importância independe de estar na primeira sprint.
- **Impacto moderado:** capacidade necessária ao recorte de negócio/qualidade, sem bloqueio imediato identificado na origem. Não significa dispensável.
- **Impacto baixo no MVP atual:** avaliação de funcionalidade futura sem implementação confirmada, como PD-027. Se o escopo mudar, reavaliar.
- **Urgente:** proposta de resolver agora porque apoia o primeiro recorte do morador, sua segurança/integridade ou uma decisão preparatória necessária. Revisar após confirmar versão, escopo e disponibilidade.
- **Não urgente nesta etapa:** planejar para o perfil/recorte subsequente ou avaliar futuro; não significa que cabe adiar além da deadline.

Se aparecer defeito atual de segurança ou integridade, reclassificar imediatamente conforme evidência, independentemente da etapa de perfil. Uma prioridade P0 comercial não torna toda a Loja urgente antes da jornada principal. Esforço não foi estimado.

| Impacto / urgência | Urgente | Não urgente nesta etapa |
|---|---|---|
| Alto | Refinar e resolver primeiro; manter qualidade | Planejar antes da jornada que depende do item; antecipar se houver risco ativo |
| Moderado | Reservar capacidade para o recorte atual | Ordenar nos próximos recortes conforme objetivo e dependências |
| Baixo | Validar a razão da urgência antes de consumir capacidade | Avaliar futuramente; não incorporar ao MVP automaticamente |

### Matriz das 93 atividades

Vínculos levam à ficha padronizada. Atividades de decisão são trabalho de análise; não são funcionalidades adicionais.

| Atividade | Módulo | Impacto proposto | Urgência proposta | Justificativa |
|---|---|---|---|---|
| [TSK-MOR-001 — Cadastrar morador por convite](#tsk-mor-001) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002, PD-003, PD-022. |
| [TSK-MOR-002 — Autenticar e encerrar sessão](#tsk-mor-002) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002, PD-003, PD-023. |
| [TSK-MOR-003 — Recuperar acesso](#tsk-mor-003) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003. |
| [TSK-MOR-004 — Consultar e editar perfil](#tsk-mor-004) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003. |
| [TSK-ADM-001 — Gerenciar convites individuais](#tsk-adm-001) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002. |
| [TSK-ADM-002 — Gerenciar convites compartilhados](#tsk-adm-002) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002. |
| [TSK-ADM-003 — Cadastrar morador pela administração](#tsk-adm-003) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-002, PD-003, PD-022. |
| [TSK-ADM-004 — Administrar acessos e vínculos](#tsk-adm-004) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002, PD-003, PD-023. |
| [TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido](#tsk-mor-005) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-MOR-006 — Identificar produto por código de barras](#tsk-mor-006) | M02 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004. |
| [TSK-MOR-007 — Importar itens de nota fiscal](#tsk-mor-007) | M02 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004, PD-005, PD-022. |
| [TSK-MOR-008 — Cadastrar resíduo manualmente](#tsk-mor-008) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-MOR-009 — Revisar itens antes da inclusão](#tsk-mor-009) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-005. |
| [TSK-MOR-010 — Manter estoque e selecionar quantidades](#tsk-mor-010) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-MOR-011 — Consultar pontos próximos compatíveis](#tsk-mor-011) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007. |
| [TSK-MOR-012 — Consultar detalhes do ponto](#tsk-mor-012) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007, PD-009, PD-019. |
| [TSK-MOR-013 — Encaminhar morador à navegação externa](#tsk-mor-013) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006, PD-007. |
| [TSK-MOR-014 — Validar presença por GPS](#tsk-mor-014) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-008, PD-027. |
| [TSK-MOR-015 — Confirmar entrega e movimentar estoques](#tsk-mor-015) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006, PD-009. |
| [TSK-MOR-016 — Exibir confirmação e histórico de descartes](#tsk-mor-016) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-MOR-017 — Creditar recompensa básica provisória](#tsk-mor-017) | M04 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010. |
| [TSK-MOR-018 — Aplicar bônus de campanha](#tsk-mor-018) | M04 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-019 — Consultar saldo e extrato de pontos](#tsk-mor-019) | M04 | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010, PD-012. |
| [TSK-MOR-020 — Apurar metas de descarte das campanhas](#tsk-mor-020) | M04 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-021 — Debitar pontos com consistência](#tsk-mor-021) | M04 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-MOR-022 — Consultar a loja de recompensas](#tsk-mor-022) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-MOR-023 — Consultar detalhes e condições da campanha](#tsk-mor-023) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-024 — Administrar e participar de campanhas](#tsk-mor-024) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-025 — Administrar e adquirir vouchers](#tsk-mor-025) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-MOR-026 — Administrar sorteios e registrar participações](#tsk-mor-026) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-013, PD-021. |
| [TSK-PON-001 — Editar materiais aceitos](#tsk-pon-001) | M06 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009. |
| [TSK-PON-002 — Acompanhar estoque e ocupação do ponto](#tsk-pon-002) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009, PD-014, PD-018, PD-019. |
| [TSK-PON-003 — Sinalizar necessidade de coleta](#tsk-pon-003) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009, PD-021. |
| [TSK-PON-004 — Solicitar coleta ao administrador](#tsk-pon-004) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-ADM-005 — Cadastrar e administrar pontos de coleta](#tsk-adm-005) | M06 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003, PD-009. |
| [TSK-ADM-006 — Gerir pontos temporários](#tsk-adm-006) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009. |
| [TSK-ADM-007 — Classificar contexto e funcionamento do ponto](#tsk-adm-007) | M06 | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-009. |
| [TSK-COO-001 — Consultar e aceitar solicitação de coleta](#tsk-coo-001) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-COO-002 — Fornecer rota e agendamento no painel](#tsk-coo-002) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-017. |
| [TSK-COO-003 — Acompanhar andamento da coleta](#tsk-coo-003) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-017, PD-018. |
| [TSK-COO-004 — Registrar materiais e pesos retirados](#tsk-coo-004) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-018. |
| [TSK-ADM-008 — Cadastrar cooperativa e seus acessos](#tsk-adm-008) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003, PD-016, PD-023. |
| [TSK-ADM-009 — Solicitar e agendar coleta administrativamente](#tsk-adm-009) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-015, PD-021. |
| [TSK-ADM-010 — Preparar informações de pagamento](#tsk-adm-010) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015, PD-016. |
| [TSK-ADM-011 — Iniciar pagamento por API](#tsk-adm-011) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015, PD-016. |
| [TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento](#tsk-adm-012) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-016. |
| [TSK-PON-005 — Consultar relatórios dos pontos](#tsk-pon-005) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019, PD-020. |
| [TSK-ADM-013 — Disponibilizar visão administrativa da operação](#tsk-adm-013) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-014 — Exibir gráficos e indicadores](#tsk-adm-014) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-020. |
| [TSK-ADM-015 — Representar planos e benefícios de dados](#tsk-adm-015) | M10 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-016 — Associar contratação e vigência de plano](#tsk-adm-016) | M10 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano](#tsk-tra-001) | M10 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja](#tsk-adm-017) | M11 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-021, PD-024. |
| [TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6](#tsk-tra-000) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-002 — Plataforma responsiva e compatibilidade](#tsk-tra-002) | TRANSVERSAL | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-025. |
| [TSK-TRA-003 — Autenticação e autorização](#tsk-tra-003) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003, PD-023. |
| [TSK-TRA-004 — Integridade, concorrência e idempotência](#tsk-tra-004) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-005 — Resiliência de localização e consulta externa](#tsk-tra-005) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004, PD-008. |
| [TSK-TRA-006 — Proteção de dados e privacidade](#tsk-tra-006) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-022. |
| [TSK-TRA-007 — Desempenho e experiência](#tsk-tra-007) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-025. |
| [TSK-TRA-008 — Disponibilidade, backups e recuperação](#tsk-tra-008) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-026. |
| [TSK-TRA-009 — Auditoria e observabilidade](#tsk-tra-009) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-022, PD-026. |
| [TSK-TRA-010 — Segurança das integrações](#tsk-tra-010) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-TRA-011 — Segurança e desempenho de mídias](#tsk-tra-011) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-TRA-012 — Padronização e entrega técnica](#tsk-tra-012) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-013 — Evolução e capacidade](#tsk-tra-013) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-025. |
| [TSK-DEC-001 — Definir PD-001](#tsk-dec-001) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001. |
| [TSK-DEC-002 — Definir PD-002](#tsk-dec-002) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002. |
| [TSK-DEC-003 — Definir PD-003](#tsk-dec-003) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003. |
| [TSK-DEC-004 — Definir PD-004](#tsk-dec-004) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004. |
| [TSK-DEC-005 — Definir PD-005](#tsk-dec-005) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-005. |
| [TSK-DEC-006 — Definir PD-006](#tsk-dec-006) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-DEC-007 — Definir PD-007](#tsk-dec-007) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007. |
| [TSK-DEC-008 — Definir PD-008](#tsk-dec-008) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-008. |
| [TSK-DEC-009 — Definir PD-009](#tsk-dec-009) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-009. |
| [TSK-DEC-010 — Definir PD-010](#tsk-dec-010) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010. |
| [TSK-DEC-011 — Definir PD-011](#tsk-dec-011) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-DEC-012 — Definir PD-012](#tsk-dec-012) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-DEC-013 — Definir PD-013](#tsk-dec-013) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-013. |
| [TSK-DEC-014 — Definir PD-014](#tsk-dec-014) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-DEC-015 — Definir PD-015](#tsk-dec-015) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015. |
| [TSK-DEC-016 — Definir PD-016](#tsk-dec-016) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-016. |
| [TSK-DEC-017 — Definir PD-017](#tsk-dec-017) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-017. |
| [TSK-DEC-018 — Definir PD-018](#tsk-dec-018) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-018. |
| [TSK-DEC-019 — Definir PD-019](#tsk-dec-019) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-DEC-020 — Definir PD-020](#tsk-dec-020) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-020. |
| [TSK-DEC-021 — Definir PD-021](#tsk-dec-021) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-021. |
| [TSK-DEC-022 — Definir PD-022](#tsk-dec-022) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-022. |
| [TSK-DEC-023 — Definir PD-023](#tsk-dec-023) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-023. |
| [TSK-DEC-024 — Definir PD-024](#tsk-dec-024) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-024. |
| [TSK-DEC-025 — Definir PD-025](#tsk-dec-025) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-025. |
| [TSK-DEC-026 — Definir PD-026](#tsk-dec-026) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-026. |
| [TSK-DEC-027 — Definir PD-027](#tsk-dec-027) | DECISOES | Baixo no MVP atual | Não urgente nesta etapa | Avaliação futura; sem implementação confirmada no MVP. Pendências: PD-027. |

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

[Abrir fichas técnicas](arquitetura-refatoracao-banco.md).

### Revisão pelo analista/equipe

Confirmar o recorte indispensável, a existência atual dos bloqueios e as horas disponíveis. Usar impacto e urgência junto às dependências para ordenar o backlog. Preencher responsáveis e datas nas fichas; atualizar a proposta quando houver evidência nova. A matriz não autoriza excluir itens nem confirma que todo o backlog cabe até 20/11/2026.

<a id="testes"></a>

## 9. Casos integrados de validação

Desdobramento dos 29 cenários da seção 13 da V6. São casos planejados; não foram executados nesta adequação. Complementam os casos das atividades e os requisitos de qualidade. Dados numéricos aqui são exemplos sintéticos de avaliação; políticas e valores comerciais precisam de aprovação. Condições não definidas impedem homologação do trecho dependente.

Para cada execução preencher: executor, data, ambiente, versão, resultado observado, evidência e defeito. Resultado esperado e observado são campos separados. Testes de integridade exigem conferir registros persistidos; concorrência deve usar o banco e os controles do ambiente real de avaliação.

### CT-001 — Usar convite individual duas vezes e em paralelo

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-001, TSK-MOR-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-002, TSK-MOR-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-001, TSK-MOR-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-008, TSK-MOR-010.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-007, TSK-MOR-009.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-006, TSK-MOR-007, TSK-MOR-008.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02, M03, M04. **Atividades:** TSK-MOR-005, TSK-MOR-014, TSK-MOR-015, TSK-MOR-017.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02, M03. **Atividades:** TSK-MOR-010, TSK-MOR-015.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03, M06. **Atividades:** TSK-MOR-011, TSK-MOR-015, TSK-PON-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03. **Atividades:** TSK-MOR-014, TSK-MOR-015.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03, M04. **Atividades:** TSK-MOR-015, TSK-MOR-017, TSK-TRA-004.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M04, M05. **Atividades:** TSK-MOR-018, TSK-MOR-020, TSK-MOR-024.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M04, M05. **Atividades:** TSK-MOR-021, TSK-MOR-025.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M05. **Atividades:** TSK-MOR-026.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-ADM-006.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-PON-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-PON-004.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07. **Atividades:** TSK-ADM-009, TSK-COO-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07. **Atividades:** TSK-COO-004.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06, M07. **Atividades:** TSK-PON-002, TSK-COO-004.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07, M08. **Atividades:** TSK-COO-004, TSK-ADM-012.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M08. **Atividades:** TSK-ADM-011.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M08. **Atividades:** TSK-ADM-012.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M09, M10. **Atividades:** TSK-PON-005, TSK-TRA-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M10. **Atividades:** TSK-TRA-001.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M09. **Atividades:** TSK-ADM-014.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M11. **Atividades:** TSK-ADM-017.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03. **Atividades:** TSK-MOR-016.

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

**Origem:** [V6, seção 13](../../requisitos/requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** TRANSVERSAL. **Atividades:** TSK-TRA-008, TSK-TRA-009.

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
