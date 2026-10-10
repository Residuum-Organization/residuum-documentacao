# Residuum — diagnóstico comparativo do MVP do estágio

**Versão:** 1.0
**Data:** 09/10/2026
**Referência de negócio:** [Visão do projeto](../visao/visao-do-projeto.md), [requisitos V6](../requisitos/requisitos-mvp-v6.md) e [tasks V1](../planejamento/tasks-desenvolvimento-mvp-v1.md).
**Objetivo:** identificar bases reaproveitáveis, adequações e capacidades a construir, com evidência do código e verificações locais.

## 1. Conclusão e limites

O MVP possui uma base substancial em React/Vite e FastAPI/SQLAlchemy: autenticação, perfil, inventário, mapas, administração, Loja e solicitações/coletas. Recomenda-se evolução dessa base por capacidade, sem reconstrução integral presumida.

O fluxo de descarte e a operação de coleta possuem defeitos de integridade reproduzidos localmente, além de diferenças para a V6. Eles precisam de revisão antes de usar os saldos e relatórios como referência confiável. Interfaces existentes não comprovam integração completa ou homologação.

| Estratégia funcional | Requisitos | Significado |
|---|---:|---|
| R — Reaproveitar a base | 4 | Existe base principal aproveitável; ainda exige verificação e integração com capacidades dependentes. |
| A — Ajustar/adequar | 34 | Existe implementação relevante, mas há diferença de regra, defeito ou jornada incompleta. |
| C — Construir a capacidade | 15 | Não foi localizada implementação equivalente ao requisito no snapshot examinado; pode reutilizar infraestrutura/componentes. |

Esta contagem **não representa percentual de código pronto, esforço ou aprovação**. Uma linha classificada R não significa que todos os critérios foram verificados. Para RNF também usamos **V — verificar**, quando o código não comprova a condição operacional. Todas as capacidades exigem homologação adequada.

### 1.1 Versões e método

| Repositório | Branch examinada | Commit |
|---|---|---|
| [Frontend](https://github.com/Residuum-Organization/residuum-frontend) | main | [4f41b139ba9871c92a5c5a72ca2f9d98ba6af164](https://github.com/Residuum-Organization/residuum-frontend/commit/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164) |
| [Backend](https://github.com/Residuum-Organization/residuum-backend) | main | [11670c56b45461223e4fea42e66716f5a25b7830](https://github.com/Residuum-Organization/residuum-backend/commit/11670c56b45461223e4fea42e66716f5a25b7830) |

Análise de rotas, páginas, serviços, validações, modelos, scripts e migrations; busca de integrações e funcionalidades; execução de build do frontend, testes existentes e reproduções sintéticas do backend. Links de evidência estão fixados aos commits, para manter o diagnóstico reproduzível.

**Limites:**

- Não foram examinadas branches alternativas nem mudanças posteriores aos commits indicados.
- Não houve acesso ao banco real, infraestrutura implantada, dados de usuários ou ambiente de produção.
- Testes backend chamaram funções com SQLite em memória. Não validam bloqueios concorrentes do PostgreSQL, middleware HTTP nem integrações externas.
- Build não equivale a teste da interface em navegador, câmera, GPS ou dispositivos reais. Essas jornadas permanecem para validação.
- Ausência foi avaliada nas camadas/rotas pesquisadas do snapshot; não é prova de ausência em outra branch ou serviço externo.
- Código original foi mantido sem mudanças; cópias/dependências de análise ficaram em pasta temporária ignorada pelo repositório documental.
- Comentários, README e status históricos foram tratados como informações a conferir, não como comprovação de funcionamento.

## 2. Bases que vale preservar

| Área | Base existente | Cuidado de adequação |
|---|---|---|
| Interface | Shells por perfil, componentes de formulário/estado, React Query e serviços HTTP | Preservar consistência visual; completar tarefas reais sem duplicar fluxos. |
| Autenticação | Hashing de senha, JWT, refresh e consulta de perfil | Rever abrangência, habilitação, revogação e ingresso por convite. |
| Estoque | Inventário pessoal, seleção de itens, lote e chave única de idempotência | Corrigir efeito duplicado e definir quantidade/material sem alterar legado por inferência. |
| Mapas | Leaflet/OpenStreetMap, coordenadas, filtros e abertura de Google Maps externo | Mapas existentes não significam rota/ETA operacional da cooperativa pronta. |
| Pontos | CRUD administrativo, horários, data de encerramento, capacidade e dashboard | Rever papéis, unidade de capacidade e cadastro público antigo. |
| Loja | Campanha/inscrição, voucher/resgate, sorteio/bilhete e administração | Regras existentes de adesão, pontos e elegibilidade devem ser confrontadas com as pendências. |
| Coletas | Solicitação administrativa, aceite por atribuição, timestamps e pesos por material | Integrar agenda/painel e impedir retirada que apague novas entradas. |
| Administração | Usuários, métricas, auditoria e exportações CSV | Aplicar plano e autorização de dados; não confundir estoque com impacto comprovado. |
| Persistência | SQLAlchemy e 29 migrations com grafo coerente na análise estática | Demonstrar criação/atualização real em banco de avaliação; modelo histórico não define o fluxo ativo. |

## 3. Achados prioritários

**P0:** integridade, acesso e bloqueios da jornada. **P1:** completar/reconciliar capacidades operacionais e qualidade. A prioridade indica revisão recomendada; não altera sozinha as decisões de negócio.

### AUD-001 — Dupla baixa e duplo crédito no fluxo do morador

**Prioridade:** P0. **Evidência:** Reproduzido localmente. **Impacto:** RF-MVP-014, RF-MVP-019, RF-MVP-021; RNF-MVP-003.

**Observado:** Com estoque inicial de 10 unidades, a transferência de 3 deixa 7 e credita 30 pontos, mantendo descarte pendente e estoque do ponto vazio. A confirmação operacional de 3 deixa 4, eleva os pontos a 60 e adiciona 3 ao ponto. A mesma entrega afeta o saldo pessoal duas vezes.

**Ação recomendada:** Unificar confirmação validada, baixa, entrada no ponto e 10 pontos em um resultado consistente. Reaproveitar chave de idempotência e bloqueios; impedir novos efeitos na conferência/pesagem. Não corrigir dados históricos sem reconciliação.

**Fontes:** [Backend · app/routes/inventario_usuario.py:240](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/inventario_usuario.py#L240); [Backend · app/routes/descarte.py:226](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/descarte.py#L226).

### AUD-002 — Regra de pontos diverge da V6

**Prioridade:** P0. **Evidência:** Confirmado no código e execução. **Impacto:** RF-MVP-021, RF-MVP-023; RN-008/RN-016.

**Observado:** calcular_pontos_proporcionais multiplica quantidade confirmada por 10. O backend descreve kg em alguns pontos e unidades em outros. A V6 define 10 por operação concluída, não por embalagem/peso.

**Ação recomendada:** Substituir cálculo provisório, identificar a operação originadora do lançamento e alinhar extrato/tela. Fracionamento em novas operações permanece PD-010; idempotência não resolve essa regra.

**Fontes:** [Backend · app/services/pontuacao_service.py:3](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/pontuacao_service.py#L3); [Backend · app/models/pontuacao.py:22](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/pontuacao.py#L22).

### AUD-003 — Cooperativa tem acesso operacional amplo e cadastro público

**Prioridade:** P0. **Evidência:** Helper reproduzido; exposição HTTP identificada por leitura. **Impacto:** RF-MVP-008, RF-MVP-038, RF-MVP-052; RNF-MVP-002.

**Observado:** validar_acesso_operacional_ao_ponto permite qualquer role cooperativa operar o ponto sem conferir vínculo. O cadastro público cria esse role. Listagens de descartes para cooperativa também não restringem a uma atribuição. O teste local aceitou uma cooperativa de ID sem vínculo.

**Ação recomendada:** Restringir cadastro ao administrador e revisar cada leitura/escrita por atribuição ou vínculo autorizado. Validar a cadeia via HTTP em ambiente de avaliação; não testar exploração no ambiente público.

**Fontes:** [Backend · app/dependencies/auth.py:82](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/dependencies/auth.py#L82); [Backend · app/routes/cooperativa.py:70](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L70); [Backend · app/routes/descarte.py:119](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/descarte.py#L119).

### AUD-004 — Retirada elimina material remanescente e novas entradas

**Prioridade:** P0. **Evidência:** Reproduzido localmente. **Impacto:** RF-MVP-035, RF-MVP-043; RN-015.

**Observado:** concluir_solicitacao_coleta remove do inventário atual todas as chaves do snapshot. Num cenário com 10 unidades solicitadas e 15 presentes na retirada, informar 2 kg remove a chave inteira e deixa estoque vazio. Novas cinco unidades também desaparecem; o peso não determina o número retirado.

**Ação recomendada:** Aprovar conciliação PD-009/PD-018 e controlar retirada/entradas de forma transacional, preservando saldo remanescente. O lançamento avulso também usa pop e registra a cooperativa como admin solicitante.

**Fontes:** [Backend · app/routes/cooperativa.py:141](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L141); [Backend · app/routes/cooperativa.py:34](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L34).

### AUD-005 — Pesos negativos e materiais livres são aceitos no contrato

**Prioridade:** P1. **Evidência:** Aceitação de negativo reproduzida no schema; gravação identificada no código. **Impacto:** RF-MVP-043; RN-003.

**Observado:** pesos_reais é um dicionário de float sem validação de material/positividade. O schema aceitou -3. A conclusão soma max(peso, 0), mas persiste o dicionário original. O lançamento avulso também não estabelece limite positivo no schema.

**Ação recomendada:** Rejeitar peso negativo e material incompatível no serviço. Resolver precisão, zero, ausência e correções em PD-018; não transformar ausência de material em peso zero.

**Fontes:** [Backend · app/schemas/solicitacao_coleta.py:18](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/schemas/solicitacao_coleta.py#L18); [Backend · app/routes/cooperativa.py:169](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L169).

### AUD-006 — Scanner está na conferência operacional e identificação foi neutralizada

**Prioridade:** P1. **Evidência:** Confirmado por leitura e falhas de testes. **Impacto:** RF-MVP-009 a RF-MVP-013; PD-004/PD-005.

**Observado:** A câmera é utilizada por ApprovalCard, não pelo cadastro do morador. As funções validar_identificacao_cadastro/confirmacao devolvem valores fixos e o código informado é perdido no cadastro. Não existe consulta de produto nem importação de nota fiscal equivalente à V6.

**Ação recomendada:** Reaproveitar componente de câmera, integrar catálogo/nota aprovados e construir revisão/complemento manual. Não restaurar automaticamente conferência obrigatória por código no ponto: essa exigência não foi decidida para o MVP atual.

**Fontes:** [Frontend · src/components/coleta-dados/ApprovalCard.jsx:177](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/components/coleta-dados/ApprovalCard.jsx#L177); [Backend · app/services/identificacao_residuo_service.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/identificacao_residuo_service.py#L12).

### AUD-007 — Materiais e unidades não possuem contrato comum

**Prioridade:** P0. **Evidência:** Confirmado por leitura. **Impacto:** RF-MVP-012, RF-MVP-015, RF-MVP-035, RF-MVP-043; PD-009/PD-018.

**Observado:** O cliente oferece plástico/papel/vidro/metal/orgânico/eletrônico. O backend aceita outra lista e não inclui PET como código específico; orgânico/eletrônico exibidos não constam do validador. Quantidade é apresentada como unidades no cadastro, mas kg em mensagens, capacidade e relatórios.

**Ação recomendada:** Definir códigos canônicos de PET/lata, unidade por campo e compatibilidade com dados antigos. Reaproveitar formulários, mas preservar legado até planejar migração e revisar todos os cálculos.

**Fontes:** [Frontend · src/pages/CadastrarResiduoPage.jsx:26](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/CadastrarResiduoPage.jsx#L26); [Backend · app/services/validacao_service.py:2](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/validacao_service.py#L2); [Frontend · src/services/maps/index.js:18](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/maps/index.js#L18).

### AUD-008 — Responsável pelo ponto é confundido com cooperativa

**Prioridade:** P0. **Evidência:** Confirmado por leitura. **Impacto:** RF-MVP-008, RF-MVP-031, RF-MVP-034, RF-MVP-038; PD-023.

**Observado:** A verificação de conta designada exige role cooperativa enquanto a mensagem exige ponto_coleta. PUT de materiais/horários exclui role ponto_coleta. O campo cooperativa_id armazena um usuário e é usado também como vínculo do responsável.

**Ação recomendada:** Definir a relação ativa usuário/organização/ponto, ajustar RBAC e migrar vínculos com evidência. O responsável deve editar materiais do ponto autorizado; cooperativa não herda administração geral.

**Fontes:** [Backend · app/routes/ponto_coleta.py:50](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/ponto_coleta.py#L50); [Backend · app/routes/ponto_coleta.py:275](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/ponto_coleta.py#L275); [Backend · app/models/ponto_coleta.py:56](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/ponto_coleta.py#L56).

### AUD-009 — GPS valida distância, mas não qualidade/idade da posição

**Prioridade:** P1. **Evidência:** Confirmado por leitura; parâmetros de negócio pendentes. **Impacto:** RF-MVP-018; RNF-MVP-004.

**Observado:** O backend usa Haversine com raio por ponto (padrão 1000 m). Guarda precisão sem usá-la no aceite e não recebe timestamp da captura. O cliente pode reutilizar coords obtidas antes do trajeto.

**Ação recomendada:** Resolver PD-008, recapturar/revalidar posição ao confirmar e testar limites. Coordenadas fornecidas pelo cliente não são prova absoluta de entrega. Não adotar 1000 m nem o raio histórico como decisão aprovada.

**Fontes:** [Backend · app/services/localizacao_service.py:37](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/localizacao_service.py#L37); [Backend · app/schemas/inventario_usuario.py:59](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/schemas/inventario_usuario.py#L59); [Frontend · src/pages/ValidacaoPresencaPage.jsx:305](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/ValidacaoPresencaPage.jsx#L305).

### AUD-010 — Bônus é concedido na inscrição da campanha

**Prioridade:** P1. **Evidência:** Confirmado por leitura. **Impacto:** RF-MVP-022, RF-MVP-024, RF-MVP-028.

**Observado:** participar_campanha credita pontos_recompensa ao aderir. Não existe meta por produto/material/quantidade de descarte nem origem em evento elegível. A regra é diferente da recompensa de campanha discutida.

**Ação recomendada:** Aprovar PD-011 e separar adesão, progresso e bônus apurado. Reaproveitar CRUD de campanha; não condicionar conclusão do descarte à apuração do bônus.

**Fontes:** [Backend · app/routes/campanha.py:141](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/campanha.py#L141); [Backend · app/models/campanha.py:23](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/campanha.py#L23).

### AUD-011 — Saldo e reenvio de compras precisam de proteção comum

**Prioridade:** P0. **Evidência:** Risco identificado por leitura; simultaneidade não executada. **Impacto:** RF-MVP-025, RF-MVP-029, RF-MVP-030; RNF-MVP-003.

**Observado:** Voucher bloqueia sua própria linha e sorteio bloqueia a linha do sorteio. Nenhum deles bloqueia uniformemente o saldo do usuário; ofertas distintas podem disputar o mesmo saldo. Resgate genérico também não possui chave de idempotência.

**Ação recomendada:** Estabelecer atualização atômica do saldo e identificação única da aquisição. Testar duas ofertas distintas, última disponibilidade, timeout e repetição em PostgreSQL. Não afirmar perda concorrente como já reproduzida.

**Fontes:** [Backend · app/routes/voucher.py:121](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/voucher.py#L121); [Backend · app/routes/sorteio.py:228](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/sorteio.py#L228); [Backend · app/routes/pontuacao.py:48](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/pontuacao.py#L48).

### AUD-012 — Solicitação, agenda e painel ainda não formam uma jornada completa

**Prioridade:** P1. **Evidência:** Confirmado por leitura. **Impacto:** RF-MVP-037, RF-MVP-039 a RF-MVP-042.

**Observado:** API administrativa cria solicitação e cooperativa pode aceitar/concluir. Agenda é outra entidade sem vínculo com SolicitacaoColeta. O frontend consulta solicitações para gráficos, mas não foi localizado consumo dos endpoints de aceite/conclusão da solicitação. Rota planejada da cooperativa e pedido do responsável não foram encontrados.

**Ação recomendada:** Reaproveitar backend de solicitação/aceite, criar interfaces e ligar agendamento, destino e eventos. Revisar estados em PD-014/PD-017, sem impor transição em execução.

**Fontes:** [Backend · app/routes/admin.py:74](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L74); [Backend · app/routes/agenda.py:50](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/agenda.py#L50); [Frontend · src/services/collectionPointDashboard/index.js:8](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/collectionPointDashboard/index.js#L8).

### AUD-013 — Indicadores e extrato podem apresentar informações inconsistentes

**Prioridade:** P1. **Evidência:** Confirmado por leitura. **Impacto:** RF-MVP-023, RF-MVP-048, RF-MVP-049; RNF-MVP-008.

**Observado:** O dashboard soma descarte pendente com quantidade de solicitação, podendo misturar unidades e kg. Uma solicitação é incluída no histórico quando possui data_solicitacao, mesmo sem conclusão. Extrato é reconstruído de entidades de negócio; Pontuacao não liga lançamento ao descarte.

**Ação recomendada:** Definir métricas/eventos e janela PD-020, separar unidade/peso, vincular lançamento à origem e reconciliar extrato com saldo. Não confundir métricas de rede com prova de reciclagem final.

**Fontes:** [Frontend · src/services/collectionPointDashboard/index.js:69](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/collectionPointDashboard/index.js#L69); [Backend · app/services/extrato_pontos_service.py:16](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/extrato_pontos_service.py#L16); [Backend · app/models/pontuacao.py:22](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/pontuacao.py#L22).

### AUD-014 — Configuração da API usa nomes diferentes

**Prioridade:** P1. **Evidência:** Confirmado por leitura. **Impacto:** RNF-MVP-009/RNF-MVP-011.

**Observado:** README e docker-compose orientam VITE_API_URL. Axios lê VITE_API_BASE_URL e, na ausência, usa 127.0.0.1:8080. Configurar apenas o nome documentado pode deixar o cliente apontando para o endereço padrão.

**Ação recomendada:** Padronizar variável e validar configuração por ambiente sem expor segredos. Há também serviço listNearby para /maps/points/nearby sem rota correspondente localizada; não foi encontrado consumidor atual, portanto é contrato residual, não falha comprovada da tela.

**Fontes:** [Frontend · README.md:82](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/README.md#L82); [Frontend · docker-compose.yml:8](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/docker-compose.yml#L8); [Frontend · src/api/client.js:5](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/api/client.js#L5); [Frontend · src/services/maps/index.js:46](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/maps/index.js#L46).

### AUD-015 — Inicialização não executa as migrations anunciadas

**Prioridade:** P1. **Evidência:** Confirmado por leitura; grafo inspecionado sem executar migração. **Impacto:** RNF-MVP-011; TSK-TRA-000.

**Observado:** Dockerfile comenta que entrypoint aplica alembic upgrade head, mas entrypoint somente inicia uvicorn. O grafo de 29 migrations tem uma cabeça c8b2c451f28b e nenhum pai ausente; isso não prova aplicação bem-sucedida no banco real.

**Ação recomendada:** Definir procedimento de implantação/migração e verificar banco vazio e atualização de versão em ambiente descartável. Preservar dados; a política depende da infraestrutura PD-026.

**Fontes:** [Backend · Dockerfile:23](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/Dockerfile#L23); [Backend · entrypoint.sh:1](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/entrypoint.sh#L1).

### AUD-016 — Testes e pipeline precisam ser reconciliados com o produto atual

**Prioridade:** P1. **Evidência:** Executado e confirmado por leitura. **Impacto:** RNF-MVP-003/RNF-MVP-011; todos os módulos com efeito em dados.

**Observado:** 17 testes existentes: 8 passaram, 9 falharam, 0 erros de execução. O código atual neutralizou validações e mudou reserva para baixa. Algumas expectativas de conferência por código são legadas, não exigências confirmadas da V6. CI frontend executa build e ignora falhas de format; scripts não declaram testes frontend e nenhum workflow backend foi localizado no snapshot.

**Ação recomendada:** Mapear cada teste a regra atual, corrigir os defeitos e retirar/adaptar exigências legadas somente após decisão. Criar regressões do fluxo completo de transferência→confirmação, saldo e retirada com novas entradas; tornar verificações relevantes obrigatórias.

**Fontes:** [Backend · tests/test_transferencia_lote.py:106](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/tests/test_transferencia_lote.py#L106); [Backend · tests/test_identificacao_residuo.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/tests/test_identificacao_residuo.py#L12); [Frontend · .github/workflows/ci.yml:33](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/.github/workflows/ci.yml#L33).

## 4. Comparativo com os requisitos e tarefas

As linhas apontam a ação principal, não status de conclusão. Quando há pendência de negócio, primeiro resolver a ficha TSK-DEC relacionada na V1. **F** = frontend; **B** = backend. Evidências de ausência indicam o fluxo/camada pesquisado, não uma prova de que nenhum outro serviço existe.

### 4.1 Requisitos funcionais — 53 RF

| Requisito / tarefa | Estratégia | O que existe ou foi localizado | O que precisa ser trabalhado | Evidência |
|---|---|---|---|---|
| **RF-MVP-001** — Gerenciar convites individuais<br>TSK-ADM-001 | Construir | Nenhum modelo/rota de convite individual localizado. | Criar emissão, expiração e consumo único; PD-001/PD-002. | [B:app/routes/auth.py:42](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/auth.py#L42) |
| **RF-MVP-002** — Gerenciar convites compartilhados<br>TSK-ADM-002 | Construir | Nenhum convite compartilhado ou contador de vagas localizado. | Criar limite transacional e expiração; validar última vaga concorrente. | [B:app/routes/auth.py:42](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/auth.py#L42) |
| **RF-MVP-003** — Cadastrar morador por convite<br>TSK-MOR-001 | Ajustar | Cadastro público POST /usuarios sem convite; formulário existente. | Reaproveitar formulário e hashing; exigir convite na transação de cadastro. | [B:app/routes/auth.py:42](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/auth.py#L42)<br>[F:src/components/forms/RegisterForm.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/components/forms/RegisterForm.jsx#L1) |
| **RF-MVP-004** — Cadastrar morador pela administração<br>TSK-ADM-003 | Construir | Admin lista/edita usuários, mas não há criação administrativa equivalente na rota admin. | Criar ingresso assistido e definir consumo/dispensa de convite. | [B:app/routes/admin.py:134](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L134) |
| **RF-MVP-005** — Autenticar e encerrar sessão<br>TSK-MOR-002 | Ajustar | Login/refresh JWT e logout local existem; tokens sem revogação persistida. | Validar sessões/habilitação e política de revogação; não presumir rotação que invalida o token antigo. | [B:app/routes/auth.py:78](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/auth.py#L78)<br>[F:src/services/auth/index.js:34](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/auth/index.js#L34) |
| **RF-MVP-006** — Recuperar acesso<br>TSK-MOR-003 | Construir | Tela de recuperação informa que a função não está disponível; rota de recuperação ausente. | Construir solicitação, canal, token de uso único e redefinição; PD-003. | [F:src/pages/ForgotPasswordPage.jsx:26](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/ForgotPasswordPage.jsx#L26) |
| **RF-MVP-007** — Consultar e editar perfil<br>TSK-MOR-004 | Reaproveitar | GET/PUT /me e /perfil; perfil integrado no cliente. | Reaproveitar consulta/edição limitada; homologar campos e mudança de identificadores. | [B:app/routes/auth.py:174](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/auth.py#L174)<br>[F:src/pages/ProfilePage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/ProfilePage.jsx#L1) |
| **RF-MVP-008** — Administrar acessos e vínculos<br>TSK-ADM-004 | Ajustar | Alteração de role e cooperativa_id existem, com vínculos e permissões inconsistentes. | Separar responsável do ponto de cooperativa, gestão/revogação de acesso e abrangência. | [B:app/dependencies/auth.py:82](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/dependencies/auth.py#L82)<br>[B:app/routes/ponto_coleta.py:50](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/ponto_coleta.py#L50) |
| **RF-MVP-009** — Disponibilizar Registrar e Descarte rápido<br>TSK-MOR-005 | Ajustar | CadastrarResiduo possui guardar/descartar; Home abre formulário, não scanner. | Reorganizar ação rápida para câmera imediata, sem perder alternativa manual. | [F:src/pages/HomePage.jsx:92](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/HomePage.jsx#L92)<br>[F:src/pages/CadastrarResiduoPage.jsx:67](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/CadastrarResiduoPage.jsx#L67) |
| **RF-MVP-010** — Identificar produto por código de barras<br>TSK-MOR-006 | Ajustar | BarcodeScanner é usado em ApprovalCard operacional; sem consulta de catálogo no cadastro do morador. | Reaproveitar leitura de câmera; construir identificação por fonte aprovada e mover para a jornada correta. | [F:src/components/BarcodeScanner.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/components/BarcodeScanner.jsx#L1)<br>[F:src/components/coleta-dados/ApprovalCard.jsx:177](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/components/coleta-dados/ApprovalCard.jsx#L177) |
| **RF-MVP-011** — Importar itens de nota fiscal<br>TSK-MOR-007 | Construir | Sem importação/consulta de nota fiscal no cliente, rotas ou modelos examinados. | Criar leitura de identificador, consulta, seleção/revisão e complemento manual; PD-004/PD-005. | [F:src/pages/CadastrarResiduoPage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/CadastrarResiduoPage.jsx#L1)<br>[B:app/routes/inventario_usuario.py:131](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/inventario_usuario.py#L131) |
| **RF-MVP-012** — Cadastrar resíduo manualmente<br>TSK-MOR-008 | Ajustar | Formulário e POST de inventário existem, mas materiais abrangentes e nome opcional. | Restringir novos registros a PET/lata, compatibilizar códigos e campos após decisão; preservar legado. | [F:src/pages/CadastrarResiduoPage.jsx:21](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/CadastrarResiduoPage.jsx#L21)<br>[B:app/services/validacao_service.py:2](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/validacao_service.py#L2) |
| **RF-MVP-013** — Revisar itens antes da inclusão<br>TSK-MOR-009 | Ajustar | Revisão no formulário individual; funções de identificação devolvem None. | Criar revisão de itens importados, manter código recebido e impedir inclusão involuntária repetida. | [B:app/services/identificacao_residuo_service.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/identificacao_residuo_service.py#L12)<br>[F:src/pages/CadastrarResiduoPage.jsx:132](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/CadastrarResiduoPage.jsx#L132) |
| **RF-MVP-014** — Manter estoque e selecionar quantidades<br>TSK-MOR-010 | Ajustar | Inventário pessoal, seleção parcial e lote com chave única/bloqueio existem. | Reaproveitar persistência/seleção; corrigir dupla baixa e aprovar abandono do caminho rápido. | [B:app/routes/inventario_usuario.py:175](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/inventario_usuario.py#L175)<br>[F:src/pages/MeuEstoquePage.jsx:103](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/MeuEstoquePage.jsx#L103) |
| **RF-MVP-015** — Consultar pontos próximos compatíveis<br>TSK-MOR-011 | Ajustar | Lista georreferenciada e compatibilidade por tipo; códigos genéricos e disponibilidade herdada. | Adequar PET/lata, dados e seleção mista, sem aprovar políticas herdadas de ponto cheio. | [B:app/routes/ponto_coleta.py:184](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/ponto_coleta.py#L184)<br>[F:src/pages/ValidacaoPresencaPage.jsx:138](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/ValidacaoPresencaPage.jsx#L138) |
| **RF-MVP-016** — Consultar detalhes do ponto<br>TSK-MOR-012 | Ajustar | Mapa/detalhes com endereço, materiais, capacidade e horários. | Corrigir unidade exibida como kg e validar disponibilidade/contexto. | [F:src/pages/MapPage.jsx:219](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/MapPage.jsx#L219) |
| **RF-MVP-017** — Encaminhar morador à navegação externa<br>TSK-MOR-013 | Reaproveitar | MapPage abre Google Maps externo com coordenadas do destino. | Reaproveitar encaminhamento; validar retorno e manutenção dos itens selecionados. | [F:src/pages/MapPage.jsx:302](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/MapPage.jsx#L302) |
| **RF-MVP-018** — Validar presença por GPS<br>TSK-MOR-014 | Ajustar | GPS/Haversine e raio por ponto existem; precisão não é critério e posição pode ser reutilizada. | Definir raio, precisão/idade; capturar/revalidar localização na confirmação sem alegar prova antifraude absoluta. | [B:app/services/localizacao_service.py:37](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/localizacao_service.py#L37)<br>[F:src/pages/ValidacaoPresencaPage.jsx:305](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/ValidacaoPresencaPage.jsx#L305) |
| **RF-MVP-019** — Confirmar entrega e movimentar estoques<br>TSK-MOR-015 | Ajustar | Lote baixa estoque/credita; confirmação operacional repete efeitos e só então entra estoque do ponto. | Unificar resultado do descarte validado com estoque e crédito uma vez; remover dependência obrigatória de conferência não decidida. | [B:app/routes/inventario_usuario.py:240](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/inventario_usuario.py#L240)<br>[B:app/routes/descarte.py:226](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/descarte.py#L226) |
| **RF-MVP-020** — Exibir confirmação e histórico de descartes<br>TSK-MOR-016 | Ajustar | Tela de sucesso e histórico existem; tela celebra operação ainda pendente e resumo está comentado. | Mostrar estado real, ponto/itens/10 pontos e bônus separado; manter Home/Loja. | [F:src/pages/TransferenciaConcluidaPage.jsx:75](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/TransferenciaConcluidaPage.jsx#L75)<br>[B:app/routes/descarte.py:96](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/descarte.py#L96) |
| **RF-MVP-021** — Creditar recompensa básica provisória<br>TSK-MOR-017 | Ajustar | Cálculo 10 × quantidade, usado em criação e confirmação. | Trocar por 10 por operação concluída, com vínculo único; não repetir na conferência/pesagem. | [B:app/services/pontuacao_service.py:3](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/pontuacao_service.py#L3) |
| **RF-MVP-022** — Aplicar bônus de campanha<br>TSK-MOR-018 | Ajustar | Participação em campanha credita recompensa imediatamente. | Vincular bônus a evento elegível e regra aprovada; adesão não deve conceder bônus de descarte por inferência. | [B:app/routes/campanha.py:141](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/campanha.py#L141) |
| **RF-MVP-023** — Consultar saldo e extrato de pontos<br>TSK-MOR-019 | Ajustar | Saldo e extrato existem; Pontuacao só possui usuário/valor/data. | Usar lançamentos ligados à operação e origem; reconciliar saldo/extrato e ajustes históricos. | [B:app/models/pontuacao.py:22](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/pontuacao.py#L22)<br>[B:app/services/extrato_pontos_service.py:16](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/extrato_pontos_service.py#L16) |
| **RF-MVP-024** — Apurar metas de descarte das campanhas<br>TSK-MOR-020 | Construir | Campanha/inscrição existem, sem modelo de meta/progresso por descarte elegível. | Criar apuração de metas e evidência de produto conforme PD-011. | [B:app/models/campanha.py:23](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/campanha.py#L23) |
| **RF-MVP-025** — Debitar pontos com consistência<br>TSK-MOR-021 | Ajustar | Débito e extrato existem; locks de voucher/sorteio não protegem saldo entre ofertas distintas. | Serializar saldo, proteger reenvio e vincular débito à aquisição; verificar concorrência em PostgreSQL. | [B:app/routes/voucher.py:121](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/voucher.py#L121)<br>[B:app/routes/pontuacao.py:48](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/pontuacao.py#L48) |
| **RF-MVP-026** — Consultar a loja de recompensas<br>TSK-MOR-022 | Reaproveitar | Loja integrada a campanhas, vouchers e sorteios. | Reaproveitar catálogo/interface; validar regras e estados das ofertas antes de liberar uso real. | [F:src/pages/LojaPage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/LojaPage.jsx#L1) |
| **RF-MVP-027** — Consultar detalhes e condições da campanha<br>TSK-MOR-023 | Ajustar | Detalhes de campanha existem com texto/recompensa/patrocinador. | Publicar metas, elegibilidade e benefício reais, sem confundir adesão e cumprimento. | [F:src/pages/CampanhaDetalhesPage.jsx:445](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/CampanhaDetalhesPage.jsx#L445)<br>[B:app/models/campanha.py:23](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/campanha.py#L23) |
| **RF-MVP-028** — Administrar e participar de campanhas<br>TSK-MOR-024 | Ajustar | CRUD e inscrição em campanhas existentes. | Reaproveitar gestão e adesão; adequar requisitos de parceiro e recompensa à regra aprovada. | [F:src/pages/NovaCampanhaPage.jsx:59](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/NovaCampanhaPage.jsx#L59)<br>[B:app/routes/campanha.py:141](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/campanha.py#L141) |
| **RF-MVP-029** — Administrar e adquirir vouchers<br>TSK-MOR-025 | Ajustar | CRUD, resgate, código promocional e estoque disponíveis. | Adequar validade/limites/uso, idempotência e bloqueio do saldo; PD-012. | [B:app/routes/voucher.py:121](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/voucher.py#L121)<br>[F:src/pages/AdminSorteiosPage.jsx:353](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/AdminSorteiosPage.jsx#L353) |
| **RF-MVP-030** — Administrar sorteios e registrar participações<br>TSK-MOR-026 | Ajustar | CRUD, compra de bilhete e apuração existem, com uma chance e exigência de descarte confirmado. | Revalidar regras herdadas em PD-013 e segurança/concorrência; não tratá-las como decisão V6. | [B:app/routes/sorteio.py:228](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/sorteio.py#L228)<br>[F:src/pages/AdminSorteiosPage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/AdminSorteiosPage.jsx#L1) |
| **RF-MVP-031** — Cadastrar e administrar pontos de coleta<br>TSK-ADM-005 | Ajustar | Criação administrativa e CRUD de ponto existem; cadastro público/aprovação continuam disponíveis. | Reaproveitar administração, descontinuar ingresso público após planejar legado e corrigir vínculo. | [B:app/routes/ponto_coleta.py:100](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/ponto_coleta.py#L100)<br>[F:src/pages/AdminPointsPage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/AdminPointsPage.jsx#L1) |
| **RF-MVP-032** — Gerir pontos temporários<br>TSK-ADM-006 | Ajustar | data_final, status calculado e bloqueio de ponto expirado existem. | Adicionar configuração adequada no admin e validar encerramento com remanescentes; não apagar histórico. | [B:app/models/ponto_coleta.py:63](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/ponto_coleta.py#L63)<br>[B:app/services/ponto_coleta_service.py:22](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/ponto_coleta_service.py#L22) |
| **RF-MVP-033** — Classificar contexto e funcionamento do ponto<br>TSK-ADM-007 | Ajustar | Endereço/horários existentes; classificação condomínio/casa/loja/evento não modelada. | Construir contexto/tags e revisar janela de atendimento e permissão de horários. | [B:app/models/ponto_coleta.py:36](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/ponto_coleta.py#L36) |
| **RF-MVP-034** — Editar materiais aceitos<br>TSK-PON-001 | Ajustar | PUT aceita tipos, porém roles admin/cooperativa excluem ponto_coleta. | Habilitar responsável vinculado e administrador; negar cooperativa sem autorização e preservar estoque. | [B:app/routes/ponto_coleta.py:275](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/ponto_coleta.py#L275) |
| **RF-MVP-035** — Acompanhar estoque e ocupação do ponto<br>TSK-PON-002 | Ajustar | Dashboard calcula soma/capacidade; fluxo mistura unidades com kg. | Definir unidade da capacidade e conciliação; reconstruir saldos incorretos só após diagnóstico dos dados. | [B:app/services/dashboard_ponto_coleta_service.py:34](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/dashboard_ponto_coleta_service.py#L34) |
| **RF-MVP-036** — Sinalizar necessidade de coleta<br>TSK-PON-003 | Ajustar | Status cheio, alertas e notificações existem; limiares/canais/perfis herdados. | Adequar unidade/limiar e visibilidade do responsável; aviso não atribui coleta automaticamente. | [B:app/services/notificacao_service.py:5](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/notificacao_service.py#L5)<br>[B:app/routes/admin.py:59](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L59) |
| **RF-MVP-037** — Solicitar coleta ao administrador<br>TSK-PON-004 | Construir | Solicitação administrativa existe; falta pedido do responsável encaminhado ao administrador. | Construir registro/acompanhamento do pedido e prevenção de repetição; PD-014. | [B:app/routes/admin.py:74](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L74) |
| **RF-MVP-038** — Cadastrar cooperativa e seus acessos<br>TSK-ADM-008 | Ajustar | Cadastro público cria Usuario role cooperativa sem CNPJ; há modelo histórico Cooperativa separado. | Migrar para gestão administrativa com CNPJ e operadores; reconciliar modelo histórico com fluxo ativo. | [B:app/routes/cooperativa.py:70](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L70)<br>[B:app/schemas/usuario.py:31](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/schemas/usuario.py#L31)<br>[B:app/models/cooperativa.py:7](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/cooperativa.py#L7) |
| **RF-MVP-039** — Solicitar e agendar coleta administrativamente<br>TSK-ADM-009 | Ajustar | Admin atribui solicitação; agenda é outra entidade sem ligação à solicitação. | Integrar pedido, atribuição e horário; construir operação no frontend e validar conflitos. | [B:app/routes/admin.py:74](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L74)<br>[B:app/routes/agenda.py:50](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/agenda.py#L50) |
| **RF-MVP-040** — Consultar e aceitar solicitação de coleta<br>TSK-COO-001 | Ajustar | Backend lista/aceita por cooperativa atribuída; frontend só consulta para dashboard. | Reaproveitar API, completar interface de aceite e tratar repetição/exceções aprovadas. | [B:app/routes/cooperativa.py:98](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L98)<br>[F:src/services/collectionPointDashboard/index.js:8](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/collectionPointDashboard/index.js#L8) |
| **RF-MVP-041** — Fornecer rota e agendamento no painel<br>TSK-COO-002 | Construir | Mapas do morador existem, mas não há rota/ETA integrada à solicitação da cooperativa. | Construir painel de destino/horário/rota planejada com serviço aprovado; PD-017. | [B:app/models/solicitacao_coleta.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/solicitacao_coleta.py#L12) |
| **RF-MVP-042** — Acompanhar andamento da coleta<br>TSK-COO-003 | Ajustar | Estados solicitada/aceita/concluida/recusada e timestamps existem. | Adequar estados aprovados, exposição por vínculo e integração com agenda/painel; início real pendente. | [B:app/routes/cooperativa.py:112](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L112)<br>[B:app/models/solicitacao_coleta.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/solicitacao_coleta.py#L12) |
| **RF-MVP-043** — Registrar materiais e pesos retirados<br>TSK-COO-004 | Ajustar | Pesos por material existem; negativos aceitos e retirada zera todos os tipos do snapshot. | Validar materiais/pesos e conciliar retirada sem apagar novas entradas; remover caminho avulso que simula administrador. | [B:app/routes/cooperativa.py:34](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L34)<br>[B:app/routes/cooperativa.py:141](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/cooperativa.py#L141)<br>[B:app/schemas/solicitacao_coleta.py:18](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/schemas/solicitacao_coleta.py#L18) |
| **RF-MVP-044** — Preparar informações de pagamento<br>TSK-ADM-010 | Construir | Sem preparação de ordem financeira vinculada à coleta. | Criar valor/recebedor/autorização após PD-015/PD-016. | [B:app/models/solicitacao_coleta.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/solicitacao_coleta.py#L12) |
| **RF-MVP-045** — Iniciar pagamento por API<br>TSK-ADM-011 | Construir | Sem provedor/API de pagamento de coleta nas rotas examinadas. | Construir ordem idempotente, envio protegido e integração em ambiente de avaliação. | [B:app/main.py:30](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/main.py#L30) |
| **RF-MVP-046** — Acompanhar confirmação e falhas de pagamento<br>TSK-ADM-012 | Construir | Sem ordem, callback ou estados financeiros de coleta. | Construir confirmação autenticada, conciliação e acompanhamento separado da operação. | [B:app/models/solicitacao_coleta.py:12](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/solicitacao_coleta.py#L12) |
| **RF-MVP-047** — Disponibilizar visão administrativa da operação<br>TSK-ADM-013 | Reaproveitar | Admin possui métricas, usuários, pontos, auditoria e exportações. | Reaproveitar shell/consultas; completar controles ausentes conforme outras tarefas e validar acesso operacional mínimo. | [F:src/pages/AdminPage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/AdminPage.jsx#L1)<br>[B:app/routes/admin.py:818](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L818) |
| **RF-MVP-048** — Exibir gráficos e indicadores<br>TSK-ADM-014 | Ajustar | Gráficos/estatísticas existem; estoque/unidades e pesos são agregados no mesmo histórico. | Definir ativo/aberto/conectado e separar unidades e eventos; não apresentar pendência como coleta concluída. | [F:src/services/collectionPointDashboard/index.js:69](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/services/collectionPointDashboard/index.js#L69)<br>[B:app/routes/admin.py:818](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L818) |
| **RF-MVP-049** — Consultar relatórios dos pontos<br>TSK-PON-005 | Ajustar | Relatórios/admin CSV e relatórios operacionais existem, sem plano. | Reaproveitar consultas/arquivos; controlar benefício, vínculo, escopo e dados identificáveis. | [B:app/routes/admin.py:1042](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L1042)<br>[F:src/pages/PontoColetaReportsPage.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/PontoColetaReportsPage.jsx#L1) |
| **RF-MVP-050** — Representar planos e benefícios de dados<br>TSK-ADM-015 | Construir | Sem catálogo de planos e benefícios nas camadas examinadas. | Criar matriz grátis/pré-pago/mensal depois de PD-019. | [B:app/main.py:30](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/main.py#L30) |
| **RF-MVP-051** — Associar contratação e vigência de plano<br>TSK-ADM-016 | Construir | Sem contratação/vigência de acesso comercial. | Construir titular/vigência/benefícios; cobrança e renovação dependem de PD-019. | [B:app/models/usuario.py:19](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/usuario.py#L19) |
| **RF-MVP-052** — Autorizar dados por perfil, vínculo e plano<br>TSK-TRA-001 | Construir | Há RBAC, mas não política combinada de plano/vínculo/abrangência. | Construir autorização comercial no serviço, corrigindo antes vínculos operacionais amplos. | [B:app/dependencies/auth.py:60](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/dependencies/auth.py#L60)<br>[B:app/routes/admin.py:1042](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L1042) |
| **RF-MVP-053** — Armazenar e apresentar imagens e vídeos da loja<br>TSK-ADM-017 | Construir | Logo de patrocinador por URL existe; sem gestão completa de imagem/vídeo de oferta. | Construir mídia com políticas de publicação e validação, mantendo condições em texto; PD-024. | [B:app/models/campanha.py:31](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/campanha.py#L31)<br>[F:src/pages/NovaCampanhaPage.jsx:59](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/NovaCampanhaPage.jsx#L59) |

### 4.2 Qualidade e operação — 12 RNF

| Requisito / tarefa | Estratégia | Evidência atual e limite | Ação necessária | Fonte |
|---|---|---|---|---|
| **RNF-MVP-001** — Plataforma responsiva e compatibilidade<br>TSK-TRA-002 | Verificar | Layouts responsivos e componentes reutilizáveis existem; não foram testados câmera/GPS/dispositivos/PWA. | Aprovar matriz PD-025 e executar jornadas em dispositivos reais. | [F:src/components/layout/RoleShell.jsx:1](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/components/layout/RoleShell.jsx#L1) |
| **RNF-MVP-002** — Autenticação e autorização<br>TSK-TRA-003 | Ajustar | JWT e roles existem; cooperativa recebe abrangência global e ponto é excluído de edição. | Corrigir vínculo e RBAC; testar via HTTP e revogação/sessões em ambiente controlado. | [B:app/dependencies/auth.py:82](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/dependencies/auth.py#L82) |
| **RNF-MVP-003** — Integridade, concorrência e idempotência<br>TSK-TRA-004 | Ajustar | Chave única e lock em lote existentes; dupla baixa/crédito reproduzidos e saldo sem lock uniforme. | Unificar efeito e testar simultaneidade real em PostgreSQL, reenvio e falhas parciais. | [B:app/routes/inventario_usuario.py:175](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/inventario_usuario.py#L175)<br>[B:app/routes/voucher.py:121](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/voucher.py#L121) |
| **RNF-MVP-004** — Resiliência de localização e consulta externa<br>TSK-TRA-005 | Ajustar | Falhas de localização tratadas no cliente; precisão/idade não aplicadas; geocodificação pode resultar 0,0. | Preservar falha explícita, aprovar parâmetros GPS e impedir coordenada fictícia de virar destino real. | [B:app/services/localizacao_service.py:48](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/localizacao_service.py#L48)<br>[F:src/pages/ValidacaoPresencaPage.jsx:305](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/pages/ValidacaoPresencaPage.jsx#L305) |
| **RNF-MVP-005** — Proteção de dados e privacidade<br>TSK-TRA-006 | Ajustar | Hashing e restrições presentes; banco está configurado com echo=True e CSV de dados pessoais. | Revisar logs, mínimo de dados, autorização de exportação e retenção; conformidade não comprovada. | [B:app/database.py:29](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/database.py#L29)<br>[B:app/routes/admin.py:1094](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/routes/admin.py#L1094) |
| **RNF-MVP-006** — Desempenho e experiência<br>TSK-TRA-007 | Verificar | Build passa; bundle principal 1.576,68 kB, gzip 460,82 kB; sem medição das metas em 4G. | Definir PD-025, medir e avaliar carregamento por rota; alerta de bundle não é falha de meta comprovada. | [F:package.json:5](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/package.json#L5) |
| **RNF-MVP-007** — Disponibilidade, backups e recuperação<br>TSK-TRA-008 | Verificar | Docker/compose existentes; sem evidência de backup, restauração ou disponibilidade do ambiente real. | Obter infraestrutura e medir recuperação em ambiente isolado após PD-026. | [B:Dockerfile:1](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/Dockerfile#L1) |
| **RNF-MVP-008** — Auditoria e observabilidade<br>TSK-TRA-009 | Ajustar | AuditLog e rotas administrativas existem; crédito/descarte não possuem correlação integral de lançamentos. | Relacionar origem/evento, impedir alteração e revisar retenção, alertas e logs. | [B:app/services/audit_service.py:1](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/services/audit_service.py#L1)<br>[B:app/models/pontuacao.py:22](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/pontuacao.py#L22) |
| **RNF-MVP-009** — Segurança das integrações<br>TSK-TRA-010 | Ajustar | JWT/variáveis de ambiente existem; contratos incompletos e nenhuma integração financeira. | Padronizar configuração e segredos; adicionar autenticação e conciliação do provedor quando definido. | [F:src/api/client.js:5](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/src/api/client.js#L5)<br>[B:app/core/security.py:24](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/core/security.py#L24) |
| **RNF-MVP-010** — Segurança e desempenho de mídias<br>TSK-TRA-011 | Construir | Sem serviço de publicação/validação de imagem e vídeo de oferta; apenas URL de logo. | Construir políticas e processamento da mídia aprovados em PD-024. | [B:app/models/campanha.py:31](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/campanha.py#L31) |
| **RNF-MVP-011** — Padronização e entrega técnica<br>TSK-TRA-012 | Ajustar | CI frontend compila e ignora falha de format; sem testes frontend declarados e sem workflow backend localizado. | Definir pipeline de testes/revisão e migração explícita; corrigir nomes de ambiente e documentação. | [F:.github/workflows/ci.yml:33](https://github.com/Residuum-Organization/residuum-frontend/blob/4f41b139ba9871c92a5c5a72ca2f9d98ba6af164/.github/workflows/ci.yml#L33)<br>[B:entrypoint.sh:1](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/entrypoint.sh#L1) |
| **RNF-MVP-012** — Evolução e capacidade<br>TSK-TRA-013 | Verificar | Serviços por domínio e modelos existentes; sem medidas de volume/carga e com entidades legadas divergentes. | Diagnosticar modelo ativo e limites antes de decidir evolução; não recomendar reconstrução ou migração por padrão. | [B:app/models/cooperativa.py:7](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/cooperativa.py#L7)<br>[B:app/models/ponto_coleta.py:30](https://github.com/Residuum-Organization/residuum-backend/blob/11670c56b45461223e4fea42e66716f5a25b7830/app/models/ponto_coleta.py#L30) |

## 5. Verificações executadas

### 5.1 Compilação do frontend

- Instalação com lockfile congelado: `pnpm install --frozen-lockfile --ignore-scripts --network-concurrency=4`.
- `pnpm run build`: **passou**, 3.112 módulos transformados; Vite 5.4.21; tempo informado pelo build: 22,41 s.
- Bundle principal: **1.576,68 kB**, gzip **460,82 kB**; aviso de chunks acima de 500 kB. Avaliar carga por rota e dependências, sem declarar descumprimento de meta não medida.
- Ambiente da sessão: Node 24.19.0 / pnpm 11.25.0; CI declara Node 20 / pnpm 9. A compilação local não comprova comportamento idêntico no CI.
- Houve falhas de download e bloqueio EPERM do esbuild no sandbox; instalação e build foram repetidos com autorização. Esses bloqueios locais não foram classificados como defeitos do projeto.
- Não foi executado o comando `format`, pois é configurado para escrever arquivos. A análise não formatou código do MVP.
- Não foram executados testes de navegador nem medição de câmera/GPS/4G.

### 5.2 Testes existentes do backend

**Resultado: 17 executados; 8 passaram; 9 falharam; nenhum erro de execução.** A suite foi executada após resolver permissões de leitura das dependências. A tentativa inicial falhou na importação no sandbox e não foi contada como teste de produto executado.

Ambiente: Python 3.12.14; SQLite em memória; SECRET_KEY sintética para avaliação; nenhum banco real. Foram mantidas as versões diretas declaradas de FastAPI 0.115.0, SQLAlchemy 2.0.36, Pydantic 2.9.2, email_validator 2.2.0, python-jose 3.5.0, passlib 1.7.4, bcrypt 4.0.1 e python-dotenv 1.0.1. Dependências transitivas foram resolvidas localmente. O Docker declara Python 3.11; o ambiente final ainda exige verificação.

A instalação integral de requirements.txt não terminou nesta máquina ao obter watchfiles, dependência do servidor uvicorn[standard]. A execução usou somente as dependências necessárias aos testes. Isso não equivale a validar a instalação completa ou a implantação do backend.

| Caso que falhou | Resultado observado / interpretação |
|---|---|
| test_exige_codigo_quando_item_tem_rotulo | Validação esperada não ocorre; avaliar obrigação conforme fluxo atual. |
| test_preserva_zeros_a_esquerda_do_codigo | Código informado torna-se None; perda da identificação no cadastro. |
| test_rejeita_codigo_em_embalagem_sem_rotulo | Validação esperada não ocorre; reconciliar política de identificação. |
| test_confirma_codigo_correspondente | Retorno fixo ignora o código; conferência obrigatória do ponto não deve ser restaurada automaticamente. |
| test_confirma_identificacao_manual | Retorno fixo ignora a descrição; avaliar função necessária no novo fluxo. |
| test_exige_descricao_manual_para_item_sem_rotulo | Validação legada não ocorre; mapear ao requisito correto. |
| test_rejeita_codigo_diferente | Comparação não ocorre; reconciliar escopo da conferência. |
| test_admin_tambem_precisa_identificar_produto | Endpoint não levanta o erro esperado; expectativa operacional legada. |
| test_repeticao_idempotente_nao_duplica_reserva | Esperava reserva de 3, obteve 0; código mudou para baixa imediata. Não significa sozinho que a chave de idempotência falhou. |

A suite contém verificações úteis de rejeição de QR no contrato, itens duplicados, lote parcial e repetição. Também há testes de regras antigas. **Não basta tornar os testes antigos verdes:** é necessário associar cada expectativa à V6 e adicionar regressões dos efeitos observados na sequência completa.

### 5.3 Reproduções adicionais, com dados sintéticos

| Cenário local | Resultado observado | Esperado segundo a V6 / limite |
|---|---|---|
| Estoque 10; enviar 3 pelo lote | Estoque 7, pontos 30, descarte pendente, estoque do ponto vazio | A entrega concluída precisa de um resultado consistente com 10 pontos; não por unidade. |
| Confirmar depois o mesmo descarte com quantidade 3 | Estoque 4, pontos 60, ponto recebe 3 | Um único movimento pessoal, entrada e crédito; sem segunda baixa/crédito. |
| Chamar helper operacional com cooperativa sem vínculo | Ponto aceito pelo helper | A abrangência deve depender de autorização; cadeia HTTP ainda precisa de teste. |
| Validar pesos_reais com plástico = -3 | Schema aceita -3 | Peso negativo deve ser rejeitado. Não houve chamada HTTP para esse caso. |
| Snapshot solicitado com 10 unidades; inventário atual com 15; concluir com 2 kg | Estoque do material eliminado, inclusive entradas posteriores | Não eliminar saldo por inferência; conciliação/retirada parcial precisam de regra aprovada. |

Reprodução de saldo/pontuação utilizou as funções de lote e confirmação com a fixture SQLite da suite existente. As chamadas diretas não simulam HTTP, autenticação real, GPS de dispositivo ou lock concorrente do PostgreSQL.

### 5.4 Inspeção estática adicional

- **108 arquivos Python** do snapshot foram analisados sintaticamente sem erro.
- **29 migrations**, cabeça `c8b2c451f28b`, sem referências a pais ausentes na inspeção do grafo.
- Não foi executado `alembic upgrade`; não houve atualização de banco.
- Não foram auditadas vulnerabilidades de dependências por catálogo/CVE nesta análise.
- As cópias dos dois repositórios permanecem sem mudanças em arquivos rastreados após as verificações.

## 6. Como orientar o desenvolvimento agora

### 6.1 Primeira entrega de adequação: integridade e acesso

| Trabalho | Tasks existentes | Evidência para aceitar a correção |
|---|---|---|
| Unificar entrega e recompensa | TSK-MOR-010, TSK-MOR-015, TSK-MOR-017; TSK-TRA-004 | Estoque inicial 10, entrega 3: saldo final 7 e 10 pontos uma vez; entrada no ponto coerente; reenvio sem efeito extra. |
| Rever acesso operacional e ingresso | TSK-ADM-004, TSK-ADM-008, TSK-PON-001; TSK-TRA-003 | Cooperativa sem atribuição não opera o ponto; responsável autorizado edita materiais; ingresso segue política aprovada. |
| Definir material/unidade e saneamento | TSK-MOR-008, TSK-PON-002, TSK-COO-004 | PET/lata aceitos conforme catálogo aprovado; contagem e peso separados; nenhuma migração destrutiva inferida. |
| Corrigir retirada/pesagem | TSK-COO-004; TSK-TRA-004 | Peso negativo rejeitado; novas entradas e remanescentes preservados conforme conciliação aprovada. |
| Padronizar execução e validação | TSK-TRA-012 | URL correta por ambiente, build reproduzível, testes rastreados à V6 e procedimento de migração explícito. |

Não executar reparação de saldos ou histórico em produção apenas com estes exemplos. A etapa de dados precisa identificar registros, regra vigente à época, efeitos duplicados e política de correção aprovada, mantendo trilha.

### 6.2 Segunda entrega: jornada do morador e operação

Aproveitar cadastro/perfil/estoque/mapas/Loja; implementar convites e recuperação; ajustar materiais, ação rápida, scanner e revisão; fechar GPS e descarte único. Importação da nota depende da fonte aprovada.

Depois integrar pedido do responsável, solicitação administrativa, horário, aceite e painel/rota da cooperativa. Reaproveitar endpoints existentes de solicitação e aceite; não criar uma segunda operação paralela para o mesmo chamado.

### 6.3 Terceira entrega: incentivos e comercial

Reconciliar campanhas e bônus com eventos elegíveis; validar vouchers e sorteios. Construir pagamento de coleta, planos e autorização comercial após as decisões do idealizador. Não antecipar valor da coleta, provedor, preço/pacote de plano, cashback ou ranking.

### 6.4 Decisões que continuam necessárias

| Grupo de decisões | Pendências V6 |
|---|---|
| Convites, campos, sessões e vínculos | PD-001 a PD-003; PD-023 |
| Fontes de produto/nota e reimportação | PD-004/PD-005 |
| Estoque rápido, GPS, disponibilidade/capacidade | PD-006 a PD-009 |
| Pontuação definitiva, campanha, voucher e sorteio | PD-010 a PD-013 |
| Estados, pagamento, rota e conciliação | PD-014 a PD-018 |
| Planos, indicadores e notificação | PD-019 a PD-021 |
| Privacidade, mídia, desempenho e infraestrutura | PD-022; PD-024 a PD-026 |
| Funcionalidades futuras | PD-027 |

O diagnóstico localiza código, mas **não resolve regras de negócio por imitação do legado**. Por exemplo: padrão de raio de 1000 m, uma chance por sorteio, bônus por adesão e cadastro público não passam a ser decisões atuais porque estão implementados.

## 7. Relação com o backlog e próximos passos de verificação

TSK-TRA-000 avançou com acesso às versões do código, inventário documental e verificações locais. Permanece parcial: falta ambiente implantado, banco/migrations reais em avaliação, jornadas por HTTP/navegador, dispositivo, carga e validação dos responsáveis. Não marcar diagnóstico integral nem tarefas funcionais como concluídos.

Refinar as 93 tasks usando a matriz deste documento. Registrar por tarefa: evidência do comportamento atual, recorte aprovado, ação de reaproveitamento/ajuste/construção, dependências e teste que comprovará o resultado. Estimativas, sprint e responsável nominal continuam a definir pela equipe.

Preservar o que já existe fora do escopo confirmado — modelos QR, ranking, certificado e cadastro público — até decidir desativação/exposição e impacto nos dados. Existência não autoriza continuidade no novo MVP; este estudo também não autoriza remoção automática.

**Entrega desta análise:** comparativo completo dos 53 RF e 12 RNF, 16 achados com evidência, resultados locais e ordem de adequação. Não foram feitas correções no código dos repositórios de origem nem publicadas alterações nesses projetos.
