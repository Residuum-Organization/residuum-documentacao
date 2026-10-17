# Residuum — roteiro de teste com moradores

**Estado:** preparado; nenhuma sessão com usuários foi realizada. Recrutamento e consentimento ainda pendentes.

## Atividade de validação no modelo da equipe

**Nome da atividade:** Executar e analisar o teste de usabilidade com moradores.

**Objetivo:** verificar se moradores conseguem realizar e compreender a jornada proposta, identificando dificuldades e ações de melhoria.

**Responsável:** A definir pelo analista/equipe. **Data de início:** A definir. **Data de entrega:** A definir (sessões, análise e conclusão após validação).

**Descrição:** preparar ambiente e participantes, conduzir as tarefas abaixo sem orientar o primeiro percurso, registrar resultados reais, analisar dificuldades e repetir tarefas afetadas após correções. Esta atividade é validação transversal do recorte do morador, não uma funcionalidade nova.

**Regras:** usar dados fictícios; consentimento separado para gravação; não incluir deslocamento físico no tempo de interação digital; distinguir conclusão sem ajuda de conclusão assistida; não preencher sessões com simulações.

**Critérios de aceite:** cinco sessões reais registradas, quando a amostra planejada for alcançada; medidas calculadas conforme definições abaixo; avaliar a meta de quatro de cinco pessoas em até 120 segundos de interação digital; dificuldades e intervenções registradas; relatório informa se a meta foi atingida e quais mudanças/retestes são necessários. Produzir relatório não equivale a declarar a usabilidade aprovada; ausência de participantes ou meta não atingida permanece explícita.

**Dependências:** recorte de interface utilizável, recrutamento, consentimento, dispositivos e política de retenção/acesso às observações. Vincular a TSK-TRA-007, ADE-026 e PD-025; não substituir validação de integração real por este teste da demonstração.

**Evidências de entrega:** registros reais por participante, medidas, atritos, análise e resultados de reteste quando necessário. **Evidências produzidas até este registro:** nenhuma sessão humana executada. Executor, data, versão da interface, dispositivo, resultado observado e links de evidência serão preenchidos após execução.

**Referências:** [documento geral das atividades](../../01-planejamento/README.md), [módulo do morador por perfil](../../01-planejamento/06-entregas-por-perfil.md), [evidências e limites anteriores](02-validacao.md).

## Amostra e preparação

Recrutar cinco moradores dos condomínios piloto, incluindo familiaridade digital baixa, média e alta. Sempre que possível, incluir pessoa que usa ampliação/leitor de tela. Usar dispositivos próprios em ambiente acessível. Oferecer alternativa presencial e pausa; não coletar senhas reais, dados fiscais reais ou localização pessoal desnecessária.

Explicar que se testa a interface, não a pessoa. Pedir consentimento separado para gravação; permitir teste sem gravação. Anotar por códigos P01–P05. Definir com a equipe retenção e acesso às observações antes de coletar dados pessoais.

Fixture: `/demo`, três embalagens (2 PET + 1 lata), convite `RESIDUUM-PILOTO`, código `7891234567890`, nota `NOTA-PILOTO`. As rotas e benefícios são fictícios. Para etapa física, usar retorno guiado ao protótipo e “Simular presença no ponto”; não solicitar deslocamento a endereço fictício.

## Condução

1. Perguntar: “Como você costuma separar e descartar suas embalagens? O que mais atrapalha?” Não apresentar a solução antes da resposta.
2. Tarefa principal: “Você tem duas garrafas PET e uma lata e quer entregá-las hoje. Mostre como faria pelo aplicativo.” Não falar os nomes dos botões.
3. Iniciar o cronômetro quando a pessoa começa o caminho rápido. Pausar ao abrir a rota externa; simular chegada/retorno e retomar. Encerrar quando a confirmação aparecer. Excluir o deslocamento físico.
4. Perguntar: “O que aconteceu com as embalagens? Quantos pontos você recebeu? Por quê?” Registrar entendimento, sem corrigir imediatamente.
5. Tarefa alternativa: “Você quer guardar essas embalagens para outro dia.” Verificar expectativa de pontos e diferença entre cadastro e descarte.
6. Estoque parcial: “Leve apenas parte do que está guardado.” Observar reconhecimento dos limites e saldo restante.
7. GPS: apresentar permissão negada; perguntar como continuaria. Depois apresentar ponto lotado/nenhum ponto compatível e observar recuperação.
8. Recompensa: “Escolha um benefício e descubra quanto custa e até quando pode usar.” Observar detalhe, confirmação de débito e Minhas recompensas. Apresentar saldo insuficiente.
9. Encerrar: “O que ficou confuso? Em que momento você desistiria? O que esperava ver?” Pedir avaliação de facilidade de 1 a 7 (SEQ) após cada tarefa.

Evitar ajuda no primeiro percurso. Se a pessoa travar, registrar o ponto e tempo antes de intervir; contar tarefa assistida separadamente. Permitir pensar em voz alta sem exigir relato constante, pois pode aumentar o tempo.

## Critérios de análise

| Medida | Definição | Critério |
|---|---|---|
| Velocidade principal | Identificação/início até rota + retorno/GPS até confirmação | 4 de 5 ≤ 120 s de interação digital |
| Conclusão sem ajuda | Percurso sem instrução do moderador | Registrar número; não confundir com tarefa assistida |
| Compreensão | Explica 10 pontos por descarte e cadastro sem pontos | Registrar fala e erros de modelo mental |
| Recuperação | Entende ação após GPS negado/ponto indisponível | Registrar alternativa encontrada e necessidade de ajuda |
| Uso de pontos | Explica custo, saldo após, condições e emissão | Registrar erros antes de confirmar |
| Facilidade | SEQ 1–7 após tarefa | Informativo; comparar atritos, sem inferência estatística de população |

## Registro de sessão

| Participante | Familiaridade/dispositivo | Tempo digital | Concluiu sem ajuda | Entendeu pontos | Erro/atrito observado | SEQ | Observação |
|---|---|---|---|---|---|---|---|
| P01 | | | | | | | |
| P02 | | | | | | | |
| P03 | | | | | | | |
| P04 | | | | | | | |
| P05 | | | | | | | |

Não preencher resultados com simulações. Após as sessões, ordenar problemas por impacto na conclusão, frequência observada e gravidade. Corrigir os bloqueios, repetir as tarefas afetadas e atualizar design, código e handoff juntos.
