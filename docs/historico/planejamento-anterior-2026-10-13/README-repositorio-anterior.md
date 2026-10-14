# Residuum — documentação do projeto

**[Documento geral das atividades por módulo e perfil](../../planejamento/modulos/README.md)** — modelo padronizado, testes, proposta de Scrum e matriz de importância; responsáveis e datas a preencher pela equipe.


**[Abrir o guia dos documentos e o roteiro da reunião de 13/10/2026](../../README.md)**

| Documento | Acesso | Conteúdo |
|---|---|---|
| Visão do projeto | [Problemática e solução](../../visao/visao-do-projeto.md) | Problema, proposta, participantes e limites |
| Estudo realizado | [Estudos e diagnóstico](../../estudos/estudos-do-projeto.md) | Referências, análise do MVP e evidências |
| Requisitos | [Especificação MVP V6](../../requisitos/requisitos-mvp-v6.md) | 53 RF, 12 RNF, fluxos e critérios de aceite |
| Regras de negócio | [Guia das regras](../../requisitos/regras-de-negocio.md) | Regras organizadas por assunto e acesso ao catálogo RN |
| Tasks de desenvolvimento | [Kanban do time](../../planejamento/kanban-miro.md) e [documentos de apoio](tasks-do-time.md) | 93 cartões no Miro; pacotes ADE e critérios completos em documentos |
| Stacks | [Tecnologias e integrações](../../tecnologia/stacks-e-integracoes.md) | Base examinada, ferramentas e decisões pendentes |

Para planejar o trabalho após o alinhamento, abra o [roteiro de adequação e reativação](tasks-adequacao-reativacao-mvp-v1.md). Para consultar decisões abertas, abra as [pendências da V6](../../requisitos/requisitos-mvp-v6.md#12-pendências-de-decisão).

A documentação distingue comportamento esperado, implementação examinada e demonstrações. A V6 é a referência funcional consolidada; decisões posteriores de experiência estão indicadas no guia. Os documentos históricos permanecem disponíveis para rastreabilidade.

<details>
<summary>Acervo completo, organização anterior e instruções de manutenção</summary>

# Residuum — documentação

Repositório dedicado aos documentos do projeto Residuum. A finalidade é manter uma referência comum para a equipe e permitir a continuidade do trabalho em computadores diferentes.

## Em destaque — execução da adequação do MVP

**[Abrir as tasks direcionadas de adequação e reativação](tasks-adequacao-reativacao-mvp-v1.md)**

Para orientar o trabalho da equipe, este roteiro reúne **27 pacotes de execução** com situação atual, base a reaproveitar, mudanças necessárias, dependências, decisões bloqueantes e critérios de aceite. Cobre os **53 RF, 12 RNF e 16 achados** do diagnóstico e referencia as tasks originais. Comece pela ordem de trabalho e depois abra a ficha da jornada que será desenvolvida.

Os requisitos V6 e as tasks V1 permanecem preservados. O roteiro direciona a adequação do código existente; as regras e pendências continuam sendo conferidas na V6.

## Diagnóstico que fundamenta as entregas

**[Abrir o diagnóstico comparativo do MVP do estágio](../../diagnostico/comparativo-mvp-estagio-v1.md)**

Documento separado para orientar a revisão do código existente: o que reaproveitar, ajustar, construir e verificar antes das próximas entregas. Inclui a comparação dos **53 requisitos funcionais e 12 não funcionais**, **16 achados com evidências** e os resultados das verificações locais.

Para a reunião da equipe, comece pela conclusão, revise os achados prioritários e consulte a sequência de desenvolvimento proposta. A matriz permite localizar cada requisito e sua tarefa relacionada. O diagnóstico complementa os requisitos V6, que permanecem preservados.

## Comece por aqui

1. Leia a [visão do projeto](../../visao/visao-do-projeto.md).
2. Consulte o [levantamento de requisitos do MVP — V6](../../requisitos/requisitos-mvp-v6.md), documento consolidado atual para validação da equipe.
3. Use a seção **Pendências de decisão** da V6 para identificar as questões ainda abertas.
4. Leia o [diagnóstico comparativo do MVP do estágio](../../diagnostico/comparativo-mvp-estagio-v1.md), com evidências do frontend/backend, resultados locais e adequações necessárias.
5. Use as [tasks direcionadas de adequação e reativação](tasks-adequacao-reativacao-mvp-v1.md) para planejar mudanças no código existente.
6. Consulte as [tasks de desenvolvimento do MVP V1](tasks-desenvolvimento-mvp-v1.md) para as histórias e os critérios funcionais originais vinculados ao roteiro.

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
    ├── planejamento/
    │   ├── tasks-desenvolvimento-mvp-v1.md
    │   ├── tasks-adequacao-reativacao-mvp-v1.md
    │   └── rotina-de-reunioes.md
    ├── diagnostico/
    │   └── comparativo-mvp-estagio-v1.md
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
| `docs/planejamento` | Tasks por perfil, entregas, dependências e decisões para refinamento |
| `docs/diagnostico` | Comparação do código existente com o escopo atual, evidências e verificações |
| `docs/historico` | Versões anteriores e planejamento original, preservados para rastreabilidade |

## Documentos

| Documento | Finalidade |
|---|---|
| [Visão do projeto](../../visao/visao-do-projeto.md) | Problema de negócio e solução proposta |
| [Referências](../../visao/referencias.md) | Fontes e inspirações reunidas pelo projeto |
| [Requisitos MVP V6](../../requisitos/requisitos-mvp-v6.md) | 53 RF, 12 RNF, regras, critérios BDD, diagramas, comparativo e pendências |
| [Tasks de desenvolvimento MVP V1](tasks-desenvolvimento-mvp-v1.md) | 93 tarefas por perfil: diagnóstico, funcionalidades, qualidade e decisões; cobertura dos 53 RF e 12 RNF |
| [Tasks de adequação e reativação MVP V1](tasks-adequacao-reativacao-mvp-v1.md) | 27 pacotes direcionados ao código existente: retrabalho, ajustes, construção e validação; rastreabilidade com diagnóstico, requisitos e tasks originais |
| [Rotina de reuniões](../../planejamento/rotina-de-reunioes.md) | Agenda semanal com Simon e com a equipe tech; horários e informações a confirmar |
| [Diagnóstico comparativo do MVP do estágio V1](../../diagnostico/comparativo-mvp-estagio-v1.md) | Comparativo dos 53 RF e 12 RNF; 16 achados, build do frontend, testes e reproduções locais do backend |
| [Levantamento V4](../levantamento-requisitos-v4.md) | Catálogo anterior e priorização |
| [Levantamento V5](../levantamento-requisitos-v5.md) | Revisão anterior da presença por GPS |
| [Backlog V2](../backlog-v2.md) | Prioridades e entregas declaradas no planejamento anterior |
| [Plano de tarefas e OKR V1](../plano-tarefas-okr-mvp-v1.md) | Decomposição anterior de tarefas, metas e prazos |

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

</details>
