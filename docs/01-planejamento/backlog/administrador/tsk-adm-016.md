# TSK-ADM-016 — Associar contratação e vigência de plano

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3040 a 3095) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Associar contratação e vigência de plano.

**Módulo:** M10 — Planos e acesso comercial a dados. **Módulos afetados:** M10.

**Objetivo:** Vincular acesso comercial ao titular e à vigência contratada. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo condicionado:** após contratação válida pelo processo aprovado, registrar titular, modalidade, situação e vigência aplicável; disponibilizar direitos; ajustar ao fim da validade conforme política. O usuário não definiu se o titular é conta, ponto ou organização.

**Exceções:** não presumir que a API de pagamento de cooperativas também cobra assinaturas. Renovação, inadimplência, pré-pago por tempo/consulta, migração e contratação manual ou automática são PD-019.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Exceções:** não presumir que a API de pagamento de cooperativas também cobra assinaturas. Renovação, inadimplência, pré-pago por tempo/consulta, migração e contratação manual ou automática são PD-019.

**Critérios de aceite:**

- **CA-01:** Dado contratação reconhecida pelo processo aprovado, quando o plano é associado, então os acessos previstos ficam vinculados ao titular e à vigência corretos.
- **CA-02:** Dado direito expirado segundo política aprovada, quando consulta benefício pago, então o acesso respeita a situação vigente.

**Dependências:**

TSK-ADM-015; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-051; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-ADM-016 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

**Casos detalhados e ficha de origem:** [TSK-ADM-016](../../../planejamento/modulos/m10.md#tsk-adm-016).

<a id="tsk-adm-017"></a>
