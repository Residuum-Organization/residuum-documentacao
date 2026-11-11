# TSK-ADM-001 — Gerenciar convites individuais

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2172 a 2229) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Gerenciar convites individuais.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** autorizar um único novo cadastro por link individual.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições e entrada:** administrador autenticado e autorizado; modalidade individual selecionada. Prazo e vinculação ao destinatário dependem de PD-001.

**Fluxo:** administrador gera o convite; o sistema cria um link com identificação não previsível; apresenta seu estado e disponibiliza o link para distribuição pelo administrador; o destinatário acessa o cadastro; após cadastro bem-sucedido, o convite é consumido uma única vez.

**Resultado e exceções:** cadastro falho não consome o convite. Link inexistente, expirado quando houver prazo, ou consumido não autoriza novo cadastro. Duas confirmações simultâneas não podem produzir dois usuários com o mesmo convite.

**Regras:**

Regras de origem: RN-001, RN-002. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um convite individual válido, quando um cadastro é concluído, então o sistema cria um usuário e marca o convite como utilizado.
- **CA-02:** Dado o mesmo convite usado em duas confirmações simultâneas, quando ambas forem processadas, então somente um cadastro poderá consumir esse convite.
- **CA-03:** Dado um link inválido ou já consumido, quando alguém tentar cadastrar-se, então o sistema informa o impedimento sem criar usuário.

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

**Rastreabilidade:** RF-MVP-001; RNF-MVP-001, RNF-MVP-002; RN-001, RN-002; ficha [TSK-ADM-001 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-ADM-001](../../../planejamento/modulos/m01.md#tsk-adm-001).

<a id="tsk-adm-002"></a>
