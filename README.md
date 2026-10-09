# Residuum — documentação

Repositório dedicado aos documentos do projeto Residuum. A finalidade é manter uma referência comum para a equipe e permitir a continuidade do trabalho em computadores diferentes.

## Comece por aqui

1. Leia a [visão do projeto](docs/visao/visao-do-projeto.md).
2. Consulte o [levantamento de requisitos do MVP — V6](docs/requisitos/requisitos-mvp-v6.md), documento consolidado atual para validação da equipe.
3. Use a seção **Pendências de decisão** da V6 para identificar as questões ainda abertas.

A V6 distingue decisões confirmadas, conteúdo herdado e propostas para validação. Os status de entrega presentes nos arquivos históricos não comprovam o funcionamento do MVP.

## Organização

```text
residuum-documentacao/
├── README.md
├── .gitignore
├── .gitattributes
└── docs/
    ├── visao/
    │   ├── visao-do-projeto.md
    │   └── referencias.md
    ├── requisitos/
    │   └── requisitos-mvp-v6.md
    └── historico/
        ├── levantamento-requisitos-v4.md
        ├── levantamento-requisitos-v5.md
        ├── backlog-v2.md
        └── plano-tarefas-okr-mvp-v1.md
```

| Pasta | Conteúdo |
|---|---|
| `docs/visao` | Contexto, proposta e referências do projeto |
| `docs/requisitos` | Especificação consolidada que orienta a revisão do MVP |
| `docs/historico` | Versões anteriores e planejamento original, preservados para rastreabilidade |

## Documentos

| Documento | Finalidade |
|---|---|
| [Visão do projeto](docs/visao/visao-do-projeto.md) | Problema de negócio e solução proposta |
| [Referências](docs/visao/referencias.md) | Fontes e inspirações reunidas pelo projeto |
| [Requisitos MVP V6](docs/requisitos/requisitos-mvp-v6.md) | 53 RF, 12 RNF, regras, critérios BDD, diagramas, comparativo e pendências |
| [Levantamento V4](docs/historico/levantamento-requisitos-v4.md) | Catálogo anterior e priorização |
| [Levantamento V5](docs/historico/levantamento-requisitos-v5.md) | Revisão anterior da presença por GPS |
| [Backlog V2](docs/historico/backlog-v2.md) | Prioridades e entregas declaradas no planejamento anterior |
| [Plano de tarefas e OKR V1](docs/historico/plano-tarefas-okr-mvp-v1.md) | Decomposição anterior de tarefas, metas e prazos |

## Ler no GitHub e no VS Code

No GitHub, abra os arquivos Markdown para consultar os documentos e os diagramas Mermaid. No VS Code, use a prévia Markdown (`Ctrl+Shift+V`); os diagramas precisam de uma prévia com suporte a Mermaid.

Não é necessário gerar PDF para trabalhar com este repositório.

## Continuar o trabalho em casa e no trabalho

Na primeira utilização em outro computador, com Git instalado e acesso autorizado à conta:

```bash
git clone https://github.com/Vinny1313/residuum-documentacao.git
cd residuum-documentacao
```

Antes de começar a editar, salve ou faça commit de alterações locais e atualize a cópia:

```bash
git pull --ff-only
```

Depois de editar, revise as diferenças e publique:

```bash
git diff
git add docs README.md
git commit -m "docs: atualizar requisitos do MVP"
git push
```

Em caso de divergência entre computadores, revise os commits e resolva a divergência antes de enviar. Evite sobrescrever o histórico com `push --force`.

## Convenções de documentação

- Nomes em minúsculas, sem espaços ou acentos, separados por hífen.
- Arquivos Markdown em UTF-8.
- Preservar o conteúdo histórico; decisões atuais pertencem à especificação consolidada.
- Manter identificadores dos requisitos estáveis e atualizar sua rastreabilidade.
- Ao resolver uma pendência, atualizar também regra, critério de aceite e diagrama afetados.
- Diferenciar requisito confirmado de proposta e de questão ainda aberta.
- Usar commits com mensagens claras; exemplos: `docs: esclarecer fluxo de coleta` e `docs: definir regras dos planos`.
- Guardar credenciais, tokens, arquivos de ambiente e configurações pessoais fora do repositório.

## Correspondência dos nomes anteriores

| Nome anterior | Caminho atual |
|---|---|
| `projeto_residuum.md` | `docs/visao/visao-do-projeto.md` |
| `referencias.md` | `docs/visao/referencias.md` |
| `Residuum_Levantamento_Requisitos_MVP_V6.md` | `docs/requisitos/requisitos-mvp-v6.md` |
| `Residuum_Levantamento de Requisitos_V4(1).md` | `docs/historico/levantamento-requisitos-v4.md` |
| `Residuum_DLR_V5.md` | `docs/historico/levantamento-requisitos-v5.md` |
| `Residuum_Backlog_v2.md` | `docs/historico/backlog-v2.md` |
| `Residuum_Plano_Tasks_OKR_MVP.md` | `docs/historico/plano-tarefas-okr-mvp-v1.md` |
