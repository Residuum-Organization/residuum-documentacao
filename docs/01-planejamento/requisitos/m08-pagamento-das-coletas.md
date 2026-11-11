# M08 — Pagamento das coletas

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 996 a 1052) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-044 — Preparar informações de pagamento

**Situação:** confirmado com pendências bloqueantes. **Fonte:** S7. **Ator:** administrador.

**Objetivo:** identificar coleta, valor e recebedor antes de iniciar pagamento dentro da plataforma.

**Pré-condições:** integração selecionada e condições aprovadas. **Entrada:** identificação da coleta e cooperativa, valor definido segundo futura regra e dados do recebedor exigidos pela API.

**Fluxo:** consultar a coleta; apresentar identificação do recebedor e valor; obter confirmação administrativa. Não definir tabela por kg, material ou distância, nem permitir cálculo implícito.

**Exceções:** sem valor ou dados financeiros válidos, pagamento não pode ser iniciado. Aprovação da coleta, negociação de valor e condições de liberação ainda são PD-015 e PD-016.

**Dependências:** RF-MVP-038, RF-MVP-043 e integração I04.

**Critérios de aceite:**

- **Dado** valor e recebedor definidos pela política aprovada, **quando** o administrador prepara o pagamento, **então** vê coleta, destinatário e valor antes de confirmar.
- **Dado** dados obrigatórios ausentes, **quando** tenta prosseguir, **então** o sistema impede envio à API e informa o que falta.

#### RF-MVP-045 — Iniciar pagamento por API

**Situação:** confirmado com pendências bloqueantes. **Fonte:** S7. **Ator:** administrador.

**Objetivo:** efetuar pagamento à cooperativa a partir de ação administrativa.

**Pré-condições:** informações válidas e condição de autorização aprovada. **Fluxo:** administrador confirma; plataforma envia ordem ao provedor; vincula identificador externo à coleta; registra resposta inicial; aguarda resultado quando o processamento não for imediato.

**Exceções:** envio não significa que dinheiro foi recebido. Reenvio por timeout deve reutilizar a identificação da mesma ordem, evitando pagamento duplicado. Concluir coleta ou aceitar solicitação não inicia pagamento automaticamente.

**Dependências:** RF-MVP-044, RF-MVP-046 e RNF-MVP-003. **Pendências:** PD-015, PD-016.

**Critérios de aceite:**

- **Dado** administrador autorizado e ordem válida, **quando** confirma o pagamento, **então** a plataforma solicita processamento e registra a identificação da ordem.
- **Dado** a mesma confirmação repetida, **quando** processada, **então** não produz duas ordens de pagamento para a mesma operação.
- **Dado** coleta concluída sem ação administrativa de pagamento, **quando** consulta o financeiro, **então** não aparece automaticamente como paga.

#### RF-MVP-046 — Acompanhar confirmação e falhas de pagamento

**Situação:** confirmado com detalhamento de integração pendente. **Fonte:** S7. **Atores:** administrador e cooperativa recebedora.

**Objetivo:** distinguir não iniciado, processamento e resultado informado pelo provedor.

**Fluxo:** consultar ou receber atualização da ordem conforme integração; validar autenticidade do retorno; atualizar situação financeira; mostrar coleta, valor, identificador e resultado aos perfis autorizados.

**Exceções:** resposta desconhecida ou timeout não equivale a pagamento confirmado. Retorno repetido não reaplica o efeito. Ordem fora de sequência deve ser conciliada com o provedor. Estorno, reembolso, nova tentativa, tarifas e reconciliação aguardam PD-016.

**Dependências:** RF-MVP-045 e integração I04. Estados da seção 10 são proposta, não mapeamento final da API.

**Critérios de aceite:**

- **Dado** confirmação autêntica de pagamento bem-sucedido, **quando** processada, **então** a ordem passa a apresentar pagamento confirmado.
- **Dado** falha ou resultado ainda incerto, **quando** consultado, **então** o sistema não informa que a cooperativa recebeu.
- **Dado** um retorno repetido, **quando** recebido novamente, **então** o resultado não gera nova ordem ou duplicidade financeira.
