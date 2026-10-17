# Residuum — casos integrados de validação

[Voltar ao guia](../01-planejamento/README.md).

Desdobramento dos 29 cenários da seção 13 da V6. São casos planejados; não foram executados nesta adequação. Complementam os casos das atividades e os requisitos de qualidade. Dados numéricos aqui são exemplos sintéticos de avaliação; políticas e valores comerciais precisam de aprovação. Condições não definidas impedem homologação do trecho dependente.

Para cada execução preencher: executor, data, ambiente, versão, resultado observado, evidência e defeito. Resultado esperado e observado são campos separados. Testes de integridade exigem conferir registros persistidos; concorrência deve usar o banco e os controles do ambiente real de avaliação.

## CT-001 — Usar convite individual duas vezes e em paralelo

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-001, TSK-MOR-001.

### CT-001-01 — uso inicial

**Pré-condições e dados:** Convite individual válido e ainda não usado; dois cadastros sintéticos distintos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir o primeiro cadastro.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma conta criada e um consumo do convite.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-001-02 — reutilização

**Pré-condições e dados:** Convite individual válido e ainda não usado; dois cadastros sintéticos distintos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Tentar um segundo cadastro com o convite consumido.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Segundo cadastro negado, sem nova conta.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-001-03 — concorrência

**Pré-condições e dados:** Convite individual válido e ainda não usado; dois cadastros sintéticos distintos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar simultaneamente dois cadastros com o mesmo convite novo.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Apenas um cadastro autorizado; consumo coerente.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-002 — Concorrer pela última vaga de convite compartilhado

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-002, TSK-MOR-001.

### CT-002-01 — última vaga

**Pré-condições e dados:** Convite compartilhado válido com uma única vaga restante; limite aprovado.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar simultaneamente dois cadastros distintos.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Somente um consome a última vaga; limite não excedido.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-003 — Abrir link expirado e enviar cadastro inválido

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M01. **Atividades:** TSK-ADM-001, TSK-MOR-001.

### CT-003-01 — expiração

**Pré-condições e dados:** Convites e dados sintéticos; política de validade aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar cadastro com convite expirado.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Nenhuma conta criada nem vaga consumida.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-003-02 — dados inválidos

**Pré-condições e dados:** Convites e dados sintéticos; política de validade aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar dados inválidos com convite disponível.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Nenhuma conta criada; disponibilidade do convite preservada.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-004 — Registrar manualmente duas latas

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-008, TSK-MOR-010.

### CT-004-01 — registro

**Pré-condições e dados:** Morador autorizado; estoque e pontos iniciais registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Cadastrar manualmente duas latas válidas.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Estoque aumenta em duas latas; pontos não mudam.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-005 — Importar nota com PET, lata e item sem material identificável

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-007, TSK-MOR-009.

### CT-005-01 — revisão

**Pré-condições e dados:** Fonte aprovada com nota sintética contendo PET, lata e item sem material identificável.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Importar, revisar e selecionar itens; complementar material ausente manualmente.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Apenas itens revisados e selecionados seguem; nenhum descarte ou crédito automático.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-006 — Falhar scanner/consulta de produto/nota

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02. **Atividades:** TSK-MOR-006, TSK-MOR-007, TSK-MOR-008.

### CT-006-01 — scanner

**Pré-condições e dados:** Morador autorizado; simular falha controlada no ambiente de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Impedir leitura do código e usar entrada manual.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Falha compreensível e alternativa manual disponível; nenhum dado inventado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-006-02 — produto

**Pré-condições e dados:** Morador autorizado; simular falha controlada no ambiente de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Provocar indisponibilidade da consulta de produto.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mensagem de falha e alternativa manual; sem crédito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-006-03 — nota

**Pré-condições e dados:** Morador autorizado; simular falha controlada no ambiente de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Provocar indisponibilidade da consulta da nota.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mensagem de falha e alternativa manual; sem crédito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-007 — Descarte rápido de lata de Coca-Cola identificada

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02, M03, M04. **Atividades:** TSK-MOR-005, TSK-MOR-014, TSK-MOR-015, TSK-MOR-017.

### CT-007-01 — rápido

**Pré-condições e dados:** Lata identificável, ponto compatível, GPS válido conforme política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Revisar item, escolher ponto, abrir rota externa, retornar com GPS novo e confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Um descarte concluído e dez pontos básicos; sem etapa obrigatória de estoque permanente.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-008 — Selecionar parte do estoque para entrega

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M02, M03. **Atividades:** TSK-MOR-010, TSK-MOR-015.

### CT-008-01 — parcial

**Pré-condições e dados:** Estoque pessoal com cinco latas; selecionar duas; ponto e presença válidos.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Selecionar duas latas e confirmar a entrega.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Seleção não baixa antecipadamente; após confirmação restam três latas no estoque pessoal.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-009 — Entregar PET em ponto que não aceita PET

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03, M06. **Atividades:** TSK-MOR-011, TSK-MOR-015, TSK-PON-001.

### CT-009-01 — incompatível

**Pré-condições e dados:** PET selecionado e ponto que não aceita PET; saldos iniciais registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Tentar confirmar entrega de PET nesse ponto.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Confirmação negada, sem baixa, entrada ou crédito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-010 — Negar GPS, usar posição antiga ou fora do raio aprovado

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03. **Atividades:** TSK-MOR-014, TSK-MOR-015.

### CT-010-01 — permissão negada

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Negar permissão de localização e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem conclusão, baixa ou crédito; orientação para recuperar.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-010-02 — posição antiga

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Fornecer leitura além da idade aprovada e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Presença recusada; sem efeitos de descarte.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-010-03 — fora do raio

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Fornecer leitura fora do raio aprovado e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Presença recusada; sem efeitos de descarte.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-010-04 — imprecisa

**Pré-condições e dados:** Itens revisados, ponto válido e parâmetros GPS aprovados; sem usar valores de fixture como política.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Fornecer leitura além da precisão aprovada e tentar confirmar.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Presença recusada; sem efeitos de descarte.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-011 — Reenviar confirmação e provocar falha concorrente

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03, M04. **Atividades:** TSK-MOR-015, TSK-MOR-017, TSK-TRA-004.

### CT-011-01 — reenvio

**Pré-condições e dados:** Operação identificável com saldo disponível; banco de avaliação com controles de concorrência reais.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Confirmar e reenviar a mesma operação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Um descarte, uma baixa, uma entrada e um crédito básico.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-011-02 — falha parcial

**Pré-condições e dados:** Operação identificável com saldo disponível; banco de avaliação com controles de concorrência reais.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Provocar falha controlada durante a transação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem sucesso parcial ou saldos divergentes.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-011-03 — concorrência

**Pré-condições e dados:** Operação identificável com saldo disponível; banco de avaliação com controles de concorrência reais.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar operações concorrentes disputando o mesmo saldo.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem saldo negativo ou duplicação; resultados coerentes com operações autorizadas.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-012 — Concluir descarte elegível a campanha

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M04, M05. **Atividades:** TSK-MOR-018, TSK-MOR-020, TSK-MOR-024.

### CT-012-01 — bônus

**Pré-condições e dados:** Campanha, período e elegibilidade aprovados; descarte elegível.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir descarte elegível e consultar lançamentos.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Básico e bônus separados e vinculados; regra aplicada uma vez.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-013 — Comprar voucher sem saldo e depois com saldo

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M04, M05. **Atividades:** TSK-MOR-021, TSK-MOR-025.

### CT-013-01 — saldo insuficiente

**Pré-condições e dados:** Oferta e custo aprovados, estoque disponível e contas sintéticas.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar voucher com saldo inferior ao custo.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem emissão nem débito.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-013-02 — saldo suficiente

**Pré-condições e dados:** Oferta e custo aprovados, estoque disponível e contas sintéticas.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar e confirmar voucher com saldo suficiente.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma aquisição e débito do custo aprovado, vinculados e consistentes.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-014 — Participar em sorteio conforme regra aprovada

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M05. **Atividades:** TSK-MOR-026.

### CT-014-01 — participação

**Pré-condições e dados:** Sorteio e regras aprovados; participante elegível e saldo quando necessário.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Confirmar participação e reenviar a mesma operação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Registro e custo conforme regra; sem duplicidade involuntária.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-015 — Encerrar ponto temporário com material remanescente

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-ADM-006.

### CT-015-01 — encerramento

**Pré-condições e dados:** Ponto temporário com estoque remanescente e encerramento configurado.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Encerrar o ponto e consultar busca, estoque e histórico.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Ponto não oferecido como disponível; remanescentes e histórico preservados.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-016 — Editar materiais aceitos no ponto

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-PON-001.

### CT-016-01 — materiais

**Pré-condições e dados:** Responsável vinculado; ponto com materiais aceitos e estoque anterior.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Editar materiais aceitos e repetir consulta do ponto.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Consulta atualizada; estoque anterior preservado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-017 — Responsável solicitar retirada

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06. **Atividades:** TSK-PON-004.

### CT-017-01 — pedido

**Pré-condições e dados:** Responsável vinculado e necessidade de retirada registrada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar solicitação de coleta e consultar painéis.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Pedido ao administrador; nenhuma atribuição automática à cooperativa.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-018 — Administrador solicitar e cooperativa aceitar

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07. **Atividades:** TSK-ADM-009, TSK-COO-001.

### CT-018-01 — aceite

**Pré-condições e dados:** Administrador autorizado; cooperativa cadastrada; política de agendamento aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Administrador atribui e agenda; cooperativa atribuída aceita.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Pedido, atribuição, horário e aceite rastreáveis.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-019 — Cooperativa registrar 12 kg PET e 3 kg alumínio

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07. **Atividades:** TSK-COO-004.

### CT-019-01 — pesagem

**Pré-condições e dados:** Coleta aceita, cooperativa atribuída, materiais PET/alumínio e pesos de avaliação.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Registrar 12 kg de PET e 3 kg de alumínio.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Pesos por material vinculados à coleta; nenhum novo ponto básico ao morador.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-020 — Registrar coleta parcial

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M06, M07. **Atividades:** TSK-PON-002, TSK-COO-004.

### CT-020-01 — retirada parcial

**Pré-condições e dados:** Retirada parcial, entradas posteriores e remanescentes; conciliação de unidades/pesos aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir coleta parcial e consultar movimentos e saldos.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Movimento conforme regra aprovada; remanescentes e novas entradas preservados, sem zerar por inferência.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-021 — Concluir coleta sem pagar

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M07, M08. **Atividades:** TSK-COO-004, TSK-ADM-012.

### CT-021-01 — separação de estados

**Pré-condições e dados:** Coleta aceita; pagamento ainda não confirmado.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Concluir coleta sem executar pagamento e consultar ambos os estados.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Conclusão operacional não declara pagamento confirmado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-022 — Administrador iniciar pagamento e repetir após timeout

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M08. **Atividades:** TSK-ADM-011.

### CT-022-01 — timeout

**Pré-condições e dados:** Provedor/condições aprovados, ambiente de avaliação e ordem identificável.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Iniciar pagamento, provocar timeout controlado e consultar/repetir a mesma ordem.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma ordem lógica e resultado conciliável; sem nova cobrança por repetição.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-023 — Receber retorno de pagamento inválido, repetido ou incerto

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M08. **Atividades:** TSK-ADM-012.

### CT-023-01 — retorno inválido

**Pré-condições e dados:** Retornos sintéticos do provedor no ambiente de avaliação; política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Processar retorno sem autenticidade ou identificação válida.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Sem confirmação financeira falsa.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-023-02 — retorno repetido

**Pré-condições e dados:** Retornos sintéticos do provedor no ambiente de avaliação; política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Processar duas vezes o mesmo retorno confirmado.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Uma confirmação lógica; sem duplicidade.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-023-03 — retorno incerto

**Pré-condições e dados:** Retornos sintéticos do provedor no ambiente de avaliação; política aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Processar resultado pendente/incerto e consultar situação.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mantém pendência conforme regra, sem declarar recebimento confirmado.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-024 — Solicitar relatório sem benefício de plano

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M09, M10. **Atividades:** TSK-PON-005, TSK-TRA-001.

### CT-024-01 — sem benefício

**Pré-condições e dados:** Perfil/vínculo autorizado, mas plano sem benefício de relatório; matriz aprovada.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar relatório pela interface e pelo serviço.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Restrição de plano aplicada, inclusive ao administrador segundo regra aprovada.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-025 — Ter plano pago e pedir dados de ponto sem autorização

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M10. **Atividades:** TSK-TRA-001.

### CT-025-01 — sem vínculo

**Pré-condições e dados:** Usuário com plano pago e sem vínculo com outro ponto.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Solicitar dados do ponto não autorizado diretamente ao serviço.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Acesso negado; benefício pago não cria vínculo.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-026 — Exibir ativo, aberto e conectado

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M09. **Atividades:** TSK-ADM-014.

### CT-026-01 — indicadores

**Pré-condições e dados:** Definições e janela temporal de ativo, aberto e conectado aprovadas.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Preparar registros em estados distintos e consultar indicadores.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Cada indicador usa seu conceito e janela; não confunde atividade com abertura ou conexão.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-027 — Adicionar imagem/vídeo válido e inválido

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M11. **Atividades:** TSK-ADM-017.

### CT-027-01 — mídia válida

**Pré-condições e dados:** Administrador autorizado; formatos, tamanho/duração e publicação aprovados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar imagem/vídeo permitido e consultar oferta.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Mídia aceita disponível e condições essenciais também em texto.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-027-02 — mídia inválida

**Pré-condições e dados:** Administrador autorizado; formatos, tamanho/duração e publicação aprovados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Enviar arquivo fora da política aprovada.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Arquivo rejeitado, sem publicação falsa ou perda das condições em texto.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-028 — Abrir confirmação e seguir para Home ou Loja

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** M03. **Atividades:** TSK-MOR-016.

### CT-028-01 — Home

**Pré-condições e dados:** Descarte já confirmado e saldos registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Abrir confirmação e seguir para Home.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Navegação funciona; descarte e saldos não são repetidos.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-028-02 — Loja

**Pré-condições e dados:** Descarte já confirmado e saldos registrados.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Abrir confirmação e seguir para Loja.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Navegação funciona; descarte e saldos não são repetidos.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

## CT-029 — Restaurar backup e investigar crédito/pagamento

**Origem:** [V6, seção 13](../02-produto/02-requisitos-mvp-v6.md#13-cenários-integrados-de-validação). **Módulos:** TRANSVERSAL. **Atividades:** TSK-TRA-008, TSK-TRA-009.

### CT-029-01 — restauração

**Pré-condições e dados:** Backup do ambiente de avaliação e metas de recuperação aprovadas; registros de crédito/pagamento.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Restaurar backup isoladamente e verificar dados/jornadas.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Recuperação medida e comparada às metas; nenhum uso de banco real.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.

### CT-029-02 — auditoria

**Pré-condições e dados:** Backup do ambiente de avaliação e metas de recuperação aprovadas; registros de crédito/pagamento.

**Passos:**

1. Preparar os dados e registrar os estados/saldos iniciais pertinentes.
2. Localizar a cadeia de eventos de crédito/pagamento na base restaurada.
3. Consultar resultado, registros e estados pertinentes; comparar com os valores iniciais e o resultado esperado.

**Resultado esperado:** Origem e efeitos consultáveis e coerentes com permissões.

**Evidência exigida:** registro das ações e respostas, versão/ambiente e comparação antes/depois; registros do serviço e dados quando houver efeitos persistidos.

**Resultado observado:** Não executado.

**Evidência produzida / defeito associado:** A preencher após execução.
