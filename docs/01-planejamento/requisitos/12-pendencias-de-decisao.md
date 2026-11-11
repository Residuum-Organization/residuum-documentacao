# 12. Pendências de decisão

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1591 a 1632) em 10/11/2026. Corrija aqui, não na origem.


As pendências não são tarefas automaticamente autorizadas. “Responsável sugerido” indica quem deve validar a regra. Quando uma pendência bloqueia critérios ou integração, a equipe deve resolver antes de implementar aquele trecho; pode continuar capacidades independentes.

| ID | Pergunta/decisão a resolver | Requisitos afetados | Responsável sugerido |
|---|---|---|---|
| PD-001 | Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa | RF-MVP-001 a RF-MVP-003 | Produto/idealizador |
| PD-002 | Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador? | RF-MVP-003 a RF-MVP-005, RF-MVP-008 | Produto/segurança |
| PD-003 | Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo | RF-MVP-003 a RF-MVP-008, RF-MVP-031, RF-MVP-038 | Produto/equipe técnica |
| PD-004 | Tipos de notas e identificadores, fonte de consulta, catálogo de produtos, cobertura, autorização, limites e falhas dos serviços | RF-MVP-010, RF-MVP-011 | Equipe técnica/produto |
| PD-005 | Pode importar a mesma nota novamente? Como evitar inclusão involuntária repetida e selecionar apenas embalagens realmente disponíveis? | RF-MVP-011, RF-MVP-013 | Produto |
| PD-006 | Decisão de UX aprovada em 10/10/2026: rascunho rápido em memória do fluxo, abandono elimina, rota em outra aba preserva, GPS novo no retorno; seleção parcial e ajuste/remoção sem pontos. Contratos reais de ajuste/exclusão, concorrência e confirmação continuam pendentes; ver handoff. | RF-MVP-014, RF-MVP-017, RF-MVP-019 | Produto e backend |
| PD-007 | Busca sem GPS, materiais mistos em pontos diferentes, recebimento fora do horário ou com ponto cheio e escolha do serviço de mapa do morador | RF-MVP-015 a RF-MVP-017 | Produto/operação |
| PD-008 | Raio, precisão, idade da posição, tentativas e timeout do GPS; critério de campo para autorizar presença | RF-MVP-018 e RNF-MVP-004 | Produto/equipe técnica |
| PD-009 | Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento | RF-MVP-031 a RF-MVP-036 | Produto/operação |
| PD-010 | Modelo definitivo de pontos, validade, limites, ajustes/estornos e prevenção de fracionamento de descartes para repetir 10 pontos | RF-MVP-021, RF-MVP-023 | Idealizador/produto |
| PD-011 | Adesão, elegibilidade, comprovação de produto, metas, valores extras, acúmulo, período e mudanças/cancelamento de campanhas | RF-MVP-022, RF-MVP-024, RF-MVP-027, RF-MVP-028 | Produto/idealizador |
| PD-012 | Custos, estoque e limites dos vouchers; emissão, validade, uso no parceiro, cancelamento e devolução de pontos | RF-MVP-025, RF-MVP-029 | Produto/comercial |
| PD-013 | Condições dos sorteios, chances, custo, prêmio, apuração, resultado e requisitos para sua realização | RF-MVP-030 | Produto/idealizador e validação especializada |
| PD-014 | Recusa, silêncio, prazo de aceite, cancelamento, reagendamento, múltiplos pedidos, início da execução e coleta parcial | RF-MVP-037, RF-MVP-039, RF-MVP-040, RF-MVP-042, RF-MVP-043 | Idealizador/operação |
| PD-015 | Como definir/negociar valor de cada coleta? Existe cálculo por peso, material ou outra base? | RF-MVP-044, RF-MVP-045 | Idealizador |
| PD-016 | Provedor, recebedor, origem dos recursos, momento autorizado, tarifas, confirmação, conciliação, nova tentativa e estorno | RF-MVP-038, RF-MVP-044 a RF-MVP-046 | Idealizador/financeiro/equipe técnica |
| PD-017 | Origem da rota da cooperativa, navegação interna/externa, serviços Google, ETA, horários reais e eventual acompanhamento contínuo | RF-MVP-041, RF-MVP-042 | Produto/equipe técnica |
| PD-018 | Precisão dos pesos, ausência de material, peso zero, correção/revisão do registro e conciliação entre contagens e pesos coletados | RF-MVP-035, RF-MVP-043 | Operação/produto |
| PD-019 | Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo | RF-MVP-047, RF-MVP-049 a RF-MVP-052 | Idealizador/comercial/produto |
| PD-020 | Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado | RF-MVP-048, RF-MVP-049 | Produto/operação |
| PD-021 | Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega | RF-MVP-030, RF-MVP-036, RF-MVP-039, RF-MVP-053 | Produto/operação |
| PD-022 | Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais | RNF-MVP-005, RNF-MVP-008 e módulos com dados pessoais | Produto/segurança e validação especializada |
| PD-023 | Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões | RF-MVP-005, RF-MVP-008, RF-MVP-038 | Produto/segurança |
| PD-024 | Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia | RF-MVP-053 e RNF-MVP-010 | Produto/equipe técnica |
| PD-025 | Matriz de dispositivos, rede, volume, simultaneidade, metas atuais de tempo e critérios de usabilidade | RNF-MVP-001, RNF-MVP-006, RNF-MVP-012 | Equipe técnica/produto/testes |
| PD-026 | Infraestrutura vigente, disponibilidade, janela comercial, backups, RPO/RTO, retenção e processo de entrega | RNF-MVP-007 a RNF-MVP-011 | Equipe técnica/operação |
| PD-027 | Avaliar ranking, QR/confirmação pelo ponto, cashback, certificados e funcionalidades futuras sem incorporá-las silenciosamente ao MVP | Seção 14 | Idealizador/equipe |

### 12.1 Dependências que merecem decisão antes da implementação

- **Nota fiscal/produto:** não prometer autopreenchimento de dados que a fonte não fornece; resolver PD-004 antes de fechar a integração.
- **GPS e ocupação:** aprovar PD-008/PD-009 para testar liberação de descarte e ponto cheio.
- **Campanhas/vouchers/sorteios:** definir PD-011 a PD-013 antes de publicar ofertas reais ou debitar pontos por participação.
- **Coleta/pagamento:** resolver PD-014 a PD-018 antes de automatizar estados, conciliação e pagamentos reais.
- **Planos/dados:** resolver PD-019/PD-020 para restringir dados sem bloquear a operação mínima.
