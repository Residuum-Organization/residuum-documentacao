# Residuum — proposta de Scrum e sprints

[Abrir o documento geral das tasks](tasks-gerais.md).

**Ordem solicitada:** morador → ponto de coleta → cooperativa → administrador. **Prazo informado:** 20/11/2026. Responsáveis, datas individuais, estimativas e seleção definitiva das atividades serão preenchidos pelo analista/equipe.

## Como interpretar a sequência

A ordem é de foco e demonstração das jornadas, com entregas integradas. Não significa bloquear correções de segurança nem deixar todos os serviços administrativos para o último ciclo. Convites, vínculos, pontos disponíveis e atribuição de coleta precisam existir quando os perfis anteriores os utilizam. Implementar o fundamento mínimo como dependência não antecipa a entrega completa do painel administrativo.

Um módulo pode atravessar mais de uma sprint. Quantidade de fichas não determina capacidade. A equipe seleciona um recorte que consiga desenvolver, revisar, testar e corrigir dentro da sprint, preservando objetivo e qualidade.

## Proposta para planejamento das sprints

Esta é uma sequência de objetivos para refinamento, não uma promessa de concluir todo o perfil em uma semana. Sprints semanais podem ser adotadas, mas duração, início e conteúdo precisam ser confirmados pela equipe. O último ciclo abaixo é de integração e qualidade; as demais sprints também devem produzir trabalho concluído e testado.

| Ciclo proposto | Objetivo | Atividades candidatas e fundamentos | Demonstração esperada |
|---|---|---|---|
| Sprint 1 — Morador | Completar um recorte da jornada principal do morador com dados reais de avaliação | TSK-MOR pertinentes à entrada, registro manual, estoque, ponto, GPS, descarte e pontos. ADE-000, acessos/convites mínimos de ADE-001–003, materiais de ADE-004 e pontos mínimos de ADE-013 | Registrar sem pontos, entregar apenas unidades selecionadas e confirmar uma vez com dez pontos básicos |
| Sprint 2 — Ponto de coleta | Tornar visíveis e operáveis os efeitos da entrega para o responsável | TSK-PON-001–004; configuração/ocupação em ADE-013–014 e pedido em ADE-015; relatório depende do recorte comercial aprovado | Responsável vê estoque, configura materiais permitidos e encaminha solicitação ao administrador |
| Sprint 3 — Cooperativa | Concluir um recorte da retirada atribuída sem perder remanescentes | TSK-COO-001–004, ADE-015–017; atribuição/agendamento mínimo administrativo e regras de conciliação | Cooperativa aceita, consulta agenda/rota e registra pesos; remanescentes e entradas posteriores preservados |
| Sprint 4 — Administrador | Completar o recorte administrativo priorizado e integrar as jornadas | TSK-ADM pertinentes; consolidar fundamentos já entregues; Loja, pagamento, mídia, planos e relatórios entram conforme prioridades, decisões e capacidade | Administrador gerencia o recorte escolhido, acompanha operação e apresenta resultados coerentes |
| Sprint final — Integração e entrega | Validar o conjunto selecionado, corrigir regressões e preparar liberação | ADE-024–026, casos integrados, testes com moradores/dispositivos e documentação; funcionalidades inacabadas permanecem explícitas | Jornada entre perfis demonstrada, critérios cumpridos, evidências e limitações registradas |

Scanner, nota, campanhas, vouchers e sorteios continuam no backlog e entram na etapa de seu perfil quando houver capacidade e decisões aprovadas. Essa tabela não os adia automaticamente nem remove escopo. Se o conjunto indispensável não couber, o analista/equipe precisa registrar a decisão de recorte; não transferir QA para depois da deadline.

## Responsabilidades a combinar

- **Product Owner:** responde pelo objetivo do produto e pela ordenação do backlog. Nome a definir; ser analista não atribui automaticamente essa responsabilidade.
- **Scrum Master:** ajuda a equipe a aplicar Scrum e remover impedimentos. Nome a definir.
- **Developers:** equipe que produz o incremento, incluindo desenvolvimento e testes; organiza quem faz o quê e como. As seis pessoas têm atuação full stack, com disponibilidade e funções a combinar.
- **Analista:** apoia requisitos, critérios, decisões e dúvidas; compatibilizar sua atuação com as responsabilidades acima.

QA participa do detalhamento e da sprint; revisão e validação não são uma fase separada em outra sprint por padrão.

## Eventos e registros

| Momento | Resultado necessário |
|---|---|
| Refinamento contínuo | Atividades claras, decisões/bloqueios visíveis, dependências e casos revisados; não é evento formal adicional do Scrum |
| Sprint Planning | Objetivo da sprint, recorte selecionado e plano da equipe com capacidade e dependências |
| Daily Scrum | Inspeção do progresso para o objetivo e ajuste do plano; 15 minutos para Developers |
| Sprint Review | Inspeção do incremento com interessados e adaptação do backlog; não é o momento exclusivo de QA |
| Sprint Retrospective | Ação concreta para melhorar trabalho, colaboração e qualidade |

Os alinhamentos existentes com idealizador e time podem apoiar essa rotina, mas não substituem automaticamente os eventos. Datas e horários continuam a combinar.

## Critérios de conclusão

Preservar a definição de conclusão documentada: implementação revisada, critérios verificáveis atendidos, permissões e dados coerentes, falhas pertinentes testadas e evidências associadas à versão. Critérios de aceite são específicos da atividade; definição de concluído é a referência comum de qualidade. Simulação pode apoiar descoberta, mas não conclui integração real.

Tarefas de decisão produzem decisão/investigação, não um incremento de produto por si só. Aprovação ou adiamento de uma decisão não torna a funcionalidade dependente concluída.

**Referência do framework:** [Guia oficial do Scrum](https://scrumguides.org/scrum-guide.html). Esta proposta adapta o planejamento ao contexto; adoção efetiva depende dos compromissos e responsabilidades combinados pela equipe.
