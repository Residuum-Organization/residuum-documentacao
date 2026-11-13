# Protótipo FigCraft: perfil Administrador (computador)

[Voltar ao protótipo](../prototipo-figcraft.md)

> **Estado:** revisão · **Dono:** UX · **Atualizado em:** 13/11/2026
> **Arquivo:** `residuum-v7.figcraft`, página **Administrador (1440 px)** · **Tamanho das telas:** computador, 1440 × 900
> **Fontes:** `indice-correcoes-administrador.md` e `revisao-geral.md` do FigCraft; regras das decisões de 11 e 12/11/2026.

## Resumo

O administrador coordena a operação: contas e vagas, pontos de coleta, coletas, pagamentos à cooperativa, campanhas, sorteios e relatórios. São **21 telas**, em **4 fluxos**. Os quadros usam um menu lateral com três grupos: Operação, Pessoas e ofertas, Governança.

## Os fluxos (caminhos)

Os diagramas mostram o **caminho esperado**. As ligações exatas de clique estão no arquivo FigCraft e ainda não foram testadas em modo apresentação.

### Fluxo 1: painel, usuários e vagas

```mermaid
flowchart LR
  A01[A01 Painel] --> A02[A02 Usuários]
  A02 --> A02b[A02b Alterar teto de contas]
  A02 --> A02c[A02c Ajustar pontos, com motivo]
  A02 --> A02d[A02d Lista de espera]
```

### Fluxo 2: pontos e coletas

```mermaid
flowchart LR
  A03[A03 Pontos de coleta] --> A03b[A03b Criar ou editar ponto]
  A04[A04 Coletas] --> A04b[A04b Solicitar coleta]
```

### Fluxo 3: pagamento manual

```mermaid
flowchart LR
  A05[A05 Pagamentos] --> A05b[A05b Registrar pagamento manual] --> A05c[A05c Pagamento registrado]
```

### Fluxo 4: campanhas e sorteios

```mermaid
flowchart LR
  A06[A06 Campanhas] --> A07[A07 Nova campanha: dados] --> A07b[A07b Acesso e missões]
  A06 --> A08[A08 Detalhe da campanha]
  A06 --> A06b[A06b Excluir campanha]
  A09[A09 Sorteios e vouchers] --> A09b[A09b Cancelar sorteio]
```

Outras telas do menu: **A10** Validar descartes e **A11** Relatórios e auditoria.

## As 21 telas

| Quadro | Tela |
|---|---|
| A01 | Painel (usuários, pontos, descartes a conferir, vagas e o que precisa de ação) |
| A02 · A02b · A02c · A02d | Usuários · alterar o teto de contas · ajustar pontos · lista de espera |
| A03 · A03b | Pontos de coleta · criar ou editar ponto |
| A04 · A04b | Coletas · solicitar coleta |
| A05 · A05b · A05c | Pagamentos · registrar pagamento manual · pagamento registrado |
| A06 · A06b · A07 · A07b · A08 | Campanhas, excluir, nova campanha (2 passos) e detalhe |
| A09 · A09b | Sorteios e vouchers · cancelar sorteio |
| A10 · A11 | Validar descartes · relatórios e auditoria |

## Antes e depois, tela por tela

Cada bloco traz o **antes** (captura do app atual) e o **depois** (novo desenho) lado a lado e, abaixo, as correções: **Erro**, **Por quê** (veja o [glossário](../prototipo-figcraft.md#as-leis-de-ux-em-uma-frase)) e **Como fica**. As capturas "antes" de 1440 px têm baixa resolução (saíram em 800 × 500 e foram esticadas).

### A01 Painel

*Rota no app atual: `/admin`, `menu lateral (todas as telas)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A01 Painel](img/antes-adm-painel.jpg) | ![Depois: A01 Painel](img/A01.png) |

- **M01** · Hick, Jakob · UX
  - **Erro:** As "Ações rápidas" repetem dois itens do menu lateral (Pontos de coleta e Usuários) e nenhum indicador leva a uma ação.
  - **Por quê:** Jakob: o menu lateral já é o atalho esperado. Hick: o painel deve apontar o que fazer agora, não repetir o menu.
  - **Como fica:** Bloco "O que precisa de ação" (ponto cheio, solicitações perto de expirar, pagamento a registrar, lista de espera), cada linha com o botão da ação.
- **M02** · sem lei (decisão) · Decisão 11/11 (PON-10, RN-011)
  - **Erro:** O painel mostra "Volume (kg)" e uma fila "Pontos pendentes" de aprovação de novos pontos.
  - **Por quê:** Decisão: unidades no lugar de kg onde não há pesagem, e só o administrador cria ponto (RN-011), então não há fila de pedidos públicos. (Mudança de regra, não é achado de UX.)
  - **Como fica:** Indicadores em unidades, sem fila de pontos pendentes. Vagas de cadastro entram no painel (decisão de 12/11).
- **M03** · Miller, Hick · UX + decisão (PD-014, PD-016)
  - **Erro:** Sete itens em uma lista só, com nomes que se confundem ("Validar Descartes", "Sorteios"), e sem lugar para coletas e pagamentos.
  - **Por quê:** Miller: agrupar em blocos curtos. Hick: o grupo ajuda a achar o item.
  - **Como fica:** Três grupos: Operação (Painel, Pontos, Coletas, Pagamentos, Validar descartes), Pessoas e ofertas (Usuários, Campanhas, Sorteios e vouchers) e Governança (Relatórios). Item ativo por texto, traço verde e fundo, não só pela cor.

### A02 Usuários

*Rota no app atual: `/usuarios`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A02 Usuários](img/antes-adm-usuarios.jpg) | ![Depois: A02 Usuários](img/A02.png) |

- **M04** · Fitts, Jakob · UX
  - **Erro:** Quatro ícones sem texto, de cerca de 16 px, lado a lado em cada cartão (copiar link, editar, escudo, lixeira). A lixeira fica junto do lápis. O filtro diz "Cidadão".
  - **Por quê:** Fitts: alvos pequenos e juntos levam ao toque errado, e excluir é destrutivo. Jakob: ícone sem rótulo (escudo) não é padrão conhecido; o vocabulário do produto é "Usuário".
  - **Como fica:** Tabela com ações em texto de 44 px: "Ajustar pontos", "Editar" e "Mais" (ativar ou desativar, excluir com confirmação). "Usuário" no filtro.
- **M05** · sem lei (decisão) · Decisão de 12/11 (PD-001, PD-002 revistos) e 11/11 (PD-010)
  - **Erro:** Não há vagas de cadastro, lista de espera nem teto de contas. Falta ativar e desativar (ADM-05). O ajuste manual de pontos não pede motivo.
  - **Por quê:** Decisão de 12/11: cadastro aberto, teto de 500 contas (configurável), aviso e lista de espera, conta excluída devolve a vaga; o código foi descartado. Decisão de 11/11: ajuste manual com motivo. D-CT-01: o saldo não fica negativo.
  - **Como fica:** Faixa "312 de 500 vagas", aba "Lista de espera (14)", "Alterar teto de contas" (A02b), "Ajustar pontos" com motivo obrigatório (A02c) e "Ativar/Desativar" no menu "Mais".

### A03 Pontos de coleta

*Rota no app atual: `/admin-pontos`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A03 Pontos de coleta](img/antes-adm-pontos.jpg) | ![Depois: A03 Pontos de coleta](img/A03.png) |

- **M06** · Miller, Fitts · UX
  - **Erro:** Cartões em duas colunas de alturas diferentes, com a mesma barra vermelha para 86% e 95%. Cada cartão traz um botão vermelho "Desativar Ponto" no mesmo peso dos demais dados.
  - **Por quê:** Miller: pontos comparáveis ficam em tabela. Fitts: a ação destrutiva fica atrás de "Mais" e pede confirmação, longe de um toque sem querer.
  - **Como fica:** Tabela com ocupação por material em barra e número, situação em texto e ícone, e colunas de raio do GPS e responsáveis. "Editar" visível e "Mais" para o resto.
- **M07** · sem lei (decisão) · Decisão 11/11 e 12/11 (PON-08, PD-008, PD-023, D-CT-05, D-CT-06, D-CT-07, RN-011)
  - **Erro:** 86% aparece como "Lotado" e o contador "Quase lotados" mostra 0. A capacidade é um percentual único. Existe a aba "Solicitações Pendentes" de pontos.
  - **Por quê:** Decisão: alerta aos 80% e cheio aos 100% (D-CT-06); capacidade em unidades por material (D-CT-05, PON-08); raio do GPS por ponto e vários responsáveis (PD-008, PD-023); só o administrador cria ponto (RN-011); ponto temporário que encerra fica inativo (D-CT-07).
  - **Como fica:** Ocupação "PET 344 de 400 · 86%" com situação "Quase cheio"; formulário do ponto com raio, capacidades por material, tipo fixo ou temporário e responsáveis (A03b). Sem aba de pedidos pendentes.

### A06 Campanhas

*Rota no app atual: `/campanhas`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A06 Campanhas](img/antes-adm-campanhas.jpg) | ![Depois: A06 Campanhas](img/A06.png) |

- **M08** · Fitts, Jakob · UX
  - **Erro:** Três ícones sem texto no cartão (lápis, círculo com seta, lixeira), com cerca de 16 px. Cartão único ocupa a tela e os totais "TOTAL" e "ATIVAS" usam texto de 9 px.
  - **Por quê:** Fitts: alvos pequenos e juntos, com excluir ao lado. Jakob: ícones sem rótulo não dizem a ação.
  - **Como fica:** Tabela com período, recompensa, adesões e situação, e ações em texto: "Ver", "Editar", "Excluir".
- **M09** · sem lei (decisão) · Decisão 11/11 (ADM-07)
  - **Erro:** Excluir a campanha apaga as adesões dos usuários sem avisar o impacto.
  - **Por quê:** Achado ADM-07: a exclusão é destrutiva. Mudança de regra: mostrar o impacto e oferecer "Encerrar" no lugar.
  - **Como fica:** Confirmação "37 usuários aderiram; excluir apaga as adesões", com "Encerrar campanha" como opção principal (A06b).

### A07 Nova campanha - dados

*Rota no app atual: `/nova-campanha`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A07 Nova campanha - dados](img/antes-adm-nova-campanha.jpg) | ![Depois: A07 Nova campanha - dados](img/A07.png) |

- **M10** · Hick, Miller · UX
  - **Erro:** Um formulário longo em uma página só (dados, acesso, condições, requisitos e missões) com texto de apoio de 10 px.
  - **Por quê:** Hick: formulário longo, dividido em etapas, reduz abandono. Miller: agrupar campos relacionados.
  - **Como fica:** Duas etapas: "Dados" e "Acesso e missões", com indicador de passo e "Publicar campanha" no fim.
- **M11** · sem lei (decisão) · Decisão 11/11 (ADM-10, PD-011) e 12/11 (D-CT-10)
  - **Erro:** Os exemplos dos campos usam uma marca real ("Ex: Heineken") e o texto diz "morador". A meta não deixa claro que conta descartes.
  - **Por quê:** Decisão: sem marca real no sistema (ADM-10); meta em descartes (PD-011); bônus não recebido se perde no fim (D-CT-10); o nome do perfil é "Usuário".
  - **Como fica:** Exemplos neutros ("Campanha de verão", "Nome da empresa parceira"), "usuário", meta "Descartar (quantidade)" e aviso do bônus que se perde.

### A09 Sorteios e vouchers

*Rota no app atual: `/admin-sorteios`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A09 Sorteios e vouchers](img/antes-adm-sorteios.jpg) | ![Depois: A09 Sorteios e vouchers](img/A09.png) |

- **M12** · sem lei (decisão) · Decisão 11/11 (ADM-01, ADM-02, PD-013)
  - **Erro:** O botão "Encerrar" antecipa a apuração e "Excluir" apaga os bilhetes.
  - **Por quê:** Decisão: sem "Encerrar" antecipado; o administrador cancela e o cancelamento devolve os pontos. (Mudança de regra, não é achado de UX.)
  - **Como fica:** "Apurar" só a partir da data de encerramento e "Cancelar sorteio" com confirmação que mostra quantos pontos voltam (A09b).
- **M13** · Miller, Hick · UX
  - **Erro:** Três seções empilhadas (vouchers, em andamento, encerrados); duas delas são cartões vazios de cerca de 100 px cada ("Nenhum voucher cadastrado", "Nenhum sorteio em andamento") e empurram o conteúdo para baixo.
  - **Por quê:** Miller: seções irmãs ficam em abas com contagem. Hick: o estado vazio não precisa de um bloco grande.
  - **Como fica:** Abas "Sorteios (1)" e "Vouchers (0)" e tabela única com situação em texto.

### A10 Validar descartes

*Rota no app atual: `/aprovacao (visão do administrador)`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A10 Validar descartes](img/antes-adm-aprovacao.jpg) | ![Depois: A10 Validar descartes](img/A10.png) |

- **M14** · Postel · UX + decisão 11/11 (PON-10, F-13)
  - **Erro:** A quantidade declarada aparece como "1,5 kg" para 1,5 unidade. O administrador vê "Aprovar" com a nota "Acesso administrativo para auditoria".
  - **Por quê:** Postel: saída limpa, com a unidade certa. Quem aprova (ponto ou administrador) está como [VERIFICAR] no índice de telas e não foi decidido.
  - **Como fica:** Quantidade em "un. (declarado)".

### A11 Relatórios e auditoria

*Rota no app atual: `/admin-relatorios`*

| Antes (app atual) | Depois (novo desenho) |
|---|---|
| ![Antes: A11 Relatórios e auditoria](img/antes-adm-relatorios.jpg) | ![Depois: A11 Relatórios e auditoria](img/A11.png) |

- **M15** · Hick, Jakob · UX + decisão pendente (PD-019, PD-020, PD-022)
  - **Erro:** Três cartões iguais com botão desabilitado "Em breve", mais um bloco "Atividade administrativa recente" vazio.
  - **Por quê:** Hick: três blocos sem ação disputam atenção. Jakob: relatório indisponível aparece como estado vazio único e a auditoria como tabela de eventos.
  - **Como fica:** Um aviso "Exportações em breve" e a tabela de auditoria com data, quem, ação e detalhe (ajuste de pontos com motivo, teto, ponto desativado).

## Telas novas, só com o depois

Estas telas não existem no app atual, por isso não têm "antes".

### A02b · Alterar teto de contas

![A02b](img/A02b.png)

### A02c · Ajustar pontos

![A02c](img/A02c.png)

### A02d · Lista de espera

![A02d](img/A02d.png)

### A03b · Criar ou editar ponto

![A03b](img/A03b.png)

### A04 · Coletas

![A04](img/A04.png)

### A04b · Solicitar coleta

![A04b](img/A04b.png)

### A05 · Pagamentos

![A05](img/A05.png)

### A05b · Registrar pagamento manual

![A05b](img/A05b.png)

### A05c · Pagamentos - registrado

![A05c](img/A05c.png)

### A06b · Excluir campanha

![A06b](img/A06b.png)

### A07b · Nova campanha - acesso e missões

![A07b](img/A07b.png)

### A08 · Detalhe da campanha

![A08](img/A08.png)

### A09b · Cancelar sorteio

![A09b](img/A09b.png)


## De onde vêm as telas novas

| Quadro | Tela | Regra de origem |
|---|---|---|
| A02b | Alterar o teto de contas (500, podendo subir a 1000) | PD-001 e PD-002, revistos em 12/11 |
| A02c | Ajustar pontos com motivo obrigatório | PD-010, D-CT-01 |
| A02d | Lista de espera de cadastro | PD-001 e PD-002, revistos em 12/11 |
| A03b | Criar ou editar ponto: raio do GPS, capacidade por material, tipo fixo ou temporário, responsáveis | PD-008, PD-023, D-CT-05 a 07 |
| A04, A04b | Coletas e solicitar coleta à cooperativa (48 h para aceitar) | PD-014, D-CT-08 |
| A05, A05b, A05c | Pagamentos e registro manual com comprovante | PD-015, PD-016 |
| A06b | Excluir campanha, com o impacto nas adesões | ADM-07 |
| A07b | Nova campanha, passo 2: acesso e missões | PD-011, D-CT-10 |
| A08 | Detalhe da campanha | Só UX |
| A09b | Cancelar sorteio devolvendo os pontos | PD-013 |

**Telas removidas do protótipo:** `/campanha-heineken` (marca e prêmio reais, ADM-10); a aba "Solicitações Pendentes" de `/admin-pontos`; e o cadastro público de ponto (`/cadastro-ponto-coleta`, `/empresa`, `/confirmacao`), porque só o administrador cria ponto (RN-011).

## Pontos a observar

- Os dados são **fictícios**. O painel original mostrava "N/A" em "Volume (kg)" e "Pontos distribuídos" porque os dados de teste não tinham esses campos; isso não foi tratado como defeito do app.
- **Não foram desenhados:** a aba "Vouchers" de sorteios, o passo 3 (revisar) de nova campanha e o detalhe completo da campanha (A08 é simples).
- As áreas de toque de "Editar" e "Mais" nas tabelas (A02, A03, A06) e o menu lateral (40 px) ficaram abaixo dos 44 px recomendados.
