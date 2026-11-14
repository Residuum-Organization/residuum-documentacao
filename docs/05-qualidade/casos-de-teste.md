# Casos de teste

> **Estado:** revisão · **Dono:** QA · **Atualizado em:** 11/11/2026
> **Fontes:** critérios "Aceite + teste" das fichas F, F-, PON e ADM; decisões de 11/11 (ver [decisões pendentes](../00-diagnostico/decisoes-pendentes.md)).
> **Lacunas:** execução e evidência; dados de fixtures no código; converter as demais fichas (≈ 70 achados).

## Resumo

Molde único para todo caso: **ID · requisito · pré-condição · passos · resultado esperado · status**.
Status: ⬜ planejado · ✅ passou · ❌ falhou. Hoje **nenhum foi executado**.

**Aviso:** o código do backend ainda paga 5 pontos por unidade e não tem convite, vagas, "a caminho" nem coleta parcial. Quando os testes rodarem, muitos vão falhar **até as regras de 11/11 serem aplicadas**. Isso é o esperado: o caso descreve o comportamento **correto**, não o atual.

## Regras de 11/11 que os casos usam

| Regra | Valor |
|---|---|
| Pontos | **10 por descarte concluído**, não por unidade (PD-010) |
| Janela | Descartes do mesmo usuário no mesmo ponto em **60 min** contam como **um** |
| Confirmação | O **operador do ponto** confirma; é **final**, sem estorno |
| Correção | **Ajuste manual** do admin, com motivo obrigatório |
| Acesso | Cadastro **aberto, sem código**; teto de **500** contas (configurável, até 1000); lista de espera |
| GPS | **100 m** por padrão, ajustável por ponto |
| Materiais | Só **PET e lata** |

## Decisões tomadas para fechar os casos

> Decisões **aprovadas pelo Vinicius em 11/11/2026** para fechar os casos. Ainda falta registrá-las nos requisitos.

| Ref. | Pendência | Decisão | Por quê | Caso |
|---|---|---|---|---|
| D-CT-01 | Ajuste manual pode deixar saldo negativo? | **Não.** Recusa com 409 `saldo_insuficiente` | O saldo nunca fica negativo; é a invariante do caderno de pontos | CT-ADM-05 |
| D-CT-02 | ~~Validade do código individual~~ | **Cancelada em 12/11/2026:** não há mais código de acesso | O cadastro é aberto | — |
| D-CT-03 | Abuso da vaga devolvida | A vaga volta na hora, mas o **mesmo e-mail só se recadastra após 30 dias** | Impede apagar e recriar a conta para repetir bônus de cadastro | CT-ACE-05 |
| D-CT-04 | ~~Quem já tem conta precisa de código?~~ | **Cancelada em 12/11/2026:** não há mais código de acesso | O cadastro é aberto | — |
| D-CT-05 | Unidade da capacidade do ponto (PD-009) | **Unidades por material** (latas e PET separados) | Casa com o caso que já existia | CT-PON-02 |
| D-CT-06 | Alerta de ponto quase cheio | **80%** da capacidade; cheio aos 100% | Dá tempo de pedir coleta | CT-PON-02 |
| D-CT-07 | Ponto temporário ao encerrar | Passa a **inativo**; histórico fica | Não apaga descartes antigos | CT-PON-03 |
| D-CT-08 | Prazo de aceite da coleta (PD-014) | **48 h**; sem resposta, **expira** e volta ao admin | Evita coleta parada | CT-COL-04 |
| D-CT-09 | Reagendamento | A cooperativa propõe nova data **uma vez**; o ponto confirma | Evita vai e volta | CT-COL-05 |
| D-CT-10 | Bônus de campanha não recebido no fim | **Perde-se** | Regra simples; o botão "Receber pontos" existe para isso | CT-CAM-03 |
| D-CT-11 | Campos do cadastro manual | **Material** (obrigatório), **quantidade** inteira (obrigatória), **nome** (opcional) | Mínimo para pontuar | CT-RES-04 |

## Usuário

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-MOR-01 | F01, PD-010 | Saldo 0; lote de 4 latas | 1. Enviar lote 2. Ver saldo 3. Operador confirma | Saldo 0 após enviar; **10** após confirmar; 1 lançamento | ⬜ |
| CT-MOR-02 | F02 | Item com 10 | Lote de 4 → confirmar | Estoque 6, reservado 0 | ⬜ |
| CT-MOR-03 | F04 | Item 10, lote 4 | Ponto rejeita | Estoque 10, saldo inalterado | ⬜ |
| CT-MOR-04 | F05 | Mesmo POST 3× com a mesma chave | Reenviar | 1 descarte | ⬜ |
| CT-MOR-05 | F09 | — | Cadastrar `vidro` | 422 | ⬜ |
| CT-MOR-06 | F23 | — | Quantidade 2,5 | 422 | ⬜ |
| CT-MOR-07 | F12, PD-008 | Usuário a 90 m do ponto, raio 100 m | Enviar entrega | Aceita | ⬜ |
| CT-MOR-08 | F10 | — | "Descartar agora" e voltar | Estoque inalterado | ⬜ |
| CT-MOR-09 | F12, PD-008 | Usuário a 150 m do ponto, raio 100 m | Enviar entrega | 422 `distancia` | ⬜ |
| CT-MOR-10 | F12, PD-008 | GPS com precisão de 200 m | Enviar entrega | 422 `precisao` | ⬜ |
| CT-MOR-11 | PD-010 | Saldo 0; 2 descartes aos 0 min e 40 min, mesmo ponto | Operador confirma os dois | **10** pontos (1 janela); extrato com 1 lançamento | ⬜ |
| CT-MOR-12 | PD-010 | Saldo 0; descartes aos 0 min e 70 min, mesmo ponto | Operador confirma os dois | **20** pontos; 2 lançamentos | ⬜ |
| CT-MOR-13 | PD-010, PD-006 | Descarte já confirmado | Operador tenta desfazer | Recusa (409); não existe estorno | ⬜ |

## Acesso e cadastro

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-ACE-01 | PD-001 | Cadastro aberto; 100 contas | Cadastrar sem código | Conta criada; vagas −1 | ⬜ |
| CT-ACE-02 | PD-001 | E-mail já cadastrado | Cadastrar de novo | 409 e-mail em uso; vagas inalteradas | ⬜ |
| CT-ACE-03 | [acesso](../pesquisa/controle-de-acesso.md) | 500 contas; admin sobe o teto para 1000 | Cadastrar a 501ª pessoa | Conta criada; cadastros seguem até 1000 | ⬜ |
| CT-ACE-04 | [acesso](../pesquisa/controle-de-acesso.md) | 499 contas; 2 pessoas | Cadastram ao mesmo tempo | Só **uma** entra; a outra recebe o aviso e vai à lista de espera; total 500 | ⬜ |
| CT-ACE-05 | D-CT-03 | Conta excluída hoje | 1. Vaga volta 2. Mesmo e-mail recadastra | Vaga volta (total −1); recadastro do mesmo e-mail recusado por 30 dias | ⬜ |
| CT-ACE-06 | [acesso](../pesquisa/controle-de-acesso.md) | 500 contas cheias; usuário que já tem conta | Fazer login | Entra normalmente; o teto só barra cadastros novos | ⬜ |
| CT-ACE-07 | [acesso](../pesquisa/controle-de-acesso.md) | 500 contas | Tentar cadastrar | Aviso "sem vagas" + opção de lista de espera | ⬜ |

## Cadastro de resíduos

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-RES-01 | PD-004 | Código de barras de uma lata | Ler | Item preenchido; material **sugerido**; usuário confirma | ⬜ |
| CT-RES-02 | PD-004 | Código de barras ilegível | Ler 1× | Aviso vermelho; tentar de novo | ⬜ |
| CT-RES-03 | PD-004 | Código ilegível | Ler 2× | Aviso vermelho + **manual recomendado** | ⬜ |
| CT-RES-04 | D-CT-11 | — | Cadastro manual sem material | 422 | ⬜ |
| CT-RES-05 | PD-004 | QR de nota válida com 3 itens | Ler | 3 itens listados, cada um com material sugerido | ⬜ |
| CT-RES-06 | PD-004 | Sugestão "PET" | Usuário não confirma | Item **não** entra no estoque | ⬜ |

## Cooperativa e ponto

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-COO-01 | F-01 | Sem login | POST cadastro de cooperativa | 401/410 | ⬜ |
| CT-COO-02 | F-02 | Coop. A e ponto da coop. B | A confirma descarte de B | 403 | ⬜ |
| CT-COO-03 | F-04 | Ponto: PET 180 | Coletar 30 | PET 150; outros intactos | ⬜ |
| CT-COO-04 | F-05 | — | Concluir com peso −50 | 422 | ⬜ |
| CT-PON-01 | PON-07 | Ponto sem materiais | Criar descarte | Rejeita | ⬜ |
| CT-PON-02 | PON-08, D-CT-05, D-CT-06 | Capacidade lata 100 | 80 latas / 99 latas / 100 latas | alerta / ativo / **cheio** | ⬜ |
| CT-PON-03 | PON-14, D-CT-07 | Temporário com fim antes do início | Salvar | 422 | ⬜ |
| CT-PON-04 | PON-14, D-CT-07 | Ponto temporário que encerrou ontem | Consultar | Inativo; descartes antigos visíveis | ⬜ |
| CT-PON-05 | PD-009 | Ponto A cheio; ponto B perto com vaga | Usuário abre o descarte no A | Bloqueado; app **sugere B** | ⬜ |
| CT-PON-06 | PD-023 | Responsável vinculado a 2 pontos | Listar pontos | Vê só os dois | ⬜ |
| CT-PON-07 | Decisão 11/11 | Usuário comum | Criar ponto | 403; só o admin cria | ⬜ |

## Coleta

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-COL-01 | PD-014 | Pedido de coleta aceito | Cooperativa marca "a caminho" | Estado "a caminho" | ⬜ |
| CT-COL-02 | PD-014 | Ponto com PET 180 | Coletar 100 e concluir como parcial | PET 80; coleta "parcial" | ⬜ |
| CT-COL-03 | PD-014 | Coleta aceita | Admin cancela **sem** motivo | 422 | ⬜ |
| CT-COL-04 | D-CT-08 | Pedido sem resposta há 48 h | Passar o prazo | Expira; volta à fila do admin | ⬜ |
| CT-COL-05 | D-CT-09 | Coleta aceita | Cooperativa reagenda 2× | 1ª aceita para confirmação; 2ª recusada | ⬜ |
| CT-COL-06 | PD-014 | Coleta aceita | Cooperativa cancela com motivo | Cancelada; motivo registrado | ⬜ |

## Campanhas e pagamento

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-CAM-01 | PD-011 | Meta de 3 descartes; usuário fez 3 | Ver campanha | Botão "Receber pontos" ativo | ⬜ |
| CT-CAM-02 | PD-011 | Meta de 3 cumprida | Receber pontos | Bônus **30** (10 × 3); 1 lançamento; botão desativa | ⬜ |
| CT-CAM-03 | D-CT-10 | Meta cumprida; campanha acaba sem o clique | Tentar receber depois | Recusa; bônus perdido | ⬜ |
| CT-CAM-04 | PD-011 | Campanha só PET e lata | Descartar vidro | 422 | ⬜ |
| CT-CAM-05 | PD-011 | Mesmo bônus | Clicar 2× | 1 crédito | ⬜ |
| CT-PAG-01 | PD-015, PD-016 | Coleta concluída de 100 kg PET | Admin registra pagamento manual com comprovante | Pagamento = 100 × valor/kg PET; comprovante anexado | ⬜ |
| CT-PAG-02 | PD-016 | — | Registrar pagamento sem comprovante | 422 | ⬜ |
| CT-PAG-03 | PD-016 | Cooperativa comum | Registrar pagamento | 403 | ⬜ |

## Administrador

| ID | Req. | Pré-condição | Passos | Esperado | St |
|---|---|---|---|---|---|
| CT-ADM-01 | ADM-01 | Sorteio com bilhete | DELETE | 409 | ⬜ |
| CT-ADM-02 | ADM-01 | 3 bilhetes de 50 | Cancelar | Cada saldo +50; cancelar 2× = 1 crédito | ⬜ |
| CT-ADM-03 | ADM-02 | Sorteio com bilhete | Alterar custo | 409 | ⬜ |
| CT-ADM-04 | ADM-02 | Antes de `data_fim` | Sortear | 400 | ⬜ |
| CT-ADM-05 | ADM-03, D-CT-01 | Saldo 20; ajuste de −50 com motivo | Aplicar ajuste | 409 `saldo_insuficiente`; saldo segue 20 | ⬜ |
| CT-ADM-06 | ADM-04 | Usuário comum | POST `/pontuacao/resgates` | 404/405 | ⬜ |
| CT-ADM-07 | ADM-05 | Conta desativada | Qualquer chamada | 401 | ⬜ |
| CT-ADM-08 | PD-010 | Saldo 30; ajuste de −10 **com** motivo | Aplicar | Saldo 20; 1 lançamento com motivo e autor | ⬜ |
| CT-ADM-09 | PD-010 | Ajuste de −10 **sem** motivo | Aplicar | 422 | ⬜ |
| CT-ADM-10 | PD-013 | Sorteio de teste | Tentar publicar como sorteio real | Recusado; só teste | ⬜ |

## Ponta a ponta (roteiro manual)

1. Cadastrar (com vaga no teto) → descarte rápido (leitor de código de barras) → operador confirma → saldo **10** e extrato com **1** lançamento → admin faz **ajuste manual** com motivo → saldo muda e o extrato mostra o motivo.
2. Admin cria sorteio de teste (rascunho) → publica → 3 compram → tenta editar custo (bloqueado) → cancela → 3 devoluções no extrato.
3. Campanha de dobro: usuário cumpre a meta de 3 descartes → clica "Receber pontos" → bônus de 30 no extrato.
4. Ponto fica cheio → próximo usuário vê bloqueio e sugestão de outro ponto → admin pede coleta → cooperativa aceita, marca "a caminho", conclui parcial → admin registra pagamento manual com comprovante.

## O que falta para fechar

- [ ] Registrar as decisões em vigor (D-CT-01 a D-CT-11, menos 02 e 04, canceladas em 12/11) nos requisitos e em `decisoes-pendentes.md`
- [ ] Dados concretos (usuários, pontos, valores) em fixtures
- [ ] Converter as demais fichas (≈ 70 achados) para este molde
- [ ] Valor por kg de PET e de lata (PD-015) para fechar o CT-PAG-01
- [ ] Registrar data, quem executou e evidência
