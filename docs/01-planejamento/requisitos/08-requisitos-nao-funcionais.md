# 8. Requisitos não funcionais

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1206 a 1307) em 10/11/2026. Corrija aqui, não na origem.


As capacidades abaixo derivam dos documentos anteriores e das condições necessárias para consistência do MVP. Metas antigas são referências para homologação, não medições já realizadas. Ferramentas específicas exigem revisão da arquitetura existente.

### RNF-MVP-001 — Plataforma responsiva e compatibilidade

**Situação:** herdado para validação. **Origem:** RNF001 e RNF004 antigos.

O produto deve permitir uso em navegador móvel e desktop, com câmera e localização onde suportadas. Modo PWA deve ser verificado antes de ser declarado compatível. Estados de permissão negada, leitura falha e formulário manual devem ser compreensíveis. Fluxos principais devem permitir navegação por teclado e identificação dos campos; esta orientação de acessibilidade é proposta de qualidade para validação.

**Verificação:** executar login, cadastro manual, scanner, retorno de mapas e confirmação em matriz de dispositivos aprovada. Referência anterior: cinco modelos Android; seleção atual pendente em PD-025. **BDD:** dado navegador suportado, quando um fluxo é executado, então controles e mensagens permanecem utilizáveis sem perder informações essenciais.

### RNF-MVP-002 — Autenticação e autorização

**Situação:** herdado com ajuste confirmado de perfis. **Origem:** RNF005 e RNF017 antigos.

Todas as operações protegidas devem validar sessão, perfil e vínculo no serviço responsável. Credenciais devem ser protegidas; segredos de integração não podem ser expostos no cliente ou nos documentos. Alterações administrativas devem ter autoria. Política de sessão, senha e papéis depende de PD-003 e PD-023.

**Verificação:** testar acesso horizontal entre moradores/pontos/cooperativas e acesso vertical às funções administrativas. **BDD:** dado usuário sem vínculo, quando envia requisição direta a dados de outro ponto, então a operação é negada mesmo que tenha um plano pago.

### RNF-MVP-003 — Integridade, concorrência e idempotência

**Situação:** herdado para validação, necessário às regras confirmadas. **Origem:** RNF006 antigo.

Operações de convite, descarte, crédito/débito, aquisição, coleta e pagamento devem evitar efeitos duplicados. A confirmação do descarte deve manter consistentes registro, movimentação de estoque e crédito básico. Bônus posterior deve ter estado rastreável e não repetir o básico. A solução técnica de transações e processamento será definida pela equipe.

**Verificação:** reenvio, timeout e operações concorrentes sobre última vaga, saldo ou quantidade. **BDD:** dado uma operação reenviada, quando é processada, então os efeitos de negócio ocorrem uma vez e o resultado anterior pode ser reconhecido.

### RNF-MVP-004 — Resiliência de localização e consulta externa

**Situação:** GPS confirmado; parâmetros pendentes. **Origem:** RNF007 da V5.

Falhas de GPS, mapas e consulta de produtos/notas devem ser apresentadas sem inventar resultados. Negação de GPS não pode ser convertida em presença válida. Entrada manual deve permanecer acessível para falhas de identificação. Timeout, tentativas, precisão e validade da posição dependem de PD-004 e PD-008.

**Verificação:** simular permissão negada, baixa precisão, localização antiga, indisponibilidade e recuperação. **BDD:** dado GPS inválido, quando o morador tenta concluir, então os itens e pontos não são movimentados indevidamente.

### RNF-MVP-005 — Proteção de dados e privacidade

**Situação:** herdado para validação de produto/jurídico. **Origem:** RNF005 antigo.

Definir finalidade e dados mínimos para moradores, localização e nota fiscal; proteger transmissão e armazenamento; restringir relatórios por autorização; registrar escolhas aplicáveis de compartilhamento. Não tratar consentimento como requisito universal ou comprovação automática de conformidade legal. A política de privacidade, base de tratamento, retenção e atendimento ao titular são PD-022.

**Verificação:** revisar dados coletados, logs, exportações e acesso direto; comprovar que credenciais, tokens de notas e dados pessoais desnecessários não aparecem em logs comuns. **BDD:** dado relatório sem autorização para dados identificáveis, quando é solicitado, então não retorna identificadores pessoais.

### RNF-MVP-006 — Desempenho e experiência

**Situação:** metas herdadas a validar. **Origem:** RNF004 e RNF008 antigos; S6.

Referências anteriores: carregamento principal/mapa inferior a 3 segundos em cenário 4G; Lighthouse mínimo 70; cadastro em até dois minutos; sucesso de pelo menos 80% em teste com cinco usuários. Cada métrica precisa de definição de dispositivo, rede, carga, roteiro e medida em PD-025. Lighthouse não comprova sozinho o tempo do mapa ou a usabilidade.

**Verificação:** medir os fluxos no cenário aprovado e registrar resultados. **BDD:** dado cenário de desempenho validado, quando a página é medida, então o resultado é comparado à meta correspondente com evidência.

### RNF-MVP-007 — Disponibilidade, backups e recuperação

**Situação:** herdado para validação. **Origem:** RNF010 e RNF016 antigos.

Referências anteriores: backups diários, RPO de 24 horas e RTO de 4 horas; disponibilidade de 99% em horário comercial. Janela comercial, cálculo, alertas, retenção de backups e metas vigentes são PD-026. Uso de cloud gerenciada não comprova cumprimento desses objetivos.

**Verificação:** executar restauração em ambiente controlado, medir recuperação e demonstrar monitoramento. **BDD:** dado backup válido, quando restauração de teste é realizada, então dados e serviço são recuperados e o tempo é registrado para comparação com o RTO aprovado.

### RNF-MVP-008 — Auditoria e observabilidade

**Situação:** herdado para validação. **Origem:** RF030 básico, RNF006 e RNF014 antigos.

Registrar identificador, autoria, horário, entidade e resultado das operações relevantes; permitir correlação entre descarte, pontos, coleta e pagamento; proteger contra alteração indevida. Separar trilha de negócio e diagnóstico de erro. Não exigir stack trace em toda operação bem-sucedida, como sugeriam os documentos anteriores.

Retenção anterior de 12 meses é referência a revisar em PD-022/PD-026. Logs, monitoramento de falhas e disponibilidade são necessários; tracing distribuído e cold storage não entram por padrão.

**Verificação:** percorrer uma operação de ponta a ponta sem expor segredos. **BDD:** dado pagamento iniciado, quando se investiga sua execução, então é possível associar autor, coleta, ordem e retornos do provedor.

### RNF-MVP-009 — Segurança das integrações

**Situação:** detalhamento técnico para validação. **Origem:** RNF015 e RNF017 antigos.

Proteger chaves, limitar permissões e autenticar retornos financeiros conforme o provedor. Não expor credenciais de serviços nos scanners, páginas públicas ou vídeos. Distinguir API de catálogo, consulta de nota, mapa, pagamento e mensagens; falha de uma não deve produzir sucesso fictício em outra.

**Verificação:** revisar configuração, acessos e retornos inválidos. **BDD:** dado retorno de pagamento sem autenticidade válida, quando é recebido, então não altera a ordem para paga.

### RNF-MVP-010 — Segurança e desempenho de mídias

**Situação:** imagem/vídeo confirmado; limites pendentes. **Origem:** RF028 antigo e S7.

Validar arquivo, tipo e limites no serviço, controlar permissão de envio e evitar execução de conteúdo arbitrário. A descrição da oferta não deve depender exclusivamente do vídeo. Estratégia de carregamento e armazenamento precisa considerar dispositivos móveis e a diferença entre imagem e vídeo.

**Verificação:** upload válido, tipo incompatível, limite excedido e envio interrompido. **BDD:** dado arquivo fora das políticas aprovadas, quando é enviado, então não é publicado como mídia válida.

### RNF-MVP-011 — Padronização e entrega técnica

**Situação:** herdado para revisão da equipe. **Origem:** RNF002, RNF009, RNF012 e RNF013 antigos.

Manter critérios comuns de revisão, qualidade e implantação para a equipe de seis pessoas. Documentar configuração dos ambientes e executar verificações básicas antes da entrega. IaC, gestão de segredos, pipeline e identidade visual devem ser reconciliados com o MVP existente. Terraform, Cloud Run, ECS, ferramentas de autenticação e componentes de UI citados antes são referências, não uma migração autorizada.

**Verificação:** demonstrar procedimento reproduzível de entrega e configuração, com validações pertinentes. **BDD:** dado uma alteração aprovada, quando passa pelo processo definido, então há evidência de verificação e identificação da versão entregue.

### RNF-MVP-012 — Evolução e capacidade

**Situação:** proposta para validação. **Origem:** RNF003 e RNF011 antigos.

Documentar limites do MVP e pontos de extensão para novos materiais, pontuação definitiva e cashback sem implementar antecipadamente esses comportamentos. Dimensionamento, simultaneidade e volume esperado precisam de PD-025. Evitar pressupor que sistemas distribuídos, sharding ou integrações genéricas sejam necessários.

**Verificação:** revisar separação das responsabilidades de cadastro, descarte, pontuação, coleta, pagamentos e planos. **BDD:** dado mudança futura da pontuação, quando é especificada, então a regra provisória e seu histórico são identificáveis sem reinterpretar silenciosamente lançamentos anteriores.
