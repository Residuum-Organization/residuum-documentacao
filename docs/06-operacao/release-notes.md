# Notas de versão

> **Estado:** esboço · **Dono:** Tecnologia · **Atualizado em:** 10/11/2026
> **Fontes:** `backend/CHANGES.md` (298 linhas) `[VERIFICAR: ler e migrar]`.
> **Lacunas:** versionamento; histórico do front.

## Resumo

As mudanças hoje ficam só no `CHANGES.md` do backend, sem número de versão. Proposta: **versão única do produto** (`0.x` no piloto), uma seção por versão, escrita para quem usa, não só para quem programa.

## Molde

```
## 0.2.0 — AAAA-MM-DD
### Novo        o que o usuário ganha
### Corrigido   problema que deixou de ocorrer
### Mudou       comportamento diferente do anterior
### Atenção     migração, flag, ação manual
```

## Próximas versões previstas (rascunho)

| Versão | Conteúdo | Atenção |
|---|---|---|
| 0.2.0 | Contenção: cadastro de cooperativa fechado; sorteio sem apuração antecipada | Cooperativas legítimas precisam de vínculo |
| 0.3.0 | Pontos pelo ledger; descarte credita só na confirmação | Saldos serão reconciliados; avisar usuários |
| 0.4.0 | Convite e desativação de conta | Flag `EXIGIR_CONVITE` |
| 0.5.0 | Materiais só PET/lata; GPS com política | Nomes antigos aceitos por 1 versão |

## Histórico

`[LACUNA]` migrar o conteúdo de `backend/CHANGES.md` e do front para cá, em ordem cronológica.

## O que falta para fechar

- [ ] Definir regra de versionamento (tags no Git)
- [ ] Retroativo a partir de `CHANGES.md`
- [ ] Publicar a cada deploy em produção
