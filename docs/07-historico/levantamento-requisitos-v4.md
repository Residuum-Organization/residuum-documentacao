# Residuum_Levantamento de Requisitos_V4(1)


---

<!-- Página 1 de 13 -->

SISTEMA RESIDUUM
 Documento de Levantamento de Requisitos
     V4.0 — Revisado pela Matriz de Importância



          Startup Residuum  | Manaus – AM  | 2025





   Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 1 de 13

---

<!-- Página 2 de 13 -->

1. Resumo Executivo

1.1 Propósito do Projeto

O Sistema Residuum é uma plataforma web de gestão de resíduos sólidos desenvolvida pela startup
Residuum, empresa de tecnologia focada em sustentabilidade ambiental, com sede em Manaus
(AM).
O projeto marca a transição estratégica da empresa de um modelo B2B (atendimento a empresas)
para um modelo B2C/B2B2C, onde pessoas físicas, empresas e associações de catadores passam a
integrar um ecossistema digital de descarte correto de resíduos.
O sistema busca digitalizar, rastrear e gamificar o processo de descarte seletivo de resíduos, criando
uma "conta resíduo" que permita ao cidadão registrar, localizar pontos de coleta, depositar resíduos e
ser recompensado — funcionando como um sistema de milhas para o meio ambiente.


1.2 Objetivos de Negócio

     •   Criar banco de dados qualificado de pessoas físicas que descartam resíduos corretamente,
      com informações de volume e frequência.
     •   Descentralizar os pontos de coleta existentes, permitindo que qualquer CPF ou CNPJ se
        cadastre como ponto de coleta.
     •   Gerar dados de resíduos em tempo real para subsidiar rotas logísticas de cooperativas e
       associações de catadores.
     •   Engajar o usuário final por meio de gamificação (pontos, sorteios, gift-back/vouchers) sem
       depender de hardware físico.
     •    Viabilizar receita via venda de dados de comportamento de consumo (com consentimento)
       para empresas parceiras.
     •    Iniciar com MVP focado em garrafas PET, com previsão de expansão para papel, papelão e
        outros materiais.
     •   Operar 100% via web, sem necessidade de servidor dedicado, com infraestrutura em nuvem
        escalável.


1.3 Sobre Esta Revisão

Esta versão (V4.0) incorpora a análise de Impacto × Esforço (Matriz de Importância) sobre todos os
30 requisitos funcionais e 17 requisitos não-funcionais. Cada requisito foi classificado em um dos
quatro quadrantes abaixo e sua prioridade de execução foi reavaliada com base nessa classificação
— substituindo o critério único de Alta/Média/Baixa por uma ordem de execução orientada a entrega
de valor real.


  ⚡ Quick Win    🏗 Major Project    📌 Fill-in      ⚠ Time Waster
     Alto impacto · Baixo           Alto impacto · Alto         Baixo impacto · Baixo        Baixo impacto · Alto
           esforço                     esforço                     esforço                     esforço



  Prioridades de Execução: "Alta – MVP" = entregar no Sprint 1-2. "Média – V1" = após MVP
  validado. "Baixa – Futuro" = somente com tração comprovada.





                      Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 2 de 13

---

<!-- Página 3 de 13 -->

2. Requisitos Funcionais (RF)

Critério de prioridade reavaliado: Quick Wins são executados primeiro independentemente da
complexidade nominal. Major Projects são divididos em subtarefas e planejados em épicos. Fill-ins
preenchem lacunas entre ciclos. Time Wasters são descartados ou repensados.


2.1 Módulo: Cadastro e Autenticação

 Código  Nome          Quadrante      Prioridade     Descrição Resumida

 RF001    Cadastro de       Quick Win       Alta – MVP    Pessoas físicas se cadastram com nome, e-
            Usuário (PF)                                           mail, telefone e endereço. Fluxo simples e
                                                     de baixo atrito.

 RF002    Login e           Quick Win       Alta – MVP     Autenticação segura por e-mail/senha com
            Autenticação                                    recuperação de senha via biblioteca
                                                             consolidada (NextAuth, Passport.js).

 RF003    Cadastro de      Major Project     Alta – MVP     Solicitação de ponto de coleta por PF.
           Ponto de                                                  Dividir em: (1) formulário, (2) fila de
            Coleta (CPF)                                    aprovação, (3) ativação no mapa.

 RF004    Cadastro de      Major Project     Alta – MVP     Solicitação de ponto de coleta por empresa.
           Ponto de                                    Requer validação de CNPJ e dados
            Coleta (CNPJ)                                     operacionais específicos.

 RF005    Aprovação de     Major Project     Alta – MVP    Admin revisa, aprova ou rejeita pontos de
           Pontos pelo                                            coleta. Requer notificação ao solicitante e
          Admin                                                   histórico de decisões.

 RF006     Perfil de          Quick Win       Alta – MVP     Visualização e edição de perfil, histórico de
            Usuário                                            descartes, pontuação acumulada e
                                                      recompensas obtidas.


2.2 Módulo: Mapa e Pontos de Coleta

 Código  Nome            Quadrante     Prioridade     Descrição Resumida

 RF007   Mapa              Quick Win       Alta – MVP   Mapa interativo com pontos ativos,
            Georreferenciado                                              filtráveis por tipo de resíduo e distância.
                                                          Usar Leaflet + OpenStreetMap no MVP.

 RF008    Visualização de      Quick Win       Alta – MVP    Tela de detalhe do ponto com endereço,
           Ponto de Coleta                                         horário, tipos aceitos, quantidade
                                                        acumulada e status.

 RF009    Ponto de Coleta           Fill-in       Média – V1    Pontos com data de expiração para
           Temporário                                         eventos. Implementar campo expires_at e
                                                              cron de desativação automática.


2.3 Módulo: Registro de Descarte

 ⚠ Risco Técnico Crítico: O fluxo RF010 → RF011 → RF012 é o core do produto e o maior risco
  técnico. Scanner de câmera no browser e GPS têm inconsistências em dispositivos Android de





                      Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 3 de 13

---

<!-- Página 4 de 13 -->

entrada — perfil do público-alvo em Manaus. Recomenda-se spike técnico de 3-5 dias antes de
  planejar os sprints deste módulo.



 Código  Nome          Quadrante      Prioridade     Descrição Resumida

 RF010     Leitura de        Major Project     Alta – MVP    Scanner 1D/QR via câmera do browser
           Código de                                              (ZXing-js). Testar em ≥5 modelos de
            Barras                                          Android populares no Brasil antes do
                                                                launch.

 RF011    Validação de     Major Project     Alta – MVP   GPS do browser valida presença no ponto.
           Presença                                      Raio mínimo de 100m configurável por
          (GPS)                                             ponto. Logar falsos positivos.

 RF012    Transferência     Major Project     Alta – MVP    Orquestra RF010 + RF011 + atualização de
          de Resíduo ao                                    estoque. Usar transação ACID —
           Ponto                                         pontuação e zeramento ocorrem juntos.

 RF013    Validação por           Fill-in        Média – V1   QR estático por ponto como fallback ao
        QR Code                                 GPS. Simples de gerar; resolve sinal
              (alternativa)                                            instável sem offline sync.


2.4 Módulo: Gamificação e Recompensas

 Código  Nome           Quadrante      Prioridade     Descrição Resumida

 RF014    Sistema de         Quick Win       Alta – MVP    Pontos proporcionais ao kg coletado
           Pontuação                                       confirmado (RF022). Lógica matemática
             (Gift-Back)                                          simples, disparada por evento assíncrono.

 RF015    Resgate por       Major Project     Alta – MVP    MVP: sorteio simples com seleção
            Sorteio/Voucher                                        aleatória e notificação por e-mail. Voucher
                                                      de parceiro somente na V1.

 RF016     Histórico de               Fill-in        Média – V1     Extrato de pontos ganhos/resgatados.
           Pontuação                                    Query simples na tabela de transações.
                                                                              Incluir na tela de perfil (RF006).

 RF017    Ranking e        Time Waster      Baixa –      Gamificação social requer massa crítica.
           Competições                         Futuro       Descartar do backlog atual. Revisar após
             entre Pontos                                     1.000 usuários ativos mensais.


2.5 Módulo: Painel do Ponto de Coleta

 Código  Nome          Quadrante      Prioridade     Descrição Resumida

 RF018    Dashboard do     Quick Win       Alta – MVP     Painel com resíduos acumulados por tipo,
           Responsável                                      usuários ativos, histórico de coletas e
            pelo Ponto                                             status. Queries de leitura simples.

 RF019    Notificação de    Major Project     Alta – MVP     Trigger no banco ao atingir threshold. E-
           Ponto Cheio                                        mail transacional para cooperativa.
                                                            Threshold configurável por ponto.





                      Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 4 de 13

---

<!-- Página 5 de 13 -->

Código  Nome          Quadrante      Prioridade     Descrição Resumida

 RF020    Gestão de               Fill-in        Média – V1   CRUD de horários e disponibilidade do
            Horários e                                         ponto. Incluir na tela de dashboard do
             Disponibilidade                                     ponto; não criar tela separada.


2.6 Módulo: Painel da Cooperativa/Associação

 Código  Nome           Quadrante      Prioridade     Descrição Resumida

 RF021    Visualização de    Major Project     Alta – MVP    MVP: mapa com todos os pontos da
           Rotas e Pontos                                     cooperativa e filtro por status. Roteamento
                                                               otimizado é funcionalidade V2.

 RF022    Registro de       Major Project     Alta – MVP    Cooperativa registra kg coletado por
            Coleta e                                                tipo/ponto. Dispara distribuição de pontos
          Pesagem                                               via transação ACID.

 RF023    Geração de               Fill-in        Média – V1    MVP: exportar CSV. V1: PDF com jsPDF
             Nota/Certificado                               ou Puppeteer. Processo pode ser manual
          de Coleta                                    no MVP conforme documentado.


2.7 Módulo: Dashboard Administrativo (Residuum)

 Código  Nome          Quadrante      Prioridade     Descrição Resumida

 RF024    Dashboard        Quick Win       Alta – MVP    KPIs operacionais: usuários, resíduos por
           Consolidado                                           tipo/período, mapa de pontos ativos, pontos
                                                           próximos do limite.

 RF025    Gestão de         Quick Win       Alta – MVP   CRUD admin de usuários e pontos. Usar
            Usuários e                                      headless admin panel (React Admin) e
           Pontos                                           customizar somente fluxos específicos.

 RF026    Gestão de               Fill-in        Média – V1     Condicional ao pipeline comercial. Não
          Campanhas e                                         construir antes de ter ao menos 1 parceiro
          Promoções                                        confirmado.

 RF027    Exportação de          Fill-in        Média – V1   CSV simples no MVP. Estruturar modelo de
          Dados                                       dados pensando já nos campos de
                                                                  interesse de parceiros.


2.8 Módulo: Integração Cloud e Processamento Assíncrono

 Código  Nome          Quadrante      Prioridade     Descrição Resumida

 RF028    Upload de        Major Project     Alta – MVP    Upload direto do cliente para S3/GCS.
            Mídia via                                    Requer CORS, políticas de bucket e
            Presigned                                         validação de MIME type no backend.
         URLs

 RF029    Exportação       Time Waster       Baixa –     SQS/PubSub para relatórios com poucos
            Assíncrona de                       Futuro       registros é over-engineering. MVP: export
             Relatórios                                        síncrono com timeout de 30s.





                      Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 5 de 13

---

<!-- Página 6 de 13 -->

Código  Nome          Quadrante      Prioridade     Descrição Resumida

RF030     Auditoria e       Time Waster       Baixa –     S3 Glacier desnecessário sem volume.
          Arquivamento                       Futuro     MVP: audit log em banco relacional por 12
          (Cold Storage)                                meses; migrar quando justificar.





                    Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 6 de 13

---

<!-- Página 7 de 13 -->

3. Requisitos Não-Funcionais (RNF)

Os RNFs foram reavaliados com o mesmo critério de Impacto × Esforço. RNFs de segurança e
dados (LGPD, integridade de transações) foram elevados a Major Project com prioridade Alta — são
não-negociáveis independentemente de quadrante. RNFs operacionais excessivos para o estágio
MVP foram reclassificados como Time Wasters e removidos do escopo inicial.


 Código    Categoria       Quadrante     Prioridade     Descrição Resumida

 RNF001   Plataforma        Major Project     Alta – MVP   Web responsivo com câmera e GPS no
          (PWA)                                            browser. Validar scanner e GPS em modo
                                        PWA antes de comprometer a stack.

 RNF002    Infraestrutura      Major Project     Alta – MVP    Cloud Run ou ECS Fargate. Evitar
            Cloud                                              Serverless puro (cold start prejudica UX do
                                                          mapa). Managed DB desde o início.

 RNF003   Escalabilidade     Time Waster      Baixa –      Escalar prematuramente gera
                                                Futuro      complexidade sem retorno. Documentar
                                                            pontos de escala futura, não implementar
                                                                agora.

 RNF004   Usabilidade        Quick Win       Alta – MVP    Decisão de design: reduzir etapas de
             (baixo atrito)                                         cadastro/descarte. Testar com 5 usuários
                                                      de comunidades periféricas.

 RNF005   Segurança –      Major Project     Alta – MVP    Não negociável. Criptografia de
         LGPD                                             CPF/localização e consentimento granular
                                                        desde o dia 1. Consultar jurídico.

 RNF006   Segurança –      Major Project     Alta – MVP    Idempotency keys em todas as transações
             Integridade                                  de pontos. Audit log com stack trace em
                                                              toda operação de crédito/débito.

 RNF007   Geolocalização    Time Waster      Baixa –       Offline-sync complexo. QR Code (RF013)
               (sinal instável)                       Futuro        já resolve sinal instável com muito menos
                                                                    esforço. Não investir em offline.

 RNF008   Performance (<     Quick Win       Alta – MVP    Lazy loading + compressão de imagens +
           3s em 4G)                           CDN básica. Usar Lighthouse como gate
                                                      no CI/CD (score mínimo: 70).

 RNF009   Identidade                Fill-in       Média – V1   CSS variables e design tokens. Definir
             Visual                                      tema no início para não retrabalhar em
                                                                        sprints avançados.

 RNF010   Uptime 99%              Fill-in       Média – V1    Entregue por qualquer cloud managed no
              horário                                  MVP. Monitorar com UptimeRobot
             comercial                                                   (gratuito). SLA formal na V1.

 RNF011   Integrações       Time Waster      Baixa –       Abstraction layers prematuros geram
             Futuras                             Futuro       dívida. Criar façades simples nos módulos
                                                      de mapa e pagamento, nada mais.

 RNF012    Infrastructure as   Major Project     Alta – MVP    Terraform desde o primeiro recurso.
          Code (IaC)                               Nenhum recurso criado manualmente no
                                                                 console. Disciplina absoluta.

 RNF013   Pipeline CI/CD     Time Waster      Baixa –     SAST completo com 1-2 devs é overhead.
                                                Futuro     MVP: GitHub Actions com lint + test +
                                                                  deploy. CI/CD completo na V1.





                      Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 7 de 13

---

<!-- Página 8 de 13 -->

Código    Categoria       Quadrante     Prioridade     Descrição Resumida

RNF014   Observabilidade   Time Waster      Baixa –      Datadog/X-Ray para monolito MVP é
         e Logs                              Futuro       custo sem retorno. MVP: logs JSON +
                                                                 Sentry. Tracing ao distribuir a arquitetura.

RNF015   Gestão de        Major Project     Alta – MVP   AWS Secrets Manager desde o dia 1.
          Segredos                                  Nunca usar .env em produção. Rotação
                                                            automática de credenciais de banco.

RNF016   Disaster          Major Project     Alta – MVP    Snapshots automáticos diários (checkbox
          Recovery e                                  no RDS). RPO 24h / RTO 4h. Testar
          Backups                                              restore antes do launch.

RNF017   IAM / Least        Major Project     Alta – MVP     Políticas IAM no Terraform. Auditar
            Privilege                                        permissões a cada novo serviço. Princípio
                                                     de menor privilégio absoluto.





                    Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 8 de 13

---

<!-- Página 9 de 13 -->

4. Decisões Técnicas Críticas para o MVP

4.1 Risco Principal: Fluxo de Descarte (RF010 → RF011 → RF012)

Este é o coração do produto e o maior vetor de risco técnico. Antes de qualquer planejamento de
sprint, executar um spike técnico de 3-5 dias com os seguintes objetivos:
     •   Validar que o scanner de código de barras funciona em ZXing-js nos 5 modelos de
       smartphone Android mais populares no Brasil (Motorola G series predomina em Manaus).
     •   Medir a precisão real do GPS do browser nesses dispositivos e calibrar o raio mínimo de
        validação de presença.
     •   Confirmar que a sequência câmera → GPS → transferência funciona em um fluxo contínuo
      sem recarregamento de página.
     •    Definir a estratégia de fallback: QR Code estático (RF013) entra como substituto, não como
       complemento.


4.2 Decisões de Stack Recomendadas

 Componente                   Decisão Recomendada

  Hosting                         Google Cloud Run ou AWS ECS Fargate. Evitar Lambda puro — cold
                                             start prejudica UX do mapa.

 Banco de Dados                  Cloud SQL (PostgreSQL) ou AWS RDS. Managed DB para delegar
                                     patching e alta disponibilidade.

  Autenticação                       NextAuth.js ou Supabase Auth. Não construir do zero. OAuth social
                                   reduz fricção de cadastro.

 Mapa                                   Leaflet.js + OpenStreetMap no MVP. Migrar para Google Maps API
                                somente se houver necessidade de funcionalidades avançadas.

 Scanner de Barras                  ZXing-js (primário) ou QuaggaJS (alternativa). Testar em hardware real
                                    antes do sprint.

  Object Storage             AWS S3 ou Google Cloud Storage com presigned URLs. Validação de
                           MIME type e limite de 5MB no backend.

  Monitoramento MVP              Logs JSON estruturados + Sentry para erros. UptimeRobot para
                                         disponibilidade. Datadog somente na V1.

  IaC                                Terraform. Nenhum recurso criado via console/ClickOps. Sem
                                   exceções.

 Segredos                AWS Secrets Manager ou Doppler. Nunca .env em produção.
                                     Configurar desde o primeiro deploy.



4.3 Escopo do MVP — O que NÃO entra

 Descartado do MVP: RF017 (Ranking social), RF029 (Export assíncrono), RF030 (Cold storage),
 RNF003 (Escalabilidade prematura), RNF007 (Offline-first), RNF011 (Adapters genéricos de
  integração), RNF013 (Pipeline CI/CD completo com SAST), RNF014 (Tracing distribuído).


Esses requisitos não foram eliminados do produto — foram reclassificados para V1 ou versões
futuras porque o problema que resolvem não existe no volume do MVP. Implementá-los agora
consumiria tempo de engenharia que deve estar concentrado no fluxo de descarte.



                      Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 9 de 13

---

<!-- Página 10 de 13 -->

Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 10 de 13

---

<!-- Página 11 de 13 -->

5. Roadmap de Priorização Recomendado

Sprint 1-2: Quick Wins (2-4 semanas)

Foco: entregar o esqueleto funcional com máximo valor e mínimo risco.
     •  RF001 + RF002: Cadastro e autenticação de usuário (PF).
     •   RF006: Perfil de usuário com histórico e pontuação.
     •  RF007 + RF008: Mapa com pontos de coleta e tela de detalhe.
     •   RF018: Dashboard do responsável pelo ponto.
     •  RF024 + RF025: Dashboard e gestão admin básica.
     •   RF014: Sistema de pontuação (lógica de cálculo e crédito).
     •  RNF004 + RNF008: UX de baixo atrito e performance validada por Lighthouse.
     •  RNF015 + RNF017: Secrets Manager e políticas IAM configuradas desde o início.
     •   RNF016: Backups automáticos no banco configurados via Terraform.


Sprint 3-5: Major Projects — Fluxo de Descarte (4-8 semanas)

  Pré-requisito obrigatório: Executar spike técnico de 3-5 dias (câmera + GPS em Android)
 ANTES de iniciar este bloco.


     •  RF003 + RF004 + RF005: Cadastro e aprovação de pontos de coleta (PF e CNPJ).
     •   RF010: Scanner de código de barras (validado no spike).
     •   RF011: Validação de presença por GPS com raio configurável.
     •   RF012: Transferência de resíduo ao ponto com transação ACID.
     •   RF019: Notificação automática de ponto cheio.
     •  RF021 + RF022: Painel da cooperativa e registro de pesagem.
     •   RF015: Sorteio simples com seleção aleatória e notificação por e-mail.
     •   RF028: Upload de mídia via presigned URLs.
     •   RNF001: PWA responsivo com câmera e GPS validado.
     •  RNF002 + RNF012: Infraestrutura cloud em containers com IaC.
     •  RNF005 + RNF006: LGPD e integridade de transações implementadas.


V1: Fill-ins (após MVP validado com usuários reais)

     •   RF009: Ponto de coleta temporário para eventos.
     •   RF013: QR Code como fallback para GPS.
     •   RF016: Histórico de pontuação consolidado.
     •   RF020: Gestão de horários e disponibilidade do ponto.
     •   RF023: Geração de nota/certificado de coleta em PDF.
     •   RF026: Gestão de campanhas (somente com parceiro comercial confirmado).
     •   RF027: Exportação de dados para parceiros.
     •   RNF009: Identidade visual consolidada em design tokens.
     •   RNF010: SLA formal de uptime com monitoramento avançado.


Versões Futuras: Time Wasters (somente com tração comprovada)

     •   RF017: Ranking e competições sociais entre pontos (após 1.000 MAUs).
     •   RF029: Exportação assíncrona de relatórios (após relatórios superarem 10k linhas).
     •   RF030: Auditoria em cold storage (após volume e auditoria regulatória justificarem).



                     Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 11 de 13

---

<!-- Página 12 de 13 -->

•   RNF003: Escalabilidade horizontal avançada (sharding, cache distribuído).
•   RNF007: Geolocalização em modo offline (substituído por QR Code no curto prazo).
•   RNF011: Adapters genéricos de integração (implementar conforme necessidade real).
•   RNF013: Pipeline CI/CD completo com SAST (ao contratar o segundo engenheiro).
•   RNF014: Tracing distribuído com Datadog/X-Ray (ao distribuir a arquitetura).





                 Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 12 de 13

---

<!-- Página 13 de 13 -->

6. Riscos e Mitigações

 #   Risco                    Probabilidade      Impacto              Mitigação

 1   Scanner/GPS                Alta                    Crítico — invalida o    Spike técnico obrigatório
      inconsistente em Android                        core do produto        antes do Sprint 3. QR Code
     de entrada                                               como fallback pronto para
                                                                                              ativar.

 2   Fraude no sistema de      Média                 Alto — destrói         Idempotency keys,
      pontos (manipulação de                          confiança do           transações ACID e audit log
       registros)                                     ecossistema           imutável desde o MVP.

 3   Não conformidade com      Alta (sem ação)       Crítico — risco legal    Contratar consultoria
    LGPD antes do launch                       e reputacional           jurídica de LGPD antes do
                                                                                launch. Criptografia at-rest
                                                                   desde o dia 1.

 4   Parceiros de voucher não    Alta               Médio — afeta      MVP usa sorteio simples
      confirmados no MVP                       RF015 e RF026      sem parceiro. RF026
                                                                     (campanhas) bloqueado até
                                                                                 parceiro confirmado.

 5   Over-engineering antes      Alta (sem             Alto — atrasa o       Time Wasters removidos do
     de validar o produto          disciplina)           launch sem retorno     backlog. Revisão de escopo
                                                                  a cada sprint.



   Documento elaborado com base no DLR V3.0 + análise de Matriz de Importância (Impacto × Esforço). Sistema
                                    Residuum · Manaus, 2025.





                     Sistema Residuum – DLR V4.0  | Confidencial  | Pág. 13 de 13
