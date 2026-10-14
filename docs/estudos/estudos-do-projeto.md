# Residuum — estudos e diagnóstico

[Voltar ao guia dos documentos](../README.md)

Este documento organiza o estudo já registrado no repositório. Não acrescenta pesquisa externa nem uma nova auditoria do código.

## 1. Contexto e referências de negócio

A [visão do projeto](../visao/visao-do-projeto.md) analisa falta de rastreabilidade, dificuldade de organizar retiradas e baixo incentivo ao descarte. A solução proposta conecta os participantes e registra descarte e coleta.

As [referências de origem](../visao/referencias.md) incluem SINIR/MTR e PNRS como contexto, Méliuz como inspiração de facilidade e incentivo, além de referências sobre coleta sob demanda e pontos. São fontes reunidas pelo projeto; sua presença não comprova integração disponível, viabilidade comercial ou conformidade regulatória. Os links externos não foram revalidados nesta organização.

## 2. Consolidação dos requisitos

A [V6](../requisitos/requisitos-mvp-v6.md) reúne 53 RF e 12 RNF, regras, fluxos, critérios de aceite e 27 pendências. A [comparação das fontes](../requisitos/requisitos-mvp-v6.md#11-comparativo-e-rastreabilidade) mostra a evolução dos documentos anteriores e as mudanças de escopo.

Esse trabalho especifica o comportamento esperado; não comprova implementação ou aprovação de todos os detalhes.

## 3. Estudo da implementação existente

**Documento completo:** [diagnóstico comparativo de 09/10/2026](../diagnostico/comparativo-mvp-estagio-v1.md).

O diagnóstico examinou snapshots do frontend e backend, comparou os requisitos, executou build e testes locais e registrou 16 achados. A classificação dos 53 RF foi: 4 para reaproveitar a base, 34 para ajustar e 15 para construir.

Entre os principais problemas registrados estão dupla movimentação de estoque e crédito, pontuação divergente, acesso operacional excessivo, perda de materiais remanescentes na coleta e inconsistência de materiais/unidades. A recomendação documentada é evoluir a base existente por capacidade.

| Para apresentar | Onde abrir |
|---|---|
| Conclusão e limites | [Seção 1](../diagnostico/comparativo-mvp-estagio-v1.md#1-conclusão-e-limites) |
| Bases reaproveitáveis | [Seção 2](../diagnostico/comparativo-mvp-estagio-v1.md#2-bases-que-vale-preservar) |
| Achados e evidências | [Seção 3](../diagnostico/comparativo-mvp-estagio-v1.md#3-achados-prioritários) |
| Comparação de todos os requisitos | [Seção 4](../diagnostico/comparativo-mvp-estagio-v1.md#4-comparativo-com-os-requisitos-e-tarefas) |
| Verificações locais realizadas | [Seção 5](../diagnostico/comparativo-mvp-estagio-v1.md#5-verificações-executadas) |

O estudo não examinou produção, banco real ou alterações posteriores aos commits indicados. Testes locais não comprovam concorrência em PostgreSQL, câmera/GPS em dispositivos reais ou funcionamento de integrações externas.

## 4. Experiência do morador

O [handoff V6](../ux/morador-v6-handoff.md) registra a jornada, decisões de interface e entrega demonstrativa. A [validação técnica](../ux/morador-v6-validacao.md) documenta as verificações; o [plano de teste com moradores](../ux/morador-v6-teste-usuarios.md) orienta a pesquisa ainda pendente. A persona é uma hipótese ilustrativa, não resultado de entrevistas.

A [V2 no Lovable](../ux/residuum-v2-lovable-status.md) tem testes exploratórios limitados e construção parcial. Esses registros não substituem homologação do produto.

## 5. Consequência para o trabalho do time

Use os achados para priorizar integridade e acesso, consulte as regras na V6 e encaminhe as decisões abertas antes de completar funcionalidades dependentes. O [roteiro de adequação](../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md) transforma esse diagnóstico em 27 pacotes rastreáveis.
