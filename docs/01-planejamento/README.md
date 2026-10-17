# Residuum — planejamento e atividades


[Guia dos documentos](../README.md) · [Perfis](02-perfis/README.md) · [Módulos](03-modulos/README.md)

**[Documento geral completo das tasks](01-atividades-gerais.md)** · [Sequência de entregas](06-entregas-por-perfil.md)

**Atualização:** 17/10/2026. A documentação preserva 93 identificadores: **66 atividades de execução e 27 registros de decisão**. O geral compila as 66 fichas de execução e aponta para as decisões necessárias. O prazo informado de 20/11/2026 não representa garantia de conclusão de todo o escopo.

## Documentos completos para editar e consultar

| Perfil / fundamento | Fichas | Documento |
|---|---:|---|
| Morador | 26 | [Abrir](02-perfis/01-morador.md) |
| Ponto de coleta | 5 | [Abrir](02-perfis/02-ponto-de-coleta.md) |
| Cooperativa | 4 | [Abrir](02-perfis/03-cooperativa.md) |
| Administrador | 17 | [Abrir](02-perfis/04-administrador.md) |
| Fundamentos compartilhados e qualidade | 14 | [Abrir](02-perfis/05-transversal.md) |

Os perfis organizam a leitura, não separam a arquitetura nem atribuem equipes exclusivas. Os IDs e os módulos M01–M11 permanecem preservados; os arquivos M01–M11 agora são índices para as mesmas fichas. Atividades que atendem mais de um perfil usam referências cruzadas.

Cada perfil tem índice por épicos, histórias, fichas completas e subtarefas preservadas. Os casos de teste ficam em seções expansíveis para facilitar a leitura; nenhum caso foi removido. A estimativa de esforço continua a preencher após refinamento técnico.

## Como trabalhar nas tasks

1. Consultar a ficha no documento do perfil e os fundamentos pertinentes.
2. Conferir regras, critérios, dependências e somente as pendências que afetam execução ou aceite.
3. Preencher responsável, datas, estimativa e sprint no quadro da equipe; os documentos não criam outro controle de status.
4. Desenvolver, revisar e validar; registrar versão, ambiente, executor, data, resultado e evidências.
5. Corrigir e validar novamente quando houver falha; concluir conforme o [fluxo e a definição comum de qualidade](../05-qualidade/01-fluxo-e-qualidade.md).

## Decisões e documentos de apoio

- [Decisões relacionadas às tasks](04-decisoes.md): 26 registros; a aprovação documental não conclui a implementação.
- [Pendências gerais para avaliação posterior](08-pendencias-gerais.md): organização geral e evolução futura, incluindo PD-027. Não são bloqueios automáticos das tasks.
- [Matriz de importância](05-matriz-prioridades.md): propostas de impacto e urgência para as atividades atuais.
- [Arquitetura, refatoração e banco](../03-tecnologia/02-arquitetura-e-banco.md): seis recortes TEC do trabalho existente; não adicionar novamente ao escopo.
- [45 casos integrados](../05-qualidade/02-testes-integrados.md) e [proposta de sprints](07-sprints.md).

## Casos e evidências

Os **228 casos individuais** foram preservados entre fichas de execução (147), decisões relacionadas (78) e avaliação futura (3). Os **45 integrados** complementam a validação. Todos os casos reorganizados continuam planejados; não foram executados nesta reorganização. Capturas de tela não comprovam sozinhas persistência, autorização ou integridade.

[Demonstração do morador](../04-ux/01-morador-v6/02-validacao.md), [diagnóstico anterior](../03-tecnologia/03-diagnostico-mvp-v1.md) e [roteiro de teste com moradores](../04-ux/01-morador-v6/03-teste-com-usuarios.md) mantêm versões e limites próprios.

## Atualização do documento geral

Edite os documentos por perfil, os fundamentos e os arquivos de apoio; não edite manualmente o compilado. Na raiz do repositório:

```text
node scripts/gerar-atividades.mjs
node scripts/gerar-atividades.mjs --check
node scripts/verificar-documentacao.mjs
```

O gerador usa Node.js sem dependências adicionais, valida IDs, casos, referências e links locais e produz o mesmo conteúdo para as mesmas fontes. As decisões detalhadas e as pendências gerais ficam fora do compilado de execução. ADE continua agrupando o mesmo trabalho TSK, sem criar outras 27 entregas.
