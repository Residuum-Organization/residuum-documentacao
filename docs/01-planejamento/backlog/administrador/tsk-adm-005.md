# TSK-ADM-005 — Cadastrar e administrar pontos de coleta

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2405 a 2464) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Cadastrar e administrar pontos de coleta.

**Módulo:** M06 — Pontos de coleta e painel do responsável. **Módulos afetados:** M06.

**Objetivo:** Disponibilizar pontos confiáveis para descarte e gestão. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Entrada:** nome, endereço, coordenadas, responsável, contexto do local, tipo fixo/temporário, materiais aceitos, funcionamento e parâmetros de capacidade quando definidos.

**Fluxo:** criar ponto; associar responsável e dados operacionais; habilitar sua disponibilização; editar ou desativar com histórico. O novo fluxo substitui solicitação pública por CPF/CNPJ e fila de aprovação do cadastro.

**Exceções:** cadastro incompleto não deve produzir localização enganosa; desativação preserva histórico. Documentos exigidos para o ponto são PD-003; não exigir CNPJ de todo local residencial por inferência.

**Regras:**

Regras de origem: RN-011. Conferir texto e situação na V6.

**Exceções:** cadastro incompleto não deve produzir localização enganosa; desativação preserva histórico. Documentos exigidos para o ponto são PD-003; não exigir CNPJ de todo local residencial por inferência.

**Critérios de aceite:**

- **CA-01:** Dado cadastro válido realizado pelo administrador, quando o ponto é habilitado, então aparece nas consultas conforme sua disponibilidade e materiais.
- **CA-02:** Dado um morador, quando tenta cadastrar um ponto diretamente, então a função administrativa não é autorizada.
- **CA-03:** Dado desativação, quando o histórico é consultado, então as entregas e coletas anteriores continuam identificando o ponto.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003, PD-009. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-009:** Unidade/cálculo da capacidade e lotação, parâmetros de alertas, regras de funcionamento, tags, edição de horários e saldo ao encerrar evento

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-031; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-005 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-013](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-013).

**Casos detalhados e ficha de origem:** [TSK-ADM-005](../../../planejamento/modulos/m06.md#tsk-adm-005).

<a id="tsk-adm-006"></a>
