# M09 — Administração, indicadores e relatórios

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1053 a 1105) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-047 — Disponibilizar visão administrativa da operação

**Situação:** confirmado. **Fontes:** S4/RF024, RF025 e S7. **Ator:** administrador.

**Objetivo:** reunir os controles necessários para operar a rede.

**Fluxo:** acessar cadastros de usuários, pontos, cooperativas, convites e loja; acompanhar ocupação e pedidos; encaminhar solicitações; consultar andamento e pagamentos; acessar indicadores e relatórios conforme permissões e plano.

**Exceções:** privilégio administrativo não contorna automaticamente limites comerciais de relatórios, pois o usuário confirmou restrição também para esse perfil. Definir informações operacionais mínimas em PD-019 para não bloquear agendamento e pagamento.

**Dependências:** módulos M01 e M05 a M10.

**Critérios de aceite:**

- **Dado** administrador autorizado, **quando** acessa a área, **então** encontra os cadastros e ações administrativas previstas para seu perfil.
- **Dado** informações necessárias a uma coleta, **quando** consulta a operação, **então** o comportamento respeita a matriz de acesso operacional aprovada, separada da matriz de relatórios.

#### RF-MVP-048 — Exibir gráficos e indicadores

**Situação:** confirmado com pendências de definição. **Fonte:** S7. **Ator:** administrador; outros acessos conforme plano.

**Objetivo:** apresentar visão de usuários, pontos e cooperativas, incluindo participação e conexão.

**Fluxo:** apresentar totais e gráficos de usuários ativos, pontos ativos e cooperativas; distinguir habilitação cadastral, funcionamento do local e presença online; permitir contexto de período e abrangência conforme definições aprovadas.

**Exceções:** “ativo” não será calculado automaticamente como “logado agora”. Medição de presença online, janela de atividade, fuso e significado de cooperativa aberta são PD-020. Não inventar dados para preencher gráficos.

**Dependências:** RF-MVP-050 a RF-MVP-052.

**Critérios de aceite:**

- **Dado** uma definição aprovada de atividade, **quando** o gráfico é consultado, **então** exibe período, universo e contagem compatíveis com essa definição.
- **Dado** habilitação e conexão como indicadores distintos, **quando** são mostrados, **então** a legenda permite distinguir os conceitos.

#### RF-MVP-049 — Consultar relatórios dos pontos

**Situação:** confirmado com pendências. **Fonte:** S7. **Atores:** administrador e responsável autorizado, conforme plano.

**Objetivo:** consultar movimentação e resultados dos pontos, sem prometer dados ainda não definidos.

**Fluxo:** selecionar ponto/período autorizado; consultar descartes, materiais, coletas e pesos medidos disponíveis; apresentar usuários associados aos eventos apenas no nível de detalhe permitido; aplicar limites do plano.

**Exceções:** peso coletado não significa material vendido ou comprado. Expressões como “quantas pessoas passaram” precisam de PD-020: GPS de confirmação não mede visitantes que não registraram eventos. Download CSV/PDF é PD-019, não inclusão automática.

**Dependências:** RF-MVP-019, RF-MVP-043 e RF-MVP-052.

**Critérios de aceite:**

- **Dado** ponto autorizado e plano com o relatório, **quando** consulta um período, **então** encontra dados correspondentes aos eventos registrados e às unidades indicadas.
- **Dado** relatório não incluído no plano, **quando** solicita acesso, **então** o sistema informa a restrição sem retornar os dados protegidos.
