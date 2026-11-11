# M01 — Acesso, usuários e convites

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 212 a 358) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-001 — Gerenciar convites individuais

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** administrador.  
**Objetivo:** autorizar um único novo cadastro por link individual.

**Pré-condições e entrada:** administrador autenticado e autorizado; modalidade individual selecionada. Prazo e vinculação ao destinatário dependem de PD-001.

**Fluxo:** administrador gera o convite; o sistema cria um link com identificação não previsível; apresenta seu estado e disponibiliza o link para distribuição pelo administrador; o destinatário acessa o cadastro; após cadastro bem-sucedido, o convite é consumido uma única vez.

**Resultado e exceções:** cadastro falho não consome o convite. Link inexistente, expirado quando houver prazo, ou consumido não autoriza novo cadastro. Duas confirmações simultâneas não podem produzir dois usuários com o mesmo convite.

**Dependências:** RF-MVP-003 e RNF-MVP-003. **Pendências:** PD-001, PD-002.

**Critérios de aceite:**

- **Dado** um convite individual válido, **quando** um cadastro é concluído, **então** o sistema cria um usuário e marca o convite como utilizado.
- **Dado** o mesmo convite usado em duas confirmações simultâneas, **quando** ambas forem processadas, **então** somente um cadastro poderá consumir esse convite.
- **Dado** um link inválido ou já consumido, **quando** alguém tentar cadastrar-se, **então** o sistema informa o impedimento sem criar usuário.

#### RF-MVP-002 — Gerenciar convites compartilhados

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** administrador.  
**Objetivo:** controlar entrada de um grupo por um link com expiração e número máximo de cadastros.

**Pré-condições e entrada:** administrador autorizado; quantidade limite positiva e instante de expiração informados. Fuso e limites permitidos serão definidos em PD-001.

**Fluxo:** gerar link; acompanhar limite, cadastros concluídos e validade; permitir novas inscrições enquanto o convite estiver vigente e houver vagas; incrementar o consumo somente ao concluir cada cadastro.

**Resultado e exceções:** atingir o limite ou a expiração bloqueia novos cadastros. Atualização do contador e criação do usuário devem ser consistentes, inclusive na última vaga. Não se presume renovação automática.

**Dependências:** RF-MVP-003 e RNF-MVP-003. **Pendências:** PD-001, PD-002.

**Critérios de aceite:**

- **Dado** um link vigente com vagas, **quando** um cadastro é concluído, **então** o contador aumenta em uma unidade.
- **Dado** um link expirado ou esgotado, **quando** houver tentativa de cadastro, **então** a inscrição não é concluída.
- **Dado** apenas uma vaga restante e duas confirmações concorrentes, **quando** forem processadas, **então** no máximo uma nova conta será criada por esse link.

#### RF-MVP-003 — Cadastrar morador por convite

**Situação:** confirmado com pendências. **Fontes:** S4/RF001 e S7. **Ator:** pessoa convidada.  
**Objetivo:** criar acesso do morador sem permitir cadastro público irrestrito.

**Pré-condições:** convite individual ou compartilhado válido. **Dados herdados:** nome, e-mail, telefone e endereço; obrigatoriedade, CPF e senha aguardam PD-003.

**Fluxo:** abrir o link; verificar disponibilidade do convite; preencher e revisar os dados; apresentar informações de privacidade aplicáveis; validar entradas; criar conta e consumir o convite na mesma conclusão lógica.

**Exceções:** campos inválidos, e-mail já cadastrado e falha de gravação não devem consumir vaga nem duplicar a conta. A política de verificação de e-mail precisa de validação.

**Dependências:** RF-MVP-001, RF-MVP-002 e RF-MVP-005. **Pendências:** PD-001 a PD-003 e PD-022.

**Critérios de aceite:**

- **Dado** um convite válido e dados aceitos, **quando** o morador conclui o formulário, **então** a conta é criada vinculada ao consumo do convite.
- **Dado** uma tentativa sem convite autorizado, **quando** o formulário é enviado, **então** o sistema impede a criação da conta.
- **Dado** uma falha de validação, **quando** o cadastro não termina, **então** o convite mantém sua disponibilidade anterior.

#### RF-MVP-004 — Cadastrar morador pela administração

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** administrador.  
**Objetivo:** permitir criação administrativa de moradores com rastreabilidade.

**Pré-condições:** administrador autorizado. **Entrada:** dados do morador conforme RF-MVP-003.

**Fluxo:** abrir cadastro administrativo; informar dados; validar duplicidade; criar o registro; registrar quem realizou a operação. Forma de ativação, entrega de acesso e eventual uso de convites nesse caminho são PD-002 e PD-003.

**Resultado:** morador cadastrado; sua criação não equivale a consentimento do titular, entrega de credenciais ou login realizado. Não se presume atuação do administrador em descartes do morador.

**Dependências:** RF-MVP-003 e RNF-MVP-002. **Pendências:** PD-002, PD-003 e PD-022.

**Critérios de aceite:**

- **Dado** um administrador autorizado, **quando** cria um morador com dados válidos, **então** o cadastro fica disponível e a autoria é registrada.
- **Dado** um perfil sem essa permissão, **quando** tenta a operação, **então** a criação é negada.
- **Dado** um e-mail já utilizado, **quando** o cadastro é enviado, **então** o sistema informa o conflito sem criar conta duplicada.

#### RF-MVP-005 — Autenticar e encerrar sessão

**Situação:** herdado para validação. **Fonte:** S4/RF002. **Atores:** usuários com acesso habilitado.

**Objetivo e fluxo:** permitir login com e-mail e senha, validar a conta, abrir a área correspondente ao perfil e encerrar a sessão quando solicitado. Biblioteca de autenticação não é fixada por este documento.

**Pré-condições:** conta habilitada. **Exceções:** credenciais incorretas, acesso desabilitado e sessão expirada impedem ações protegidas. Uso do convite habilita cadastro, não é uma credencial de login permanente.

**Resultado:** acesso de acordo com perfil e vínculos. Tempo de sessão, múltiplos perfis e situação das contas existentes são PD-002 e PD-023.

**Dependências:** RNF-MVP-002.

**Critérios de aceite:**

- **Dado** credenciais válidas e conta habilitada, **quando** o usuário faz login, **então** acessa sua área autorizada.
- **Dado** uma sessão encerrada, **quando** se tenta executar uma ação protegida, **então** nova autenticação é exigida.
- **Dado** um morador autenticado, **quando** tenta funções administrativas, **então** o acesso é negado também no serviço que processa a operação.

#### RF-MVP-006 — Recuperar acesso

**Situação:** herdado para validação. **Fonte:** S4/RF002. **Ator:** titular da conta.

**Objetivo e fluxo:** solicitar recuperação de senha, receber instruções pelo canal validado, apresentar token de recuperação, cadastrar nova senha e invalidar o token após uso.

**Pré-condições:** mecanismo de recuperação disponível. **Exceções:** token inválido, expirado ou já utilizado não altera a senha; mensagens de solicitação não devem revelar se uma pessoa está cadastrada.

**Dados e resultado:** identificador da conta, solicitação e confirmação; credenciais recuperadas sem expor senha anterior. Canal, prazo e política de senha dependem de PD-003.

**Dependências:** RF-MVP-005 e RNF-MVP-002.

**Critérios de aceite:**

- **Dado** um token válido, **quando** o titular confirma uma senha aceita, **então** poderá autenticar-se com a nova senha.
- **Dado** um token usado ou inválido, **quando** houver nova tentativa, **então** a senha permanece inalterada.

#### RF-MVP-007 — Consultar e editar perfil

**Situação:** herdado para validação. **Fonte:** S4/RF006. **Ator:** morador.

**Objetivo:** reunir dados pessoais, histórico de descartes, saldo e recompensas adquiridas.

**Pré-condições:** morador autenticado. **Fluxo:** consultar seus dados; editar campos permitidos; visualizar descartes concluídos, pontuação e recompensas; acessar extrato e estoque. Alterar e-mail ou identificadores exige política ainda a validar.

**Exceções e resultado:** usuário não pode editar registros de descarte ou saldo por esse formulário. Alteração falha não deve substituir os dados válidos anteriores. Não é permitido consultar o perfil privado de outro morador.

**Dependências:** RF-MVP-005, RF-MVP-020, RF-MVP-023 e RF-MVP-029. **Pendência:** PD-003.

**Critérios de aceite:**

- **Dado** um morador autenticado, **quando** consulta o perfil, **então** vê seus dados, saldo e históricos disponíveis.
- **Dado** uma alteração válida em campo permitido, **quando** a salva, **então** o perfil apresenta o novo valor sem alterar pontos ou descartes.

#### RF-MVP-008 — Administrar acessos e vínculos

**Situação:** confirmado com pendências. **Fontes:** S4/RF025 e S7. **Ator:** administrador.

**Objetivo:** associar acessos aos pontos e cooperativas e gerir habilitação das contas.

**Pré-condições:** administrador autorizado. **Fluxo:** localizar ou criar acesso operacional conforme política aprovada; associar responsável ao ponto ou operador à cooperativa; habilitar/desabilitar acesso; manter histórico de alterações.

**Exceções:** um vínculo não autoriza acesso a todos os pontos da rede. Exclusão física de contas e acúmulo de papéis não são definidos. O cadastro da organização não deve produzir uma senha compartilhada entre todos os operadores.

**Dependências:** RF-MVP-031, RF-MVP-038 e RNF-MVP-002. **Pendências:** PD-002, PD-023.

**Critérios de aceite:**

- **Dado** um responsável vinculado a um ponto, **quando** acessa o painel, **então** atua apenas nos pontos autorizados.
- **Dado** um acesso desabilitado, **quando** tenta ação operacional, **então** a operação é negada.
