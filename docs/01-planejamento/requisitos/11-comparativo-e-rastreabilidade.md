# 11. Comparativo e rastreabilidade

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1503 a 1590) em 10/11/2026. Corrija aqui, não na origem.


### 11.1 Comparação das fontes

| Fonte | Contribuição | Divergência ou limite | Tratamento na V6 |
|---|---|---|---|
| Projeto original | Cadeia, estoque, incentivos e dados B2B | Promete rastreabilidade final e certificados sem detalhar evidências | Manter finalidade; não declarar validade regulatória |
| V4 | 30 RF e 17 RNF | QR adiado para V1, mas riscos exigem fallback pronto; mistura requisitos e stack | Separar comportamento e tecnologia; considerar alterações da conversa |
| V5 | GPS exclusivo e resiliência prioritária | Ainda contém scanner “1D/QR” e exceção manual retroativa | Separar leitura de nota de QR de presença; exceção de presença não aprovada |
| Backlog v2 | Prioridades e entregas declaradas | Itens entregues e pendentes ao mesmo tempo; códigos usados para funções diferentes | Não importar status como evidência; criar identificadores próprios |
| Tasks/OKR | Metas e decomposição técnica | QR obrigatório; crédito no descarte e após pesagem; débito de estoque do ponto em trecho de descarte; V1 dentro do prazo MVP | Reconciliar com decisões; crédito básico no descarte e entrada no ponto |
| Conversa | Ajustes concretos de escopo e fluxos | Alguns detalhes de negócio deliberadamente abertos | Autoridade principal; pendências ligadas aos requisitos |

### 11.2 Correspondência dos 30 RF anteriores

| Código antigo | Conteúdo anterior | Tratamento na V6 | Requisitos correspondentes |
|---|---|---|---|
| RF001 | Cadastro PF | Mantido com convites e cadastro administrativo | RF-MVP-001 a RF-MVP-004 |
| RF002 | Login e recuperação | Mantido para validação dos detalhes | RF-MVP-005, RF-MVP-006 |
| RF003 | Solicitação de ponto CPF | Substituída por cadastro administrativo | RF-MVP-008, RF-MVP-031 |
| RF004 | Solicitação de ponto CNPJ | Substituída; documentos do ponto a definir | RF-MVP-031 |
| RF005 | Aprovação de pontos solicitados | Fila pública retirada; controle administrativo mantido | RF-MVP-031 |
| RF006 | Perfil, histórico e pontos | Detalhado e separado em capacidades | RF-MVP-007, RF-MVP-020, RF-MVP-023 |
| RF007 | Mapa com filtros | Mantido; Google citado na conversa para mapas/rotas, integração a detalhar | RF-MVP-015, RF-MVP-017, RF-MVP-041 |
| RF008 | Detalhes do ponto | Mantido com contexto e duração | RF-MVP-016 |
| RF009 | Ponto temporário V1 | Reintroduzido no MVP | RF-MVP-032 |
| RF010 | Scanner do produto | Mantido; consulta e revisão explicitadas | RF-MVP-010, RF-MVP-013 |
| RF011 | Presença GPS | Mantido; parâmetros a validar | RF-MVP-018 |
| RF012 | Transferência/estoques | Esclarecida: baixa pessoal, entrada no ponto, crédito básico único | RF-MVP-019 |
| RF013 | QR de presença | Fora do escopo atual; possibilidade futura com equipe | PD-027 |
| RF014 | Pontuação após pesagem | Substituída por 10 pontos no descarte e bônus de campanha | RF-MVP-021, RF-MVP-022 |
| RF015 | Sorteio MVP, voucher V1 | Ambos no MVP; regras detalhadas pendentes | RF-MVP-025, RF-MVP-029, RF-MVP-030 |
| RF016 | Extrato V1 | Incluído para explicar uso dos pontos no MVP | RF-MVP-023 |
| RF017 | Ranking futuro | A decidir com equipe; não compromisso de entrega | PD-027 |
| RF018 | Painel do ponto | Mantido com distinção de unidades | RF-MVP-035 |
| RF019 | Alerta automático para cooperativa | Alterado para sinalização ao administrador/responsável e encaminhamento manual | RF-MVP-036, RF-MVP-037, RF-MVP-039 |
| RF020 | Gestão de horários V1 | Informação de funcionamento incorporada; permissões a validar | RF-MVP-033 |
| RF021 | Mapa da cooperativa | Expandido para solicitações, aceite e rota planejada | RF-MVP-040 a RF-MVP-042 |
| RF022 | Pesagem que distribui pontos | Mantido registro por material; removida dependência da recompensa básica | RF-MVP-043 |
| RF023 | CSV/PDF de coleta | Consulta de relatórios confirmada; arquivos/certificados não aprovados | RF-MVP-049 e PD-019/PD-027 |
| RF024 | Dashboard administrativo | Mantido e detalhado | RF-MVP-047, RF-MVP-048 |
| RF025 | CRUD de usuários/pontos | Mantido com cooperativas, vínculos e convites | RF-MVP-004, RF-MVP-008, RF-MVP-031, RF-MVP-038 |
| RF026 | Campanhas V1 com gate de parceiro | Incluído no MVP; gate não herdado automaticamente | RF-MVP-027, RF-MVP-028 |
| RF027 | Exportação de dados | Reorientada para relatórios/dados por plano; download pendente | RF-MVP-049 a RF-MVP-052 |
| RF028 | Upload de mídia | Mantido e ampliado a vídeo; limites a redefinir | RF-MVP-053 |
| RF029 | Relatórios assíncronos futuros | Não incluídos como obrigação técnica | Arquitetura de relatórios a revisar após volume |
| RF030 | Auditoria/cold storage | Auditoria básica preservada; cold storage não incluído | RNF-MVP-008 |

### 11.3 Novas capacidades e esclarecimentos

| Capacidade | Motivo | Referências V6 |
|---|---|---|
| Convites individuais e compartilhados | Controle de entrada definido pelo usuário | RF-MVP-001, RF-MVP-002 |
| Importação de nota e entrada manual | Agilizar cadastro sem depender de cashback | RF-MVP-011 a RF-MVP-013 |
| Dois botões com tela compartilhada | Registrar para depois ou iniciar descarte imediatamente | RF-MVP-009, RF-MVP-014 |
| Home/Loja após confirmação | Continuidade da jornada | RF-MVP-020 |
| Metas e bônus de campanha | Incentivo por produto/quantidade | RF-MVP-022, RF-MVP-024, RF-MVP-028 |
| Pedido do ponto, encaminhamento e aceite | Responsabilidades operacionais esclarecidas | RF-MVP-037, RF-MVP-039, RF-MVP-040 |
| Pagamento por API pelo administrador | Remuneração da cooperativa | RF-MVP-044 a RF-MVP-046 |
| Planos também aplicados ao administrador | Decisão explícita sobre relatórios | RF-MVP-049 a RF-MVP-052 |
| Vídeo nas campanhas | Conteúdo de loja solicitado | RF-MVP-053 |

### 11.4 Correspondência dos 17 RNF anteriores

| Código antigo | Tema | Correspondência/tratamento |
|---|---|---|
| RNF001 | PWA | RNF-MVP-001; compatibilidade a demonstrar |
| RNF002 | Cloud | RNF-MVP-011; revisar ambiente existente sem impor provedor |
| RNF003 | Escalabilidade | RNF-MVP-012; capacidade a definir, recursos avançados futuros |
| RNF004 | Usabilidade | RNF-MVP-001 e RNF-MVP-006 |
| RNF005 | Segurança/LGPD | RNF-MVP-002 e RNF-MVP-005; privacidade sujeita a validação |
| RNF006 | Integridade | RNF-MVP-003 e RNF-MVP-008 |
| RNF007 | Sinal instável | RNF-MVP-004; GPS continua sem fallback de presença |
| RNF008 | Desempenho | RNF-MVP-006; não confundir Lighthouse com tempo de carga |
| RNF009 | Identidade visual | RNF-MVP-011; padronização a revisar com design |
| RNF010 | Disponibilidade | RNF-MVP-007; meta antiga não é garantia de provedor |
| RNF011 | Integrações futuras | RNF-MVP-012 e seção 9; abstrações genéricas não exigidas |
| RNF012 | IaC | RNF-MVP-011; prática herdada sujeita à revisão técnica |
| RNF013 | Pipeline | RNF-MVP-011; verificações básicas, SAST completo não assumido |
| RNF014 | Observabilidade | RNF-MVP-008; sem tracing distribuído obrigatório |
| RNF015 | Segredos | RNF-MVP-009; ferramenta a definir |
| RNF016 | Backups | RNF-MVP-007; restore a comprovar |
| RNF017 | Menor privilégio | RNF-MVP-002 e RNF-MVP-009 |

### 11.5 Verificação do MVP existente

A equipe deverá classificar cada requisito como: não avaliado, implementado conforme, implementado parcialmente, divergente ou ausente, com evidência de tela, execução ou código. Todas as capacidades desta V6 permanecem **não avaliadas quanto à implementação** até essa verificação. Não reaproveitar as marcações “Done” sem evidência.
