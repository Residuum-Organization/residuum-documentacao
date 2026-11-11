# Índice de telas e protótipos

> **Estado:** esboço · **Dono:** UX · **Atualizado em:** 10/11/2026
> **Fontes:** `docs/ux/` (handoff, validação, Figma ledger), mapas de telas das análises.
> **Lacunas:** protótipos dos perfis responsável, cooperativa e admin.

## Resumo

Só o **usuário** tem protótipo documentado (V6). Os outros perfis têm telas implementadas, mas sem wireframe. Como o formato é `.md`, este índice liga cada tela a **link do Figma, captura e rota**, em vez de embutir desenhos.

## Usuário

| Tela | Rota | Wireframe / captura | Problema conhecido |
|---|---|---|---|
| Landing | `/` | `[LACUNA]` | FAQ promete caridade e ingressos (F22) |
| Cadastro | `/cadastro` | `[LACUNA]` | Sem convite (F06) |
| Início | `/inicio` | `docs/ux/evidence/morador-v6-home-*.png` | — |
| Cadastrar resíduo | `/cadastrar-residuo` | `[LACUNA]` | Oferece materiais fora do MVP (F09) |
| Meu estoque | `/meu-estoque` | `[LACUNA]` | Mostra "+N pontos" (F18) |
| Validação de presença | `/validacao-presenca` | `[LACUNA]` | Trava no passo 2 sem GPS (F08) |
| Mapa | `/mapa` | `[LACUNA]` | Não mostra lotado/fechado (F11) |
| Extrato | `/extrato` | `[LACUNA]` | Mistura pendente e confirmado (F15) |
| Loja / Sorteio / Campanha | `/loja`… | `[LACUNA]` | Bilhete sem confirmação (F17) |
| Recuperar senha | `/recuperar-senha` | `[LACUNA]` | Só mostra aviso (F16) |

## Responsável pelo ponto (desenho proposto)

Dashboard com ocupação por material · materiais aceitos · horários · **Pedir coleta** · histórico. `[LACUNA]` sem wireframe. Hoje usa `/dashboard`, compartilhado com a cooperativa (PON-12).

## Cooperativa (desenho proposto)

Solicitações de coleta (abas por status) · formulário de conclusão por material · rota do dia. `[LACUNA]` sem tela hoje (F-11).

## Administrador

Sorteios, vouchers, campanhas, usuários, pontos, pedidos de coleta, relatórios. `[LACUNA]` sem wireframe; página `/campanha-heineken` será removida (ADM-10).

## Evidências existentes

- `docs/ux/morador-v6-handoff.md`, `morador-v6-validacao.md`, `morador-v6-teste-usuarios.md`
- `docs/ux/morador-v6-figma-ledger.json` e `…manifest.json` `[LACUNA]` converter para tabela `.md`
- Nenhum teste de usabilidade executado foi encontrado `[VERIFICAR]`

## O que falta para fechar

- [ ] Link do arquivo Figma por perfil
- [ ] Capturas atuais de cada tela (para o manual)
- [ ] Fluxo de navegação por perfil (diagrama Mermaid)
