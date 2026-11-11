# ADR-0005 — Conta com ciclo de vida

[Voltar ao índice](README.md)

> **Estado:** proposta · **Origem:** solução S4 (morador) e A9/A10 (administrador) · **Depende de:** [PD-001](../../01-planejamento/decisoes/pd-001.md), [PD-002](../../01-planejamento/decisoes/pd-002.md), [PD-003](../../01-planejamento/decisoes/pd-003.md), [PD-022](../../01-planejamento/decisoes/pd-022.md), [PD-023](../../01-planejamento/decisoes/pd-023.md)

## Contexto

O cadastro é aberto; não há convite, desativação nem revogação de sessão (o refresh vale 30 dias); recuperar senha mostra só um aviso; excluir uma conta apaga o histórico de pontos. A V6 exige convite (RN-001), acesso desabilitável (RF-005/008) e recuperação de acesso (RF-006). Ver F06, F07, F16, F21, ADM-05, ADM-06, ADM-11.

## Decisão

1. `usuario.ativo` e `usuario.token_version`; o token leva a versão e `get_current_user` e `/refresh` recusam inativo ou versão antiga.
2. Tabelas `convite` (guarda só o hash do código, com expiração e limite de usos) e `recuperacao_senha` (token de uso único, 30 minutos).
3. Cadastro exige convite (atrás de flag para o piloto) e consome um uso na mesma transação.
4. "Sair de todos os dispositivos" e redefinir senha incrementam a versão.
5. Excluir conta vira **desativar + anonimizar**; histórico de pontos, descartes e bilhetes fica.
6. Token de acesso em memória; refresh em cookie `HttpOnly` numa segunda fase.

## Consequências

- **Melhora:** conta comprometida pode ser bloqueada; piloto controlado; LGPD.
- **Custa:** envio de e-mail (canal da [PD-003](../../01-planejamento/decisoes/pd-003.md)), ajustes de CORS para cookie e telas novas.

## Alternativas

- Lista de revogação por `jti`: mais armazenamento por sessão.
- Manter cadastro aberto com captcha: não atende RN-001.
