# M06 — Pontos de coleta e painel do responsável

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 757 a 882) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-031 — Cadastrar e administrar pontos de coleta

**Situação:** confirmado com pendências. **Fontes:** S4/RF003 a RF005 e S7. **Ator:** administrador.

**Objetivo:** centralizar o cadastro dos locais e seus responsáveis.

**Pré-condições:** administrador autorizado. **Entrada:** nome, endereço, coordenadas, responsável, contexto do local, tipo fixo/temporário, materiais aceitos, funcionamento e parâmetros de capacidade quando definidos.

**Fluxo:** criar ponto; associar responsável e dados operacionais; habilitar sua disponibilização; editar ou desativar com histórico. O novo fluxo substitui solicitação pública por CPF/CNPJ e fila de aprovação do cadastro.

**Exceções:** cadastro incompleto não deve produzir localização enganosa; desativação preserva histórico. Documentos exigidos para o ponto são PD-003; não exigir CNPJ de todo local residencial por inferência.

**Dependências:** RF-MVP-008, RF-MVP-032 a RF-MVP-035. **Pendências:** PD-003, PD-009.

**Critérios de aceite:**

- **Dado** cadastro válido realizado pelo administrador, **quando** o ponto é habilitado, **então** aparece nas consultas conforme sua disponibilidade e materiais.
- **Dado** um morador, **quando** tenta cadastrar um ponto diretamente, **então** a função administrativa não é autorizada.
- **Dado** desativação, **quando** o histórico é consultado, **então** as entregas e coletas anteriores continuam identificando o ponto.

#### RF-MVP-032 — Gerir pontos temporários

**Situação:** confirmado com pendências. **Fontes:** S4/RF009 e S7. **Ator:** administrador.

**Objetivo:** operar pontos em eventos, feiras ou ações específicas por período determinado.

**Pré-condições:** cadastro do ponto. **Entrada:** identificação do evento/ação e início/fim de funcionamento. **Fluxo:** cadastrar como temporário; disponibilizar durante o período autorizado; retirar da lista de locais disponíveis quando encerrado; preservar registros.

**Exceções:** rejeitar término anterior ao início. Encerramento com materiais remanescentes não pode apagar estoque nem cancelar automaticamente uma coleta. Prorrogação e tratamento do saldo remanescente são PD-009.

**Dependências:** RF-MVP-031, RF-MVP-035 e RF-MVP-037.

**Critérios de aceite:**

- **Dado** ponto temporário fora do período, **quando** o morador busca local disponível, **então** o ponto não é oferecido como destino ativo.
- **Dado** término de um evento com coletas anteriores, **quando** o ponto deixa de receber, **então** os registros permanecem consultáveis aos perfis autorizados.

#### RF-MVP-033 — Classificar contexto e funcionamento do ponto

**Situação:** confirmado com dados herdados. **Fontes:** S4/RF020 e S7. **Atores:** administrador; edição de horários pelo responsável a validar.

**Objetivo:** distinguir natureza do local e informar funcionamento.

**Fluxo:** classificar contexto como condomínio, residência, apartamento, loja, faculdade ou outro rótulo aprovado; manter tipo fixo/temporário em campo separado; cadastrar horários e disponibilidade; apresentar informações no mapa e no painel.

**Exceções:** contexto não altera automaticamente material aceito ou permissões. Formato de tags versus categoria única e permissão de edição dos horários aguardam PD-009. Funcionamento não é o mesmo que operador conectado.

**Dependências:** RF-MVP-016 e RF-MVP-031.

**Critérios de aceite:**

- **Dado** uma faculdade com ponto temporário, **quando** consulta seu cadastro, **então** contexto e duração são informações separadas.
- **Dado** horários cadastrados, **quando** abre os detalhes, **então** a informação corresponde ao cadastro atual.

#### RF-MVP-034 — Editar materiais aceitos

**Situação:** confirmado com pendências. **Fonte:** S7. **Atores:** responsável vinculado e administrador.

**Objetivo:** informar e alterar se o ponto recebe PET, lata de alumínio ou ambos.

**Pré-condições:** ponto existente e permissão. **Fluxo:** consultar materiais; editar seleção; salvar e refletir nos detalhes e critérios de descarte; registrar autor e alteração. Material aceito é diferente de material já acumulado.

**Exceções:** deixar de aceitar um material não elimina seu histórico ou estoque existente. Comportamento para usuário que já iniciou deslocamento e alterações simultâneas é PD-009.

**Dependências:** RF-MVP-015, RF-MVP-019 e RF-MVP-035.

**Critérios de aceite:**

- **Dado** responsável autorizado, **quando** altera os materiais aceitos, **então** as consultas posteriores apresentam a nova configuração.
- **Dado** saldo de PET e retirada do PET da lista aceita, **quando** consulta o estoque, **então** o saldo anterior permanece registrado.
- **Dado** responsável de outro ponto, **quando** tenta editar, **então** a operação é negada.

#### RF-MVP-035 — Acompanhar estoque e ocupação do ponto

**Situação:** confirmado com pendências. **Fontes:** S4/RF018 e S7. **Atores:** responsável vinculado e administrador.

**Objetivo:** mostrar os materiais recebidos e a necessidade de retirada.

**Fluxo:** apresentar entradas por material, quantidades registradas, coletas e situação de ocupação; atualizar após descartes e retiradas; distinguir quantidades de embalagens, estimativas e pesos efetivamente coletados.

**Exceções:** não converter número de latas em kg reais sem regra validada. Método de ocupação, unidade da capacidade e tratamento de coleta parcial são PD-009 e PD-014. O painel operacional e os relatórios pagos são capacidades distintas; acesso mínimo precisa de PD-019.

**Dependências:** RF-MVP-019, RF-MVP-043 e RF-MVP-036.

**Critérios de aceite:**

- **Dado** entradas de PET e lata, **quando** consulta o painel, **então** identifica os materiais separadamente.
- **Dado** peso medido registrado na coleta, **quando** consulta indicadores, **então** ele não é apresentado como o peso individual comprovado de cada descarte.
- **Dado** informação apenas estimada, **quando** é exibida, **então** aparece identificada como estimativa.

#### RF-MVP-036 — Sinalizar necessidade de coleta

**Situação:** confirmado com pendências. **Fontes:** S4/RF019 e S7. **Atores:** administrador e responsável pelo ponto.

**Objetivo:** evidenciar ponto próximo do limite ou cheio para apoiar agendamento.

**Pré-condições:** critério de ocupação aprovado. **Fluxo:** avaliar nível conforme parâmetro; sinalizar no painel do administrador e do responsável; disponibilizar início de pedido de coleta. Não encaminhar automaticamente à cooperativa.

**Exceções:** cálculo de nível, frequência de atualização, alertas externos e repetição são PD-009 e PD-021. Um alerta por si só não agenda retirada nem comprova que ela aconteceu.

**Dependências:** RF-MVP-035, RF-MVP-037 e RF-MVP-039.

**Critérios de aceite:**

- **Dado** nível atingindo o limite validado, **quando** o indicador é atualizado, **então** o administrador e o responsável visualizam a necessidade de coleta.
- **Dado** somente a sinalização de lotação, **quando** ela ocorre, **então** nenhuma cooperativa recebe coleta automaticamente atribuída.

#### RF-MVP-037 — Solicitar coleta ao administrador

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** responsável pelo ponto.

**Objetivo:** pedir retirada sem escolher ou acionar diretamente a cooperativa.

**Pré-condições:** responsável vinculado ao ponto. **Fluxo:** selecionar o ponto autorizado; registrar pedido e informações pertinentes; encaminhar ao painel administrativo; acompanhar encaminhamento. O administrador também pode iniciar coleta sem pedido prévio do ponto.

**Exceções:** não gerar solicitações duplicadas por repetição de envio. Regras para múltiplos pedidos abertos, cancelamento e informações opcionais são PD-014.

**Dependências:** RF-MVP-039 e RF-MVP-042.

**Critérios de aceite:**

- **Dado** responsável autorizado, **quando** envia um pedido, **então** o administrador pode consultá-lo com identificação do ponto e solicitante.
- **Dado** pedido ainda não encaminhado, **quando** a cooperativa consulta sua área, **então** ele não aparece como coleta atribuída a ela.
