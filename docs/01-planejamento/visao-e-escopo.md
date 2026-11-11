# Visão e Escopo

> **Estado:** revisão (aguardando aprovação do produto) · **Dono:** Produto · **Atualizado em:** 11/11/2026
> **Fontes:** [visão original](../visao/visao-do-projeto.md) (mantida como referência), [V6](requisitos/README.md), [regras de saldo, vouchers e sorteios](../requisitos/regras-de-saldo-vouchers-sorteios.md), respostas e complementos da revisão de 11/11/2026 (Vinicius).
> **Lacunas:** 5 · **Conflito aberto:** valor do ponto (ver [seção 5](#5-pontos-e-recompensas))

## Resumo

O Residuum é uma plataforma web que **conecta moradores, responsáveis por pontos de coleta, cooperativas e a administração**. O morador registra embalagens de **PET e latas de alumínio**, entrega num ponto de coleta, comprova a presença por GPS e ganha pontos. A cooperativa retira e pesa o material. O administrador coordena tudo, inclusive o pagamento à cooperativa. O MVP existe e está sendo documentado para a equipe atual de **seis pessoas**.

Este documento diz **o que o produto é, para quem e até onde vai**. O texto longo e completo continua em [visao-do-projeto.md](../visao/visao-do-projeto.md).

## 1. O problema

| Problema | Consequência |
|---|---|
| **Falta de rastreabilidade.** O resíduo "some" no descarte; o morador não sabe o destino e as empresas não comprovam a logística reversa (PNRS) | Risco legal e de imagem (ESG) |
| **Coleta "no escuro".** Cooperativas não sabem o volume nem o nível de enchimento dos pontos | Viagens inúteis e pontos lotados |
| **Pouco incentivo.** O cidadão não vê valor no resíduo | Baixa adesão à separação correta |
| **Dados ruins na base da cadeia.** O descarte cidadão não chega aos sistemas oficiais (SINIR, MTR) | Dificuldade de gestão e comprovação |

## 2. A solução

1. **Registro simples.** Três formas, todas começando por um botão **+** no centro da barra de navegação: **código de barras**, **QR Code da nota fiscal** e **cadastro manual**. O **descarte rápido** é o uso dos dois leitores (código de barras e QR Code da nota) para ir direto à escolha do ponto.
2. **Pontos e Loja.** Pontos por descarte, campanhas com bônus, vouchers de parceiros e sorteios.
3. **Pontos organizados.** Pontos fixos e temporários, com responsável, materiais aceitos e sinalização de ocupação.
4. **Coleta coordenada.** O responsável pede, o administrador encaminha, a cooperativa aceita, retira e informa material e peso.
5. **Pagamento controlado.** O administrador paga a cooperativa dentro da plataforma, por API.
6. **Dados por plano.** Relatórios e indicadores conforme plano, perfil e vínculo.

```mermaid
flowchart LR
  M[Morador<br/>registra e entrega] --> P[Ponto de coleta<br/>confirma e acumula]
  P --> A[Administrador<br/>encaminha a coleta]
  A --> C[Cooperativa<br/>aceita, retira e pesa]
  C --> A2[Administrador<br/>paga por API]
  M -. pontos .-> L[Loja<br/>campanhas, vouchers, sorteios]
```

O fluxo completo, passo a passo, está na [seção 4 da visão original](../visao/visao-do-projeto.md#4-fluxo-integrado-do-mvp).

## 3. Quem usa

O perfil que antes se chamava "morador" passa a se chamar **usuário** nesta seção (é também o nome usado no código, `role = usuario`).

| Perfil | O que faz | Valor |
|---|---|---|
| **Usuário** | Registra resíduos, escolhe ponto, entrega, usa pontos na Loja | Menos esforço e incentivo |
| **Responsável pelo ponto** `[DECISÃO: PD-023]` | Acompanha materiais e ocupação, edita o que o ponto aceita, pede retirada | Visibilidade e comunicação com a administração |
| **Cooperativa** | Aceita solicitações, vê agenda e rota, registra material e peso | Coletas organizadas e pagamento acompanhado |
| **Administrador** | Gere convites, pontos, Loja, solicitações, pagamentos e indicadores | Controle da operação em um só lugar |
| **Contratante de dados** | Consulta o que o plano autoriza | Informação para análise (pacotes a definir) |

## 4. Escopo do MVP

### Dentro do escopo

| Área | O que entra |
|---|---|
| Acesso | O usuário **se cadastra normalmente**. O controle de quantas pessoas entram (um número X) ainda está em estudo; **por ora, o acesso é liberado por um código** fornecido pela equipe `[LACUNA: pesquisa]` |
| Cadastro de resíduos | **Três sistemas**, iniciados por um botão **+** centralizado na barra de navegação. **1) Código de barras:** lê o produto e já preenche o formulário. **2) QR Code da nota fiscal:** traz os itens da nota e os materiais. **3) Manual:** se o código de barras não for reconhecido depois de **X tentativas**, o sistema leva o usuário ao formulário manual (nome, material, quantidade `[LACUNA: formulário e valor de X]`). Materiais: **PET e lata de alumínio** |
| Descarte rápido | **Não é uma função à parte.** É o uso do **leitor de código de barras** (agiliza um único produto) e do **leitor de QR Code da nota** (traz todos os materiais da nota) para seguir direto à escolha do ponto, sem passar pelo estoque |
| Entrega | Escolha do ponto compatível, navegação externa, **validação de presença por GPS**, confirmação |
| Pontos e Loja | Pontos por descarte, campanhas com bônus, vouchers e **sorteios** (ver limite abaixo) |
| Pontos de coleta | Fixos e temporários, responsável, materiais aceitos, ocupação |
| Coleta | Pedido, encaminhamento, aceite, agenda e rota, registro de **material e peso** |
| Pagamento | **Pagamento à cooperativa por API**, iniciado pelo administrador `[DECISÃO: PD-015, PD-016]` |
| Dados | **Planos** (grátis, pré-pago, mensal) para relatórios e indicadores `[DECISÃO: PD-019]` |

### Limites já decididos

| Limite | Origem |
|---|---|
| **Sorteios somente de teste**, sem prêmio real, até haver parecer jurídico (Lei 5.768/1971). **1 bilhete por usuário** | Decisão do time de 22/10, confirmada na revisão de 11/11 |
| No MVP os pontos **não são dinheiro** e **não há cashback** (a ideia existe, ver "Evolução") | V6 RN-010 |
| Registrar item ou ler nota **não é descarte** e não dá pontos | V6 RN-004 |
| Rascunho do descarte rápido fica **só na memória** do fluxo | Decisão de UX de 10/10 |
| A pesagem da cooperativa **não** concede pontos de novo ao morador | V6 RN-016 |

### Detalhamento pendente

São os pontos que ainda **não dá para fechar só com o que a equipe sabe hoje**. Uns pedem **pesquisa**, outros pedem **decisão** (ou os dois). A coluna "Tipo" diz qual.

| O que está pendente | Decisão | Tipo | O que fazer |
|---|---|---|---|
| Controle de quantas pessoas entram no sistema (hoje: código fornecido) | — | 🔎 Pesquisa | Pesquisar formas de controle de acesso |
| Fonte para consultar produtos e notas fiscais | PD-004 | 🔎 Pesquisa | Levantar fontes, cobertura, autorização e limites |
| Precisão do GPS (raio, idade da posição) | PD-008 | 🔎 Teste em campo + decisão | Medir no piloto e fixar valores |
| Capacidade e "ponto cheio" | PD-009 | ⚖️ Decisão | Definir unidade e cálculo com a operação |
| Regras de campanhas, vouchers e sorteios | PD-011 a PD-013 | ⚖️ Decisão (+ parecer jurídico nos sorteios) | Validar as regras de 21 e 22/10 |
| Exceções da coleta (recusa, prazo, coleta parcial) | PD-014 | ⚖️ Decisão | Definir com a operação |
| Valor e provedor de pagamento | PD-015, PD-016 | 🔎 + ⚖️ | Pesquisar provedores; decidir valor e autorização |
| Pacotes e preços dos planos | PD-019 | 🔎 + ⚖️ | Pesquisar preços; decidir pacotes |

### Evolução a avaliar (fora do MVP)

**Cashback** (ver abaixo) · pontuação definitiva · ranking · confirmação pelo ponto ou QR (PD-027) · certificados com validade regulatória · exportação de arquivos · rotas otimizadas · acompanhamento contínuo · outros materiais além de PET e lata.

**Ideia de cashback (versão futura, não será implementada agora).** O modelo de referência é o do **Méliuz**: o usuário registra seus produtos, vai somando pontos e, ao atingir um mínimo, **converte os pontos em dinheiro real**. Fica registrada como direção de produto. Ela exige estudo de viabilidade, definição da origem dos recursos e do processo de devolução, e **não faz parte do MVP**.

## 5. Pontos e recompensas

**Regra desta visão (definida na revisão de 11/11/2026): 10 pontos básicos por descarte concluído**, como regra provisória até o modelo definitivo. Campanhas podem dar pontos extras.

> ⚠️ **Conflito aberto.** O time registrou em 22/10, em [regras de saldo, vouchers e sorteios](../requisitos/regras-de-saldo-vouchers-sorteios.md), que o valor vigente é **5 pontos por unidade**, e **o código do backend já aplica 5 por unidade**. A decisão de 11/11 para esta visão volta ao texto da V6 (10 por descarte, não por embalagem). Para valer no sistema, é preciso decidir [PD-010](decisoes/pd-010.md) e atualizar regras de saldo, regras de campanhas (dobro de pontos) e o código. Enquanto isso, **a Visão e o código divergem**.

## 6. Metas e prazo

| Item | Valor |
|---|---|
| Prazo informado | **20/11/2026** (não garante todo o backlog) |
| Ordem das entregas | morador → ponto de coleta → cooperativa → administrador |
| Região e pontos do piloto | `[LACUNA]` ver [piloto inicial](../pesquisa/piloto-inicial.md) |

### Como medir o sucesso do piloto

O que medir já está listado em [piloto inicial](../pesquisa/piloto-inicial.md). **Falta só a meta**, isto é, o número que diz "deu certo".

| Indicador | Meta |
|---|---|
| Taxa de cadastro (convidados que se cadastram) | `[A DEFINIR]` |
| Taxa de primeiro descarte | `[A DEFINIR]` |
| Recorrência (voltam a descartar) | `[A DEFINIR]` |
| Uso de recompensa | `[A DEFINIR]` |
| Tempo até a retirada pela cooperativa | `[A DEFINIR]` |
| Divergência entre o declarado e o pesado | `[A DEFINIR]` |

## 7. Glossário

**Usuário** quem usa o app para registrar e entregar (antes chamado de morador) · **Descarte** entrega do material num ponto · **Lote** vários itens enviados juntos · **Registrar** guardar item no estoque do morador · **Descarte rápido** uso do leitor de código de barras ou do QR Code da nota para entregar sem passar pelo estoque · **Ponto de coleta** local físico de entrega · **Responsável** pessoa que cuida do ponto · **Voucher** cupom de parceiro trocado por pontos · **PD-xxx** pendência de decisão da V6 ([lista](decisoes/README.md)).

## O que falta para fechar

- [ ] Produto validar formalmente esta visão (as respostas de 11/11 vieram da revisão de Vinicius)
- [ ] Resolver o conflito dos pontos (10 × 5) em [PD-010](decisoes/pd-010.md)
- [ ] `[A DEFINIR]` meta de cada indicador do piloto (tabela da seção 6) e quantos usuários entram (X)
- [ ] `[LACUNA]` pesquisar como controlar o acesso de X pessoas (hoje: código)
- [ ] `[LACUNA]` definir o número X de tentativas do código de barras e o formulário manual
- [ ] Decidir se "morador" vira "usuário" em todos os documentos (hoje só nesta Visão, seção 3)
- [ ] `[LACUNA]` 3 números do problema: **as pesquisas não têm dados de mercado**; buscar em fontes oficiais e citar
- [ ] Depois de aprovada, marcar a [visão original](../visao/visao-do-projeto.md) como histórico e trocar os "10 pontos" dela conforme a decisão
