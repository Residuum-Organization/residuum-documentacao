# ADR-0001 — Livro único de pontos

[Voltar ao índice](README.md)

> **Estado:** proposta · **Origem:** solução S1 do módulo morador · **Depende de:** [PD-010](../../01-planejamento/decisoes/pd-010.md)

## Contexto

O saldo (`usuario.pontuacao_total`) é alterado em **6 lugares** do código e a tabela `pontuacao` só guarda pontos e data. Resultado: o descarte credita duas vezes (envio e confirmação), a reversão estorna parte, bônus e ajustes ficam fora do extrato e dois créditos simultâneos podem se sobrescrever. Ver achados F01, F13, F14, ADM-03, ADM-08, ADM-16.

## Decisão

1. `pontuacao` vira o **livro-caixa**: cada lançamento tem **origem** (descarte, campanha, bônus, ajuste, estorno, resgate…), **referência** (qual descarte, qual sorteio), **descrição**, **chave de idempotência** e o **valor de regra vigente** (ex.: 5 pontos por unidade).
2. `usuario.pontuacao_total` passa a ser um **cache**, alterado só por um serviço (`creditar_pontos`, `estornar_lancamento`, `debitar_pontos`) que trava a linha do usuário.
3. O **banco garante**: no máximo 1 crédito por descarte, 1 estorno por lançamento, chave única por usuário e saldo ≥ 0.
4. O descarte credita **uma vez**, na confirmação.
5. O estorno devolve o **valor gravado** no lançamento, não recalcula.

## Consequências

- **Melhora:** saldo explicável; extrato soma igual ao saldo; fim do crédito em dobro.
- **Custa:** migração aditiva, reconciliação dos saldos já inflados (com revisão do produto) e testes em PostgreSQL.
- **Risco:** morador que já gastou pontos creditados em dobro (ver [PD-010](../../01-planejamento/decisoes/pd-010.md)).

## Alternativas

- Corrigir só as 6 pontas sem livro: mais rápido, mas o erro volta.
- Recalcular o saldo sempre a partir dos descartes: perde bônus e ajustes.

## Invariante de teste

`soma(pontuacao.pontos) == usuario.pontuacao_total`, em todo teste que mexe em pontos.
