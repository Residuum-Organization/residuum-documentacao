# Índice de telas e protótipos

> **Estado:** revisão · **Dono:** UX · **Atualizado em:** 11/11/2026
> **Fontes:** rotas de `frontend/src/App.jsx` (branch local do frontend), `docs/ux/` (handoff, validação, Figma ledger), fichas dos achados.
> **Lacunas:** link do Figma por perfil, capturas atuais, wireframes dos perfis operacionais.

## Resumo

O app tem **42 páginas** (`frontend/src/pages`). Só o **usuário** tem protótipo documentado (V6, em `docs/ux/`). Os demais perfis têm telas implementadas e **sem wireframe**. Como o formato é `.md`, este índice liga cada tela a rota, arquivo e problema conhecido; desenhos ficam no Figma e as capturas em `docs/03-ux/evidencias/`.

Colunas: **Rota** · **Arquivo** (`frontend/src/pages/…`) · **Achado** (ver análises).

## Públicas e acesso

| Rota | Arquivo | Achado |
|---|---|---|
| `/` | LandingPage | FAQ promete caridade, ingressos e pontos por kg (F22) |
| `/welcome`, `/boas-vindas` | WelcomePage, WelcomeOnboardingPage | — |
| `/login` | LoginPage | — |
| `/cadastro` | RegisterPage | sem convite (F06) |
| `/recuperar-senha` | ForgotPasswordPage | só mostra aviso (F16) |
| `/cadastro-ponto-coleta`, `/empresa`, `/confirmacao` | RegisterPontoColetaPage, CompanyPage, ConfirmationPage | cadastro público de ponto, com senha (PON-03) |
| `/acesso-negado`, `/logout` | AcessoNegadoPage, LogoutPage | — |

## Usuário

| Rota | Arquivo | Achado |
|---|---|---|
| `/inicio` | HomePage | protótipo V6: `docs/ux/evidence/morador-v6-home-*.png` |
| `/cadastrar-residuo` | CadastrarResiduoPage | materiais fora do MVP (F09); "Descartar agora" grava no estoque (F10) |
| `/meu-estoque` | MeuEstoquePage | "+N pontos" por item não entregue (F18) |
| `/mapa` | MapPage | não mostra lotado/fechado (F11) |
| `/validacao-presenca` | ValidacaoPresencaPage | trava no passo 2 sem GPS (F08); constante de pontos fixa (F20) |
| `/transferencia-concluida` | TransferenciaConcluidaPage | — |
| `/extrato` | ExtratoPage | soma no cliente (F15) |
| `/loja` (abas Campanhas e Sorteios) | LojaPage | texto "grandes prêmios" (F17) |
| `/sorteios/:id` | SorteioDetalhesPage | compra sem confirmação do débito (F17) |
| `/loja/campanhas/:id` | CampanhaMoradorPage | — |
| `/certificado-coleta` | Certificadodecoleta | `[LACUNA]` sem requisito identificado |
| `/perfil`, `/configuracoes` | ProfilePage, ConfiguracoesPage | — |

## Ponto de coleta e cooperativa (telas compartilhadas)

A V6 separa **responsável pelo ponto** e **cooperativa**; o front junta os dois (PON-12, F-12).

| Rota | Arquivo | Perfis hoje | Achado |
|---|---|---|---|
| `/dashboard` | DashboardScreenPage | ponto, cooperativa, parceiro, admin | mistura perfis |
| `/aprovacao` | AprovacaoPage | cooperativa, ponto, parceiro, admin | unidades em "kg" (PON-10, F-13) |
| `/ponto-coleta-recepcao` | PontoColetaRecepcaoPage | ponto, cooperativa, admin | cooperativa confirma descarte de qualquer ponto |
| `/pontuacao-usuarios` | UserPointsManagementPage | ponto, cooperativa, parceiro, admin | estimativa de pontos no cliente (F-14) |
| `/cooperativa-relatorios` | CooperativaReportsPage | cooperativa, ponto, parceiro, admin | sem plano (F-10) |
| `/ponto-coleta-relatorios` | PontoColetaReportsPage | idem | sem plano |
| `/meus-pontos-operacionais`, `/:pontoId` | OperationalPointsPage | cooperativa, parceiro | — |
| `/entrada-peso` | EntradaPesoCooperativaPage | cooperativa, parceiro | lançamento avulso (F-06) |

**Não existem telas** para: pedir coleta (responsável), aceitar/iniciar/concluir/recusar coleta (cooperativa) e rota do dia (F-11, PON-11, F-09).

## Administrador

| Rota | Arquivo | Achado |
|---|---|---|
| `/admin` | AdminPage | pedidos e aprovações |
| `/admin-sorteios` | AdminSorteiosPage | botão "Encerrar" antecipa apuração (ADM-02); excluir apaga bilhetes (ADM-01); aba de vouchers |
| `/campanhas`, `/nova-campanha`, `/campanhas/:id` | CampanhasPage, NovaCampanhaPage, CampanhaDetalhesPage | excluir apaga adesões (ADM-07) |
| `/campanha-heineken` | CampanhaHeinekenPage | marca e prêmio reais; **remover** (ADM-10) |
| `/usuarios` | PageUsersPage | sem ativar/desativar (ADM-05) |
| `/admin-pontos` | AdminPointsPage | capacidade em "kg" (PON-08) |
| `/admin-relatorios` | AdminReportsPage | sem plano |

## Material de UX existente

| Arquivo | Conteúdo |
|---|---|
| [morador-v6-handoff.md](../ux/morador-v6-handoff.md) | Jornada e regras aprovadas do usuário |
| [morador-v6-validacao.md](../ux/morador-v6-validacao.md) | Validação registrada e seus limites |
| [morador-v6-teste-usuarios.md](../ux/morador-v6-teste-usuarios.md) | Roteiro de teste com usuários |
| [residuum-v2-lovable-status.md](../ux/residuum-v2-lovable-status.md) | Demonstração V2 (parcial) |
| `docs/ux/morador-v6-figma-ledger.json` | Registro do Figma em JSON `[LACUNA]` converter para tabela `.md` |

Nenhum teste de usabilidade executado foi encontrado.

## Telas que mudam pelas decisões de 11/11/2026

| Tela | O que muda | Decisão |
|---|---|---|
| `/cadastro` | Pedir o **código individual**; sem vaga, mostrar aviso e **lista de espera** | PD-001, PD-002 |
| `/cadastro-ponto-coleta`, `/empresa`, `/confirmacao` | **Remover**: só o admin cria ponto | RN-011 |
| Barra de navegação | Botão **+** no centro abre: código de barras, QR da nota, manual | Visão |
| `/cadastrar-residuo` | Aviso **vermelho** a cada falha de leitura; a partir da **2ª**, recomendar o manual; **confirmar o material** (PET ou lata) sempre | PD-004 |
| `/mapa` | Ponto **cheio** fica bloqueado e sugere outro (proposta do estudo) | PD-009 `[DECISÃO]` |
| `/validacao-presenca` | Raio de **100 m** do ponto | PD-008 |
| `/transferencia-concluida`, `/extrato` | Mostrar **10 pontos** só **depois da confirmação** do operador | PD-010 |
| `/loja/campanhas/:id` | Meta do dobro em **descartes**; botão **"Receber pontos"**; avisar quando houver bônus esperando | PD-011 |
| `/admin-sorteios` | Botão **cancelar** (devolve os pontos); sem "Encerrar" antecipado | PD-013 |
| `/admin-pontos` | Campo de **raio do GPS** por ponto; **vínculo de responsáveis** (vários por ponto) | PD-008, PD-023 |
| `/usuarios` | Gerar **códigos de acesso**, ver **vagas** e a **lista de espera**; ajuste manual de pontos com motivo | PD-001, PD-010 |

**Telas novas (não existem):**

| Tela | Perfil | Decisão |
|---|---|---|
| Pedir coleta | Responsável | PD-014 |
| Aceitar, **"a caminho"**, concluir (**parcial**, por material), recusar e cancelar coleta | Cooperativa | PD-014 |
| Registrar **pagamento manual** com comprovante | Admin | PD-016 |

## Identidade visual

Do Levantamento de Requisitos de 16/04/2026 (RNF009), no Google Drive; ver o [comparativo](../00-diagnostico/comparativo-documentos-drive.md).

| Item | Valor |
|---|---|
| Fundo | Branco |
| Cor primária | Azul-marinho `#1F4E79` ("ou similar") |
| Cores de apoio | Cinza e verde |
| Tom | De tecnologia, não de empresa ambiental tradicional |
| Logo | Arquivos oficiais (svg, png, pdf, ai, eps) na pasta de marca do Drive da equipe |

`[VERIFICAR NO CÓDIGO]` se o frontend já usa essas cores como variáveis (design tokens, RNF009 do DLR V4).

## O que falta para fechar

- [ ] Link do arquivo Figma por perfil
- [ ] Capturas atuais de cada tela (para o [manual](../07-usuario/manual-do-usuario.md))
- [ ] Wireframes do responsável, cooperativa e admin (em `.md`, baixa fidelidade)
- [ ] Fluxo de navegação por perfil (Mermaid)
- [ ] `[VERIFICAR]` quem pode ver `/aprovacao` e `/certificado-coleta` (perfis conferidos só em parte)
