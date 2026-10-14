# Residuum — módulos e atividades para desenvolvimento e QA

**[Abrir o documento geral completo das tasks](tasks-gerais.md)** · **[Abrir a proposta de sprints](scrum-e-sequencia.md)**


**Atualização:** 13/10/2026. **Prazo informado:** 20/11/2026; não representa uma estimativa de conclusão de todo o escopo.

Esta edição organiza as 93 atividades existentes no modelo combinado com a equipe. As fichas completas foram preservadas em cada atividade. Responsáveis, datas, estimativas, sprint e situação atual ficam para o analista/equipe preencherem; prioridades herdadas são propostas anteriores, não novas decisões.

## Navegação principal

- [Entregas na ordem morador → ponto de coleta → cooperativa → administrador](entregas-por-perfil.md).
- [Scrum e proposta de sprints](scrum-e-sequencia.md).
- [Matriz de importância: impacto na entrega × urgência](matriz-importancia.md).
- [Arquitetura, refatoração e banco de dados](arquitetura-refatoracao-banco.md).
- [45 casos integrados de validação](testes-integrados.md).

As 93 fichas mantêm seus identificadores. Os seis recortes técnicos decompõem o trabalho existente; não adicionam funcionalidades. Os 228 casos vinculados às fichas incluem verificações documentais de decisões; os 45 casos integrados complementam a validação. Todos os novos casos estão planejados, sem resultado de execução.

## Como utilizar

1. Abrir o módulo e escolher a atividade existente.
2. Conferir regras, critérios, dependências e bloqueios antes de iniciar.
3. Preencher responsável e datas; distinguir envio ao QA de conclusão após aprovação.
4. Desenvolver, revisar e executar os casos planejados em ambiente de avaliação.
5. Registrar resultados e evidências; se houver falha, corrigir e validar novamente.

Acompanhamento continua no quadro existente; estes documentos não criam outro controle independente de status. ADE agrupa as mesmas atividades TSK e não adiciona outras 27 entregas.

## Módulos

| Módulo | Atividades próprias | Documento |
|---|---:|---|
| M01 — Acesso, usuários e convites | 8 | [Abrir](m01.md) |
| M02 — Cadastro de resíduos e estoque | 6 | [Abrir](m02.md) |
| M03 — Mapa, presença e descarte | 6 | [Abrir](m03.md) |
| M04 — Pontuação, saldo e extrato | 5 | [Abrir](m04.md) |
| M05 — Loja, campanhas, vouchers e sorteios | 5 | [Abrir](m05.md) |
| M06 — Pontos de coleta e painel do responsável | 7 | [Abrir](m06.md) |
| M07 — Cooperativas, solicitações e execução de coletas | 6 | [Abrir](m07.md) |
| M08 — Pagamento das coletas | 3 | [Abrir](m08.md) |
| M09 — Administração, indicadores e relatórios | 3 | [Abrir](m09.md) |
| M10 — Planos e acesso comercial a dados | 3 | [Abrir](m10.md) |
| M11 — Mídias e comunicação | 1 | [Abrir](m11.md) |
| TRANSVERSAL — Ambiente, diagnóstico e qualidade | 13 | [Abrir](transversal.md) |
| DECISOES — Decisões e investigação | 27 | [Abrir](decisoes.md) |

## Decisões que afetam os módulos

| Decisão | Módulos afetados | Registro |
|---|---|---|
| PD-001 | M01 | [TSK-DEC-001](decisoes.md#tsk-dec-001) |
| PD-002 | M01 | [TSK-DEC-002](decisoes.md#tsk-dec-002) |
| PD-003 | M01, M06, M07 | [TSK-DEC-003](decisoes.md#tsk-dec-003) |
| PD-004 | M02 | [TSK-DEC-004](decisoes.md#tsk-dec-004) |
| PD-005 | M02 | [TSK-DEC-005](decisoes.md#tsk-dec-005) |
| PD-006 | M02, M03 | [TSK-DEC-006](decisoes.md#tsk-dec-006) |
| PD-007 | M03 | [TSK-DEC-007](decisoes.md#tsk-dec-007) |
| PD-008 | M03 | [TSK-DEC-008](decisoes.md#tsk-dec-008) |
| PD-009 | M06 | [TSK-DEC-009](decisoes.md#tsk-dec-009) |
| PD-010 | M04 | [TSK-DEC-010](decisoes.md#tsk-dec-010) |
| PD-011 | M04, M05 | [TSK-DEC-011](decisoes.md#tsk-dec-011) |
| PD-012 | M04, M05 | [TSK-DEC-012](decisoes.md#tsk-dec-012) |
| PD-013 | M05 | [TSK-DEC-013](decisoes.md#tsk-dec-013) |
| PD-014 | M06, M07 | [TSK-DEC-014](decisoes.md#tsk-dec-014) |
| PD-015 | M08 | [TSK-DEC-015](decisoes.md#tsk-dec-015) |
| PD-016 | M07, M08 | [TSK-DEC-016](decisoes.md#tsk-dec-016) |
| PD-017 | M07 | [TSK-DEC-017](decisoes.md#tsk-dec-017) |
| PD-018 | M06, M07 | [TSK-DEC-018](decisoes.md#tsk-dec-018) |
| PD-019 | M09, M10 | [TSK-DEC-019](decisoes.md#tsk-dec-019) |
| PD-020 | M09 | [TSK-DEC-020](decisoes.md#tsk-dec-020) |
| PD-021 | M05, M06, M07, M11 | [TSK-DEC-021](decisoes.md#tsk-dec-021) |
| PD-022 | Transversal / avaliação futura | [TSK-DEC-022](decisoes.md#tsk-dec-022) |
| PD-023 | M01, M07 | [TSK-DEC-023](decisoes.md#tsk-dec-023) |
| PD-024 | M11 | [TSK-DEC-024](decisoes.md#tsk-dec-024) |
| PD-025 | Transversal / avaliação futura | [TSK-DEC-025](decisoes.md#tsk-dec-025) |
| PD-026 | Transversal / avaliação futura | [TSK-DEC-026](decisoes.md#tsk-dec-026) |
| PD-027 | Transversal / avaliação futura | [TSK-DEC-027](decisoes.md#tsk-dec-027) |

## Testes e evidências

- Cada atividade possui critérios e casos planejados, com pré-condições, ação, resultado esperado e registro de execução.
- [Roteiros integrados desdobrados](testes-integrados.md): complementam os casos individuais e as verificações de qualidade. Não constituem cobertura integral automática.
- [Testes com moradores](../../ux/morador-v6-teste-usuarios.md): roteiro preparado; execução humana permanece pendente.
- [Validação anterior do morador](../../ux/morador-v6-validacao.md): resultados da demonstração e seus limites. Não aprova backend real.
- [Diagnóstico anterior](../../diagnostico/comparativo-mvp-estagio-v1.md): resultados em snapshots e ambiente local; não foram repetidos nesta adequação.
- [Demonstração V2 independente](../../ux/residuum-v2-lovable-status.md): resultados exploratórios e pendências próprios.

Todos os novos registros de casos começam como “Não executado”. Cada evidência produzida deve informar atividade/critério, versão, ambiente, executor, data e resultado observado. Captura de tela sozinha não comprova persistência, autorização ou integridade.

## Decisões posteriores incorporadas

O descarte rápido usa rascunho na memória do fluxo. Cancelar, sair para outra área, recarregar ou fechar a aba elimina os itens, sem inclusão automática no estoque. A rota em outra aba conserva o fluxo e o retorno exige GPS novo. Falhas recuperáveis preservam itens enquanto o usuário permanece no fluxo. A decisão de 10/10/2026 foi incorporada nas fichas e pacotes afetados. PD-006 continua parcial para contratos reais, concorrência e confirmação.

Os parâmetros de GPS da demonstração não são política de produção. Regras comerciais e demais pendências continuam explícitas; nenhuma foi resolvida por inferência.

## Limites e responsabilidades

As seis pessoas atuam como full stack, com funções de análise e QA; disponibilidade e distribuição serão definidas pela equipe. Não foram atribuídos nomes, prazos individuais ou compromissos de sprint. Não foram executados testes nem alterados cartões externos. A definição de conclusão existente continua exigindo critérios verificados e evidências; uma decisão documental não conclui a implementação dependente.
