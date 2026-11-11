# TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3096 a 3154) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Armazenar e apresentar imagens e vídeos da loja.

**Módulo:** M11 — Mídias e comunicação. **Módulos afetados:** M11.

**Objetivo:** Explicar ofertas com imagens e vídeos seguros e utilizáveis. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** permissão administrativa e armazenamento disponível. **Fluxo:** selecionar imagem/vídeo; validar formato e tamanho aprovados; enviar e vincular à oferta; apresentar mídia aos moradores com descrição textual independente.

**Exceções:** upload falho não deve ser exibido como concluído; arquivo incompatível é rejeitado. O limite anterior de 5 MB não será imposto indistintamente a vídeo. Upload de arquivo versus link externo, formatos, tamanhos, duração e tratamento aguardam PD-024.

**Comunicação transversal:** solicitações e agendamentos devem aparecer nos respectivos painéis. Canal externo adicional, por e-mail ou outro meio, é uma proposta herdada que depende de PD-021 e integração I05; não confundir atualização de painel com entrega de uma mensagem externa.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Exceções:** upload falho não deve ser exibido como concluído; arquivo incompatível é rejeitado. O limite anterior de 5 MB não será imposto indistintamente a vídeo. Upload de arquivo versus link externo, formatos, tamanhos, duração e tratamento aguardam PD-024.

**Critérios de aceite:**

- **CA-01:** Dado vídeo em formato e tamanho aprovados, quando o administrador o adiciona à campanha, então a oferta consegue apresentá-lo aos usuários autorizados.
- **CA-02:** Dado mídia rejeitada ou envio interrompido, quando a ação termina, então o sistema informa a falha e não apresenta um arquivo inexistente como disponível.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-024, PD-021. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-021:** Quais eventos exigem notificação externa? Canal, prazos, reenvio, destinatários e indicador de entrega
- **PD-024:** Formatos, tamanho/duração de vídeo, arquivo ou link, armazenamento e política de publicação de mídia

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-053; RNF-MVP-001, RNF-MVP-002; ficha [TSK-ADM-017 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-021](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-021).

**Casos detalhados e ficha de origem:** [TSK-ADM-017](../../../planejamento/modulos/m11.md#tsk-adm-017).

<a id="compartilhadas"></a>
