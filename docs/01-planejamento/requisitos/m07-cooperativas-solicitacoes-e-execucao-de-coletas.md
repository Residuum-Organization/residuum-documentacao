# M07 — Cooperativas, solicitações e execução de coletas

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 883 a 995) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-038 — Cadastrar cooperativa e seus acessos

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** administrador.

**Objetivo:** habilitar organizações que executam coletas, identificadas por CNPJ.

**Pré-condições:** administrador autorizado. **Entrada:** CNPJ, identificação da organização, contatos e operadores; dados financeiros serão definidos com o pagamento.

**Fluxo:** cadastrar organização; validar os dados conforme política aprovada; associar acessos; habilitar operação. Validação cadastral externa, documentos, áreas atendidas e cadastro do recebedor de pagamento aguardam definição.

**Exceções:** CNPJ não equivale automaticamente à comprovação de que a entidade é uma cooperativa. Cadastro incompleto não deve habilitar pagamento sem os dados exigidos pelo provedor. Desativação preserva histórico.

**Dependências:** RF-MVP-008 e RF-MVP-044. **Pendências:** PD-003, PD-016 e PD-023.

**Critérios de aceite:**

- **Dado** administrador autorizado e dados aceitos, **quando** cadastra a cooperativa, **então** ela fica identificada por CNPJ e seus operadores possuem vínculos definidos.
- **Dado** acesso de uma cooperativa, **quando** consulta coletas, **então** visualiza somente as atribuídas ou autorizadas a sua organização.

#### RF-MVP-039 — Solicitar e agendar coleta administrativamente

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** administrador.

**Objetivo:** selecionar quem retirará materiais de um ponto e propor o agendamento.

**Pré-condições:** ponto e cooperativa cadastrados; necessidade identificada pelo administrador ou pedido recebido. **Entrada:** ponto, cooperativa e data/horário previstos.

**Fluxo:** consultar ocupação; selecionar cooperativa; informar agendamento; enviar solicitação; registrar autoria e horário do envio; apresentar no painel da cooperativa para aceite. O horário é previsto até o aceite, conforme estado proposto na seção 10.

**Exceções:** envio não significa aceite. Reatribuição, conflito de horários e alterações após aceite são PD-014. Valor não será calculado automaticamente antes da definição de PD-015.

**Dependências:** RF-MVP-037, RF-MVP-038 e RF-MVP-040.

**Critérios de aceite:**

- **Dado** administrador autorizado, **quando** envia a solicitação, **então** a cooperativa escolhida vê ponto e agendamento para decidir sobre o aceite.
- **Dado** solicitação recém-enviada, **quando** o administrador consulta, **então** ela não é exibida como já aceita.
- **Dado** necessidade identificada diretamente pelo administrador, **quando** solicita, **então** não exige pedido prévio do responsável.

#### RF-MVP-040 — Consultar e aceitar solicitação de coleta

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** operador da cooperativa atribuída.

**Objetivo:** confirmar que a cooperativa realizará a coleta proposta.

**Pré-condições:** solicitação atribuída e ainda passível de aceite. **Fluxo:** consultar ponto, materiais aceitos e agendamento; confirmar aceite; registrar operador e momento; refletir decisão no painel administrativo.

**Exceções:** outra cooperativa não pode aceitar; repetição não cria nova coleta. Recusa, silêncio, prazo de resposta e cancelamento aguardam PD-014. Não existe oferta indiscriminada para primeira cooperativa que responder.

**Dependências:** RF-MVP-039 e RF-MVP-042.

**Critérios de aceite:**

- **Dado** solicitação destinada à cooperativa, **quando** seu operador aceita, **então** o administrador e a cooperativa consultam o aceite registrado.
- **Dado** cooperativa diferente, **quando** tenta aceitar, **então** a operação é negada.
- **Dado** aceite repetido da mesma solicitação, **quando** processado, **então** não duplica coleta ou compromisso.

#### RF-MVP-041 — Fornecer rota e agendamento no painel

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** cooperativa; plataforma fornece os dados.

**Objetivo:** disponibilizar destino, rota planejada e horário previsto sem preenchimento manual da cooperativa.

**Pré-condições:** coleta atribuída, ponto georreferenciado e serviço de mapas disponível. **Fluxo:** exibir localização e agendamento; obter rota via integração prevista com Google Maps; apresentar orientação no painel.

**Exceções:** falha da API deve manter identificação do ponto e compromisso acessíveis. Origem do trajeto, navegação externa/interna da cooperativa, atualização da rota e estimativa de chegada são PD-017. Não inclui prova do caminho percorrido ou rastreamento contínuo.

**Dependências:** RF-MVP-039, RF-MVP-040 e integração I03.

**Critérios de aceite:**

- **Dado** coleta atribuída com destino válido, **quando** o operador abre o painel, **então** vê ponto e agendamento fornecidos pela plataforma.
- **Dado** rota obtida pelo serviço, **quando** é exibida, **então** está identificada como orientação planejada e não como trajeto realizado.

#### RF-MVP-042 — Acompanhar andamento da coleta

**Situação:** confirmado com estados propostos para validação. **Fonte:** S7. **Atores:** administrador, cooperativa e responsável pelo ponto nos limites de acesso.

**Objetivo:** mostrar a progressão da solicitação sem confundir operação e pagamento.

**Fluxo:** registrar solicitação, aceite e entrega dos registros da coleta; apresentar situação e eventos com autoria; manter histórico. Proposta de estados: solicitada, aceita, em execução e registrada. Transição “em execução” depende de gatilho a definir.

**Exceções:** estados de recusada, cancelada ou concluída após revisão administrativa não são decisões confirmadas. Regras de correção e início real de execução aguardam PD-014 e PD-018.

**Dependências:** RF-MVP-039, RF-MVP-040, RF-MVP-043 e RF-MVP-046.

**Critérios de aceite:**

- **Dado** aceite registrado, **quando** os atores autorizados consultam a coleta, **então** veem a mesma decisão com autoria e data.
- **Dado** coleta registrada e pagamento ainda não confirmado, **quando** consultam o andamento, **então** situação operacional e financeira são exibidas separadamente.

#### RF-MVP-043 — Registrar materiais e pesos retirados

**Situação:** confirmado com pendências. **Fontes:** S4/RF022 e S7. **Ator:** cooperativa atribuída.

**Objetivo:** informar o que efetivamente foi retirado do ponto por material.

**Pré-condições:** solicitação aceita e acesso autorizado. **Entrada:** material PET e/ou lata de alumínio e peso medido de cada material; kg como unidade de apresentação herdada da V5, precisão a validar.

**Fluxo:** abrir coleta; preencher os materiais retirados e pesos; revisar; enviar; disponibilizar registros ao administrador; refletir movimentação do ponto segundo regra de conciliação validada. Somente materiais presentes na retirada devem ser informados; campo ausente não significa peso medido zero.

**Exceções:** rejeitar peso negativo e registrar falha sem concluir. Coleta parcial, peso zero, correção e reconciliação com embalagens em estoque são PD-014 e PD-018. Não zerar automaticamente todo o ponto só porque houve coleta.

**Dependências:** RF-MVP-035 e RF-MVP-042.

**Critérios de aceite:**

- **Dado** coleta aceita, **quando** registra 12 kg de PET e 3 kg de alumínio, **então** o administrador consulta os dois pesos vinculados ao ponto, à coleta e à cooperativa.
- **Dado** registro reenviado da mesma operação, **quando** processado, **então** não duplica retirada ou peso contabilizado.
- **Dado** pesagem registrada, **quando** o resultado é gravado, **então** não credita novamente os 10 pontos dos usuários.
