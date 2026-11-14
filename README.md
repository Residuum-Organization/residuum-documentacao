# Residuum: documentação

Plataforma que premia **usuários** com pontos por entregar **PET e latas de alumínio** em pontos de coleta. Cooperativas recolhem; o administrador coordena. Projeto de Manaus (AM).

> Este repositório guarda **só a documentação** (arquivos `.md`). O código fica em `residuum-backend` (FastAPI) e `residuum-frontend` (React).

## Comece por aqui

| Eu quero... | Abra |
|---|---|
| Entender o produto e o escopo | [Visão e escopo](docs/01-planejamento/visao-e-escopo.md) |
| Ver o que já foi decidido e o que falta | [Decisões pendentes](docs/00-diagnostico/decisoes-pendentes.md) |
| Ver requisitos e regras | [PRD/SRS](docs/01-planejamento/prd-srs.md) · [Regras de negócio](docs/01-planejamento/regras/regras-de-negocio.md) |
| Pegar uma tarefa | [Backlog e histórias](docs/01-planejamento/backlog-e-historias.md) |
| Entender a arquitetura | [SAD](docs/02-arquitetura/sad.md) · [ADRs](docs/02-arquitetura/adr/) |
| Ver as telas | [Protótipo FigCraft](docs/03-ux/prototipo-figcraft.md) |
| Testar | [Plano de testes](docs/05-qualidade/plano-de-testes.md) |
| Publicar | [Guia de deploy](docs/06-operacao/guia-de-deploy.md) |
| Retomar o trabalho de documentação | [Prompt de retomada](docs/08-manutencao/prompt-de-retomada.md) |
| Contribuir | [CONTRIBUTING](CONTRIBUTING.md) |

## Estrutura

```text
docs/
├── 00-diagnostico/     diagnóstico, decisões em aberto, roteiro de revisão
├── 01-planejamento/    visão, PRD, backlog, decisões PD, regras de negócio
├── 02-arquitetura/     SAD, ADRs, modelo de dados, diagramas, stacks
├── 03-ux/              protótipo FigCraft e índice de telas
├── 04-desenvolvimento/ API
├── 05-qualidade/       plano e casos de teste
├── 06-operacao/        deploy e notas de versão
├── 07-usuario/         manual do usuário
├── 08-manutencao/      diário de bordo, governança, reuniões, prompt de retomada
├── 09-pesquisa/        mercado, concorrentes, pontos, piloto, pagamento
└── historico/          versões antigas, só para rastreio
```

Guia completo: [docs/README.md](docs/README.md).

## Regras do repositório

- Só `.md`; diagramas em Mermaid.
- Uma decisão em aberto vive em **um só lugar**: [decisões pendentes](docs/00-diagnostico/decisoes-pendentes.md).
- O que é substituído vai para [`docs/historico`](docs/historico/README.md); nada é apagado.
- Mudanças entram por Pull Request.
- Documento preparado não é teste executado: os textos separam requisito, proposta, teste planejado e evidência.
