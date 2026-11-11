# M05 — Loja, campanhas, vouchers e sorteios

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 666 a 756) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-026 — Consultar a loja de recompensas

**Situação:** confirmado. **Fonte:** S7. **Ator:** morador.

**Objetivo:** descobrir campanhas, sorteios e vouchers disponíveis.

**Pré-condições:** morador autenticado. **Fluxo:** acessar pela confirmação do descarte ou navegação da plataforma; consultar campanhas vigentes, sorteios e vouchers; visualizar título, representação visual, condições resumidas e custo quando aplicável; abrir detalhes antes de participar ou comprar.

**Exceções:** catálogo vazio deve informar ausência de ofertas. Ofertas não publicadas não são apresentadas como compráveis. A loja comercializa benefícios com pontos; cashback financeiro está fora do MVP.

**Dependências:** RF-MVP-027 a RF-MVP-030 e RF-MVP-053.

**Critérios de aceite:**

- **Dado** campanhas e vouchers publicados, **quando** o morador abre a loja, **então** encontra as ofertas disponíveis e pode consultar detalhes.
- **Dado** catálogo sem ofertas vigentes, **quando** o abre, **então** vê uma mensagem adequada sem opções fictícias de compra.

#### RF-MVP-027 — Consultar detalhes e condições da campanha

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** morador.

**Objetivo:** explicar o que fazer e o que poderá ganhar antes da adesão.

**Pré-condições:** campanha consultável. **Fluxo:** apresentar título, descrição, imagem/vídeo disponível, período, produtos ou materiais elegíveis, quantidade/meta, condições de participação, custo quando houver e benefício; oferecer a ação aplicável à campanha.

**Exceções:** não anunciar recompensa sem regra publicada. A campanha deve esclarecer se exige descarte, uso de pontos ou outra condição aprovada; leitura de nota não comprova automaticamente descarte. Condições de participação e frequência são PD-011.

**Dependências:** RF-MVP-024, RF-MVP-028 e RF-MVP-053.

**Critérios de aceite:**

- **Dado** campanha baseada no descarte de um produto, **quando** abre seus detalhes, **então** o morador vê produto, meta e benefício configurados.
- **Dado** campanha com vídeo, **quando** os detalhes são exibidos, **então** a mídia é acessível e as condições também estão disponíveis em texto.

#### RF-MVP-028 — Administrar e participar de campanhas

**Situação:** confirmado com pendências. **Fonte:** S7. **Atores:** administrador e morador.

**Objetivo:** permitir campanhas internas geridas pelo administrador e participação pelos moradores.

**Pré-condições:** permissão administrativa para gestão; campanha publicada para participação. **Entrada administrativa:** título, descrição, mídia, período e regra de meta, elegibilidade e recompensa. **Fluxo:** preparar cadastro; validar informações; publicar conforme regra aprovada; permitir adesão quando exigida; acompanhar progresso.

**Exceções:** não herdar a obrigação da V5 de ter parceiro confirmado antes de toda campanha. Alteração de campanha já participada, adesão automática/manual e bônus acumulados dependem de PD-011. Participação com custo depende de confirmação e RF-MVP-025.

**Dependências:** RF-MVP-022, RF-MVP-024, RF-MVP-027 e RF-MVP-053.

**Critérios de aceite:**

- **Dado** administrador autorizado e campanha com dados e regra validados, **quando** a publica, **então** ela fica consultável pelos moradores elegíveis.
- **Dado** um morador, **quando** tenta alterar a regra da campanha, **então** a alteração é negada.
- **Dado** uma condição de participação publicada, **quando** o morador adere, **então** a participação obedece à condição exibida, sem cobranças ocultas.

#### RF-MVP-029 — Administrar e adquirir vouchers

**Situação:** confirmado com pendências. **Fonte:** S7. **Atores:** administrador e morador.

**Objetivo:** trocar pontos por cupons de promoção ou benefícios.

**Pré-condições:** voucher cadastrado e publicado pelo administrador; custo e regras de uso aprovados. **Entrada:** título, descrição, benefício, custo em pontos, instruções e parâmetros de validade/disponibilidade conforme definição.

**Fluxo:** administrador cadastra oferta; morador consulta detalhes e confirma a compra; sistema debita pontos com consistência; disponibiliza voucher adquirido em sua área de recompensas. Forma de emissão do código e validação no parceiro ainda são PD-012.

**Exceções:** não emitir voucher sem aquisição confirmada nem cobrar por oferta indisponível. Limite de unidades, cancelamento e devolução de pontos precisam de validação.

**Dependências:** RF-MVP-025, RF-MVP-026 e RF-MVP-053.

**Critérios de aceite:**

- **Dado** voucher disponível e saldo suficiente, **quando** o morador confirma, **então** uma aquisição é registrada e o débito corresponde ao custo exibido.
- **Dado** voucher adquirido, **quando** consulta suas recompensas, **então** encontra o benefício e as instruções de uso aprovadas.

#### RF-MVP-030 — Administrar sorteios e registrar participações

**Situação:** confirmado com pendências. **Fontes:** S4/RF015 e S7. **Atores:** administrador e morador.

**Objetivo:** usar pontos para participar de sorteios com regras compreensíveis e resultado rastreável.

**Pré-condições:** sorteio publicado com regras validadas. **Fluxo:** administrador cadastra descrição, prêmio, período e condições; morador consulta e confirma participação; registrar inscrição e custo se aplicável; apurar resultado conforme mecanismo aprovado; disponibilizar resultado e notificação prevista.

**Exceções:** custo em pontos, quantidade de chances, limites, algoritmo, cancelamento, prêmio e condições de realização aguardam PD-013. Seleção aleatória e e-mail da V5 são referências para validação, não autorização para realizar promoção sem regras acordadas.

**Dependências:** RF-MVP-025, RF-MVP-026 e integração I05.

**Critérios de aceite:**

- **Dado** sorteio com custo aprovado, **quando** a participação é confirmada com saldo suficiente, **então** registra participação e débito vinculados.
- **Dado** inscrições e método de apuração validados, **quando** o resultado é apurado, **então** registra os ganhadores e a execução para consulta autorizada.
- **Dado** inscrição reenviada da mesma operação, **quando** processada, **então** não cria chances adicionais involuntariamente.
