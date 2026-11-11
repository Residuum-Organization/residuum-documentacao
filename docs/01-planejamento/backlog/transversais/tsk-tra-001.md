# TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 3174 a 3229) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Autorizar dados por perfil, vínculo e plano.

**Módulo:** M10 — Planos e acesso comercial a dados. **Módulos afetados:** M10.

**Objetivo:** Garantir que benefício comercial não permita consultar dados indevidos. Sem esta entrega, a jornada pode ficar bloqueada ou produzir acesso/efeitos incorretos.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Pré-condições:** sessão válida e matriz de benefícios aprovada. **Fluxo:** verificar perfil; identificar pontos/organizações autorizados; verificar plano e benefício; retornar somente os dados permitidos. A checagem ocorre no serviço que entrega os dados, não apenas na interface.

**Exceções:** pagar por relatório não autoriza dados pessoais identificáveis de toda a rede. Administrador também está sujeito ao plano para relatórios, conforme decisão; privilégios técnicos e operação mínima precisam ser diferenciados em PD-019.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Exceções:** pagar por relatório não autoriza dados pessoais identificáveis de toda a rede. Administrador também está sujeito ao plano para relatórios, conforme decisão; privilégios técnicos e operação mínima precisam ser diferenciados em PD-019.

**Critérios de aceite:**

- **CA-01:** Dado responsável com plano válido, quando solicita dados de ponto sem vínculo autorizado, então a requisição é negada.
- **CA-02:** Dado administrador sem benefício de relatório no plano, quando pede esse relatório, então o privilégio administrativo não libera automaticamente o benefício.

**Dependências:**

TSK-ADM-004, TSK-ADM-015, TSK-ADM-016; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo

**Prioridade de origem:** P0.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-052; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-TRA-001 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022).

**Casos detalhados e ficha de origem:** [TSK-TRA-001](../../../planejamento/modulos/m10.md#tsk-tra-001).

<a id="tsk-tra-000"></a>
