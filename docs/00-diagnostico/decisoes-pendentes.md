# Decisões: o que está em aberto e o que já foi decidido

> **Estado:** revisão · **Dono:** Produto · **Atualizado em:** 13/11/2026
> **Fontes:** [27 decisões PD-001 a PD-027](../01-planejamento/decisoes/README.md), regras de 21 e 22/10, revisões de 11, 12 e 13/11/2026.
> **Para quê:** é o **único lugar** onde as decisões em aberto ficam listadas. Os demais documentos trazem só o que já está decidido.

## Resumo

As decisões que travavam a documentação foram tomadas em 11, 12 e 13/11/2026 (seção 3). Restam **17 decisões do produto** (seção 1) e **verificações da equipe técnica** (seção 2). Numeração: **PD-xxx** é o identificador oficial da V6.

## 1. Em aberto: dependem do Vinicius e do produto

| # | Tema | Pergunta | Ref. | Enquanto isso |
|---|---|---|---|---|
| 1 | Janela de 60 min | Ela agrupa o **descarte** ou só o **crédito**? Quem confirma: o grupo ou cada envio? | [PD-010](../01-planejamento/decisoes/pd-010.md) | Sem valor; precisa de resposta antes da onda 1 |
| 2 | Cadastro aberto | Qual proteção contra robôs entra já (limite de tentativas, captcha)? | [controle de acesso](../pesquisa/controle-de-acesso.md) | Sem proteção |
| 3 | Cadastro aberto | Filtrar quem pode se cadastrar (por exemplo, domínio de e-mail ou ponto)? | idem | Sem filtro |
| 4 | Saldos antigos | Reconciliar os saldos creditados em dobro ou zerar e recalcular? Há usuários reais no banco? | [ADR-0001](../02-arquitetura/adr/0001-livro-unico-de-pontos.md) | Depende de conferir o banco |
| 5 | Loja | As faixas de recompensa mudam, agora que o ponto vale 10 por descarte? | [PD-010](../01-planejamento/decisoes/pd-010.md) | Manter as atuais |
| 6 | Piloto | A escala de 100 usuários muda diante do teto de 500 ou 1000? Quais são a região, os 3 pontos e a cooperativa? | [Visão](../01-planejamento/visao-e-escopo.md) | 100 usuários, 3 pontos, 1 cooperativa, 8 semanas |
| 7 | Pagamento | Valor por kg de PET e de lata | [PD-015](../01-planejamento/decisoes/pd-015.md) | Sem valor |
| 8 | Pagamento | Pagar por coleta ou por lote (por exemplo, mensal)? Quando a API entra? Quem é o dono da conta no provedor? | [PD-016](../01-planejamento/decisoes/pd-016.md) | Manual, por coleta |
| 9 | Pontos de coleta | Capacidade de cada ponto do piloto (medir o coletor), horários, tags e quem recebe o alerta | [PD-009](../01-planejamento/decisoes/pd-009.md) | Horários por dia; lista fixa de tags; alerta ao admin e ao responsável |
| 10 | Coleta | O lançamento direto da cooperativa (sem pedido) continua? Marcar a origem? | [PD-014](../01-planejamento/decisoes/pd-014.md) | Manter, marcando a origem |
| 11 | Ajuste manual | O admin precisa de limite de valor por ajuste? | [PD-010](../01-planejamento/decisoes/pd-010.md) | Sem limite; o saldo não fica negativo |
| 12 | Sorteios | Dono do parecer jurídico (Lei 5.768/1971) e algoritmo do sorteio | [PD-013](../01-planejamento/decisoes/pd-013.md) | Só sorteios de teste; `sha256` com semente registrada |
| 13 | Documentação | Donos por documento (nomes de Produto, Tecnologia e QA); responsáveis, datas e capacidade do time para o backlog | [governança](../08-manutencao/governanca-da-documentacao.md) | Donos pelos papéis |
| 14 | Qualidade e operação | Metas de desempenho, disponibilidade, RPO e RTO | [PD-025](../01-planejamento/decisoes/pd-025.md), [PD-026](../01-planejamento/decisoes/pd-026.md) | RPO 24 h e RTO 4 h do DLR antigo, a validar |
| 15 | Design | Azul da marca (código `#1A2C71`, documentação `#1F4E79` ou logo `#00206E`), verde (contraste de texto), logo (a oficial do Drive ou a do app), menu da cooperativa (plano ou agrupado) e avisos "sujeito a decisão" (manter ou esconder na apresentação) | [protótipo](../03-ux/prototipo-figcraft.md) | Valores do protótipo atual; quadros de comparação na página "Para decidir" |
| 16 | Descartes | O administrador também aprova ou rejeita descartes, além do operador do ponto? | [PD-006](../01-planejamento/decisoes/pd-006.md) | O protótipo mantém "Aprovar" e "Rejeitar" na visão do administrador |
| 17 | Teto de contas | Existe um limite máximo para o teto (por exemplo, 1000) ou o administrador pode digitar qualquer valor? | [controle de acesso](../pesquisa/controle-de-acesso.md) | O campo aceita qualquer valor |

### Seguem com valor provisório

| Tema | Valor provisório | Ref. |
|---|---|---|
| GPS: precisão e idade da posição | 60 m e 30 s | [PD-008](../01-planejamento/decisoes/pd-008.md) |
| Limite diário de descartes | 200 unidades por dia, a medir no piloto | [PD-010](../01-planejamento/decisoes/pd-010.md) |
| Recuperação de senha | Por e-mail (canal por escolher: [PD-021](../01-planejamento/decisoes/pd-021.md)) | [PD-003](../01-planejamento/decisoes/pd-003.md) |
| Excluir conta (LGPD) | Anonimizar, não apagar | [PD-022](../01-planejamento/decisoes/pd-022.md) |
| Planos de dados | Plano único "piloto" | [PD-019](../01-planejamento/decisoes/pd-019.md) |
| Cancelar voucher | Sem cancelamento no piloto | [PD-012](../01-planejamento/decisoes/pd-012.md) |
| Sessões e acúmulo de perfis | Em aberto, sem bloquear o piloto | [PD-023](../01-planejamento/decisoes/pd-023.md) |

## 2. Dependem da equipe técnica

Não são decisões do produto: são verificações ou tarefas.

| Tema | O que fazer |
|---|---|
| Nota fiscal | Pedir a **cotação por escrito** à Infosimples para a SEFAZ-AM; testar a leitura direta do portal **uma vez, a partir da Vercel**; testar 10 notas reais |
| Código de barras | Testar 50 códigos em duas fontes e o leitor de câmera nos celulares do piloto; montar a lista dos produtos mais vendidos para o cache |
| Vercel | Conferir se o plano gratuito serve (uso não comercial) e como rodar as tarefas agendadas |
| Banco | Confirmar se `residuum-dev` é o de produção; definir o backup (a Neon guarda 6 horas) |
| Testes | Montar o teste de concorrência de vagas e saldo no CI, em PostgreSQL |
| Infraestrutura | Topologia real, homologação, observabilidade e política de segredos ([SAD](../02-arquitetura/sad.md)) |
| Código | Aplicar as regras de 11, 12 e 13/11; remover pedido público de ponto e `/painel-testes`; remover tabelas sem uso |
| Verificar | Terraform, criptografia de dados pessoais e backups, que o Backlog v2 do Drive dá como feitos; número de pontos de entrega da Semulsp (25, 44 ou 49) |

## 3. Já decidido (registro)

### Pontos, descarte e campanhas

| Decisão | Data |
|---|---|
| **10 pontos por descarte concluído**, por operação ([PD-010](../01-planejamento/decisoes/pd-010.md)) | 11/11 |
| Descartes do mesmo usuário no mesmo ponto em **60 min** contam como um | 11/11 |
| **Operador do ponto confirma** ([PD-006](../01-planejamento/decisoes/pd-006.md)); a confirmação é **final**, sem estorno | 11/11 |
| Erro vira **ajuste manual do admin**, com motivo; o saldo **não** fica negativo (D-CT-01) | 11 e 12/11 |
| Dobro de pontos: meta de N descartes, bônus de **10 × N**, pelo botão "Receber pontos"; bônus não recebido até o fim da campanha **se perde** (D-CT-10) | 11 e 12/11 |
| Campanhas só com **PET e lata** no início | 11/11 |
| Sorteios **só de teste**; 1 bilhete por usuário; cancelar **devolve** os pontos | 11/11 |
| Cashback é ideia futura, fora do MVP | 11/11 |

### Conta e acesso

| Decisão | Data |
|---|---|
| Cadastro **aberto, sem código de acesso**; o código individual foi descartado | 12/11 |
| **Teto de 500 contas**, configurável, pode subir a **1000**, com trava de vagas no banco | 11 e 12/11 |
| Conta excluída **devolve a vaga**; o mesmo e-mail só se recadastra após **30 dias** (D-CT-03); sem vagas, aviso e lista de espera | 11 e 12/11 |
| "Morador" passa a "usuário" | 11/11 |

### Cadastro de resíduos

| Decisão | Data |
|---|---|
| Código de barras e QR da nota **dentro do MVP**; tentativas sem limite, aviso vermelho a cada falha, **manual recomendado a partir da 2ª** | 11/11 |
| Campos do manual: material e quantidade inteira obrigatórios; nome opcional (D-CT-11) | 12/11 |
| Material: **sugestão automática + confirmação do usuário sempre** | 11/11 |
| Nota fiscal: consulta paga (Infosimples) com **teto mensal**; se estourar, o usuário informa os **itens à mão** | 13/11 |
| Cada nota é guardada pela **chave de 44 dígitos única**: não é importada nem paga duas vezes | 13/11 |
| Cache de produtos **pré-carregado** com os mais vendidos e crescendo com o uso | 13/11 |

### Pontos de coleta e coleta

| Decisão | Data |
|---|---|
| **Só o admin** cria ponto; vínculo **N:N** com os responsáveis, gerido pelo admin ([PD-023](../01-planejamento/decisoes/pd-023.md)) | 11/11 |
| GPS: **100 m** por padrão, ajustável por ponto; QR Code fora do MVP ([PD-008](../01-planejamento/decisoes/pd-008.md)) | 11/11 |
| Ponto cheio **bloqueia** e o app sugere outro; capacidade em **unidades por material**; alerta aos **80%** (D-CT-05, D-CT-06) | 11 e 12/11 |
| Ponto temporário que encerra fica **inativo**, com histórico (D-CT-07) | 12/11 |
| Coleta **parcial**; estado **"a caminho"**; **admin e cooperativa** cancelam, com motivo | 11/11 |
| Aceite em **48 h**, sem resposta **expira** e volta ao admin; a cooperativa reagenda **uma vez** (D-CT-08, D-CT-09) | 12/11 |

### Pagamento e piloto

| Decisão | Data |
|---|---|
| A **Residuum** paga a cooperativa **por kg e material** | 11/11 |
| **Manual com comprovante** no piloto; **API depois** | 11/11 |
| Comprovante em armazenamento de objetos **privado** (Cloudflare R2) atrás de uma interface única | 13/11 |
| Metas do piloto aprovadas: 100 usuários, 3 pontos, 1 cooperativa, 8 semanas | 11/11 |

### Tecnologia

| Decisão | Data |
|---|---|
| As **5 ADRs** aceitas (livro de pontos, vínculo, idempotência, estados, ciclo da conta) | 11/11 |
| Produção: **API na Vercel**, **PostgreSQL na Neon**; `/painel-testes` sai da produção; branches em `feature/` | 11/11 |
| Testes: **Vitest** no front; PostgreSQL de teste em **Docker + CI**, sem tocar na Neon | 11/11 |
| A API usa o endereço **pooler** da Neon com `NullPool`; as migrações usam o endereço **direto** | 13/11 |
| Teste de concorrência de vagas e saldo no CI | 13/11 |
| O CI roda os testes **antes** de migrar e publicar | 13/11 |
| Fila do operador atualiza a cada **20 s**, só com a aba visível | 13/11 |
| Dados de Manaus: usar o último dado publicado (SINISA 2024) | 11/11 |

## 4. Contradições entre fontes

Lista completa no [PRD](../01-planejamento/prd-srs.md#contradições-entre-as-fontes-e-como-foram-resolvidas). Todas estão resolvidas na documentação; o **código** ainda diverge (paga 5 pontos por unidade e credita duas vezes).
