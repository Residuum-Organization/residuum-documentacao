# 13. Cenários integrados de validação

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1633 a 1678) em 10/11/2026. Corrija aqui, não na origem.


Os cenários abaixo complementam os critérios individuais. São roteiros de homologação, não evidências de testes executados no produto.

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-001 | Usar convite individual duas vezes e em paralelo | Apenas um cadastro autorizado |
| CT-002 | Concorrer pela última vaga de convite compartilhado | Limite não excedido; contador coerente |
| CT-003 | Abrir link expirado e enviar cadastro inválido | Sem conta indevida nem consumo por cadastro falho |
| CT-004 | Registrar manualmente duas latas | Estoque atualizado; nenhum ponto concedido |
| CT-005 | Importar nota com PET, lata e item sem material identificável | Revisão e seleção; complemento manual; sem descarte automático |
| CT-006 | Falhar scanner/consulta de produto/nota | Mensagem e entrada manual; nenhum dado inventado |
| CT-007 | Descarte rápido de lata de Coca-Cola identificada | Revisão, ponto compatível, GPS, confirmação e 10 pontos básicos |
| CT-008 | Selecionar parte do estoque para entrega | Baixa apenas da quantidade confirmada |
| CT-009 | Entregar PET em ponto que não aceita PET | Confirmação incompatível impedida |
| CT-010 | Negar GPS, usar posição antiga ou fora do raio aprovado | Sem conclusão, baixa ou crédito |
| CT-011 | Reenviar confirmação e provocar falha concorrente | Um descarte, uma entrada e um crédito básico; sem sucesso parcial |
| CT-012 | Concluir descarte elegível a campanha | Básico e bônus separados; regra aplicada uma vez |
| CT-013 | Comprar voucher sem saldo e depois com saldo | Primeira operação sem efeito; segunda com aquisição e débito vinculados |
| CT-014 | Participar em sorteio conforme regra aprovada | Registro de participação e custo coerentes, sem duplicidade involuntária |
| CT-015 | Encerrar ponto temporário com material remanescente | Não oferecido como disponível; estoque/histórico preservados |
| CT-016 | Editar materiais aceitos no ponto | Consulta atualizada; estoque anterior preservado |
| CT-017 | Responsável solicitar retirada | Pedido ao administrador; cooperativa não acionada automaticamente |
| CT-018 | Administrador solicitar e cooperativa aceitar | Atribuição, agendamento e aceite rastreáveis |
| CT-019 | Cooperativa registrar 12 kg PET e 3 kg alumínio | Registro por material vinculado à coleta; nenhum novo ponto básico |
| CT-020 | Registrar coleta parcial | Movimento conforme regra validada; não zerar todo o ponto por inferência |
| CT-021 | Concluir coleta sem pagar | Situação operacional separada da financeira |
| CT-022 | Administrador iniciar pagamento e repetir após timeout | Uma ordem lógica; resultado conciliável |
| CT-023 | Receber retorno de pagamento inválido, repetido ou incerto | Sem confirmação falsa nem duplicidade |
| CT-024 | Solicitar relatório sem benefício de plano | Restrição aplicada também ao administrador conforme regra aprovada |
| CT-025 | Ter plano pago e pedir dados de ponto sem autorização | Acesso negado |
| CT-026 | Exibir ativo, aberto e conectado | Conceitos e janela claros segundo definições aprovadas |
| CT-027 | Adicionar imagem/vídeo válido e inválido | Publicação apenas da mídia aceita; condições em texto disponíveis |
| CT-028 | Abrir confirmação e seguir para Home ou Loja | Ambas as ações funcionam sem repetir o descarte |
| CT-029 | Restaurar backup e investigar crédito/pagamento | Recuperação medida e cadeia de auditoria consultável |

### 13.1 Critério de pronto para homologar cada requisito

1. Decisões bloqueantes resolvidas e registradas, ou trecho explicitamente limitado ao comportamento já definido.
2. Dados, permissão e cenários BDD coerentes com as regras de negócio.
3. Comportamento existente comparado ao esperado, com evidência.
4. Caminho principal e falhas relevantes verificados, incluindo duplicidade quando houver efeito de estoque, pontos ou dinheiro.
5. Resultado aprovado pelos responsáveis e divergências documentadas.

Não declarar o MVP inteiro aprovado apenas porque uma tela existe, um diagrama foi criado ou o backlog contém “Done”.
