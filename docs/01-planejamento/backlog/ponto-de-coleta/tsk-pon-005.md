# TSK-PON-005 — Consultar relatórios dos pontos

[Voltar ao módulo](../../../planejamento/modulos/README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/planejamento/modulos/tasks-gerais.md` (linhas 1849 a 1905) em 10/11/2026. Corrija aqui, não na origem.


**Nome da atividade:** Consultar relatórios dos pontos.

**Módulo:** M09 — Administração, indicadores e relatórios. **Módulos afetados:** M09.

**Objetivo:** Obter relatórios dos pontos autorizados conforme plano. Sem esta entrega, a experiência ou operação descrita não pode ser oferecida integralmente.

**Responsável:** A definir pelo analista/equipe.

**Data de início:** A definir pelo analista/equipe (prevista e efetiva).

**Data de entrega:** A definir pelo analista/equipe (previsão de envio ao QA, previsão de conclusão e conclusão efetiva).

**Descrição:**

**Fluxo:** selecionar ponto/período autorizado; consultar descartes, materiais, coletas e pesos medidos disponíveis; apresentar usuários associados aos eventos apenas no nível de detalhe permitido; aplicar limites do plano.

**Exceções:** peso coletado não significa material vendido ou comprado. Expressões como “quantas pessoas passaram” precisam de PD-020: GPS de confirmação não mede visitantes que não registraram eventos. Download CSV/PDF é PD-019, não inclusão automática.

**Regras:**

Regras de origem: RN-020. Conferir texto e situação na V6.

**Exceções:** peso coletado não significa material vendido ou comprado. Expressões como “quantas pessoas passaram” precisam de PD-020: GPS de confirmação não mede visitantes que não registraram eventos. Download CSV/PDF é PD-019, não inclusão automática.

**Critérios de aceite:**

- **CA-01:** Dado ponto autorizado e plano com o relatório, quando consulta um período, então encontra dados correspondentes aos eventos registrados e às unidades indicadas.
- **CA-02:** Dado relatório não incluído no plano, quando solicita acesso, então o sistema informa a restrição sem retornar os dados protegidos.

**Dependências:**

TSK-TRA-001; TSK-TRA-000 e controles transversais aplicáveis.

**Evidências de entrega:**

- **Exigidas:** Versão e ambiente, resultado observado de cada critério, capturas ou registros pertinentes; para operações com efeito, verificar também API, permissões e dados persistidos. Reenvio/concorrência conforme critério e controles relacionados.
- **Comprovadas nesta adequação documental:** nenhuma execução. Registros anteriores têm versões e limites próprios; consultar o guia de evidências.

**Dúvidas e bloqueios:**

PD-020, PD-019. Vincular às fichas TSK-DEC correspondentes. Avançar diagnóstico, interface e regras já confirmadas; manter bloqueados efeitos/parâmetros dependentes até aprovação.

- **PD-019:** Titular do plano, pacotes, preço, vigência, pré-pago por tempo/uso, contratação, cobrança, renovação, dados autorizados, arquivos e acesso operacional mínimo
- **PD-020:** Definir ativo, conectado e aberto; janela temporal, abrangência, visitas versus pessoas únicas e material coletado versus comprado

**Prioridade de origem:** P1.

**Sprint:** A definir pelo analista/equipe. **Situação atual:** A confirmar no quadro e na versão de trabalho; este documento não atualiza status de implementação.

**Rastreabilidade:** RF-MVP-049; RNF-MVP-001, RNF-MVP-002; RN-020; ficha [TSK-PON-005 original](../../../historico/planejamento-anterior-2026-10-13/tasks-desenvolvimento-mvp-v1.md). Pacotes: [ADE-022](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-022), [ADE-023](../../../historico/planejamento-anterior-2026-10-13/tasks-adequacao-reativacao-mvp-v1.md#ade-023).

**Casos detalhados e ficha de origem:** [TSK-PON-005](../../../planejamento/modulos/m09.md#tsk-pon-005).

<a id="cooperativa"></a>
