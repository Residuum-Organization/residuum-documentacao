# Residuum — arquitetura, refatoração e banco de dados

[Voltar ao documento geral](README.md).

As seis fichas abaixo desdobram trabalho técnico já previsto nos pacotes ADE. Seus identificadores TEC são recortes de execução; não são seis novas funcionalidades nem devem ser somados às 93 atividades como escopo independente. Manter vínculo ao cartão TSK/ADE pertinente; se criar subtarefas no quadro, evitar duplicar status e contabilização.

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

**Evidências de entrega:** revisão, contrato e registros antes/depois na API e no banco de avaliação. **Testes planejados:** CT-011-01 a CT-011-03 do [roteiro integrado](testes-integrados.md), com concorrência no banco de avaliação pertinente.

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
