### Projeto Residuum: Problemática e Solução

#### 1. Problemática: O Desafio da Gestão de Resíduos e a Logística Reversa

O ciclo atual de descarte e reciclagem de resíduos sólidos apresenta falhas estruturais severas que afetam todos os atores da cadeia. A desconexão entre quem gera o resíduo (cidadão) e quem deve garantir a logística reversa (empresas) gera ineficiências operacionais e passivos ambientais.

- **Falta de Visibilidade e Rastreabilidade (O "Elo Perdido"):** O resíduo reciclável perde sua rastreabilidade no momento do descarte. O morador não tem conhecimento sobre o destino final do material que separa, enquanto as empresas geradoras, obrigadas por lei a dar o destino correto às embalagens (Política Nacional de Resíduos Sólidos - PNRS), não conseguem comprovar efetivamente a logística reversa por falta de dados. O atual Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR) e o Manifesto de Transporte de Resíduos (MTR) fornecem a base regulatória, mas as informações reais da base da cadeia (o descarte cidadão) não chegam de forma fluída.
- **Operações "No Escuro" (Ineficiência Logística):** Cooperativas e catadores operam com base na reatividade. Sem saber o volume exato de resíduos ou o nível de enchimento dos pontos de coleta (condomínios, supermercados, etc.), ocorrem deslocamentos desnecessários para locais vazios ou atrasos em pontos superlotados. Os pontos de coleta também carecem de dados sobre o que estão descartando.
- **Ausência de Incentivo e Engajamento Popular:** O cidadão não enxerga valor no resíduo sólido. Sem um sistema de recompensas claro, a adesão da população à separação correta dos materiais é baixa.
- **Risco Legal e de Imagem Corporativa:** A falta de rastreabilidade e de um sistema de gestão de dados consolidado representa um risco contínuo para as empresas, que podem sofrer sanções pela não conformidade com a PNRS e comprometer suas métricas ESG perante o mercado e o poder público.

#### 2. A Solução Residuum: Conexão, Previsibilidade e Engajamento

O sistema Residuum propõe a **"uberização" e a gamificação da coleta seletiva**, criando uma plataforma integrada que conecta moradores, pontos de coleta, cooperativas/catadores e empresas. A solução não apenas otimiza a logística, mas também transforma o resíduo em ativo de valor através de rastreabilidade em tempo real e programas de incentivo.

- **Conexão Total da Cadeia e Rastreabilidade Ponta a Ponta:** A plataforma Residuum funciona como um ecossistema digital. O morador registra seus resíduos no aplicativo (via leitura de código de barras ou cadastro de notas fiscais), criando um "estoque virtual". Ao realizar o descarte (check-in georreferenciado) em um Ponto de Coleta, o material ganha rastreabilidade desde o descarte primário até o recebimento pela cooperativa e a reciclagem final. Isso permite a emissão de certificados válidos para comprovação da logística reversa pelas empresas, facilitando a conformidade com as exigências da PNRS e do SINIR/MTR.
- **Logística Preditiva para Cooperativas e Catadores (A "Uberização"):** Através do check-in e registro dos moradores, o sistema mapeia o volume e o nível de enchimento de cada Ponto de Coleta em tempo real. Quando o ponto atinge a capacidade ideal, o sistema notifica os catadores e cooperativas cadastradas ("uberização da coleta"), otimizando as rotas de recolhimento, economizando combustível e tempo, e garantindo que o deslocamento só ocorra quando há material garantido.
- **Engajamento através de Gamificação e Recompensas (O Modelo "Méliuz / TikTok"):** Para solucionar a falta de engajamento da população, o Residuum utiliza estratégias comprovadas de recompensa. Ao transferir os itens do seu estoque virtual para o ponto físico, o morador ganha "Moedas Residuum" ou pontos, inspirados nos sistemas de moedas e engajamento contínuo (como o TikTok Bônus) e mecânicas de cashback (como o Méliuz). Esses pontos podem ser trocados por cupons de desconto em lojas parceiras ou convertidos em números para sorteios de prêmios. A funcionalidade de ler a nota fiscal no app também se baseia em modelos de sucesso de cashback de notas fiscais, facilitando o registro do que foi consumido e descartado.
- **Geração de Dados Estratégicos (Monetização B2B):** Com os dados em mãos, o Residuum oferece planos de assinatura e serviços pré-pagos para empresas e poder público. Eles terão acesso a painéis (dashboards) com dados históricos (volume, tipo de material, fluxo por ponto), permitindo planejar coletas, comprovar a logística reversa com dados reais auditáveis e investir com segurança em campanhas de marketing verde e conscientização.

#### 📌 Diagrama UML: Fluxo de Rastreabilidade e Engajamento (Sistema Residuum)

Abaixo temos o diagrama de sequência que demonstra como os atores do sistema interagem para garantir que o resíduo ganhe rastreabilidade, gere recompensas e cumpra a legislação.

```mermaid
sequenceDiagram
    autonumber
    actor Morador
    participant App as Plataforma Residuum
    participant Ponto as Ponto de Coleta
    actor Cooperativa as Catador / Cooperativa
    actor Empresa as Empresa B2B (Logística Reversa)

    %% 1. Rastreabilidade e Gamificação
    Morador->>App: 1. Registra Resíduos (Cód. Barras / Nota Fiscal)
    App-->>Morador: 2. Cria "Estoque Virtual"
    Morador->>Ponto: 3. Vai até o local físico para descarte
    Morador->>App: 4. Realiza Check-in Georreferenciado
    App->>Ponto: 5. Computa entrada de resíduos (Volume/Peso)
    App-->>Morador: 6. Transfere Moedas/Pontos (Cashback/Sorteios)
    
    %% 2. Logística Preditiva (Uberização)
    App->>App: 7. Monitora nível de enchimento do Ponto
    Note over App, Ponto: Ponto de Coleta atinge capacidade ideal
    App->>Cooperativa: 8. Notifica coleta preditiva (Uberização)
    Cooperativa->>Ponto: 9. Deslocamento otimizado e Coleta Física
    Cooperativa->>App: 10. Confirma recebimento/reciclagem
    
    %% 3. Monetização e Legalidade
    Note over App, Empresa: Ciclo validado (Rastreabilidade Ponta a Ponta)
    App->>Empresa: 11. Atualiza Dashboards Estratégicos
    App-->>Empresa: 12. Emite Certificado (PNRS / SINIR / MTR)