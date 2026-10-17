# Residuum — pendências gerais para avaliação posterior

[Guia das tasks](README.md) · [Decisões que afetam as tasks](04-decisoes.md)

**Atualização:** 17/10/2026. **Situação dos itens:** A avaliar posteriormente.

Este documento reúne avaliações futuras e questões gerais de organização sem vínculo específico com implementação ou aceite de uma task atual. A transferência não aprova funcionalidades, não resolve decisões e não remove bloqueios técnicos reais. As informações operacionais de cada task — responsável, estimativa, prazo e dependências — permanecem nas fichas.

## PG-001 — Organização geral da equipe

**Questão:** detalhar senioridade, disponibilidade e distribuição geral entre desenvolvimento, análise, revisão e QA das seis pessoas full stack.

**Origem e contexto:** avaliação do planejamento e composição confirmada da equipe.

**Motivo da separação:** trata da organização global da equipe, sem alterar por si só uma regra ou um critério de aceite. A ausência de responsável em uma task continua visível em seu próprio campo.

**Situação:** A avaliar posteriormente.

## PG-002 — Governança e rotina de planejamento

**Questão:** formalizar papéis gerais de produto, facilitação, aprovação e rotina de alinhamentos.

**Origem e contexto:** responsabilidades ainda a combinar na [proposta de Scrum](07-sprints.md).

**Motivo da separação:** o debate organizacional amplo não integra o detalhamento técnico das fichas; aprovações necessárias a uma decisão concreta continuam registradas em seu contexto.

**Situação:** A avaliar posteriormente.

## PG-003 — Compromisso global de entrega

**Questão:** confirmar o conjunto obrigatório, a capacidade e a viabilidade do compromisso global de 20/11/2026.

**Origem e contexto:** prazo informado no planejamento, sem estimativa validada do conjunto.

**Motivo da separação:** a negociação global de escopo e prazo será examinada à parte. Prioridades existentes, dependências, datas e estimativas de cada task continuam disponíveis e não são alteradas por esta transferência.

**Situação:** A avaliar posteriormente.

## Evolução futura — PD-027

**Questão:** avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e outras capacidades futuras.

**Origem e contexto:** PD-027, seção 14 da V6 e TSK-DEC-027.

**Motivo da separação:** são propostas futuras sem implementação confirmada no MVP. O vínculo anterior com TSK-MOR-014 é histórico: o GPS atual não depende da adoção de QR.

**Situação:** A avaliar posteriormente. A ficha e os três casos documentais são preservados abaixo.

<a id="tsk-dec-027"></a>

## TSK-DEC-027 — Definir PD-027

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

**Vínculo histórico, sem bloqueio da implementação atual:**

Reunir regra atual, restrições e evidências; consultar as atividades impactadas: TSK-MOR-014.

**Evidências de entrega:**

- **Exigidas:** Registro de decisão ou investigação, alternativas, escolha/adiamento, justificativa, aprovação, data e impacto nos requisitos.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP

- **PD-027:** Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP

**Prioridade de origem:** P2 — registro de evolução futura.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** PD-027; Seção 14; ficha [TSK-DEC-027 original](../07-historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md).

### História, contexto e subtarefas

**Prioridade:** P2 — registro de evolução futura.

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

**Tarefas citadas historicamente, sem bloqueio atual:** TSK-MOR-014.



### Casos de verificação documental

#### TSK-DEC-027-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-DEC-027; PD-027; Seção 14.

**Pré-condições e dados:** a pendência analisada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: os responsáveis decidem.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o registro distingue regra aprovada de hipótese e adiamento.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-027-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-DEC-027; PD-027; Seção 14.

**Pré-condições e dados:** uma regra aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é incorporada à V6.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os critérios e tarefas impactados usam o mesmo resultado esperado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-DEC-027-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-DEC-027; PD-027; Seção 14.

**Pré-condições e dados:** ponto ainda não resolvido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a tarefa de implementação é refinada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o efeito dependente continua identificado como bloqueado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.
