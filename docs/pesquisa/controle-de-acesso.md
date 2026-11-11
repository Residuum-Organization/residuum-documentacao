# Pesquisa — como controlar quantas pessoas entram

[Voltar ao índice de pesquisas](README.md)

> **Estado:** revisão · **Dono:** Produto · **Elaborado em:** 11/11/2026
> **Natureza:** **análise de opções**, sem fonte externa. Parte das regras da V6 (RN-001, RN-002, PD-001, PD-002) e do que o código tem hoje. Os custos e riscos são estimativas de engenharia, não medições.

## Resumo

A equipe quer deixar entrar um número **X** de pessoas e, por ora, libera o acesso por **código**. Existem seis formas de fazer isso. A recomendação é **combinar três**: código compartilhado com limite, um teto geral de contas e uma lista de espera. Todas dependem de **definir o valor de X**.

## Situação hoje

| Item | Estado |
|---|---|
| Regra da V6 | RN-001: cadastro **só por convite**. Individual vale 1 uso; compartilhado tem expiração e limite |
| Decisão de 11/11 | O usuário se cadastra normalmente; o controle está em estudo; por ora, código fornecido |
| Código do backend | **Não há convite**: qualquer pessoa cria conta (achado F06 do módulo morador) |

## Opções

| # | Opção | Como funciona | Controla X? | Esforço | Risco |
|---|---|---|---|---|---|
| 1 | **Código individual** | Cada código vale 1 cadastro | Sim, exato: gere X códigos | Médio | Códigos podem ser repassados antes do uso |
| 2 | **Código compartilhado com limite** | Um código serve para N pessoas, com validade | Sim, por turma ou condomínio | Médio | Se vazar, esgota rápido |
| 3 | **Teto geral de contas** | O sistema recusa novos cadastros ao chegar em X | Sim, global | Baixo | Quem chega depois fica sem aviso |
| 4 | **Lista de espera** | Pessoa deixa contato; a equipe libera em lotes | Sim, manual | Baixo | Exige operação humana |
| 5 | **Lista autorizada** (e-mail ou telefone) | Só entra quem está na lista | Sim, exato | Médio | Trabalho de cadastrar a lista |
| 6 | **Aprovação manual** | Admin aprova cada cadastro | Sim | Baixo no código, alto na operação | Não escala |

## Recomendação

1. **Código compartilhado com limite e validade** (opção 2), um por ponto de coleta ou condomínio piloto. Já está na V6.
2. **Teto geral configurável** (opção 3) como trava de segurança.
3. **Lista de espera** (opção 4) para quem chegar com o teto cheio.

**Por quê:** combina o que a V6 já prevê com uma proteção simples, e deixa cada ponto do piloto com seu próprio grupo, o que ajuda a medir.

## O que precisa ser decidido

| Decisão | Quem |
|---|---|
| Valor de **X** (quantas pessoas no piloto) | Produto |
| Código individual, compartilhado ou ambos | Produto ([PD-001](../01-planejamento/decisoes/pd-001.md), [PD-002](../01-planejamento/decisoes/pd-002.md)) |
| Validade e limite de cada código | Produto |
| Convidados já cadastrados precisam de código? | Produto |

## Ligação com o código

O backend precisaria de uma tabela de convites e de um limite de contas. Os detalhes técnicos estão na ADR-0005 (ciclo de vida da conta), da parte 2 da adequação (PR #6).
