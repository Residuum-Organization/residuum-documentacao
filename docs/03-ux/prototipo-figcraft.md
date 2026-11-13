# Protótipo no FigCraft: como ele funciona

> **Estado:** revisão · **Dono:** UX · **Atualizado em:** 13/11/2026
> **Fontes:** `residuum-v7.figcraft` (aberto e lido em 13/11/2026), `revisao-geral.md`, três índices de correções e o diário de bordo do FigCraft, todos em `tmp/figcraft/`.
> **Importante:** o protótipo foi feito no **FigCraft**, não no Figma. Os desenhos serão exportados em **SVG** para o Figma.

## Resumo

O protótipo mostra, para os **três perfis** (Usuário, Responsável e Cooperativa, Administrador), como cada tela do app **era** e como ela **fica** depois da revisão de design. São **82 telas novas** em **12 fluxos clicáveis**. Cada tela tem o **antes** (captura do app atual), o **depois** (novo desenho) e uma **nota** com o erro, o porquê e como ficou. Os dados mostrados são fictícios.

![Página "Comece aqui" do protótipo](prototipo/img/comece-aqui.png)

## Os três perfis

| Perfil | Tamanho | Telas | Documento |
|---|---|---|---|
| **Usuário** | Celular, 390 × 844 | 31 | [usuario.md](prototipo/usuario.md) |
| **Responsável pelo ponto e Cooperativa** | Computador, 1440 × 900, e celular, 390 × 844 | 30 | [cooperativa-e-ponto.md](prototipo/cooperativa-e-ponto.md) |
| **Administrador** | Computador, 1440 × 900 | 21 | [administrador.md](prototipo/administrador.md) |

Cada documento traz os **caminhos** (fluxos), o **antes e depois** de cada tela e as **regras** que originaram cada tela nova.

## Os 12 fluxos

Um fluxo é um caminho de telas que se percorre clicando, no modo apresentação.

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

A jornada central do produto, **cadastrar, registrar o resíduo, entregar, ser confirmado, ganhar pontos e gastar na loja**, passa pelos fluxos do Usuário e pelo fluxo do Responsável, que confirma a entrega.

## Como abrir e percorrer

1. Abra `tmp/figcraft/residuum-v7.figcraft` no aplicativo **FigCraft** (a pasta `tmp/` não está no repositório; veja "Onde estão os arquivos").
2. Comece pela página **Comece aqui**: ela tem três cartões, um por perfil, cada um ligado ao primeiro quadro do perfil.
3. Entre no **modo apresentação** e clique nos botões e nos itens do menu para seguir o caminho. As ligações foram montadas e conferidas por consulta, mas **o modo apresentação ainda não foi testado com cliques reais**.
4. Se o clique no cartão não trocar de página, abra a página do perfil pelo painel de páginas.

### As páginas do arquivo

| # | Página | O que tem |
|---|---|---|
| 1 | **Comece aqui** | Três cartões, um por perfil |
| 2 | **Usuário (390 px)** | 31 telas do celular e 4 fluxos |
| 3 | **Tokens e componentes** | Cores, tipografia e peças reutilizáveis |
| 4 | **Cooperativa e Ponto (1440 e 390 px)** | 30 telas e 4 fluxos |
| 5 | **Administrador (1440 px)** | 21 telas e 4 fluxos |
| 6 | **Para decidir (comparar)** | 5 quadros de comparação de design |

## Como ler uma tela

Em cada tela o arquivo tem **três peças**:

| Peça | O que é |
|---|---|
| **ANTES** | Captura do app atual, para ver o problema |
| **DEPOIS** | O novo desenho, clicável |
| **NOTA** | Três linhas: **Erro** (o que estava errado), **Por quê** (a lei de UX que explica) e **Como fica** |

Telas **novas**, que não existem no app, só têm o depois. Os nomes dos quadros seguem o modelo `DEPOIS · USU · U05 · Início`, com as siglas **USU** (usuário), **COOP**, **PONTO** e **ADM**.

## As leis de UX em uma frase

As notas citam leis de design. Em português simples:

| Lei | Significa |
|---|---|
| **Jakob** | As pessoas esperam que o app funcione como os outros que já conhecem |
| **Hick** | Quanto mais opções na tela, mais demora para decidir |
| **Fitts** | Botões pequenos ou distantes dão erro de toque; o mínimo é **44 px** |
| **Miller** | A memória curta guarda poucas coisas: agrupe a informação |
| **Postel** | Seja tolerante com o que a pessoa digita e claro no que mostra |
| **Doherty** | A resposta precisa ser rápida ou, pelo menos, avisar que está trabalhando |
| **WCAG AA** | Regra de acessibilidade: texto com contraste de pelo menos **4,5 para 1** |

## Tamanhos de tela

| Tamanho | Largura × altura | Onde existe |
|---|---|---|
| Celular | 390 × 844 | Usuário; Responsável e Cooperativa (celular) |
| Computador | 1440 × 900 | Responsável, Cooperativa e Administrador |
| Tablet | 768 × 1024 | **Ainda não existe** em nenhuma tela |

## Cores, tipografia e logo

A fonte é a **Inter**. As cores e a logo ficam na página **Tokens e componentes**; as comparações de azul, verde, logo, menu e avisos estão na página **Para decidir**, e as decisões correspondentes em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md). A logo clara oficial veio do Drive do projeto; a versão negativa do arquivo é derivada dela.

## Estado do arquivo

| Item | Situação |
|---|---|
| **v6** (`residuum-v6.figcraft`) | Entregue em 12/11: três perfis, antes, depois e notas, com uma largura por perfil |
| **v7** (`residuum-v7.figcraft`) | Em reorganização desde 12/11: faixas "ANTES" em cima e "DEPOIS" embaixo e as três resoluções por tela. Os quadros do Usuário já têm os nomes novos. **Não confirmei o que já foi concluído** |
| Ligações de clique | 140 no Usuário, 185 na Cooperativa e Ponto e 239 no Administrador, conferidas por consulta e por amostra |
| Modo apresentação | **Não testado** com cliques reais |
| Capturas deste documento | Exportadas do v7 em 13/11/2026 |

## Exportar para o Figma

O desenho sai do FigCraft como **SVG** e entra no Figma. `[VERIFICAR]` o passo de importação não foi testado.

1. No FigCraft, selecione os quadros **DEPOIS** (ou a página inteira) e use **Exportar**, formato **SVG**.
2. Por padrão o texto sai como **contorno** (vira desenho e não se edita no Figma). Para manter o texto editável, exporte com a opção de texto como `<text>` e instale a fonte **Inter** no computador.
3. No Figma, **arraste os arquivos `.svg`** para a área de trabalho. Cada arquivo vira um grupo de camadas vetoriais.
4. O SVG leva só o **desenho**: não leva as **ligações de clique**, os componentes nem as variáveis. A navegação clicável tem de ser refeita no Figma, ou apresentada no FigCraft.
5. As imagens do "antes" entram como **imagens**, não como vetores.

Os SVG que já existem em `tmp/figcraft/svg*` são de **12/11/2026 (v6)**: **exporte de novo** depois de fechar o v7.

## Onde estão os arquivos

Tudo fica em `tmp/figcraft/`, que **não está no repositório** (está no `.gitignore`). Ao trocar de computador, leve a pasta em ZIP.

| Arquivo ou pasta | Conteúdo |
|---|---|
| `residuum-v7.figcraft` | Arquivo atual do protótipo |
| `residuum-v6.figcraft` e `residuum-v6-backup.figcraft` | Versão entregue em 12/11 e cópia intacta |
| `revisao-geral.md` | Revisão geral, com o que foi corrigido e o roteiro de cliques |
| `indice-correcoes-usuario.md`, `-cooperativa.md`, `-administrador.md` | Correções por perfil, com erro, porquê e como fica |
| `diario-de-bordo-2026-11-12.md` | Diário do trabalho no FigCraft |
| `svg/`, `svg-op/`, `svg-adm/`, `svg-dec/` | Telas exportadas em SVG (Usuário, Cooperativa e Ponto, Administrador, comparações) |
| `screenshots/` e `export/` | Capturas "antes" e "depois" em imagem |
| `logo/` | Logo atual do app, logo oficial clara e a negativa derivada |

As **imagens** deste documento estão no repositório, em [prototipo/img](prototipo/img/).

## Limites conhecidos

1. **Dados fictícios.** O app exige o backend para entrar; as capturas "antes" usam dados de teste. Nenhum código foi alterado.
2. **Estados.** Só foram desenhadas as telas com dados. Vazio, erro e carregando não foram feitos de forma sistemática (só o painel do ponto tem "carregando").
3. **Resolução do "antes".** As capturas de 1440 px saíram pequenas (800 × 500) e foram esticadas.
4. **Não desenhado:** aba "Vouchers" do administrador, passo 3 de nova campanha, detalhe completo da campanha, conferência de descartes em 390 px e as telas do Usuário fora do piloto (landing, boas-vindas, certificado, acesso negado).
5. **Toque.** Alguns itens ficaram abaixo de 44 px: o menu lateral do Administrador (40 px) e "Editar" e "Mais" nas tabelas.
6. **Botões sem destino:** várias ações (confirmar, rejeitar, aprovar, reagendar, registrar peso, vincular responsável) não levam a uma tela; o resultado está desenhado em outro quadro.

## O que falta fazer

- [ ] Fechar a reorganização do v7: zona ANTES em cima, DEPOIS embaixo e notas separadas
- [ ] Desenhar as três larguras por tela (celular, tablet e computador); hoje só há uma ou duas
- [ ] Testar o modo apresentação nos 12 fluxos
- [ ] Exportar de novo os SVG do v7 e importar no Figma
- [ ] Refazer as capturas "antes" em tamanho real
- [ ] Desenhar os estados de vazio, erro e carregando

As decisões de design em aberto (azul, verde, logo, menu da cooperativa e avisos) estão em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md).
