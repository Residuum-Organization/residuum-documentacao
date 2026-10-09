## SISTEMA RESIDUUM

## Documento de Levantamento de Requisitos

## V5.0 — Regra de Negócio de Presença e Cadastro Atualizada

Startup Residuum | Manaus – AM | 2025


## Changelog da Revisão V5.0

ALTERADO NA V5.0 — Esta revisão altera duas regras de negócio do fluxo de descarte, a pedido do time de produto.

- RF013 (Validação por QR Code) foi REMOVIDO do escopo. A geolocalização (RF011) passa a ser o único mecanismo de validação de presença no ponto de coleta — não há mais fallback por QR Code.

- RF010 (Leitura de Código de Barras) permanece sem alteração — continua sendo o mecanismo de identificação do resíduo/produto no momento do descarte. Não há QR Code nesse fluxo em nenhuma versão.

- RNF007 (Geolocalização — sinal instável) é reclassificado de "Time Waster" para "Major Project", prioridade Alta – MVP. A justificativa original para não investir nisso era a existência do QR Code como fallback; sem ele, o risco de sinal instável volta a ser crítico e precisa de mitigação própria.

- Seção 4.1 (Risco Técnico Crítico) foi reescrita: o spike técnico agora precisa validar o GPS como fonte única de verdade, com critério de aceite mais rígido.

- Seção 6 (Riscos e Mitigações), risco #1: a mitigação que citava o QR Code como fallback foi substituída por um mecanismo de exceção operacional.


## 1. Resumo Executivo

## 1.1 Propósito do Projeto

O Sistema Residuum é uma plataforma web de gestão de resíduos sólidos desenvolvida pela startup Residuum, empresa de tecnologia focada em sustentabilidade ambiental, com sede em Manaus (AM).

O projeto marca a transição estratégica da empresa de um modelo B2B (atendimento a empresas) para um modelo B2C/B2B2C, onde pessoas físicas, empresas e associações de catadores passam a integrar um ecossistema digital de descarte correto de resíduos.

O sistema busca digitalizar, rastrear e gamificar o processo de descarte seletivo de resíduos, criando uma "conta resíduo" que permita ao cidadão registrar, localizar pontos de coleta, depositar resíduos e ser recompensado — funcionando como um sistema de milhas para o meio ambiente.

## 1.2 Objetivos de Negócio

- Criar banco de dados qualificado de pessoas físicas que descartam resíduos corretamente, com informações de volume e frequência.

- Descentralizar os pontos de coleta existentes, permitindo que qualquer CPF ou CNPJ se cadastre como ponto de coleta.

- Gerar dados de resíduos em tempo real para subsidiar rotas logísticas de cooperativas e associações de catadores.

- Engajar o usuário final por meio de gamificação (pontos, sorteios, gift-back/vouchers) sem depender de hardware físico.

- Viabilizar receita via venda de dados de comportamento de consumo (com consentimento) para empresas parceiras.

- Iniciar com MVP focado em garrafas PET, com previsão de expansão para papel, papelão e outros materiais.

- Operar 100% via web, sem necessidade de servidor dedicado, com infraestrutura em nuvem escalável.

## 1.3 Sobre Esta Revisão

Esta versão (V5.0) altera a regra de negócio de validação de presença no ponto de coleta: a geolocalização (RF011) passa a ser o único mecanismo de confirmação — quando o usuário estiver dentro do raio configurado do ponto, o sistema libera o depósito do resíduo. O QR Code deixa de existir como alternativa (RF013 removido).

A leitura de código de barras (RF010) é reafirmada como o mecanismo de identificação do resíduo no momento do descarte — não sofre alteração nesta revisão.

As classificações de Impacto × Esforço (V4.0) permanecem como critério de priorização para os requisitos não afetados por esta mudança.


## 2. Requisitos Funcionais (RF)

Critério de prioridade: Quick Wins são executados primeiro independentemente da complexidade nominal. Major Projects são divididos em subtarefas e planejados em épicos. Fill-ins preenchem lacunas entre ciclos. Time Wasters são descartados ou repensados.

## 2.1 Módulo: Cadastro e Autenticação

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF001 | Cadastro de Usuário (PF) Quick Win |   | Alta – MVP | Pessoas físicas se cadastram com nome, email, telefone e endereço. Fluxo simples e de baixo atrito. |
| RF002 | Login e Autenticação | Quick Win | Alta – MVP | Autenticação segura por e-mail/senha com recuperação de senha via biblioteca consolidada (NextAuth, Passport.js). |
| RF003 | Cadastro de Ponto de Coleta (CPF) | Major Project | Alta – MVP | Solicitação de ponto de coleta por PF. Dividir em: (1) formulário, (2) fila de aprovação, (3) ativação no mapa. |
| RF004 | Cadastro de Ponto de Coleta (CNPJ) | Major Project | Alta – MVP | Solicitação de ponto de coleta por empresa. Requer validação de CNPJ e dados operacionais específicos. |
| RF005 | Aprovação de Pontos pelo Admin | Major Project | Alta – MVP | Admin revisa, aprova ou rejeita pontos de coleta. Requer notificação ao solicitante e histórico de decisões. |
| RF006 | Perfil de Usuário | Quick Win | Alta – MVP | Visualização e edição de perfil, histórico de descartes, pontuação acumulada e recompensas obtidas. |

## 2.2 Módulo: Mapa e Pontos de Coleta

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF007 | Mapa Georreferenciado Quick Win |   |   | Alta – MVP Mapa interativo com pontos ativos, filtráveis por tipo de resíduo e distância. Usar Leaflet + OpenStreetMap no MVP. |
| RF008 | Visualização de Ponto de Quick Win Coleta |   | Alta – MVP | Tela de detalhe do ponto com endereço, horário, tipos aceitos, quantidade acumulada e status. |
| RF009 | Ponto de Coleta Temporário | Fill-in | Média – V1 | Pontos com data de expiração para eventos. Implementar campo expires_at e cron de desativação automática. |

## 2.3 Módulo: Registro de Descarte

ALTERADO NA V5.0 — O fluxo de presença mudou nesta revisão. RF013 foi removido; RF011 (GPS) é agora o único validador de presença.

Risco Técnico Crítico: O fluxo RF010  RF011  RF012 é o core do produto e o maior risco técnico. Sem o QR Code como alternativa, toda a validação de presença depende da precisão do GPS do browser em dispositivos Android de entrada — perfil do público-alvo em Manaus. Recomenda-se spike técnico de 3-5 dias antes de planejar os sprints deste módulo, com critério de aceite revisado (ver seção 4.1).

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF010 | Leitura de Código de Barras | Major Project | Alta – MVP | Scanner 1D/QR via câmera do browser (ZXing-js) para identificar o resíduo/produto no descarte. Testar em ≥5 modelos de Android populares no Brasil antes do launch. Sem alteração nesta revisão. |
| RF011 | Validação de Presença (GPS) | Major Project | Alta – MVP | GPS do browser é o único mecanismo de validação de presença no ponto. Ao detectar o usuário dentro do raio mínimo (100m, configurável por ponto), o sistema libera o depósito do resíduo. Sem fallback alternativo. |
| RF012 | Transferência de Resíduo Major Project ao Ponto |   | Alta – MVP | Orquestra RF010 + RF011 + atualização de estoque. Usar transação ACID — pontuação e zeramento ocorrem juntos. |
| RF013 | Validação por QR Code (alternativa) | — | REMOVIDO | Removido do escopo na V5.0. A validação de presença passou a depender exclusivamente do GPS (RF011). |

## 2.4 Módulo: Gamificação e Recompensas


| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF014 | Sistema de Pontuação (Gift-Back) | Quick Win | Alta – MVP | Pontos proporcionais ao kg coletado confirmado (RF022). Lógica matemática simples, disparada por evento assíncrono. |
| RF015 | Resgate por Sorteio/Voucher | Major Project |   | Alta – MVP MVP: sorteio simples com seleção aleatória e notificação por e-mail. Voucher de parceiro somente na V1. |
| RF016 | Histórico de Pontuação Fill-in |   | Média – V1 | Extrato de pontos ganhos/resgatados. Query simples na tabela de transações. Incluir na tela de perfil (RF006). |
| RF017 | Ranking e Competições entre Pontos | Time Waster |   | Baixa – Futuro Gamificação social requer massa crítica. Descartar do backlog atual. Revisar após 1.000 usuários ativos mensais. |

## 2.5 Módulo: Painel do Ponto de Coleta

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF018 | Dashboard do Responsável pelo Ponto | Quick Win | Alta – MVP | Painel com resíduos acumulados por tipo, usuários ativos, histórico de coletas e status. Queries de leitura simples. |
| RF019 | Notificação de Ponto Cheio | Major Project | Alta – MVP | Trigger no banco ao atingir threshold. Email transacional para cooperativa. Threshold configurável por ponto. |
| RF020 | Gestão de Horários e Disponibilidade | Fill-in | Média – V1 | CRUD de horários e disponibilidade do ponto. Incluir na tela de dashboard do ponto; não criar tela separada. |

## 2.6 Módulo: Painel da Cooperativa/Associação

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF021 | Visualização de Rotas e Pontos | Major Project |   | Alta – MVP MVP: mapa com todos os pontos da cooperativa e filtro por status. Roteamento otimizado é funcionalidade V2. |
| RF022 | Registro de Coleta e Pesagem | Major Project | Alta – MVP | Cooperativa registra kg coletado por tipo/ponto. Dispara distribuição de pontos via transação ACID. |
| RF023 | Geração de Nota/Certificado de Coleta | Fill-in |   | Média – V1 MVP: exportar CSV. V1: PDF com jsPDF ou Puppeteer. Processo pode ser manual no MVP conforme documentado. |

## 2.7 Módulo: Dashboard Administrativo (Residuum)

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF024 | Dashboard Consolidado Quick Win |   | Alta – MVP | KPIs operacionais: usuários, resíduos por tipo/período, mapa de pontos ativos, pontos próximos do limite. |
| RF025 | Gestão de Usuários e Pontos | Quick Win | Alta – MVP | CRUD admin de usuários e pontos. Usar headless admin panel (React Admin) e customizar somente fluxos específicos. |
| RF026 | Gestão de Campanhas e Promoções | Fill-in | Média – V1 | Condicional ao pipeline comercial. Não construir antes de ter ao menos 1 parceiro confirmado. |
| RF027 | Exportação de Dados | Fill-in | Média – V1 | CSV simples no MVP. Estruturar modelo de dados pensando já nos campos de interesse de parceiros. |

## 2.8 Módulo: Integração Cloud e Processamento Assíncrono

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RF028 | Upload de Mídia via Presigned URLs | Major Project | Alta – MVP | Upload direto do cliente para S3/GCS. Requer CORS, políticas de bucket e validação de MIME type no backend. |
| RF029 | Exportação Assíncrona de Relatórios | Time Waster |   | Baixa – Futuro SQS/PubSub para relatórios com poucos registros é over-engineering. MVP: export síncrono com timeout de 30s. |
| RF030 | Auditoria e Arquivamento (Cold Storage) | Time Waster |   | Baixa – Futuro S3 Glacier desnecessário sem volume. MVP: audit log em banco relacional por 12 meses; migrar quando justificar. |


## 3. Requisitos Não-Funcionais (RNF)

Os RNFs foram avaliados com o critério de Impacto × Esforço. RNFs de segurança e dados (LGPD, integridade de transações) são Major Project com prioridade Alta — não-negociáveis independentemente de quadrante. RNFs operacionais excessivos para o estágio MVP são Time Wasters e removidos do escopo inicial.

| Código | Nome | Quadrante | Prioridade | Descrição Resumida |
| --- | --- | --- | --- | --- |
| RNF001 | Plataforma (PWA) | Major Project | Alta – MVP | Web responsivo com câmera e GPS no browser. Validar scanner e GPS em modo PWA antes de comprometer a stack. |
| RNF002 | Infraestrutura Cloud Major Project |   | Alta – MVP | Cloud Run ou ECS Fargate. Evitar Serverless puro (cold start prejudica UX do mapa). Managed DB desde o início. |
| RNF003 | Escalabilidade | Time Waster |   | Baixa – Futuro Escalar prematuramente gera complexidade sem retorno. Documentar pontos de escala futura, não implementar agora. |
| RNF004 | Usabilidade (baixo atrito) Quick Win |   | Alta – MVP | Decisão de design: reduzir etapas de cadastro/descarte. Testar com 5 usuários de comunidades periféricas. |
| RNF005 | Segurança – LGPD | Major Project | Alta – MVP | Não negociável. Criptografia de CPF/localização e consentimento granular desde o dia 1. Consultar jurídico. |
| RNF006 | Segurança – Integridade Major Project |   | Alta – MVP | Idempotency keys em todas as transações de pontos. Audit log com stack trace em toda operação de crédito/débito. |
| RNF007 | Geolocalização (sinal instável) | Major Project | Alta – MVP | Reclassificado na V5.0: sem QR Code como fallback (RF013 removido), a precisão e a resiliência do GPS tornam-se requisito crítico. Definir estratégia de reintento e limite de tentativas antes de bloquear o usuário. |
| RNF008 | Performance (< 3s em 4G) | Quick Win | Alta – MVP | Lazy loading + compressão de imagens + CDN básica. Usar Lighthouse como gate no CI/CD (score mínimo: 70). |
| RNF009 | Identidade Visual | Fill-in | Média – V1 | CSS variables e design tokens. Definir tema no início para não retrabalhar em sprints avançados. |
| RNF010 | Uptime 99% horário comercial | Fill-in | Média – V1 | Entregue por qualquer cloud managed no MVP. Monitorar com UptimeRobot (gratuito). SLA formal na V1. |
| RNF011 | Integrações Futuras | Time Waster |   | Baixa – Futuro Abstraction layers prematuros geram dívida. Criar façades simples nos módulos de mapa e pagamento, nada mais. |
| RNF012 | Infrastructure as Code (IaC) | Major Project | Alta – MVP | Terraform desde o primeiro recurso. Nenhum recurso criado manualmente no console. Disciplina absoluta. |
| RNF013 | Pipeline CI/CD | Time Waster |   | Baixa – Futuro SAST completo com 1-2 devs é overhead. MVP: GitHub Actions com lint + test + deploy. CI/CD completo na V1. |
| RNF014 | Observabilidade e Logs Time Waster |   |   | Baixa – Futuro Datadog/X-Ray para monolito MVP é custo sem retorno. MVP: logs JSON + Sentry. Tracing ao distribuir a arquitetura. |
| RNF015 | Gestão de Segredos | Major Project | Alta – MVP | AWS Secrets Manager desde o dia 1. Nunca usar .env em produção. Rotação automática de credenciais de banco. |
| RNF016 | Disaster Recovery e Backups | Major Project | Alta – MVP | Snapshots automáticos diários (checkbox no RDS). RPO 24h / RTO 4h. Testar restore antes do launch. |
| RNF017 | IAM / Least Privilege Major Project |   | Alta – MVP | Políticas IAM no Terraform. Auditar permissões a cada novo serviço. Princípio de menor privilégio absoluto. |


## 4. Decisões Técnicas Críticas para o MVP

## 4.1 Risco Principal: Fluxo de Descarte (RF010 → RF011 → RF012)

ALTERADO NA V5.0 — Seção reescrita na V5.0 — o spike técnico agora precisa validar o GPS como fonte ÚNICA de verdade, sem QR Code como rede de segurança.

Este é o coração do produto e o maior vetor de risco técnico do sistema. Com a remoção do QR Code (RF013) como alternativa de validação de presença, o GPS do browser passa a ser a única fonte de verdade — o que eleva o padrão de aceite exigido no spike técnico. Antes de qualquer planejamento de sprint, executar um spike técnico de 3-5 dias com os seguintes objetivos:

- Validar que o scanner de código de barras funciona em ZXing-js nos 5 modelos de smartphone Android mais populares no Brasil (Motorola G series predomina em Manaus).

- Medir a precisão real do GPS do browser nesses dispositivos, em ambiente externo e semi-coberto, e calibrar o raio mínimo de validação de presença por ponto.

- Medir a taxa de falso negativo (usuário presente, mas GPS não confirma) — este é o critério de aceite mais importante da revisão V5.0, pois não há mais fallback.

- Confirmar que a sequência câmera → GPS → transferência funciona em um fluxo contínuo sem recarregamento de página.

- Definir um mecanismo de exceção operacional para falha de GPS: reintento manual assistido, ou aprovação retroativa pelo responsável do ponto com registro em log — para não deixar o usuário sem alternativa nenhuma quando o GPS falhar.

## 4.2 Decisões de Stack Recomendadas

| Componente | Decisão Recomendada |
| --- | --- |
| Hosting | Google Cloud Run ou AWS ECS Fargate. Evitar Lambda puro — cold start prejudica UX do mapa. |
| Banco de Dados | Cloud SQL (PostgreSQL) ou AWS RDS. Managed DB para delegar patching e alta disponibilidade. |
| Autenticação | NextAuth.js ou Supabase Auth. Não construir do zero. OAuth social reduz fricção de cadastro. |
| Mapa | Leaflet.js + OpenStreetMap no MVP. Migrar para Google Maps API somente se houver necessidade de funcionalidades avançadas. |
| Scanner de Barras | ZXing-js (primário) ou QuaggaJS (alternativa). Testar em hardware real antes do sprint. |
| Geolocalização | Geolocation API do browser como fonte única de validação de presença (sem fallback QR). Configurar timeout, high-accuracy mode e reintento automático antes de acionar exceção manual. |
| Object Storage | AWS S3 ou Google Cloud Storage com presigned URLs. Validação de MIME type e limite de 5MB no backend. |
| Monitoramento | MVP: Logs JSON estruturados + Sentry para erros. UptimeRobot para disponibilidade. Datadog somente na V1. |
| IaC | Terraform. Nenhum recurso criado via console/ClickOps. Sem exceções. |
| Segredos | AWS Secrets Manager ou Doppler. Nunca .env em produção. Configurar desde o primeiro deploy. |

## 4.3 Escopo do MVP — O que NÃO entra

Descartado do MVP: RF013 (Validação por QR Code — removido do produto, não apenas adiado), RF017 (Ranking social), RF029 (Export assíncrono), RF030 (Cold storage), RNF003 (Escalabilidade prematura), RNF011 (Adapters genéricos de integração), RNF013 (Pipeline CI/CD completo com SAST), RNF014 (Tracing distribuído).

RNF007 (Geolocalização — sinal instável) sai desta lista na V5.0: deixa de ser adiável porque não existe mais um fallback (QR Code) que absorvesse esse risco. Passa a ser tratado como Major Project no MVP.

Os demais requisitos não foram eliminados do produto — foram reclassificados para V1 ou versões futuras porque o problema que resolvem não existe no volume do MVP. Implementá-los agora consumiria tempo de engenharia que deve estar concentrado no fluxo de descarte.


## 5. Roadmap de Priorização Recomendado

## Sprint 1-2: Quick Wins (2-4 semanas)

Foco: entregar o esqueleto funcional com máximo valor e mínimo risco.

- RF001 + RF002: Cadastro e autenticação de usuário (PF).

- RF006: Perfil de usuário com histórico e pontuação.

- RF007 + RF008: Mapa com pontos de coleta e tela de detalhe.

- RF018: Dashboard do responsável pelo ponto.

- RF024 + RF025: Dashboard e gestão admin básica.

- RF014: Sistema de pontuação (lógica de cálculo e crédito).

- RNF004 + RNF008: UX de baixo atrito e performance validada por Lighthouse.

- RNF015 + RNF017: Secrets Manager e políticas IAM configuradas desde o início.

- RNF016: Backups automáticos no banco configurados via Terraform.

## Sprint 3-5: Major Projects — Fluxo de Descarte (4-8 semanas)

ALTERADO NA V5.0 — Critério de aceite do spike técnico revisado — GPS precisa funcionar sem rede de segurança de QR Code.

Pré-requisito obrigatório: Executar spike técnico de 3-5 dias (câmera + GPS em Android), validando o GPS como fonte única de verdade, ANTES de iniciar este bloco.

- RF003 + RF004 + RF005: Cadastro e aprovação de pontos de coleta (PF e CNPJ).

- RF010: Scanner de código de barras (validado no spike).

- RF011: Validação de presença por GPS com raio configurável — único mecanismo de validação de presença.

- RF012: Transferência de resíduo ao ponto com transação ACID.

- RF019: Notificação automática de ponto cheio.

- RF021 + RF022: Painel da cooperativa e registro de pesagem.

- RF015: Sorteio simples com seleção aleatória e notificação por e-mail.

- RF028: Upload de mídia via presigned URLs.

- RNF001: PWA responsivo com câmera e GPS validado.

- RNF002 + RNF012: Infraestrutura cloud em containers com IaC.

- RNF005 + RNF006: LGPD e integridade de transações implementadas.

- RNF007: Estratégia de resiliência do GPS (reintento automático + exceção operacional manual). [Novo nesta revisão]

## V1: Fill-ins (após MVP validado com usuários reais)

- RF009: Ponto de coleta temporário para eventos.

- RF016: Histórico de pontuação consolidado.

- RF020: Gestão de horários e disponibilidade do ponto.

- RF023: Geração de nota/certificado de coleta em PDF.

- RF026: Gestão de campanhas (somente com parceiro comercial confirmado).

- RF027: Exportação de dados para parceiros.

- RNF009: Identidade visual consolidada em design tokens.

- RNF010: SLA formal de uptime com monitoramento avançado.

## Versões Futuras: Time Wasters (somente com tração comprovada)

- RF017: Ranking e competições sociais entre pontos (após 1.000 MAUs).

- RF029: Exportação assíncrona de relatórios (após relatórios superarem 10k linhas).


- RF030: Auditoria em cold storage (após volume e auditoria regulatória justificarem).

- RNF003: Escalabilidade horizontal avançada (sharding, cache distribuído).

- RNF011: Adapters genéricos de integração (implementar conforme necessidade real).

- RNF013: Pipeline CI/CD completo com SAST (ao contratar o segundo engenheiro).

- RNF014: Tracing distribuído com Datadog/X-Ray (ao distribuir a arquitetura).


## 6. Riscos e Mitigações

| # | Risco | Probabilidade Impacto |   | Mitigação |
| --- | --- | --- | --- | --- |
| 1 | GPS inconsistente em Android de entrada, sem fallback de QR Code | Alta | Crítico — invalida o core do produto | Spike técnico obrigatório antes do Sprint 3 com critério de aceite de fonte única de verdade. Mecanismo de exceção operacional (aprovação manual retroativa pelo responsável do ponto, com log de auditoria) para casos de falha de GPS. |
| 2 | Fraude no sistema de pontos (manipulação de registros) | Média | Alto — destrói confiança do ecossistema | Idempotency keys, transações ACID e audit log imutável desde o MVP. |
| 3 | Não conformidade com LGPD antes do launch |   | Alta (sem ação) Crítico — risco legal e reputacional | Contratar consultoria jurídica de LGPD antes do launch. Criptografia at-rest desde o dia 1. |
| 4 | Parceiros de voucher não confirmados Alta no MVP |   | Médio — afeta RF015 e RF026 | MVP usa sorteio simples sem parceiro. RF026 (campanhas) bloqueado até parceiro confirmado. |
| 5 | Over-engineering antes de validar o produto | Alta (sem disciplina) | Alto — atrasa o launch sem retorno | Time Wasters removidos do backlog. Revisão de escopo a cada sprint. |

Documento elaborado com base no DLR V4.0 + alteração de regra de negócio (presença por geolocalização exclusiva). Sistema Residuum · Manaus, 2025.
