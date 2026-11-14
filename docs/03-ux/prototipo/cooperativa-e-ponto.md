# Protótipo FigCraft: perfis Responsável pelo ponto e Cooperativa

[Voltar ao protótipo](../prototipo-figcraft.md)

> **Estado:** revisão · **Dono:** UX · **Atualizado em:** 14/11/2026
> **Arquivo:** `residuum-v7.figcraft`, páginas **4 · Computador · 1440 px**, **3 · Tablet · 768 px** e **2 · Celular · 390 px**. Em 14/11 a barra inferior do responsável (Painel, Entregas, Conferência, Pedir coleta, Mais) e da cooperativa (Painel, Coletas, Locais, Avulso, Conta) foi igualada nas telas antigas e novas; estados de vazio, carregando e erro (Entregas, Conferência e Pontos dos usuários; Painel, Coletas e Locais) estão nos blocos "ESTADOS" das páginas 2 e 3. Quantidades agora em unidades inteiras · **Tamanhos:** computador (1440 × 900) e celular (390 × 844)
> **Fontes:** `indice-correcoes-cooperativa.md` e `revisao-geral.md` do FigCraft; regras das decisões de 11 e 12/11/2026.

## Resumo

O índice de telas lista oito rotas compartilhadas entre os dois perfis. O protótipo as separou em dois:

- **Responsável pelo ponto** (menu: Painel, Entregas, Conferência, Pedir coleta, Pontos dos usuários, Relatórios): quadros **P01 a P08** e **MP1 a MP4**.
- **Cooperativa** (menu: Painel, Solicitações, Meus locais, Pontos dos usuários, Relatórios): quadros **C01 a C06** e **MC1 a MC9**.

São **30 telas**, em **4 fluxos**. Quem confirma a entrega é o **operador do ponto**; o administrador encaminha a coleta e a cooperativa aceita, retira e registra o que levou.

## Os fluxos (caminhos)

Os diagramas mostram o **caminho esperado**. As ligações exatas de clique estão no arquivo FigCraft e ainda não foram testadas em modo apresentação.

### Fluxo 1: Responsável, painel, entregas e pedir coleta (computador)

```mermaid
flowchart LR
  P01[P01 Painel do ponto] --> P02[P02 Entregas a receber]
  P02 -->|confirmar| P02b[P02b Entrega confirmada: 10 pontos]
  P02 -->|rejeitar| P08[P08 Rejeitar com motivo]
  P01 --> P06[P06 Pedir coleta] --> P07[P07 Acompanhar o pedido]
  P01 --> P03[P03 Conferência de descartes]
  P01 --> P04[P04 Pontos dos usuários]
  P01 --> P05[P05 Relatórios]
```

### Fluxo 2: Cooperativa, painel e solicitações (computador)

```mermaid
flowchart LR
  C01[C01 Painel da cooperativa] --> C03[C03 Solicitações de coleta]
  C03 --> C04[C04 Responder]
  C04 -->|aceitar| C04b[C04b Solicitação aceita]
  C04 -->|recusar| C05[C05 Recusar com motivo]
  C04b -->|cancelar| C06[C06 Cancelar coleta aceita]
  C01 --> C02[C02 Meus locais]
```

### Fluxo 3: Responsável no celular, entregas e pedido

```mermaid
flowchart LR
  MP1[MP1 Entregas a receber] --> MP1b[MP1b Entrega confirmada]
  MP1 --> MP2[MP2 Pedir coleta] --> MP3[MP3 Pedido enviado]
  MP1 --> MP4[MP4 Conta]
```

### Fluxo 4: Cooperativa no celular, do aceite ao registro

```mermaid
flowchart LR
  MC1[MC1 Coletas] --> MC2[MC2 Coleta aceita] --> MC3[MC3 A caminho]
  MC3 --> MC4[MC4 Registrar retirada: pesos] --> MC5[MC5 Revisar] --> MC6[MC6 Coleta registrada]
  MC1 --> MC9[MC9 Locais]
  MC1 --> MC8[MC8 Lançamento avulso]
```

## As 30 telas

| Quadro | Tela | Perfil |
|---|---|---|
| P01 · P01c | Painel do ponto · carregando | Responsável |
| P02 · P02b · P08 | Entregas a receber · confirmada · rejeitar | Responsável |
| P03 · P04 · P05 | Conferência de descartes · pontos dos usuários · relatórios | Responsável |
| P06 · P07 | Pedir coleta · acompanhar o pedido | Responsável |
| MP1 · MP1b · MP2 · MP3 · MP4 | Entregas, pedido e conta no celular | Responsável |
| C01 · C02 | Painel da cooperativa · meus locais | Cooperativa |
| C03 · C04 · C04b · C05 · C06 | Solicitações: lista, responder, aceita, recusar e cancelar | Cooperativa |
| MC1 · MC2 · MC3 | Coletas, coleta aceita e a caminho (celular) | Cooperativa |
| MC4 · MC5 · MC6 | Registrar a retirada por material, revisar e coleta registrada | Cooperativa |
| MC8 · MC9 | Lançamento avulso · locais (celular) | Cooperativa |

## Antes e depois, tela por tela

Cada bloco traz o **antes** (captura do app atual) e o **depois** (novo desenho) lado a lado e, abaixo, as correções: **Erro**, **Por quê** (veja os [princípios de design](../prototipo-figcraft.md#2-princípios-de-design)) e **Como fica**.

### P01 Painel do ponto

*Rota no app atual: `/dashboard (ponto)`, `/dashboard (carregando)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: P01 Painel do ponto](img/antes-op-dashboard.jpg) ![Antes: P01 Painel do ponto](img/antes-op-dashboard-carregando.jpg) | ![Depois: P01 Painel do ponto](img/P01.png) |

- **K01** · Postel · UX + decisão 11/11 (PON-10, F-13)
  - **Erro:** "Total Coletado: 900 kg" soma o inventário em unidades de embalagem e escreve "kg".
  - **Por quê:** Postel: a saída deve ser limpa e honesta. O requisito RF-MVP-035 proíbe converter latas em kg sem regra validada.
  - **Como fica:** Card "Materiais no ponto (em unidades)" com PET e lata separados e a legenda "Contagem de embalagens, não peso".
- **K02** · Doherty, Jakob · UX
  - **Erro:** Enquanto carrega, só aparece um cartão com "Carregando painel do ponto...". Em tela raiz há um botão "Voltar" no topo.
  - **Por quê:** Doherty: mostrar a estrutura da página de imediato (skeleton). Jakob: com menu lateral, "Voltar" em tela raiz confunde.
  - **Como fica:** Skeleton com os 4 indicadores e os 2 cards (P01c). Botão "Voltar" removido.
- **K03** · sem lei (decisão) · Decisão (RF-MVP-036, PD-014)
  - **Erro:** O painel não mostra a ocupação do ponto nem tem como pedir coleta.
  - **Por quê:** 
  - **Como fica:** Alerta "PET com 86% da capacidade" (a partir de 80%, D-CT-06), indicador de ocupação e botão "Pedir coleta" (P06).

### P02 Entregas a receber

*Rota no app atual: `/ponto-coleta-recepcao`, `/ponto-coleta-recepcao (390 px)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: P02 Entregas a receber](img/antes-op-recepcao.jpg) ![Antes: P02 Entregas a receber](img/antes-op-recepcao-390.jpg) | ![Depois: P02 Entregas a receber](img/P02.png) |

- **K04** · Jakob, WCAG AA · UX
  - **Erro:** Material marcado só pela cor da barra lateral e por etiqueta de 10 px ("PLASTICO", "ALUMINIO", sem acento). O texto diz "Cidadão" e no app do usuário o nome é "Usuário".
  - **Por quê:** Jakob: o mesmo vocabulário em todo o produto. WCAG: tipo e estado não podem depender só da cor; texto pequeno.
  - **Como fica:** Material em texto ("PET", "Lata") dentro da linha, 14 px, e "Usuário" no lugar de "Cidadão".
- **K05** · Fitts, Miller · UX + decisão 11/11 (PD-010)
  - **Erro:** "Confirmar Entrega do Cidadão" quebra em 3 linhas no celular. "Rejeitar Entrega" age sem pedir motivo. O resultado da confirmação não é mostrado.
  - **Por quê:** Fitts: rótulo curto e alvo largo. Miller: menos texto por botão. Decisão: os 10 pontos só são creditados depois da confirmação.
  - **Como fica:** "Confirmar entrega" e "Rejeitar" com 44 a 48 px. Aviso "10 pontos creditados" (P02b, MP1b).

### P03 Conferência de descartes

*Rota no app atual: `/aprovacao`, `/aprovacao (390 px)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: P03 Conferência de descartes](img/antes-op-aprovacao.jpg) ![Antes: P03 Conferência de descartes](img/antes-op-aprovacao-390.jpg) | ![Depois: P03 Conferência de descartes](img/P03.png) |

- **K06** · Postel · UX + decisão 11/11 (PON-10, F-13)
  - **Erro:** A quantidade declarada aparece como "1,5 kg" quando o usuário informou 1,5 unidade.
  - **Por quê:** Postel: saída limpa, com a unidade certa. Decisão: unidades em kg deixam de aparecer onde não há pesagem.
  - **Como fica:** Quantidade em "un." (declarado) e peso só no registro da coleta.
- **K07** · Doherty, Miller, WCAG AA · UX
  - **Erro:** Botão "Aprovar" desabilitado em cinza azulado e o motivo em laranja de 10 px, longe do botão. Em 390 px cada cartão ocupa mais de uma tela e o "Aprovar" fica abaixo da dobra. Há 5 blocos de texto por cartão.
  - **Por quê:** Doherty: explicar na hora por que a ação está bloqueada. Miller: agrupar em passos. WCAG: texto de 10 px com cor de aviso (#B7791F, 3,9:1).
  - **Como fica:** Passo "1. Identifique o produto" e aprovar; a mensagem fica junto do botão. Não redesenhei a Conferência em 390 px (pendência no resumo).

### P04 Pontos dos usuários

*Rota no app atual: `/pontuacao-usuarios`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: P04 Pontos dos usuários](img/antes-op-pontuacao.jpg) | ![Depois: P04 Pontos dos usuários](img/P04.png) |

- **K08** · sem lei (decisão) · Decisão 11/11 (PD-010, F-14)
  - **Erro:** A tela estima pontos no cliente ("5 pts por unidade": +10, +8, +4) e chama o usuário de "Cidadão".
  - **Por quê:** Decisão: a entrega confirmada vale 10 pontos e quem credita é o servidor. A estimativa no cliente contradiz a regra. (Mudança de regra, não é achado de UX.)
  - **Como fica:** Mostra só pontos confirmados e aguardando, vindos do servidor.
- **K09** · Miller · UX
  - **Erro:** Um cartão por usuário com seis números de 9 a 11 px cada, difíceis de comparar.
  - **Por quê:** Miller: dados comparáveis ficam em tabela, em colunas curtas.
  - **Como fica:** Tabela: Usuário, Entregas, Unidades, Confirmados, Aguardando.

### P05 Relatórios

*Rota no app atual: `/ponto-coleta-relatorios e /cooperativa-relatorios`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: P05 Relatórios](img/antes-op-relatorios.jpg) | ![Depois: P05 Relatórios](img/P05.png) |

- **K10** · Hick, Jakob · UX + decisão pendente (PD-019, PD-020)
  - **Erro:** Três cartões iguais, cada um com um botão desabilitado "Em breve", e botão "Voltar".
  - **Por quê:** Hick: três blocos sem ação disputam atenção. Jakob: relatório indisponível se mostra como estado vazio único.
  - **Como fica:** Um estado vazio "Relatórios em breve" com a lista do que virá.

### C01 Painel da cooperativa

*Rota no app atual: `/dashboard (cooperativa, 390 px)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: C01 Painel da cooperativa](img/antes-op-dashboard-390.jpg) | ![Depois: C01 Painel da cooperativa](img/C01.png) |

- **K11** · Miller, Fitts · UX + decisão (PD-014, PD-017)
  - **Erro:** No celular os quatro indicadores viram quatro cartões de cerca de 200 px, empilhados: o trabalho do dia fica abaixo da dobra. Não há solicitações de coleta.
  - **Por quê:** Miller: agrupar o que importa agora. Fitts: ação principal ao alcance do polegar.
  - **Como fica:** Desktop: indicadores, "Solicitações novas" e "Pontos que precisam de coleta". Celular: lista "Coletas" do dia (MC1).

### C02 Meus locais

*Rota no app atual: `/meus-pontos-operacionais`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: C02 Meus locais](img/antes-op-meus-locais.jpg) | ![Depois: C02 Meus locais](img/C02.png) |

- **K12** · Miller, WCAG AA · UX
  - **Erro:** Três cartões de alturas diferentes. Situação em selo de 9 px ("ATIVO", "CHEIO"), blocos verdes "Tudo em dia" repetidos e horário em itálico cinza.
  - **Por quê:** Miller: locais comparáveis lado a lado. WCAG: situação em texto e ícone, 14 px, contraste 4,5:1 ou mais.
  - **Como fica:** Tabela com ocupação em barra e %, situação em texto com ícone e coluna "Coleta".

### MC8 Lançamento avulso (celular)

*Rota no app atual: `/entrada-peso (390 px)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: MC8 Lançamento avulso (celular)](img/antes-op-entrada-peso-390.jpg) | ![Depois: MC8 Lançamento avulso (celular)](img/MC8.png) |

- **K13** · Jakob, Hick · UX + pendência (F-06, PD-018)
  - **Erro:** Tela "Registrar Coleta" sem ligação com solicitações e fora do menu (o menu tem 4 itens e nenhum leva a ela). O campo de ponto fica em "Carregando...".
  - **Por quê:** Jakob: registrar a retirada acontece dentro da coleta aceita. Hick: um fluxo só para registrar pesos.
  - **Como fica:** Registro de pesos dentro da coleta (MC4 a MC6).

### MP4 Conta (operador)

*Rota no app atual: `barra inferior (390 px)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: MP4 Conta (operador)](img/antes-op-recepcao-390.jpg) | ![Depois: MP4 Conta (operador)](img/MP4.png) |

- **K14** · Jakob, Fitts · UX
  - **Erro:** Barra de 5 itens com "Sair" em vermelho ao lado de Relatórios.
  - **Por quê:** Jakob: sair fica na conta. Fitts: evita toque acidental na saída.
  - **Como fica:** Barra de 3 ou 4 destinos do perfil e item "Conta" com "Sair da conta" (mesmo padrão do Usuário).

## Telas novas, só com o depois

Estas telas não existem no app atual, por isso não têm "antes".

### P01c · Painel do ponto - carregando

![P01c](img/P01c.png)

### P02b · Entregas - entrega confirmada

![P02b](img/P02b.png)

### P08 · Rejeitar entrega

![P08](img/P08.png)

### P06 · Pedir coleta

![P06](img/P06.png)

### P07 · Pedido de coleta - acompanhar

![P07](img/P07.png)

### C03 · Solicitações de coleta

![C03](img/C03.png)

### C04 · Solicitação - responder

![C04](img/C04.png)

### C04b · Solicitação - aceita

![C04b](img/C04b.png)

### C05 · Recusar solicitação

![C05](img/C05.png)

### C06 · Cancelar coleta aceita

![C06](img/C06.png)

### MP1 · Entregas a receber (celular)

![MP1](img/MP1.png)

### MP1b · Entregas - confirmada (celular)

![MP1b](img/MP1b.png)

### MP2 · Pedir coleta (celular)

![MP2](img/MP2.png)

### MP3 · Pedido enviado (celular)

![MP3](img/MP3.png)

### MC1 · Coletas (celular)

![MC1](img/MC1.png)

### MC2 · Coleta aceita (celular)

![MC2](img/MC2.png)

### MC3 · A caminho (celular)

![MC3](img/MC3.png)

### MC4 · Registrar retirada - pesos

![MC4](img/MC4.png)

### MC5 · Registrar retirada - revisar

![MC5](img/MC5.png)

### MC6 · Coleta registrada

![MC6](img/MC6.png)

### MC9 · Locais (celular)

![MC9](img/MC9.png)


## De onde vêm as telas novas

| Quadro | Tela | Perfil | Regra de origem |
|---|---|---|---|
| P06, MP2 | Pedir coleta: materiais, quando prefere, observação | Responsável | PD-014, PD-015 |
| P07, MP3 | Acompanhar o pedido: solicitada, aceita, em execução, registrada | Responsável | PD-014 |
| P08 | Rejeitar entrega com motivo | Responsável | PD-010 |
| P01c | Painel carregando | Responsável | Só UX |
| P02b, MP1b | Entrega confirmada, com aviso de 10 pontos | Responsável | PD-010 |
| C03 | Solicitações: abas Novas, Aceitas, Em execução e Concluídas | Cooperativa | PD-014 |
| C04, C04b | Ver e aceitar a solicitação; solicitação aceita | Cooperativa | PD-014, PD-017 |
| C05 | Recusar com motivo | Cooperativa | PD-014 |
| C06 | Cancelar coleta já aceita, com motivo | Cooperativa | PD-014 |
| MC1, MC2 | Coletas do dia e coleta aceita ("Estou a caminho") | Cooperativa | PD-014, PD-017 |
| MC3 | A caminho, com a rota planejada (não o trajeto percorrido) | Cooperativa | PD-017 |
| MC4, MC5 | Registrar a retirada: peso por material (kg), coleta parcial, revisar | Cooperativa | PD-014, PD-018 |
| MC6 | Coleta registrada; pagamento separado ("não iniciado") | Cooperativa | PD-016 |
| MC9 | Locais (celular) | Cooperativa | Só UX |

O registro de pagamento manual com comprovante é do perfil Administrador.

## Decisões aplicadas neste perfil

| Tela | Mudança |
|---|---|
| Painel e conferência | Unidades em **kg** trocadas por **unidades** (PON-10, F-13) |
| Pontos dos usuários | Estimativa de pontos no cliente removida; **10 pontos** só depois da confirmação (PD-010, F-14) |
| Cadastro de ponto | Telas `/cadastro-ponto-coleta`, `/empresa` e `/confirmacao` **removidas**: só o administrador cria ponto (RN-011) |
| Coleta | Estados "a caminho" e "cancelada" e registro **parcial** por material |

## Pontos a observar

- Os dados são **fictícios**.
- Só o painel do ponto tem a versão "carregando"; vazio e erro não foram desenhados de forma sistemática.
- A tela de conferência de descartes (`/aprovacao`) em 390 px não foi desenhada.
- O botão "Sair da conta" do celular dos operadores não está ligado a nenhuma tela.
