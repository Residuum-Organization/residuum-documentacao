# Residuum — decisões relacionadas às tasks

[Guia das tasks](README.md) · [Pendências gerais para avaliação posterior](08-pendencias-gerais.md)

**Atualização:** 17/10/2026. **Registros relacionados à execução:** 26.

Estes registros detalham dúvidas que afetam implementação, integração, testes ou aceite das atividades atuais. Não são funcionalidades adicionais nem equivalem a software entregue. PD-006 permanece parcialmente resolvida; o rascunho já aprovado não deve ser reaberto. Os casos deste documento verificam decisões documentais e continuam não executados.

## Registros

- [TSK-DEC-001 — PD-001](#tsk-dec-001)
- [TSK-DEC-002 — PD-002](#tsk-dec-002)
- [TSK-DEC-003 — PD-003](#tsk-dec-003)
- [TSK-DEC-004 — PD-004](#tsk-dec-004)
- [TSK-DEC-005 — PD-005](#tsk-dec-005)
- [TSK-DEC-006 — PD-006](#tsk-dec-006)
- [TSK-DEC-007 — PD-007](#tsk-dec-007)
- [TSK-DEC-008 — PD-008](#tsk-dec-008)
- [TSK-DEC-009 — PD-009](#tsk-dec-009)
- [TSK-DEC-010 — PD-010](#tsk-dec-010)
- [TSK-DEC-011 — PD-011](#tsk-dec-011)
- [TSK-DEC-012 — PD-012](#tsk-dec-012)
- [TSK-DEC-013 — PD-013](#tsk-dec-013)
- [TSK-DEC-014 — PD-014](#tsk-dec-014)
- [TSK-DEC-015 — PD-015](#tsk-dec-015)
- [TSK-DEC-016 — PD-016](#tsk-dec-016)
- [TSK-DEC-017 — PD-017](#tsk-dec-017)
- [TSK-DEC-018 — PD-018](#tsk-dec-018)
- [TSK-DEC-019 — PD-019](#tsk-dec-019)
- [TSK-DEC-020 — PD-020](#tsk-dec-020)
- [TSK-DEC-021 — PD-021](#tsk-dec-021)
- [TSK-DEC-022 — PD-022](#tsk-dec-022)
- [TSK-DEC-023 — PD-023](#tsk-dec-023)
- [TSK-DEC-024 — PD-024](#tsk-dec-024)
- [TSK-DEC-025 — PD-025](#tsk-dec-025)
- [TSK-DEC-026 — PD-026](#tsk-dec-026)

<a id="tsk-dec-001"></a>

## TSK-DEC-001 — Definir PD-001

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

**Rastreabilidade:** PD-001; RF-MVP-001 a RF-MVP-003; ficha [TSK-DEC-001 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-001-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-001; PD-001; RF-MVP-001 a RF-MVP-003.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-001-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-001; PD-001; RF-MVP-001 a RF-MVP-003.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-001-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-001; PD-001; RF-MVP-001 a RF-MVP-003.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-002"></a>

## TSK-DEC-002 — Definir PD-002

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

**Rastreabilidade:** PD-002; RF-MVP-003 a RF-MVP-005, RF-MVP-008; ficha [TSK-DEC-002 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-002; PD-002; RF-MVP-003 a RF-MVP-005, RF-MVP-008.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-002-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-002; PD-002; RF-MVP-003 a RF-MVP-005, RF-MVP-008.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-002-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-002; PD-002; RF-MVP-003 a RF-MVP-005, RF-MVP-008.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-003"></a>

## TSK-DEC-003 — Definir PD-003

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

**Rastreabilidade:** PD-003; RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038; ficha [TSK-DEC-003 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-003; PD-003; RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-003-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-003; PD-003; RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-003-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-003; PD-003; RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-004"></a>

## TSK-DEC-004 — Definir PD-004

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

**Rastreabilidade:** PD-004; RF-MVP-010, RF-MVP-011; ficha [TSK-DEC-004 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-004; PD-004; RF-MVP-010, RF-MVP-011.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-004-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-004; PD-004; RF-MVP-010, RF-MVP-011.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-004-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-004; PD-004; RF-MVP-010, RF-MVP-011.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-005"></a>

## TSK-DEC-005 — Definir PD-005

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

**Rastreabilidade:** PD-005; RF-MVP-011, RF-MVP-013; ficha [TSK-DEC-005 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-005; PD-005; RF-MVP-011, RF-MVP-013.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-005-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-005; PD-005; RF-MVP-011, RF-MVP-013.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-005-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-005; PD-005; RF-MVP-011, RF-MVP-013.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-006"></a>

## TSK-DEC-006 — Definir PD-006

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

**Rastreabilidade:** PD-006; RF-MVP-014, RF-MVP-017, RF-MVP-019; ficha [TSK-DEC-006 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-006; PD-006; RF-MVP-014, RF-MVP-017, RF-MVP-019.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-006-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-006; PD-006; RF-MVP-014, RF-MVP-017, RF-MVP-019.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-006-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-006; PD-006; RF-MVP-014, RF-MVP-017, RF-MVP-019.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-007"></a>

## TSK-DEC-007 — Definir PD-007

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

**Rastreabilidade:** PD-007; RF-MVP-015 a RF-MVP-017; ficha [TSK-DEC-007 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-007; PD-007; RF-MVP-015 a RF-MVP-017.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-007-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-007; PD-007; RF-MVP-015 a RF-MVP-017.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-007-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-007; PD-007; RF-MVP-015 a RF-MVP-017.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-008"></a>

## TSK-DEC-008 — Definir PD-008

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

**Rastreabilidade:** PD-008; RF-MVP-018 e RNF-MVP-004; ficha [TSK-DEC-008 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-008; PD-008; RF-MVP-018 e RNF-MVP-004.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-008-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-008; PD-008; RF-MVP-018 e RNF-MVP-004.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-008-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-008; PD-008; RF-MVP-018 e RNF-MVP-004.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-009"></a>

## TSK-DEC-009 — Definir PD-009

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

**Rastreabilidade:** PD-009; RF-MVP-031 a RF-MVP-036; ficha [TSK-DEC-009 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-009; PD-009; RF-MVP-031 a RF-MVP-036.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-009-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-009; PD-009; RF-MVP-031 a RF-MVP-036.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-009-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-009; PD-009; RF-MVP-031 a RF-MVP-036.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-010"></a>

## TSK-DEC-010 — Definir PD-010

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

**Rastreabilidade:** PD-010; RF-MVP-021, RF-MVP-023; ficha [TSK-DEC-010 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-010; PD-010; RF-MVP-021, RF-MVP-023.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-010-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-010; PD-010; RF-MVP-021, RF-MVP-023.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-010-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-010; PD-010; RF-MVP-021, RF-MVP-023.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-011"></a>

## TSK-DEC-011 — Definir PD-011

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

**Rastreabilidade:** PD-011; RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028; ficha [TSK-DEC-011 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-011; PD-011; RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-011-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-011; PD-011; RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-011-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-011; PD-011; RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-012"></a>

## TSK-DEC-012 — Definir PD-012

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

**Rastreabilidade:** PD-012; RF-MVP-025, RF-MVP-029; ficha [TSK-DEC-012 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-012; PD-012; RF-MVP-025, RF-MVP-029.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-012-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-012; PD-012; RF-MVP-025, RF-MVP-029.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-012-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-012; PD-012; RF-MVP-025, RF-MVP-029.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-013"></a>

## TSK-DEC-013 — Definir PD-013

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

**Rastreabilidade:** PD-013; RF-MVP-030; ficha [TSK-DEC-013 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-013; PD-013; RF-MVP-030.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-013-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-013; PD-013; RF-MVP-030.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-013-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-013; PD-013; RF-MVP-030.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-014"></a>

## TSK-DEC-014 — Definir PD-014

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

**Rastreabilidade:** PD-014; RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043; ficha [TSK-DEC-014 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-014-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-014; PD-014; RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-014-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-014; PD-014; RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-014-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-014; PD-014; RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-015"></a>

## TSK-DEC-015 — Definir PD-015

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

**Rastreabilidade:** PD-015; RF-MVP-044, RF-MVP-045; ficha [TSK-DEC-015 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-015-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-015; PD-015; RF-MVP-044, RF-MVP-045.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-015-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-015; PD-015; RF-MVP-044, RF-MVP-045.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-015-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-015; PD-015; RF-MVP-044, RF-MVP-045.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-016"></a>

## TSK-DEC-016 — Definir PD-016

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

**Rastreabilidade:** PD-016; RF-MVP-038, RF-MVP-044 a RF-MVP-046; ficha [TSK-DEC-016 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-016-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-016; PD-016; RF-MVP-038, RF-MVP-044 a RF-MVP-046.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-016-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-016; PD-016; RF-MVP-038, RF-MVP-044 a RF-MVP-046.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-016-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-016; PD-016; RF-MVP-038, RF-MVP-044 a RF-MVP-046.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-017"></a>

## TSK-DEC-017 — Definir PD-017

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

**Rastreabilidade:** PD-017; RF-MVP-041, RF-MVP-042; ficha [TSK-DEC-017 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-017-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-017; PD-017; RF-MVP-041, RF-MVP-042.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-017-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-017; PD-017; RF-MVP-041, RF-MVP-042.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-017-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-017; PD-017; RF-MVP-041, RF-MVP-042.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-018"></a>

## TSK-DEC-018 — Definir PD-018

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

**Rastreabilidade:** PD-018; RF-MVP-035, RF-MVP-043; ficha [TSK-DEC-018 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-018-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-018; PD-018; RF-MVP-035, RF-MVP-043.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-018-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-018; PD-018; RF-MVP-035, RF-MVP-043.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-018-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-018; PD-018; RF-MVP-035, RF-MVP-043.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-019"></a>

## TSK-DEC-019 — Definir PD-019

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

**Rastreabilidade:** PD-019; RF-MVP-047, RF-MVP-049 a RF-MVP-052; ficha [TSK-DEC-019 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-019-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-019; PD-019; RF-MVP-047, RF-MVP-049 a RF-MVP-052.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-019-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-019; PD-019; RF-MVP-047, RF-MVP-049 a RF-MVP-052.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-019-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-019; PD-019; RF-MVP-047, RF-MVP-049 a RF-MVP-052.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-020"></a>

## TSK-DEC-020 — Definir PD-020

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

**Rastreabilidade:** PD-020; RF-MVP-048, RF-MVP-049; ficha [TSK-DEC-020 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-020-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-020; PD-020; RF-MVP-048, RF-MVP-049.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-020-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-020; PD-020; RF-MVP-048, RF-MVP-049.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-020-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-020; PD-020; RF-MVP-048, RF-MVP-049.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-021"></a>

## TSK-DEC-021 — Definir PD-021

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

**Rastreabilidade:** PD-021; RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053; ficha [TSK-DEC-021 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-021-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-021; PD-021; RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-021-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-021; PD-021; RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-021-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-021; PD-021; RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-022"></a>

## TSK-DEC-022 — Definir PD-022

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

**Rastreabilidade:** PD-022; RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais; ficha [TSK-DEC-022 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-022-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-022; PD-022; RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-022-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-022; PD-022; RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-022-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-022; PD-022; RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-023"></a>

## TSK-DEC-023 — Definir PD-023

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

**Rastreabilidade:** PD-023; RF-MVP-005, RF-MVP-008, RF-MVP-038; ficha [TSK-DEC-023 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-023-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-023; PD-023; RF-MVP-005, RF-MVP-008, RF-MVP-038.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-023-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-023; PD-023; RF-MVP-005, RF-MVP-008, RF-MVP-038.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-023-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-023; PD-023; RF-MVP-005, RF-MVP-008, RF-MVP-038.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-024"></a>

## TSK-DEC-024 — Definir PD-024

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

**Rastreabilidade:** PD-024; RF-MVP-053 e RNF-MVP-010; ficha [TSK-DEC-024 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P1 — desbloquear capacidade operacional/comercial.

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



### Casos de verificação documental

#### TSK-DEC-024-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-024; PD-024; RF-MVP-053 e RNF-MVP-010.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-024-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-024; PD-024; RF-MVP-053 e RNF-MVP-010.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-024-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-024; PD-024; RF-MVP-053 e RNF-MVP-010.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-025"></a>

## TSK-DEC-025 — Definir PD-025

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

**Rastreabilidade:** PD-025; RNF-MVP-001, RNF-MVP-006, RNF-MVP-012; ficha [TSK-DEC-025 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-025-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-025; PD-025; RNF-MVP-001, RNF-MVP-006, RNF-MVP-012.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-025-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-025; PD-025; RNF-MVP-001, RNF-MVP-006, RNF-MVP-012.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-025-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-025; PD-025; RNF-MVP-001, RNF-MVP-006, RNF-MVP-012.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-026"></a>

## TSK-DEC-026 — Definir PD-026

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

**Rastreabilidade:** PD-026; RNF-MVP-007 a RNF-MVP-011; ficha [TSK-DEC-026 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P0 — desbloquear fundamentos ou parâmetros da jornada.

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



### Casos de verificação documental

#### TSK-DEC-026-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-026; PD-026; RNF-MVP-007 a RNF-MVP-011.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-026-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-026; PD-026; RNF-MVP-007 a RNF-MVP-011.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-026-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-026; PD-026; RNF-MVP-007 a RNF-MVP-011.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<a id="tsk-dec-027"></a>

## Evolução futura — referência transferida

[TSK-DEC-027 e seus casos de verificação](08-pendencias-gerais.md#tsk-dec-027) foram separados por tratarem de evolução futura. A referência histórica à validação GPS não representa bloqueio da TSK-MOR-014.

<a id="tsk-dec-027-ct-01"></a>

[TSK-DEC-027-CT-01 — verificação documental transferida](08-pendencias-gerais.md#tsk-dec-027-ct-01).

<a id="tsk-dec-027-ct-02"></a>

[TSK-DEC-027-CT-02 — verificação documental transferida](08-pendencias-gerais.md#tsk-dec-027-ct-02).

<a id="tsk-dec-027-ct-03"></a>

[TSK-DEC-027-CT-03 — verificação documental transferida](08-pendencias-gerais.md#tsk-dec-027-ct-03).
