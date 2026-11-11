# Visão e Escopo

> **Estado:** revisão (aguardando aprovação do produto) · **Dono:** Produto · **Atualizado em:** 11/11/2026
> **Fontes:** [visão original](../visao/visao-do-projeto.md) (mantida como referência), [V6](requisitos/README.md), [regras de saldo, vouchers e sorteios](../requisitos/regras-de-saldo-vouchers-sorteios.md), respostas e complementos da revisão de 11/11/2026 (Vinicius).
> **Lacunas:** 2 · **Conflitos abertos:** nenhum na Visão (o código ainda paga 5 por unidade, ver [seção 5](#5-pontos-e-recompensas))

## Resumo

O Residuum é uma plataforma web que **conecta usuários, responsáveis por pontos de coleta, cooperativas e a administração**. O usuário registra embalagens de **PET e latas de alumínio**, entrega num ponto de coleta, comprova a presença por GPS e ganha pontos. A cooperativa retira e pesa o material. O administrador coordena tudo, inclusive o pagamento à cooperativa. O MVP existe e está sendo documentado para a equipe atual de **seis pessoas**.

Este documento diz **o que o produto é, para quem e até onde vai**. O texto longo e completo continua em [visao-do-projeto.md](../visao/visao-do-projeto.md).

## 1. O problema

| Problema | Consequência |
|---|---|
| **Falta de rastreabilidade.** O resíduo "some" no descarte; o usuário não sabe o destino e as empresas não comprovam a logística reversa (PNRS) | Risco legal e de imagem (ESG) |
| **Coleta "no escuro".** Cooperativas não sabem o volume nem o nível de enchimento dos pontos | Viagens inúteis e pontos lotados |
| **Pouco incentivo.** O cidadão não vê valor no resíduo | Baixa adesão à separação correta |
| **Dados ruins na base da cadeia.** O descarte cidadão não chega aos sistemas oficiais (SINIR, MTR) | Dificuldade de gestão e comprovação |

### O problema em números

| Número | O que mostra | Fonte |
|---|---|---|
| **97,3%** | das latas de alumínio foram recicladas no Brasil em 2024. O material **tem mercado** | [ABC do ABC](https://abcdoabc.com.br/latinhas-de-aluminio-recicladas/) |
| **~23%** | de capacidade parada nas recicladoras de PET, por **falta de coleta** (410 mil t recicladas em 2024) | [Dados do problema](../pesquisa/dados-do-problema.md) |
| **33,7%** | da população urbana de Manaus com coleta seletiva (SINISA 2024, último dado publicado) | [Instituto Água e Saneamento](https://www.aguaesaneamento.org.br/municipios-e-saneamento/am/manaus), ver [dados do problema](../pesquisa/dados-do-problema.md) |

**Em uma frase:** o Brasil já recicla quase toda lata e mais da metade do PET, mas a coleta não chega: indústria parada por falta de material e uma capital onde só um terço da população urbana tem coleta seletiva. Detalhes, ressalvas e o que falta confirmar estão em [dados do problema](../pesquisa/dados-do-problema.md).

## 2. A solução

1. **Registro simples.** Três formas, todas começando por um botão **+** no centro da barra de navegação: **código de barras**, **QR Code da nota fiscal** e **cadastro manual**. O **descarte rápido** é o uso dos dois leitores (código de barras e QR Code da nota) para ir direto à escolha do ponto.
2. **Pontos e Loja.** Pontos por descarte, campanhas com bônus, vouchers de parceiros e sorteios.
3. **Pontos organizados.** Pontos fixos e temporários, com responsável, materiais aceitos e sinalização de ocupação.
4. **Coleta coordenada.** O responsável pede, o administrador encaminha, a cooperativa aceita, retira e informa material e peso.
5. **Pagamento controlado.** A Residuum paga a cooperativa **por kg e material** coletado. No piloto, o administrador paga pelo banco e registra o comprovante; o pagamento **por API** entra depois (decidido em 11/11/2026).
6. **Dados por plano.** Relatórios e indicadores conforme plano, perfil e vínculo.

```mermaid
flowchart LR
  M[Usuário<br/>registra e entrega] --> P[Ponto de coleta<br/>confirma e acumula]
  P --> A[Administrador<br/>encaminha a coleta]
  A --> C[Cooperativa<br/>aceita, retira e pesa]
  C --> A2[Administrador<br/>paga e registra]
  M -. pontos .-> L[Loja<br/>campanhas, vouchers, sorteios]
```

O fluxo completo, passo a passo, está na [seção 4 da visão original](../visao/visao-do-projeto.md#4-fluxo-integrado-do-mvp).

## 3. Quem usa

O perfil que antes se chamava "morador" passa a se chamar **usuário** em todos os documentos, por decisão de 11/11/2026 (é também o nome usado no código, `role = usuario`).

| Perfil | O que faz | Valor |
|---|---|---|
| **Usuário** | Registra resíduos, escolhe ponto, entrega, usa pontos na Loja | Menos esforço e incentivo |
| **Responsável pelo ponto** (vínculo N:N, decidido em 11/11/2026: [PD-023](decisoes/pd-023.md)) | Acompanha materiais e ocupação, edita o que o ponto aceita, pede retirada | Visibilidade e comunicação com a administração |
| **Cooperativa** | Aceita solicitações, vê agenda e rota, registra material e peso | Coletas organizadas e pagamento acompanhado |
| **Administrador** | Gere convites, pontos, Loja, solicitações, pagamentos e indicadores | Controle da operação em um só lugar |
| **Contratante de dados** | Consulta o que o plano autoriza | Informação para análise (pacotes a definir) |

## 4. Escopo do MVP

### Dentro do escopo

| Área | O que entra |
|---|---|
| Acesso | O usuário **se cadastra normalmente**, com um **código individual de uso único** fornecido pela equipe. Conta excluída devolve a vaga; sem vagas, aviso e lista de espera. O número de contas tem um **teto de 500** (decidido em 11/11/2026), controlado por **trava de vagas no banco** (*pessimistic locking*: `SELECT ... FOR UPDATE` na linha de vagas). Ver [controle de acesso](../pesquisa/controle-de-acesso.md) |
| Cadastro de resíduos | **Três sistemas**, iniciados por um botão **+** centralizado na barra de navegação. **1) Código de barras:** lê o produto e já preenche o formulário. **2) QR Code da nota fiscal:** traz os itens da nota e os materiais. **3) Manual:** o usuário pode tentar ler o código de barras **quantas vezes quiser**. Cada falha mostra um **aviso vermelho** de erro de leitura; a partir da **2ª falha**, o aviso **recomenda o cadastro manual** (nome, material, quantidade `[LACUNA: campos do formulário]`). Decidido em 11/11/2026. Materiais: **PET e lata de alumínio** |
| Descarte rápido | **Não é uma função à parte.** É o uso do **leitor de código de barras** (agiliza um único produto) e do **leitor de QR Code da nota** (traz todos os materiais da nota) para seguir direto à escolha do ponto, sem passar pelo estoque |
| Entrega | Escolha do ponto compatível, navegação externa, **validação de presença por GPS** (libera o envio) e **confirmação pelo operador do ponto** (decidido em 11/11/2026); os pontos saem só depois da confirmação |
| Pontos e Loja | Pontos por descarte, campanhas com bônus, vouchers e **sorteios** (ver limite abaixo) |
| Pontos de coleta | Fixos e temporários, **cadastrados só pelo admin**, com responsável, materiais aceitos, ocupação e **raio de GPS de 100 m ajustável** (decidido em 11/11/2026) |
| Coleta | Pedido, encaminhamento, aceite, agenda e rota, registro de **material e peso** |
| Pagamento | A **Residuum** paga a cooperativa **por kg e material** ([PD-015](decisoes/pd-015.md), [PD-016](decisoes/pd-016.md)). **No piloto: pagamento manual** com comprovante registrado pelo administrador; **API depois**, testada antes em ambiente de teste (decidido em 11/11/2026). `[LACUNA: valor por kg de PET e de lata]` |
| Dados | **Planos** (grátis, pré-pago, mensal) para relatórios e indicadores `[DECISÃO: PD-019]` |

### Limites já decididos

| Limite | Origem |
|---|---|
| **Sorteios somente de teste**, sem prêmio real, até haver parecer jurídico (Lei 5.768/1971). **1 bilhete por usuário** | Decisão do time de 22/10, confirmada na revisão de 11/11 |
| No MVP os pontos **não são dinheiro** e **não há cashback** (a ideia existe, ver "Evolução") | V6 RN-010 |
| Registrar item ou ler nota **não é descarte** e não dá pontos | V6 RN-004 |
| Rascunho do descarte rápido fica **só na memória** do fluxo | Decisão de UX de 10/10 |
| A pesagem da cooperativa **não** concede pontos de novo ao usuário | V6 RN-016 |
| A **confirmação do operador é final**: descarte confirmado não é estornado; erro posterior vira ajuste manual do admin | Decisão de 11/11/2026 ([PD-010](decisoes/pd-010.md)) |

### Decisões já tomadas

As regras de **campanhas, vouchers e sorteios** foram decididas (ver [campanhas](../requisitos/regras-de-campanhas.md) e [saldo, vouchers e sorteios](../requisitos/regras-de-saldo-vouchers-sorteios.md)). Restam só a validação do produto e dois detalhes: o algoritmo da apuração do sorteio e o dono do parecer jurídico.

### Ainda pendente

| O que está pendente | Decisão | Tipo | Situação |
|---|---|---|---|
| **Capacidade do ponto de coleta** e "ponto cheio" | [PD-009](decisoes/pd-009.md) | Estudo e decisão com a operação | **Estudo feito:** [capacidade e coleta](../pesquisa/capacidade-e-execucao-da-coleta.md). Falta decidir |
| **Execução da coleta** (recusa, prazo, coleta parcial) | [PD-014](decisoes/pd-014.md) | Estudo e decisão com a operação | **Estudo feito:** [capacidade e coleta](../pesquisa/capacidade-e-execucao-da-coleta.md). Falta decidir |
| Controle de quantas pessoas entram | — | Pesquisa e decisão | **Decidido em 11/11/2026:** teto de **500** contas, com trava de vagas no banco ([controle de acesso](../pesquisa/controle-de-acesso.md)) |
| Fonte para código de barras e nota fiscal | [PD-004](decisoes/pd-004.md) | Pesquisa | **Pesquisa feita:** [fontes](../pesquisa/fontes-de-produtos-e-notas.md). Falta **testar** |
| Provedor de pagamento | [PD-015](decisoes/pd-015.md), [PD-016](decisoes/pd-016.md) | Pesquisa | **Pesquisa feita:** [provedores](../pesquisa/provedores-de-pagamento.md). Falta decidir pagador e valor |
| Precisão do GPS | [PD-008](decisoes/pd-008.md) | Teste em campo | Medir no piloto |
| Pacotes e preços dos planos | [PD-019](decisoes/pd-019.md) | Pesquisa e decisão | Falta fazer |

### Evolução a avaliar (fora do MVP)

**Cashback** (ver abaixo) · pontuação definitiva · ranking · confirmação por QR (PD-027) · certificados com validade regulatória · exportação de arquivos · rotas otimizadas · acompanhamento contínuo · outros materiais além de PET e lata.

**Ideia de cashback (versão futura, não será implementada agora).** O modelo de referência é o do **Méliuz**: o usuário registra seus produtos, vai somando pontos e, ao atingir um mínimo, **converte os pontos em dinheiro real**. Fica registrada como direção de produto. Ela exige estudo de viabilidade, definição da origem dos recursos e do processo de devolução, e **não faz parte do MVP**.

## 5. Pontos e recompensas

**Regra decidida em 11/11/2026 ([PD-010](decisoes/pd-010.md)): 10 pontos básicos por descarte concluído**, por operação, **independentemente da quantidade** de embalagens. Campanhas podem dar pontos extras.

> ✅ **Conflito resolvido em 11/11/2026.** Vale **10 por descarte**; a regra do time de 22/10 (5 por unidade) virou histórico. O **dobro de pontos** das campanhas passa a contar **descartes** (bônus de 10 × N). **Ainda falta:** alterar o código do backend (hoje paga 5 por unidade e conta unidades no dobro), decidir se as **faixas de recompensa** mudam, e aplicar a **janela de 60 minutos** contra a divisão de entregas ( descartes do mesmo usuário no mesmo ponto, dentro da janela, contam como um só).

## 6. Metas e prazo

| Item | Valor |
|---|---|
| Prazo informado | **20/11/2026** (não garante todo o backlog) |
| Ordem das entregas | usuário → ponto de coleta → cooperativa → administrador |
| Região e pontos do piloto | `[LACUNA]` ver [piloto inicial](../pesquisa/piloto-inicial.md) |

### Como medir o sucesso do piloto

**Escala sugerida:** 100 usuários, 3 pontos de coleta, 1 cooperativa e 8 semanas. Segue o [piloto inicial](../pesquisa/piloto-inicial.md): poucos pontos, uma ou duas cooperativas, número limitado de usuários, período fechado. **Aprovadas por Vinicius em 11/11/2026**; falta a validação formal do produto.

| # | Indicador | Como calcular | Meta |
|---|---|---|---|
| 1 | Cadastro | cadastrados ÷ códigos entregues | **70% ou mais** |
| 2 | Primeiro descarte | cadastrados com 1 descarte confirmado em até 14 dias ÷ cadastrados | **50% ou mais** |
| 3 | Recorrência | usuários com 3 ou mais descartes em 8 semanas ÷ usuários com 1 descarte | **30% ou mais** |
| 4 | Uso de recompensa | usuários que resgataram voucher ou entraram em campanha ÷ usuários com 1 descarte | **25% ou mais** |
| 5 | Tempo até a retirada | do pedido de coleta até a coleta registrada | **até 72 horas** em 80% dos pedidos |
| 6 | Completude dos dados | coletas com ponto, material e peso preenchidos ÷ coletas | **90% ou mais** |
| 7 | Confiabilidade (técnico) | saldos que não batem com os lançamentos; acessos de uma cooperativa a pontos que não são dela | **zero** |

**Critério de sucesso:** o piloto deu certo se atingir **5 das 6 metas de uso (1 a 6) e zero falhas de confiabilidade (7)**.

> ⚠️ **As metas não vêm de dados:** o projeto ainda não tem histórico. Foram aprovadas como ponto de partida e devem ser revistas ao fim do piloto. A meta 2 é a mais importante: diz se as pessoas realmente entregam.

## 7. Glossário

**Usuário** quem usa o app para registrar e entregar (antes chamado de morador) · **Descarte** entrega do material num ponto · **Lote** vários itens enviados juntos · **Registrar** guardar item no estoque do usuário · **Descarte rápido** uso do leitor de código de barras ou do QR Code da nota para entregar sem passar pelo estoque · **Ponto de coleta** local físico de entrega · **Responsável** pessoa que cuida do ponto · **Voucher** cupom de parceiro trocado por pontos · **PD-xxx** pendência de decisão da V6 ([lista](decisoes/README.md)).

## O que falta para fechar

- [ ] Produto validar formalmente esta visão (as respostas de 11/11 vieram da revisão de Vinicius)
- [x] Conflito dos pontos resolvido: **10 por descarte** ([PD-010](decisoes/pd-010.md))
- [x] Dobro de pontos: meta em **descartes**, bônus de **10 × N** ([regras de campanhas](../requisitos/regras-de-campanhas.md))
- [x] Contra a divisão de entregas: **janela no mesmo ponto** ([PD-010](decisoes/pd-010.md))
- [x] Tamanho da janela: **60 minutos**
- [ ] Alterar o código para 10 por descarte, meta do dobro em descartes e janela; decidir as faixas de recompensa
- [x] Aprovar as **metas do piloto** (seção 6): aprovadas em 11/11/2026, com **100 usuários**
- [x] Teto de cadastros: **500 contas** (decidido em 11/11/2026)
- [ ] Ajustar a escala das metas do piloto? Hoje elas usam **100 usuários**; o teto é **500**
- [x] Forma de controle de acesso: **trava de vagas no banco** (*pessimistic locking*), decidida em 11/11/2026
- [x] Tentativas do código de barras: sem limite; aviso vermelho a cada falha; cadastro manual recomendado a partir da 2ª
- [ ] `[LACUNA]` definir os campos do formulário manual
- [x] Estudar a capacidade do ponto (PD-009) e a execução da coleta (PD-014): [estudo feito](../pesquisa/capacidade-e-execucao-da-coleta.md)
- [ ] Decidir PD-009 e PD-014 com a operação (8 decisões listadas no estudo)
- [x] "Morador" vira "usuário" em todos os documentos (decidido em 11/11/2026)
- [x] Coleta seletiva em Manaus: trocado pelo último dado publicado (SINISA 2024, 33,7%)
- [ ] Ligar os `[VERIFICAR fonte]` que restam em [dados do problema](../pesquisa/dados-do-problema.md)
- [ ] Depois de aprovada, marcar a [visão original](../visao/visao-do-projeto.md) como histórico (os "10 pontos" dela já estão de acordo com a decisão)
