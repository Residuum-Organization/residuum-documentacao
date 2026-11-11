# ADR-0002 — Vínculo entre usuário e ponto

[Voltar ao índice](README.md)

> **Estado:** proposta · **Origem:** soluções P1/P2 (ponto de coleta) e C2/C3 (cooperativa) · **Depende de:** [PD-023](../../01-planejamento/decisoes/pd-023.md)

## Contexto

`ponto_coleta.cooperativa_id` guarda quem é o dono do ponto **e** a cooperativa. A função `validar_acesso_operacional_ao_ponto` libera `admin` e **qualquer** cooperativa para qualquer ponto; as listagens não filtram. Uma cooperativa vê e altera pontos alheios, e quem cria uma conta de cooperativa (cadastro público) confirma descartes de qualquer ponto. Ver F-01 a F-03, PON-01.

## Decisão

1. Nova tabela `vinculo_operacional (usuario, ponto, papel, ativo, criado_por, encerrado_em)`, com `papel` = `responsavel` ou `cooperativa`. Relação N:N; vínculo encerrado mantém histórico.
2. Novo perfil `responsavel_ponto`; `ponto_coleta` e `parceiro` viram aliases por uma versão.
3. **Permissão = papel + vínculo.** Só `admin` passa direto. Uma única função decide, e as listagens usam um filtro único de escopo.
4. `cooperativa_id` é mantido por uma versão (escrita dupla) e depois removido.
5. Migração com *dry-run* e revisão do administrador dos casos ambíguos, antes de ligar a nova regra por flag.

## Consequências

- **Melhora:** cada organização opera só o que é dela; auditoria de quem tem acesso a quê.
- **Custa:** migração de dados delicada (a coluna hoje aponta para contas de papéis diferentes) e reescrita do menu e das rotas do front.
- **Risco:** ligar a regra antes do preenchimento deixa responsáveis sem acesso.

## Alternativas

- 1:N com `responsavel_id` no ponto: mais simples, não cobre rede de lojas nem turnos.
- Só renomear no front: não corrige a segurança.

## Contenção imediata (sem esperar esta ADR)

Fechar o cadastro público de cooperativa e exigir vínculo em `validar_acesso_operacional_ao_ponto` (PR-C1 da cooperativa).
