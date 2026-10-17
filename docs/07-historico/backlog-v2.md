# Residuum_Backlog_v2


---

<!-- Página 1 de 4 -->

RESIDUUM
               Backlog Atualizado — Documento de Referência do Projeto
                                 Versão 2.0  • 07 de junho de 2026



1. Contexto e Base do Backlog

Este documento consolida o backlog completo do projeto Residuum, integrando as entregas realizadas (Sprints
1–5 conforme documento de análise de requisitos) com o roadmap de priorização recomendado para as
próximas fases. Todas as entregas têm base no documento de análise de requisitos.


Premissa central: Motor de pontuação (Gift-Back) distribui pontos apenas após a cooperativa registrar a
pesagem, dividindo proporcionalmente o valor do resíduo entre os pontos de coleta participantes.

2. Status das Entregas por Sprint (Sprints 1–5)

Mapeamento fiel ao documento de análise de requisitos. Itens marcados como ✅ Done foram entregues
conforme os respectivos sprints.


Sprint 1 — 01/05: Estrutura e Fundação [ENTREGUE]

     •   RF001/RF002 – Páginas principais (Login, Registro, Home)
     •   RNF005 – Esquematização do banco de dados com escalabilidade e LGPD
     •   RNF002 – Esquematização do backend com arquitetura Cloud
     •   RNF004/RNF008 – Definição de UI/UX e identidade visual com foco em usabilidade digital


Sprint 2 — 08/05: Autenticação, Usuários e Mapa [ENTREGUE]

     •   RF001–RF004 – Sistema de login/registro básico (PF e CNPJ)
     •   RF007/RF008 – Integração com maps, filtrável por resíduo e georreferenciado
     •   RF006 – Painel de Perfil do Usuário (histórico e pontuação) [backend parcial]


Sprint 3 — 15/05: Fluxo de Descarte e Validação no Ponto [ENTREGUE]

     •  RF – Sistema de inventário de resíduos do usuário
     •   RF010/RF007 – Validação de presença por GPS
     •  RF – Bloqueio de confirmações de descarte remoto
     •   RF013 – Scanner + validação alternativa por QR Code
     •   RF012 – Transferência de estoque com validação de tipo e quantidade [backend parcial]


Sprint 4 — 22/05: Painel de Administração e Gestão do Ponto [ENTREGUE]

---

<!-- Página 2 de 4 -->

•  RF – Dashboard Administrativo (Residuum) básico (RF005/RN002)
     •   RF018 – Dashboard do Responsável pelo Ponto (capacidade, status, resíduos acumulados)
     •   RF020 – Sistema de gestão de horários e disponibilidade do ponto
     •   RF019 – Gatilho de notificação automática de Ponto Cheio
     •   RF009/RF007 – Lógica de pontos temporários para eventos


Sprint 5 — 29/05: Cooperativas, Gamificação e Dashboard Final [ENTREGUE]

     •   RF021 – Painel da Cooperativa/Associação com mapa e capacidades
     •   RF022 – Sistema de registro de coleta e custo real dos resíduos
     •   RF014 – Sistema de Pontuação Gift-Back (distribui após pesagem da cooperativa)

---

<!-- Página 3 de 4 -->

3. Backlog Completo — Priorizado por Fase

Tabela mestre com todos os itens funcionais (RF) e não-funcionais (RNF), organizados pelo roadmap de
priorização recomendado.


      ID           Nome / Descrição          Tipo     Sprint     Status    Prioridade

🚀 SPRINT 1–2: Quick Wins — Fundação Funcional (Semanas 1–4)

 RF001+RF002  Cadastro e autenticação de usuário    RF        Sprint 1  ✅ Done 🔴 Crítico
                 (PF) – Login, Registro, Página Home

 RF006             Perfil do usuário com histórico e      RF        Sprint 1  ✅ Done 🔴 Crítico
                pontuação (frontend + backend)

 RF007+RF008  Mapa de pontos de coleta + tela de    RF        Sprint 1  ✅ Done 🔴 Crítico
                  detalhe com filtros por resíduo e
                   distância

 RF018         Dashboard do responsável pelo ponto  RF        Sprint 1  ✅ Done 🟠 Alto
               – status, resíduos acumulados

 RF024+RF025  Dashboard e gestão admin básica     RF        Sprint 1  ✅ Done 🟠 Alto
                  (aprovação/rejeição de pontos e
                  usuários)

 RF014         Sistema de pontuação – lógica de     RF        Sprint 2  ✅ Done 🔴 Crítico
                   cálculo e crédito (Gift-Back)

 RNF004      UX de baixo atrito – usabilidade      RNF      Sprint 1  ✅ Done 🟠 Alto
                  validada em foco digital (azul, cinza,
                  verde)

 RNF008        Performance validada por Lighthouse  RNF      Sprint 1  ✅ Done 🟡 Médio

 RNF015        Secrets Manager configurado desde o  RNF      Sprint 1  ✅ Done 🔴 Crítico
                      início

 RNF017          Políticas IAM configuradas         RNF      Sprint 1  ✅ Done 🔴 Crítico

 RNF016       Backups automáticos no banco via    RNF      Sprint 1  ✅ Done 🟠 Alto
                 Terraform

🔧 SPRINT 3–5: Major Projects — Fluxo de Descarte (Semanas 5–12) [PRÉ-
 REQ: Spike técnico 3–5 dias]

 RF003+RF004  Cadastro de pontos de coleta – PF e   RF        Sprint 3  ✅ Done 🔴 Crítico
             CNPJ – com aprovação pela
                 Cooperativa

 RF005          Aprovação/rejeição de novos pontos   RF        Sprint 3  ✅ Done 🔴 Crítico
                  pelo admin (RF005 / RN002)

 RF010         Scanner de código de barras        RF        Sprint 3  ✅ Done 🔴 Crítico
                   (validado no spike técnico)

 RF011          Validação de presença por GPS com   RF        Sprint 3  ✅ Done 🟠 Alto
                    raio configurável

 RF012          Transferência de resíduo ao ponto    RF        Sprint 3  ✅ Done 🔴 Crítico
             com transação ACID

 RF019           Notificação automática de ponto cheio  RF        Sprint 4  ✅ Done 🟠 Alto
                 para a cooperativa

 RF021          Painel da cooperativa – visualização   RF        Sprint 5  ✅ Done 🟠 Alto
               do mapa e capacidades

 RF022          Registro de pesagem e validação do   RF        Sprint 5  ✅ Done 🔴 Crítico
                 custo real dos resíduos

 RF015           Sorteio simples com seleção aleatória  RF        Sprint 4  ✅ Done 🟡 Médio
               e notificação por e-mail

---

<!-- Página 4 de 4 -->

ID           Nome / Descrição          Tipo     Sprint     Status    Prioridade

RF028         Upload de mídia via presigned URLs   RF        Sprint 4  ✅ Done 🟡 Médio

RNF001     PWA responsivo com câmera e GPS   RNF      Sprint 3  ✅ Done 🔴 Crítico
                 validado

RNF002          Infraestrutura cloud em containers    RNF      Sprint 3  ✅ Done 🔴 Crítico

RNF012        IaC (Terraform) – provisionamento    RNF      Sprint 3  ✅ Done 🟠 Alto
               completo

RNF005      LGPD – criptografia de dados       RNF      Sprint 3  ✅ Done 🔴 Crítico
                pessoais e gestão de consentimento

RNF006         Integridade de transações de estoque  RNF      Sprint 3  ✅ Done 🔴 Crítico

📦 V1: Fill-ins — Após MVP Validado com Usuários Reais

RF009         Ponto de coleta temporário para      RF     V1     ⏳    🟡 Médio
                eventos                                                  Backlog

RF013      QR Code como fallback para GPS    RF     V1     ⏳    🟡 Médio
                                                                        Backlog

RF016           Histórico de pontuação consolidado    RF     V1     ⏳    🟡 Médio
                                                                        Backlog

RF020         Gestão de horários e disponibilidade   RF     V1     ⏳    🟡 Médio
              do ponto                                                 Backlog

RF023         Geração de nota/certificado de coleta  RF     V1     ⏳    🟡 Médio
           em PDF                                                  Backlog

RF026         Gestão de campanhas (apenas com   RF     V1     ⏳    🟠 Alto
                 parceiro comercial confirmado)                              Backlog

RF027         Exportação de dados para parceiros   RF     V1     ⏳    🟡 Médio
                                                                        Backlog

RNF009         Identidade visual consolidada em     RNF    V1     ⏳    🟡 Médio
                design tokens                                             Backlog

RNF010      SLA formal de uptime com         RNF    V1     ⏳    🟠 Alto
               monitoramento avançado                                   Backlog

🔮 Versões Futuras: Time Wasters — Somente com Tração Comprovada

RF017         Ranking e competições sociais (após   RF       Futuro   ⏳    🟢 Baixo
                1.000 MAUs)                                           Congelado

RF029         Exportação assíncrona de relatórios   RF       Futuro   ⏳    🟢 Baixo
                (após > 10k linhas)                                      Congelado

RF030           Auditoria em cold storage (após      RF       Futuro   ⏳    🟢 Baixo
              volume regulatório justificar)                               Congelado

RNF003         Escalabilidade horizontal avançada –  RNF     Futuro   ⏳    🟢 Baixo
                 sharding, cache distribuído                                Congelado

RNF007        Geolocalização offline (substituído por  RNF     Futuro   ⏳    🟢 Baixo
          QR Code no curto prazo)                                 Congelado

RNF011        Adapters genéricos de integração     RNF     Futuro   ⏳    🟢 Baixo
                (implementar conforme necessidade                        Congelado
                   real)

RNF013         Pipeline CI/CD completo com SAST   RNF     Futuro   ⏳    🟢 Baixo
                (ao contratar 2º engenheiro)                               Congelado

RNF014        Tracing distribuído com Datadog/X-    RNF     Futuro   ⏳    🟢 Baixo
             Ray (ao distribuir a arquitetura)                            Congelado
