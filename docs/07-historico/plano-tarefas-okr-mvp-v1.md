# Residuum_Plano_Tasks_OKR_MVP


---

<!-- Página 1 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



      SISTEMA RESIDUUM
              Plano de Tasks por Módulo
                Metodologia OKR · Sprint 1–5 · Entrega: 30/06/2026
                            Startup Residuum | Manaus – AM | Junho 2026



                           CONFIDENCIAL · Versão 1.0





Residuum · Manaus 2026                                                                             Página 1 de 21

---

<!-- Página 2 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


Sumário

Sumário ......................................................................................................................................................... 2
1. Visão Geral do Plano de Entrega ............................................................................................................. 4
  1.1 Resumo de Sprints e Horizonte de Entrega ........................................................................................ 4
  1.2 Legenda de Quadrantes (Matriz Impacto × Esforço) .......................................................................... 4
2. Módulo M1: Cadastro e Autenticação ....................................................................................................... 5
 OKR do Módulo ......................................................................................................................................... 5
  Tasks ......................................................................................................................................................... 5
  Detalhamento das Subtasks ..................................................................................................................... 6
3. Módulo M2: Mapa e Pontos de Coleta ...................................................................................................... 7
 OKR do Módulo ......................................................................................................................................... 7
  Tasks ......................................................................................................................................................... 7
  Detalhamento das Subtasks ..................................................................................................................... 7
4. Módulo M3: Registro de Descarte ............................................................................................................ 9
 OKR do Módulo ......................................................................................................................................... 9
  Tasks ......................................................................................................................................................... 9
  Detalhamento das Subtasks ................................................................................................................... 10
5. Módulo M4: Gamificação e Recompensas ............................................................................................. 11
 OKR do Módulo ....................................................................................................................................... 11
  Tasks ....................................................................................................................................................... 11
  Detalhamento das Subtasks ................................................................................................................... 11
6. Módulo M5: Painel do Ponto de Coleta .................................................................................................. 13
 OKR do Módulo ....................................................................................................................................... 13
  Tasks ....................................................................................................................................................... 13
  Detalhamento das Subtasks ................................................................................................................... 13
7. Módulo M6: Painel da Cooperativa / Associação ................................................................................... 15
 OKR do Módulo ....................................................................................................................................... 15
  Tasks ....................................................................................................................................................... 15
  Detalhamento das Subtasks ................................................................................................................... 15
8. Módulo M7: Dashboard Administrativo (Residuum) ............................................................................... 17
 OKR do Módulo ....................................................................................................................................... 17
  Tasks ....................................................................................................................................................... 17
  Detalhamento das Subtasks ................................................................................................................... 17
9. Módulo M8: Infraestrutura Cloud e IaC ................................................................................................... 19
 OKR do Módulo ....................................................................................................................................... 19
  Tasks ....................................................................................................................................................... 19
  Detalhamento das Subtasks ................................................................................................................... 19
10. Riscos Globais e Mitigações ................................................................................................................. 21





Residuum · Manaus 2026                                                                             Página 2 de 21

---

<!-- Página 3 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


  Itens Fora do Escopo do MVP (Time Wasters) ....................................................................................... 21





Residuum · Manaus 2026                                                                             Página 3 de 21

---

<!-- Página 4 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


1. Visão Geral do Plano de Entrega

Este documento desdobra os requisitos funcionais e não-funcionais do DLR V4.0 em tasks concretas,
organizadas por módulo, com objetivos OKR, datas de entrega e responsáveis. O prazo final de entrega
do MVP é 30/06/2026.


1.1 Resumo de Sprints e Horizonte de Entrega

      Sprint              Foco                     Início             Fim            Módulos

                                                                             M1, M2, M5
                   Quick Wins — Esqueleto
    Sprint 1–2                                02/06/2026          15/06/2026             (parcial), M7, M8
                      funcional
                                                                                           (base)

                   Major Projects — Fluxo                                         M3, M4, M6, M8
    Sprint 3–5                                16/06/2026          30/06/2026
                 de descarte                                                           (completo)

                                                                              RF009, RF013,
                           Fill-ins — Após validação                                        RF016, RF020,
  V1 (pós-MVP)                                Jul/2026            Ago/2026
               com usuários                                                  RF023, RF026,
                                                                        RF027

                                                                              RF017, RF029,
                 Time Wasters — Com
     Futuro                             Pós 1k MAUs    —                RF030, RNF003,
                     tração comprovada
                                                                     RNF007



1.2 Legenda de Quadrantes (Matriz Impacto × Esforço)

 ⚡ Quick Win Alto impacto   🏗 Major Project Alto   📌 Fill-in Baixo impacto ·    ⚠ Time Waster Baixo
           · Baixo esforço          impacto · Alto esforço           Baixo esforço           impacto · Alto esforço





Residuum · Manaus 2026                                                                             Página 4 de 21

---

<!-- Página 5 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


2. Módulo M1: Cadastro e Autenticação

             Sprint 1–2 (Quick Wins)



OKR do Módulo

                      Entregar fluxo de cadastro e autenticação funcional com atrito mínimo,
     OBJECTIVE       garantindo que qualquer usuário consiga se registrar e acessar o sistema
                      antes do lançamento do MVP.

                   100% dos fluxos de cadastro (PF, Ponto CPF, Ponto CNPJ) funcionando end-to-end até
       KR1
                         10/06/2026.

                     Taxa de conclusão do cadastro ≥ 80% nos testes com 5 usuários representativos (perfil
       KR2
                             periférico Manaus).

       KR3         Tempo médio de cadastro PF ≤ 2 minutos (do primeiro campo ao perfil ativo).

                       Zero dados sensíveis (CPF, localização) trafegando sem criptografia — auditado antes
       KR4
                     do deploy.



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

          Cadastro de Usuário                                             Dev Frontend +
  T1.1                               Quick Win        Alta – MVP     10/06/2026
        PF (RF001)                                                      Backend

           Login e Autenticação
  T1.2                               Quick Win        Alta – MVP     10/06/2026   Dev Backend
          segura (RF002)

              Perfil de Usuário —
  T1.3    visualização e edição        Quick Win        Alta – MVP     13/06/2026   Dev Frontend
          (RF006)

          Cadastro de Ponto de
  T1.4    Coleta PF (RF003) —       Major Project       Alta – MVP     15/06/2026   Dev Full-Stack
           Formulário

          Cadastro de Ponto de
  T1.5    Coleta CNPJ (RF004)      Major Project       Alta – MVP     15/06/2026   Dev Full-Stack
     — Validação

          Aprovação de Pontos
  T1.6                               Major Project       Alta – MVP     17/06/2026   Dev Backend + QA
           pelo Admin (RF005)

           Configuração Secrets
  T1.7    Manager + IAM            Major Project       Alta – MVP     09/06/2026   DevOps / Eng. Pleno
          (RNF015, RNF017)

        LGPD — criptografia
           CPF/localização e                                              Dev Backend +
  T1.8                               Major Project       Alta – MVP     12/06/2026
          consentimento                                                                  Jurídico
          (RNF005)





Residuum · Manaus 2026                                                                             Página 5 de 21

---

<!-- Página 6 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

         Modelar schema users, auth_sessions,
   1                                                               0,5 dia   —
           collection_points no banco

         Implementar formulário PF com validação client-side
   2                                                     1 dia      Schema DB
         (nome, email, telefone, endereço)

          Configurar NextAuth.js / Supabase Auth com
   3                                                     1 dia      Schema DB
         email+senha e recuperação

          Tela de perfil: histórico, pontuação, recompensas
   4                                                               0,5 dia       T1.2
          (queries de leitura)

          Formulário de solicitação de ponto (PF/CNPJ) + fila
   5                                                               1,5 dia       T1.1
        de aprovação no banco

   6     Validação de CNPJ via Receita WS (API pública)           0,5 dia       T1.4

           Interface admin: revisar, aprovar/rejeitar ponto +
   7                                                     1 dia        T1.4, T1.5
           notificação e-mail ao solicitante

          Configurar AWS Secrets Manager e políticas IAM no
   8                                                     1 dia        Terraform base
          Terraform (sem console/ClickOps)

         Implementar criptografia AES-256 at-rest para CPF
   9                                                               0,5 dia      Schema DB
        e coordenadas GPS

           Criar fluxo de consentimento granular (coleta, uso,
   10                                                               0,5 dia       T1.1
          compartilhamento)

         Teste de usabilidade com 5 usuários + ajuste de
   11                                                     1 dia        T1.1, T1.2, T1.3
             atrito no cadastro (RNF004)





Residuum · Manaus 2026                                                                             Página 6 de 21

---

<!-- Página 7 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


3. Módulo M2: Mapa e Pontos de Coleta

             Sprint 1–2 (Quick Wins)



OKR do Módulo

                       Publicar mapa interativo com pontos de coleta ativos, filtrável e responsivo,
     OBJECTIVE
                     entregando o principal ponto de valor visual do Residuum no MVP.

                   Mapa carregando com todos os pontos ativos em < 3 segundos em conexão 4G
       KR1
                         (Lighthouse ≥ 70) até 13/06/2026.

       KR2              Filtro por tipo de resíduo e distância funcionando em 100% dos cenários de teste.

                        Tela de detalhe do ponto exibindo endereço, horário, tipos aceitos, quantidade
       KR3
                      acumulada e status.

       KR4           Compatibilidade validada em Chrome/Firefox mobile nos dispositivos Motorola G series.



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

        Mapa Georreferenciado
        com Leaflet +
  T2.1                               Quick Win        Alta – MVP     13/06/2026   Dev Frontend
          OpenStreetMap
          (RF007)

           Visualização de
  T2.2    Detalhe do Ponto de         Quick Win        Alta – MVP     14/06/2026   Dev Frontend
           Coleta (RF008)

           Validação PWA —
  T2.3    câmera e GPS em          Major Project       Alta – MVP     18/06/2026   Dev Full-Stack + QA
        modo PWA (RNF001)

          Performance: lazy
           loading + CDN +                                                Dev Frontend +
  T2.4                               Quick Win        Alta – MVP     15/06/2026
           Lighthouse gate CI                                             DevOps
          (RNF008)

          Ponto de Coleta
  T2.5    Temporário com                     Fill-in         Média – V1     25/06/2026   Dev Backend
           expires_at (RF009)



Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

           Instalar Leaflet.js e integrar tiles OpenStreetMap no
   1                                                               0,5 dia       Setup frontend
           projeto





Residuum · Manaus 2026                                                                             Página 7 de 21

---

<!-- Página 8 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

         Endpoint GET /collection-points retornando lat/lng,
   2                                                               0,5 dia      Schema DB (M1)
            tipo, status

          Renderizar marcadores no mapa com ícones por
   3                                                               0,5 dia       T2.1 backend
            tipo de resíduo

             Filtro client-side por tipo de resíduo e distância do
   4                                                     1 dia        T2.1
          usuário

          Tela de detalhe: endereço, horário, tipos aceitos, kg
   5                                                               0,5 dia       T2.1
         acumulado, status

          Testar câmera (ZXing-js) e GPS em modo PWA nos
   6                                                            3-5 dias       Pré-Sprint 3
        5 modelos Android alvo (spike)

          Configurar lazy loading de imagens e compressão
   7                                                               0,5 dia       T2.1
           via CDN

          Adicionar Lighthouse como gate no GitHub Actions
   8                                                               0,5 dia       CI base
          (score mín. 70)

          Adicionar campo expires_at e cron de desativação
   9                                                               0,5 dia       T2.2
          automática de pontos temporários





Residuum · Manaus 2026                                                                             Página 8 de 21

---

<!-- Página 9 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


4. Módulo M3: Registro de Descarte

            Sprint 3–5 (Major Projects)



OKR do Módulo

                      Entregar o fluxo core do produto — scanner de código de barras + validação
     OBJECTIVE     GPS + transferência de resíduo — com integridade transacional e fallback QR
                        funcional.

                      Scanner ZXing-js funcionando em ≥ 4 dos 5 modelos Android testados no spike (taxa de
       KR1
                               leitura ≥ 90%).

                        Validação GPS com raio de 100m confirmando presença em 100% dos testes de campo
       KR2
                     no MVP.

                       Zero inconsistências de pontuação registradas nos primeiros 30 dias (transações ACID
       KR3
                   com idempotency key).

                          Fallback QR Code (RF013) ativado e testado como substituto do GPS em cenário de
       KR4
                             sinal instável.



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

         SPIKE TÉCNICO:
  T3.1    Scanner + GPS em         Major Project       Alta – MVP     20/06/2026   Dev Full-Stack Sênior
           Android (pré-requisito)

            Leitura de Código de
  T3.2    Barras 1D/QR via          Major Project       Alta – MVP     22/06/2026   Dev Frontend
           ZXing-js (RF010)

           Validação de Presença
  T3.3    por GPS com raio          Major Project       Alta – MVP     23/06/2026   Dev Full-Stack
            configurável (RF011)

           Transferência de
          Resíduo ao Ponto —
  T3.4                               Major Project       Alta – MVP     25/06/2026   Dev Backend Sênior
           transação ACID
          (RF012)

          Upload de Mídia via
                                                                     Dev Backend +
  T3.5    Presigned URLs —         Major Project       Alta – MVP     24/06/2026
                                                                    DevOps
         S3/GCS (RF028)

           Integridade de
          Transações:
  T3.6                               Major Project       Alta – MVP     25/06/2026   Dev Backend
          idempotency keys +
            audit log (RNF006)

       QR Code estático por
  T3.7    ponto como fallback                Fill-in         Média – V1     28/06/2026   Dev Full-Stack
       GPS (RF013)





Residuum · Manaus 2026                                                                             Página 9 de 21

---

<!-- Página 10 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial




Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

          Testar ZXing-js em Motorola G7, G9, G20, G32 e
   1                                                     3 dias    —
        Samsung A-series — documentar resultados

         Medir precisão GPS do browser em cada modelo e
   2                                                     2 dias       Spike dia 1-2
           calibrar raio mínimo

          Confirmar fluxo câmera → GPS → transferência
   3                                                     1 dia        Spike
       sem recarregamento de página

           Integrar ZXing-js no componente de descarte,
   4                                                               1,5 dia       T3.1
           validar leitura EAN-13 e QR

         Implementar geofencing client-side: verificar
   5                                                     1 dia        T3.1
           distância usuário → ponto (haversine)

         Endpoint POST /discard-session com idempotency
   6                                                     1 dia        T3.3
         key no header

         Transação ACID: débito de estoque no ponto +
   7      crédito de pontos ao usuário em uma operação             1,5 dia       T3.4
         atômica

          Configurar bucket S3/GCS com CORS, presigned
   8                                                     1 dia      RNF015
       URL e validação MIME type (limite 5MB)

          Audit log imutável: registrar stack trace em toda
   9                                                               0,5 dia       T3.4
         operação de crédito/débito

         Gerar QR Code estático por ponto e ativar como
   10                                                               0,5 dia       T3.2
           rota alternativa de descarte





Residuum · Manaus 2026                                                                            Página 10 de 21

---

<!-- Página 11 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


5. Módulo M4: Gamificação e Recompensas

            Sprint 3–5 (Major Projects)



OKR do Módulo

                      Engajar usuários no comportamento de descarte correto por meio de
     OBJECTIVE      pontuação proporcional e sorteio simples, sem dependência de parceiros
                      comerciais no MVP.

                   100% dos descartes confirmados gerando crédito de pontos automaticamente via
       KR1
                        evento assíncrono até 25/06/2026.

                          Sorteio executável pelo admin com seleção aleatória auditável e notificação por e-mail
       KR2
                      aos ganhadores.

                       Zero duplo-crédito de pontos registrado em testes de stress (idempotency key garantido
       KR3
                         pelo RF012).

       KR4            Histórico de pontuação disponível na tela de perfil até 28/06/2026.



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

          Sistema de Pontuação
  T4.1    Gift-Back — lógica de        Quick Win        Alta – MVP     20/06/2026   Dev Backend
            cálculo (RF014)

            Sorteio simples com
           seleção aleatória +                                              Dev Backend + Dev
  T4.2                               Major Project       Alta – MVP     25/06/2026
            notificação e-mail                                                       Frontend
          (RF015)

            Histórico de Pontuação
  T4.3  — extrato de                          Fill-in         Média – V1     28/06/2026   Dev Frontend
           transações (RF016)

          Ranking e Competições                              Pós 1.000
  T4.4                             Time Waster     Baixa – Futuro             A definir
           entre Pontos (RF017)                            MAUs



Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

           Definir fórmula de pontuação: pontos = f(kg
   1                                                               0,5 dia      RF022 (pesagem)
          confirmado, tipo de resíduo)

         Implementar event listener assíncrono: ao confirmar
   2                                                     1 dia        T4.1, RF012
        pesagem → calcular → creditar





Residuum · Manaus 2026                                                                            Página 11 de 21

---

<!-- Página 12 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

           Criar tabela point_transactions com campos:
   3     user_id, amount, source, idempotency_key,                0,5 dia      Schema DB
          created_at

           Interface admin para criar sorteio: definir pool de
   4      elegíveis, executar seleção aleatória                       1,5 dia       T4.1
          (crypto.random)

         Envio de e-mail transacional para ganhador(es) via
   5                                                               0,5 dia       T4.2
         SendGrid/SES

         Query de extrato: SELECT point_transactions
   6                                                               0,5 dia       T4.1
      WHERE user_id = ? ORDER BY created_at DESC

           Exibir extrato na tela de perfil (RF006) sem tela
   7                                                               0,5 dia        T4.3, T1.3
         separada





Residuum · Manaus 2026                                                                            Página 12 de 21

---

<!-- Página 13 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


6. Módulo M5: Painel do Ponto de Coleta

                 Sprint 1–2 e 3–5



OKR do Módulo

                     Prover ao responsável pelo ponto uma visão operacional em tempo real dos
     OBJECTIVE       resíduos acumulados e disparar alertas automáticos quando o ponto atingir
                     capacidade máxima.

                      Dashboard do ponto exibindo resíduos por tipo, usuários ativos e histórico de coletas
       KR1
                          até 14/06/2026.

                          Notificação automática de ponto cheio entregue em < 5 minutos após atingir threshold
       KR2
                          configurado.

       KR3           Threshold configurável por ponto sem necessidade de deploy (configuração no banco).

                      Gestão de horários e disponibilidade integrada ao dashboard (sem tela separada) até
       KR4
                         28/06/2026.



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

          Dashboard do
          Responsável pelo                                               Dev Frontend +
  T5.1                               Quick Win        Alta – MVP     14/06/2026
          Ponto — queries de                                                Backend
             leitura (RF018)

            Notificação automática
         de Ponto Cheio via
  T5.2                               Major Project       Alta – MVP     22/06/2026   Dev Backend
             trigger no banco
          (RF019)

          Gestão de Horários e
  T5.3    Disponibilidade do                  Fill-in         Média – V1     28/06/2026   Dev Frontend
          Ponto (RF020)



Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

         Endpoints GET /points/:id/stats retornando resíduos
   1                                                     1 dia      Schema DB
         acumulados por tipo e período

          Frontend: dashboard com cards de KPI (kg
   2                                                     1 dia        T5.1 backend
         acumulado, usuários ativos, última coleta)

         Tabela de histórico de coletas paginada (últimas 50
   3                                                               0,5 dia       T5.1 backend
          entradas)





Residuum · Manaus 2026                                                                            Página 13 de 21

---

<!-- Página 14 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

          Trigger no banco: ao INSERT/UPDATE stock →
   4                                                     1 dia        T3.4
            verificar threshold → emitir evento

         Consumidor do evento: enviar e-mail transacional
   5                                                               0,5 dia       T5.2 trigger
         para cooperativa responsável

           Interface de configuração do threshold (campo
   6                                                               0,5 dia       T5.1
           editável no painel do ponto)

      CRUD de horários de funcionamento integrado ao
   7                                                               0,5 dia       T5.1
         dashboard do ponto





Residuum · Manaus 2026                                                                            Página 14 de 21

---

<!-- Página 15 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


7. Módulo M6: Painel da Cooperativa / Associação

            Sprint 3–5 (Major Projects)



OKR do Módulo

                     Equipar cooperativas e associações de catadores com ferramentas para
     OBJECTIVE        visualizar rotas, registrar coletas e pesagens, e ter os dados necessários para
                        otimizar logística.

                   Mapa da cooperativa exibindo todos os pontos com filtro por status (ativo, cheio, inativo)
       KR1
                          até 22/06/2026.

                        Fluxo de registro de pesagem funcionando com distribuição automática de pontos aos
       KR2
                         usuários via transação ACID.

       KR3           Exportação CSV de coletas disponível para uso manual pelo operador no MVP.

                   100% das pesagens registradas gerando audit log rastreável (quem, quando, quanto,
       KR4
                         qual ponto).



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

        Mapa de Pontos da
                                                                     Dev Frontend +
  T6.1    Cooperativa com filtro      Major Project       Alta – MVP     22/06/2026
                                                                         Backend
           por status (RF021)

           Registro de Coleta e
  T6.2   Pesagem — transação     Major Project       Alta – MVP     24/06/2026   Dev Backend Sênior
         ACID (RF022)

          Exportação CSV de
  T6.3    coletas / Certificado                 Fill-in         Média – V1     28/06/2026   Dev Backend
        PDF (RF023)



Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

         Endpoint GET /cooperatives/:id/points retornando
   1                                                     1 dia      M2 mapa
         pontos com lat/lng, kg acumulado, status

          Renderizar mapa da cooperativa com marcadores
   2                                                               0,5 dia       T6.1 backend
          diferenciados por status (cor/ícone)

   3       Filtro client-side: Todos | Ativo | Cheio | Inativo              0,5 dia       T6.1 frontend

          Formulário de registro de pesagem: selecionar
   4                                                     1 dia        T6.1
          ponto, tipo de resíduo, kg coletado





Residuum · Manaus 2026                                                                            Página 15 de 21

---

<!-- Página 16 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

         Transação ACID: zerar estoque do ponto + distribuir
   5                                                     2 dias        T4.1, T6.2 form
         pontos proporcionais aos usuários que descartaram

         Endpoint GET /collections/export?format=csv
   6                                                               0,5 dia       T6.2
          retornando CSV de coletas por período

       PDF do certificado de coleta com jsPDF (V1, pós-
   7                                                     1 dia        T6.3 CSV
       MVP)





Residuum · Manaus 2026                                                                            Página 16 de 21

---

<!-- Página 17 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


8. Módulo M7: Dashboard Administrativo (Residuum)

             Sprint 1–2 (Quick Wins)



OKR do Módulo

                    Dar à equipe Residuum visibilidade operacional completa do ecossistema e
     OBJECTIVE       controle administrativo sobre usuários, pontos e dados, desde o primeiro dia
                   de operação.

                      Dashboard consolidado com KPIs operacionais (usuários ativos, kg por tipo, pontos
       KR1
                       próximos do limite) até 14/06/2026.

                CRUD admin de usuários e pontos funcional com React Admin customizado até
       KR2
                         15/06/2026.

       KR3           Exportação CSV de dados disponível para uso por parceiros até 28/06/2026.

                      Gestão de campanhas bloqueada até confirmação de ao menos 1 parceiro comercial
       KR4
                          (gate de produto).



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

          Dashboard
                                                                     Dev Frontend +
  T7.1    Consolidado de KPIs        Quick Win        Alta – MVP     14/06/2026
                                                                         Backend
           operacionais (RF024)

          Gestão Admin de
  T7.2    Usuários e Pontos com      Quick Win        Alta – MVP     15/06/2026   Dev Frontend
          React Admin (RF025)

          Exportação de Dados
  T7.3    para Parceiros — CSV             Fill-in         Média – V1     28/06/2026   Dev Backend
          (RF027)

                                                        Após
          Gestão de Campanhas
  T7.4                                                Fill-in         Média – V1      parceiro    Dev Full-Stack
         e Promoções (RF026)
                                                              confirmado



Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

         Endpoint GET /admin/stats: total usuários, kg por
   1                                                     1 dia      Schema DB
           tipo/período, pontos próximos do limite

         Cards visuais de KPI no dashboard admin com
   2                                                     1 dia        T7.1 backend
          atualização a cada 5 min





Residuum · Manaus 2026                                                                            Página 17 de 21

---

<!-- Página 18 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

       Mapa de pontos ativos embutido no dashboard
   3                                                               0,5 dia      M2, T7.1
         admin (reaproveitando componente M2)

           Instalar React Admin e conectar ao data provider
   4                                                     1 dia       API base
           interno (REST API)

         Customizar resource de usuários: listar, editar,
   5                                                               0,5 dia       T7.2 base
         suspender, ativar

         Customizar resource de pontos: listar, editar,
   6                                                               0,5 dia       T7.2 base, RF005
          aprovar, rejeitar, desativar

         Endpoint GET
   7     /admin/export?resource=collections&format=csv            0,5 dia       T6.2
       com filtros por período

         Modelar tabela campaigns e tela de CRUD (apenas
   8                                                               1,5 dia      Gate comercial
         após parceiro comercial confirmado)





Residuum · Manaus 2026                                                                            Página 18 de 21

---

<!-- Página 19 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


9. Módulo M8: Infraestrutura Cloud e IaC

             Sprint 1–5 (transversal)



OKR do Módulo

                       Provisionar infraestrutura cloud escalável, segura e 100% declarativa via
     OBJECTIVE       Terraform, garantindo zero ClickOps, backups automáticos e pipeline CI/CD
                      operacional antes do lançamento.

                   100% dos recursos cloud provisionados via Terraform — nenhum recurso criado
       KR1
                      manualmente no console.

                     Backup automático diário configurado com RPO 24h e RTO 4h testado via restore antes
       KR2
                     do launch (até 26/06/2026).

       KR3            Pipeline GitHub Actions com lint + test + deploy executando em < 10 minutos por push.

       KR4           Sentry configurado capturando 100% dos erros em produção desde o primeiro deploy.



Tasks

   ID             Tarefa           Quadrante      Prioridade      Entrega        Responsável

            Infraestrutura Cloud
         Run/ECS Fargate +
  T8.1    Cloud SQL/RDS via        Major Project       Alta – MVP     10/06/2026   DevOps / Eng. Pleno
           Terraform (RNF002,
         RNF012)

          Backups automáticos +
  T8.2     teste de restore            Major Project       Alta – MVP     26/06/2026   DevOps
          (RNF016)

            Pipeline CI/CD básico:
                                                                    DevOps + Dev
  T8.3      lint + test + deploy          Major Project       Alta – MVP     12/06/2026
                                                                         Backend
           (GitHub Actions)

           Monitoramento: logs
                                                                    DevOps + Dev
  T8.4   JSON estruturados +       Major Project       Alta – MVP     14/06/2026
                                                                         Backend
           Sentry + UptimeRobot



Detalhamento das Subtasks

   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

           Criar módulos Terraform: VPC, Cloud Run service,
   1                                                     2 dias       Conta cloud ativa
         Cloud SQL PostgreSQL, IAM roles

          Configurar variáveis de ambiente via Secrets
   2                                                               0,5 dia       T8.1
        Manager (nunca .env em produção)





Residuum · Manaus 2026                                                                            Página 19 de 21

---

<!-- Página 20 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial



   #             Subtarefa / Critério de Aceitação             Esforço            Dependência

           Habilitar snapshots automáticos diários no
   3                                                               0,5 dia       T8.1
        RDS/Cloud SQL via Terraform

         Executar teste de restore em ambiente staging e
   4                                                               0,5 dia       T8.2 snapshots
         documentar RTO real

          Configurar GitHub Actions: workflow de lint (ESLint),
   5                                                     1 dia        Repositório configurado
            test (Jest) e deploy em push para main

          Adicionar gate Lighthouse (score ≥ 70) no workflow
   6                                                               0,5 dia       T8.3
        de CI

          Configurar logs JSON estruturados no backend
   7                                                               0,5 dia       T8.1
          (Pino/Winston com correlationId)

           Instalar Sentry SDK no frontend e backend com
   8                                                               0,5 dia       T8.1
           alertas de error rate

          Configurar UptimeRobot para monitorar endpoints
   9                                                               0,5 dia       Deploy inicial
            críticos (/, /health, /api/stats)





Residuum · Manaus 2026                                                                            Página 20 de 21

---

<!-- Página 21 de 21 -->

SISTEMA RESIDUUM  · Plano de Tasks MVP                                                                      Confidencial


10. Riscos Globais e Mitigações

Os riscos abaixo afetam múltiplos módulos e devem ser monitorados a cada sprint review.



               Risco                  Probabilidade      Impacto               Mitigação

                                                                         Spike técnico obrigatório pré-
 Scanner/GPS inconsistente em Android                                          Sprint 3. QR Code (RF013)
                                                   Alta              Crítico
 de entrada (Motorola G series)                                     como fallback pronto para
                                                                                               ativar.

                                                                       Idempotency keys, transações
 Fraude no sistema de pontos
                                         Média             Alto       ACID e audit log imutável
  (manipulação de registros de descarte)
                                                                       implementados desde o MVP.

                                                                               Contratar consultoria jurídica
 Não conformidade com LGPD antes do                           LGPD antes do launch.
                                                   Alta              Crítico
  launch                                                                             Criptografia at-rest desde o dia
                                                                                        1.

                                                   MVP usa sorteio simples sem
  Parceiros de voucher não confirmados
                                                   Alta           Médio        parceiro. RF026 bloqueado até
 no MVP
                                                                  1 parceiro confirmado.

                                                                  Time Wasters removidos do
  Over-engineering antes de validar o
                                                   Alta              Alto         backlog. Revisão de escopo a
  produto
                                                                    cada sprint review.

                                                                         Spike iniciado em 16/06 no
  Atraso no spike técnico impactando                                      máximo. Sem resultado
                                         Média             Crítico
  Sprint 3                                                                                positivo, MVP opera 100% via
                                                 QR Code.



Itens Fora do Escopo do MVP (Time Wasters)

•  RF017 — Ranking e competições sociais entre pontos (ativar após 1.000 MAUs)
•  RF029 — Exportação assíncrona de relatórios via SQS/PubSub (MVP: export síncrono)
•  RF030 — Auditoria em Cold Storage / S3 Glacier (MVP: audit log relacional por 12 meses)
•  RNF003 — Escalabilidade horizontal avançada (sharding, cache distribuído)
•  RNF007 — Geolocalização offline-first (substituído por QR Code estático)
•  RNF011 — Adapters genéricos de integração (implementar conforme necessidade real)
•  RNF013 — Pipeline CI/CD completo com SAST (ativar ao contratar 2º engenheiro)
•  RNF014 — Tracing distribuído Datadog/X-Ray (ativar ao distribuir a arquitetura)





                       Sistema Residuum · Plano de Tasks v1.0 · Manaus, Junho 2026 · Confidencial





Residuum · Manaus 2026                                                                            Página 21 de 21
