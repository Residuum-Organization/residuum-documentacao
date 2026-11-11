# Pesquisa — provedores para pagar a cooperativa

[Voltar ao índice de pesquisas](README.md)

> **Estado:** revisão · **Dono:** Produto, Financeiro e Tecnologia · **Pesquisado em:** 11/11/2026 (busca na internet)
> **Pergunta ([PD-015](../01-planejamento/decisoes/pd-015.md), [PD-016](../01-planejamento/decisoes/pd-016.md)):** qual provedor permite que o administrador pague a cooperativa por API dentro do Residuum?
> **Cuidado:** foram vistas as páginas de documentação, **sem contratar nem testar**. Preços e regras mudam; **nenhum valor abaixo é definitivo**.

## Resumo

Três provedores oferecem envio de dinheiro por API: **Asaas**, **Efí** e **Mercado Pago**. Os três cobrem o essencial (Pix para terceiros e aviso de resultado), mas **não consegui confirmar os preços de envio** de dois deles. A pergunta mais importante não é técnica: **de onde sai o dinheiro e quem é o pagador** ([PD-016](../01-planejamento/decisoes/pd-016.md)).

## O que o Residuum precisa

Da V6 (RF-044 a RF-046): o administrador **inicia** o pagamento da coleta; o sistema acompanha **confirmação e falha**, separados do estado da coleta; envio não prova recebimento.

## Comparação

| | **Asaas** | **Efí** | **Mercado Pago** |
|---|---|---|---|
| Envia Pix ou TED para terceiros por API | Sim: Pix por chave ou TED; escolhe automático se não informado ([doc](https://docs.asaas.com/reference/transferir-para-conta-de-outra-instituicao-ou-chave-pix)) | Sim: Pix direto para uma chave de qualquer instituição ([doc](https://dev.efipay.com.br/en/docs/api-pix/envio-pagamento-pix/)) | Sim: lote de até 1.000 transferências (Pix, conta bancária ou Mercado Pago) ([doc](https://www.mercadopago.com.br/developers/pt/reference/online-payments/payouts/pix-transaction/post)) |
| Aviso do resultado | `[VERIFICAR]` | Webhook informa sucesso ou falha | Consulta do lote e das transações; resposta inicial 202, pode levar minutos |
| Idempotência / referência própria | `[VERIFICAR]` | `[VERIFICAR]` | O integrador envia sua referência |
| Cancelar | `[VERIFICAR]` | `[VERIFICAR]` | Transação agendada, com 12 horas de antecedência |
| Custo de envio | Página de preços cita transferências Pix gratuitas e 30 gratuitas por mês ([preços](https://www.asaas.com:443/precos-e-taxas)) `[VERIFICAR no contrato]` | **Não encontrado** | **Não encontrado** |
| Observação | Documentação em português e inglês | Exige escopo `pix.send` e webhook associado à chave pagadora; limites iniciais por conta | Disponível a contas Mercado Pago; split 1:N só para carteira assessorada |

## Pix para empresa

O Banco Central **permite que instituições cobrem pessoas jurídicas** no envio e no recebimento de Pix. Bancos tradicionais cobram valores variados; por exemplo, uma reportagem cita 0,99% no envio no Banco do Brasil, com mínimo de R$ 1 e máximo de R$ 10 ([Serasa](https://www.serasa.com.br/minhas-contas/blog/taxa-pix-para-cnpj/)) `[VERIFICAR: dado de outra instituição, pode estar desatualizado]`.

## Perguntas que decidem o provedor

| Pergunta | Quem responde |
|---|---|
| De onde vem o dinheiro? Quem é o **pagador** (a empresa do projeto, patrocinador, ponto)? | Idealizador / financeiro ([PD-016](../01-planejamento/decisoes/pd-016.md)) |
| Quanto se paga por coleta? Por peso, material ou valor fixo? | Idealizador ([PD-015](../01-planejamento/decisoes/pd-015.md)) |
| A cooperativa tem **chave Pix** em nome dela (CNPJ)? | Operação |
| Quantas coletas por mês no piloto? | Produto (define se a tarifa importa) |
| Há exigência de nota fiscal ou recibo para repassar? | Contábil / jurídico `[LACUNA]` |

## Decisão (11/11/2026)

| Pergunta | Resposta |
|---|---|
| Como começa o piloto | **Pagamento manual** com comprovante registrado no sistema; **API depois** |
| Quem paga | **A empresa Residuum** ([PD-016](../01-planejamento/decisoes/pd-016.md)) |
| Como calcular | **Por kg e material** ([PD-015](../01-planejamento/decisoes/pd-015.md)); valores a definir |

## Recomendação para o piloto

1. **Pagamento manual com registro no sistema** nas primeiras coletas: o administrador paga pelo banco e marca "pago" com o comprovante. Zero integração, zero risco financeiro.
2. Enquanto isso, **testar a API do Asaas e do Mercado Pago em ambiente de teste**, que ambos possuem, e pedir tabela de tarifas por escrito às três.
3. Só integrar quando o pagador e o valor por coleta estiverem decididos.

> Aceita em 11/11/2026: a Visão foi ajustada (manual no piloto, API depois).

## O que falta para fechar

- [x] Pagador (Residuum), forma de cálculo (por kg e material) e início manual decididos em 11/11/2026
- [ ] Valor por kg de PET e de lata; chave Pix da cooperativa; coletas por mês; exigência de nota ou recibo
- [ ] Pedir tabela de tarifas de envio de Pix ao Asaas, à Efí e ao Mercado Pago
- [ ] Testar a API em ambiente de teste
- [ ] `[LACUNA]` conferir exigência legal para uma plataforma pagar terceiros (instituição de pagamento ou conta digital de parceiro)
- [ ] Registrar o resultado em [PD-015](../01-planejamento/decisoes/pd-015.md) e [PD-016](../01-planejamento/decisoes/pd-016.md)
