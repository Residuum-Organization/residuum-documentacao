# Como contribuir

> **Estado:** esboço · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Lacunas:** fluxo de branches real da equipe `[LACUNA]`; modelo de PR; revisores obrigatórios.
> Vale para os três repositórios (documentação, backend, frontend). O backend e o frontend devem apontar para este arquivo.

## Resumo

Mudanças pequenas, revisadas por outra pessoa, com teste. Documentação muda **junto** com o código.

## Branches

| Tipo | Nome | Exemplo |
|---|---|---|
| Funcionalidade | `feature/<modulo>-<tema>` | `feature/mor-ledger-pontos` |
| Correção | `fix/<tema>` | `fix/cadastro-cooperativa` |
| Documentação | `docs/<tema>` | `docs/regras-de-campanhas` |

`main` é protegida: só entra por Pull Request. `[LACUNA]` confirmar se a equipe usa `develop`.

## Commits

`tipo(escopo): resumo no imperativo`, em português. Tipos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.
Exemplo: `fix(descarte): credita pontos só na confirmação`.

## Pull Request

1. Descreva **o quê** e **por quê** (3 linhas) e cite o achado/tarefa (ex.: F01, TSK-MOR-001).
2. Marque o que muda para quem usa (API, tela, regra).
3. Anexe o resultado dos testes.
4. Peça revisão de uma pessoa do outro lado (back ↔ front).

## Definição de Pronto

- [ ] Testes novos passam **em PostgreSQL** (SQLite não vale para saldo e concorrência)
- [ ] Nada altera `pontuacao_total` fora do serviço de saldo
- [ ] Migração tem rollback e foi testada subindo e descendo
- [ ] Documentação atualizada (PRD, API, manual ou release notes)
- [ ] Sem segredos no código ou nos logs

## Documentação

- Um assunto por arquivo, no máximo ~300 linhas.
- Todo documento começa com o bloco **Estado / Dono / Fontes / Lacunas** e um resumo de 5 linhas.
- Formato exclusivamente `.md`; diagramas em Mermaid.
- Marcas: `[LACUNA]`, `[DECISÃO: ID]`, `[VERIFICAR NO CÓDIGO]`.
- Veja [governança](docs/08-manutencao/governanca-da-documentacao.md).
