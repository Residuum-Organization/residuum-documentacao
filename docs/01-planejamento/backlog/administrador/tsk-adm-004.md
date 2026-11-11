# TSK-ADM-004 — Administrar acessos e vínculos

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2347 a 2404) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Administrar acessos e vínculos.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Delegar a operação mantendo limites de responsabilidade. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Fluxo:** localizar ou criar acesso operacional conforme política aprovada; associar responsável ao ponto ou operador à cooperativa; habilitar/desabilitar acesso; manter histórico de alterações.

**Exceções:** um vínculo não autoriza acesso a todos os pontos da rede. Exclusão física de contas e acúmulo de papéis não são definidos. O cadastro da organização não deve produzir uma senha compartilhada entre todos os operadores.

**Regras:**

Regras de origem: RN-011. Conferir texto e situação na V6.

**Exceções:** um vínculo não autoriza acesso a todos os pontos da rede. Exclusão física de contas e acúmulo de papéis não são definidos. O cadastro da organização não deve produzir uma senha compartilhada entre todos os operadores.

**Critérios de aceite:**

- **CA-01:** Dado um responsável vinculado a um ponto, quando acessa o painel, então atua apenas nos pontos autorizados.
- **CA-02:** Dado um acesso desabilitado, quando tenta ação operacional, então a operação é negada.

**Dependências:**

TSK-MOR-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-002, PD-023, PD-003. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-023:** Múltiplos operadores/organizações, acúmulo de perfis, gestão de vínculos e duração/revogação de sessões

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-008; RNF-MVP-001, RNF-MVP-002; RN-011; ficha [TSK-ADM-004 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-001](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-001).

**Casos detalhados e ficha de origem:** [TSK-ADM-004](../../../planejamento/modulos/m01.md#tsk-adm-004).

<a id="tsk-adm-005"></a>
