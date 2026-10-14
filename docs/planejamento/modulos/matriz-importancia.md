# Residuum — matriz de importância

[Voltar ao documento geral](README.md).

**Eixos escolhidos:** impacto na entrega × urgência. As classificações abaixo são propostas documentais, não estimativas nem decisões definitivas do analista. Responsáveis, datas e ordenação final permanecem a definir.

## Critérios da matriz

- **Impacto alto:** segurança/integridade, bloqueio da jornada ou fundamento marcado P0 na origem. A importância independe de estar na primeira sprint.
- **Impacto moderado:** capacidade necessária ao recorte de negócio/qualidade, sem bloqueio imediato identificado na origem. Não significa dispensável.
- **Impacto baixo no MVP atual:** avaliação de funcionalidade futura sem implementação confirmada, como PD-027. Se o escopo mudar, reavaliar.
- **Urgente:** proposta de resolver agora porque apoia o primeiro recorte do morador, sua segurança/integridade ou uma decisão preparatória necessária. Revisar após confirmar versão, escopo e disponibilidade.
- **Não urgente nesta etapa:** planejar para o perfil/recorte subsequente ou avaliar futuro; não significa que cabe adiar além da deadline.

Se aparecer defeito atual de segurança ou integridade, reclassificar imediatamente conforme evidência, independentemente da etapa de perfil. Uma prioridade P0 comercial não torna toda a Loja urgente antes da jornada principal. Esforço não foi estimado.

| Impacto / urgência | Urgente | Não urgente nesta etapa |
|---|---|---|
| Alto | Refinar e resolver primeiro; manter qualidade | Planejar antes da jornada que depende do item; antecipar se houver risco ativo |
| Moderado | Reservar capacidade para o recorte atual | Ordenar nos próximos recortes conforme objetivo e dependências |
| Baixo | Validar a razão da urgência antes de consumir capacidade | Avaliar futuramente; não incorporar ao MVP automaticamente |

## Matriz das 93 atividades

Vínculos levam à ficha padronizada. Atividades de decisão são trabalho de análise; não são funcionalidades adicionais.

| Atividade | Módulo | Impacto proposto | Urgência proposta | Justificativa |
|---|---|---|---|---|
| [TSK-MOR-001 — Cadastrar morador por convite](m01.md#tsk-mor-001) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002, PD-003, PD-022. |
| [TSK-MOR-002 — Autenticar e encerrar sessão](m01.md#tsk-mor-002) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002, PD-003, PD-023. |
| [TSK-MOR-003 — Recuperar acesso](m01.md#tsk-mor-003) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003. |
| [TSK-MOR-004 — Consultar e editar perfil](m01.md#tsk-mor-004) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003. |
| [TSK-ADM-001 — Gerenciar convites individuais](m01.md#tsk-adm-001) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002. |
| [TSK-ADM-002 — Gerenciar convites compartilhados](m01.md#tsk-adm-002) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001, PD-002. |
| [TSK-ADM-003 — Cadastrar morador pela administração](m01.md#tsk-adm-003) | M01 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-002, PD-003, PD-022. |
| [TSK-ADM-004 — Administrar acessos e vínculos](m01.md#tsk-adm-004) | M01 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002, PD-003, PD-023. |
| [TSK-MOR-005 — Disponibilizar Registrar e Descarte rápido](m02.md#tsk-mor-005) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-MOR-006 — Identificar produto por código de barras](m02.md#tsk-mor-006) | M02 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004. |
| [TSK-MOR-007 — Importar itens de nota fiscal](m02.md#tsk-mor-007) | M02 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004, PD-005, PD-022. |
| [TSK-MOR-008 — Cadastrar resíduo manualmente](m02.md#tsk-mor-008) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-MOR-009 — Revisar itens antes da inclusão](m02.md#tsk-mor-009) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-005. |
| [TSK-MOR-010 — Manter estoque e selecionar quantidades](m02.md#tsk-mor-010) | M02 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-MOR-011 — Consultar pontos próximos compatíveis](m03.md#tsk-mor-011) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007. |
| [TSK-MOR-012 — Consultar detalhes do ponto](m03.md#tsk-mor-012) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007, PD-009, PD-019. |
| [TSK-MOR-013 — Encaminhar morador à navegação externa](m03.md#tsk-mor-013) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006, PD-007. |
| [TSK-MOR-014 — Validar presença por GPS](m03.md#tsk-mor-014) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-008, PD-027. |
| [TSK-MOR-015 — Confirmar entrega e movimentar estoques](m03.md#tsk-mor-015) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006, PD-009. |
| [TSK-MOR-016 — Exibir confirmação e histórico de descartes](m03.md#tsk-mor-016) | M03 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-MOR-017 — Creditar recompensa básica provisória](m04.md#tsk-mor-017) | M04 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010. |
| [TSK-MOR-018 — Aplicar bônus de campanha](m04.md#tsk-mor-018) | M04 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-019 — Consultar saldo e extrato de pontos](m04.md#tsk-mor-019) | M04 | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010, PD-012. |
| [TSK-MOR-020 — Apurar metas de descarte das campanhas](m04.md#tsk-mor-020) | M04 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-021 — Debitar pontos com consistência](m04.md#tsk-mor-021) | M04 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-MOR-022 — Consultar a loja de recompensas](m05.md#tsk-mor-022) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-MOR-023 — Consultar detalhes e condições da campanha](m05.md#tsk-mor-023) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-024 — Administrar e participar de campanhas](m05.md#tsk-mor-024) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-MOR-025 — Administrar e adquirir vouchers](m05.md#tsk-mor-025) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-MOR-026 — Administrar sorteios e registrar participações](m05.md#tsk-mor-026) | M05 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-013, PD-021. |
| [TSK-PON-001 — Editar materiais aceitos](m06.md#tsk-pon-001) | M06 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009. |
| [TSK-PON-002 — Acompanhar estoque e ocupação do ponto](m06.md#tsk-pon-002) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009, PD-014, PD-018, PD-019. |
| [TSK-PON-003 — Sinalizar necessidade de coleta](m06.md#tsk-pon-003) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009, PD-021. |
| [TSK-PON-004 — Solicitar coleta ao administrador](m06.md#tsk-pon-004) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-ADM-005 — Cadastrar e administrar pontos de coleta](m06.md#tsk-adm-005) | M06 | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003, PD-009. |
| [TSK-ADM-006 — Gerir pontos temporários](m06.md#tsk-adm-006) | M06 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-009. |
| [TSK-ADM-007 — Classificar contexto e funcionamento do ponto](m06.md#tsk-adm-007) | M06 | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-009. |
| [TSK-COO-001 — Consultar e aceitar solicitação de coleta](m07.md#tsk-coo-001) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-COO-002 — Fornecer rota e agendamento no painel](m07.md#tsk-coo-002) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-017. |
| [TSK-COO-003 — Acompanhar andamento da coleta](m07.md#tsk-coo-003) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-017, PD-018. |
| [TSK-COO-004 — Registrar materiais e pesos retirados](m07.md#tsk-coo-004) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-018. |
| [TSK-ADM-008 — Cadastrar cooperativa e seus acessos](m07.md#tsk-adm-008) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-003, PD-016, PD-023. |
| [TSK-ADM-009 — Solicitar e agendar coleta administrativamente](m07.md#tsk-adm-009) | M07 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014, PD-015, PD-021. |
| [TSK-ADM-010 — Preparar informações de pagamento](m08.md#tsk-adm-010) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015, PD-016. |
| [TSK-ADM-011 — Iniciar pagamento por API](m08.md#tsk-adm-011) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015, PD-016. |
| [TSK-ADM-012 — Acompanhar confirmação e falhas de pagamento](m08.md#tsk-adm-012) | M08 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-016. |
| [TSK-PON-005 — Consultar relatórios dos pontos](m09.md#tsk-pon-005) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019, PD-020. |
| [TSK-ADM-013 — Disponibilizar visão administrativa da operação](m09.md#tsk-adm-013) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-014 — Exibir gráficos e indicadores](m09.md#tsk-adm-014) | M09 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-020. |
| [TSK-ADM-015 — Representar planos e benefícios de dados](m10.md#tsk-adm-015) | M10 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-016 — Associar contratação e vigência de plano](m10.md#tsk-adm-016) | M10 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-TRA-001 — Autorizar dados por perfil, vínculo e plano](m10.md#tsk-tra-001) | M10 | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-ADM-017 — Armazenar e apresentar imagens e vídeos da loja](m11.md#tsk-adm-017) | M11 | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-021, PD-024. |
| [TSK-TRA-000 — Inventariar a implementação e definir a adequação à V6](transversal.md#tsk-tra-000) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-002 — Plataforma responsiva e compatibilidade](transversal.md#tsk-tra-002) | TRANSVERSAL | Moderado | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-025. |
| [TSK-TRA-003 — Autenticação e autorização](transversal.md#tsk-tra-003) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003, PD-023. |
| [TSK-TRA-004 — Integridade, concorrência e idempotência](transversal.md#tsk-tra-004) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-005 — Resiliência de localização e consulta externa](transversal.md#tsk-tra-005) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004, PD-008. |
| [TSK-TRA-006 — Proteção de dados e privacidade](transversal.md#tsk-tra-006) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-022. |
| [TSK-TRA-007 — Desempenho e experiência](transversal.md#tsk-tra-007) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-025. |
| [TSK-TRA-008 — Disponibilidade, backups e recuperação](transversal.md#tsk-tra-008) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-026. |
| [TSK-TRA-009 — Auditoria e observabilidade](transversal.md#tsk-tra-009) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-022, PD-026. |
| [TSK-TRA-010 — Segurança das integrações](transversal.md#tsk-tra-010) | TRANSVERSAL | Alto | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-TRA-011 — Segurança e desempenho de mídias](transversal.md#tsk-tra-011) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. |
| [TSK-TRA-012 — Padronização e entrega técnica](transversal.md#tsk-tra-012) | TRANSVERSAL | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. |
| [TSK-TRA-013 — Evolução e capacidade](transversal.md#tsk-tra-013) | TRANSVERSAL | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-025. |
| [TSK-DEC-001 — Definir PD-001](decisoes.md#tsk-dec-001) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-001. |
| [TSK-DEC-002 — Definir PD-002](decisoes.md#tsk-dec-002) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-002. |
| [TSK-DEC-003 — Definir PD-003](decisoes.md#tsk-dec-003) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-003. |
| [TSK-DEC-004 — Definir PD-004](decisoes.md#tsk-dec-004) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-004. |
| [TSK-DEC-005 — Definir PD-005](decisoes.md#tsk-dec-005) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-005. |
| [TSK-DEC-006 — Definir PD-006](decisoes.md#tsk-dec-006) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-006. |
| [TSK-DEC-007 — Definir PD-007](decisoes.md#tsk-dec-007) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-007. |
| [TSK-DEC-008 — Definir PD-008](decisoes.md#tsk-dec-008) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-008. |
| [TSK-DEC-009 — Definir PD-009](decisoes.md#tsk-dec-009) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-009. |
| [TSK-DEC-010 — Definir PD-010](decisoes.md#tsk-dec-010) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-010. |
| [TSK-DEC-011 — Definir PD-011](decisoes.md#tsk-dec-011) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-011. |
| [TSK-DEC-012 — Definir PD-012](decisoes.md#tsk-dec-012) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-012. |
| [TSK-DEC-013 — Definir PD-013](decisoes.md#tsk-dec-013) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-013. |
| [TSK-DEC-014 — Definir PD-014](decisoes.md#tsk-dec-014) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-014. |
| [TSK-DEC-015 — Definir PD-015](decisoes.md#tsk-dec-015) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-015. |
| [TSK-DEC-016 — Definir PD-016](decisoes.md#tsk-dec-016) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-016. |
| [TSK-DEC-017 — Definir PD-017](decisoes.md#tsk-dec-017) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-017. |
| [TSK-DEC-018 — Definir PD-018](decisoes.md#tsk-dec-018) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-018. |
| [TSK-DEC-019 — Definir PD-019](decisoes.md#tsk-dec-019) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-019. |
| [TSK-DEC-020 — Definir PD-020](decisoes.md#tsk-dec-020) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-020. |
| [TSK-DEC-021 — Definir PD-021](decisoes.md#tsk-dec-021) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-021. |
| [TSK-DEC-022 — Definir PD-022](decisoes.md#tsk-dec-022) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-022. |
| [TSK-DEC-023 — Definir PD-023](decisoes.md#tsk-dec-023) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-023. |
| [TSK-DEC-024 — Definir PD-024](decisoes.md#tsk-dec-024) | DECISOES | Moderado | Não urgente nesta etapa | Relacionada à etapa posterior ou recorte a confirmar; antecipar risco ativo. Pendências: PD-024. |
| [TSK-DEC-025 — Definir PD-025](decisoes.md#tsk-dec-025) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-025. |
| [TSK-DEC-026 — Definir PD-026](decisoes.md#tsk-dec-026) | DECISOES | Alto | Urgente | Fundamento/decisão do primeiro recorte; confirmar bloqueio atual. Pendências: PD-026. |
| [TSK-DEC-027 — Definir PD-027](decisoes.md#tsk-dec-027) | DECISOES | Baixo no MVP atual | Não urgente nesta etapa | Avaliação futura; sem implementação confirmada no MVP. Pendências: PD-027. |

## Recortes técnicos vinculados

Não somar estes recortes novamente às atividades de origem.

| Recorte | Impacto proposto | Urgência proposta | Motivo |
|---|---|---|---|
| TEC-01 — Ambiente e migrações | Alto | Urgente | Base reproduzível para avaliação e persistência |
| TEC-02 — Materiais e unidades | Alto | Urgente | Contrato comum da jornada e dos saldos |
| TEC-03 — Confirmação do descarte | Alto | Urgente | Correção de duplicidade e resultado consistente |
| TEC-04 — Retirada e conciliação | Alto | Não urgente nesta etapa | Preparar antes da cooperativa; antecipar se defeito estiver ativo |
| TEC-05 — Autorização | Alto | Urgente | Restrição de acesso acompanha todas as entregas |
| TEC-06 — Regressões e entrega | Alto | Urgente | Iniciar com a base e acompanhar todas as sprints |

[Abrir fichas técnicas](arquitetura-refatoracao-banco.md).

## Revisão pelo analista/equipe

Confirmar o recorte indispensável, a existência atual dos bloqueios e as horas disponíveis. Usar impacto e urgência junto às dependências para ordenar o backlog. Preencher responsáveis e datas nas fichas; atualizar a proposta quando houver evidência nova. A matriz não autoriza excluir itens nem confirma que todo o backlog cabe até 20/11/2026.
