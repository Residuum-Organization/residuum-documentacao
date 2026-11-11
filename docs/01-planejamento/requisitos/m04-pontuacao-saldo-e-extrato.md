# M04 — Pontuação, saldo e extrato

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 576 a 665) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-021 — Creditar recompensa básica provisória

**Situação:** confirmado. **Fonte:** S7. **Ator:** plataforma, em benefício do usuário.

**Objetivo:** conceder 10 pontos por operação de descarte concluída enquanto o modelo definitivo não é elaborado.

**Pré-condições:** RF-MVP-019 concluído de forma consistente. **Fluxo:** registrar crédito de 10 pontos vinculado ao descarte e ao usuário; atualizar saldo; tornar o lançamento consultável. Dez pontos são por descarte, não por embalagem, produto, kg, scanner ou nota fiscal.

**Exceções e resultado:** não creditar no cadastro, início de rota, chegada sem confirmação ou pesagem da cooperativa. Repetições devem recuperar o resultado anterior. Quantidades e materiais não alteram os 10 pontos básicos da regra provisória.

**Dependências:** RF-MVP-019 e RF-MVP-023. **Pendência:** PD-010 para regra definitiva e prevenção de fracionamento abusivo.

**Critérios de aceite:**

- **Dado** um descarte válido contendo vários itens, **quando** é concluído, **então** recebe um crédito básico de 10 pontos.
- **Dado** uma pesagem da cooperativa sobre materiais já entregues, **quando** é registrada, **então** nenhum novo crédito básico é gerado para os usuários.
- **Dado** confirmação repetida, **quando** é processada, **então** o saldo não aumenta novamente.

#### RF-MVP-022 — Aplicar bônus de campanha

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** plataforma, conforme campanha do administrador.

**Objetivo:** conceder pontos adicionais por produto elegível ou meta de descarte.

**Pré-condições:** campanha publicada, regra aprovada e eventos elegíveis registrados. **Fluxo:** verificar participação e condições; apurar produto, quantidade ou meta configurados; registrar bônus separado do crédito básico; atualizar o saldo e indicar a campanha de origem.

**Exceções:** não presumir que a compra gera bônus nem que campanhas se acumulam. Eventos manuais podem não comprovar um produto específico. Elegibilidade, janela de apuração, repetição, limites e evidência do produto são PD-011.

**Dependências:** RF-MVP-019, RF-MVP-023, RF-MVP-024 e RF-MVP-028.

**Critérios de aceite:**

- **Dado** regra validada de bônus por descarte elegível, **quando** a condição é cumprida, **então** o bônus é registrado com a campanha e o evento que o originaram.
- **Dado** uma campanha não elegível, **quando** um descarte é concluído, **então** os 10 pontos básicos permanecem sem bônus indevido.
- **Dado** um bônus já processado para o mesmo evento e regra, **quando** o processamento é repetido, **então** não há duplicação.

#### RF-MVP-023 — Consultar saldo e extrato de pontos

**Situação:** confirmado por consolidação. **Fontes:** S4/RF006, RF016 e S7. **Ator:** usuário.

**Objetivo:** explicar como o saldo foi formado e utilizado.

**Pré-condições:** usuário autenticado. **Fluxo:** mostrar saldo disponível e lançamentos, com data, natureza crédito/débito, quantidade, descrição e origem; distinguir crédito básico, bônus, voucher e participação paga, quando aplicável; permitir consultar o vínculo da operação.

**Exceções e resultado:** extrato de outra pessoa não é acessível. Consulta falha não deve ser confundida com saldo zero. Expiração, ajustes administrativos e estornos ainda exigem regras aprovadas em PD-010 e PD-012.

**Dependências:** RF-MVP-021, RF-MVP-022, RF-MVP-029 e RF-MVP-030.

**Critérios de aceite:**

- **Dado** crédito de 10 pontos e débito aprovado de 4, **quando** consulta o extrato, **então** encontra os dois lançamentos e saldo de 6, na ausência de outros movimentos.
- **Dado** um bônus de campanha, **quando** consulta o lançamento, **então** identifica sua origem separadamente da recompensa básica.

#### RF-MVP-024 — Apurar metas de descarte das campanhas

**Situação:** confirmado com pendências. **Fonte:** S7. **Ator:** usuário e plataforma.

**Objetivo:** indicar o progresso em campanhas que exigem descarte de determinada quantidade ou produto.

**Pré-condições:** campanha com meta validada. **Fluxo:** considerar eventos elegíveis segundo a regra publicada; atualizar progresso; apresentar quantidade atingida, meta e condição restante; sinalizar cumprimento sem antecipar prêmio não confirmado.

**Exceções:** registro no estoque não conta como descarte. Não deduzir compra ou entrega a partir da leitura de código. Definir o que comprova o produto específico e se descartes anteriores à adesão contam em PD-011.

**Dependências:** RF-MVP-019, RF-MVP-027 e RF-MVP-028.

**Critérios de aceite:**

- **Dado** campanha com meta de cinco unidades e dois descartes elegíveis somando três, **quando** o progresso é apurado, **então** apresenta três de cinco.
- **Dado** apenas itens cadastrados no estoque, **quando** a meta é consultada, **então** eles não são tratados como unidades já descartadas.

#### RF-MVP-025 — Debitar pontos com consistência

**Situação:** confirmado por dependência das recompensas. **Fonte:** S7. **Ator:** plataforma, após ação do usuário.

**Objetivo:** cobrar os pontos definidos sem permitir saldo negativo ou compra duplicada.

**Pré-condições:** recompensa/participação válida, custo aprovado e saldo suficiente. **Fluxo:** apresentar custo; obter confirmação; verificar saldo atual e disponibilidade; registrar débito vinculado ao benefício adquirido; atualizar saldo e disponibilizar resultado.

**Exceções:** saldo insuficiente ou oferta indisponível não gera débito. Duas compras simultâneas devem respeitar saldo e limite. Não se presume pagamento complementar em dinheiro ou conversão monetária dos pontos.

**Dependências:** RF-MVP-029, RF-MVP-030 e RNF-MVP-003. **Pendência:** PD-012.

**Critérios de aceite:**

- **Dado** saldo insuficiente, **quando** o usuário confirma a compra, **então** não há débito nem aquisição.
- **Dado** confirmação reenviada da mesma operação, **quando** é processada, **então** não duplica débito ou benefício.
- **Dado** duas aquisições concorrentes sem saldo para ambas, **quando** são processadas, **então** o saldo permanece não negativo.
