# TSK-MOR-002 — Autenticar e encerrar sessão

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 170 a 228) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Autenticar e encerrar sessão.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** Acessar os próprios dados e encerrar o acesso com segurança. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Objetivo e fluxo:** permitir login com e-mail e senha, validar a conta, abrir a área correspondente ao perfil e encerrar a sessão quando solicitado. Biblioteca de autenticação não é fixada por este documento.

**Pré-condições:** conta habilitada. **Exceções:** credenciais incorretas, acesso desabilitado e sessão expirada impedem ações protegidas. Uso do convite habilita cadastro, não é uma credencial de login permanente.

**Resultado:** acesso de acordo com perfil e vínculos. Tempo de sessão, múltiplos perfis e situação das contas existentes são PD-002 e PD-023.

**Regras:**

As verificações seguem a especificação de origem; não há RN específica citada nesta ficha. Não inferir regras ou valores ausentes.

**Critérios de aceite:**

- **CA-01:** Dado credenciais válidas e conta habilitada, quando o usuário faz login, então acessa sua área autorizada.
- **CA-02:** Dado uma sessão encerrada, quando se tenta executar uma ação protegida, então nova autenticação é exigida.
- **CA-03:** Dado um morador autenticado, quando tenta funções administrativas, então o acesso é negado também no serviço que processa a operação.

**Dependências:**

Sem dependência funcional anterior específica; verificar fundamentos da etapa; TSK-TRA-000 e controles transversais aplicáveis.

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

**Rastreabilidade:** RF-MVP-005; RNF-MVP-001, RNF-MVP-002; ficha [TSK-MOR-002 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-003](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-003).

**Casos detalhados e ficha de origem:** [TSK-MOR-002](../../../planejamento/modulos/m01.md#tsk-mor-002).

<a id="tsk-mor-003"></a>
