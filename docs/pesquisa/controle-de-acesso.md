# Pesquisa — como controlar quantas pessoas entram

[Voltar ao índice de pesquisas](README.md)

> **Estado:** revisão · **Dono:** Produto · **Elaborado em:** 11/11/2026
> **Natureza:** **análise de opções**, sem fonte externa. Parte das regras da V6 (RN-001, RN-002, PD-001, PD-002) e do que o código tem hoje. Os custos e riscos são estimativas de engenharia, não medições.

## Resumo

A equipe quer deixar entrar um número **X** de pessoas. **Decisão final (12/11/2026): cadastro aberto, com teto geral de contas (500, podendo subir a 1000) e lista de espera**, sem código de acesso. A tabela de opções e a recomendação abaixo são o **histórico da análise**: a opção escolhida foi a 3, junto com a 4.

## Situação hoje

| Item | Estado |
|---|---|
| Regra da V6 | RN-001: cadastro **só por convite**. Individual vale 1 uso; compartilhado tem expiração e limite |
| Decisão de 11/11 | Código individual de uso único + teto de 500 (**descartado o código em 12/11**) |
| Decisão de 12/11 | Cadastro **aberto**; só o **teto de contas** (500, até 1000) com trava de vagas no banco |
| Código do backend | **Não há convite**: qualquer pessoa cria conta (achado F06 do módulo usuário) |

## Opções

| # | Opção | Como funciona | Controla X? | Esforço | Risco |
|---|---|---|---|---|---|
| 1 | **Código individual** | Cada código vale 1 cadastro | Sim, exato: gere X códigos | Médio | Códigos podem ser repassados antes do uso |
| 2 | **Código compartilhado com limite** | Um código serve para N pessoas, com validade | Sim, por turma ou condomínio | Médio | Se vazar, esgota rápido |
| 3 | **Teto geral de contas** | O sistema recusa novos cadastros ao chegar em X | Sim, global | Baixo | Quem chega depois fica sem aviso |
| 4 | **Lista de espera** | Pessoa deixa contato; a equipe libera em lotes | Sim, manual | Baixo | Exige operação humana |
| 5 | **Lista autorizada** (e-mail ou telefone) | Só entra quem está na lista | Sim, exato | Médio | Trabalho de cadastrar a lista |
| 6 | **Aprovação manual** | Admin aprova cada cadastro | Sim | Baixo no código, alto na operação | Não escala |

## Recomendação

1. **Código compartilhado com limite e validade** (opção 2), um por ponto de coleta ou condomínio piloto. Já está na V6.
2. **Teto geral configurável** (opção 3) como trava de segurança.
3. **Lista de espera** (opção 4) para quem chegar com o teto cheio.

**Por quê:** combina o que a V6 já prevê com uma proteção simples, e deixa cada ponto do piloto com seu próprio grupo, o que ajuda a medir.

## ✅ Decisão (11/11/2026, revista em 12/11/2026)

> **Revisão de 12/11/2026 (Vinicius):** em 11/11 a decisão era um **código individual de uso único** para cada pessoa criar a conta. Isso foi **descartado**: gerar, repassar e controlar os códigos dava muito trabalho e **dificultava o cadastro**. O controle passa a ser **só pelo banco**.

| Item | Decidido |
|---|---|
| Cadastro | **Aberto.** A pessoa cria a conta e depois entra normalmente. **Não há código de acesso** |
| Forma de controle | **Trava de vagas no banco** (*pessimistic locking*): `SELECT ... FOR UPDATE` na linha de vagas, dentro da mesma transação do cadastro |
| Teto de contas (X) | **500**, **configurável**. Pode subir para **1000**, número pensado para cobrir, por exemplo, uma faculdade com muita oscilação de frequência |
| Ao chegar no teto | O banco trava: quem já entrou segue participando; **ninguém novo se cadastra** |
| Conta excluída | **A vaga volta** para o teto |
| Vagas esgotadas | A tela avisa que as vagas acabaram e oferece uma **lista de espera** (e-mail); a equipe libera em lotes (por exemplo, subindo o teto) |

**Para o desenvolvimento:** manter a trava só durante a gravação (nada de e-mail ou API externa com a linha presa) e gravar a vaga na **mesma transação** da conta. O valor do teto fica **no banco** e é alterado pelo admin, sem novo deploy. Continua em aberto: a **regra contra abuso** da vaga que volta (criar e apagar contas para liberar vagas). Proposta nos casos de teste, ainda a validar: o mesmo e-mail só se recadastra após 30 dias.

> As metas do piloto usam **100 usuários**; o teto é **500** (ou 1000). Ajustar a escala das metas é uma decisão pendente.

**Efeito de abrir o cadastro:** como não há código, **qualquer pessoa com o endereço do site pode ocupar uma vaga**, inclusive quem não é do público do piloto. O teto garante o número, mas não **quem** entra. Se isso importar, o produto pode acrescentar depois, sem refazer nada, um limite por domínio de e-mail ou por ponto de coleta `[DECISÃO]`.

## Proposta para o lançamento: trava de vagas no banco (Vinicius, 11/11/2026)

**A proposta:** uma tabela de controle (por exemplo `configuracoes`) com a coluna `vagas_restantes`. No cadastro, abre-se uma transação, lê-se a linha com `SELECT ... FOR UPDATE` (o banco segura a linha para os outros), diminui-se 1 vaga e conclui-se o cadastro. É a forma de fazer a **opção 3 (teto geral)** sem ferramenta extra, como o Redis.

### Avaliação

| Ponto | Avaliação |
|---|---|
| Precisão | **Boa.** Duas pessoas não pegam a mesma última vaga. Serve para o PostgreSQL, que é o banco do backend |
| Lentidão | **Não é problema no piloto.** Com cerca de 100 usuários, quase nunca haverá dois cadastros no mesmo segundo. A fila só pesa com milhares de cadastros simultâneos |
| Cuidado 1 | A trava deve durar **só o tempo de gravar**. Nada de enviar e-mail, chamar API externa ou esperar o usuário com a linha travada. Faça tudo isso **depois** de liberar |
| Cuidado 2 | Se o cadastro falhar depois de tirar a vaga, a transação toda precisa ser **desfeita** (a vaga volta). Por isso vaga e conta devem ser gravadas **na mesma transação** |
| Cuidado 3 | Contas excluídas ou recusadas devolvem a vaga? **Decisão de produto** |
| Forma mais simples, mesmo efeito | Um único comando `UPDATE configuracoes SET vagas_restantes = vagas_restantes - 1 WHERE vagas_restantes > 0 RETURNING vagas_restantes`. Se não voltar linha, acabaram as vagas. A trava dura menos e o código fica menor |
| Combina com o código de acesso? | **Sim.** O código diz **quem** pode entrar; a trava diz **quantos** entram. Um código compartilhado pode ter sua própria coluna de usos restantes, com a mesma técnica |
| Quando as vagas acabam | A tela deve dizer isso com clareza e oferecer a **lista de espera** (opção 4), para ninguém ficar sem resposta |

**Conclusão técnica:** a proposta **serve para o lançamento**. Recomendo a forma com um único `UPDATE` e as vagas gravadas na mesma transação da conta. Redis só valeria a pena com volume muito maior.

> Decidido depois desta avaliação: **X = 500**, com `SELECT ... FOR UPDATE`. Com 500 contas, a fila no banco continua sem impacto perceptível.

## O que precisa ser decidido

| Decisão | Quem |
|---|---|
| ~~Valor de **X**~~ | **500**, configurável, pode subir a **1000** (11/11 e 12/11/2026) |
| ~~Código individual, compartilhado ou ambos~~ | **Nenhum código.** Cadastro aberto (12/11/2026; [PD-001](../01-planejamento/decisoes/pd-001.md), [PD-002](../01-planejamento/decisoes/pd-002.md)) |
| ~~Conta excluída devolve a vaga?~~ | **Sim** (11/11/2026) |
| ~~Tela sem vagas~~ | **Aviso + lista de espera** (11/11/2026) |
| ~~Validade do código; quem já tem conta precisa de código?~~ | **Não se aplica mais** (12/11/2026) |
| Regra contra abuso da vaga que volta | Produto |
| Filtrar quem pode se cadastrar (domínio de e-mail, ponto) | Produto, se for preciso |

## Ligação com o código

O backend precisa de **uma linha de vagas** e de um limite de contas; **não** precisa de tabela de convites nem de códigos. Os detalhes técnicos estão na [ADR-0005](../02-arquitetura/adr/0005-conta-com-ciclo-de-vida.md) (ciclo de vida da conta).
