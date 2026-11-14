# ADR-0005 — Conta com ciclo de vida

[Voltar ao índice](README.md)

> **Estado:** aceita em 11/11/2026 (Vinicius); **revista em 12/11/2026** (sem código de acesso) · **Origem:** solução S4 (usuário) e A9/A10 (administrador) · **Depende de:** [PD-001](../../01-planejamento/decisoes/pd-001.md), [PD-002](../../01-planejamento/decisoes/pd-002.md), [PD-003](../../01-planejamento/decisoes/pd-003.md), [PD-022](../../01-planejamento/decisoes/pd-022.md), [PD-023](../../01-planejamento/decisoes/pd-023.md)

## Contexto

O cadastro é aberto; não há teto de contas, desativação nem revogação de sessão (o refresh vale 30 dias); recuperar senha mostra só um aviso; excluir uma conta apaga o histórico de pontos. A V6 exigia convite (RN-001); em 12/11/2026 o produto trocou o convite por um teto de contas, acesso desabilitável (RF-005/008) e recuperação de acesso (RF-006). Ver F06, F07, F16, F21, ADM-05, ADM-06, ADM-11.

## Decisão

1. `usuario.ativo` e `usuario.token_version`; o token leva a versão e `get_current_user` e `/refresh` recusam inativo ou versão antiga.
2. Tabela `recuperacao_senha` (token de uso único, 30 minutos). **Não há código de acesso** (decisão de 12/11/2026).
3. O cadastro é **aberto**, mas respeita o **teto de contas** (começa em 500, configurável; pode subir a 1000): `SELECT ... FOR UPDATE` na linha de vagas, na mesma transação. Sem vaga: aviso e lista de espera.
4. "Sair de todos os dispositivos" e redefinir senha incrementam a versão.
5. Excluir conta vira **desativar + anonimizar**; histórico de pontos, descartes e bilhetes fica; **a vaga volta** para o teto.
6. Token de acesso em memória; refresh em cookie `HttpOnly` numa segunda fase.

## Consequências

- **Melhora:** conta comprometida pode ser bloqueada; piloto controlado; LGPD.
- **Custa:** envio de e-mail (canal da [PD-003](../../01-planejamento/decisoes/pd-003.md)), ajustes de CORS para cookie e telas novas.

## Alternativas

- Lista de revogação por `jti`: mais armazenamento por sessão.
- Manter cadastro aberto com captcha: não atende RN-001.
