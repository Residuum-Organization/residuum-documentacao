# 10. Estados e diagramas complementares

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1385 a 1502) em 10/11/2026. Corrija aqui, não na origem.


### 10.1 Proposta de estados para validação

**Os nomes abaixo são propostas de modelagem.** A equipe deve validá-los, especialmente nas transições com pendências. Não são enums ou tabelas implementados.

| Objeto | Estado proposto | Significado | Restrição/pendência |
|---|---|---|---|
| Convite individual | Disponível / consumido / expirado | Um uso; expiração se definida | Validade/revogação em PD-001 |
| Convite compartilhado | Disponível / esgotado / expirado | Vagas e validade controladas | Última vaga protegida contra concorrência |
| Descarte | Preparado / aguardando presença / concluído | Seleção não equivale a entrega | Cancelamento e rascunho em PD-006 |
| Solicitação de coleta | Solicitada / aceita | Encaminhamento e decisão da cooperativa | Recusa/timeout em PD-014 |
| Coleta | Em execução / registrada | Retirada e envio de materiais/pesos | Início real e revisão em PD-014/PD-018 |
| Pagamento | Não iniciado / em processamento / confirmado / falhou | Situação financeira separada | Mapeamento depende do provedor |
| Campanha/oferta | Rascunho / publicada / encerrada | Visibilidade e vigência | Alterações e cancelamento em PD-011/PD-012 |
| Ponto | Habilitado / desabilitado | Condição cadastral | Separado de horário e ocupação |
| Ocupação | Disponível / próximo do limite / cheio | Nível de materiais | Cálculo em PD-009 |

### 10.2 Estado operacional da coleta — proposta

```mermaid
stateDiagram-v2
    [*] --> Solicitada: Administrador envia solicitação
    Solicitada --> Aceita: Cooperativa confirma aceite
    Aceita --> EmExecucao: Gatilho de início a definir
    EmExecucao --> Registrada: Cooperativa envia materiais e pesos
```

Não foram criados caminhos automáticos de recusa, cancelamento ou encerramento por prazo porque não houve definição. O estado financeiro é independente e não é transição desse diagrama.

### 10.3 Estado financeiro — proposta

```mermaid
stateDiagram-v2
    [*] --> NaoIniciado
    NaoIniciado --> EmProcessamento: Administrador confirma ordem autorizada
    EmProcessamento --> Confirmado: Provedor confirma pagamento
    EmProcessamento --> Falhou: Provedor informa falha definitiva
```

Uma resposta incerta permanece em conciliação; não se transforma em falha definitiva nem sucesso sem evidência. Nova tentativa, estorno e devolução serão desenhados após PD-016.

### 10.4 Fluxo dos dois tipos de convite

```mermaid
flowchart TD
    admin["Administrador gera link"] --> modalidade{"Modalidade"}
    modalidade -->|"Individual"| individual["Um cadastro permitido"]
    modalidade -->|"Compartilhado"| grupo["Limite e expiração configurados"]
    individual --> validar["Validar link, disponibilidade e dados"]
    grupo --> validar
    validar --> valido{"Cadastro autorizado?"}
    valido -->|"Não"| negar["Informar impedimento sem criar conta"]
    valido -->|"Sim"| confirmar["Concluir conta e consumir vaga de forma consistente"]
    confirmar --> tipo{"Convite utilizado"}
    tipo -->|"Individual"| consumido["Marcar como consumido"]
    tipo -->|"Compartilhado"| contador["Incrementar cadastros concluídos"]
    contador --> limite{"Limite atingido?"}
    limite -->|"Sim"| esgotado["Impedir novos cadastros"]
    limite -->|"Não"| vigente["Disponível enquanto vigente"]
```

### 10.5 Fluxo da loja e utilização de pontos

```mermaid
flowchart TD
    loja["Abrir loja"] --> detalhes["Consultar descrição e condições"]
    detalhes --> tipo{"Tipo de oferta"}
    tipo -->|"Campanha"| participar["Participar conforme regra publicada"]
    participar --> meta["Apurar descartes e metas elegíveis"]
    meta --> bonus["Conceder bônus quando condição for cumprida"]
    tipo -->|"Voucher"| custo["Mostrar custo e solicitar confirmação"]
    tipo -->|"Sorteio"| sorteio["Mostrar regras e custo aprovado da participação"]
    sorteio --> custo
    custo --> saldo{"Elegível, disponível e saldo suficiente?"}
    saldo -->|"Não"| impedimento["Informar motivo sem debitar"]
    saldo -->|"Sim"| debitar["Registrar débito e aquisição ou participação uma vez"]
    debitar --> resultado["Mostrar resultado e novo saldo"]
```

Campanhas que cobram pontos também usam a mesma verificação de débito; condições e acúmulo dependem de PD-011. Voucher adquirido não comprova que já foi utilizado no parceiro.

### 10.6 Sequência de solicitação e pagamento da coleta

```mermaid
sequenceDiagram
    autonumber
    actor Responsavel as Responsável pelo ponto
    actor Admin as Administrador
    participant Residuum as Plataforma Residuum
    actor Cooperativa
    participant Mapas as Serviço de mapas
    participant Pagamento as API de pagamento
    opt Pedido iniciado pelo responsável
        Responsavel->>Residuum: Solicita retirada no ponto autorizado
        Residuum-->>Admin: Apresenta pedido no painel
    end
    Admin->>Residuum: Seleciona ponto, cooperativa e agendamento
    Residuum-->>Cooperativa: Disponibiliza solicitação para aceite
    Cooperativa->>Residuum: Aceita solicitação
    Residuum-->>Admin: Registra aceite
    Residuum->>Mapas: Solicita rota planejada
    Mapas-->>Residuum: Retorna orientação ao ponto
    Residuum-->>Cooperativa: Mostra rota e horário previsto
    Cooperativa->>Residuum: Registra materiais e pesos coletados
    Residuum-->>Admin: Apresenta registros da coleta
    Admin->>Residuum: Confirma pagamento com valor e condições aprovados
    Residuum->>Pagamento: Envia ordem identificada
    Pagamento-->>Residuum: Retorna identificação e situação
    alt Pagamento confirmado pelo provedor
        Residuum-->>Admin: Pagamento confirmado
        Residuum-->>Cooperativa: Situação financeira confirmada
    else Pendente ou falha
        Residuum-->>Admin: Informa situação sem declarar recebimento
        Residuum-->>Cooperativa: Mantém resultado financeiro correspondente
    end
```
