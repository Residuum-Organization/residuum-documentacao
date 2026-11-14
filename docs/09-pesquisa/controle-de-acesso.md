# Pesquisa — como controlar quantas pessoas entram

[Voltar ao índice de pesquisas](README.md)

> **Estado:** revisão · **Dono:** Produto · **Atualizado em:** 13/11/2026
> **Natureza:** análise de opções, sem fonte externa. Parte das regras da V6 (RN-001, RN-002, PD-001, PD-002) e do que o código tem hoje. Custos e riscos são estimativas de engenharia, não medições.

## Resumo

O cadastro é **aberto, sem código de acesso**. O controle de quantas pessoas entram é um **teto de contas** (500, que pode subir a 1000), aplicado pelo banco de dados. Ao chegar no teto, o banco trava: quem já entrou segue participando e quem chega depois recebe um aviso e entra numa lista de espera.

## Decisão (12/11/2026)

Em 11/11 a decisão era um código individual de uso único por pessoa. Foi descartada em 12/11, porque gerar, repassar e controlar os códigos dava muito trabalho e **dificultava o cadastro**.

| Item | Decidido |
|---|---|
| Cadastro | **Aberto.** A pessoa cria a conta e depois entra normalmente. Não há código |
| Forma de controle | **Trava de vagas no banco** (*pessimistic locking*), dentro da mesma transação do cadastro |
| Teto de contas | **500**, configurável. Pode subir para **1000**, número pensado para cobrir, por exemplo, uma faculdade com muita oscilação de frequência |
| Ao chegar no teto | Quem já entrou segue participando; **ninguém novo se cadastra** |
| Conta excluída | **A vaga volta** para o teto. O mesmo e-mail só se recadastra após **30 dias** |
| Vagas esgotadas | Aviso e **lista de espera** (e-mail); a equipe libera em lotes, por exemplo subindo o teto |
| Quem altera o teto | O administrador, sem novo deploy: o valor fica no banco |

## Como a trava funciona

Uma tabela de controle tem a coluna `vagas_restantes`. No cadastro, o banco executa **um único comando**:

```sql
UPDATE configuracoes
   SET vagas_restantes = vagas_restantes - 1
 WHERE vagas_restantes > 0
RETURNING vagas_restantes;
```

Se o comando não devolver linha, as vagas acabaram. A vaga e a conta são gravadas **na mesma transação**: se o cadastro falhar depois, tudo é desfeito e a vaga volta.

| Ponto | Avaliação |
|---|---|
| Precisão | Boa. Duas pessoas não pegam a mesma última vaga |
| Lentidão | Sem impacto no piloto: com cerca de 500 contas quase nunca há dois cadastros no mesmo segundo |
| Cuidado 1 | A trava dura só o tempo de gravar. E-mail e APIs externas ficam **depois** de liberar |
| Cuidado 2 | Com a Neon, a API usa o endereço **pooler**; a trava de linha dentro de uma transação deve funcionar, e há teste de concorrência previsto ([avaliação](../02-arquitetura/avaliacao-da-reuniao-de-arquitetura.md)) |
| Alternativa descartada | Redis: só valeria com volume muito maior |

## Opções consideradas

| # | Opção | Como funciona | Resultado |
|---|---|---|---|
| 1 | Código individual | Cada código vale 1 cadastro | Descartada em 12/11 |
| 2 | Código compartilhado com limite | Um código serve para N pessoas, com validade | Descartada em 12/11 |
| 3 | **Teto geral de contas** | O sistema recusa novos cadastros ao chegar em X | **Adotada** |
| 4 | **Lista de espera** | Pessoa deixa contato; a equipe libera em lotes | **Adotada** |
| 5 | Lista autorizada (e-mail ou telefone) | Só entra quem está na lista | Não adotada |
| 6 | Aprovação manual | O admin aprova cada cadastro | Não adotada |

## Efeito de abrir o cadastro

Sem código, **qualquer pessoa ou robô com o endereço do site pode ocupar uma vaga**, inclusive quem não é do público do piloto. O teto garante o número, mas não **quem** entra. As decisões sobre proteção contra robôs e sobre filtrar quem se cadastra estão em [decisões pendentes](../00-diagnostico/decisoes-pendentes.md).

## Ligação com o código

O backend precisa de **uma linha de vagas** e de um limite de contas. **Não** precisa de tabela de convites nem de códigos. Hoje qualquer pessoa cria conta (achado F06). Detalhes na [ADR-0005](../02-arquitetura/adr/0005-conta-com-ciclo-de-vida.md).
