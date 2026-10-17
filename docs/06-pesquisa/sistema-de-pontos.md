# Pesquisa — sistema de pontos e recompensas

[Voltar ao índice de pesquisas](README.md)

## 1. Objetivo

Criar um sistema de incentivo que aumente a recorrência do descarte correto sem gerar uma obrigação financeira descontrolada para o Residuum.

## 2. Proposta de arquitetura

### EcoXP

Pontuação simbólica de experiência para níveis, conquistas, sequência, desafios e ranking futuro. EcoXP **não representa dinheiro nem direito direto a resgate financeiro**.

### EcoPontos

Pontuação de recompensa associada a entregas validadas e campanhas. Pode ser usada para vouchers, descontos, benefícios de parceiros e outras recompensas aprovadas.

EcoPontos precisam de regras de emissão, expiração, estorno e lastro econômico bem definidas.

## 3. Fluxo recomendado

1. Morador registra ou identifica o resíduo.
2. Escolhe um ponto compatível.
3. Realiza o descarte.
4. O descarte é validado.
5. O sistema registra o evento.
6. EcoXP é concedido conforme a ação.
7. EcoPontos são concedidos conforme a regra vigente.
8. O usuário acompanha saldo e histórico.
9. O usuário troca EcoPontos por um benefício disponível.
10. O sistema emite voucher/código único e registra o resgate.

Somente eventos validados devem gerar recompensa.

## 4. Campanhas

Campanhas podem alterar temporariamente a recompensa por material, meta, local, evento, período ou parceria. Toda campanha precisa declarar elegibilidade, início, fim, limite, bônus e condições de uso.

## 5. Financiamento das recompensas

Hipótese principal: parceiros comerciais oferecem benefícios como estratégia de aquisição, relacionamento ou posicionamento ambiental.

Possíveis fontes:

- desconto financiado pelo parceiro;
- item promocional;
- campanha patrocinada;
- verba institucional de educação ambiental;
- orçamento do Residuum, apenas quando houver unidade econômica comprovada.

O sistema não deve assumir equivalência direta de todo ponto com dinheiro.

## 6. MVP sugerido

- pontuação por descarte validado;
- carteira/saldo;
- histórico de créditos e débitos;
- catálogo simples de recompensas;
- resgate;
- voucher com código único;
- campanhas simples com bônus.

Deixar ranking, níveis complexos, cashback e marketplace avançado para depois, salvo necessidade de validação.

## 7. Perguntas em aberto

- Qual evento exatamente valida a entrega?
- Qual é a fórmula definitiva de pontuação?
- EcoPontos expiram?
- Há limite diário/mensal?
- Como funciona estorno em caso de fraude ou erro?
- Quem financia cada tipo de recompensa?
- O parceiro pode limitar estoque e validade?
- Como prevenir criação artificial de descartes?
- Que métricas indicarão se a recompensa aumenta a reciclagem?
