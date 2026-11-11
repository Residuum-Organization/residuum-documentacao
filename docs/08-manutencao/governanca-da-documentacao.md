# Governança da documentação

> **Estado:** esboço · **Dono:** a definir · **Atualizado em:** 10/11/2026
> **Lacunas:** donos por documento; revisor.

## Resumo

Regras simples para a documentação **parar de se contradizer**: um lugar só, um dono por documento, e revisão junto com o código.

## Regras

1. **Repositório único:** `Residuum-Organization/residuum-documentacao`. Backend e frontend só têm README curto com link para cá.
2. **Fonte única por assunto.** Se um fato aparece em dois arquivos, um deles só aponta para o outro.
3. **Só `.md`.** Diagramas em Mermaid. Sem PDF, Word ou imagens soltas (capturas ficam em `docs/03-ux/evidencias/`).
4. **Bloco de estado no topo:** *esboço → revisão → definitivo*, dono, fontes, lacunas.
5. **Decisão registrada = decisão valendo.** O que for decidido entra em `decisoes.md` com data e responsável antes de mudar o PRD.
6. **Documentação muda junto com o código** (parte da Definição de Pronto).
7. **Histórico não se apaga:** o que sai de uso vai para `docs/historico/`.

## Donos (proposta)

| Documento | Dono | Revisor |
|---|---|---|
| Visão, PRD, backlog, manual | Produto | Tecnologia |
| SAD, diagramas, API, deploy | Tecnologia | QA |
| Plano e casos de teste | QA | Tecnologia |
| UX / telas | UX | Produto |

`[LACUNA]` nomes das pessoas.

## Verificações automáticas (CI)

- Links quebrados e Markdown válido (base: `tmp/.../verificar-documentacao.yml`).
- Falha se existir arquivo que não seja `.md` em `docs/` (exceto `evidencias/`).
- Relatório de pendências: `grep -rn "LACUNA\|DECISÃO\|VERIFICAR" docs/`.

## Limpeza inicial

| Ação | Item |
|---|---|
| Arquivar | `backend/GUIA-INTEGRACAO-FRONT.md`, `PEDENCIAS-ENVIADAS-PELO-FRONT.md` |
| Unificar | `docs/requisitos`, `backend/docs/requisitos.md`, `frontend/docs/requisitos.md` |
| Converter | PDFs em `frontend/docs/` |
| Fatiar | `tasks-gerais.md`, `decisoes.md`, V6 |
| Remover | pasta `tmp/` |
| Mesclar | branch `docs/regras-de-campanhas` |
