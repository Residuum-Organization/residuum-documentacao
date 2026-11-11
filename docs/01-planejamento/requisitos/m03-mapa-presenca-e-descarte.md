# M03 — Mapa, presença e descarte

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 469 a 575) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-015 — Consultar pontos próximos compatíveis

**Situação:** confirmado com pendências. **Fontes:** S4/RF007 e S7. **Ator:** usuário.

**Objetivo:** encontrar locais que recebam os materiais selecionados.

**Pré-condições:** seleção de resíduos ou consulta ao mapa. **Fluxo:** obter localização quando autorizada; mostrar pontos próximos no mapa; informar materiais aceitos; permitir filtros e escolha. Um ponto incompatível não pode ser usado para concluir a entrega daquele material.

**Exceções:** nenhum ponto elegível, GPS negado e serviço de mapas indisponível devem produzir mensagem clara sem concluir descarte. Busca por endereço sem GPS e descarte em mais de um ponto são PD-007.

**Dependências:** RF-MVP-016, RF-MVP-031 e RF-MVP-034; integração I03.

**Critérios de aceite:**

- **Dado** seleção de latas, **quando** o usuário consulta pontos, **então** identifica quais recebem alumínio.
- **Dado** seleção de PET e lata, **quando** tenta concluir tudo em um ponto que só aceita PET, **então** o sistema não confirma a entrega incompatível.
- **Dado** ausência de ponto compatível, **quando** a consulta termina, **então** informa a indisponibilidade sem alterar estoque ou saldo.

#### RF-MVP-016 — Consultar detalhes do ponto

**Situação:** herdado com ajustes confirmados. **Fontes:** S4/RF008 e S7. **Ator:** usuário.

**Objetivo:** fornecer informações para decidir onde entregar os resíduos.

**Pré-condições:** ponto consultável. **Fluxo:** apresentar nome, endereço, posição no mapa, materiais aceitos, funcionamento, tipo fixo/temporário e disponibilidade. Exibição pública do volume acumulado depende de PD-019.

**Exceções e resultado:** diferenciar ponto desativado, fora do período temporário e condição de ocupação. Regra de recebimento durante fechamento ou lotação precisa ser definida; não se presume que ponto cheio aceite novos descartes.

**Dependências:** RF-MVP-031 a RF-MVP-035. **Pendências:** PD-007, PD-009 e PD-019.

**Critérios de aceite:**

- **Dado** um ponto consultável, **quando** abre seus detalhes, **então** o usuário vê localização, materiais e informações de funcionamento cadastradas.
- **Dado** um ponto temporário fora do período válido, **quando** é consultado, **então** não é apresentado como local atualmente disponível para descarte.

#### RF-MVP-017 — Encaminhar usuário à navegação externa

**Situação:** confirmado. **Fonte:** S7. **Ator:** usuário.

**Objetivo:** orientar o trajeto sem exigir acompanhamento contínuo dentro do Residuum.

**Pré-condições:** ponto selecionado com coordenadas válidas. **Fluxo:** oferecer navegação; abrir aplicativo/serviço externo com o ponto como destino; permitir retorno ao fluxo para confirmar a entrega.

**Exceções:** indisponibilidade do navegador de mapas deve preservar ponto e itens. Não marcar chegada ou descarte com base apenas na abertura da rota. A seleção não persiste após recarregar ou encerrar a aba; ao retornar da rota externa, obter uma nova leitura de GPS (decisão PD-006 de 10/10/2026).

**Dependências:** RF-MVP-015, RF-MVP-018 e integração I03.

**Critérios de aceite:**

- **Dado** um ponto escolhido, **quando** o usuário inicia navegação, **então** o destino enviado corresponde ao ponto selecionado.
- **Dado** apenas a abertura da navegação, **quando** retorna, **então** a entrega ainda exige validação de presença e confirmação.

#### RF-MVP-018 — Validar presença por GPS

**Situação:** confirmado com pendências. **Fontes:** S4/RF011 e S7. **Ator:** usuário.

**Objetivo:** condicionar a confirmação à proximidade com o ponto escolhido.

**Pré-condições:** ponto e itens selecionados; permissão de localização. **Fluxo:** obter posição recente e informação de precisão; comparar com o ponto segundo os parâmetros aprovados; liberar confirmação se válida; registrar a evidência necessária à operação.

**Exceções:** fora do raio, posição antiga, baixa precisão ou falha de obtenção não concluem entrega. Exibir impedimento e permitir nova tentativa conforme política. GPS é indício de proximidade, não prova de entrega física. Não existe alternativa por QR ou aprovação retroativa neste escopo.

**Dependências:** RNF-MVP-004. **Pendências:** PD-008; eventual confirmação pelo ponto em PD-027. Os 100 metros da V5 são referência a validar, não parâmetro confirmado da V6.

**Critérios de aceite:**

- **Dado** posição aceita pelos parâmetros validados, **quando** a presença é verificada, **então** o sistema permite confirmar o descarte no ponto escolhido.
- **Dado** GPS indisponível ou posição rejeitada, **quando** tenta concluir, **então** não há baixa de itens nem recompensa e o motivo é apresentado.

#### RF-MVP-019 — Confirmar entrega e movimentar estoques

**Situação:** confirmado. **Fontes:** S4/RF012 e S7. **Ator:** usuário.

**Objetivo:** registrar entrega única e consistente dos itens ao ponto.

**Pré-condições:** presença válida, itens disponíveis e ponto apto a recebê-los conforme regras validadas. **Fluxo:** apresentar resumo; receber confirmação explícita; revalidar itens, material e ponto; registrar descarte; baixar somente as quantidades entregues do estoque do usuário; registrar entrada correspondente no ponto; conceder 10 pontos básicos uma vez.

**Exceções:** repetição, concorrência, incompatibilidade ou falha não devem gerar baixa parcial, saldo negativo ou crédito duplicado. Estimativas do ponto não se tornam peso medido. Bônus deve ter vínculo rastreável, sem reaplicar crédito básico se processado posteriormente.

**Dependências:** RF-MVP-014, RF-MVP-018, RF-MVP-021 e RNF-MVP-003. **Pendências:** PD-006, PD-009.

**Critérios de aceite:**

- **Dado** três latas e entrega válida de uma, **quando** confirma, **então** restam duas no estoque, o ponto registra uma recebida e o usuário ganha 10 pontos básicos.
- **Dado** a mesma confirmação reenviada, **quando** é processada, **então** o descarte e seus efeitos ocorrem uma única vez.
- **Dado** falha na conclusão, **quando** a operação não termina, **então** o sistema não apresenta sucesso com estoque ou crédito básico incompletos.

#### RF-MVP-020 — Exibir confirmação e histórico de descartes

**Situação:** confirmado. **Fontes:** S4/RF006 e S7. **Ator:** usuário.

**Objetivo:** tornar compreensível o resultado da entrega e permitir consulta posterior.

**Pré-condições:** operação concluída. **Fluxo:** exibir ponto, itens/quantidades, resultado e 10 pontos básicos; separar eventual bônus e saldo; oferecer “Voltar para Home” e “Ir para a Loja”; disponibilizar o registro no histórico pessoal.

**Exceções:** falha não usa tela de sucesso. Bônus ainda não confirmado não aparece como já creditado. Histórico deve distinguir registro no estoque de entrega realizada.

**Dependências:** RF-MVP-019, RF-MVP-023 e RF-MVP-026.

**Critérios de aceite:**

- **Dado** descarte concluído, **quando** a confirmação aparece, **então** apresenta a recompensa e ambas as ações de navegação.
- **Dado** “Ir para a Loja”, **quando** o usuário seleciona a ação, **então** acessa a loja autenticado.
- **Dado** consulta ao histórico, **quando** localiza a entrega, **então** os dados correspondem ao descarte concluído.
