# TSK-ADM-002 — Gerenciar convites compartilhados

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2230 a 2287) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Gerenciar convites compartilhados.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** controlar entrada de um grupo por um link com expiração e número máximo de cadastros.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições e entrada:** administrador autorizado; quantidade limite positiva e instante de expiração informados. Fuso e limites permitidos serão definidos em PD-001.

**Fluxo:** gerar link; acompanhar limite, cadastros concluídos e validade; permitir novas inscrições enquanto o convite estiver vigente e houver vagas; incrementar o consumo somente ao concluir cada cadastro.

**Resultado e exceções:** atingir o limite ou a expiração bloqueia novos cadastros. Atualização do contador e criação do usuário devem ser consistentes, inclusive na última vaga. Não se presume renovação automática.

**Regras:**

Regras de origem: RN-001, RN-002. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um link vigente com vagas, quando um cadastro é concluído, então o contador aumenta em uma unidade.
- **CA-02:** Dado um link expirado ou esgotado, quando houver tentativa de cadastro, então a inscrição não é concluída.
- **CA-03:** Dado apenas uma vaga restante e duas confirmações concorrentes, quando forem processadas, então no máximo uma nova conta será criada por esse link.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-001, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-001:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa
- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-002; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-002 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-ADM-002](../../../planejamento/modulos/m01.md#tsk-adm-002).

<a id="tsk-adm-003"></a>
