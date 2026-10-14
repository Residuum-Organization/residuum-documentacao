# Residuum — guia das regras de negócio

[Voltar ao guia dos documentos](../README.md)

**Catálogo completo e referência de manutenção:** [seção 7 da V6 — RN-001 a RN-021](requisitos-mvp-v6.md#7-regras-de-negócio-consolidadas). Este guia organiza a leitura por assunto; o texto completo, vínculos com RF e critérios permanecem na especificação.

| Assunto | Regras | Síntese para a reunião |
|---|---|---|
| Entrada e convites | RN-001 e RN-002 | Cadastro do morador exige convite; individual permite um cadastro e compartilhado respeita expiração e limite. Exceções precisam de política. |
| Materiais e registro | RN-003 a RN-005 | MVP recebe PET e latas de alumínio; informações importadas são revisadas; registrar ou importar nota não comprova entrega nem concede pontos. |
| Presença e entrega | RN-006 e RN-007 | Presença validada por GPS; material precisa ser aceito pelo ponto; selecionar não baixa estoque antes da confirmação. |
| Recompensas | RN-008 a RN-010 | Cada descarte concluído concede 10 pontos básicos uma vez; bônus depende da campanha; pontos são não monetários e cashback fica fora do MVP. |
| Gestão e solicitação | RN-011 a RN-013 | Administrador cadastra pontos/cooperativas; responsável pede retirada ao administrador, que escolhe a cooperativa; ela precisa aceitar. |
| Execução e estoque | RN-014 a RN-016 | Plataforma fornece rota e horário previsto; cooperativa informa pesos por material; retirada parcial não deve zerar tudo por inferência; pesagem não repete recompensa. |
| Pagamento | RN-017 e RN-018 | Administrador inicia pagamento por API; coleta e pagamento têm situações separadas; confirmação financeira exige evidência do provedor. |
| Loja | RN-019 | Administração gere campanhas, vouchers e sorteios, com condições publicadas. |
| Relatórios | RN-020 | Plano, perfil e vínculo são verificados em conjunto; contratar plano não libera dados de outra organização. |
| Ponto temporário | RN-021 | Encerramento preserva histórico e materiais remanescentes. |

## Decisões posteriores da jornada do morador

Consulte a [decisão de 10/10/2026 na visão](../visao/visao-do-projeto.md#decisão-de-experiência-do-morador--10102026) e o [handoff](../ux/morador-v6-handoff.md#jornada-e-regras-aprovadas): o rascunho do descarte rápido fica na memória do fluxo, a navegação externa abre em outra aba e o retorno exige GPS novo. O handoff também registra quantidades inteiras positivas e condições de escolha do ponto. Essas decisões devem ser lidas com a V6; não significam integração real concluída.

## O que ainda precisa de decisão

Parâmetros GPS, capacidade dos pontos, conciliação de unidades/pesos, modelo definitivo de pontuação, bônus, vouchers, sorteios, exceções da coleta, pagamentos e planos permanecem sujeitos às [pendências da V6](requisitos-mvp-v6.md#12-pendências-de-decisão). Na reunião, diferencie regra definida de detalhe ainda aberto.
