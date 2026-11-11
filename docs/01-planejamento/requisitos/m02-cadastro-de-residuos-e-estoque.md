# M02 — Cadastro de resíduos e estoque

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 359 a 468) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-009 — Disponibilizar Registrar e Descarte rápido

**Situação:** confirmado. **Fonte:** S7. **Ator:** morador.

**Objetivo:** usar a mesma experiência de entrada com intenções distintas.

**Pré-condições:** login realizado. **Fluxo:** “Registrar” abre a entrada de resíduos e conclui com inclusão no estoque; “Descarte rápido” abre diretamente o scanner e, após revisão dos itens, segue para pontos de coleta. A tela permite alternar para nota fiscal e entrada manual.

**Exceções e resultado:** câmera negada não elimina a entrada manual. Cancelamento não conclui descarte nem concede pontos. A identificação da intenção deve ser preservada ao trocar a forma de cadastro.

**Dependências:** RF-MVP-010 a RF-MVP-015.

**Critérios de aceite:**

- **Dado** a ação Registrar, **quando** o cadastro é confirmado, **então** os itens ficam no estoque sem recompensa.
- **Dado** Descarte rápido, **quando** os itens são revisados e confirmados, **então** o usuário segue para escolha de ponto sem uma etapa obrigatória de navegação pelo estoque.

#### RF-MVP-010 — Identificar produto por código de barras

**Situação:** confirmado com pendências. **Fontes:** S4/RF010 e S7. **Ator:** morador.

**Objetivo:** reduzir preenchimento manual a partir do identificador da embalagem.

**Pré-condições:** câmera autorizada ou alternativa de entrada disponível. **Fluxo:** ler código do produto; consultar a fonte de produtos; apresentar nome e material quando identificável; permitir revisão e quantidade; confirmar conforme a intenção inicial.

**Exceções:** código ilegível, produto não encontrado e fonte indisponível permitem cadastro manual. Código de barras não comprova compra, consumo ou posse exclusiva da unidade física. A mesma leitura não pode multiplicar itens involuntariamente.

**Dependências:** RF-MVP-012, RF-MVP-013 e integração I01. **Pendência:** PD-004.

**Critérios de aceite:**

- **Dado** um código conhecido, **quando** a consulta termina, **então** o formulário é preenchido com os dados disponíveis para revisão.
- **Dado** um código desconhecido, **quando** não há identificação, **então** o morador pode informar nome, material e quantidade manualmente.

#### RF-MVP-011 — Importar itens de nota fiscal

**Situação:** confirmado com pendências. **Fontes:** S1 e S7. **Ator:** morador.

**Objetivo:** preencher rapidamente o cadastro a partir dos produtos de uma compra, inspirado na facilidade de uso do Méliuz, sem cashback financeiro no MVP.

**Pré-condições:** leitura da nota e fonte de consulta disponíveis. **Fluxo:** escanear o identificador da nota; buscar informações; apresentar os itens e quantidades disponíveis; identificar possíveis embalagens PET e lata; permitir selecionar, revisar, corrigir e confirmar somente os resíduos desejados.

**Exceções:** nota indisponível ou ilegível permite entrada manual. Nome comercial ou volume não garante identificação do material. Importação não descarta automaticamente nem concede pontos. Reimportação da nota deve ter comportamento definido em PD-005.

**Dependências:** RF-MVP-013, RF-MVP-014 e integração I02. **Pendências:** PD-004, PD-005, PD-022.

**Critérios de aceite:**

- **Dado** uma nota consultável com produtos identificados, **quando** a importação termina, **então** o formulário apresenta as informações recuperadas antes da confirmação.
- **Dado** material não identificado, **quando** o morador revisa, **então** pode escolher PET ou lata manualmente.
- **Dado** uma falha de consulta, **quando** o sistema informa o erro, **então** nenhuma recompensa é gerada e o cadastro manual permanece disponível.

#### RF-MVP-012 — Cadastrar resíduo manualmente

**Situação:** confirmado. **Fonte:** S7. **Ator:** morador.

**Objetivo:** permitir entrada sem depender do scanner ou da nota.

**Pré-condições:** morador autenticado na tela compartilhada. **Entrada:** nome do produto/resíduo, material PET ou lata de alumínio e quantidade de embalagens.

**Fluxo:** preencher campos; validar material e quantidade; revisar; adicionar os itens conforme Registrar ou Descarte rápido. Quantidade deve ser inteira e positiva para contagem de embalagens; peso é informado pela cooperativa em operação distinta.

**Exceções e resultado:** não aceitar quantidade zero/negativa ou material fora do escopo; informar o campo inválido sem perder os demais dados válidos.

**Dependências:** RF-MVP-009, RF-MVP-013 e RF-MVP-014.

**Critérios de aceite:**

- **Dado** nome, material aceito e quantidade válida, **quando** o cadastro é confirmado, **então** os itens são adicionados conforme a intenção da ação.
- **Dado** quantidade inválida, **quando** o morador tenta confirmar, **então** o sistema solicita correção e não adiciona os itens.

#### RF-MVP-013 — Revisar itens antes da inclusão

**Situação:** confirmado. **Fonte:** S7. **Ator:** morador.

**Objetivo:** evitar que informação incompleta da leitura seja tratada como confirmação do usuário.

**Pré-condições:** itens obtidos por scanner, nota ou formulário. **Fluxo:** apresentar nome, material e quantidade; permitir correção e seleção dos itens a incluir; confirmar explicitamente. Produtos fora dos dois materiais iniciais não devem ser classificados silenciosamente como PET ou lata.

**Resultado:** lista validada para estoque ou descarte rápido. Cancelar a revisão não conclui descarte. Características desconhecidas devem aparecer como informação a completar, não como resultado confirmado da consulta.

**Dependências:** RF-MVP-010 a RF-MVP-014.

**Critérios de aceite:**

- **Dado** uma importação com material desconhecido, **quando** o usuário tenta confirmar, **então** o material deve ser completado antes da inclusão.
- **Dado** uma lista revisada, **quando** a confirma, **então** somente os itens selecionados e suas quantidades revisadas são incluídos.

#### RF-MVP-014 — Manter estoque e selecionar quantidades

**Situação:** confirmado com proposta de persistência. **Fontes:** S1, S5 e S7. **Ator:** morador.

**Objetivo:** apresentar itens disponíveis e permitir seleção de parte ou de todo o estoque para descarte.

**Pré-condições:** itens confirmados. **Fluxo:** salvar entradas; listar nome, material e quantidade; selecionar itens e quantidades disponíveis; iniciar escolha de ponto. Identificação e quantidade não equivalem a peso medido.

**Decisão aprovada pelo solicitante em 10/10/2026:** Registrar salva os itens revisados no estoque sem gerar pontos. Descarte rápido mantém os itens somente como rascunho na memória do fluxo, sem gravação prévia no estoque. Cancelar, navegar para outra área, recarregar ou fechar a aba descarta o rascunho. A rota externa abre em outra aba e preserva ponto/itens; ao retornar, o GPS anterior é invalidado. Erros recuperáveis preservam os dados enquanto o usuário permanece no fluxo.

**Exceções:** impedir seleção superior à quantidade disponível; aceitar descarte parcial com baixa apenas das unidades escolhidas; permitir ajuste manual de unidades e remoção do registro ao zerar, sem recompensas; evitar gravação duplicada por repetição de confirmação. Ajustes e exclusões reais exigem autorização, controle de concorrência e contrato de backend.

**Dependências:** RF-MVP-015 e RF-MVP-019.

**Critérios de aceite:**

- **Dado** cinco latas disponíveis, **quando** o morador seleciona duas, **então** a sessão de descarte contém duas, sem baixar o estoque antes da entrega.
- **Dado** uma seleção maior que o saldo, **quando** tenta prosseguir, **então** o sistema impede a operação e informa a quantidade disponível.
- **Dado** apenas o registro de itens, **quando** o estoque é atualizado, **então** não há crédito de pontos.
