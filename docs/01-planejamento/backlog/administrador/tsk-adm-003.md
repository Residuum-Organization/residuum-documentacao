# TSK-ADM-003 — Cadastrar usuário pela administração

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 2288 a 2346) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Cadastrar usuário pela administração.

**Módulo:** M01 — Acesso, usuários e convites. **Módulos afetados:** M01.

**Objetivo:** permitir criação administrativa de usuários com rastreabilidade.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** administrador autorizado. **Entrada:** dados do usuário conforme RF-MVP-003.

**Fluxo:** abrir cadastro administrativo; informar dados; validar duplicidade; criar o registro; registrar quem realizou a operação. Forma de ativação, entrega de acesso e eventual uso de convites nesse caminho são PD-002 e PD-003.

**Resultado:** usuário cadastrado; sua criação não equivale a consentimento do titular, entrega de credenciais ou login realizado. Não se presume atuação do administrador em descartes do usuário.

**Regras:**

Regras de origem: RN-001. Conferir texto e situação na V6.

**Critérios de aceite:**

- **CA-01:** Dado um administrador autorizado, quando cria um usuário com dados válidos, então o cadastro fica disponível e a autoria é registrada.
- **CA-02:** Dado um perfil sem essa permissão, quando tenta a operação, então a criação é negada.
- **CA-03:** Dado um e-mail já utilizado, quando o cadastro é enviado, então o sistema informa o conflito sem criar conta duplicada.

**Dependências:**

TSK-ADM-004; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-002, PD-003, PD-022. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-002:** Convites valem para usuários existentes e operadores? Cadastro pelo administrador consome convite? Como nasce o primeiro administrador?
- **PD-003:** Campos obrigatórios por perfil, CPF/documentos do ponto, verificação de e-mail, recuperação e habilitação de acesso administrativo
- **PD-022:** Finalidades, dados mínimos, proteção, retenção, compartilhamento e atendimento ao titular; revisão dos relatórios comerciais

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-004; RNF-MVP-001, RNF-MVP-002; RN-001; ficha [TSK-ADM-003 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-002](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-002).

**Casos detalhados e ficha de origem:** [TSK-ADM-003](../../../planejamento/modulos/m01.md#tsk-adm-003).

<a id="tsk-adm-004"></a>
