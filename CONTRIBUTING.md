# Como contribuir

> **Estado:** revisão · **Dono:** Tecnologia · **Atualizado em:** 11/11/2026
> **Fontes:** branches e commits dos repositórios `residuum-backend` e `residuum-frontend` (lidos em 11/11/2026); regras deste repositório.
> **Lacunas:** revisores obrigatórios por repositório; proteção da `main` (só o administrador da organização ativa).
> Vale para os três repositórios (documentação, backend e frontend). O backend e o frontend devem apontar para este arquivo.

## Resumo

Mudanças pequenas, em branch própria, entram na `main` **só por Pull Request**, revisadas por outra pessoa e com teste. A documentação muda **junto** com o código.

## Como a equipe trabalha hoje

| Item | O que se vê nos repositórios |
|---|---|
| Branch principal | Só `main`. **Não há `develop`** |
| Entrada na `main` | Por Pull Request (ex.: PR #6 do backend, PR #4 do frontend) |
| Nomes de branch | Mistura de `feature/…`, `feat/…`, `fix/…` e `hotfix/…` |
| Commits | Formato `tipo(escopo): resumo`, em português e em inglês |
| Automação | Backend: só deploy (`deploy.yaml`), **sem testes no CI**. Frontend: `ci.yml` |

## Branches

| Tipo | Nome | Exemplo |
|---|---|---|
| Funcionalidade | `feature/<modulo>-<tema>` | `feature/mor-025-026-vouchers-sorteios` |
| Correção | `fix/<tema>` | `fix/cadastro-cooperativa` |
| Correção urgente em produção | `hotfix/<tema>` | `hotfix/login-expirado` |
| Documentação | `docs/<tema>` | `docs/parte-3-api-contributing` |

**Decidido em 11/11/2026:** padronizar **`feature/`** e deixar de criar `feat/` (é a forma das branches mais recentes).

## Commits

Formato: `tipo(escopo): resumo no imperativo`, **em português**.

| Tipo | Quando |
|---|---|
| `feat` | Funcionalidade nova |
| `fix` | Correção |
| `docs` | Só documentação |
| `refactor` | Muda o código sem mudar o comportamento |
| `test` | Só testes |
| `chore` | Manutenção (dependências, configuração) |

Exemplo: `fix(descarte): credita 10 pontos só na confirmação do operador`.

## Pull Request

1. Diga **o quê** e **por quê** em até 3 linhas e cite a atividade ou o achado (ex.: `TSK-MOR-017`, `F01`, `PD-010`).
2. Diga o que muda para quem usa: rota da API, tela ou regra.
3. Anexe o resultado dos testes.
4. Peça revisão a uma pessoa do outro lado (backend ↔ frontend).
5. **Não faça merge da própria PR** sem a revisão.

## Definição de Pronto

- [ ] Testes novos passam **em PostgreSQL** (SQLite não serve para saldo e concorrência)
- [ ] Nada altera o saldo de pontos fora do serviço de saldo
- [ ] A migração foi testada subindo **e** descendo
- [ ] A documentação foi atualizada: [API](docs/04-desenvolvimento/api.md), [PRD](docs/01-planejamento/prd-srs.md), manual ou notas de versão
- [ ] Nada de senha, token ou dado pessoal no código, nos logs ou nos documentos

## Regras de negócio que todo código precisa seguir

Decididas em 11/11/2026. Ver [PD-010](docs/01-planejamento/decisoes/pd-010.md) e [decisões pendentes](docs/00-diagnostico/decisoes-pendentes.md).

- **10 pontos por descarte concluído**, só na confirmação do **operador do ponto**.
- Descartes do mesmo usuário, no mesmo ponto, em **60 minutos**, contam como **um**.
- Descarte confirmado **não é estornado**; correção é ajuste manual do admin, com motivo.
- Só **PET e lata** no MVP.

## Documentação

- Um assunto por arquivo, com no máximo ~300 linhas.
- Todo documento começa com o bloco **Estado / Dono / Fontes / Lacunas** e um resumo de até 5 linhas.
- Formato só `.md`; diagramas em Mermaid. Nada de docx, pdf ou html.
- Não invente números: cite a fonte ou marque `[VERIFICAR fonte]`.
- Marcas: `[LACUNA]`, `[DECISÃO: ID]`, `[VERIFICAR NO CÓDIGO]`.
- Veja a [governança da documentação](docs/08-manutencao/governanca-da-documentacao.md).
