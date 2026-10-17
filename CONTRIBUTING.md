# Como contribuir com a documentação do Residuum

[Página inicial](README.md) · [Convenções](docs/08-manutencao/01-convencoes.md)

## Antes de editar

Consulte os [requisitos](docs/02-produto/02-requisitos-mvp-v6.md), as [decisões](docs/01-planejamento/04-decisoes.md) e a ficha afetada. Mudanças de comportamento precisam de decisão explícita da equipe; uma correção editorial não deve alterar critérios, contagens ou evidências.

Para manter a documentação, use Git e Node.js 24. Nenhuma instalação de dependências é necessária. Para apenas consultar, use o GitHub ou um editor Markdown.

## Fluxo de alteração

1. Crie uma branch `codex/<descricao-curta>`, por exemplo `codex/corrigir-guia-morador`.
2. Edite as fontes corretas: [fichas por perfil](docs/01-planejamento/02-perfis/README.md), requisitos, decisões ou documentos de apoio. Não edite o compilado manualmente.
3. Preserve IDs e âncoras. Ao mover arquivos, atualize seus links e o [mapa de migração](docs/08-manutencao/02-mapa-de-migracao.md).
4. Execute a geração e as verificações abaixo; revise o diff para evitar mudanças não relacionadas.
5. Abra um pull request informando motivo, documentos/IDs afetados e validações. Solicite revisão de outro integrante antes do merge.

## Gerar e verificar

```text
node scripts/gerar-atividades.mjs
node scripts/gerar-atividades.mjs --check
node scripts/verificar-documentacao.mjs
node --test scripts/documentacao.test.mjs
```

Execute os comandos na raiz. A geração mantém as fontes e o compilado sincronizados; `--check` apenas verifica, sem escrever arquivos. O verificador percorre a documentação atual, histórica, índices e templates Markdown, cobrindo arquivos, imagens, referências e âncoras locais. URLs externas não são acessadas.

JSONs, capturas e patch são evidências da versão de origem. Sua movimentação não exige reescrever o conteúdo. Os testes acima verificam a documentação, não executam os testes de software descritos nas fichas.

## Commits

Use mensagens curtas com intenção clara:

- `docs: esclarecer critérios do descarte`
- `fix: corrigir links do guia de qualidade`
- `chore: ajustar verificação da documentação`
- `feat: adicionar validação de referências Markdown`

Separe alterações de escopo e de organização quando forem independentes. Registre as evidências efetivamente obtidas; não marque testes planejados como aprovados.

## Issues e pull requests

Use os templates para problemas documentais e propostas de alteração e o [template de pull request](.github/PULL_REQUEST_TEMPLATE.md) para revisão. Inclua o documento ou link, comportamento atual, resultado esperado e IDs envolvidos. O quadro da equipe continua acompanhando a execução do produto; evite duplicar esse controle nas issues.

O workflow de verificação deve passar antes da integração. A exigência de revisão é uma orientação do fluxo; regras remotas de proteção de branch não são alteradas por estes arquivos.

## Licença e autoria

A licença e a titularidade estão [pendentes de decisão da equipe](docs/08-manutencao/01-convencoes.md#licença). A autoria das alterações permanece no histórico Git; não atribua nomes ou permissões que não tenham sido aprovados.
