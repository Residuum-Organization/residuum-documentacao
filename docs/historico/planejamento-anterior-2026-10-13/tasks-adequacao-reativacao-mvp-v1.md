# Residuum — Tasks direcionadas de adequação e reativação do MVP

**Documento anterior, preservado para rastreabilidade.** Para executar o trabalho atual, consulte o [documento geral das tasks](../../planejamento/modulos/tasks-gerais.md). Este arquivo não é uma segunda lista vigente de atividades.


**[Documento geral das atividades por módulo e perfil](../../planejamento/modulos/README.md)** — modelo padronizado, testes, proposta de Scrum e matriz de importância; responsáveis e datas a preencher pela equipe.


**Versão:** 1.0 — roteiro de execução para refinamento da equipe

**Data:** 09/10/2026

**Público:** equipe de seis pessoas: produto, design, frontend, backend e QA.

**Base:** [visão do projeto](../../visao/visao-do-projeto.md), [requisitos V6](../../requisitos/requisitos-mvp-v6.md), [diagnóstico do código](../../diagnostico/comparativo-mvp-estagio-v1.md) e [tasks V1](tasks-desenvolvimento-mvp-v1.md).

**Objetivo:** orientar a adequação do MVP do estágio à proposta consolidada com o idealizador, explicando o comportamento atual, a mudança necessária e a evidência que permitirá aceitar cada entrega.

## 1. Como a equipe deve utilizar este documento

Este é o roteiro de trabalho sobre o código existente. A V6 continua sendo a referência de comportamento e decisões; o diagnóstico continua sendo a referência de evidências; as tasks V1 preservam as histórias e os critérios completos. Nenhum desses documentos foi substituído ou alterado para produzir este roteiro.

As **27 fichas ADE** agrupam trabalhos compartilhados para evitar implementações duplicadas. Cada ficha referencia as tasks TSK originais. No quadro da equipe, use ADE como pacote de adequação e TSK como referência funcional; não conte ambos como duas entregas independentes. É possível dividir uma ficha em cartões menores, preservando sua origem, dependências e critérios.

**Como iniciar uma ficha:**

1. Localizar as TSK e RF/RNF referenciados e conferir regras, critérios e pendências na V6.
2. Confirmar no commit de trabalho se o comportamento diagnosticado continua presente.
3. Separar o recorte executável das decisões bloqueadas; registrar a decisão de produto antes de implementar uma regra pendente.
4. Reaproveitar a base indicada, executar os ajustes e verificar interface, API e efeitos persistidos.
5. Anexar evidências e registrar o que foi entregue e o que ainda depende de decisão.

**Estado inicial:** trabalho identificado, ainda não implementado/homologado por este documento. Responsável nominal, esforço, sprint e data permanecem **a definir pela equipe** em todas as fichas.

O diagnóstico examinou frontend `4f41b139ba9871c92a5c5a72ca2f9d98ba6af164` e backend `11670c56b45461223e4fea42e66716f5a25b7830`. Não verificou produção, banco real, dispositivo ou concorrência PostgreSQL. Ausência no snapshot não comprova ausência em outra branch. Os caminhos nas fichas são pontos de partida nos repositórios de código, não arquivos deste repositório documental. Consulte o diagnóstico para links de evidência fixados aos commits.

### 1.1 Tipos de trabalho, responsabilidade e conclusão

| Tipo | O que executar |
|---|---|
| Retrabalhar | Corrigir regra/efeito incompatível ou defeito e conferir impacto nos consumidores/dados. |
| Ajustar | Adaptar capacidade existente ao comportamento e contrato atuais. |
| Construir | Implementar capacidade equivalente não localizada, reutilizando infraestrutura disponível. |
| Homologar base / verificar | Comprovar critérios e ajustar divergências; existência de tela não significa tarefa concluída. |

**P0:** segurança, integridade e bloqueios da jornada. **P1:** completar experiência/operação e capacidades de negócio. Prioridades são propostas para refinamento; não removem funcionalidades nem tornam pronta uma ficha com decisões bloqueantes. Os controles de segurança/integridade acompanham também entregas P1.

| Papel | Responsabilidade sugerida |
|---|---|
| Produto/idealizador | Confirmar regras, resolver PD e aprovar recorte/comportamento demonstrado. |
| Design | Definir fluxo, mensagens, estados de falha e acessibilidade da interface. |
| Frontend | Integrar jornada e estados ao resultado real da API. |
| Backend | Aplicar contrato, autorização, validação, transações, persistência e integrações. |
| QA | Verificar BDD, falhas, reenvio, permissões e dados; registrar ambiente/commit/evidência. |
| Operação técnica | Apoiar ambiente, migrations, segredos, recuperação e liberação. |

**Subtarefas de cada ficha:** a lista “Trabalho a executar” deve ser dividida em interface/design, regra/API, persistência/migração, integração e validação conforme as camadas afetadas. Não basta trocar a lista por “implementar tela e endpoint”.

**Conclusão aplicada a todas as fichas:** implementação revisada; BDD da ficha e das TSK/RF pertinentes verificados; efeitos persistidos e permissões demonstrados; evidências ligadas ao commit; documentação técnica coerente; recortes bloqueados explicitados. Uma parte entregue não conclui o pacote nem homologa todo o MVP.

### 1.2 Regras que devem permanecer consistentes

- Registrar resíduo no estoque não concede pontos.
- Descarte concluído concede **10 pontos por operação**, uma vez; não 10 por embalagem ou kg.
- Bônus é lançamento separado, sujeito à campanha aprovada.
- Conferência/pesagem da cooperativa não repete baixa/crédito do morador.
- Retirada preserva entradas posteriores e remanescentes conforme conciliação aprovada; unidades não viram kg por suposição.
- Aceite, conclusão operacional e pagamento são acontecimentos diferentes.
- Plano não concede acesso a dados sem perfil/vínculo autorizado.
- Cashback em dinheiro, ranking e confirmação por QR ficam fora das entregas confirmadas. Código legado exige análise de exposição/impacto; este roteiro não autoriza remoção automática.
- Conteúdo herdado ou proposta na V6 não se torna aprovado por aparecer no código ou neste roteiro.

## 2. Ordem de trabalho e resultados para demonstração

| Etapa | Fichas principais | Resultado / condição para avançar |
|---|---|---|
| E0 — Preparar base | ADE-000; ADE-024 a ADE-026 iniciam acompanhamento | Ambiente reproduzível, contratos/migrations conferidos e verificação registrada. |
| E1 — Acesso e dados | ADE-001 a ADE-004 | Papéis/vínculos corretos, ingresso controlado e materiais/unidades coerentes. |
| E2 — Jornada principal | ADE-005; ADE-009 a ADE-013; parte independente de ADE-006 | Cadastro manual sem pontos → estoque → ponto compatível → GPS → entrega única → 10 pontos e histórico real. |
| E3 — Agilizar cadastro | ADE-006 a ADE-008 | Scanner/nota com revisão/manual; mesma confirmação da jornada principal. |
| E4 — Operação | ADE-014 a ADE-017; parte operacional de ADE-023 | Pedido → atribuição/agendamento → aceite → rota → pesagem e saldo conciliado, sem novo crédito ao morador. |
| E5 — Loja/comercial | ADE-018 a ADE-023 | Campanhas, vouchers/sorteios, mídia, pagamento, planos/relatórios conforme decisões e controles. |
| Todas / liberação | ADE-024 a ADE-026 | Regressões, auditoria, privacidade, dispositivos, carga e restauração acompanhando entregas. |

Esta sequência não é calendário nem autorização de implantação. Contratos podem ser preparados em paralelo: configuração do ponto deve estar disponível para busca; validação final de ocupação depende de retirada corrigida. Campanhas, vouchers, pagamentos e planos são refináveis em paralelo após seus fundamentos/decisões, sem dependências comerciais artificiais.

## Navegação das fichas

- [ADE-000](#ade-000) — Preparar o ambiente e confirmar a base que será reativada
- [ADE-001](#ade-001) — Corrigir permissões e vínculos entre administrador, ponto e cooperativa
- [ADE-002](#ade-002) — Construir convites e adequar o ingresso do morador
- [ADE-003](#ade-003) — Completar sessão, recuperação e edição segura de perfil
- [ADE-004](#ade-004) — Padronizar PET, lata, quantidade e peso
- [ADE-005](#ade-005) — Adequar cadastro manual, revisão e estoque pessoal
- [ADE-006](#ade-006) — Completar ação rápida sem criar um segundo fluxo de descarte
- [ADE-007](#ade-007) — Integrar scanner de produto ao cadastro do morador
- [ADE-008](#ade-008) — Construir importação de nota fiscal com seleção e revisão
- [ADE-009](#ade-009) — Adequar pontos compatíveis, detalhes e retorno da navegação
- [ADE-010](#ade-010) — Revalidar GPS no momento de confirmar a entrega
- [ADE-011](#ade-011) — Corrigir descarte, estoques e crédito único de 10 pontos
- [ADE-012](#ade-012) — Alinhar confirmação, histórico e extrato ao resultado persistido
- [ADE-013](#ade-013) — Adequar gestão de pontos fixos, temporários e materiais aceitos
- [ADE-014](#ade-014) — Corrigir ocupação, lotação e avisos do ponto
- [ADE-015](#ade-015) — Integrar pedido do ponto, agendamento administrativo e aceite
- [ADE-016](#ade-016) — Construir painel de rota e horário da cooperativa
- [ADE-017](#ade-017) — Corrigir pesagem e retirada sem apagar novas entradas
- [ADE-018](#ade-018) — Construir pagamento administrativo da coleta por API
- [ADE-019](#ade-019) — Adequar campanhas, metas e bônus separados
- [ADE-020](#ade-020) — Adequar Loja, vouchers e sorteios com débito protegido
- [ADE-021](#ade-021) — Construir imagens e vídeos das ofertas com publicação controlada
- [ADE-022](#ade-022) — Construir planos e aplicar acesso comercial a relatórios
- [ADE-023](#ade-023) — Revisar painel administrativo, gráficos e significado dos indicadores
- [ADE-024](#ade-024) — Reconciliar testes e tornar verificações de entrega obrigatórias
- [ADE-025](#ade-025) — Adequar privacidade, auditoria e proteção das integrações
- [ADE-026](#ade-026) — Validar dispositivos, desempenho, recuperação e capacidade antes da reativação

## 3. Preparação e controles compartilhados

<a id="ade-000"></a>

### ADE-000 — Preparar o ambiente e confirmar a base que será reativada

**Perfil/jornada:** Transversal. **Tipo:** Ajustar e verificar. **Prioridade:** P0. **Etapa:** E0.

**Referências:** RNF-MVP-011.

**Tasks originais:** TSK-TRA-000, TSK-TRA-012.

**Evidência:** AUD-014, AUD-015, AUD-016 no diagnóstico.

**Responsabilidade sugerida:** backend, frontend, QA e operação técnica; produto valida políticas/metas aplicáveis.

**História:** como equipe, quero executar a base de forma reproduzível para desenvolver e validar o MVP sem divergências entre máquinas.

**Valor e relevância / prioridade:** Desbloqueia as jornadas e reduz falhas de ambiente confundidas com defeitos de produto.

**Situação encontrada:** A compilação local passou, mas a instalação integral do backend e as migrations no PostgreSQL não foram validadas. Documentação usa VITE_API_URL, enquanto o cliente lê VITE_API_BASE_URL.

**Base a reaproveitar:** Repositórios, lockfile, Docker, serviços por domínio e grafo de migrations existentes.

**Onde começar no código:** Frontend: src/api/client.js, docker-compose.yml e README.md. Backend: Dockerfile, entrypoint.sh e migrations.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Confirmar branches e commits de trabalho e registrar diferenças em relação aos snapshots auditados; não assumir que o código continua igual.
2. Padronizar a variável de URL da API no cliente, exemplos e implantação; conferir contratos consumidos e separar serviços residuais sem consumidor.
3. Definir versões suportadas de runtime e procedimento explícito de migrations. Demonstrar instalação completa, banco vazio e atualização de banco de avaliação com dados sintéticos.
4. Publicar instruções reproduzíveis de execução e contas de avaliação por perfil, sem credenciais reais.

**Dados e entrega esperada:** Inventário de versões, configuração sem segredos, relatório de instalação/migrations e registro do ambiente de avaliação. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** sem pacote anterior obrigatório; seguir etapa e ambiente disponível. Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-026. Infraestrutura final e procedimento de implantação dependem de PD-026; preparação local e confirmação dos contratos podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um ambiente limpo configurado conforme o guia, **quando** frontend e backend são iniciados, **então** o cliente acessa a API indicada e a equipe reproduz a execução.
- **Dado** um banco de avaliação vazio e outro em versão anterior, **quando** o procedimento de migrations é executado, **então** ambos chegam à versão esperada com evidências e preservação dos dados de avaliação.
- **Dado** um contrato residual sem consumidor, **quando** o inventário é revisado, **então** ele é identificado separadamente sem declarar falha de uma tela não afetada.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-001"></a>

### ADE-001 — Corrigir permissões e vínculos entre administrador, ponto e cooperativa

**Perfil/jornada:** Todos os perfis. **Tipo:** Retrabalhar. **Prioridade:** P0. **Etapa:** E1.

**Referências:** RF-MVP-008, RNF-MVP-002, RN-003, RN-011.

**Tasks originais:** TSK-ADM-004, TSK-PON-001, TSK-ADM-008, TSK-TRA-003.

**Evidência:** AUD-003, AUD-008, AUD-012 no diagnóstico.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como operador, quero acessar apenas as operações autorizadas para trabalhar sem expor ou modificar dados de outros pontos.

**Valor e relevância / prioridade:** Impede acesso indevido e permite ao responsável executar a função definida pelo idealizador.

**Situação encontrada:** Qualquer cooperativa é aceita pelo helper operacional; o responsável pelo ponto é confundido com cooperativa e fica excluído da edição de materiais.

**Base a reaproveitar:** Autenticação JWT, verificações de papel e estrutura de acessos administrativos.

**Onde começar no código:** Backend: app/dependencies/auth.py, app/routes/ponto_coleta.py, app/routes/cooperativa.py e modelos de vínculo. Frontend: rotas por perfil.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Inventariar os vínculos ativos de usuário, organização e ponto; propor representação coerente com operadores e atribuições aprovados.
2. Corrigir cada leitura e escrita no serviço: responsável opera pontos vinculados; cooperativa consulta e executa o que lhe foi atribuído; administrador exerce as funções previstas.
3. Ajustar navegação e formulários aos mesmos controles do backend, sem depender de esconder botões.
4. Planejar compatibilidade dos vínculos antigos e substituir o cadastro público operacional pelo ingresso administrativo conforme a política aprovada.

**Dados e entrega esperada:** Vínculos verificáveis, matriz de permissões e registro auditável de criação, alteração e revogação. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-000](#ade-000). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-002, PD-003, PD-023. Múltiplos perfis, operadores e tratamento das contas atuais dependem de PD-002/PD-003/PD-023. A correção de acesso indevido pode ser preparada e testada com vínculos sintéticos. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um responsável vinculado ao ponto A, **quando** edita materiais de A, **então** a alteração autorizada é persistida; ao tentar o ponto B, o serviço nega sem modificar B.
- **Dado** uma cooperativa sem atribuição, **quando** consulta ou altera uma operação de outro ponto, **então** o serviço nega o acesso.
- **Dado** um vínculo revogado, **quando** o operador tenta novamente a operação protegida, **então** não conserva a autorização anterior.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-002"></a>

### ADE-002 — Construir convites e adequar o ingresso do morador

**Perfil/jornada:** Administrador → morador. **Tipo:** Construir e ajustar. **Prioridade:** P0. **Etapa:** E1.

**Referências:** RF-MVP-001, RF-MVP-002, RF-MVP-003, RF-MVP-004, RNF-MVP-002, RNF-MVP-003, RN-001, RN-002.

**Tasks originais:** TSK-ADM-001, TSK-ADM-002, TSK-MOR-001, TSK-ADM-003, TSK-TRA-004.

**Evidência:** AUD-003 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como administrador, quero controlar o ingresso por convites para limitar e acompanhar o grupo autorizado a usar o MVP.

**Valor e relevância / prioridade:** Entrega o controle de acesso solicitado e evita vagas duplicadas.

**Situação encontrada:** Cadastro do morador é público e não consome convite. Não foi localizada emissão de links individuais/compartilhados ou criação administrativa equivalente.

**Base a reaproveitar:** Formulário de cadastro, validação de usuário e hashing de senha.

**Onde começar no código:** Backend: app/routes/auth.py e app/routes/admin.py. Frontend: formulário de cadastro e administração de usuários.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Construir administração dos dois tipos de link: individual de uso único e compartilhado com limite e expiração configurados segundo decisão.
2. Exigir convite válido no ingresso comum e consumir a vaga na mesma transação que cria a conta; proteger última vaga concorrente.
3. Criar cadastro assistido pelo administrador, aplicando a decisão sobre consumo ou dispensa de convite.
4. Mostrar falhas de convite, cadastro inválido e vaga indisponível; impedir ingresso por chamada direta que contorne a interface.

**Dados e entrega esperada:** Convite, validade, limite, consumo vinculado ao cadastro e trilha administrativa sem expor o token em logs. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-000](#ade-000), [ADE-001](#ade-001). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-001, PD-002, PD-003. Expiração, destinatário, revogação, contas antigas e cadastro assistido dependem de PD-001 a PD-003; não fixar números ou prazos por suposição. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um link individual válido, **quando** um cadastro é concluído, **então** ele é consumido uma vez e a nova conta pode seguir para login.
- **Dado** a última vaga de um link compartilhado, **quando** dois cadastros concorrem, **então** somente um consome a vaga e nenhuma conta excedente é criada.
- **Dado** um cadastro inválido ou convite expirado, **quando** há tentativa de ingresso, **então** nenhuma conta é criada nem vaga consumida indevidamente.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-003"></a>

### ADE-003 — Completar sessão, recuperação e edição segura de perfil

**Perfil/jornada:** Morador e demais usuários. **Tipo:** Ajustar, construir e homologar base. **Prioridade:** P1. **Etapa:** E1.

**Referências:** RF-MVP-005, RF-MVP-006, RF-MVP-007, RNF-MVP-002.

**Tasks originais:** TSK-MOR-002, TSK-MOR-003, TSK-MOR-004, TSK-TRA-003.

**Evidência:** matriz e limites do diagnóstico; capacidade ainda precisa de verificação/integração.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como usuário, quero entrar, recuperar acesso e atualizar meu perfil para continuar usando a plataforma com segurança.

**Valor e relevância / prioridade:** Reduz dependência de suporte informal e mantém acesso consistente.

**Situação encontrada:** Login, refresh e perfil existem; logout é local e recuperação informa indisponibilidade.

**Base a reaproveitar:** Login, hashing, consulta/edição de perfil e tratamento de sessão no cliente.

**Onde começar no código:** Backend: app/routes/auth.py e serviços de segurança. Frontend: autenticação, ForgotPasswordPage.jsx e ProfilePage.jsx.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Aplicar política aprovada de habilitação, sessão e revogação; conferir encerramento também nas operações protegidas.
2. Construir recuperação por canal aprovado com credencial temporária de uso único, validade e redefinição.
3. Homologar os campos editáveis do perfil e impedir que o usuário altere papel, vínculos ou dados protegidos.
4. Integrar mensagens e estados de sessão expirada, conta desabilitada e recuperação sem confirmação indevida de dados pessoais.

**Dados e entrega esperada:** Sessões conforme política, solicitações de recuperação e perfil autorizado; nunca persistir senha em texto. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-002](#ade-002). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-002, PD-003, PD-023. Canal, campos, duração/revogação e múltiplos perfis dependem de PD-002/PD-003/PD-023. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** credenciais válidas e conta habilitada, **quando** o usuário entra, **então** recebe sua área e permissões corretas.
- **Dado** uma sessão encerrada conforme política aprovada, **quando** é usada em operação protegida, **então** a operação é negada.
- **Dado** uma credencial de recuperação consumida ou expirada, **quando** há nova tentativa, **então** a senha não é alterada; edição de perfil não permite promoção de papel.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-004"></a>

### ADE-004 — Padronizar PET, lata, quantidade e peso

**Perfil/jornada:** Transversal. **Tipo:** Retrabalhar contrato de dados. **Prioridade:** P0. **Etapa:** E1.

**Referências:** RF-MVP-012, RF-MVP-015, RF-MVP-035, RF-MVP-043, RNF-MVP-003, RN-003, RN-004, RN-007, RN-014, RN-015, RN-016, RN-021.

**Tasks originais:** TSK-MOR-008, TSK-MOR-011, TSK-PON-002, TSK-COO-004, TSK-TRA-004.

**Evidência:** AUD-007 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como equipe operacional, quero dados com significado uniforme para acompanhar materiais sem misturar contagem e pesagem.

**Valor e relevância / prioridade:** Evita perda de saldo, capacidade incorreta e relatórios sem significado.

**Situação encontrada:** Frontend e backend usam listas diferentes de materiais; unidades e kg aparecem em campos e cálculos incompatíveis.

**Base a reaproveitar:** Formulários, validadores e modelos existentes, com adaptação compatível.

**Onde começar no código:** Frontend: CadastrarResiduoPage.jsx e formulários operacionais. Backend: validacao_service.py e contratos de inventário/coleta.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Documentar códigos canônicos para PET e lata de alumínio e o significado de cada campo compartilhado entre interfaces e API.
2. Separar contagem registrada pelo morador de peso medido pela cooperativa. Não converter unidades em kg sem regra aprovada.
3. Ajustar cadastro, estoque, seleção de ponto, coleta e relatórios para o mesmo contrato.
4. Catalogar materiais antigos e propor tratamento de compatibilidade/migração; não converter todo plástico em PET ou todo metal em lata automaticamente.

**Dados e entrega esperada:** Contrato versionado de material/unidade e inventário de registros legados incompatíveis. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-000](#ade-000). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-009, PD-018. Unidade de capacidade e conciliação contagem/peso dependem de PD-009/PD-018; catálogo inicial e separação sem conversão podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um cadastro novo, **quando** o material é selecionado, **então** frontend e API aceitam o mesmo catálogo inicial PET/lata.
- **Dado** contagem de embalagens e pesagem em kg, **quando** os dados são exibidos, **então** permanecem separados e identificados.
- **Dado** material legado genérico, **quando** a adequação é preparada, **então** ele não é reclassificado nem removido sem política de migração aprovada.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

## 4. Jornada do morador

<a id="ade-005"></a>

### ADE-005 — Adequar cadastro manual, revisão e estoque pessoal

**Perfil/jornada:** Morador. **Tipo:** Ajustar. **Prioridade:** P0. **Etapa:** E2.

**Referências:** RF-MVP-012, RF-MVP-013, RF-MVP-014, RNF-MVP-003, RN-003, RN-004, RN-005, RN-007.

**Tasks originais:** TSK-MOR-008, TSK-MOR-009, TSK-MOR-010.

**Evidência:** AUD-006, AUD-007 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero registrar e revisar meus resíduos para organizar o estoque antes de escolher quando descartá-los.

**Valor e relevância / prioridade:** Entrega uma jornada útil mesmo quando fontes externas não estão disponíveis.

**Situação encontrada:** Cadastro e estoque existem, mas identificação é descartada no serviço e materiais divergem do escopo inicial.

**Base a reaproveitar:** Formulário, inventário, seleção de itens e lote parcial.

**Onde começar no código:** Frontend: CadastrarResiduoPage.jsx e estoque. Backend: inventario_usuario.py e identificacao_residuo_service.py.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Exigir e persistir nome, material e quantidade conforme campos/validações da V6; apresentar revisão antes da confirmação.
2. Permitir completar ou corrigir informações não identificadas por scanner/nota usando o mesmo formulário.
3. Registrar no estoque sem movimentar ponto nem creditar pontos; atualizar listagem com o resultado persistido.
4. Manter seleção de quantidades disponíveis para descarte e tratar erro, item desatualizado e repetição involuntária sem apagar dados.

**Dados e entrega esperada:** Item identificado, material, quantidade disponível e origem quando aplicável; seleção separada do descarte concluído. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-003](#ade-003), [ADE-004](#ade-004). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-005, PD-006. Reimportação e contratos reais de edição/exclusão dependem de PD-005/PD-006. Abandono do caminho rápido elimina o rascunho, sem inclusão automática no estoque, conforme decisão de 10/10/2026; cadastro manual e registro sem pontos podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** três latas registradas, **quando** o cadastro é confirmado, **então** o estoque ganha três unidades e o saldo de pontos não muda.
- **Dado** dados incompletos, **quando** o morador tenta confirmar, **então** vê os campos a corrigir e nenhum item inválido é persistido.
- **Dado** saldo disponível de três unidades, **quando** seleciona quatro para descarte, **então** o sistema impede o envio sem reduzir o estoque.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-006"></a>

### ADE-006 — Completar ação rápida sem criar um segundo fluxo de descarte

**Perfil/jornada:** Morador. **Tipo:** Ajustar e integrar. **Prioridade:** P1. **Etapa:** E2/E3.

**Referências:** RF-MVP-009, RF-MVP-014, RF-MVP-017, RF-MVP-019, RNF-MVP-003, RN-004, RN-007, RN-008.

**Tasks originais:** TSK-MOR-005, TSK-MOR-010, TSK-MOR-013, TSK-MOR-015.

**Evidência:** AUD-006 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero iniciar o descarte rapidamente para chegar à escolha do ponto com poucos passos.

**Valor e relevância / prioridade:** Reduz atrito sem multiplicar regras de entrega.

**Situação encontrada:** A ação atual abre o formulário; o scanner não está integrado à entrada rápida do morador.

**Base a reaproveitar:** Home, formulário, seleção de destino e serviço comum de descarte.

**Onde começar no código:** Frontend: ação da Home, cadastro e navegação da jornada. Backend: serviço comum de descarte.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Diferenciar a intenção Registrar da intenção Descarte rápido na entrada e conduzir a ação rápida diretamente à leitura.
2. Preservar a opção manual quando leitura falha ou câmera não está disponível.
3. Usar a mesma confirmação e integridade do estoque para ambas as entradas; não criar endpoint com regra distinta de pontos.
4. Aplicar a decisão de 10/10/2026: rascunho na memória do fluxo; abandono, reload ou fechamento elimina os itens sem gravar no estoque; rota externa em outra aba conserva o fluxo e exige GPS novo no retorno; falhas recuperáveis preservam itens enquanto a pessoa continua no fluxo.

**Dados e entrega esperada:** Intenção da jornada, itens revisados e seleção de destino conservados conforme PD-006. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-005](#ade-005), [ADE-007](#ade-007), [ADE-009](#ade-009), [ADE-011](#ade-011). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-006. Persistência e abandono estão definidos na decisão de UX de 10/10/2026; contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes em PD-006. Não liberar escrita real sem contrato validado. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** a ação Descarte rápido, **quando** ela é acionada, **então** abre a leitura e oferece alternativa manual.
- **Dado** um item revisado, **quando** o morador escolhe um ponto, **então** o item segue para a confirmação comum sem crédito antecipado.
- **Dado** abandono do caminho rápido, **quando** retorna à plataforma, **então** o rascunho anterior não é recuperado, os itens não foram incluídos automaticamente no estoque e não houve crédito de pontos.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-007"></a>

### ADE-007 — Integrar scanner de produto ao cadastro do morador

**Perfil/jornada:** Morador. **Tipo:** Construir integração e reaproveitar câmera. **Prioridade:** P1. **Etapa:** E3.

**Referências:** RF-MVP-010, RF-MVP-013, RNF-MVP-001, RNF-MVP-004, RNF-MVP-009, RN-003, RN-004, RN-005.

**Tasks originais:** TSK-MOR-006, TSK-MOR-009, TSK-TRA-005, TSK-TRA-010.

**Evidência:** AUD-006 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero ler o código da embalagem para reduzir o preenchimento manual.

**Valor e relevância / prioridade:** Agiliza cadastro sem inventar material quando a fonte não identifica a embalagem.

**Situação encontrada:** Componente de scanner existe na conferência operacional, sem consulta de produto integrada ao cadastro.

**Base a reaproveitar:** Componente de câmera e formulário de revisão.

**Onde começar no código:** Frontend: componente usado por ApprovalCard.jsx. Backend: identificacao_residuo_service.py e adaptador da fonte aprovada.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Reaproveitar scanner na jornada do morador e manter código como identificador textual, preservando zeros iniciais.
2. Integrar fonte aprovada de produtos, mapeando embalagem para PET/lata apenas quando houver informação suficiente.
3. Preencher sugestões no formulário e exigir revisão; identificação não registra descarte nem concede pontos.
4. Tratar código desconhecido, resposta incompleta, indisponibilidade e câmera negada com complemento manual.

**Dados e entrega esperada:** Código, resultado de identificação e campos revisados conforme minimização definida. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-004](#ade-004), [ADE-005](#ade-005). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-004. Fonte, cobertura e contrato externo dependem de PD-004; interface/câmera/fallback podem ser desenvolvidos com respostas de avaliação identificadas. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um produto reconhecido pela fonte aprovada, **quando** é lido, **então** campos sugeridos são exibidos para revisão.
- **Dado** código com zero inicial, **quando** é consultado e salvo, **então** seu valor textual é preservado.
- **Dado** câmera negada ou produto desconhecido, **quando** a leitura não pode concluir, **então** o morador pode completar manualmente sem dados fictícios.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-008"></a>

### ADE-008 — Construir importação de nota fiscal com seleção e revisão

**Perfil/jornada:** Morador. **Tipo:** Construir. **Prioridade:** P1. **Etapa:** E3.

**Referências:** RF-MVP-011, RF-MVP-013, RNF-MVP-004, RNF-MVP-005, RNF-MVP-009, RN-003, RN-004, RN-005.

**Tasks originais:** TSK-MOR-007, TSK-MOR-009, TSK-TRA-005, TSK-TRA-006, TSK-TRA-010.

**Evidência:** AUD-006 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero aproveitar informações da nota para cadastrar resíduos com menos digitação.

**Valor e relevância / prioridade:** Entrega a inspiração de agilidade discutida, sem introduzir pagamento de cashback.

**Situação encontrada:** Não foi localizada importação equivalente de itens da nota para registro dos resíduos.

**Base a reaproveitar:** Formulário comum e futura integração de produto; não criar estoque paralelo.

**Onde começar no código:** Novo adaptador da nota e formulário comum; não foi localizada capacidade equivalente no snapshot.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Definir e integrar os tipos de nota/identificadores e fonte de consulta aprovados; não prometer leitura universal.
2. Extrair itens e sugerir embalagens identificáveis; permitir selecionar apenas resíduos disponíveis e revisar nome/material/quantidade.
3. Quando não houver identificação suficiente, oferecer complemento manual sem converter produto desconhecido automaticamente.
4. Aplicar política aprovada de reimportação e retenção; confirmar seleção no estoque sem pontos e sem cashback.

**Dados e entrega esperada:** Origem da importação e seleção confirmada; armazenar somente os dados necessários definidos pela política. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-004](#ade-004), [ADE-005](#ade-005), [ADE-007](#ade-007). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-004, PD-005, PD-022. Tipos/fontes, repetição e retenção dependem de PD-004/PD-005/PD-022; pesquisa técnica deve entregar prova de consulta e limites documentados. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** nota suportada com itens identificáveis, **quando** é importada, **então** o morador revisa e seleciona os resíduos antes de registrar.
- **Dado** uma Coca-Cola PET e uma lata sem identificação completa, **quando** a nota é processada, **então** o morador pode confirmar materiais manualmente.
- **Dado** a mesma nota novamente, **quando** a importação é tentada, **então** o comportamento segue PD-005 e não gera inclusão involuntária ou pontos.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-009"></a>

### ADE-009 — Adequar pontos compatíveis, detalhes e retorno da navegação

**Perfil/jornada:** Morador. **Tipo:** Ajustar e homologar navegação. **Prioridade:** P0. **Etapa:** E2.

**Referências:** RF-MVP-015, RF-MVP-016, RF-MVP-017, RNF-MVP-004, RN-007.

**Tasks originais:** TSK-MOR-011, TSK-MOR-012, TSK-MOR-013, TSK-TRA-005.

**Evidência:** AUD-007, AUD-014 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero escolher um ponto compatível e navegar até ele para entregar os resíduos corretamente.

**Valor e relevância / prioridade:** Evita deslocamento a um destino que não recebe o material selecionado.

**Situação encontrada:** Mapa e abertura externa existem; unidades, disponibilidade e contrato residual de proximidade precisam ser reconciliados.

**Base a reaproveitar:** Leaflet, dados dos pontos e encaminhamento ao mapa externo.

**Onde começar no código:** Frontend: MapPage.jsx e src/services/maps/index.js. Backend: pontos e disponibilidade.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Filtrar destinos por materiais selecionados e apresentar endereço, materiais, horário e disponibilidade reais.
2. Corrigir unidade de capacidade e representação de ponto temporário/inativo conforme decisões.
3. Abrir navegação para coordenadas válidas e preservar ponto/itens ao retornar à plataforma.
4. Tratar ausência de GPS, falha de busca, seleção mista e geocodificação inválida sem indicar destino fictício.

**Dados e entrega esperada:** Seleção identificada do destino e itens; dados de disponibilidade coerentes com o ponto. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-004](#ade-004), [ADE-005](#ade-005), [ADE-013](#ade-013). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-007, PD-009. Busca sem GPS, materiais mistos, cheio/fora do horário e mapa dependem de PD-007/PD-009; não importar restrições históricas como decisões. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** itens PET selecionados, **quando** pontos são consultados, **então** a compatibilidade exibida usa o catálogo comum.
- **Dado** um destino válido, **quando** navegação externa é aberta e o morador retorna, **então** a seleção permanece conforme política aprovada.
- **Dado** geocodificação inválida, **quando** o sistema recebe resultado ausente, **então** não usa 0,0 como destino real.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-010"></a>

### ADE-010 — Revalidar GPS no momento de confirmar a entrega

**Perfil/jornada:** Morador. **Tipo:** Retrabalhar. **Prioridade:** P0. **Etapa:** E2.

**Referências:** RF-MVP-018, RNF-MVP-004, RN-006.

**Tasks originais:** TSK-MOR-014, TSK-TRA-005.

**Evidência:** AUD-009 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero validar a chegada ao ponto para confirmar a entrega conforme a regra do MVP.

**Valor e relevância / prioridade:** Evita concluir usando localização antiga ou condição inválida.

**Situação encontrada:** A distância é verificada, mas precisão e idade não entram no aceite; o cliente pode reutilizar posição anterior ao trajeto.

**Base a reaproveitar:** Captura de localização e cálculo de distância existentes.

**Onde começar no código:** Frontend: ValidacaoPresencaPage.jsx. Backend: localizacao_service.py e schemas do lote.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Solicitar posição atual ao confirmar e enviar informação suficiente para verificar distância, precisão e idade conforme política aprovada.
2. Aplicar os critérios também no backend e manter parâmetros configuráveis, sem adotar o raio histórico de 1000 m por padrão de negócio.
3. Tratar permissão negada, timeout e sinal insuficiente com orientação/repetição permitida; não confirmar por falha de serviço.
4. Registrar resultado da validação vinculado à operação sem alegar prova absoluta de presença nem exigir QR.

**Dados e entrega esperada:** Resultado de validação, instante e dados mínimos de localização definidos pela política de privacidade. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-009](#ade-009). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-008. Raio, precisão, idade, tentativas e timeout bloqueados por PD-008; implementação do contrato e cenários parametrizados pode avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** posição que atende aos parâmetros aprovados, **quando** a entrega é confirmada, **então** a validação autoriza a etapa de conclusão.
- **Dado** posição antiga ou precisão insuficiente, **quando** há tentativa, **então** não há baixa nem crédito e o usuário recebe orientação.
- **Dado** permissão de GPS negada, **quando** tenta confirmar, **então** o sistema informa a impossibilidade sem concluir silenciosamente.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-011"></a>

### ADE-011 — Corrigir descarte, estoques e crédito único de 10 pontos

**Perfil/jornada:** Morador → ponto. **Tipo:** Retrabalhar prioritariamente. **Prioridade:** P0. **Etapa:** E2.

**Referências:** RF-MVP-019, RF-MVP-021, RNF-MVP-003, RNF-MVP-008, RN-007, RN-008, RN-010, RN-016.

**Tasks originais:** TSK-MOR-015, TSK-MOR-017, TSK-TRA-004, TSK-TRA-009.

**Evidência:** AUD-001, AUD-002 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero concluir um descarte com estoques e recompensa corretos para confiar no saldo apresentado.

**Valor e relevância / prioridade:** Corrige o defeito central reproduzido e protege a rede contra saldos duplicados.

**Situação encontrada:** Enviar três unidades baixa estoque e credita 30; a confirmação posterior baixa/credita de novo. Estado do descarte e estoque do ponto ficam inconsistentes.

**Base a reaproveitar:** Lote, chave única de idempotência, bloqueios e persistência de descarte.

**Onde começar no código:** Backend: app/routes/inventario_usuario.py, app/routes/descarte.py e pontuacao_service.py.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Definir uma operação de entrega com resultado consistente: validações, baixa pessoal, entrada no ponto, conclusão e crédito básico vinculado.
2. Substituir 10 × quantidade por 10 pontos por operação concluída. Registro, seleção, pesagem e conferência posterior não creditam novamente.
3. Garantir atomicidade, repetição segura e proteção concorrente; falha parcial não deixa saldo, ponto e recompensa divergentes.
4. Adequar rotas antigas/consumidores para usar a mesma regra; nenhuma segunda confirmação pode repetir efeitos. Separar eventual bônus.
5. Investigar duplicidades históricas e propor reconciliação aprovada; correção de código não autoriza recalcular dados reais automaticamente.

**Dados e entrega esperada:** Operação única, movimentos de estoque e lançamento básico ligado à origem; evidências do resultado e da repetição. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-004](#ade-004), [ADE-005](#ade-005), [ADE-009](#ade-009), [ADE-010](#ade-010). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-006, PD-010. Rascunho rápido está definido pela decisão de 10/10/2026; contratos reais de ajuste/exclusão e concorrência continuam em PD-006. Prevenção de fracionamento/ajustes históricos depende de PD-010; regra básica de 10 e correção de duplo efeito estão definidas. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** estoque inicial 10 e entrega validada de três unidades, **quando** a operação conclui, **então** o estoque pessoal fica 7, o ponto recebe três e são creditados 10 pontos uma vez.
- **Dado** a mesma operação reenviada ou conferida depois, **quando** é processada, **então** não há nova baixa, entrada ou crédito.
- **Dado** falha no processamento ou duas solicitações disputando o mesmo saldo, **quando** a transação é verificada, **então** não há saldo negativo nem resultado parcial persistido.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-012"></a>

### ADE-012 — Alinhar confirmação, histórico e extrato ao resultado persistido

**Perfil/jornada:** Morador. **Tipo:** Ajustar. **Prioridade:** P1. **Etapa:** E2.

**Referências:** RF-MVP-020, RF-MVP-023, RNF-MVP-008.

**Tasks originais:** TSK-MOR-016, TSK-MOR-019, TSK-TRA-009.

**Evidência:** AUD-002, AUD-013 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero entender o resultado e meus pontos para saber o que foi confirmado e utilizado.

**Valor e relevância / prioridade:** Evita comunicação enganosa e permite conferir a operação.

**Situação encontrada:** Tela celebra descarte ainda pendente, resumo está comentado e lançamentos de pontos não têm correlação integral com a origem.

**Base a reaproveitar:** Tela de conclusão, histórico, saldo e extrato existentes.

**Onde começar no código:** Frontend: TransferenciaConcluidaPage.jsx e extrato. Backend: pontuacao.py e extrato_pontos_service.py.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Exibir sucesso somente a partir do resultado real; mostrar ponto, itens, estado e recompensa básica de 10 separados de bônus.
2. Manter ações de retorno à Home e Loja, sem esconder pendência ou falha como sucesso.
3. Vincular créditos e débitos a eventos; alinhar extrato ao saldo e impedir consultas a dados de outro morador.
4. Apresentar pendências/ajustes históricos com tratamento definido, sem fabricar origem para registros antigos.

**Dados e entrega esperada:** Histórico consultável e extrato com origem/tipo/data/valor coerentes com movimentos persistidos. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-011](#ade-011). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-010. Validade, estornos e política de ajuste dependem de PD-010; confirmação real e correlação das novas operações podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um descarte concluído, **quando** o resumo é aberto, **então** exibe os dados persistidos e distingue crédito básico de bônus.
- **Dado** uma operação pendente ou falha, **quando** a tela é apresentada, **então** não afirma que a recompensa foi concluída.
- **Dado** lançamentos conhecidos de crédito/débito, **quando** o extrato é consultado, **então** o saldo corresponde aos efeitos registrados e não expõe dados alheios.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

## 5. Pontos e operação da cooperativa

<a id="ade-013"></a>

### ADE-013 — Adequar gestão de pontos fixos, temporários e materiais aceitos

**Perfil/jornada:** Administrador e responsável pelo ponto. **Tipo:** Ajustar e completar. **Prioridade:** P1. **Etapa:** E2.

**Referências:** RF-MVP-031, RF-MVP-032, RF-MVP-033, RF-MVP-034, RNF-MVP-002, RN-003, RN-011, RN-021.

**Tasks originais:** TSK-ADM-005, TSK-ADM-006, TSK-ADM-007, TSK-PON-001.

**Evidência:** AUD-008 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como administrador e responsável, quero manter pontos corretamente configurados para orientar recebimento e operação.

**Valor e relevância / prioridade:** Sustenta seleção de destino e responsabilização operacional.

**Situação encontrada:** CRUD, horários e data final existem; ingresso público/vínculo inadequado permanecem e contexto/tags não está modelado.

**Base a reaproveitar:** CRUD administrativo, endereço, horários, data final e status do ponto.

**Onde começar no código:** Frontend: AdminPointsPage.jsx. Backend: ponto_coleta.py, ponto_coleta_service.py e modelo do ponto.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Concentrar criação e gestão cadastral no administrador; adaptar a exposição do ingresso público conforme plano de contas legadas.
2. Completar configuração de ponto fixo/temporário, contexto e horários aprovados, preservando histórico no encerramento.
3. Permitir administrador e responsável vinculado editar materiais aceitos, com o catálogo PET/lata e permissões no serviço.
4. Distinguir materiais aceitos de estoque já recebido; edição não pode apagar saldo e temporário encerrado exige tratamento de remanescentes.

**Dados e entrega esperada:** Ponto, contexto, período, horários, vínculo e materiais aceitos, com trilha de alterações. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-004](#ade-004). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-003, PD-009, PD-023. Campos, tags, horários, encerramento e saldo remanescente dependem de PD-003/PD-009/PD-023. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** um responsável autorizado, **quando** altera materiais de seu ponto, **então** a configuração muda sem apagar resíduos recebidos.
- **Dado** um ponto temporário encerrado, **quando** é consultado, **então** a disponibilidade segue a regra aprovada e o histórico é preservado.
- **Dado** um usuário sem vínculo, **quando** tenta editar o ponto, **então** a API nega sem alteração.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-014"></a>

### ADE-014 — Corrigir ocupação, lotação e avisos do ponto

**Perfil/jornada:** Responsável pelo ponto e administrador. **Tipo:** Retrabalhar cálculos e completar visibilidade. **Prioridade:** P1. **Etapa:** E4.

**Referências:** RF-MVP-035, RF-MVP-036, RNF-MVP-003, RNF-MVP-008, RN-013, RN-015, RN-021.

**Tasks originais:** TSK-PON-002, TSK-PON-003.

**Evidência:** AUD-004, AUD-007, AUD-013 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como responsável, quero enxergar a ocupação para pedir coleta no momento adequado.

**Valor e relevância / prioridade:** Evita lotação invisível e solicitações baseadas em números incorretos.

**Situação encontrada:** Dashboard e alertas existem, mas capacidade/estoque misturam unidades e pesos; saldos podem ter sido afetados pelos defeitos de descarte/retirada.

**Base a reaproveitar:** Painel, capacidade, status e notificações existentes.

**Onde começar no código:** Frontend: dashboard do ponto. Backend: dashboard_ponto_coleta_service.py e notificacao_service.py.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Calcular ocupação usando unidade e regra aprovadas, exibindo material e base de cálculo.
2. Mostrar estoque e sinal de lotação ao responsável e administrador, com limiares definidos.
3. Separar aviso de necessidade de coleta de pedido, atribuição e conclusão; um alerta não agenda automaticamente a cooperativa.
4. Conferir origem dos saldos e tratar inconsistências históricas via plano de reconciliação, não por zeragem.

**Dados e entrega esperada:** Ocupação verificável, material, base/capacidade e evento de aviso com destinatários autorizados. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-004](#ade-004), [ADE-011](#ade-011), [ADE-013](#ade-013), [ADE-017](#ade-017). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-009, PD-018, PD-020, PD-021. Capacidade, conciliação, janela e notificações dependem de PD-009/PD-018/PD-020/PD-021; visão de dados separados pode avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** estoque e capacidade na unidade aprovada, **quando** o painel é consultado, **então** o cálculo pode ser reproduzido sem somar unidades a kg.
- **Dado** lotação atingida, **quando** o aviso é emitido, **então** responsável e administrador autorizados o visualizam sem criação automática de atribuição.
- **Dado** divergência histórica conhecida, **quando** o saldo é revisado, **então** a correção segue política aprovada e mantém rastreabilidade.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-015"></a>

### ADE-015 — Integrar pedido do ponto, agendamento administrativo e aceite

**Perfil/jornada:** Ponto → administrador → cooperativa. **Tipo:** Construir pedido e completar operação existente. **Prioridade:** P1. **Etapa:** E4.

**Referências:** RF-MVP-037, RF-MVP-038, RF-MVP-039, RF-MVP-040, RF-MVP-042, RNF-MVP-002, RNF-MVP-003, RNF-MVP-008, RN-011, RN-012, RN-013.

**Tasks originais:** TSK-PON-004, TSK-ADM-008, TSK-ADM-009, TSK-COO-001, TSK-COO-003.

**Evidência:** AUD-003, AUD-008 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como participantes da operação, queremos coordenar solicitação, aceite e coleta para saber quem irá ao ponto e quando.

**Valor e relevância / prioridade:** Entrega a comunicação operacional solicitada sem criar chamados paralelos.

**Situação encontrada:** Admin solicita e cooperativa aceita por atribuição no backend; falta pedido do responsável, interface completa e vínculo entre agenda e solicitação. Cadastro da cooperativa não usa CNPJ no fluxo ativo.

**Base a reaproveitar:** Solicitação administrativa, aceite, timestamps e modelos de agenda/cooperativa, após reconciliação do modelo ativo.

**Onde começar no código:** Backend: admin.py, cooperativa.py, agenda.py e SolicitacaoColeta. Frontend: painel operacional e serviços existentes.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Adequar cadastro administrativo da cooperativa com CNPJ e operadores, reconciliando entidade histórica com usuários ativos.
2. Construir pedido do responsável ao administrador e acompanhamento; impedir repetição involuntária conforme política.
3. Integrar pedido, ponto, cooperativa atribuída e horário em uma operação rastreável; evitar agenda independente sem referência.
4. Completar interfaces de consulta/aceite e acompanhamento dos perfis autorizados.
5. Formalizar transições e exceções aprovadas (recusa, silêncio, cancelamento, reagendamento e parcial); não tratar aceite como retirada concluída.

**Dados e entrega esperada:** Organização e operadores, pedido, atribuição, agendamento, transições e instantes relacionados. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-013](#ade-013). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-003, PD-014, PD-016, PD-021, PD-023. Campos/vínculos e transições excepcionais dependem de PD-003/PD-014/PD-023. Pedido, atribuição e aceite confirmados podem ser preparados com estados explicitamente aprovados. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** responsável de um ponto, **quando** envia um pedido, **então** o administrador autorizado o recebe e pode acompanhá-lo.
- **Dado** solicitação atribuída, **quando** a cooperativa correta aceita, **então** o aceite e horário ficam ligados à mesma operação; outra cooperativa não pode aceitá-la.
- **Dado** reenvio de aceite ou transição inválida, **quando** processado, **então** não cria outra coleta nem avança indevidamente o estado.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-016"></a>

### ADE-016 — Construir painel de rota e horário da cooperativa

**Perfil/jornada:** Cooperativa. **Tipo:** Construir. **Prioridade:** P1. **Etapa:** E4.

**Referências:** RF-MVP-041, RF-MVP-042, RNF-MVP-004, RNF-MVP-009, RN-014.

**Tasks originais:** TSK-COO-002, TSK-COO-003, TSK-TRA-005, TSK-TRA-010.

**Evidência:** matriz e limites do diagnóstico; capacidade ainda precisa de verificação/integração.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como cooperativa, quero receber destino e horário pela plataforma para executar a coleta agendada.

**Valor e relevância / prioridade:** Reduz digitação e mantém planejamento alinhado ao chamado.

**Situação encontrada:** Mapas do morador existem, mas rota/ETA da cooperativa não está integrada à solicitação.

**Base a reaproveitar:** Dados do ponto, agenda integrada e componentes de mapa compatíveis.

**Onde começar no código:** Painel da cooperativa e serviço de mapa aprovado; rota operacional integrada a construir.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Exibir destino, horário agendado e contexto da coleta atribuída no painel da cooperativa.
2. Integrar serviço de mapa aprovado para rota planejada, distinguindo horário agendado, estimativa e horário real.
3. Permitir navegação conforme decisão e manter vínculo com a operação ao retornar.
4. Tratar falha do provedor sem preencher rota fictícia nem exigir que cooperativa cadastre manualmente o trajeto previsto.

**Dados e entrega esperada:** Referência de rota/destino e agendamento; dados reais somente quando obtidos por mecanismo aprovado. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-015](#ade-015). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-014, PD-017. Origem, serviço Google, ETA, navegação e acompanhamento contínuo dependem de PD-017; início de execução depende de PD-014. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** coleta atribuída, **quando** a cooperativa abre o painel, **então** vê ponto e horário ligados à solicitação correta.
- **Dado** rota estimada, **quando** é exibida, **então** não é apresentada como trajeto/horário real realizado.
- **Dado** provedor indisponível, **quando** consulta a rota, **então** recebe estado de falha sem perder o agendamento ou concluir a coleta.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-017"></a>

### ADE-017 — Corrigir pesagem e retirada sem apagar novas entradas

**Perfil/jornada:** Cooperativa → ponto. **Tipo:** Retrabalhar prioritariamente. **Prioridade:** P0. **Etapa:** E4.

**Referências:** RF-MVP-035, RF-MVP-043, RNF-MVP-003, RNF-MVP-008, RN-003, RN-014, RN-015, RN-016, RN-021.

**Tasks originais:** TSK-COO-004, TSK-PON-002, TSK-TRA-004, TSK-TRA-009.

**Evidência:** AUD-004, AUD-005, AUD-007 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como cooperativa, quero informar os materiais e pesos retirados para registrar a coleta com estoque correto.

**Valor e relevância / prioridade:** Evita perda de materiais no sistema e oferece base confiável para análise/pagamento.

**Situação encontrada:** Pesos negativos são aceitos e a conclusão remove todas as chaves do snapshot, inclusive entradas recebidas após a solicitação.

**Base a reaproveitar:** Registro de pesos por material, timestamps e conclusão de solicitação.

**Onde começar no código:** Backend: app/routes/cooperativa.py e app/schemas/solicitacao_coleta.py. Frontend: formulário de retirada.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Validar material autorizado e rejeitar peso negativo no contrato e serviço; definir zero, precisão e ausência conforme decisão.
2. Substituir remoção integral por conciliação aprovada entre retirada e saldo, preservando novas entradas e remanescentes.
3. Vincular registro à operação e ao operador real; revisar caminho avulso que representa cooperativa como administrador.
4. Proteger repetição e concorrência da conclusão; pesagem não concede novos pontos ao morador.
5. Separar conclusão operacional de pagamento, guardando informações para a administração sem marcar pago automaticamente.

**Dados e entrega esperada:** Materiais/pesos, operador, operação, instantes e movimento de retirada explicável sem conversão implícita. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-004](#ade-004), [ADE-015](#ade-015). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-009, PD-014, PD-018. Conciliação, coleta parcial, zero/correção/precisão dependem de PD-009/PD-014/PD-018. Rejeição de negativos e proteção do registro podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** peso negativo ou material incompatível, **quando** o formulário é enviado, **então** o serviço rejeita sem concluir ou modificar estoque.
- **Dado** solicitação com 10 unidades e estoque que depois recebe mais cinco, **quando** a retirada é registrada, **então** as novas entradas não desaparecem por remoção da chave; saldo segue conciliação aprovada.
- **Dado** uma coleta já registrada, **quando** há reenvio ou pagamento posterior, **então** não há segunda retirada nem novo crédito ao morador.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

## 6. Loja, pagamentos, planos e indicadores

<a id="ade-018"></a>

### ADE-018 — Construir pagamento administrativo da coleta por API

**Perfil/jornada:** Administrador e cooperativa. **Tipo:** Construir após definições financeiras. **Prioridade:** P1. **Etapa:** E5.

**Referências:** RF-MVP-044, RF-MVP-045, RF-MVP-046, RNF-MVP-003, RNF-MVP-008, RNF-MVP-009, RN-017, RN-018.

**Tasks originais:** TSK-ADM-010, TSK-ADM-011, TSK-ADM-012, TSK-TRA-004, TSK-TRA-010.

**Evidência:** matriz RF-MVP-044 a RF-MVP-046 e limites do diagnóstico; integração financeira a construir.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como administrador, quero pagar a cooperativa pela plataforma para remunerar a coleta e acompanhar sua confirmação.

**Valor e relevância / prioridade:** Entrega remuneração controlada e evita pagamento duplicado ou declaração prematura.

**Situação encontrada:** Não foram localizados ordem financeira, integração de pagamento ou confirmação vinculada à coleta.

**Base a reaproveitar:** Operação de coleta, autorização administrativa e auditoria.

**Onde começar no código:** Nova ordem financeira e adaptador do provedor, ligados ao modelo operacional da coleta.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Definir com idealizador/financeiro valor, recebedor, condições autorizadoras e provedor; não calcular valor por kg por suposição.
2. Construir preparação e autorização administrativa da ordem ligada à coleta, distinguindo valor previsto, envio e confirmação.
3. Integrar API com identificação idempotente, autenticação, confirmação validada e conciliação em ambiente de avaliação do provedor.
4. Mostrar situação financeira ao administrador e cooperativa; tratar timeout como situação a consultar, não como autorização automática de novo pagamento.

**Dados e entrega esperada:** Ordem, coleta, valor, recebedor, autorização, identificador do provedor e eventos financeiros separados dos operacionais. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-015](#ade-015), [ADE-017](#ade-017), [ADE-025](#ade-025). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-015, PD-016. Fluxo financeiro real bloqueado por PD-015/PD-016. Pode avançar levantamento técnico e contrato de estados identificado como proposta, com entrega de viabilidade/integração de avaliação. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** uma ordem autorizada conforme decisão, **quando** enviada, **então** é vinculada à coleta sem alterar sua conclusão operacional.
- **Dado** callback válido de confirmação, **quando** processado, **então** o pagamento é atualizado uma vez; callback inválido não altera dados.
- **Dado** timeout ou reenvio, **quando** a situação é consultada/reconciliada, **então** não surge pagamento duplicado e a cooperativa vê o estado real.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-019"></a>

### ADE-019 — Adequar campanhas, metas e bônus separados

**Perfil/jornada:** Administrador e morador. **Tipo:** Retrabalhar e construir apuração. **Prioridade:** P1. **Etapa:** E5.

**Referências:** RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028, RNF-MVP-003, RNF-MVP-008, RN-009, RN-019.

**Tasks originais:** TSK-MOR-018, TSK-MOR-020, TSK-MOR-023, TSK-MOR-024.

**Evidência:** AUD-010 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero entender e acompanhar campanhas para cumprir condições e receber benefícios corretamente.

**Valor e relevância / prioridade:** Alinha a Loja à ideia e impede recompensa por mera inscrição sem regra aprovada.

**Situação encontrada:** CRUD e inscrição existem, mas adesão credita bônus imediatamente e não há meta/progresso por descarte elegível.

**Base a reaproveitar:** Gestão, consulta de campanha e inscrição existentes.

**Onde começar no código:** Frontend: NovaCampanhaPage.jsx e CampanhaDetalhesPage.jsx. Backend: campanha.py e modelo de campanha.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Adequar cadastro/detalhes com título, descrição, período, condições, meta e benefício aprovados, além de mídia via ADE-021.
2. Separar adesão, progresso e recompensa; apurar apenas eventos elegíveis com origem demonstrável.
3. Creditar bônus em lançamento separado do crédito básico; reprocessamento não duplica recompensa.
4. Manter conclusão do descarte independente de indisponibilidade da apuração de campanha, com tratamento rastreável definido.

**Dados e entrega esperada:** Regra de campanha, adesão, eventos elegíveis, progresso e lançamento de bônus relacionado. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-011](#ade-011), [ADE-012](#ade-012), [ADE-021](#ade-021). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-011, PD-021. Elegibilidade, comprovação, valores extras, acúmulo e alteração dependem de PD-011; notificação externa depende de PD-021. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** uma adesão, **quando** o morador participa, **então** não recebe automaticamente bônus de descarte por inferência.
- **Dado** evento elegível conforme campanha aprovada, **quando** a meta é apurada, **então** progresso/benefício seguem a regra e o crédito básico continua separado.
- **Dado** evento já apurado, **quando** reprocessado, **então** não duplica progresso ou recompensa.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-020"></a>

### ADE-020 — Adequar Loja, vouchers e sorteios com débito protegido

**Perfil/jornada:** Administrador e morador. **Tipo:** Ajustar e homologar catálogo existente. **Prioridade:** P0. **Etapa:** E5.

**Referências:** RF-MVP-025, RF-MVP-026, RF-MVP-029, RF-MVP-030, RNF-MVP-003, RN-010, RN-019.

**Tasks originais:** TSK-MOR-021, TSK-MOR-022, TSK-MOR-025, TSK-MOR-026, TSK-TRA-004.

**Evidência:** AUD-011 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como morador, quero usar meus pontos na Loja para adquirir benefícios sem saldo ou aquisição inconsistentes.

**Valor e relevância / prioridade:** Protege pontos e oferta; prioridade P0 de integridade não antecipa comércio antes da jornada principal.

**Situação encontrada:** Loja, vouchers e sorteios existem; bloqueios de ofertas não protegem uniformemente o saldo e regras de chance/uso são legadas.

**Base a reaproveitar:** Catálogo, CRUD, aquisição/resgate, bilhetes e consultas.

**Onde começar no código:** Frontend: LojaPage.jsx e AdminSorteiosPage.jsx. Backend: voucher.py, sorteio.py e pontuacao.py.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Preservar catálogo e completar estados/condições da oferta conforme regras aprovadas.
2. Implementar débito atômico comum, vinculado à aquisição, com idempotência entre ofertas distintas.
3. Adequar voucher (custo, estoque, validade, emissão/uso) e sorteio (participação, custo/chances, apuração/resultado) conforme decisões.
4. Testar compras simultâneas no PostgreSQL e rejeitar saldo insuficiente sem criar benefício ou débito parcial.

**Dados e entrega esperada:** Aquisição identificada, débito, benefício/bilhete e situação de uso/resultado conforme regra aprovada. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-012](#ade-012), [ADE-021](#ade-021). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-012, PD-013, PD-021. Regras comerciais e realização de sorteios dependem de PD-012/PD-013; notificações externas de PD-021. Não impor uma chance por sorteio por copiar o legado. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** saldo suficiente e oferta válida, **quando** a aquisição conclui, **então** débito e benefício são persistidos juntos e ligados à mesma operação.
- **Dado** duas compras em ofertas diferentes que excedem o saldo, **quando** concorrem, **então** o saldo não fica negativo e somente aquisições cobertas concluem.
- **Dado** reenvio da aquisição ou oferta indisponível, **quando** processado, **então** não duplica débito/benefício nem mantém efeito parcial.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-021"></a>

### ADE-021 — Construir imagens e vídeos das ofertas com publicação controlada

**Perfil/jornada:** Administrador → Loja. **Tipo:** Construir. **Prioridade:** P1. **Etapa:** E5.

**Referências:** RF-MVP-053, RNF-MVP-010.

**Tasks originais:** TSK-ADM-017, TSK-TRA-011.

**Evidência:** matriz e limites do diagnóstico; capacidade ainda precisa de verificação/integração.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como administrador, quero apresentar ofertas com imagem e vídeo para explicar campanhas claramente.

**Valor e relevância / prioridade:** Completa a comunicação da Loja sem depender apenas de logo.

**Situação encontrada:** Existe URL de logo, mas não gestão completa de imagem/vídeo de campanhas e ofertas.

**Base a reaproveitar:** Formulários administrativos e apresentação de ofertas.

**Onde começar no código:** Novo serviço de mídia e formulários da Loja; URL de logo é base parcial.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Definir formatos, limites, arquivo/link e armazenamento conforme PD-024.
2. Construir envio/associação e validação no serviço; restringir publicação ao administrador autorizado.
3. Exibir imagem/vídeo com estados de processamento/falha e condições da oferta sempre acessíveis em texto.
4. Tratar arquivos inválidos, troca e remoção sem deixar referência quebrada ou publicar mídia não autorizada.

**Dados e entrega esperada:** Mídia, oferta, autor, situação de publicação e referência segura de armazenamento. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-025](#ade-025). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-021, PD-024. Política de mídia bloqueada por PD-024; notificação de publicação quando aplicável depende de PD-021. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** mídia suportada e administrador autorizado, **quando** é publicada, **então** aparece na oferta correta com texto das condições.
- **Dado** arquivo fora da política ou usuário sem autorização, **quando** tenta publicar, **então** o serviço rejeita e a mídia não fica disponível.
- **Dado** falha de carregamento de vídeo, **quando** a oferta é aberta, **então** seu conteúdo textual permanece acessível.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-022"></a>

### ADE-022 — Construir planos e aplicar acesso comercial a relatórios

**Perfil/jornada:** Administrador, responsável e usuários autorizados. **Tipo:** Construir planos e ajustar consultas. **Prioridade:** P1. **Etapa:** E5.

**Referências:** RF-MVP-049, RF-MVP-050, RF-MVP-051, RF-MVP-052, RNF-MVP-002, RNF-MVP-005, RNF-MVP-009, RN-020.

**Tasks originais:** TSK-PON-005, TSK-ADM-015, TSK-ADM-016, TSK-TRA-001.

**Evidência:** matriz RF-MVP-049 a RF-MVP-052 e limites do diagnóstico; planos e autorização comercial a construir.
**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como usuário autorizado, quero acessar os dados incluídos no meu plano para consultar relatórios dentro do escopo contratado.

**Valor e relevância / prioridade:** Entrega modelo de dados comercial sem vender acesso fora da abrangência permitida.

**Situação encontrada:** Há CSV e relatórios operacionais, mas sem catálogo, contratação, vigência ou autorização combinada de plano e vínculo.

**Base a reaproveitar:** Consultas, exportações e RBAC corrigido.

**Onde começar no código:** Backend: acesso, planos/vigência e exportações em admin.py. Frontend: PontoColetaReportsPage.jsx e gestão de planos.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Definir titular, matriz grátis/pré-pago/mensal, benefícios, contratação e vigência com o idealizador/comercial.
2. Construir representação do plano e acesso vigente; não reutilizar pagamento de coleta como se fosse contratação de plano.
3. Aplicar perfil + vínculo + benefício em consultas e exportações no serviço, inclusive para administrador quando a regra comercial o exigir.
4. Preservar acesso operacional mínimo aprovado e proteger dados identificáveis; expiração não concede acesso por interface/cache.

**Dados e entrega esperada:** Plano, titular, vigência, benefícios e autorizações de consulta/exportação rastreáveis. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-001](#ade-001), [ADE-023](#ade-023), [ADE-025](#ade-025). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-019, PD-022, PD-023. Preço/pacote, cobrança, renovação, vigência e mínimo operacional dependem de PD-019; dados/abrangência dependem de PD-022/PD-023. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** perfil, vínculo e plano que autorizam um relatório, **quando** consultado, **então** somente os dados abrangidos são retornados.
- **Dado** plano sem benefício ou expirado, **quando** tenta exportar diretamente pela API, **então** a política comercial aprovada é aplicada.
- **Dado** um plano pago, **quando** solicita dados de outra organização sem vínculo, **então** pagamento não amplia a autorização operacional.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-023"></a>

### ADE-023 — Revisar painel administrativo, gráficos e significado dos indicadores

**Perfil/jornada:** Administrador e responsável. **Tipo:** Ajustar e homologar base. **Prioridade:** P1. **Etapa:** E4/E5.

**Referências:** RF-MVP-047, RF-MVP-048, RF-MVP-049, RNF-MVP-008, RN-020.

**Tasks originais:** TSK-ADM-013, TSK-ADM-014, TSK-PON-005.

**Evidência:** AUD-013 no diagnóstico.

**Responsabilidade sugerida:** produto/design, frontend, backend e QA; operação técnica em integrações/migrações.

**História:** como administrador, quero acompanhar indicadores confiáveis para coordenar a rede e tomar decisões.

**Valor e relevância / prioridade:** Evita decisões baseadas em soma de grandezas distintas e eventos não concluídos.

**Situação encontrada:** Admin e gráficos existem; agregações incluem pendências e misturam contagem com peso, e ativo/conectado/aberto não têm definição final.

**Base a reaproveitar:** Shell administrativo, gráficos, métricas e consultas existentes.

**Onde começar no código:** Frontend: AdminPage.jsx e collectionPointDashboard. Backend: métricas/relatórios em admin.py.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Preservar painel e integrar controles entregues pelas demais tasks, sem reimplementar cadastros em paralelo.
2. Definir evento, unidade, janela e abrangência de cada indicador; separar descarte, retirada, solicitação e pagamento.
3. Exibir contagem de usuários/pontos/cooperativas conforme definições aprovadas de ativo, aberto e conectado.
4. Corrigir consultas e relatórios para usar conclusão real; não apresentar material recebido/coletado como prova de reciclagem final ou comprado sem evento correspondente.

**Dados e entrega esperada:** Dicionário de métricas, consultas rastreáveis e conjuntos de avaliação com valores esperados. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-011](#ade-011), [ADE-014](#ade-014), [ADE-015](#ade-015), [ADE-017](#ade-017). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-019, PD-020, PD-021. Definições de métricas dependem de PD-020, acesso comercial de PD-019 e notificações de PD-021; separação de dados pode avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** uma solicitação não concluída, **quando** o gráfico de coletas concluídas é aberto, **então** ela não é contada como retirada realizada.
- **Dado** contagens e pesos conhecidos, **quando** o relatório é calculado, **então** cada grandeza mantém unidade e resultado verificável.
- **Dado** a definição aprovada de ativo/conectado, **quando** um indicador é exibido, **então** sua janela e regra podem ser conferidas pela equipe.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

## 7. Qualidade e condições de reativação

<a id="ade-024"></a>

### ADE-024 — Reconciliar testes e tornar verificações de entrega obrigatórias

**Perfil/jornada:** Transversal. **Tipo:** Retrabalhar e ampliar verificação. **Prioridade:** P0. **Etapa:** Todas.

**Referências:** RNF-MVP-003, RNF-MVP-011.

**Tasks originais:** TSK-TRA-004, TSK-TRA-012.

**Evidência:** AUD-016 no diagnóstico.

**Responsabilidade sugerida:** backend, frontend, QA e operação técnica; produto valida políticas/metas aplicáveis.

**História:** como equipe, quero verificar comportamentos atuais para entregar adequações sem reintroduzir defeitos.

**Valor e relevância / prioridade:** Distingue código compilado de jornada validada.

**Situação encontrada:** Suite existente tem 8 aprovações e 9 falhas; parte das expectativas é legada. CI frontend ignora falha de formatação; testes frontend/workflow backend não foram localizados.

**Base a reaproveitar:** Testes existentes, build e workflow frontend.

**Onde começar no código:** Backend: tests/test_transferencia_lote.py e test_identificacao_residuo.py. Frontend: .github/workflows/ci.yml e package.json.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Associar cada expectativa à V6; conservar regressões úteis e registrar decisão ao alterar exigências herdadas.
2. Adicionar testes de fluxo completo para dupla baixa/crédito, negativa de acesso, convites, retirada com novas entradas e débito concorrente.
3. Executar APIs por HTTP e concorrência no PostgreSQL, além da interface por perfil; testes SQLite diretos não substituem essa validação.
4. Configurar verificações relevantes como obrigatórias no pipeline; revisão, resultado e evidências precisam estar ligados ao commit entregue.

**Dados e entrega esperada:** Mapa teste/regra, execução por ambiente e evidências de regressão anexadas às tasks. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-000](#ade-000). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-025, PD-026. Matriz/volume e infraestrutura dependem de PD-025/PD-026; testes dos defeitos já demonstrados podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** uma alteração que repete baixa/crédito, **quando** os testes de regressão executam, **então** a verificação falha e impede aprovação da entrega.
- **Dado** teste de regra antiga, **quando** a expectativa é alterada, **então** a justificativa e referência à regra atual ficam registradas.
- **Dado** falha de teste obrigatório, **quando** o pipeline termina, **então** a falha não é mascarada como sucesso.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-025"></a>

### ADE-025 — Adequar privacidade, auditoria e proteção das integrações

**Perfil/jornada:** Transversal. **Tipo:** Ajustar e completar. **Prioridade:** P0. **Etapa:** Todas.

**Referências:** RNF-MVP-005, RNF-MVP-008, RNF-MVP-009.

**Tasks originais:** TSK-TRA-006, TSK-TRA-009, TSK-TRA-010.

**Evidência:** AUD-013, AUD-014 e matriz RNF-MVP-005/RNF-MVP-008/RNF-MVP-009 no diagnóstico.
**Responsabilidade sugerida:** backend, frontend, QA e operação técnica; produto valida políticas/metas aplicáveis.

**História:** como equipe responsável, quero rastrear ações e proteger dados para explicar movimentos sem exposição desnecessária.

**Valor e relevância / prioridade:** Permite investigar problemas e sustenta integrações e relatórios.

**Situação encontrada:** Há auditoria e hashing, mas correlação dos lançamentos é incompleta, echo de SQL está habilitado e exportações contêm dados pessoais.

**Base a reaproveitar:** AuditLog, serviços de auditoria, hashing e configuração por ambiente.

**Onde começar no código:** Backend: audit_service.py, lançamentos, database.py e exportações; configuração e adaptadores externos.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Correlacionar operações, estoques, pontos, compras e pagamentos; registrar ator e evento sem possibilidade de alteração operacional indevida.
2. Revisar dados em logs/CSV, segredos, retenção e acesso conforme política; impedir exposição de senha, token ou nota completa sem finalidade definida.
3. Validar contratos externos, autenticação e origem de confirmações, com tratamento de falha/reenvio por módulo.
4. Documentar limites e controles implementados sem declarar conformidade integral somente pela presença de hashing.

**Dados e entrega esperada:** Eventos correlacionados, política de dados aplicada e evidência de filtragem de logs/exportações. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-000](#ade-000), [ADE-001](#ade-001). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-016, PD-022, PD-024, PD-026. Retenção/finalidades dependem de PD-022, provedor de PD-016, mídia de PD-024 e infraestrutura de PD-026; redução de exposição e correlação podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** uma entrega ou compra, **quando** sua auditoria é consultada, **então** ator e origem permitem relacionar os movimentos autorizados.
- **Dado** senha/token em uma requisição, **quando** logs são gerados, **então** o segredo não aparece em texto nos registros disponíveis.
- **Dado** exportação ou confirmação externa sem autorização válida, **quando** processada, **então** não expõe dados nem altera situação financeira.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

<a id="ade-026"></a>

### ADE-026 — Validar dispositivos, desempenho, recuperação e capacidade antes da reativação

**Perfil/jornada:** Transversal. **Tipo:** Verificar e ajustar conforme resultado. **Prioridade:** P1. **Etapa:** Todas / liberação.

**Referências:** RNF-MVP-001, RNF-MVP-006, RNF-MVP-007, RNF-MVP-012.

**Tasks originais:** TSK-TRA-002, TSK-TRA-007, TSK-TRA-008, TSK-TRA-013.

**Evidência:** matriz e limites do diagnóstico; capacidade ainda precisa de verificação/integração.

**Responsabilidade sugerida:** backend, frontend, QA e operação técnica; produto valida políticas/metas aplicáveis.

**História:** como equipe, quero comprovar a operação em condições reais para reativar o MVP com limites conhecidos.

**Valor e relevância / prioridade:** Evita tratar compilação como aprovação operacional.

**Situação encontrada:** Build passou com aviso de bundle; não há evidência de uso real em câmera/GPS, metas de rede/carga ou restauração da infraestrutura.

**Base a reaproveitar:** Layouts responsivos, componentes, Docker e serviços existentes.

**Onde começar no código:** Layouts por perfil, build, banco/consultas e infraestrutura a confirmar.

**Pré-condições:** ambiente de avaliação e usuário autorizado; atender dependências e decisões do trecho antes de aplicar seus efeitos.

**Trabalho a executar / subtarefas:**

1. Aprovar matriz de navegador/dispositivo/rede e metas de volume/tempo; executar jornadas completas com câmera, GPS e retorno do mapa.
2. Medir carregamento e operações críticas; ajustar somente gargalos demonstrados, avaliando divisão de código e consultas quando necessário.
3. Demonstrar backup/restauração em ambiente isolado, permissões e recuperação conforme metas aprovadas.
4. Registrar problemas, limitações e evidências para decisão de reativação; não recomendar reconstrução integral apenas pelo tamanho do bundle.

**Dados e entrega esperada:** Matriz e resultados, medições, exercício de restauração e condições de liberação. Demonstrar comportamento e efeitos persistidos, incluindo ausência de efeitos nos casos negados.

**Dependências:** [ADE-000](#ade-000), [ADE-024](#ade-024), [ADE-025](#ade-025). Referem-se ao trecho integrado; preparação e contratos independentes podem avançar em paralelo.

**Pendências / recorte executável:** PD-025, PD-026. Metas, matriz, RPO/RTO e infraestrutura dependem de PD-025/PD-026; inventário de ambiente e preparação dos ensaios podem avançar. Vincular às TSK-DEC correspondentes; pendência não é regra a implementar.

**Critérios de aceite BDD:**

- **Dado** dispositivos da matriz aprovada, **quando** as jornadas são executadas, **então** câmera, GPS, formulários e retorno da navegação têm resultados registrados.
- **Dado** metas de rede/carga aprovadas, **quando** medidos os cenários, **então** a equipe compara resultados e registra ajustes necessários.
- **Dado** backup do ambiente de avaliação, **quando** restaurado isoladamente, **então** dados e funcionamento são conferidos contra as metas de recuperação.

**Conclusão:** seção 1.1, com interface/API/dados, falhas verificadas e recortes bloqueados. Estes critérios complementam os da V6 e das TSK relacionadas.

## 8. Cobertura de requisitos e tasks originais

A matriz localiza a adequação, sem declarar conclusão. A estratégia preserva a classificação do diagnóstico. Ficha principal coordena a entrega; complementares fornecem contratos e controles. Conferir os critérios completos e o estado da especificação na V6/TSK original.

### 8.1 Todos os 53 RF

| Requisito | Capacidade | Task V1 | Estratégia no diagnóstico | Ficha principal | Complementares |
|---|---|---|---|---|---|
| RF-MVP-001 | Gerenciar convites individuais | TSK-ADM-001 | Construir | [ADE-002](#ade-002) | controles transversais aplicáveis |
| RF-MVP-002 | Gerenciar convites compartilhados | TSK-ADM-002 | Construir | [ADE-002](#ade-002) | controles transversais aplicáveis |
| RF-MVP-003 | Cadastrar morador por convite | TSK-MOR-001 | Ajustar | [ADE-002](#ade-002) | controles transversais aplicáveis |
| RF-MVP-004 | Cadastrar morador pela administração | TSK-ADM-003 | Construir | [ADE-002](#ade-002) | controles transversais aplicáveis |
| RF-MVP-005 | Autenticar e encerrar sessão | TSK-MOR-002 | Ajustar | [ADE-003](#ade-003) | controles transversais aplicáveis |
| RF-MVP-006 | Recuperar acesso | TSK-MOR-003 | Construir | [ADE-003](#ade-003) | controles transversais aplicáveis |
| RF-MVP-007 | Consultar e editar perfil | TSK-MOR-004 | Reaproveitar | [ADE-003](#ade-003) | controles transversais aplicáveis |
| RF-MVP-008 | Administrar acessos e vínculos | TSK-ADM-004 | Ajustar | [ADE-001](#ade-001) | controles transversais aplicáveis |
| RF-MVP-009 | Disponibilizar Registrar e Descarte rápido | TSK-MOR-005 | Ajustar | [ADE-006](#ade-006) | controles transversais aplicáveis |
| RF-MVP-010 | Identificar produto por código de barras | TSK-MOR-006 | Ajustar | [ADE-007](#ade-007) | controles transversais aplicáveis |
| RF-MVP-011 | Importar itens de nota fiscal | TSK-MOR-007 | Construir | [ADE-008](#ade-008) | controles transversais aplicáveis |
| RF-MVP-012 | Cadastrar resíduo manualmente | TSK-MOR-008 | Ajustar | [ADE-005](#ade-005) | [ADE-004](#ade-004) |
| RF-MVP-013 | Revisar itens antes da inclusão | TSK-MOR-009 | Ajustar | [ADE-005](#ade-005) | [ADE-007](#ade-007), [ADE-008](#ade-008) |
| RF-MVP-014 | Manter estoque e selecionar quantidades | TSK-MOR-010 | Ajustar | [ADE-005](#ade-005) | [ADE-006](#ade-006) |
| RF-MVP-015 | Consultar pontos próximos compatíveis | TSK-MOR-011 | Ajustar | [ADE-009](#ade-009) | [ADE-004](#ade-004) |
| RF-MVP-016 | Consultar detalhes do ponto | TSK-MOR-012 | Ajustar | [ADE-009](#ade-009) | controles transversais aplicáveis |
| RF-MVP-017 | Encaminhar morador à navegação externa | TSK-MOR-013 | Reaproveitar | [ADE-009](#ade-009) | [ADE-006](#ade-006) |
| RF-MVP-018 | Validar presença por GPS | TSK-MOR-014 | Ajustar | [ADE-010](#ade-010) | controles transversais aplicáveis |
| RF-MVP-019 | Confirmar entrega e movimentar estoques | TSK-MOR-015 | Ajustar | [ADE-011](#ade-011) | [ADE-006](#ade-006) |
| RF-MVP-020 | Exibir confirmação e histórico de descartes | TSK-MOR-016 | Ajustar | [ADE-012](#ade-012) | controles transversais aplicáveis |
| RF-MVP-021 | Creditar recompensa básica provisória | TSK-MOR-017 | Ajustar | [ADE-011](#ade-011) | controles transversais aplicáveis |
| RF-MVP-022 | Aplicar bônus de campanha | TSK-MOR-018 | Ajustar | [ADE-019](#ade-019) | controles transversais aplicáveis |
| RF-MVP-023 | Consultar saldo e extrato de pontos | TSK-MOR-019 | Ajustar | [ADE-012](#ade-012) | controles transversais aplicáveis |
| RF-MVP-024 | Apurar metas de descarte das campanhas | TSK-MOR-020 | Construir | [ADE-019](#ade-019) | controles transversais aplicáveis |
| RF-MVP-025 | Debitar pontos com consistência | TSK-MOR-021 | Ajustar | [ADE-020](#ade-020) | controles transversais aplicáveis |
| RF-MVP-026 | Consultar a loja de recompensas | TSK-MOR-022 | Reaproveitar | [ADE-020](#ade-020) | controles transversais aplicáveis |
| RF-MVP-027 | Consultar detalhes e condições da campanha | TSK-MOR-023 | Ajustar | [ADE-019](#ade-019) | controles transversais aplicáveis |
| RF-MVP-028 | Administrar e participar de campanhas | TSK-MOR-024 | Ajustar | [ADE-019](#ade-019) | controles transversais aplicáveis |
| RF-MVP-029 | Administrar e adquirir vouchers | TSK-MOR-025 | Ajustar | [ADE-020](#ade-020) | controles transversais aplicáveis |
| RF-MVP-030 | Administrar sorteios e registrar participações | TSK-MOR-026 | Ajustar | [ADE-020](#ade-020) | controles transversais aplicáveis |
| RF-MVP-031 | Cadastrar e administrar pontos de coleta | TSK-ADM-005 | Ajustar | [ADE-013](#ade-013) | controles transversais aplicáveis |
| RF-MVP-032 | Gerir pontos temporários | TSK-ADM-006 | Ajustar | [ADE-013](#ade-013) | controles transversais aplicáveis |
| RF-MVP-033 | Classificar contexto e funcionamento do ponto | TSK-ADM-007 | Ajustar | [ADE-013](#ade-013) | controles transversais aplicáveis |
| RF-MVP-034 | Editar materiais aceitos | TSK-PON-001 | Ajustar | [ADE-013](#ade-013) | controles transversais aplicáveis |
| RF-MVP-035 | Acompanhar estoque e ocupação do ponto | TSK-PON-002 | Ajustar | [ADE-014](#ade-014) | [ADE-004](#ade-004), [ADE-017](#ade-017) |
| RF-MVP-036 | Sinalizar necessidade de coleta | TSK-PON-003 | Ajustar | [ADE-014](#ade-014) | controles transversais aplicáveis |
| RF-MVP-037 | Solicitar coleta ao administrador | TSK-PON-004 | Construir | [ADE-015](#ade-015) | controles transversais aplicáveis |
| RF-MVP-038 | Cadastrar cooperativa e seus acessos | TSK-ADM-008 | Ajustar | [ADE-015](#ade-015) | controles transversais aplicáveis |
| RF-MVP-039 | Solicitar e agendar coleta administrativamente | TSK-ADM-009 | Ajustar | [ADE-015](#ade-015) | controles transversais aplicáveis |
| RF-MVP-040 | Consultar e aceitar solicitação de coleta | TSK-COO-001 | Ajustar | [ADE-015](#ade-015) | controles transversais aplicáveis |
| RF-MVP-041 | Fornecer rota e agendamento no painel | TSK-COO-002 | Construir | [ADE-016](#ade-016) | controles transversais aplicáveis |
| RF-MVP-042 | Acompanhar andamento da coleta | TSK-COO-003 | Ajustar | [ADE-015](#ade-015) | [ADE-016](#ade-016) |
| RF-MVP-043 | Registrar materiais e pesos retirados | TSK-COO-004 | Ajustar | [ADE-017](#ade-017) | [ADE-004](#ade-004) |
| RF-MVP-044 | Preparar informações de pagamento | TSK-ADM-010 | Construir | [ADE-018](#ade-018) | controles transversais aplicáveis |
| RF-MVP-045 | Iniciar pagamento por API | TSK-ADM-011 | Construir | [ADE-018](#ade-018) | controles transversais aplicáveis |
| RF-MVP-046 | Acompanhar confirmação e falhas de pagamento | TSK-ADM-012 | Construir | [ADE-018](#ade-018) | controles transversais aplicáveis |
| RF-MVP-047 | Disponibilizar visão administrativa da operação | TSK-ADM-013 | Reaproveitar | [ADE-023](#ade-023) | controles transversais aplicáveis |
| RF-MVP-048 | Exibir gráficos e indicadores | TSK-ADM-014 | Ajustar | [ADE-023](#ade-023) | controles transversais aplicáveis |
| RF-MVP-049 | Consultar relatórios dos pontos | TSK-PON-005 | Ajustar | [ADE-022](#ade-022) | [ADE-023](#ade-023) |
| RF-MVP-050 | Representar planos e benefícios de dados | TSK-ADM-015 | Construir | [ADE-022](#ade-022) | controles transversais aplicáveis |
| RF-MVP-051 | Associar contratação e vigência de plano | TSK-ADM-016 | Construir | [ADE-022](#ade-022) | controles transversais aplicáveis |
| RF-MVP-052 | Autorizar dados por perfil, vínculo e plano | TSK-TRA-001 | Construir | [ADE-022](#ade-022) | controles transversais aplicáveis |
| RF-MVP-053 | Armazenar e apresentar imagens e vídeos da loja | TSK-ADM-017 | Construir | [ADE-021](#ade-021) | controles transversais aplicáveis |

### 8.2 Todos os 12 RNF

| Requisito | Qualidade | Task V1 | Estratégia no diagnóstico | Fichas de execução |
|---|---|---|---|---|
| RNF-MVP-001 | Plataforma responsiva e compatibilidade | TSK-TRA-002 | Verificar | [ADE-007](#ade-007), [ADE-026](#ade-026) |
| RNF-MVP-002 | Autenticação e autorização | TSK-TRA-003 | Ajustar | [ADE-001](#ade-001), [ADE-002](#ade-002), [ADE-003](#ade-003), [ADE-013](#ade-013), [ADE-015](#ade-015), [ADE-022](#ade-022) |
| RNF-MVP-003 | Integridade, concorrência e idempotência | TSK-TRA-004 | Ajustar | [ADE-002](#ade-002), [ADE-004](#ade-004), [ADE-005](#ade-005), [ADE-006](#ade-006), [ADE-011](#ade-011), [ADE-014](#ade-014), [ADE-015](#ade-015), [ADE-017](#ade-017), [ADE-018](#ade-018), [ADE-019](#ade-019), [ADE-020](#ade-020), [ADE-024](#ade-024) |
| RNF-MVP-004 | Resiliência de localização e consulta externa | TSK-TRA-005 | Ajustar | [ADE-007](#ade-007), [ADE-008](#ade-008), [ADE-009](#ade-009), [ADE-010](#ade-010), [ADE-016](#ade-016) |
| RNF-MVP-005 | Proteção de dados e privacidade | TSK-TRA-006 | Ajustar | [ADE-008](#ade-008), [ADE-022](#ade-022), [ADE-025](#ade-025) |
| RNF-MVP-006 | Desempenho e experiência | TSK-TRA-007 | Verificar | [ADE-026](#ade-026) |
| RNF-MVP-007 | Disponibilidade, backups e recuperação | TSK-TRA-008 | Verificar | [ADE-026](#ade-026) |
| RNF-MVP-008 | Auditoria e observabilidade | TSK-TRA-009 | Ajustar | [ADE-011](#ade-011), [ADE-012](#ade-012), [ADE-014](#ade-014), [ADE-015](#ade-015), [ADE-017](#ade-017), [ADE-018](#ade-018), [ADE-019](#ade-019), [ADE-023](#ade-023), [ADE-025](#ade-025) |
| RNF-MVP-009 | Segurança das integrações | TSK-TRA-010 | Ajustar | [ADE-007](#ade-007), [ADE-008](#ade-008), [ADE-016](#ade-016), [ADE-018](#ade-018), [ADE-022](#ade-022), [ADE-025](#ade-025) |
| RNF-MVP-010 | Segurança e desempenho de mídias | TSK-TRA-011 | Construir | [ADE-021](#ade-021) |
| RNF-MVP-011 | Padronização e entrega técnica | TSK-TRA-012 | Ajustar | [ADE-000](#ade-000), [ADE-024](#ade-024) |
| RNF-MVP-012 | Evolução e capacidade | TSK-TRA-013 | Verificar | [ADE-026](#ade-026) |

### 8.3 Todos os 16 achados

| Achado | Fichas que tratam o problema |
|---|---|
| AUD-001 | [ADE-011](#ade-011) |
| AUD-002 | [ADE-011](#ade-011), [ADE-012](#ade-012) |
| AUD-003 | [ADE-001](#ade-001), [ADE-002](#ade-002), [ADE-015](#ade-015) |
| AUD-004 | [ADE-014](#ade-014), [ADE-017](#ade-017) |
| AUD-005 | [ADE-017](#ade-017) |
| AUD-006 | [ADE-005](#ade-005), [ADE-006](#ade-006), [ADE-007](#ade-007), [ADE-008](#ade-008) |
| AUD-007 | [ADE-004](#ade-004), [ADE-005](#ade-005), [ADE-009](#ade-009), [ADE-014](#ade-014), [ADE-017](#ade-017) |
| AUD-008 | [ADE-001](#ade-001), [ADE-013](#ade-013), [ADE-015](#ade-015) |
| AUD-009 | [ADE-010](#ade-010) |
| AUD-010 | [ADE-019](#ade-019) |
| AUD-011 | [ADE-020](#ade-020) |
| AUD-012 | [ADE-015](#ade-015) |
| AUD-013 | [ADE-012](#ade-012), [ADE-014](#ade-014), [ADE-023](#ade-023), [ADE-025](#ade-025) |
| AUD-014 | [ADE-000](#ade-000), [ADE-009](#ade-009), [ADE-025](#ade-025) |
| AUD-015 | [ADE-000](#ade-000) |
| AUD-016 | [ADE-000](#ade-000), [ADE-024](#ade-024) |

## 9. Decisões necessárias antes de implementar regras pendentes

As TSK-DEC-001 a TSK-DEC-027 permanecem na V1. Para cada PD abaixo, entregar **registro de decisão ou adiamento explícito**, com responsável, alternativa escolhida, justificativa, parâmetros, impacto nos RF/TSK/ADE e critérios atualizados. Não basta marcar “conversar com o idealizador”. Pesquisa técnica entrega evidência, limitações e alternativas para decisão.

| Pendência | Questão conforme V6 | Fichas impactadas | Referência |
|---|---|---|---|
| PD-001 | Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política | [ADE-002](#ade-002) | TSK-DEC-001 |
| PD-002 | Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como | [ADE-001](#ade-001), [ADE-002](#ade-002), [ADE-003](#ade-003) | TSK-DEC-002 |
| PD-003 | Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação | [ADE-001](#ade-001), [ADE-002](#ade-002), [ADE-003](#ade-003), [ADE-013](#ade-013), [ADE-015](#ade-015) | TSK-DEC-003 |
| PD-004 | Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites | [ADE-007](#ade-007), [ADE-008](#ade-008) | TSK-DEC-004 |
| PD-005 | Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas | [ADE-005](#ade-005), [ADE-008](#ade-008) | TSK-DEC-005 |
| PD-006 | Rascunho em memória e abandono definidos em 10/10/2026; contratos reais de ajuste/exclusão, concorrência e confirmação pendentes | [ADE-005](#ade-005), [ADE-006](#ade-006), [ADE-011](#ade-011) | TSK-DEC-006 |
| PD-007 | Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e | [ADE-009](#ade-009) | TSK-DEC-007 |
| PD-008 | Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença | [ADE-010](#ade-010) | TSK-DEC-008 |
| PD-009 | Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de | [ADE-004](#ade-004), [ADE-009](#ade-009), [ADE-013](#ade-013), [ADE-014](#ade-014), [ADE-017](#ade-017) | TSK-DEC-009 |
| PD-010 | Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes | [ADE-011](#ade-011), [ADE-012](#ade-012) | TSK-DEC-010 |
| PD-011 | Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e | [ADE-019](#ade-019) | TSK-DEC-011 |
| PD-012 | Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de | [ADE-020](#ade-020) | TSK-DEC-012 |
| PD-013 | Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização | [ADE-020](#ade-020) | TSK-DEC-013 |
| PD-014 | Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e | [ADE-015](#ade-015), [ADE-016](#ade-016), [ADE-017](#ade-017) | TSK-DEC-014 |
| PD-015 | Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base? | [ADE-018](#ade-018) | TSK-DEC-015 |
| PD-016 | Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova | [ADE-015](#ade-015), [ADE-018](#ade-018), [ADE-025](#ade-025) | TSK-DEC-016 |
| PD-017 | Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual | [ADE-016](#ade-016) | TSK-DEC-017 |
| PD-018 | Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre | [ADE-004](#ade-004), [ADE-014](#ade-014), [ADE-017](#ade-017) | TSK-DEC-018 |
| PD-019 | Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados | [ADE-022](#ade-022), [ADE-023](#ade-023) | TSK-DEC-019 |
| PD-020 | Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material | [ADE-014](#ade-014), [ADE-023](#ade-023) | TSK-DEC-020 |
| PD-021 | Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega | [ADE-014](#ade-014), [ADE-015](#ade-015), [ADE-019](#ade-019), [ADE-020](#ade-020), [ADE-021](#ade-021), [ADE-023](#ade-023) | TSK-DEC-021 |
| PD-022 | Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos | [ADE-008](#ade-008), [ADE-022](#ade-022), [ADE-025](#ade-025) | TSK-DEC-022 |
| PD-023 | Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões | [ADE-001](#ade-001), [ADE-003](#ade-003), [ADE-013](#ade-013), [ADE-015](#ade-015), [ADE-022](#ade-022) | TSK-DEC-023 |
| PD-024 | Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia | [ADE-021](#ade-021), [ADE-025](#ade-025) | TSK-DEC-024 |
| PD-025 | Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade | [ADE-024](#ade-024), [ADE-026](#ade-026) | TSK-DEC-025 |
| PD-026 | Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega | [ADE-000](#ade-000), [ADE-024](#ade-024), [ADE-025](#ade-025), [ADE-026](#ade-026) | TSK-DEC-026 |
| PD-027 | Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem | avaliação futura; sem implementação confirmada | TSK-DEC-027 |

**PD-027:** avaliar cashback, ranking, QR e demais funcionalidades futuras sem incorporá-las às entregas confirmadas. Cashback é dinheiro e exige viabilidade própria; não equivale aos pontos da Loja.

## 10. Exemplo de demonstração da adequação

1. Administrador emite convite; morador se cadastra e entra.
2. Morador registra 10 latas manualmente. Estoque = 10; nenhum crédito.
3. Seleciona três, escolhe ponto compatível e abre navegação. Retorno/seleção seguem política aprovada.
4. Confirma GPS e entrega conforme parâmetros aprovados. Estoque pessoal = 7; ponto recebe três; operação concluída gera 10 pontos.
5. Reenvia a mesma operação. Saldos/crédito permanecem iguais; resumo e extrato refletem resultado real.
6. Responsável solicita coleta; administrador atribui e agenda; cooperativa aceita e recebe destino/horário. Administrador também pode solicitar sem pedido prévio do ponto.
7. Cooperativa informa materiais e pesos. Novas entradas e remanescentes são preservados conforme conciliação aprovada; morador não recebe novo crédito.
8. Administrador inicia pagamento quando condições financeiras aprovadas autorizarem. Coleta concluída não significa pagamento confirmado.
9. Loja e relatórios são demonstrados com regras/planos aprovados, verificando elegibilidade, débito e autorização.

O exemplo usa dados sintéticos. Não aprova parâmetros GPS, capacidade, conciliação, preço, campanha ou plano ainda pendentes.

## 11. Condições para apresentar a reativação à validação

- Registrar decisões e recortes; funcionalidades bloqueadas continuam visíveis no quadro.
- Demonstrar jornada por interface e HTTP, incluindo falha, permissão negada e reenvio.
- Conferir concorrência PostgreSQL onde há consumo de vagas, quantidade, pontos ou dinheiro.
- Demonstrar operação sem perda de estoque, novo crédito por pesagem ou confusão entre coleta/pagamento.
- Verificar migrations e saneamento em avaliação antes de ação sobre dados reais.
- Registrar dispositivos/rede, medições, auditoria, privacidade e restauração conforme metas aprovadas.
- Submeter evidências ao produto/idealizador e equipe. Build e status históricos não bastam para homologação.

**Resultado:** 27 pacotes, cobertura dos 53 RF, 12 RNF e 16 achados, com as 27 pendências rastreadas. Nenhuma correção no código de origem, na V6 ou nas tasks V1 foi realizada por este documento.
