# TSK-MOR-001 — Cadastrar morador por convite

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 108 a 169) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Cadastrar morador por convite.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** criar acesso do morador sem permitir cadastro público irrestrito.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** convite individual ou compartilhado válido. **Dados herdados:** nome, e-mail, telefone e endereço; obrigatoriedade, CPF e senha aguardam PD-003.

**Fluxo:** abrir o link; verificar disponibilidade do convite; preencher e revisar os dados; apresentar informações de privacidade aplicáveis; validar entradas; criar conta e consumir o convite na mesma conclusão lógica.

**Exceções:** campos inválidos, e-mail já cadastrado e falha de gravação não devem consumir vaga nem duplicar a conta. A política de verificação de e-mail precisa de validação.

**Regras:**

Regras de origem: RN-001. Conferir texto e situação na V6.

**Exceções:** campos inválidos, e-mail já cadastrado e falha de gravação não devem consumir vaga nem duplicar a conta. A política de verificação de e-mail precisa de validação.

**Critérios de aceite:**

- **CA-01:** Dado um convite válido e dados aceitos, quando o morador conclui o formulário, então a conta é criada vinculada ao consumo do convite.
- **CA-02:** Dado uma tentativa sem convite autorizado, quando o formulário é enviado, então o sistema impede a criação da conta.
- **CA-03:** Dado uma falha de validação, quando o cadastro não termina, então o convite mantém sua disponibilidade anterior.

**Dependências:**

TSK-ADM-001, TSK-ADM-002; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-003, PD-001, PD-022, PD-002. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-001:** Prazo do link individual, vinculação ao destinatário, limites do compartilhado, fuso, revogação e política de nova tentativa
- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-003; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-MOR-001 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-MOR-001](../../../planejamento/modulos/m01.md#tsk-mor-001).

<a id="tsk-mor-002"></a>
