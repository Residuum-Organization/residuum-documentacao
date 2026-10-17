# Residuum — convenções da documentação

[Manutenção](README.md) · [Como contribuir](../../CONTRIBUTING.md)

## Pastas e nomes

- Os assuntos principais usam dois dígitos e um nome em português: `01-planejamento`, `02-produto` e assim por diante.
- Documentos com sequência de leitura recebem prefixos numéricos. Não renumere documentos existentes ao acrescentar um assunto; escolha o próximo número disponível.
- Use minúsculas, sem acentos, palavras separadas por hífens e extensão em minúsculas. Mantenha `README.md`, `CONTRIBUTING.md` e nomes exigidos pelo GitHub.
- Os módulos usam o ID e o assunto: `m01-acesso-usuarios-e-convites.md`. IDs TSK, PD, CT e TEC e suas âncoras explícitas permanecem estáveis.
- Pesquisas e documentos históricos mantêm os nomes descritivos existentes. Versões e datas nesses nomes indicam o contexto original.
- Scripts de manutenção ficam em `scripts/`; arquivos temporários e dependências locais continuam ignorados.

## Fontes e compilado

As fichas por perfil são fontes editáveis. O compilado geral reúne essas fontes e os documentos de apoio; sua geração recalcula links relativos para o diretório de destino. Os índices por módulo são outra forma de navegação para as mesmas fichas.

Não altere o status do produto ao reorganizar documentos. Os 93 IDs, 228 casos individuais, 45 casos integrados e seis recortes TEC são invariantes verificados pelo gerador. A contagem não significa testes aprovados.

## Links e evidências

Use links relativos para arquivos deste repositório e preserve fragmentos de âncora. Ao mover um documento, atualize referências de entrada e saída e o mapa de migração. A verificação cobre todos os Markdown de navegação em `docs/`, na raiz e em `.github/`.

Mantenha referências externas a commits específicos, versões examinadas e caminhos de execução histórica com seu contexto. JSONs, imagens e patch preservam o conteúdo original; sua descrição e localização atual pertencem aos índices. Links externos não são testados pela verificação local.

## Licença

**Pendente da equipe:** definir titularidade dos materiais e a licença aplicável. A reorganização não cria `LICENSE` nem atribui uma licença aos documentos ou aos artefatos.

## GitHub e acompanhamento

O repositório é voltado à equipe. Descrição sugerida para o About: **Documentação de trabalho do Residuum: requisitos, planejamento, decisões técnicas e validação do MVP.**

Topics sugeridos: `residuum`, `documentation`, `requirements`, `project-planning` e `recycling`. A descrição, os Topics e as configurações remotas não foram alterados por esta reorganização.

O quadro da equipe continua sendo a referência de status e responsáveis. Issues neste repositório registram problemas ou propostas de documentação. Nenhum workflow de aplicação, ambiente de produção ou integração externa é configurado aqui.
