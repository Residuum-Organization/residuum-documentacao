# 7. Regras de negócio consolidadas

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1180 a 1205) em 10/11/2026. Corrija aqui, não na origem.


| Regra | Definição | Requisitos principais |
|---|---|---|
| RN-001 | Cadastro pelo morador exige convite autorizado; exceções administrativas ainda precisam de política | RF-MVP-001 a RF-MVP-004 |
| RN-002 | Convite individual autoriza um cadastro; compartilhado respeita expiração e limite | RF-MVP-001, RF-MVP-002 |
| RN-003 | Materiais iniciais são PET e lata de alumínio | RF-MVP-010 a RF-MVP-013, RF-MVP-034, RF-MVP-043 |
| RN-004 | Registrar embalagem ou importar nota não representa descarte nem concede pontos | RF-MVP-009 a RF-MVP-014 |
| RN-005 | Informações importadas são revisadas; material desconhecido pode ser completado manualmente | RF-MVP-011, RF-MVP-013 |
| RN-006 | Presença para descarte é validada por GPS; não há QR de presença no escopo atual | RF-MVP-018 |
| RN-007 | Material entregue deve ser aceito pelo ponto; seleção não baixa estoque antes da confirmação | RF-MVP-014, RF-MVP-015, RF-MVP-019 |
| RN-008 | Cada descarte concluído gera 10 pontos básicos ao morador uma única vez | RF-MVP-019, RF-MVP-021 |
| RN-009 | Bônus é adicional e vinculado à regra da campanha; acúmulo ainda depende de decisão | RF-MVP-022, RF-MVP-024, RF-MVP-028 |
| RN-010 | Pontos são distintos de dinheiro; cashback financeiro permanece fora do MVP | RF-MVP-021, RF-MVP-025, RF-MVP-026 |
| RN-011 | Pontos e cooperativas são cadastrados pelo administrador, com acessos operacionais vinculados | RF-MVP-008, RF-MVP-031, RF-MVP-038 |
| RN-012 | Responsável pede coleta ao administrador; administrador encaminha à cooperativa escolhida | RF-MVP-037, RF-MVP-039 |
| RN-013 | Cooperativa precisa aceitar a solicitação; alerta de lotação não gera atribuição automática | RF-MVP-036, RF-MVP-040 |
| RN-014 | Plataforma fornece rota planejada e horário previsto; cooperativa registra materiais e pesos | RF-MVP-041, RF-MVP-043 |
| RN-015 | Peso coletado não é peso comprovado de cada embalagem; coleta parcial não zera todo o ponto por inferência | RF-MVP-035, RF-MVP-043 |
| RN-016 | Pesagem da cooperativa não gera novamente recompensa básica ao morador | RF-MVP-021, RF-MVP-043 |
| RN-017 | Pagamento é iniciado pelo administrador dentro da plataforma por API; coleta e pagamento são situações separadas | RF-MVP-044 a RF-MVP-046 |
| RN-018 | Resultado financeiro só é confirmado com evidência do provedor | RF-MVP-046 |
| RN-019 | Campanhas, vouchers e sorteios são geridos pelo administrador; suas condições precisam ser publicadas | RF-MVP-027 a RF-MVP-030 |
| RN-020 | Relatórios para administrador e responsável estão sujeitos ao plano; plano não substitui vínculo e permissão | RF-MVP-049 a RF-MVP-052 |
| RN-021 | Ponto temporário encerrado preserva histórico e materiais remanescentes | RF-MVP-032, RF-MVP-035 |
