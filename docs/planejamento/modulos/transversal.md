# TRANSVERSAL — Ambiente, diagnóstico e qualidade

[Voltar ao guia dos módulos](README.md).

Edição padronizada em 13/10/2026. Responsáveis e datas serão preenchidos pelo analista/equipe. Os casos abaixo são planejados, não executados. A ficha original permanece disponível para rastreabilidade.

Estas atividades acompanham os módulos funcionais conforme as jornadas afetadas; não constituem uma etapa de QA apenas ao final.

## Atividades

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

<a id="tsk-tra-000"></a>

## TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6

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

### Casos de teste

#### TSK-TRA-000-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-000; todos os RF/RNF da matriz da seção 10; RNF-MVP-011.

**Pré-condições e dados:** uma capacidade avaliada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o diagnóstico é registrado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** há requisito, versão, comportamento observado, evidência e ação recomendada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-TRA-000-CT-02

**Critério vinculado:** CA-02. **Origem:** TSK-TRA-000; todos os RF/RNF da matriz da seção 10; RNF-MVP-011.

**Pré-condições e dados:** um item histórico marcado como entregue. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: não há evidência atual.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** ele permanece não verificado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

#### TSK-TRA-000-CT-03

**Critério vinculado:** CA-03. **Origem:** TSK-TRA-000; todos os RF/RNF da matriz da seção 10; RNF-MVP-011.

**Pré-condições e dados:** falta de acesso ao ambiente. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: se conclui o inventário documental.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a limitação é registrada sem afirmar que a aplicação foi validada.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-002"></a>

## TSK-TRA-002 — Plataforma responsiva e compatibilidade

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

### Casos de teste

#### TSK-TRA-002-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-002; RNF-MVP-001.

**Pré-condições e dados:** navegador suportado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: um fluxo é executado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** controles e mensagens permanecem utilizáveis sem perder informações essenciais.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-003"></a>

## TSK-TRA-003 — Autenticação e autorização

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

### Casos de teste

#### TSK-TRA-003-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-003; RNF-MVP-002.

**Pré-condições e dados:** usuário sem vínculo. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: envia requisição direta a dados de outro ponto.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a operação é negada mesmo que tenha um plano pago.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-004"></a>

## TSK-TRA-004 — Integridade, concorrência e idempotência

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

### Casos de teste

#### TSK-TRA-004-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-004; RNF-MVP-003.

**Pré-condições e dados:** uma operação reenviada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é processada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os efeitos de negócio ocorrem uma vez e o resultado anterior pode ser reconhecido.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-005"></a>

## TSK-TRA-005 — Resiliência de localização e consulta externa

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

### Casos de teste

#### TSK-TRA-005-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-005; RNF-MVP-004.

**Pré-condições e dados:** GPS inválido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: o morador tenta concluir.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** os itens e pontos não são movimentados indevidamente.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-006"></a>

## TSK-TRA-006 — Proteção de dados e privacidade

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

### Casos de teste

#### TSK-TRA-006-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-006; RNF-MVP-005.

**Pré-condições e dados:** relatório sem autorização para dados identificáveis. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é solicitado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não retorna identificadores pessoais.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-007"></a>

## TSK-TRA-007 — Desempenho e experiência

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

### Casos de teste

#### TSK-TRA-007-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-007; RNF-MVP-006.

**Pré-condições e dados:** cenário de desempenho validado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: a página é medida.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** o resultado é comparado à meta correspondente com evidência.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-008"></a>

## TSK-TRA-008 — Disponibilidade, backups e recuperação

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

### Casos de teste

#### TSK-TRA-008-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-008; RNF-MVP-007.

**Pré-condições e dados:** backup válido. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: restauração de teste é realizada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-009"></a>

## TSK-TRA-009 — Auditoria e observabilidade

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

### Casos de teste

#### TSK-TRA-009-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-009; RNF-MVP-008.

**Pré-condições e dados:** pagamento iniciado. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: se investiga sua execução.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** é possível associar autor, coleta, ordem e retornos do provedor.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-010"></a>

## TSK-TRA-010 — Segurança das integrações

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

### Casos de teste

#### TSK-TRA-010-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-010; RNF-MVP-009.

**Pré-condições e dados:** retorno de pagamento sem autenticidade válida. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é recebido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não altera a ordem para paga.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-011"></a>

## TSK-TRA-011 — Segurança e desempenho de mídias

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

### Casos de teste

#### TSK-TRA-011-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-011; RNF-MVP-010.

**Pré-condições e dados:** arquivo fora das políticas aprovadas. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é enviado.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** não é publicado como mídia válida.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-012"></a>

## TSK-TRA-012 — Padronização e entrega técnica

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

### Casos de teste

#### TSK-TRA-012-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-012; RNF-MVP-011.

**Pré-condições e dados:** uma alteração aprovada. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: passa pelo processo definido.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** há evidência de verificação e identificação da versão entregue.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>

<a id="tsk-tra-013"></a>

## TSK-TRA-013 — Evolução e capacidade

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

### Casos de teste

#### TSK-TRA-013-CT-01

**Critério vinculado:** CA-01. **Origem:** TSK-TRA-013; RNF-MVP-012.

**Pré-condições e dados:** mudança futura da pontuação. Usar dados sintéticos e as regras aprovadas do recorte; parâmetros ou valores ausentes devem ser definidos antes da execução.

**Passos:**

1. Preparar a condição e registrar a versão/ambiente de avaliação.
2. Executar: é especificada.
3. Comparar o resultado observado com o esperado e registrar evidências; verificar ausência de efeitos indevidos quando o resultado for impedimento.

**Resultado esperado:** a regra provisória e seu histórico são identificáveis sem reinterpretar silenciosamente lançamentos anteriores.

**Registro de execução:** Não executado nesta adequação. Executor, data, versão, ambiente, resultado observado, evidência e defeito associado: a preencher.

<details>
<summary>Detalhamento preservado da ficha de origem</summary>

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

</details>
