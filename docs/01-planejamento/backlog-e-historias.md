# Backlog e histórias de usuário

> **Estado:** esboço · **Dono:** Produto · **Atualizado em:** 10/11/2026
> **Fontes:** `tasks-gerais.md` (93 atividades), roteiro unificado de PRs das análises.
> **Lacunas:** responsáveis, datas e conteúdo final das sprints.

## Resumo

O backlog atual é uma lista técnica de 93 tarefas. Falta enxergá-lo como **histórias** e em **ondas** de entrega. Abaixo: as ondas, e histórias-modelo de cada uma. A conversão das 93 atividades segue o mesmo molde.

## Ondas de entrega

| Onda | Entrega | Por quê |
|---|---|---|
| 0 | Contenção: fechar cadastro público de cooperativa, travar acesso por ponto, sorteio (estados, remover Heineken, remover `/pontuacao/resgates`) | Riscos críticos, sem decisão |
| 1 | Livro de pontos (ledger), fluxo único de confirmação, idempotência, reconciliação | Base de quase tudo |
| 2 | Vínculo usuário↔ponto; contas (convite, desativar, senha) | Destrava os perfis |
| 3 | Materiais PET/lata; front do morador; cancelar sorteio | Dependem de 1 e 2 |
| 4 | Estados da coleta; edição do ponto; campanha/voucher; contas pelo admin | Fluxos operacionais |
| 5 | Extrato, disponibilidade, lead, QR removido | Experiência |
| 6 | Pagamento, planos, limpeza do legado | Sprints 3–4 |

## Histórias-modelo

| ID | História | Aceite | Onda |
|---|---|---|---|
| H-MOR-01 | Como **morador**, quero ganhar pontos só quando o ponto confirmar minha entrega, para que meu saldo seja confiável. | Criar descarte não muda saldo; confirmar credita 1 vez | 1 |
| H-MOR-02 | Como **morador**, quero que uma rejeição devolva meus itens ao estoque. | Item volta inteiro; saldo inalterado | 1 |
| H-MOR-03 | Como **morador**, quero que "descartar agora" não grave nada se eu desistir. | Estoque inalterado ao voltar | 3 |
| H-MOR-04 | Como **morador**, quero ver se o ponto está lotado ou fechado antes de ir. | Ponto indisponível aparece desabilitado com motivo | 5 |
| H-COO-01 | Como **admin**, quero ser o único a criar cooperativas, para evitar fraude. | Cadastro público responde 410 | 0 |
| H-COO-02 | Como **cooperativa**, quero ver só os pontos ligados a mim. | Listas disjuntas entre cooperativas | 2 |
| H-COO-03 | Como **cooperativa**, quero informar o que retirei por material, sem zerar o ponto. | Estoque baixa só pelo coletado | 4 |
| H-PON-01 | Como **responsável**, quero editar os materiais do meu ponto, com histórico. | Alteração gera registro de auditoria | 4 |
| H-PON-02 | Como **responsável**, quero pedir coleta quando o ponto encher. | Pedido aparece ao admin; duplicado → 409 | 4 |
| H-ADM-01 | Como **admin**, quero cancelar um sorteio devolvendo os pontos. | Cada bilhete devolve 1 vez | 3 |
| H-ADM-02 | Como **admin**, quero desativar uma conta sem apagar o histórico. | Próximo acesso responde 401 | 2 |

## Mapa de rastreio (achado → história)

| Módulo | Achados | Críticos |
|---|---|---|
| Morador | F01–F23 | 11 |
| Cooperativa | F-01–F-14 | 5 |
| Ponto de coleta | PON-01–16 | 2 |
| Administrador | ADM-01–18 | 5 |

## O que falta para fechar

- [ ] Converter as 93 atividades para o molde de história
- [ ] `[LACUNA]` responsável, início e entrega por item
- [ ] `[LACUNA]` capacidade do time para dimensionar sprints
- [ ] Cortar `tasks-gerais.md` em um arquivo por módulo, com índice
