# Residuum — Tasks de desenvolvimento do MVP

**Documento anterior, preservado para rastreabilidade.** Para executar o trabalho atual, consulte o [documento geral das tasks](../../01-planejamento/01-atividades-gerais.md). Este arquivo não é uma segunda lista vigente de atividades.


**[Documento geral das atividades por módulo e perfil](../../01-planejamento/README.md)** — modelo padronizado, testes, proposta de Scrum e matriz de importância; responsáveis e datas a preencher pela equipe.


**Versão:** 1.0 — proposta de backlog para refinamento da equipe
**Data:** 09/10/2026
**Base:** [Visão do projeto](../../02-produto/01-visao.md) e [Requisitos MVP V6](../../02-produto/02-requisitos-mvp-v6.md).
**Equipe:** seis pessoas; responsáveis nominais, esforço, sprint e datas a definir pela equipe.

## Navegação

- [Como utilizar este backlog](#1-como-utilizar-este-backlog)
- [Ordem de entrega e preparação](#2-ordem-de-entrega-e-preparação)
- [Diagnóstico do MVP](#3-diagnóstico-do-mvp-existente)
- [Morador](#4-morador)
- [Responsável pelo ponto](#5-responsável-pelo-ponto)
- [Cooperativa](#6-cooperativa)
- [Administrador](#7-administrador)
- [Capacidades transversais](#8-capacidades-transversais)
- [Decisões e investigação](#9-tarefas-de-decisão-e-investigação)
- [Matriz de rastreabilidade](#10-matriz-de-rastreabilidade)
- [Cuidados de refinamento e validação](#11-cuidados-de-refinamento-e-validação)

## 1. Como utilizar este backlog

Este documento transforma a especificação em unidades de trabalho por perfil e jornada. É um planejamento da revisão do MVP existente: nenhuma tarefa está declarada pronta e nenhum teste na aplicação foi executado para produzir este backlog. Os documentos históricos permanecem como referência, sem importar seus prazos, estimativas ou status de conclusão.

As descrições funcionais e os critérios BDD abaixo preservam a V6. Acrescentam história, valor, entrega demonstrável, subtarefas e dependências para orientar desenvolvimento. Antes de trabalhar, executar TSK-TRA-000 e registrar, por capacidade, o que será reaproveitado, ajustado ou implementado. Não reconstruir automaticamente funcionalidades já adequadas.

### 1.1 Prioridade, relevância e prontidão

| Campo | Uso |
|---|---|
| P0 | Segurança, integridade e bloqueios da jornada principal. Na fase comercial também inclui débito e controle de acesso; não significa começar comércio antes do descarte. |
| P1 | Completar operação, facilitar cadastro e entregar funcionalidades de negócio do MVP. |
| P2 | Complementos e qualidade que precisam de refinamento; a classificação não retira itens do escopo. |
| Valor/relevância | Benefício concreto e risco de não entregar, descritos em cada tarefa. Prioridades são propostas para a equipe validar. |
| A diagnosticar | Estado inicial de todas as implementações: a existência e adequação do código ainda não foram verificadas. |
| Pronta para desenvolvimento | Diagnóstico, recorte, dados e critérios definidos; decisões bloqueantes resolvidas e dependências disponíveis. |
| Bloqueada | Registrar qual decisão ou dependência impede o recorte da tarefa; partes independentes podem avançar quando explicitadas. |
| Em desenvolvimento / em revisão / em validação / concluída | Evolução com evidência, seguindo a definição de conclusão. Sem evidência, não marcar concluída. |

Não atribuir esforço baixo ou alto com base somente no texto. Estimar após conhecer o código, as integrações e a capacidade da equipe. Distinguir prioridade de ordem: as dependências e decisões podem impedir iniciar um item P0 imediatamente.

### 1.2 Modelo de execução e conclusão

Cada ficha possui história, referências, descrição, pré-condições/dados quando especificados, fluxo, exceções, valor, prioridade, entrega, subtarefas, dependências, decisões e critérios de aceite. O estado da especificação é mantido separadamente do estado de implementação.

**Campos de acompanhamento em todas as fichas:** responsável nominal, esforço, sprint e data = **a definir pela equipe**; estado de implementação = **a diagnosticar**. Registrar posteriormente links de código, revisão e evidências no cartão da tarefa.

**Definição de conclusão aplicada a todas as fichas:**

1. Diagnóstico registrado; escopo e decisões bloqueantes aprovados para o trecho entregue.
2. Implementação revisada, com validação de permissões no serviço e tratamento das falhas relevantes.
3. Critérios BDD verificados com dados, ambiente e evidência; conferir efeitos persistidos, não apenas a tela.
4. Verificar repetição/concorrência quando houver consumo de convite, quantidade, pontos, coleta ou dinheiro.
5. Atualizar documentação afetada e registrar limitações, versão e aprovação dos responsáveis.
6. Não declarar o MVP homologado com base em uma tarefa concluída.

Em tarefas de decisão, conclusão significa registrar decisão ou adiamento explícito, responsáveis, justificativa e requisitos impactados. Adiamento não libera implementação de regra desconhecida.

### 1.3 Funcionalidades compartilhadas

| Capacidade | Tarefa principal | Quem utiliza |
|---|---|---|
| Login e encerramento de sessão | TSK-MOR-002 | Todos os perfis, com contexto e permissões próprios |
| Acessos e vínculos | TSK-ADM-004 | Administração cria vínculos; ponto e cooperativa utilizam acesso operacional |
| Descarte e crédito básico | TSK-MOR-015 + TSK-MOR-017 | Morador confirma; ponto e administrador acompanham efeitos |
| Materiais aceitos | TSK-PON-001 | Responsável vinculado e administrador |
| Campanhas | TSK-MOR-024 | Administrador gere; morador consulta/participa; bônus em TSK-MOR-018 |
| Vouchers | TSK-MOR-025 | Administrador gere; morador adquire |
| Sorteios | TSK-MOR-026 | Administrador gere; morador participa |
| Andamento da coleta | TSK-COO-003 | Cooperativa, administrador e responsável autorizado |
| Situação financeira | TSK-ADM-012 | Administrador e cooperativa autorizada |
| Relatórios | TSK-PON-005 | Responsável e administrador, conforme plano e abrangência |
| Autorização comercial | TSK-TRA-001 | Todos os consumidores das informações protegidas |

As tarefas compartilhadas incluem os controles administrativos e a experiência de consumo. Refinar subtarefas por interface sem duplicar regras ou criar dois lançamentos para o mesmo evento.

## 2. Ordem de entrega e preparação

| Etapa | Resultado demonstrável | Condições |
|---|---|---|
| E1 — Diagnóstico e fundamentos | Inventário do MVP e plano de adequação, permissões e padrão de entrega | TSK-TRA-000; resolver política de acesso para o recorte necessário |
| E2 — Jornada principal | Morador registra manualmente, seleciona estoque, encontra ponto, navega, valida GPS e conclui recebendo 10 pontos | Administração disponibiliza pontos e acessos; GPS e estoque com regras aprovadas |
| E3 — Cadastro facilitado | Código de barras e nota preenchem dados revisáveis; falha mantém alternativa manual | Fonte e política de importação aprovadas; não inventar material nem cashback |
| E4 — Operação de coleta | Ponto solicita; administrador atribui; cooperativa aceita, consulta rota e informa materiais/pesos | Regras operacionais e conciliação aprovadas para os efeitos habilitados |
| E5 — Loja e capacidades comerciais | Campanhas, vouchers, sorteios, pagamento de coleta e dados por plano | Condições publicadas e provedores/políticas aprovados antes de efeitos reais |

As etapas organizam dependências, não fixam calendário nem impedem paralelismo entre capacidades independentes. Tarefas transversais acompanham cada etapa. Uma interface demonstrada com serviço simulado deve ser identificada como simulação, sem afirmar integração concluída.

## 3. Diagnóstico do MVP existente

### TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6

**Prioridade:** P0, E1. **Valor:** evitar retrabalho e encontrar divergências herdadas antes de distribuir as entregas.
**História:** como equipe de desenvolvimento, queremos comparar o MVP existente à V6 para preservar o que funciona e corrigir as diferenças com evidência.
**Referências:** todos os RF/RNF da matriz da seção 10; RNF-MVP-011.
**Responsabilidade sugerida:** produto, frontend, backend e QA. Esforço, nomes e prazo a definir.

**Descrição e entrega:** obter acesso autorizado ao código e ambiente; registrar versão, telas, serviços, persistência e integrações por requisito. Para cada capacidade, classificar: compatível com evidência, divergente, ausente ou não verificável. Produzir tabela com comportamento observado, esperado, evidência, risco e ação recomendada (reaproveitar, ajustar ou implementar). Ausência de acesso é impedimento, não ausência de funcionalidade.

**Subtarefas:**

1. Localizar versão do MVP e documentar como executar em ambiente de avaliação.
2. Percorrer as quatro jornadas com dados de teste e comparar critérios relevantes.
3. Identificar regras antigas de pesagem/pontuação, cadastro público e QR que conflitam com a V6.
4. Apontar efeitos em dados e migrações possíveis; proposta de migração depende de análise, sem excluir dados reais.
5. Vincular achados às tarefas deste documento e registrar estimativas apenas após refinamento.

**Dependências:** acesso ao código/ambiente e credenciais de avaliação adequadas; não fornecidos neste repositório de documentos.

**Critérios de aceite:**

- **Dado** uma capacidade avaliada, **quando** o diagnóstico é registrado, **então** há requisito, versão, comportamento observado, evidência e ação recomendada.
- **Dado** um item histórico marcado como entregue, **quando** não há evidência atual, **então** ele permanece não verificado.
- **Dado** falta de acesso ao ambiente, **quando** se conclui o inventário documental, **então** a limitação é registrada sem afirmar que a aplicação foi validada.

## 4. Morador

**Jornada:** Convite → cadastro/login → resíduos → estoque ou descarte rápido → ponto → navegação/GPS → entrega → pontos → Loja.

### TSK-MOR-001 — Cadastrar morador por convite

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001.
**Estado da especificação V6:** confirmado com pendências.
**Objetivo:** criar acesso do morador sem permitir cadastro público irrestrito..
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero criar acesso do morador sem permitir cadastro público irrestrito para entrar no piloto autorizado sem cadastros indevidos.

**Valor e relevância:** Entrar no piloto autorizado sem cadastros indevidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** convite individual ou compartilhado válido. **Dados herdados:** nome, e-mail, telefone e endereço; obrigatoriedade, CPF e senha aguardam PD-003.

**Fluxo:** abrir o link; verificar disponibilidade do convite; preencher e revisar os dados; apresentar informações de privacidade aplicáveis; validar entradas; criar conta e consumir o convite na mesma conclusão lógica.

**Exceções:** campos inválidos, e-mail já cadastrado e falha de gravação não devem consumir vaga nem duplicar a conta. A política de verificação de e-mail precisa de validação.

**Entrega demonstrável:** Concluir cadastro por convite válido, sem consumir autorização em cadastro malsucedido.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar morador por convite” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-001, TSK-ADM-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-003, PD-001, PD-022, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um convite válido e dados aceitos, **quando** o morador conclui o formulário, **então** a conta é criada vinculada ao consumo do convite.
- **Dado** uma tentativa sem convite autorizado, **quando** o formulário é enviado, **então** o sistema impede a criação da conta.
- **Dado** uma falha de validação, **quando** o cadastro não termina, **então** o convite mantém sua disponibilidade anterior.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-002 — Autenticar e encerrar sessão

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-005; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** herdado para validação.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero autenticar e encerrar sessão para acessar os próprios dados e encerrar o acesso com segurança.

**Valor e relevância:** Acessar os próprios dados e encerrar o acesso com segurança. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Objetivo e fluxo:** permitir login com e-mail e senha, validar a conta, abrir a área correspondente ao perfil e encerrar a sessão quando solicitado. Biblioteca de autenticação não é fixada por este documento.

**Pré-condições:** conta habilitada. **Exceções:** credenciais incorretas, acesso desabilitado e sessão expirada impedem ações protegidas. Uso do convite habilita cadastro, não é uma credencial de login permanente.

**Resultado:** acesso de acordo com perfil e vínculos. Tempo de sessão, múltiplos perfis e situação das contas existentes são PD-002 e PD-023.

**Entrega demonstrável:** Demonstrar login e logout dos perfis habilitados, com proteção das operações após encerramento.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Autenticar e encerrar sessão” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** Sem dependência funcional anterior específica; verificar fundamentos da etapa; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-002, PD-023, PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** credenciais válidas e conta habilitada, **quando** o usuário faz login, **então** acessa sua área autorizada.
- **Dado** uma sessão encerrada, **quando** se tenta executar uma ação protegida, **então** nova autenticação é exigida.
- **Dado** um morador autenticado, **quando** tenta funções administrativas, **então** o acesso é negado também no serviço que processa a operação.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-003 — Recuperar acesso

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E2.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-006; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** herdado para validação.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero recuperar acesso para retomar o uso sem depender de intervenção informal da equipe.

**Valor e relevância:** Retomar o uso sem depender de intervenção informal da equipe. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Objetivo e fluxo:** solicitar recuperação de senha, receber instruções pelo canal validado, apresentar token de recuperação, cadastrar nova senha e invalidar o token após uso.

**Pré-condições:** mecanismo de recuperação disponível. **Exceções:** token inválido, expirado ou já utilizado não altera a senha; mensagens de solicitação não devem revelar se uma pessoa está cadastrada.

**Dados e resultado:** identificador da conta, solicitação e confirmação; credenciais recuperadas sem expor senha anterior. Canal, prazo e política de senha dependem de PD-003.

**Entrega demonstrável:** Recuperar acesso pelo canal e política aprovados sem expor conta ou credencial.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Recuperar acesso” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um token válido, **quando** o titular confirma uma senha aceita, **então** poderá autenticar-se com a nova senha.
- **Dado** um token usado ou inválido, **quando** houver nova tentativa, **então** a senha permanece inalterada.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-004 — Consultar e editar perfil

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E2.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-007; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** herdado para validação.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero reunir dados pessoais, histórico de descartes, saldo e recompensas adquiridas para manter informações pessoais corretas e consultar a própria conta.

**Valor e relevância:** Manter informações pessoais corretas e consultar a própria conta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** morador autenticado. **Fluxo:** consultar seus dados; editar campos permitidos; visualizar descartes concluídos, pontuação e recompensas; acessar extrato e estoque. Alterar e-mail ou identificadores exige política ainda a validar.

**Exceções e resultado:** usuário não pode editar registros de descarte ou saldo por esse formulário. Alteração falha não deve substituir os dados válidos anteriores. Não é permitido consultar o perfil privado de outro morador.

**Entrega demonstrável:** Consultar e editar somente campos permitidos do próprio perfil.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar e editar perfil” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um morador autenticado, **quando** consulta o perfil, **então** vê seus dados, saldo e históricos disponíveis.
- **Dado** uma alteração válida em campo permitido, **quando** a salva, **então** o perfil apresenta o novo valor sem alterar pontos ou descartes.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-009; RNF-MVP-001, RNF-MVP-002; RN-004.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero usar a mesma experiência de entrada com intenções distintas para escolher entre guardar embalagens para depois e iniciar a entrega imediatamente.

**Valor e relevância:** Escolher entre guardar embalagens para depois e iniciar a entrega imediatamente. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** login realizado. **Fluxo:** “Registrar” abre a entrada de resíduos e conclui com inclusão no estoque; “Descarte rápido” abre diretamente o scanner e, após revisão dos itens, segue para pontos de coleta. A tela permite alternar para nota fiscal e entrada manual.

**Exceções e resultado:** câmera negada não elimina a entrada manual. Cancelamento não conclui descarte nem concede pontos. A identificação da intenção deve ser preservada ao trocar a forma de cadastro.

**Entrega demonstrável:** Apresentar Registrar e Descarte rápido com entrada comum; a ação rápida abre o scanner diretamente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Disponibilizar Registrar e Descarte rápido” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Critérios de aceite:**

- **Dado** a ação Registrar, **quando** o cadastro é confirmado, **então** os itens ficam no estoque sem recompensa.
- **Dado** Descarte rápido, **quando** os itens são revisados e confirmados, **então** o usuário segue para escolha de ponto sem uma etapa obrigatória de navegação pelo estoque.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-006 — Identificar produto por código de barras

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E3.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-010; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero reduzir preenchimento manual a partir do identificador da embalagem para evitar digitação quando o código do produto é reconhecido.

**Valor e relevância:** Evitar digitação quando o código do produto é reconhecido. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** câmera autorizada ou alternativa de entrada disponível. **Fluxo:** ler código do produto; consultar a fonte de produtos; apresentar nome e material quando identificável; permitir revisão e quantidade; confirmar conforme a intenção inicial.

**Exceções:** código ilegível, produto não encontrado e fonte indisponível permitem cadastro manual. Código de barras não comprova compra, consumo ou posse exclusiva da unidade física. A mesma leitura não pode multiplicar itens involuntariamente.

**Entrega demonstrável:** Ler código de barras, consultar fonte aprovada e permitir revisão ou cadastro manual quando não identificado.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Identificar produto por código de barras” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-005, TSK-MOR-008, TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-004. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um código conhecido, **quando** a consulta termina, **então** o formulário é preenchido com os dados disponíveis para revisão.
- **Dado** um código desconhecido, **quando** não há identificação, **então** o morador pode informar nome, material e quantidade manualmente.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-007 — Importar itens de nota fiscal

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E3.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-011; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero preencher rapidamente o cadastro a partir dos produtos de uma compra, inspirado na facilidade de uso do Méliuz, sem cashback financeiro no MVP para cadastrar embalagens de uma compra com menos esforço.

**Valor e relevância:** Cadastrar embalagens de uma compra com menos esforço. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** leitura da nota e fonte de consulta disponíveis. **Fluxo:** escanear o identificador da nota; buscar informações; apresentar os itens e quantidades disponíveis; identificar possíveis embalagens PET e lata; permitir selecionar, revisar, corrigir e confirmar somente os resíduos desejados.

**Exceções:** nota indisponível ou ilegível permite entrada manual. Nome comercial ou volume não garante identificação do material. Importação não descarta automaticamente nem concede pontos. Reimportação da nota deve ter comportamento definido em PD-005.

**Entrega demonstrável:** Consultar nota suportada, selecionar itens e preencher formulário revisável, sem cashback ou descarte automático.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Importar itens de nota fiscal” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-005, TSK-MOR-008, TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-005, PD-004, PD-022. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** uma nota consultável com produtos identificados, **quando** a importação termina, **então** o formulário apresenta as informações recuperadas antes da confirmação.
- **Dado** material não identificado, **quando** o morador revisa, **então** pode escolher PET ou lata manualmente.
- **Dado** uma falha de consulta, **quando** o sistema informa o erro, **então** nenhuma recompensa é gerada e o cadastro manual permanece disponível.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-008 — Cadastrar resíduo manualmente

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-012; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero permitir entrada sem depender do scanner ou da nota para cadastrar PET e lata mesmo quando a leitura não funciona.

**Valor e relevância:** Cadastrar PET e lata mesmo quando a leitura não funciona. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** morador autenticado na tela compartilhada. **Entrada:** nome do produto/resíduo, material PET ou lata de alumínio e quantidade de embalagens.

**Fluxo:** preencher campos; validar material e quantidade; revisar; adicionar os itens conforme Registrar ou Descarte rápido. Quantidade deve ser inteira e positiva para contagem de embalagens; peso é informado pela cooperativa em operação distinta.

**Exceções e resultado:** não aceitar quantidade zero/negativa ou material fora do escopo; informar o campo inválido sem perder os demais dados válidos.

**Entrega demonstrável:** Formulário com nome, material PET/lata de alumínio, quantidade e inclusão revisável.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar resíduo manualmente” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-005; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Critérios de aceite:**

- **Dado** nome, material aceito e quantidade válida, **quando** o cadastro é confirmado, **então** os itens são adicionados conforme a intenção da ação.
- **Dado** quantidade inválida, **quando** o morador tenta confirmar, **então** o sistema solicita correção e não adiciona os itens.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-009 — Revisar itens antes da inclusão

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-013; RNF-MVP-001, RNF-MVP-002; RN-003, RN-004, RN-005.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero evitar que informação incompleta da leitura seja tratada como confirmação do usuário para corrigir identificação e quantidade antes de gravar embalagens.

**Valor e relevância:** Corrigir identificação e quantidade antes de gravar embalagens. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** itens obtidos por scanner, nota ou formulário. **Fluxo:** apresentar nome, material e quantidade; permitir correção e seleção dos itens a incluir; confirmar explicitamente. Produtos fora dos dois materiais iniciais não devem ser classificados silenciosamente como PET ou lata.

**Resultado:** lista validada para estoque ou descarte rápido. Cancelar a revisão não conclui descarte. Características desconhecidas devem aparecer como informação a completar, não como resultado confirmado da consulta.

**Entrega demonstrável:** Revisar itens importados ou digitados, completar material desconhecido e confirmar inclusão uma vez.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Revisar itens antes da inclusão” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-008; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-005. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** uma importação com material desconhecido, **quando** o usuário tenta confirmar, **então** o material deve ser completado antes da inclusão.
- **Dado** uma lista revisada, **quando** a confirma, **então** somente os itens selecionados e suas quantidades revisadas são incluídos.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-010 — Manter estoque e selecionar quantidades

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-014; RNF-MVP-001, RNF-MVP-002; RN-004, RN-007.
**Estado da especificação V6:** confirmado; persistência do caminho rápido definida na decisão de UX de 10/10/2026, com contratos reais ainda pendentes.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero apresentar itens disponíveis e permitir seleção de parte ou de todo o estoque para descarte para saber o que está disponível e separar apenas o que será entregue.

**Valor e relevância:** Saber o que está disponível e separar apenas o que será entregue. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** itens confirmados. **Fluxo:** salvar entradas; listar nome, material e quantidade; selecionar itens e quantidades disponíveis; iniciar escolha de ponto. Identificação e quantidade não equivalem a peso medido.

**Decisão posterior — 10/10/2026:** o caminho rápido mantém itens somente na memória do fluxo, sem inclusão automática no estoque. Cancelar, sair para outra área, recarregar ou fechar a aba elimina o rascunho. Abrir a rota em outra aba preserva o fluxo; retornar exige GPS novo. Falhas recuperáveis preservam os itens enquanto a pessoa continua no fluxo. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes em PD-006; ver [handoff](../../04-ux/01-morador-v6/01-handoff.md#jornada-e-regras-aprovadas).

**Exceções:** impedir seleção superior à quantidade disponível; evitar gravação duplicada por repetição de confirmação. Exclusão e ajustes manuais do estoque são PD-006.

**Entrega demonstrável:** Consultar estoque pessoal e selecionar quantidades disponíveis; registrar não concede pontos.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Manter estoque e selecionar quantidades” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-009; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-006. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Atenção:** a proposta antiga de persistir itens rápidos no estoque após abandono foi superada pela decisão de 10/10/2026. Aplicar rascunho em memória; não considerar os contratos reais de PD-006 concluídos por essa decisão.

**Critérios de aceite:**

- **Dado** cinco latas disponíveis, **quando** o morador seleciona duas, **então** a sessão de descarte contém duas, sem baixar o estoque antes da entrega.
- **Dado** uma seleção maior que o saldo, **quando** tenta prosseguir, **então** o sistema impede a operação e informa a quantidade disponível.
- **Dado** apenas o registro de itens, **quando** o estoque é atualizado, **então** não há crédito de pontos.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-011 — Consultar pontos próximos compatíveis

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-015; RNF-MVP-001, RNF-MVP-002; RN-007.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero encontrar locais que recebam os materiais selecionados para encontrar um destino que receba o material selecionado.

**Valor e relevância:** Encontrar um destino que receba o material selecionado. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** seleção de resíduos ou consulta ao mapa. **Fluxo:** obter localização quando autorizada; mostrar pontos próximos no mapa; informar materiais aceitos; permitir filtros e escolha. Um ponto incompatível não pode ser usado para concluir a entrega daquele material.

**Exceções:** nenhum ponto elegível, GPS negado e serviço de mapas indisponível devem produzir mensagem clara sem concluir descarte. Busca por endereço sem GPS e descarte em mais de um ponto são PD-007.

**Entrega demonstrável:** Consultar pontos próximos e compatíveis sem confundir estimativa de distância com presença comprovada.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar pontos próximos compatíveis” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-010, TSK-ADM-005, TSK-PON-001; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-007. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** seleção de latas, **quando** o morador consulta pontos, **então** identifica quais recebem alumínio.
- **Dado** seleção de PET e lata, **quando** tenta concluir tudo em um ponto que só aceita PET, **então** o sistema não confirma a entrega incompatível.
- **Dado** ausência de ponto compatível, **quando** a consulta termina, **então** informa a indisponibilidade sem alterar estoque ou saldo.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-012 — Consultar detalhes do ponto

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-016; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** herdado com ajustes confirmados.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero fornecer informações para decidir onde entregar os resíduos para decidir onde entregar com informações operacionais claras.

**Valor e relevância:** Decidir onde entregar com informações operacionais claras. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** ponto consultável. **Fluxo:** apresentar nome, endereço, posição no mapa, materiais aceitos, funcionamento, tipo fixo/temporário e disponibilidade. Exibição pública do volume acumulado depende de PD-019.

**Exceções e resultado:** diferenciar ponto desativado, fora do período temporário e condição de ocupação. Regra de recebimento durante fechamento ou lotação precisa ser definida; não se presume que ponto cheio aceite novos descartes.

**Entrega demonstrável:** Exibir localização, materiais e disponibilidade do ponto selecionado conforme regras aprovadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar detalhes do ponto” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-011; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-019, PD-007, PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um ponto consultável, **quando** abre seus detalhes, **então** o morador vê localização, materiais e informações de funcionamento cadastradas.
- **Dado** um ponto temporário fora do período válido, **quando** é consultado, **então** não é apresentado como local atualmente disponível para descarte.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-013 — Encaminhar morador à navegação externa

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-017; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero orientar o trajeto sem exigir acompanhamento contínuo dentro do Residuum para chegar ao ponto escolhido usando o aplicativo de mapas.

**Valor e relevância:** Chegar ao ponto escolhido usando o aplicativo de mapas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** ponto selecionado com coordenadas válidas. **Fluxo:** oferecer navegação; abrir aplicativo/serviço externo com o ponto como destino; permitir retorno ao fluxo para confirmar a entrega.

**Exceções:** indisponibilidade do navegador de mapas deve preservar ponto e itens. Não marcar chegada ou descarte com base apenas na abertura da rota. A rota abre em outra aba e conserva o fluxo; no retorno, exigir GPS novo. Fechar a aba do fluxo elimina o rascunho rápido conforme decisão de 10/10/2026; contratos reais continuam sujeitos a PD-006.

**Entrega demonstrável:** Abrir navegação externa com destino correto e retornar ao fluxo sem registrar descarte pela abertura da rota.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Encaminhar morador à navegação externa” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-006, PD-007. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um ponto escolhido, **quando** o morador inicia navegação, **então** o destino enviado corresponde ao ponto selecionado.
- **Dado** apenas a abertura da navegação, **quando** retorna, **então** a entrega ainda exige validação de presença e confirmação.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-014 — Validar presença por GPS

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-018; RNF-MVP-002, RNF-MVP-003, RNF-MVP-004; RN-006.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero condicionar a confirmação à proximidade com o ponto escolhido para confirmar a presença no ponto antes de concluir a entrega.

**Valor e relevância:** Confirmar a presença no ponto antes de concluir a entrega. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** ponto e itens selecionados; permissão de localização. **Fluxo:** obter posição recente e informação de precisão; comparar com o ponto segundo os parâmetros aprovados; liberar confirmação se válida; registrar a evidência necessária à operação.

**Exceções:** fora do raio, posição antiga, baixa precisão ou falha de obtenção não concluem entrega. Exibir impedimento e permitir nova tentativa conforme política. GPS é indício de proximidade, não prova de entrega física. Não existe alternativa por QR ou aprovação retroativa neste escopo.

**Entrega demonstrável:** Validar GPS com parâmetros aprovados, impedindo conclusão com presença inválida ou permissão negada.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Validar presença por GPS” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-012; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-008, PD-027. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** posição aceita pelos parâmetros validados, **quando** a presença é verificada, **então** o sistema permite confirmar o descarte no ponto escolhido.
- **Dado** GPS indisponível ou posição rejeitada, **quando** tenta concluir, **então** não há baixa de itens nem recompensa e o motivo é apresentado.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-015 — Confirmar entrega e movimentar estoques

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-019; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-007, RN-008.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero registrar entrega única e consistente dos itens ao ponto para concluir a entrega sem perder embalagens ou receber créditos repetidos.

**Valor e relevância:** Concluir a entrega sem perder embalagens ou receber créditos repetidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** presença válida, itens disponíveis e ponto apto a recebê-los conforme regras validadas. **Fluxo:** apresentar resumo; receber confirmação explícita; revalidar itens, material e ponto; registrar descarte; baixar somente as quantidades entregues do estoque do morador; registrar entrada correspondente no ponto; conceder 10 pontos básicos uma vez.

**Exceções:** repetição, concorrência, incompatibilidade ou falha não devem gerar baixa parcial, saldo negativo ou crédito duplicado. Estimativas do ponto não se tornam peso medido. Bônus deve ter vínculo rastreável, sem reaplicar crédito básico se processado posteriormente.

**Entrega demonstrável:** Persistir descarte, baixa pessoal, entrada no ponto e crédito básico como resultado consistente e único.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Confirmar entrega e movimentar estoques” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-010, TSK-MOR-014, TSK-MOR-017; TSK-TRA-000 e controles transversais aplicáveis. O crédito em TSK-MOR-017 integra o mesmo resultado consistente; não são duas confirmações independentes.

**Decisões e recorte executável:** PD-006, PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Atenção:** seleção não baixa estoque; apenas confirmação validada produz entrega e 10 pontos. Bônus posterior não bloqueia nem repete o crédito básico.

**Critérios de aceite:**

- **Dado** três latas e entrega válida de uma, **quando** confirma, **então** restam duas no estoque, o ponto registra uma recebida e o morador ganha 10 pontos básicos.
- **Dado** a mesma confirmação reenviada, **quando** é processada, **então** o descarte e seus efeitos ocorrem uma única vez.
- **Dado** falha na conclusão, **quando** a operação não termina, **então** o sistema não apresenta sucesso com estoque ou crédito básico incompletos.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-016 — Exibir confirmação e histórico de descartes

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-020; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero tornar compreensível o resultado da entrega e permitir consulta posterior para ver o resultado da entrega e continuar para Home ou Loja.

**Valor e relevância:** Ver o resultado da entrega e continuar para Home ou Loja. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** operação concluída. **Fluxo:** exibir ponto, itens/quantidades, resultado e 10 pontos básicos; separar eventual bônus e saldo; oferecer “Voltar para Home” e “Ir para a Loja”; disponibilizar o registro no histórico pessoal.

**Exceções:** falha não usa tela de sucesso. Bônus ainda não confirmado não aparece como já creditado. Histórico deve distinguir registro no estoque de entrega realizada.

**Entrega demonstrável:** Mostrar confirmação e histórico, distinguindo 10 pontos confirmados de bônus ainda pendente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Exibir confirmação e histórico de descartes” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-015; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Critérios de aceite:**

- **Dado** descarte concluído, **quando** a confirmação aparece, **então** apresenta a recompensa e ambas as ações de navegação.
- **Dado** “Ir para a Loja”, **quando** o morador seleciona a ação, **então** acessa a loja autenticado.
- **Dado** consulta ao histórico, **quando** localiza a entrega, **então** os dados correspondem ao descarte concluído.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-017 — Creditar recompensa básica provisória

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-021; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-008, RN-010, RN-016.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero conceder 10 pontos por operação de descarte concluída enquanto o modelo definitivo não é elaborado para receber a recompensa provisória pela entrega concluída.

**Valor e relevância:** Receber a recompensa provisória pela entrega concluída. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** RF-MVP-019 concluído de forma consistente. **Fluxo:** registrar crédito de 10 pontos vinculado ao descarte e ao morador; atualizar saldo; tornar o lançamento consultável. Dez pontos são por descarte, não por embalagem, produto, kg, scanner ou nota fiscal.

**Exceções e resultado:** não creditar no cadastro, início de rota, chegada sem confirmação ou pesagem da cooperativa. Repetições devem recuperar o resultado anterior. Quantidades e materiais não alteram os 10 pontos básicos da regra provisória.

**Entrega demonstrável:** Creditar 10 pontos básicos por operação concluída, com origem rastreável e sem repetição na pesagem.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Creditar recompensa básica provisória” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** Sem dependência funcional anterior específica; verificar fundamentos da etapa; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-010. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um descarte válido contendo vários itens, **quando** é concluído, **então** recebe um crédito básico de 10 pontos.
- **Dado** uma pesagem da cooperativa sobre materiais já entregues, **quando** é registrada, **então** nenhum novo crédito básico é gerado para os moradores.
- **Dado** confirmação repetida, **quando** é processada, **então** o saldo não aumenta novamente.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-018 — Aplicar bônus de campanha

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-022; RNF-MVP-001, RNF-MVP-002; RN-009.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero conceder pontos adicionais por produto elegível ou meta de descarte para receber benefício adicional quando cumpre uma campanha.

**Valor e relevância:** Receber benefício adicional quando cumpre uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**


**Pré-condições:** campanha publicada, regra aprovada e eventos elegíveis registrados. **Fluxo:** verificar participação e condições; apurar produto, quantidade ou meta configurados; registrar bônus separado do crédito básico; atualizar o saldo e indicar a campanha de origem.

**Exceções:** não presumir que a compra gera bônus nem que campanhas se acumulam. Eventos manuais podem não comprovar um produto específico. Elegibilidade, janela de apuração, repetição, limites e evidência do produto são PD-011.

**Entrega demonstrável:** Apurar bônus elegível segundo regra aprovada, separado do básico e sem duplicar lançamentos.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Aplicar bônus de campanha” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-017, TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** regra validada de bônus por descarte elegível, **quando** a condição é cumprida, **então** o bônus é registrado com a campanha e o evento que o originaram.
- **Dado** uma campanha não elegível, **quando** um descarte é concluído, **então** os 10 pontos básicos permanecem sem bônus indevido.
- **Dado** um bônus já processado para o mesmo evento e regra, **quando** o processamento é repetido, **então** não há duplicação.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-019 — Consultar saldo e extrato de pontos

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E2.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-023; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado por consolidação.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero explicar como o saldo foi formado e utilizado para entender o saldo e a origem de cada movimentação.

**Valor e relevância:** Entender o saldo e a origem de cada movimentação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** morador autenticado. **Fluxo:** mostrar saldo disponível e lançamentos, com data, natureza crédito/débito, quantidade, descrição e origem; distinguir crédito básico, bônus, voucher e participação paga, quando aplicável; permitir consultar o vínculo da operação.

**Exceções e resultado:** extrato de outra pessoa não é acessível. Consulta falha não deve ser confundida com saldo zero. Expiração, ajustes administrativos e estornos ainda exigem regras aprovadas em PD-010 e PD-012.

**Entrega demonstrável:** Consultar saldo e extrato de créditos/débitos com vínculo a descarte, bônus e aquisição.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar saldo e extrato de pontos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-017; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-010, PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** crédito de 10 pontos e débito aprovado de 4, **quando** consulta o extrato, **então** encontra os dois lançamentos e saldo de 6, na ausência de outros movimentos.
- **Dado** um bônus de campanha, **quando** consulta o lançamento, **então** identifica sua origem separadamente da recompensa básica.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-020 — Apurar metas de descarte das campanhas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-024; RNF-MVP-001, RNF-MVP-002; RN-009.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero indicar o progresso em campanhas que exigem descarte de determinada quantidade ou produto para acompanhar quanto falta para cumprir a meta de uma campanha.

**Valor e relevância:** Acompanhar quanto falta para cumprir a meta de uma campanha. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** campanha com meta validada. **Fluxo:** considerar eventos elegíveis segundo a regra publicada; atualizar progresso; apresentar quantidade atingida, meta e condição restante; sinalizar cumprimento sem antecipar prêmio não confirmado.

**Exceções:** registro no estoque não conta como descarte. Não deduzir compra ou entrega a partir da leitura de código. Definir o que comprova o produto específico e se descartes anteriores à adesão contam em PD-011.

**Entrega demonstrável:** Mostrar progresso a partir de eventos elegíveis, mantendo quantidades e condições da campanha rastreáveis.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Apurar metas de descarte das campanhas” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** campanha com meta de cinco unidades e dois descartes elegíveis somando três, **quando** o progresso é apurado, **então** apresenta três de cinco.
- **Dado** apenas itens cadastrados no estoque, **quando** a meta é consultada, **então** eles não são tratados como unidades já descartadas.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-021 — Debitar pontos com consistência

**Perfil principal:** morador. **Prioridade:** P0. **Etapa:** E5.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-025; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-010.
**Estado da especificação V6:** confirmado por dependência das recompensas.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero cobrar os pontos definidos sem permitir saldo negativo ou compra duplicada para usar pontos sem saldo negativo ou cobranças duplicadas.

**Valor e relevância:** Usar pontos sem saldo negativo ou cobranças duplicadas. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** recompensa/participação válida, custo aprovado e saldo suficiente. **Fluxo:** apresentar custo; obter confirmação; verificar saldo atual e disponibilidade; registrar débito vinculado ao benefício adquirido; atualizar saldo e disponibilizar resultado.

**Exceções:** saldo insuficiente ou oferta indisponível não gera débito. Duas compras simultâneas devem respeitar saldo e limite. Não se presume pagamento complementar em dinheiro ou conversão monetária dos pontos.

**Entrega demonstrável:** Realizar débito vinculado à aquisição/participação, validando saldo e concorrência.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Debitar pontos com consistência” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-019; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** saldo insuficiente, **quando** o morador confirma a compra, **então** não há débito nem aquisição.
- **Dado** confirmação reenviada da mesma operação, **quando** é processada, **então** não duplica débito ou benefício.
- **Dado** duas aquisições concorrentes sem saldo para ambas, **quando** são processadas, **então** o saldo permanece não negativo.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-022 — Consultar a loja de recompensas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-026; RNF-MVP-001, RNF-MVP-002; RN-010.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero descobrir campanhas, sorteios e vouchers disponíveis para descobrir recompensas e campanhas disponíveis.

**Valor e relevância:** Descobrir recompensas e campanhas disponíveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** morador autenticado. **Fluxo:** acessar pela confirmação do descarte ou navegação da plataforma; consultar campanhas vigentes, sorteios e vouchers; visualizar título, representação visual, condições resumidas e custo quando aplicável; abrir detalhes antes de participar ou comprar.

**Exceções:** catálogo vazio deve informar ausência de ofertas. Ofertas não publicadas não são apresentadas como compráveis. A loja comercializa benefícios com pontos; cashback financeiro está fora do MVP.

**Entrega demonstrável:** Consultar Loja com ofertas publicadas e condições claras, mantendo pontos distintos de dinheiro.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar a loja de recompensas” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-023, TSK-MOR-024, TSK-MOR-025, TSK-MOR-026; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** Sem pendência específica citada na ficha V6; validar políticas comuns de acesso e ambiente antes de liberar.

**Critérios de aceite:**

- **Dado** campanhas e vouchers publicados, **quando** o morador abre a loja, **então** encontra as ofertas disponíveis e pode consultar detalhes.
- **Dado** catálogo sem ofertas vigentes, **quando** o abre, **então** vê uma mensagem adequada sem opções fictícias de compra.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-023 — Consultar detalhes e condições da campanha

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-027; RNF-MVP-001, RNF-MVP-002; RN-019.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero explicar o que fazer e o que poderá ganhar antes da adesão para entender o que precisa fazer antes de participar.

**Valor e relevância:** Entender o que precisa fazer antes de participar. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** campanha consultável. **Fluxo:** apresentar título, descrição, imagem/vídeo disponível, período, produtos ou materiais elegíveis, quantidade/meta, condições de participação, custo quando houver e benefício; oferecer a ação aplicável à campanha.

**Exceções:** não anunciar recompensa sem regra publicada. A campanha deve esclarecer se exige descarte, uso de pontos ou outra condição aprovada; leitura de nota não comprova automaticamente descarte. Condições de participação e frequência são PD-011.

**Entrega demonstrável:** Abrir campanha e consultar descrição, vigência, condições e benefícios aprovados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar detalhes e condições da campanha” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-024; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** campanha baseada no descarte de um produto, **quando** abre seus detalhes, **então** o morador vê produto, meta e benefício configurados.
- **Dado** campanha com vídeo, **quando** os detalhes são exibidos, **então** a mídia é acessível e as condições também estão disponíveis em texto.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-024 — Administrar e participar de campanhas

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-028; RNF-MVP-001, RNF-MVP-002; RN-009, RN-019.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero permitir campanhas internas geridas pelo administrador e participação pelos moradores para participar de campanhas que tenham condições publicadas pela administração.

**Valor e relevância:** Participar de campanhas que tenham condições publicadas pela administração. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** permissão administrativa para gestão; campanha publicada para participação. **Entrada administrativa:** título, descrição, mídia, período e regra de meta, elegibilidade e recompensa. **Fluxo:** preparar cadastro; validar informações; publicar conforme regra aprovada; permitir adesão quando exigida; acompanhar progresso.

**Exceções:** não herdar a obrigação da V5 de ter parceiro confirmado antes de toda campanha. Alteração de campanha já participada, adesão automática/manual e bônus acumulados dependem de PD-011. Participação com custo depende de confirmação e RF-MVP-025.

**Entrega demonstrável:** Entregar gestão administrativa e participação do morador na mesma capacidade, com regras e permissões distintas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar e participar de campanhas” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-011. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** administrador autorizado e campanha com dados e regra validados, **quando** a publica, **então** ela fica consultável pelos moradores elegíveis.
- **Dado** um morador, **quando** tenta alterar a regra da campanha, **então** a alteração é negada.
- **Dado** uma condição de participação publicada, **quando** o morador adere, **então** a participação obedece à condição exibida, sem cobranças ocultas.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-025 — Administrar e adquirir vouchers

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-029; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero trocar pontos por cupons de promoção ou benefícios para adquirir voucher com pontos e consultar as condições de uso.

**Valor e relevância:** Adquirir voucher com pontos e consultar as condições de uso. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** voucher cadastrado e publicado pelo administrador; custo e regras de uso aprovados. **Entrada:** título, descrição, benefício, custo em pontos, instruções e parâmetros de validade/disponibilidade conforme definição.

**Fluxo:** administrador cadastra oferta; morador consulta detalhes e confirma a compra; sistema debita pontos com consistência; disponibiliza voucher adquirido em sua área de recompensas. Forma de emissão do código e validação no parceiro ainda são PD-012.

**Exceções:** não emitir voucher sem aquisição confirmada nem cobrar por oferta indisponível. Limite de unidades, cancelamento e devolução de pontos precisam de validação.

**Entrega demonstrável:** Entregar cadastro/publicação administrativa e aquisição pelo morador com estoque, saldo e regras aprovados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar e adquirir vouchers” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-021, TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-012. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** voucher disponível e saldo suficiente, **quando** o morador confirma, **então** uma aquisição é registrada e o débito corresponde ao custo exibido.
- **Dado** voucher adquirido, **quando** consulta suas recompensas, **então** encontra o benefício e as instruções de uso aprovadas.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-MOR-026 — Administrar sorteios e registrar participações

**Perfil principal:** morador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-030; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-019.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como morador, quero usar pontos para participar de sorteios com regras compreensíveis e resultado rastreável para participar de sorteio com regras compreensíveis e registro confiável.

**Valor e relevância:** Participar de sorteio com regras compreensíveis e registro confiável. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** sorteio publicado com regras validadas. **Fluxo:** administrador cadastra descrição, prêmio, período e condições; morador consulta e confirma participação; registrar inscrição e custo se aplicável; apurar resultado conforme mecanismo aprovado; disponibilizar resultado e notificação prevista.

**Exceções:** custo em pontos, quantidade de chances, limites, algoritmo, cancelamento, prêmio e condições de realização aguardam PD-013. Seleção aleatória e e-mail da V5 são referências para validação, não autorização para realizar promoção sem regras acordadas.

**Entrega demonstrável:** Entregar gestão administrativa e inscrição do morador conforme condições aprovadas, incluindo custo quando aplicável.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar sorteios e registrar participações” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-021, TSK-ADM-004, TSK-ADM-017; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-013, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** sorteio com custo aprovado, **quando** a participação é confirmada com saldo suficiente, **então** registra participação e débito vinculados.
- **Dado** inscrições e método de apuração validados, **quando** o resultado é apurado, **então** registra os ganhadores e a execução para consulta autorizada.
- **Dado** inscrição reenviada da mesma operação, **quando** processada, **então** não cria chances adicionais involuntariamente.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

## 5. Responsável pelo ponto

**Jornada:** Acesso vinculado → materiais → estoque/ocupação → necessidade de retirada → pedido ao administrador → acompanhamento → relatórios.

**Capacidades compartilhadas:** acesso em TSK-MOR-002/TSK-ADM-004; ponto cadastrado em TSK-ADM-005; acompanhar coleta em TSK-COO-003. O responsável não atribui a cooperativa diretamente.

### TSK-PON-001 — Editar materiais aceitos

**Perfil principal:** responsável pelo ponto. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-034; RNF-MVP-001, RNF-MVP-002; RN-003.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero informar e alterar se o ponto recebe PET, lata de alumínio ou ambos para informar aos moradores quais embalagens o ponto recebe.

**Valor e relevância:** Informar aos moradores quais embalagens o ponto recebe. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** ponto existente e permissão. **Fluxo:** consultar materiais; editar seleção; salvar e refletir nos detalhes e critérios de descarte; registrar autor e alteração. Material aceito é diferente de material já acumulado.

**Exceções:** deixar de aceitar um material não elimina seu histórico ou estoque existente. Comportamento para usuário que já iniciou deslocamento e alterações simultâneas é PD-009.

**Entrega demonstrável:** Editar PET/lata aceitos por responsável vinculado ou administrador; atualizar consultas sem apagar estoque anterior.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Editar materiais aceitos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-005, TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** responsável autorizado, **quando** altera os materiais aceitos, **então** as consultas posteriores apresentam a nova configuração.
- **Dado** saldo de PET e retirada do PET da lista aceita, **quando** consulta o estoque, **então** o saldo anterior permanece registrado.
- **Dado** responsável de outro ponto, **quando** tenta editar, **então** a operação é negada.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-PON-002 — Acompanhar estoque e ocupação do ponto

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-035; RNF-MVP-001, RNF-MVP-002; RN-015, RN-021.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero mostrar os materiais recebidos e a necessidade de retirada para acompanhar o material acumulado e preparar a retirada.

**Valor e relevância:** Acompanhar o material acumulado e preparar a retirada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** apresentar entradas por material, quantidades registradas, coletas e situação de ocupação; atualizar após descartes e retiradas; distinguir quantidades de embalagens, estimativas e pesos efetivamente coletados.

**Exceções:** não converter número de latas em kg reais sem regra validada. Método de ocupação, unidade da capacidade e tratamento de coleta parcial são PD-009 e PD-014. O painel operacional e os relatórios pagos são capacidades distintas; acesso mínimo precisa de PD-019.

**Entrega demonstrável:** Exibir estoque e ocupação com unidade e cálculo definidos, distinguindo embalagens de pesos medidos.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Acompanhar estoque e ocupação do ponto” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-005, TSK-MOR-015; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-009, PD-014, PD-019, PD-018. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** entradas de PET e lata, **quando** consulta o painel, **então** identifica os materiais separadamente.
- **Dado** peso medido registrado na coleta, **quando** consulta indicadores, **então** ele não é apresentado como o peso individual comprovado de cada descarte.
- **Dado** informação apenas estimada, **quando** é exibida, **então** aparece identificada como estimativa.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-PON-003 — Sinalizar necessidade de coleta

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-036; RNF-MVP-001, RNF-MVP-002; RN-013.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero evidenciar ponto próximo do limite ou cheio para apoiar agendamento para identificar necessidade de retirada antes de comprometer a operação.

**Valor e relevância:** Identificar necessidade de retirada antes de comprometer a operação. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** critério de ocupação aprovado. **Fluxo:** avaliar nível conforme parâmetro; sinalizar no painel do administrador e do responsável; disponibilizar início de pedido de coleta. Não encaminhar automaticamente à cooperativa.

**Exceções:** cálculo de nível, frequência de atualização, alertas externos e repetição são PD-009 e PD-021. Um alerta por si só não agenda retirada nem comprova que ela aconteceu.

**Entrega demonstrável:** Sinalizar lotação no painel do ponto e administração, sem chamar cooperativa automaticamente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Sinalizar necessidade de coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-PON-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-009, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** nível atingindo o limite validado, **quando** o indicador é atualizado, **então** o administrador e o responsável visualizam a necessidade de coleta.
- **Dado** somente a sinalização de lotação, **quando** ela ocorre, **então** nenhuma cooperativa recebe coleta automaticamente atribuída.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-PON-004 — Solicitar coleta ao administrador

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-037; RNF-MVP-001, RNF-MVP-002; RN-012.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero pedir retirada sem escolher ou acionar diretamente a cooperativa para pedir retirada ao administrador e acompanhar o encaminhamento.

**Valor e relevância:** Pedir retirada ao administrador e acompanhar o encaminhamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** responsável vinculado ao ponto. **Fluxo:** selecionar o ponto autorizado; registrar pedido e informações pertinentes; encaminhar ao painel administrativo; acompanhar encaminhamento. O administrador também pode iniciar coleta sem pedido prévio do ponto.

**Exceções:** não gerar solicitações duplicadas por repetição de envio. Regras para múltiplos pedidos abertos, cancelamento e informações opcionais são PD-014.

**Entrega demonstrável:** Enviar pedido identificado para administração, sem atribuição automática à cooperativa.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Solicitar coleta ao administrador” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-PON-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-014. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** responsável autorizado, **quando** envia um pedido, **então** o administrador pode consultá-lo com identificação do ponto e solicitante.
- **Dado** pedido ainda não encaminhado, **quando** a cooperativa consulta sua área, **então** ele não aparece como coleta atribuída a ela.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-PON-005 — Consultar relatórios dos pontos

**Perfil principal:** responsável pelo ponto. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como responsável pelo ponto, quero consultar movimentação e resultados dos pontos, sem prometer dados ainda não definidos para obter relatórios dos pontos autorizados conforme plano.

**Valor e relevância:** Obter relatórios dos pontos autorizados conforme plano. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** selecionar ponto/período autorizado; consultar descartes, materiais, coletas e pesos medidos disponíveis; apresentar usuários associados aos eventos apenas no nível de detalhe permitido; aplicar limites do plano.

**Exceções:** peso coletado não significa material vendido ou comprado. Expressões como “quantas pessoas passaram” precisam de PD-020: GPS de confirmação não mede visitantes que não registraram eventos. Download CSV/PDF é PD-019, não inclusão automática.

**Entrega demonstrável:** Consultar relatórios com abrangência e unidades aprovadas; administrador também segue a política de plano.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar relatórios dos pontos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-TRA-001; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-020, PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** ponto autorizado e plano com o relatório, **quando** consulta um período, **então** encontra dados correspondentes aos eventos registrados e às unidades indicadas.
- **Dado** relatório não incluído no plano, **quando** solicita acesso, **então** o sistema informa a restrição sem retornar os dados protegidos.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

## 6. Cooperativa

**Jornada:** Acesso vinculado → solicitação atribuída → aceite → agendamento/rota → materiais e pesos → acompanhamento financeiro.

**Capacidades compartilhadas:** cadastro/vínculo em TSK-ADM-008; login em TSK-MOR-002; situação de pagamento em TSK-ADM-012. A cooperativa preenche materiais e pesos; a plataforma fornece trajeto planejado e horário.

### TSK-COO-001 — Consultar e aceitar solicitação de coleta

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-040; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-013.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero confirmar que a cooperativa realizará a coleta proposta para decidir se pode atender à coleta que lhe foi atribuída.

**Valor e relevância:** Decidir se pode atender à coleta que lhe foi atribuída. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** solicitação atribuída e ainda passível de aceite. **Fluxo:** consultar ponto, materiais aceitos e agendamento; confirmar aceite; registrar operador e momento; refletir decisão no painel administrativo.

**Exceções:** outra cooperativa não pode aceitar; repetição não cria nova coleta. Recusa, silêncio, prazo de resposta e cancelamento aguardam PD-014. Não existe oferta indiscriminada para primeira cooperativa que responder.

**Entrega demonstrável:** Consultar e aceitar solicitação atribuída uma única vez, expondo decisão aos atores autorizados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Consultar e aceitar solicitação de coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-009; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-014. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** solicitação destinada à cooperativa, **quando** seu operador aceita, **então** o administrador e a cooperativa consultam o aceite registrado.
- **Dado** cooperativa diferente, **quando** tenta aceitar, **então** a operação é negada.
- **Dado** aceite repetido da mesma solicitação, **quando** processado, **então** não duplica coleta ou compromisso.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-COO-002 — Fornecer rota e agendamento no painel

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-041; RNF-MVP-001, RNF-MVP-002; RN-014.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero disponibilizar destino, rota planejada e horário previsto sem preenchimento manual da cooperativa para planejar a ida ao ponto com rota e horário fornecidos.

**Valor e relevância:** Planejar a ida ao ponto com rota e horário fornecidos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** coleta atribuída, ponto georreferenciado e serviço de mapas disponível. **Fluxo:** exibir localização e agendamento; obter rota via integração prevista com Google Maps; apresentar orientação no painel.

**Exceções:** falha da API deve manter identificação do ponto e compromisso acessíveis. Origem do trajeto, navegação externa/interna da cooperativa, atualização da rota e estimativa de chegada são PD-017. Não inclui prova do caminho percorrido ou rastreamento contínuo.

**Entrega demonstrável:** Apresentar destino, agendamento e rota planejada pelo serviço aprovado sem alegar trajeto realizado.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Fornecer rota e agendamento no painel” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-017. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** coleta atribuída com destino válido, **quando** o operador abre o painel, **então** vê ponto e agendamento fornecidos pela plataforma.
- **Dado** rota obtida pelo serviço, **quando** é exibida, **então** está identificada como orientação planejada e não como trajeto realizado.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-COO-003 — Acompanhar andamento da coleta

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-042; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado com estados propostos para validação.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero mostrar a progressão da solicitação sem confundir operação e pagamento para compartilhar o andamento sem confundir retirada e recebimento.

**Valor e relevância:** Compartilhar o andamento sem confundir retirada e recebimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** registrar solicitação, aceite e entrega dos registros da coleta; apresentar situação e eventos com autoria; manter histórico. Proposta de estados: solicitada, aceita, em execução e registrada. Transição “em execução” depende de gatilho a definir.

**Exceções:** estados de recusada, cancelada ou concluída após revisão administrativa não são decisões confirmadas. Regras de correção e início real de execução aguardam PD-014 e PD-018.

**Entrega demonstrável:** Consultar eventos de solicitação, aceite e registro; transições não definidas permanecem condicionadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Acompanhar andamento da coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-014, PD-018, PD-017. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Atenção:** “em execução” e seu gatilho são propostos; não tornar essa passagem obrigatória sem resolver PD-014.

**Critérios de aceite:**

- **Dado** aceite registrado, **quando** os atores autorizados consultam a coleta, **então** veem a mesma decisão com autoria e data.
- **Dado** coleta registrada e pagamento ainda não confirmado, **quando** consultam o andamento, **então** situação operacional e financeira são exibidas separadamente.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-COO-004 — Registrar materiais e pesos retirados

**Perfil principal:** operador da cooperativa. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-043; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-003, RN-014, RN-015, RN-016.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como operador da cooperativa, quero informar o que efetivamente foi retirado do ponto por material para informar à administração quais materiais retirou e seus pesos.

**Valor e relevância:** Informar à administração quais materiais retirou e seus pesos. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** solicitação aceita e acesso autorizado. **Entrada:** material PET e/ou lata de alumínio e peso medido de cada material; kg como unidade de apresentação herdada da V5, precisão a validar.

**Fluxo:** abrir coleta; preencher os materiais retirados e pesos; revisar; enviar; disponibilizar registros ao administrador; refletir movimentação do ponto segundo regra de conciliação validada. Somente materiais presentes na retirada devem ser informados; campo ausente não significa peso medido zero.

**Exceções:** rejeitar peso negativo e registrar falha sem concluir. Coleta parcial, peso zero, correção e reconciliação com embalagens em estoque são PD-014 e PD-018. Não zerar automaticamente todo o ponto só porque houve coleta.

**Entrega demonstrável:** Registrar PET/alumínio e pesos por material na coleta aceita, sem novo crédito ao morador e sem zerar o ponto por inferência.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Registrar materiais e pesos retirados” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-COO-001; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-014, PD-018. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Atenção:** aceite é a pré-condição confirmada. Não converter unidades em kg nem zerar material remanescente sem conciliação aprovada.

**Critérios de aceite:**

- **Dado** coleta aceita, **quando** registra 12 kg de PET e 3 kg de alumínio, **então** o administrador consulta os dois pesos vinculados ao ponto, à coleta e à cooperativa.
- **Dado** registro reenviado da mesma operação, **quando** processado, **então** não duplica retirada ou peso contabilizado.
- **Dado** pesagem registrada, **quando** o resultado é gravado, **então** não credita novamente os 10 pontos dos moradores.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

## 7. Administrador

**Jornada:** Convites/usuários → pontos → cooperativas → solicitação/agendamento → pagamento → Loja → indicadores/planos.

**Capacidades compartilhadas:** editar materiais em TSK-PON-001; acompanhar ocupação em TSK-PON-002; gerir campanhas/vouchers/sorteios em TSK-MOR-024/TSK-MOR-025/TSK-MOR-026; relatórios em TSK-PON-005; andamento em TSK-COO-003. Essas fichas também especificam a interface administrativa.

### TSK-ADM-001 — Gerenciar convites individuais

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.
**Estado da especificação V6:** confirmado com pendências.
**Objetivo:** autorizar um único novo cadastro por link individual..
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero autorizar um único novo cadastro por link individual para controlar quem pode entrar na plataforma.

**Valor e relevância:** Controlar quem pode entrar na plataforma. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições e entrada:** administrador autenticado e autorizado; modalidade individual selecionada. Prazo e vinculação ao destinatário dependem de PD-001.

**Fluxo:** administrador gera o convite; o sistema cria um link com identificação não previsível; apresenta seu estado e disponibiliza o link para distribuição pelo administrador; o destinatário acessa o cadastro; após cadastro bem-sucedido, o convite é consumido uma única vez.

**Resultado e exceções:** cadastro falho não consome o convite. Link inexistente, expirado quando houver prazo, ou consumido não autoriza novo cadastro. Duas confirmações simultâneas não podem produzir dois usuários com o mesmo convite.

**Entrega demonstrável:** Criar e consultar link individual com limite de um cadastro; demonstrar bloqueio de reutilização.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Gerenciar convites individuais” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-001, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um convite individual válido, **quando** um cadastro é concluído, **então** o sistema cria um usuário e marca o convite como utilizado.
- **Dado** o mesmo convite usado em duas confirmações simultâneas, **quando** ambas forem processadas, **então** somente um cadastro poderá consumir esse convite.
- **Dado** um link inválido ou já consumido, **quando** alguém tentar cadastrar-se, **então** o sistema informa o impedimento sem criar usuário.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-002 — Gerenciar convites compartilhados

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002.
**Estado da especificação V6:** confirmado com pendências.
**Objetivo:** controlar entrada de um grupo por um link com expiração e número máximo de cadastros..
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero controlar entrada de um grupo por um link com expiração e número máximo de cadastros para controlar o tamanho do piloto sem distribuir links pessoa a pessoa.

**Valor e relevância:** Controlar o tamanho do piloto sem distribuir links pessoa a pessoa. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições e entrada:** administrador autorizado; quantidade limite positiva e instante de expiração informados. Fuso e limites permitidos serão definidos em PD-001.

**Fluxo:** gerar link; acompanhar limite, cadastros concluídos e validade; permitir novas inscrições enquanto o convite estiver vigente e houver vagas; incrementar o consumo somente ao concluir cada cadastro.

**Resultado e exceções:** atingir o limite ou a expiração bloqueia novos cadastros. Atualização do contador e criação do usuário devem ser consistentes, inclusive na última vaga. Não se presume renovação automática.

**Entrega demonstrável:** Criar link compartilhado com expiração e limite, preservando a última vaga sob concorrência.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Gerenciar convites compartilhados” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-001, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um link vigente com vagas, **quando** um cadastro é concluído, **então** o contador aumenta em uma unidade.
- **Dado** um link expirado ou esgotado, **quando** houver tentativa de cadastro, **então** a inscrição não é concluída.
- **Dado** apenas uma vaga restante e duas confirmações concorrentes, **quando** forem processadas, **então** no máximo uma nova conta será criada por esse link.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-003 — Cadastrar morador pela administração

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E2.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001.
**Estado da especificação V6:** confirmado com pendências.
**Objetivo:** permitir criação administrativa de moradores com rastreabilidade..
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero permitir criação administrativa de moradores com rastreabilidade para apoiar moradores no ingresso assistido.

**Valor e relevância:** Apoiar moradores no ingresso assistido. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** administrador autorizado. **Entrada:** dados do morador conforme RF-MVP-003.

**Fluxo:** abrir cadastro administrativo; informar dados; validar duplicidade; criar o registro; registrar quem realizou a operação. Forma de ativação, entrega de acesso e eventual uso de convites nesse caminho são PD-002 e PD-003.

**Resultado:** morador cadastrado; sua criação não equivale a consentimento do titular, entrega de credenciais ou login realizado. Não se presume atuação do administrador em descartes do morador.

**Entrega demonstrável:** Cadastrar morador administrativamente segundo política aprovada, com autoria e acesso correto.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar morador pela administração” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-002, PD-003, PD-022. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um administrador autorizado, **quando** cria um morador com dados válidos, **então** o cadastro fica disponível e a autoria é registrada.
- **Dado** um perfil sem essa permissão, **quando** tenta a operação, **então** a criação é negada.
- **Dado** um e-mail já utilizado, **quando** o cadastro é enviado, **então** o sistema informa o conflito sem criar conta duplicada.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-004 — Administrar acessos e vínculos

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E1.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero associar acessos aos pontos e cooperativas e gerir habilitação das contas para delegar a operação mantendo limites de responsabilidade.

**Valor e relevância:** Delegar a operação mantendo limites de responsabilidade. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** administrador autorizado. **Fluxo:** localizar ou criar acesso operacional conforme política aprovada; associar responsável ao ponto ou operador à cooperativa; habilitar/desabilitar acesso; manter histórico de alterações.

**Exceções:** um vínculo não autoriza acesso a todos os pontos da rede. Exclusão física de contas e acúmulo de papéis não são definidos. O cadastro da organização não deve produzir uma senha compartilhada entre todos os operadores.

**Entrega demonstrável:** Associar e revogar acessos por perfil e organização, com aplicação no serviço e trilha de autoria.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Administrar acessos e vínculos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-002, PD-023, PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** um responsável vinculado a um ponto, **quando** acessa o painel, **então** atua apenas nos pontos autorizados.
- **Dado** um acesso desabilitado, **quando** tenta ação operacional, **então** a operação é negada.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-005 — Cadastrar e administrar pontos de coleta

**Perfil principal:** administrador. **Prioridade:** P0. **Etapa:** E2.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero centralizar o cadastro dos locais e seus responsáveis para disponibilizar pontos confiáveis para descarte e gestão.

**Valor e relevância:** Disponibilizar pontos confiáveis para descarte e gestão. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** administrador autorizado. **Entrada:** nome, endereço, coordenadas, responsável, contexto do local, tipo fixo/temporário, materiais aceitos, funcionamento e parâmetros de capacidade quando definidos.

**Fluxo:** criar ponto; associar responsável e dados operacionais; habilitar sua disponibilização; editar ou desativar com histórico. O novo fluxo substitui solicitação pública por CPF/CNPJ e fila de aprovação do cadastro.

**Exceções:** cadastro incompleto não deve produzir localização enganosa; desativação preserva histórico. Documentos exigidos para o ponto são PD-003; não exigir CNPJ de todo local residencial por inferência.

**Entrega demonstrável:** Cadastrar, editar e desativar pontos; associar responsável e disponibilizar dados operacionais com histórico.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar e administrar pontos de coleta” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-003, PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** cadastro válido realizado pelo administrador, **quando** o ponto é habilitado, **então** aparece nas consultas conforme sua disponibilidade e materiais.
- **Dado** um morador, **quando** tenta cadastrar um ponto diretamente, **então** a função administrativa não é autorizada.
- **Dado** desativação, **quando** o histórico é consultado, **então** as entregas e coletas anteriores continuam identificando o ponto.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-006 — Gerir pontos temporários

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-032; RNF-MVP-001, RNF-MVP-002; RN-021.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero operar pontos em eventos, feiras ou ações específicas por período determinado para operar eventos sem perder informações quando o ponto encerra.

**Valor e relevância:** Operar eventos sem perder informações quando o ponto encerra. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** cadastro do ponto. **Entrada:** identificação do evento/ação e início/fim de funcionamento. **Fluxo:** cadastrar como temporário; disponibilizar durante o período autorizado; retirar da lista de locais disponíveis quando encerrado; preservar registros.

**Exceções:** rejeitar término anterior ao início. Encerramento com materiais remanescentes não pode apagar estoque nem cancelar automaticamente uma coleta. Prorrogação e tratamento do saldo remanescente são PD-009.

**Entrega demonstrável:** Gerir vigência de pontos temporários, retirar encerrados da disponibilidade e preservar materiais/histórico.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Gerir pontos temporários” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-005; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** ponto temporário fora do período, **quando** o morador busca local disponível, **então** o ponto não é oferecido como destino ativo.
- **Dado** término de um evento com coletas anteriores, **quando** o ponto deixa de receber, **então** os registros permanecem consultáveis aos perfis autorizados.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-007 — Classificar contexto e funcionamento do ponto

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-033; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado com dados herdados.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero distinguir natureza do local e informar funcionamento para contextualizar o ponto e orientar o horário de atendimento.

**Valor e relevância:** Contextualizar o ponto e orientar o horário de atendimento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** classificar contexto como condomínio, residência, apartamento, loja, faculdade ou outro rótulo aprovado; manter tipo fixo/temporário em campo separado; cadastrar horários e disponibilidade; apresentar informações no mapa e no painel.

**Exceções:** contexto não altera automaticamente material aceito ou permissões. Formato de tags versus categoria única e permissão de edição dos horários aguardam PD-009. Funcionamento não é o mesmo que operador conectado.

**Entrega demonstrável:** Cadastrar classificação do local e funcionamento, respeitando permissões de edição aprovadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Classificar contexto e funcionamento do ponto” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-005; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** uma faculdade com ponto temporário, **quando** consulta seu cadastro, **então** contexto e duração são informações separadas.
- **Dado** horários cadastrados, **quando** abre os detalhes, **então** a informação corresponde ao cadastro atual.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-008 — Cadastrar cooperativa e seus acessos

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-038; RNF-MVP-001, RNF-MVP-002; RN-011.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero habilitar organizações que executam coletas, identificadas por CNPJ para habilitar cooperativas identificadas para receber solicitações.

**Valor e relevância:** Habilitar cooperativas identificadas para receber solicitações. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** administrador autorizado. **Entrada:** CNPJ, identificação da organização, contatos e operadores; dados financeiros serão definidos com o pagamento.

**Fluxo:** cadastrar organização; validar os dados conforme política aprovada; associar acessos; habilitar operação. Validação cadastral externa, documentos, áreas atendidas e cadastro do recebedor de pagamento aguardam definição.

**Exceções:** CNPJ não equivale automaticamente à comprovação de que a entidade é uma cooperativa. Cadastro incompleto não deve habilitar pagamento sem os dados exigidos pelo provedor. Desativação preserva histórico.

**Entrega demonstrável:** Cadastrar cooperativa com CNPJ conforme política aprovada e vincular operadores autorizados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Cadastrar cooperativa e seus acessos” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-003, PD-016, PD-023. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** administrador autorizado e dados aceitos, **quando** cadastra a cooperativa, **então** ela fica identificada por CNPJ e seus operadores possuem vínculos definidos.
- **Dado** acesso de uma cooperativa, **quando** consulta coletas, **então** visualiza somente as atribuídas ou autorizadas a sua organização.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-009 — Solicitar e agendar coleta administrativamente

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-039; RNF-MVP-001, RNF-MVP-002; RN-012.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero selecionar quem retirará materiais de um ponto e propor o agendamento para coordenar a retirada escolhendo cooperativa e agendamento.

**Valor e relevância:** Coordenar a retirada escolhendo cooperativa e agendamento. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** ponto e cooperativa cadastrados; necessidade identificada pelo administrador ou pedido recebido. **Entrada:** ponto, cooperativa e data/horário previstos.

**Fluxo:** consultar ocupação; selecionar cooperativa; informar agendamento; enviar solicitação; registrar autoria e horário do envio; apresentar no painel da cooperativa para aceite. O horário é previsto até o aceite, conforme estado proposto na seção 10.

**Exceções:** envio não significa aceite. Reatribuição, conflito de horários e alterações após aceite são PD-014. Valor não será calculado automaticamente antes da definição de PD-015.

**Entrega demonstrável:** Selecionar ponto/cooperativa, propor horário e enviar solicitação para aceite, com ou sem pedido do ponto.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Solicitar e agendar coleta administrativamente” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-005, TSK-ADM-008; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-014, PD-015, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** administrador autorizado, **quando** envia a solicitação, **então** a cooperativa escolhida vê ponto e agendamento para decidir sobre o aceite.
- **Dado** solicitação recém-enviada, **quando** o administrador consulta, **então** ela não é exibida como já aceita.
- **Dado** necessidade identificada diretamente pelo administrador, **quando** solicita, **então** não exige pedido prévio do responsável.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-010 — Preparar informações de pagamento

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-044; RNF-MVP-001, RNF-MVP-002; RN-017.
**Estado da especificação V6:** confirmado com pendências bloqueantes.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero identificar coleta, valor e recebedor antes de iniciar pagamento dentro da plataforma para preparar uma remuneração ligada à coleta correta.

**Valor e relevância:** Preparar uma remuneração ligada à coleta correta. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** integração selecionada e condições aprovadas. **Entrada:** identificação da coleta e cooperativa, valor definido segundo futura regra e dados do recebedor exigidos pela API.

**Fluxo:** consultar a coleta; apresentar identificação do recebedor e valor; obter confirmação administrativa. Não definir tabela por kg, material ou distância, nem permitir cálculo implícito.

**Exceções:** sem valor ou dados financeiros válidos, pagamento não pode ser iniciado. Aprovação da coleta, negociação de valor e condições de liberação ainda são PD-015 e PD-016.

**Entrega demonstrável:** Consultar dados da coleta e registrar informações de pagamento segundo valor/condições aprovados.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Preparar informações de pagamento” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-COO-004, TSK-ADM-008; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-015, PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** valor e recebedor definidos pela política aprovada, **quando** o administrador prepara o pagamento, **então** vê coleta, destinatário e valor antes de confirmar.
- **Dado** dados obrigatórios ausentes, **quando** tenta prosseguir, **então** o sistema impede envio à API e informa o que falta.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-011 — Iniciar pagamento por API

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-045; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017.
**Estado da especificação V6:** confirmado com pendências bloqueantes.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero efetuar pagamento à cooperativa a partir de ação administrativa para pagar a coleta dentro da plataforma com rastreabilidade.

**Valor e relevância:** Pagar a coleta dentro da plataforma com rastreabilidade. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** informações válidas e condição de autorização aprovada. **Fluxo:** administrador confirma; plataforma envia ordem ao provedor; vincula identificador externo à coleta; registra resposta inicial; aguarda resultado quando o processamento não for imediato.

**Exceções:** envio não significa que dinheiro foi recebido. Reenvio por timeout deve reutilizar a identificação da mesma ordem, evitando pagamento duplicado. Concluir coleta ou aceitar solicitação não inicia pagamento automaticamente.

**Entrega demonstrável:** Iniciar uma ordem lógica na API aprovada, protegendo repetições e sem concluir pelo mero envio.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Iniciar pagamento por API” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-010; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-015, PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** administrador autorizado e ordem válida, **quando** confirma o pagamento, **então** a plataforma solicita processamento e registra a identificação da ordem.
- **Dado** a mesma confirmação repetida, **quando** processada, **então** não produz duas ordens de pagamento para a mesma operação.
- **Dado** coleta concluída sem ação administrativa de pagamento, **quando** consulta o financeiro, **então** não aparece automaticamente como paga.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-046; RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009; RN-017, RN-018.
**Estado da especificação V6:** confirmado com detalhamento de integração pendente.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero distinguir não iniciado, processamento e resultado informado pelo provedor para saber se o pagamento foi confirmado, falhou ou continua pendente.

**Valor e relevância:** Saber se o pagamento foi confirmado, falhou ou continua pendente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** consultar ou receber atualização da ordem conforme integração; validar autenticidade do retorno; atualizar situação financeira; mostrar coleta, valor, identificador e resultado aos perfis autorizados.

**Exceções:** resposta desconhecida ou timeout não equivale a pagamento confirmado. Retorno repetido não reaplica o efeito. Ordem fora de sequência deve ser conciliada com o provedor. Estorno, reembolso, nova tentativa, tarifas e reconciliação aguardam PD-016.

**Entrega demonstrável:** Processar evidência autenticada e conciliar estado financeiro, disponível também à cooperativa autorizada.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Acompanhar confirmação e falhas de pagamento” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-011; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-016. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** confirmação autêntica de pagamento bem-sucedido, **quando** processada, **então** a ordem passa a apresentar pagamento confirmado.
- **Dado** falha ou resultado ainda incerto, **quando** consultado, **então** o sistema não informa que a cooperativa recebeu.
- **Dado** um retorno repetido, **quando** recebido novamente, **então** o resultado não gera nova ordem ou duplicidade financeira.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-013 — Disponibilizar visão administrativa da operação

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E4.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-047; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero reunir os controles necessários para operar a rede para supervisionar pontos e coletas em uma visão comum.

**Valor e relevância:** Supervisionar pontos e coletas em uma visão comum. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** acessar cadastros de moradores, pontos, cooperativas, convites e loja; acompanhar ocupação e pedidos; encaminhar solicitações; consultar andamento e pagamentos; acessar indicadores e relatórios conforme permissões e plano.

**Exceções:** privilégio administrativo não contorna automaticamente limites comerciais de relatórios, pois o usuário confirmou restrição também para esse perfil. Definir informações operacionais mínimas em PD-019 para não bloquear agendamento e pagamento.

**Entrega demonstrável:** Exibir panorama operacional com acesso autorizado e capacidade de abrir registros de origem.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Disponibilizar visão administrativa da operação” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-005, TSK-ADM-008, TSK-ADM-009; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** administrador autorizado, **quando** acessa a área, **então** encontra os cadastros e ações administrativas previstas para seu perfil.
- **Dado** informações necessárias a uma coleta, **quando** consulta a operação, **então** o comportamento respeita a matriz de acesso operacional aprovada, separada da matriz de relatórios.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-014 — Exibir gráficos e indicadores

**Perfil principal:** administrador. **Prioridade:** P2. **Etapa:** E5.
**Justificativa:** amplia visibilidade com métricas que precisam de refinamento.
**Referências:** RF-MVP-048; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado com pendências de definição.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero apresentar visão de usuários, pontos e cooperativas, incluindo participação e conexão para acompanhar a atividade da rede com indicadores interpretáveis.

**Valor e relevância:** Acompanhar a atividade da rede com indicadores interpretáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** apresentar totais e gráficos de usuários ativos, pontos ativos e cooperativas; distinguir habilitação cadastral, funcionamento do local e presença online; permitir contexto de período e abrangência conforme definições aprovadas.

**Exceções:** “ativo” não será calculado automaticamente como “logado agora”. Medição de presença online, janela de atividade, fuso e significado de cooperativa aberta são PD-020. Não inventar dados para preencher gráficos.

**Entrega demonstrável:** Exibir gráficos de usuários, pontos e cooperativas segundo métricas, janela e abrangência aprovadas.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Exibir gráficos e indicadores” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-013; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-020. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** uma definição aprovada de atividade, **quando** o gráfico é consultado, **então** exibe período, universo e contagem compatíveis com essa definição.
- **Dado** habilitação e conexão como indicadores distintos, **quando** são mostrados, **então** a legenda permite distinguir os conceitos.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-015 — Representar planos e benefícios de dados

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-050; RNF-MVP-001, RNF-MVP-002; RN-020.
**Estado da especificação V6:** confirmado com pendências bloqueantes.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero oferecer modalidades grátis, pré-paga e assinatura mensal para acesso a relatórios/indicadores para apresentar modalidades de acesso a dados de forma transparente.

**Valor e relevância:** Apresentar modalidades de acesso a dados de forma transparente. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo:** apresentar modalidade, condições e benefícios aprovados; identificar quais capacidades estão disponíveis; manter uma matriz que relacione plano, relatório e abrangência. Não definir valores, quotas, ciclos ou pacote de dados nesta versão.

**Exceções:** plano grátis não significa ausência de controle operacional. Não confundir assinatura de dados com pontos da loja ou pagamento da coleta.

**Entrega demonstrável:** Mostrar planos grátis, pré-pago e mensal com matriz de benefícios aprovada, sem inventar pacote ou preço.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Representar planos e benefícios de dados” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** catálogo de planos aprovado, **quando** o usuário consulta as modalidades, **então** encontra benefícios e condições correspondentes à matriz publicada.
- **Dado** uma modalidade sem benefícios aprovados, **quando** a interface de planos é apresentada, **então** não anuncia capacidades comerciais indefinidas como disponíveis.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-016 — Associar contratação e vigência de plano

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020.
**Estado da especificação V6:** confirmado como necessidade; processo a definir.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero identificar qual plano autoriza cada acesso e em qual período para vincular acesso comercial ao titular e à vigência contratada.

**Valor e relevância:** Vincular acesso comercial ao titular e à vigência contratada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Fluxo condicionado:** após contratação válida pelo processo aprovado, registrar titular, modalidade, situação e vigência aplicável; disponibilizar direitos; ajustar ao fim da validade conforme política. O usuário não definiu se o titular é conta, ponto ou organização.

**Exceções:** não presumir que a API de pagamento de cooperativas também cobra assinaturas. Renovação, inadimplência, pré-pago por tempo/consulta, migração e contratação manual ou automática são PD-019.

**Entrega demonstrável:** Associar contratação e vigência segundo fluxo aprovado; não confundir com pagamento de coleta.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Associar contratação e vigência de plano” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-015; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** contratação reconhecida pelo processo aprovado, **quando** o plano é associado, **então** os acessos previstos ficam vinculados ao titular e à vigência corretos.
- **Dado** direito expirado segundo política aprovada, **quando** consulta benefício pago, **então** o acesso respeita a situação vigente.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja

**Perfil principal:** administrador. **Prioridade:** P1. **Etapa:** E5.
**Justificativa:** completa uma capacidade necessária à experiência ou operação do MVP.
**Referências:** RF-MVP-053; RNF-MVP-001, RNF-MVP-002.
**Estado da especificação V6:** confirmado com parâmetros pendentes.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como administrador, quero permitir mídia nas campanhas e demais ofertas que suportem a configuração para explicar ofertas com imagens e vídeos seguros e utilizáveis.

**Valor e relevância:** Explicar ofertas com imagens e vídeos seguros e utilizáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Descrição do comportamento e dados:**

**Pré-condições:** permissão administrativa e armazenamento disponível. **Fluxo:** selecionar imagem/vídeo; validar formato e tamanho aprovados; enviar e vincular à oferta; apresentar mídia aos moradores com descrição textual independente.

**Exceções:** upload falho não deve ser exibido como concluído; arquivo incompatível é rejeitado. O limite anterior de 5 MB não será imposto indistintamente a vídeo. Upload de arquivo versus link externo, formatos, tamanhos, duração e tratamento aguardam PD-024.

**Comunicação transversal:** solicitações e agendamentos devem aparecer nos respectivos painéis. Canal externo adicional, por e-mail ou outro meio, é uma proposta herdada que depende de PD-021 e integração I05; não confundir atualização de painel com entrega de uma mensagem externa.

**Entrega demonstrável:** Publicar mídia válida por administrador autorizado e manter condições essenciais também em texto.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Armazenar e apresentar imagens e vídeos da loja” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Integrar somente a fonte/serviço aprovado; validar resultado e falhas, protegendo credenciais. Identificar explicitamente simulações.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-024, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** vídeo em formato e tamanho aprovados, **quando** o administrador o adiciona à campanha, **então** a oferta consegue apresentá-lo aos usuários autorizados.
- **Dado** mídia rejeitada ou envio interrompido, **quando** a ação termina, **então** o sistema informa a falha e não apresenta um arquivo inexistente como disponível.

**Comunicação transversal:** solicitações e agendamentos devem aparecer nos respectivos painéis. Canal externo adicional, por e-mail ou outro meio, é uma proposta herdada que depende de PD-021 e integração I05; não confundir atualização de painel com entrega de uma mensagem externa.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

## 8. Capacidades transversais

**Jornada:** Proteção, integridade e operação técnica acompanham cada jornada.

### TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano

**Perfil principal:** usuário autorizado. **Prioridade:** P0. **Etapa:** E5.
**Justificativa:** protege integridade/permissões ou desbloqueia a jornada correspondente.
**Referências:** RF-MVP-052; RNF-MVP-001, RNF-MVP-002; RN-020.
**Estado da especificação V6:** confirmado com pendências.
**Estado de implementação:** a diagnosticar; esforço, responsável nominal, sprint e data a definir pela equipe.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; integração/operação quando aplicável.

**História:** como usuário autorizado, quero aplicar restrições comerciais e de acesso em conjunto para garantir que benefício comercial não permita consultar dados indevidos.

**Valor e relevância:** Garantir que benefício comercial não permita consultar dados indevidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Descrição do comportamento e dados:**

**Pré-condições:** sessão válida e matriz de benefícios aprovada. **Fluxo:** verificar perfil; identificar pontos/organizações autorizados; verificar plano e benefício; retornar somente os dados permitidos. A checagem ocorre no serviço que entrega os dados, não apenas na interface.

**Exceções:** pagar por relatório não autoriza dados pessoais identificáveis de toda a rede. Administrador também está sujeito ao plano para relatórios, conforme decisão; privilégios técnicos e operação mínima precisam ser diferenciados em PD-019.

**Entrega demonstrável:** Autorizar dados pela combinação de sessão, perfil, vínculo, abrangência e benefício vigente.

**Subtarefas de implementação:**

1. Diagnosticar o comportamento existente de “Autorizar dados por perfil, vínculo e plano” e identificar os ajustes necessários.
2. Implementar ou ajustar a interface e seus estados de carga, sucesso, ausência de dados e falha conforme o fluxo acima.
3. Aplicar no serviço as pré-condições, permissões, validações e efeitos descritos; preservar vínculo aos registros de origem.
4. Persistir ou consultar os dados necessários; em operações com efeito, proteger repetição e concorrência sem inventar regras de negócio.
5. Validar os BDD abaixo e anexar evidência da interface e dos efeitos em dados; conferir ausência de efeitos nos casos impedidos.

**Dependências de entrega:** TSK-ADM-004, TSK-ADM-015, TSK-ADM-016; TSK-TRA-000 e controles transversais aplicáveis.

**Decisões e recorte executável:** PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

**Critérios de aceite:**

- **Dado** responsável com plano válido, **quando** solicita dados de ponto sem vínculo autorizado, **então** a requisição é negada.
- **Dado** administrador sem benefício de relatório no plano, **quando** pede esse relatório, **então** o privilégio administrativo não libera automaticamente o benefício.

**Conclusão:** aplicar a definição da seção 1.2; entregar evidências dos critérios e registrar qualquer recorte ainda bloqueado.

### TSK-TRA-002 — Plataforma responsiva e compatibilidade

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-001. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Produto/design, frontend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos permitir uso das jornadas em dispositivos suportados para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Permitir uso das jornadas em dispositivos suportados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado para validação. **Origem:** RNF001 e RNF004 antigos.

O produto deve permitir uso em navegador móvel e desktop, com câmera e localização onde suportadas. Modo PWA deve ser verificado antes de ser declarado compatível. Estados de permissão negada, leitura falha e formulário manual devem ser compreensíveis. Fluxos principais devem permitir navegação por teclado e identificação dos campos; esta orientação de acessibilidade é proposta de qualidade para validação.

**Verificação:** executar login, cadastro manual, scanner, retorno de mapas e confirmação em matriz de dispositivos aprovada. Referência anterior: cinco modelos Android; seleção atual pendente em PD-025. **BDD:** dado navegador suportado, quando um fluxo é executado, então controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Definir matriz; verificar formulários, câmera/GPS, retorno do mapa e controles por teclado conforme orientação aprovada.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-003 — Autenticação e autorização

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-002. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Backend, segurança e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos impedir acesso horizontal e vertical indevido para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Impedir acesso horizontal e vertical indevido; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado com ajuste confirmado de perfis. **Origem:** RNF005 e RNF017 antigos.

Todas as operações protegidas devem validar sessão, perfil e vínculo no serviço responsável. Credenciais devem ser protegidas; segredos de integração não podem ser expostos no cliente ou nos documentos. Alterações administrativas devem ter autoria. Política de sessão, senha e papéis depende de PD-003 e PD-023.

**Verificação:** testar acesso horizontal entre moradores/pontos/cooperativas e acesso vertical às funções administrativas. **BDD:** dado usuário sem vínculo, quando envia requisição direta a dados de outro ponto, então a operação é negada mesmo que tenha um plano pago.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Testar requisições diretas entre moradores, pontos e cooperativas; proteger sessões e revogações no serviço.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-004 — Integridade, concorrência e idempotência

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-003. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos preservar efeitos únicos e consistentes para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Preservar efeitos únicos e consistentes; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado para validação, necessário às regras confirmadas. **Origem:** RNF006 antigo.

Operações de convite, descarte, crédito/débito, aquisição, coleta e pagamento devem evitar efeitos duplicados. A confirmação do descarte deve manter consistentes registro, movimentação de estoque e crédito básico. Bônus posterior deve ter estado rastreável e não repetir o básico. A solução técnica de transações e processamento será definida pela equipe.

**Verificação:** reenvio, timeout e operações concorrentes sobre última vaga, saldo ou quantidade. **BDD:** dado uma operação reenviada, quando é processada, então os efeitos de negócio ocorrem uma vez e o resultado anterior pode ser reconhecido.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Testar concorrência pela última vaga, quantidade e saldo; falhas intermediárias e reenvio de descarte, aquisição, coleta e pagamento.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-005 — Resiliência de localização e consulta externa

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-004. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Frontend, backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos manter falhas externas explícitas sem falso sucesso para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Manter falhas externas explícitas sem falso sucesso; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** GPS confirmado; parâmetros pendentes. **Origem:** RNF007 da V5.

Falhas de GPS, mapas e consulta de produtos/notas devem ser apresentadas sem inventar resultados. Negação de GPS não pode ser convertida em presença válida. Entrada manual deve permanecer acessível para falhas de identificação. Timeout, tentativas, precisão e validade da posição dependem de PD-004 e PD-008.

**Verificação:** simular permissão negada, baixa precisão, localização antiga, indisponibilidade e recuperação. **BDD:** dado GPS inválido, quando o morador tenta concluir, então os itens e pontos não são movimentados indevidamente.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Simular falhas separadas de scanner, consulta, mapas e GPS; manter alternativa manual para identificação e impedimento de descarte sem presença.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-006 — Proteção de dados e privacidade

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-005. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Produto, segurança, backend e validação especializada. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos minimizar e proteger dados pessoais necessários para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Minimizar e proteger dados pessoais necessários; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado para validação de produto/jurídico. **Origem:** RNF005 antigo.

Definir finalidade e dados mínimos para moradores, localização e nota fiscal; proteger transmissão e armazenamento; restringir relatórios por autorização; registrar escolhas aplicáveis de compartilhamento. Não tratar consentimento como requisito universal ou comprovação automática de conformidade legal. A política de privacidade, base de tratamento, retenção e atendimento ao titular são PD-022.

**Verificação:** revisar dados coletados, logs, exportações e acesso direto; comprovar que credenciais, tokens de notas e dados pessoais desnecessários não aparecem em logs comuns. **BDD:** dado relatório sem autorização para dados identificáveis, quando é solicitado, então não retorna identificadores pessoais.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Inventariar dados e finalidade; revisar logs, compartilhamento, exportações e acesso; implementar política aprovada de retenção.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-007 — Desempenho e experiência

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-006. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Frontend, backend, produto e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos comprovar desempenho e usabilidade por cenário para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Comprovar desempenho e usabilidade por cenário; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** metas herdadas a validar. **Origem:** RNF004 e RNF008 antigos; S6.

Referências anteriores: carregamento principal/mapa inferior a 3 segundos em cenário 4G; Lighthouse mínimo 70; cadastro em até dois minutos; sucesso de pelo menos 80% em teste com cinco usuários. Cada métrica precisa de definição de dispositivo, rede, carga, roteiro e medida em PD-025. Lighthouse não comprova sozinho o tempo do mapa ou a usabilidade.

**Verificação:** medir os fluxos no cenário aprovado e registrar resultados. **BDD:** dado cenário de desempenho validado, quando a página é medida, então o resultado é comparado à meta correspondente com evidência.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Aprovar cenário e metas; medir carregamento/mapa, tempo de cadastro e sucesso de uso com evidência; separar medição de Lighthouse.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-008 — Disponibilidade, backups e recuperação

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-007. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Operação, backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos demonstrar recuperação e monitorar disponibilidade para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Demonstrar recuperação e monitorar disponibilidade; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado para validação. **Origem:** RNF010 e RNF016 antigos.

Referências anteriores: backups diários, RPO de 24 horas e RTO de 4 horas; disponibilidade de 99% em horário comercial. Janela comercial, cálculo, alertas, retenção de backups e metas vigentes são PD-026. Uso de cloud gerenciada não comprova cumprimento desses objetivos.

**Verificação:** executar restauração em ambiente controlado, medir recuperação e demonstrar monitoramento. **BDD:** dado backup válido, quando restauração de teste é realizada, então dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Inventariar infraestrutura; aprovar metas; executar restauração controlada e registrar tempo, dados recuperados e alertas.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-009 — Auditoria e observabilidade

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-008. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Backend, operação e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos investigar operações sem expor segredos para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Investigar operações sem expor segredos; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado para validação. **Origem:** RF030 básico, RNF006 e RNF014 antigos.

Registrar identificador, autoria, horário, entidade e resultado das operações relevantes; permitir correlação entre descarte, pontos, coleta e pagamento; proteger contra alteração indevida. Separar trilha de negócio e diagnóstico de erro. Não exigir stack trace em toda operação bem-sucedida, como sugeriam os documentos anteriores.

Retenção anterior de 12 meses é referência a revisar em PD-022/PD-026. Logs, monitoramento de falhas e disponibilidade são necessários; tracing distribuído e cold storage não entram por padrão.

**Verificação:** percorrer uma operação de ponta a ponta sem expor segredos. **BDD:** dado pagamento iniciado, quando se investiga sua execução, então é possível associar autor, coleta, ordem e retornos do provedor.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Relacionar autoria, evento, entidade e resultado; percorrer descarte→pontos e coleta→ordem→retorno; testar proteção da trilha.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-010 — Segurança das integrações

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-009. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Backend, segurança e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos confiar nas integrações sem expor chaves para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Confiar nas integrações sem expor chaves; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** detalhamento técnico para validação. **Origem:** RNF015 e RNF017 antigos.

Proteger chaves, limitar permissões e autenticar retornos financeiros conforme o provedor. Não expor credenciais de serviços nos scanners, páginas públicas ou vídeos. Distinguir API de catálogo, consulta de nota, mapa, pagamento e mensagens; falha de uma não deve produzir sucesso fictício em outra.

**Verificação:** revisar configuração, acessos e retornos inválidos. **BDD:** dado retorno de pagamento sem autenticidade válida, quando é recebido, então não altera a ordem para paga.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Revisar permissões/chaves, verificar autenticidade de callbacks e falhas de consulta; impedir retorno inválido de alterar pagamento.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-011 — Segurança e desempenho de mídias

**Prioridade:** P1; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-010. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Frontend, backend e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos publicar mídias com limites e controles aprovados para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Publicar mídias com limites e controles aprovados; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** imagem/vídeo confirmado; limites pendentes. **Origem:** RF028 antigo e S7.

Validar arquivo, tipo e limites no serviço, controlar permissão de envio e evitar execução de conteúdo arbitrário. A descrição da oferta não deve depender exclusivamente do vídeo. Estratégia de carregamento e armazenamento precisa considerar dispositivos móveis e a diferença entre imagem e vídeo.

**Verificação:** upload válido, tipo incompatível, limite excedido e envio interrompido. **BDD:** dado arquivo fora das políticas aprovadas, quando é enviado, então não é publicado como mídia válida.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Validar arquivos no serviço, permissões de envio, interrupção e carregamento móvel; manter condições da oferta em texto.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-012 — Padronização e entrega técnica

**Prioridade:** P0; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-011. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Equipe técnica e operação. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos padronizar entregas reproduzíveis pela equipe para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Padronizar entregas reproduzíveis pela equipe; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** herdado para revisão da equipe. **Origem:** RNF002, RNF009, RNF012 e RNF013 antigos.

Manter critérios comuns de revisão, qualidade e implantação para a equipe de seis pessoas. Documentar configuração dos ambientes e executar verificações básicas antes da entrega. IaC, gestão de segredos, pipeline e identidade visual devem ser reconciliados com o MVP existente. Terraform, Cloud Run, ECS, ferramentas de autenticação e componentes de UI citados antes são referências, não uma migração autorizada.

**Verificação:** demonstrar procedimento reproduzível de entrega e configuração, com validações pertinentes. **BDD:** dado uma alteração aprovada, quando passa pelo processo definido, então há evidência de verificação e identificação da versão entregue.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Documentar ambientes e configuração, revisão e pipeline atual; demonstrar entrega identificável; não impor migração de tecnologia.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

### TSK-TRA-013 — Evolução e capacidade

**Prioridade:** P2; aplicar na etapa das funcionalidades afetadas, sem adiar segurança ou integridade.
**Referência:** RNF-MVP-012. **Estado de implementação:** a diagnosticar.
**Responsabilidade sugerida:** Arquitetura/backend, produto e QA. Esforço, responsável nominal, sprint e data a definir.

**História:** como equipe responsável pelo serviço, queremos conhecer limites e permitir evolução sem reinterpretar histórico para oferecer as jornadas com qualidade verificável.

**Valor e relevância:** Conhecer limites e permitir evolução sem reinterpretar histórico; falhas aqui podem comprometer a confiança, os dados ou a continuidade da operação.

**Descrição, limites e critérios da V6:**

**Situação:** proposta para validação. **Origem:** RNF003 e RNF011 antigos.

Documentar limites do MVP e pontos de extensão para novos materiais, pontuação definitiva e cashback sem implementar antecipadamente esses comportamentos. Dimensionamento, simultaneidade e volume esperado precisam de PD-025. Evitar pressupor que sistemas distribuídos, sharding ou integrações genéricas sejam necessários.

**Verificação:** revisar separação das responsabilidades de cadastro, descarte, pontuação, coleta, pagamentos e planos. **BDD:** dado mudança futura da pontuação, quando é especificada, então a regra provisória e seu histórico são identificáveis sem reinterpretar silenciosamente lançamentos anteriores.

**Entrega demonstrável:** procedimento executável, ajustes identificados/implementados e relatório de evidências do comportamento descrito. Uma meta herdada só é usada como limiar de aprovação após validação.

**Subtarefas:**

1. Diagnosticar a condição atual e registrar componentes e jornadas afetados.
2. Revisar responsabilidades e carga aprovada; identificar regra provisória e extensões futuras sem construir cashback ou novos materiais.
3. Aplicar ajustes necessários e documentar configuração, limites e falhas conhecidas.
4. Executar a verificação da V6 e vincular evidência ao requisito e às tarefas funcionais afetadas.

**Dependências e bloqueios:** TSK-TRA-000, funcionalidades avaliadas e decisões PD citadas acima; política geral de acesso quando aplicável. Sem aprovação dos parâmetros, registrar medições exploratórias sem declarar conformidade.

**Conclusão:** seção 1.2, com cenário reproduzível, resultado observado e comparação com critério aprovado.

## 9. Tarefas de decisão e investigação

Estas tarefas produzem especificação aprovada ou resultado de investigação, não implementação automática da funcionalidade. A prioridade é sugerida conforme a entrega afetada. A decisão cabe aos responsáveis indicados na V6; a equipe registra alternativas e evidências.

### TSK-DEC-001 — Definir PD-001

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-001; RF-MVP-001 a RF-MVP-003.
**Responsabilidade sugerida:** Produto/idealizador. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-ADM-001, TSK-ADM-002, TSK-MOR-001.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-002 — Definir PD-002

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-002; RF-MVP-003 a RF-MVP-005, RF-MVP-008.
**Responsabilidade sugerida:** Produto/segurança. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-ADM-001, TSK-ADM-002, TSK-MOR-001, TSK-ADM-003, TSK-MOR-002, TSK-ADM-004.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-003 — Definir PD-003

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-003; RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038.
**Responsabilidade sugerida:** Produto/equipe técnica. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-001, TSK-ADM-003, TSK-MOR-002, TSK-MOR-003, TSK-MOR-004, TSK-ADM-004, TSK-ADM-005, TSK-ADM-008.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-004 — Definir PD-004

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-004; RF-MVP-010, RF-MVP-011.
**Responsabilidade sugerida:** Equipe técnica/produto. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-006, TSK-MOR-007.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-005 — Definir PD-005

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-005; RF-MVP-011, RF-MVP-013.
**Responsabilidade sugerida:** Produto. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis?.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-007, TSK-MOR-009.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-006 — Definir PD-006

**Atualização aplicada — 10/10/2026:** rascunho rápido em memória; abandono elimina sem incluir no estoque; rota externa em outra aba preserva o fluxo; retorno exige GPS novo. Falhas recuperáveis preservam itens no fluxo. Ajuste/remoção não concede pontos. Contratos reais, concorrência e confirmação permanecem pendentes; consultar o handoff e PD-006.

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-006; RF-MVP-014, RF-MVP-017, RF-MVP-019.
**Responsabilidade sugerida:** Produto e backend. **Estado:** parcialmente definida em 10/10/2026; contratos reais pendentes; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** incorporar a decisão de UX de 10/10/2026 (rascunho em memória, abandono elimina, rota em outra aba preserva, GPS novo no retorno, seleção parcial e ajuste/remoção sem pontos). Definir os contratos reais de ajuste/exclusão, concorrência e confirmação ainda pendentes, sem reabrir a decisão de rascunho nem declarar o backend pronto.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-010, TSK-MOR-013, TSK-MOR-015.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-007 — Definir PD-007

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-007; RF-MVP-015 a RF-MVP-017.
**Responsabilidade sugerida:** Produto/operação. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-011, TSK-MOR-012, TSK-MOR-013.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-008 — Definir PD-008

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-008; RF-MVP-018 e RNF-MVP-004.
**Responsabilidade sugerida:** Produto/equipe técnica. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-014.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-009 — Definir PD-009

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-009; RF-MVP-031 a RF-MVP-036.
**Responsabilidade sugerida:** Produto/operação. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-012, TSK-MOR-015, TSK-ADM-005, TSK-ADM-006, TSK-ADM-007, TSK-PON-001, TSK-PON-002, TSK-PON-003.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-010 — Definir PD-010

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-010; RF-MVP-021, RF-MVP-023.
**Responsabilidade sugerida:** Idealizador/produto. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-017, TSK-MOR-019.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-011 — Definir PD-011

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-011; RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028.
**Responsabilidade sugerida:** Produto/idealizador. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-018, TSK-MOR-020, TSK-MOR-023, TSK-MOR-024.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-012 — Definir PD-012

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-012; RF-MVP-025, RF-MVP-029.
**Responsabilidade sugerida:** Produto/comercial. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-019, TSK-MOR-021, TSK-MOR-025.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-013 — Definir PD-013

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-013; RF-MVP-030.
**Responsabilidade sugerida:** Produto/idealizador e validação especializada. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-026.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-014 — Definir PD-014

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-014; RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043.
**Responsabilidade sugerida:** Idealizador/operação. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-PON-002, TSK-PON-004, TSK-ADM-009, TSK-COO-001, TSK-COO-003, TSK-COO-004.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-015 — Definir PD-015

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-015; RF-MVP-044, RF-MVP-045.
**Responsabilidade sugerida:** Idealizador. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base?.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-ADM-009, TSK-ADM-010, TSK-ADM-011.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-016 — Definir PD-016

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-016; RF-MVP-038, RF-MVP-044 a RF-MVP-046.
**Responsabilidade sugerida:** Idealizador/financeiro/equipe técnica. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-ADM-008, TSK-ADM-010, TSK-ADM-011, TSK-ADM-012.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-017 — Definir PD-017

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-017; RF-MVP-041, RF-MVP-042.
**Responsabilidade sugerida:** Produto/equipe técnica. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-COO-002, TSK-COO-003.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-018 — Definir PD-018

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-018; RF-MVP-035, RF-MVP-043.
**Responsabilidade sugerida:** Operação/produto. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-PON-002, TSK-COO-003, TSK-COO-004.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-019 — Definir PD-019

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-019; RF-MVP-047, RF-MVP-049 a RF-MVP-052.
**Responsabilidade sugerida:** Idealizador/comercial/produto. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-012, TSK-PON-002, TSK-ADM-013, TSK-PON-005, TSK-ADM-015, TSK-ADM-016, TSK-TRA-001.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-020 — Definir PD-020

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-020; RF-MVP-048, RF-MVP-049.
**Responsabilidade sugerida:** Produto/operação. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-ADM-014, TSK-PON-005.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-021 — Definir PD-021

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-021; RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053.
**Responsabilidade sugerida:** Produto/operação. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-026, TSK-PON-003, TSK-ADM-009, TSK-ADM-017.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-022 — Definir PD-022

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-022; RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais.
**Responsabilidade sugerida:** Produto/segurança e validação especializada. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-001, TSK-ADM-003, TSK-MOR-007. Revisar todas as jornadas que tratem dados pessoais.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-023 — Definir PD-023

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-023; RF-MVP-005, RF-MVP-008, RF-MVP-038.
**Responsabilidade sugerida:** Produto/segurança. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-MOR-002, TSK-ADM-004, TSK-ADM-008.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-024 — Definir PD-024

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.
**Referências:** PD-024; RF-MVP-053 e RNF-MVP-010.
**Responsabilidade sugerida:** Produto/equipe técnica. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** TSK-ADM-017.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-025 — Definir PD-025

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-025; RNF-MVP-001, RNF-MVP-006, RNF-MVP-012.
**Responsabilidade sugerida:** Equipe técnica/produto/testes. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** tarefas transversais ou seção de evolução, conforme referências acima. Relacionar também TSK-TRA-002, TSK-TRA-007 e TSK-TRA-013.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-026 — Definir PD-026

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.
**Referências:** PD-026; RNF-MVP-007 a RNF-MVP-011.
**Responsabilidade sugerida:** Equipe técnica/operação. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável.

**Tarefas relacionadas:** tarefas transversais ou seção de evolução, conforme referências acima. Relacionar também TSK-TRA-008, TSK-TRA-009 e TSK-TRA-012.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

### TSK-DEC-027 — Definir PD-027

**Prioridade:** P2 — registro de evolução futura.
**Referências:** PD-027; Seção 14.
**Responsabilidade sugerida:** Idealizador/equipe. **Estado:** decisão pendente; esforço, responsável nominal, sprint e data a definir.

**História:** como equipe de produto e desenvolvimento, queremos resolver esta pendência para implementar e validar uma regra comum, evitando interpretações divergentes.

**Questão a resolver:** Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP.

**Valor e relevância:** estabelecer resultados esperados e limites para as capacidades relacionadas, sem presumir uma escolha do idealizador.

**Pré-condições e dados:** reunir regra atual, restrições do MVP, exemplos de uso e evidências do diagnóstico. Quando houver provedor ou operação externa, verificar viabilidade com dados de avaliação e autorização adequada.

**Subtarefas:**

1. Levantar os pontos da questão acima e documentar o comportamento conhecido.
2. Comparar alternativas viáveis, impacto no usuário, desenvolvimento, operação e custo; investigar lacunas técnicas quando necessário.
3. Submeter a escolha aos responsáveis e registrar aprovação, adiamento ou itens ainda abertos.
4. Para cada regra aprovada, descrever entradas, limites, resultado, falhas e exemplos verificáveis.
5. Atualizar RF/RNF, regra, BDD, diagrama e tarefas afetados; retirar bloqueios somente do recorte resolvido.

**Entrega demonstrável:** registro de decisão com questão, alternativas, escolha/adiamento, justificativa, responsável, data, exemplos de aceite e impacto rastreável. Cashback, ranking e QR de presença continuam fora das entregas confirmadas; avaliar não autoriza implementação no MVP.

**Tarefas relacionadas:** TSK-MOR-014.

**Critérios de aceite da decisão:**

- **Dado** a pendência analisada, **quando** os responsáveis decidem, **então** o registro distingue regra aprovada de hipótese e adiamento.
- **Dado** uma regra aprovada, **quando** é incorporada à V6, **então** os critérios e tarefas impactados usam o mesmo resultado esperado.
- **Dado** ponto ainda não resolvido, **quando** a tarefa de implementação é refinada, **então** o efeito dependente continua identificado como bloqueado.

**Conclusão:** decisão ou adiamento explícito registrado e referências atualizadas; funcionalidades dependentes não são declaradas entregues por isso.

## 10. Matriz de rastreabilidade

Uma linha por requisito define sua tarefa principal. Tarefas de qualidade podem apoiar várias funcionalidades; as referências nas fichas não substituem esta cobertura. O planejamento cobre a especificação, não comprova implementação.

### 10.1 Requisitos funcionais

| Requisito | Capacidade | Tarefa principal | Perfil/grupo | Prioridade | Etapa |
|---|---|---|---|---|---|
| RF-MVP-001 | Gerenciar convites individuais | TSK-ADM-001 | ADM | P0 | E2 |
| RF-MVP-002 | Gerenciar convites compartilhados | TSK-ADM-002 | ADM | P0 | E2 |
| RF-MVP-003 | Cadastrar morador por convite | TSK-MOR-001 | MOR | P0 | E2 |
| RF-MVP-004 | Cadastrar morador pela administração | TSK-ADM-003 | ADM | P1 | E2 |
| RF-MVP-005 | Autenticar e encerrar sessão | TSK-MOR-002 | MOR | P0 | E2 |
| RF-MVP-006 | Recuperar acesso | TSK-MOR-003 | MOR | P1 | E2 |
| RF-MVP-007 | Consultar e editar perfil | TSK-MOR-004 | MOR | P1 | E2 |
| RF-MVP-008 | Administrar acessos e vínculos | TSK-ADM-004 | ADM | P0 | E1 |
| RF-MVP-009 | Disponibilizar Registrar e Descarte rápido | TSK-MOR-005 | MOR | P0 | E2 |
| RF-MVP-010 | Identificar produto por código de barras | TSK-MOR-006 | MOR | P1 | E3 |
| RF-MVP-011 | Importar itens de nota fiscal | TSK-MOR-007 | MOR | P1 | E3 |
| RF-MVP-012 | Cadastrar resíduo manualmente | TSK-MOR-008 | MOR | P0 | E2 |
| RF-MVP-013 | Revisar itens antes da inclusão | TSK-MOR-009 | MOR | P0 | E2 |
| RF-MVP-014 | Manter estoque e selecionar quantidades | TSK-MOR-010 | MOR | P0 | E2 |
| RF-MVP-015 | Consultar pontos próximos compatíveis | TSK-MOR-011 | MOR | P0 | E2 |
| RF-MVP-016 | Consultar detalhes do ponto | TSK-MOR-012 | MOR | P0 | E2 |
| RF-MVP-017 | Encaminhar morador à navegação externa | TSK-MOR-013 | MOR | P0 | E2 |
| RF-MVP-018 | Validar presença por GPS | TSK-MOR-014 | MOR | P0 | E2 |
| RF-MVP-019 | Confirmar entrega e movimentar estoques | TSK-MOR-015 | MOR | P0 | E2 |
| RF-MVP-020 | Exibir confirmação e histórico de descartes | TSK-MOR-016 | MOR | P0 | E2 |
| RF-MVP-021 | Creditar recompensa básica provisória | TSK-MOR-017 | MOR | P0 | E2 |
| RF-MVP-022 | Aplicar bônus de campanha | TSK-MOR-018 | MOR | P1 | E5 |
| RF-MVP-023 | Consultar saldo e extrato de pontos | TSK-MOR-019 | MOR | P1 | E2 |
| RF-MVP-024 | Apurar metas de descarte das campanhas | TSK-MOR-020 | MOR | P1 | E5 |
| RF-MVP-025 | Debitar pontos com consistência | TSK-MOR-021 | MOR | P0 | E5 |
| RF-MVP-026 | Consultar a loja de recompensas | TSK-MOR-022 | MOR | P1 | E5 |
| RF-MVP-027 | Consultar detalhes e condições da campanha | TSK-MOR-023 | MOR | P1 | E5 |
| RF-MVP-028 | Administrar e participar de campanhas | TSK-MOR-024 | MOR | P1 | E5 |
| RF-MVP-029 | Administrar e adquirir vouchers | TSK-MOR-025 | MOR | P1 | E5 |
| RF-MVP-030 | Administrar sorteios e registrar participações | TSK-MOR-026 | MOR | P1 | E5 |
| RF-MVP-031 | Cadastrar e administrar pontos de coleta | TSK-ADM-005 | ADM | P0 | E2 |
| RF-MVP-032 | Gerir pontos temporários | TSK-ADM-006 | ADM | P1 | E4 |
| RF-MVP-033 | Classificar contexto e funcionamento do ponto | TSK-ADM-007 | ADM | P1 | E4 |
| RF-MVP-034 | Editar materiais aceitos | TSK-PON-001 | PON | P0 | E2 |
| RF-MVP-035 | Acompanhar estoque e ocupação do ponto | TSK-PON-002 | PON | P1 | E4 |
| RF-MVP-036 | Sinalizar necessidade de coleta | TSK-PON-003 | PON | P1 | E4 |
| RF-MVP-037 | Solicitar coleta ao administrador | TSK-PON-004 | PON | P1 | E4 |
| RF-MVP-038 | Cadastrar cooperativa e seus acessos | TSK-ADM-008 | ADM | P1 | E4 |
| RF-MVP-039 | Solicitar e agendar coleta administrativamente | TSK-ADM-009 | ADM | P1 | E4 |
| RF-MVP-040 | Consultar e aceitar solicitação de coleta | TSK-COO-001 | COO | P1 | E4 |
| RF-MVP-041 | Fornecer rota e agendamento no painel | TSK-COO-002 | COO | P1 | E4 |
| RF-MVP-042 | Acompanhar andamento da coleta | TSK-COO-003 | COO | P1 | E4 |
| RF-MVP-043 | Registrar materiais e pesos retirados | TSK-COO-004 | COO | P1 | E4 |
| RF-MVP-044 | Preparar informações de pagamento | TSK-ADM-010 | ADM | P1 | E5 |
| RF-MVP-045 | Iniciar pagamento por API | TSK-ADM-011 | ADM | P1 | E5 |
| RF-MVP-046 | Acompanhar confirmação e falhas de pagamento | TSK-ADM-012 | ADM | P1 | E5 |
| RF-MVP-047 | Disponibilizar visão administrativa da operação | TSK-ADM-013 | ADM | P1 | E4 |
| RF-MVP-048 | Exibir gráficos e indicadores | TSK-ADM-014 | ADM | P2 | E5 |
| RF-MVP-049 | Consultar relatórios dos pontos | TSK-PON-005 | PON | P1 | E5 |
| RF-MVP-050 | Representar planos e benefícios de dados | TSK-ADM-015 | ADM | P1 | E5 |
| RF-MVP-051 | Associar contratação e vigência de plano | TSK-ADM-016 | ADM | P1 | E5 |
| RF-MVP-052 | Autorizar dados por perfil, vínculo e plano | TSK-TRA-001 | TRA | P0 | E5 |
| RF-MVP-053 | Armazenar e apresentar imagens e vídeos da loja | TSK-ADM-017 | ADM | P1 | E5 |

### 10.2 Requisitos não funcionais

| Requisito | Capacidade | Tarefa principal |
|---|---|---|
| RNF-MVP-001 | Plataforma responsiva e compatibilidade | TSK-TRA-002 |
| RNF-MVP-002 | Autenticação e autorização | TSK-TRA-003 |
| RNF-MVP-003 | Integridade, concorrência e idempotência | TSK-TRA-004 |
| RNF-MVP-004 | Resiliência de localização e consulta externa | TSK-TRA-005 |
| RNF-MVP-005 | Proteção de dados e privacidade | TSK-TRA-006 |
| RNF-MVP-006 | Desempenho e experiência | TSK-TRA-007 |
| RNF-MVP-007 | Disponibilidade, backups e recuperação | TSK-TRA-008 |
| RNF-MVP-008 | Auditoria e observabilidade | TSK-TRA-009 |
| RNF-MVP-009 | Segurança das integrações | TSK-TRA-010 |
| RNF-MVP-010 | Segurança e desempenho de mídias | TSK-TRA-011 |
| RNF-MVP-011 | Padronização e entrega técnica | TSK-TRA-012 |
| RNF-MVP-012 | Evolução e capacidade | TSK-TRA-013 |

### 10.3 Pendências

| Pendência | Tarefa de decisão | Responsáveis sugeridos |
|---|---|---|
| PD-001 | TSK-DEC-001 | Produto/idealizador |
| PD-002 | TSK-DEC-002 | Produto/segurança |
| PD-003 | TSK-DEC-003 | Produto/equipe técnica |
| PD-004 | TSK-DEC-004 | Equipe técnica/produto |
| PD-005 | TSK-DEC-005 | Produto |
| PD-006 | TSK-DEC-006 | Produto |
| PD-007 | TSK-DEC-007 | Produto/operação |
| PD-008 | TSK-DEC-008 | Produto/equipe técnica |
| PD-009 | TSK-DEC-009 | Produto/operação |
| PD-010 | TSK-DEC-010 | Idealizador/produto |
| PD-011 | TSK-DEC-011 | Produto/idealizador |
| PD-012 | TSK-DEC-012 | Produto/comercial |
| PD-013 | TSK-DEC-013 | Produto/idealizador e validação especializada |
| PD-014 | TSK-DEC-014 | Idealizador/operação |
| PD-015 | TSK-DEC-015 | Idealizador |
| PD-016 | TSK-DEC-016 | Idealizador/financeiro/equipe técnica |
| PD-017 | TSK-DEC-017 | Produto/equipe técnica |
| PD-018 | TSK-DEC-018 | Operação/produto |
| PD-019 | TSK-DEC-019 | Idealizador/comercial/produto |
| PD-020 | TSK-DEC-020 | Produto/operação |
| PD-021 | TSK-DEC-021 | Produto/operação |
| PD-022 | TSK-DEC-022 | Produto/segurança e validação especializada |
| PD-023 | TSK-DEC-023 | Produto/segurança |
| PD-024 | TSK-DEC-024 | Produto/equipe técnica |
| PD-025 | TSK-DEC-025 | Equipe técnica/produto/testes |
| PD-026 | TSK-DEC-026 | Equipe técnica/operação |
| PD-027 | TSK-DEC-027 | Idealizador/equipe |

## 11. Cuidados de refinamento e validação

- **Registro e entrega:** cadastrar embalagem, importar nota ou abrir rota não concede pontos nem comprova descarte.
- **Crédito provisório:** 10 pontos por operação concluída, uma vez; idempotência de reenvio não resolve sozinha fracionamento fraudulento em novas operações (PD-010).
- **Bônus:** pode ser apurado depois. Não interpretar diagramas como obrigação de aguardar bônus para confirmar o básico; mostrar somente valores efetivamente confirmados.
- **Persistência do caminho rápido:** decisão de 10/10/2026 define rascunho em memória, abandono sem inclusão no estoque, rota em outra aba e GPS novo no retorno. PD-006 permanece parcial para contratos reais de ajuste/exclusão, concorrência e confirmação.
- **Coleta:** “em execução” é proposta sem gatilho aprovado. Não contrariar a pré-condição de aceite para registro de pesos.
- **Unidades:** quantidade de embalagens, ocupação estimada e peso medido não são equivalentes. Conciliação e coleta parcial dependem de PD-009/PD-018.
- **Planos:** o critério editorial do RF-MVP-050 sobre utilização da documentação foi separado do aceite de produto neste backlog. A ficha verifica o que a interface anuncia conforme catálogo aprovado.
- **Cenários:** os CT da V6 são roteiros integrados. Desdobrar falhas e limites em casos independentes, vinculados a RF/RNF/PD, com dados, passos, resultado e evidência. Não registrar testes como executados neste documento.
- **Pagamento:** envio não é confirmação; timeout exige consulta/conciliação, sem gerar outra ordem lógica por repetição.
- **Dados:** plano pago não concede vínculo. Acesso operacional mínimo e relatórios comerciais precisam permanecer diferenciados conforme PD-019.
- **Futuro:** cashback financeiro, ranking e QR/confirmação de presença pelo ponto não são entregas confirmadas. Scanner de identificador da nota não equivale a QR de presença.
- **Qualidade:** metas antigas não são limiares atuais aprovados; registrar dispositivos, rede, carga, ambiente e valores validados antes de homologar.
- **Interfaces técnicas:** não fixar rotas de API, estrutura de banco ou tecnologias sem diagnóstico. Refinar contrato e migração na tarefa correspondente, preservando dados e a arquitetura adequada do MVP.

## 12. Controle da primeira versão

Esta versão possui **93 tarefas**: 53 funcionais, 12 de qualidade, 27 de decisão/investigação e uma de diagnóstico. Cobertura planejada: **53 RF, 12 RNF e 27 PD**. Cada implementação começa a diagnosticar; prioridades e sequência são propostas de planejamento para a equipe.

O conteúdo foi verificado documentalmente quanto a identificadores, referências, cobertura e preservação das regras principais. Homologação depende da aplicação, dos parâmetros aprovados e das evidências previstas nas tarefas.

## 13. Diagnóstico do código disponível

O [comparativo do MVP do estágio V1](../../03-tecnologia/03-diagnostico-mvp-v1.md) registra a análise dos commits indicados de frontend e backend, a estratégia por requisito e as verificações locais. Use essa evidência para refinar as fichas, sem importar regras antigas como decisões atuais.

TSK-TRA-000 avançou com a inspeção do código, build e testes locais, mas permanece parcial: faltam ambiente implantado, banco de avaliação com migrations, jornadas HTTP/navegador e validação da equipe. As demais tarefas não foram implementadas por esta análise.

Priorizar os achados de integridade e acesso do comparativo: dupla baixa/crédito, regra de 10 pontos por operação, autorização por vínculo e retirada que preserve material remanescente. Responsáveis nominais, esforço, sprint e datas continuam a definir.

## Atualização de experiência do morador — 10/10/2026

O [handoff do morador V6](../../04-ux/01-morador-v6/01-handoff.md) registra a implementação de demonstração, o Figma, os contratos pendentes e a decisão de rascunho de PD-006. Os [testes com moradores](../../04-ux/01-morador-v6/03-teste-com-usuarios.md) estão preparados, não realizados. Esta entrega não declara as tasks funcionais prontas em produção nem resolve as pendências transacionais do backend. O diagnóstico técnico do frontend usado neste ciclo foi feito sobre o commit 4f41b139ba9871c92a5c5a72ca2f9d98ba6af164; os comportamentos incompatíveis e as evidências estão no handoff.
