# Entrega de design do Residuum

> **Estado:** revisão · **Dono:** UX · **Atualizado em:** 13/11/2026
> **Arquivo de design:** `residuum-v7.figcraft`, feito no **FigCraft** (não no Figma). Os desenhos são exportados em **SVG** para o Figma.
> **Fontes:** o próprio arquivo (reorganizado e conferido em 13/11/2026), `revisao-geral.md`, os três índices de correções e o diário do FigCraft, em `tmp/figcraft/`.

## 1. O que está sendo entregue

Uma revisão de design completa do app, em três perfis, com **o antes e o depois** de cada tela e as regras de negócio decididas em 11 e 12/11/2026 aplicadas.

| Item | Quantidade |
|---|---|
| Perfis | 3: Usuário, Responsável e Cooperativa, Administrador |
| Módulos | 19 |
| Telas novas (depois) | 82 |
| Capturas do app atual (antes) | 36 |
| Notas de correção (erro, por quê, como fica) | 33 |
| Fluxos clicáveis | 12 |
| Documentos | Este, mais um por perfil: [Usuário](prototipo/usuario.md), [Responsável e Cooperativa](prototipo/cooperativa-e-ponto.md), [Administrador](prototipo/administrador.md) |

![Página "Comece aqui" do arquivo de design](prototipo/img/comece-aqui.png)

## 2. Princípios de design

| Princípio | Na prática |
|---|---|
| **Familiar** (lei de Jakob) | O app se comporta como os que a pessoa já conhece: um nome só para cada coisa ("Usuário", nunca "morador" ou "cidadão") |
| **Poucas escolhas** (lei de Hick) | Menos opções por tela; ação principal sempre à vista |
| **Fácil de tocar** (lei de Fitts) | Alvos de toque de **48 px** (mínimo 44 px) |
| **Informação em blocos** (lei de Miller) | Agrupar o que a pessoa precisa guardar na memória |
| **Resposta rápida** (lei de Doherty) | Toda espera ou falha tem aviso claro e próximo passo |
| **Acessível** (WCAG AA) | Texto com contraste de pelo menos **4,5 para 1**; estado sempre por texto **e** ícone, nunca só por cor |

## 3. Fundamentos do design system

Os fundamentos ficam na página **Tokens e componentes** do arquivo. Os valores vêm do código do frontend (`src/index.css`); as marcas "novo" são ajustes feitos no protótipo.

![Tokens e componentes](prototipo/img/tokens.png)

### Cores

| Papel | Valor | Observação |
|---|---|---|
| Primária | `#1A2C71` | Botões principais, títulos, menu ativo |
| Primária escura | `#121D4D` | Fundos escuros |
| Acento verde | `#2EA44F` | Só em ilustração e barras: contraste de 3,2 para 1 com branco |
| **Verde de botão (novo)** | `#1E7A3A` | Botão de confirmação com texto branco: contraste de **5,4 para 1** |
| Erro | `#C53030` | Perigo e rejeição |
| Aviso (texto) | `#8A5A12` | Estados "aguardando" |
| Superfície / borda | `#F6F8FA` / `#DDE5EE` | Fundo das telas e contornos |
| Texto / texto apagado | `#111827` / `#5F6B7A` | O apagado tem 5,4 para 1 |
| **Placeholder (novo)** | `#6B7686` | Contraste de **4,6 para 1** (o antigo, `#94A3B8`, tinha 2,6) |

A comparação de azul, verde, logo, menu e avisos está na página **Para decidir** do arquivo; as decisões ficam em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md).

### Tipografia (Inter)

| Estilo | Tamanho e peso |
|---|---|
| Título | 26 / 700 |
| Subtítulo | 20 / 700 |
| Corpo | 16 / 400 |
| Legenda | 13 / 500 (mínimo) |

### Componentes

| Componente | Regra |
|---|---|
| **Botão primário** | Azul, texto branco, uma por tela |
| **Botão de confirmação** | Verde `#1E7A3A`, para ações que concluem (confirmar entrega, receber pontos) |
| **Botão secundário** | Contorno azul |
| **Botão de perigo** | Contorno vermelho, sempre separado da ação segura |
| **Campo** | Rótulo sempre visível acima; placeholder `#6B7686` |
| **Selos de estado** | **Aberto** (verde), **Aguardando** (âmbar), **Cheio** (vermelho): sempre com ícone e texto. "Quase cheio" aos 80% |
| **Modal** | Título, o impacto em uma frase, ação segura preenchida e ação destrutiva separada com borda vermelha |
| **Aviso de apoio** | Itálico, 13 px, `#5F6B7A` (5,4 para 1) |
| **Menu do Administrador** | Lateral, em 3 grupos: Operação, Pessoas e ofertas, Governança |
| **Barra do celular** | Inferior, com o botão **+** centralizado para registrar resíduo |

## 4. Como o arquivo está organizado

O arquivo tem **6 páginas**. Em cada página de perfil o desenho segue **sempre a mesma divisão**:

1. **Faixa rosa, no topo: ANTES.** Todas as capturas do app atual, por módulo.
2. **Faixa verde, embaixo: DEPOIS.** O novo desenho, clicável, por módulo.
3. **Nota abaixo de cada tela nova:** erro, por quê (a lei de UX) e como fica.

Os espaços vazios na zona ANTES são **telas novas**, que não existem no app atual. Cada módulo ocupa a **mesma coluna** nas duas zonas, então o antes fica em cima do depois.

| # | Página | Conteúdo |
|---|---|---|
| 1 | Comece aqui | Três cartões, um por perfil |
| 2 | Usuário (390 px) | 31 telas, 6 módulos |
| 3 | Tokens e componentes | Cores, tipografia e peças |
| 4 | Cooperativa e Ponto (1440 e 390 px) | 30 telas, 7 módulos |
| 5 | Administrador (1440 px) | 21 telas, 6 módulos |
| 6 | Para decidir (comparar) | 5 quadros de comparação |

**Nomes dos quadros:** `ANTES · USU · U05 · Início`, `DEPOIS · USU · U05 · Início`, `NOTA · USU · U05 · Correções`. As siglas são **USU** (usuário), **PONTO**, **COOP** e **ADM**.

![Visão geral do perfil Usuário: antes em cima, depois embaixo](prototipo/img/mapa-usuario.png)

## 5. Módulos e telas

### Perfil Usuário (celular, 390 × 844)

Detalhe de cada tela: [usuario.md](prototipo/usuario.md).

| Módulo | Telas | O que resolve |
|---|---|---|
| **1 · Acesso e conta** | U01, U02, U02b, U02c, U04, U04b | Entrar, criar conta (cadastro aberto), vagas esgotadas com lista de espera, recuperar senha |
| **2 · Início e registro de resíduo** | U05 a U10 | Botão **+** com três formas: código de barras, QR da nota e manual; falha de leitura com aviso vermelho e manual recomendado a partir da 2ª |
| **3 · Estoque e entrega** | U12 a U16 | Meu estoque, descarte em 3 passos, GPS de 100 m e entrega enviada |
| **4 · Mapa e extrato** | U17, U18 | Pontos com estado (aberto, quase cheio, cheio) e extrato com 10 pontos por descarte |
| **5 · Loja, sorteios e campanhas** | U19 a U22b | Campanhas, sorteios de teste, compra de bilhete, bônus pelo botão "Receber pontos" |
| **6 · Perfil** | U23, U24 | Dados e sair da conta |

| Antes | Depois |
|---|---|
| ![Cadastro antes](prototipo/img/antes-cadastro.jpg) | ![Criar conta depois](prototipo/img/U02.png) |

**Cadastro (U02):** o cadastro é aberto, sem código; menos campos por tela e aviso quando as vagas acabam.

| Leitura do código | Falha de leitura (2ª) | Fora do raio de 100 m |
|---|---|---|
| ![U07](prototipo/img/U07.png) | ![U08b](prototipo/img/U08b.png) | ![U14b](prototipo/img/U14b.png) |

**Registro e entrega:** cada falha mostra um aviso vermelho; a partir da 2ª, o app recomenda o cadastro manual. Fora de 100 m do ponto, a entrega não é liberada.

### Perfis Responsável pelo ponto e Cooperativa (computador e celular)

Detalhe de cada tela: [cooperativa-e-ponto.md](prototipo/cooperativa-e-ponto.md).

| Módulo | Telas | O que resolve |
|---|---|---|
| **1 · Responsável: painel e entregas** | P01, P01c, P02, P02b, P08 | Painel, entregas a receber, confirmar (10 pontos, final) e rejeitar com motivo |
| **2 · Responsável: conferência, pontos e relatórios** | P03 a P05 | Conferência de descartes, pontos dos usuários e relatórios |
| **3 · Responsável: pedir coleta** | P06, P07 | Pedir coleta e acompanhar os estados |
| **4 · Cooperativa: painel e locais** | C01, C02 | Painel e pontos atendidos |
| **5 · Cooperativa: solicitações de coleta** | C03 a C06 | Aceitar, recusar com motivo e cancelar (admin e cooperativa) |
| **6 · Responsável no celular** | MP1 a MP4 | Entregas, pedido e conta |
| **7 · Cooperativa no celular** | MC1 a MC9 | Coleta "a caminho", registro por material (parcial) e lançamento avulso |

| Antes | Depois |
|---|---|
| ![Painel do ponto antes](prototipo/img/antes-op-dashboard.jpg) | ![Painel do ponto depois](prototipo/img/P01.png) |

**Painel do ponto (P01):** unidades no lugar de kg, estados com texto e ícone e a ação "Pedir coleta" à vista.

| Solicitação aceita (C04b) | Registrar retirada (MC4) | Revisar (MC5) |
|---|---|---|
| ![C04b](prototipo/img/C04b.png) | ![MC4](prototipo/img/MC4.png) | ![MC5](prototipo/img/MC5.png) |

**Coleta:** a cooperativa aceita em até 48 h, marca "a caminho" e informa o que levou, por material. A coleta parcial é permitida.

### Perfil Administrador (computador, 1440 × 900)

Detalhe de cada tela: [administrador.md](prototipo/administrador.md).

| Módulo | Telas | O que resolve |
|---|---|---|
| **1 · Painel, usuários e vagas** | A01, A02, A02b, A02c, A02d | Painel, teto de contas, ajuste de pontos com motivo e lista de espera |
| **2 · Pontos e coletas** | A03, A03b, A04, A04b | Criar ponto (só o admin), raio do GPS, capacidade por material, solicitar coleta |
| **3 · Pagamento manual** | A05, A05b, A05c | Registrar o pagamento com comprovante, por kg e material |
| **4 · Campanhas** | A06, A06b, A07, A07b, A08 | Criar, excluir e acompanhar campanhas |
| **5 · Sorteios e vouchers** | A09, A09b | Sorteios de teste e cancelamento que devolve os pontos |
| **6 · Conferência e relatórios** | A10, A11 | Validar descartes, relatórios e auditoria |

| Painel (A01) | Teto de contas (A02b) |
|---|---|
| ![A01](prototipo/img/A01.png) | ![A02b](prototipo/img/A02b.png) |

| Pagamento manual (A05b) | Cancelar sorteio (A09b) |
|---|---|
| ![A05b](prototipo/img/A05b.png) | ![A09b](prototipo/img/A09b.png) |

## 6. Os 12 fluxos

Um fluxo é um caminho de telas que se percorre clicando, no modo apresentação. A jornada central, **cadastrar, registrar o resíduo, entregar, ser confirmado, ganhar pontos e gastar na loja**, passa pelos fluxos do Usuário e pelo do Responsável, que confirma a entrega.

| Perfil | Fluxo | Começa em |
|---|---|---|
| Usuário | Entrar e usar o app | U01 Login |
| Usuário | Criar conta (cadastro aberto) | U02 Criar conta |
| Usuário | Adicionar resíduo e levar ao ponto | U05 Início |
| Usuário | Loja, sorteio e campanha | U19 Loja |
| Responsável | Painel, entregas e pedir coleta | P01 Painel do ponto |
| Cooperativa | Painel e solicitações | C01 Painel da cooperativa |
| Responsável (celular) | Entregas e pedido | MP1 Entregas a receber |
| Cooperativa (celular) | Da coleta aceita ao registro | MC1 Coletas |
| Administrador | Painel, usuários e vagas | A01 Painel |
| Administrador | Pontos e coletas | A03 Pontos de coleta |
| Administrador | Pagamento manual | A05 Pagamentos |
| Administrador | Campanhas e sorteios | A06 Campanhas |

Os diagramas dos caminhos de cada perfil estão nos documentos por perfil.

## 7. Para o desenvolvimento (handoff)

| Item | Regra |
|---|---|
| **Tokens** | Cores e tipografia da seção 3. Os ajustes marcados "novo" (verde de botão e placeholder) precisam entrar em `src/index.css` |
| **Rotas** | Cada tela do app atual tem sua rota no [índice de telas](indice-de-telas.md); cada quadro do arquivo leva a rota no nome do "antes" |
| **Regras de negócio** | Estão em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md) (seção "Já decidido"); cada nota de correção cita a PD ou a decisão que a originou |
| **Telas removidas** | `/campanha-heineken`, `/cadastro-ponto-coleta`, `/empresa`, `/confirmacao` e a aba "Solicitações pendentes" de `/admin-pontos` |
| **Estados** | Existe "carregando" só no painel do ponto; vazio e erro ainda precisam ser desenhados |
| **Dados** | Todos os dados do protótipo são fictícios |

## 8. Como abrir, apresentar e exportar

1. Abra `tmp/figcraft/residuum-v7.figcraft` no aplicativo **FigCraft**. A pasta `tmp/` **não está no repositório**; ao trocar de computador, leve-a em ZIP.
2. Comece pela página **1 · Comece aqui**, entre no **modo apresentação** e siga os 12 fluxos. As ligações foram conferidas por consulta, mas **o modo apresentação ainda não foi testado com cliques reais**.
3. Para o Figma: selecione os quadros **DEPOIS** e use **Exportar**, formato **SVG**. O texto sai como contorno (não editável); para manter o texto editável, exporte com texto como `<text>` e instale a fonte **Inter**. No Figma, arraste os `.svg` para a área de trabalho. `[VERIFICAR]` a importação não foi testada.
4. O SVG leva só o **desenho**: não leva ligações de clique, componentes nem variáveis. Os SVG que existem em `tmp/figcraft/svg*` são de 12/11 (v6): **exporte de novo**.

Arquivos de apoio em `tmp/figcraft/`: `residuum-v7-antes-da-reorganizacao.figcraft` (cópia anterior), `residuum-v6.figcraft`, `revisao-geral.md`, três índices de correções, `logo/`, `export/` e `screenshots/`. As **imagens** deste documento estão em [prototipo/img](prototipo/img/).

## 9. Estado da entrega e limites

| Item | Situação |
|---|---|
| Estrutura (antes em cima, depois embaixo, por módulo) | ✅ Feita em 13/11 nos três perfis |
| Telas e fluxos | ✅ 82 telas e 12 fluxos preservados (as ligações não mudaram de lugar) |
| Erro, por quê e como fica | ✅ Em uma nota abaixo de cada tela, e não separada em "erro junto do antes" |
| Três larguras por tela (celular, tablet, computador) | ⬜ Não feito: cada tela tem uma largura (celular ou computador); **tablet não existe** |
| Modo apresentação | ⬜ Não testado com cliques reais |
| Estados de vazio, erro e carregando | ⬜ Só o painel do ponto tem "carregando" |
| Exportação dos SVG do v7 e importação no Figma | ⬜ Pendente |
| Fora do desenho | Aba "Vouchers", passo 3 de nova campanha, detalhe completo da campanha, conferência em 390 px, landing e telas fora do piloto |
| Toque | O menu lateral do Administrador (40 px) e "Editar" e "Mais" nas tabelas ficaram abaixo de 44 px |
| Capturas "antes" de 1440 px | Baixa resolução (800 × 500, esticadas) |

As decisões de design em aberto estão em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md).
