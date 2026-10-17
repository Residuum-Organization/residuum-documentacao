# Residuum — handoff da experiência do morador

Data: 10/10/2026. Base funcional: requisitos MVP V6. Decisões de interface aprovadas pelo solicitante nesta sessão. A validação com moradores ainda não ocorreu.

## Entregas e acesso

- [Arquivo Figma](https://www.figma.com/design/baSbCELQOjRlof8fZvWZCe/Residuum?node-id=3-5): fundamentos, componentes, telas nativas e conexões de protótipo. Os frames originais e o texto existente foram preservados.
- Frontend: checkout local em `tmp/morador-v6`, branch `codex/morador-v6-ui`, derivado do frontend `4f41b139ba9871c92a5c5a72ca2f9d98ba6af164`.
- Entrega de código: commit local `f2887b8`; [patch do frontend](artefatos/morador-v6-frontend.patch) disponível para revisão/aplicação sobre a base indicada. A branch não foi publicada.
- Demonstração: iniciar o Vite e acessar `/demo`. Atalho de revisão visual: `/demo/inicio?preview=1`. O parâmetro só funciona na demonstração.
- Produção: `/morador` exige autenticação e informa a integração pendente. Não há fallback automático de API para fixtures. Cadastro público legado de moradores e pontos foi bloqueado até o contrato de convites/administração.
- O backend não foi alterado, a aplicação não foi implantada e nenhuma operação real de recompensa foi realizada.

## Público e hipótese de uso

Moradores de condomínios piloto, com diferentes níveis de familiaridade digital, usando principalmente o celular. A hipótese de trabalho é que precisam saber o que separar, onde entregar e quando os pontos foram realmente creditados. Nenhuma entrevista foi realizada para confirmar essa hipótese.

**Proto-persona:** Marina, moradora que acumula algumas embalagens durante a semana. Quer resolver o descarte durante um trajeto habitual; evita formulários longos e precisa de orientação quando GPS ou câmera falham. Nome e comportamento são ilustrativos, não representam pesquisa concluída.

| Momento | Necessidade | Atrito a investigar | Resposta da interface |
|---|---|---|---|
| Entrar | Entender o convite e acessar | Convite expirado ou acesso confuso | Cadastro por convite, erro e recuperação |
| Identificar | Poupar preenchimento | Scanner/nota sem resultado | Revisão e entrada manual disponíveis |
| Preparar | Saber quais unidades levar | Confusão entre unidades e kg | Quantidade inteira, PET/alumínio, sem peso estimado |
| Escolher | Evitar deslocamento inútil | Ponto fechado, lotado ou incompatível | Disponibilidade e materiais antes da rota |
| Chegar | Conseguir comprovar presença | GPS negado, impreciso ou antigo | Nova leitura no local, erro recuperável |
| Concluir | Confiar no resultado | Sucesso aparente ou repetição | Operação única e 10 pontos somente após conclusão |
| Usar pontos | Entender custo e condição | Saldo insuficiente ou regra escondida | Detalhe, confirmação de débito e comprovante |

## Jornada e regras aprovadas

1. **Registrar:** identificar → revisar nome, material e unidades → guardar no estoque. Sem crédito de pontos.
2. **Descarte rápido:** identificar → revisar → escolher um ponto → abrir rota em outra aba → obter GPS novo ao chegar → confirmar → resultado → Home/Loja/histórico.
3. **Do estoque:** selecionar quantidades até o limite disponível → escolher ponto → GPS → confirmar. Baixa apenas das unidades escolhidas.
4. **Recompensas:** Loja → condições/validade/custo → confirmação explícita → débito e aquisição consistentes → Minhas recompensas.

O rascunho rápido permanece **somente na memória do fluxo**. Cancelar, navegar para outra área, recarregar ou fechar a aba o elimina; não converte os itens automaticamente em estoque. A abertura da rota em uma aba externa conserva o fluxo. Ao retornar, o GPS anterior é invalidado. Falhas recuperáveis preservam os itens enquanto o usuário continua no fluxo.

Aceitar apenas garrafas PET e latas de alumínio, com unidades inteiras positivas. Um ponto precisa aceitar todos os materiais; não há divisão automática. Fechado, lotado e temporário expirado bloqueiam a escolha. A cooperativa registra peso real em outra operação.

Cada descarte concluído credita **10 pontos básicos por operação**, independentemente da quantidade. Bônus é separado e depende da confirmação da elegibilidade pelo servidor. Abrir campanha ou participar não credita bônus automaticamente. As regras comerciais reais permanecem pendentes.

## Responsabilidades dos outros perfis

| Perfil | Fluxo e responsabilidade | Navegação proposta | Limites |
|---|---|---|---|
| Responsável pelo ponto | Acompanhar estoque/ocupação → sinalizar necessidade → solicitar coleta ao administrador → acompanhar andamento | Visão geral, Estoque do ponto, Solicitações, Histórico, Perfil | Não atribui cooperativa nem credita recompensa básica por pesagem |
| Cooperativa | Receber solicitação atribuída → aceitar → consultar agenda/rota → registrar andamento → registrar material e peso real → acompanhar pagamento | Solicitações, Agenda/rota, Coletas, Pesagens, Financeiro, Perfil | Não decide encaminhamento administrativo nem converte unidades pessoais em kg |
| Administrador | Gerenciar acessos/convites/pontos → receber necessidade → escolher cooperativa e agendar → acompanhar coleta → confirmar pagamento nas condições aprovadas → gerir campanhas/vouchers/sorteios | Operação, Pontos, Coletas, Pessoas/convites, Recompensas, Financeiro, Relatórios | Pagamento só é confirmado após resultado do provedor; regras e permissões precisam de validação |

Estas áreas foram documentadas. As telas operacionais completas não foram reconstruídas neste ciclo. RF-MVP-035–043 orientam a divisão de operação; acessos e cadastro são RF-MVP-001–008, 031–038; demais capacidades administrativas seguem a V6.

## Tokens

| Token | Valor | Uso |
|---|---|---|
| `--r-primary` | `#1A2C71` | Ações principais e marca; branco 12,78:1 |
| `--r-primary-dark` | `#121D4D` | Hover principal |
| `--r-action` | `#15803D` | Confirmação; branco 5,02:1 |
| Accent da marca | `#2EA44F` | Decorativo; branco 3,21:1, inadequado para texto normal |
| `--r-text` | `#111827` | Conteúdo principal |
| `--r-muted` | `#5F6B7A` | Conteúdo secundário; branco 5,43:1 |
| `--r-surface` / white | `#F7FAF9` / `#FFFFFF` | Fundo/cartões |
| `--r-border` | `#D6DCE5` | Separadores decorativos; controles usam borda mais escura |
| `--r-danger` | `#B42318` | Erro com mensagem textual |
| Tipografia | Inter 12/14/16/20/24/32 | Corpo 16; títulos responsivos 28/32; microtexto decorativo 10/11 |
| Espaçamento | 4/8/12/16/24/32/48 px | Ritmo principal; 20 px no contêiner móvel |
| Raios | 8/12/16/20/24/full | Campos, controles, cartões e avatares |
| Alvo interativo | mínimo 44 × 44 px | Botões, navegação e quantidades |

Figma usa primitivas e aliases semânticos; os nomes de variável têm correspondência CSS. Inter é servida localmente por `@fontsource/inter`.

## Componentes, estados e responsividade

| Nível | Componentes | Estados/contrato |
|---|---|---|
| Átomos | Button, input/select, ícone Lucide, texto | Default, hover, foco, disabled, loading; variantes principal, secundário, confirmação e perigo |
| Moléculas | Field, Quantity, Card, Notice, cartão de ponto/oferta | Label associado; erro com `aria-invalid`/`aria-describedby`; limites inteiros; impedimento explicado |
| Organismos | Cabeçalho, navegação, scanner, revisão, lista, modal | 5 destinos móveis; rota ativa; foco preso no modal; Escape e retorno ao acionador |
| Páginas | Acesso, Home, registro, estoque, ponto/GPS, confirmação, atividade, Loja e perfil | Conteúdo rolável, sem perder ações; feedback de falha recuperável |

Mobile: 390×844, margens 20 px, navegação inferior com Início/Mapa/Estoque/Loja/Perfil. Reflow adicional em 320 px. Tablet: 834×1194, sidebar compacta de 200 px. Desktop: 1440×1024, sidebar de 240 px e grade de destaque. Sair fica no Perfil. Modais ficam acima da navegação e podem rolar em alturas reduzidas.

## Rastreabilidade das telas

| Tela/fluxo | RF-MVP | Rota demonstrativa |
|---|---|---|
| Convite/cadastro | 001–004 | `/demo/cadastro` |
| Acesso/saída/recuperação | 005–006 | `/demo/acesso`, `/demo/recuperar`, Perfil |
| Perfil/edição | 007 | `/demo/perfil`, `/demo/editar-perfil` |
| Home / escolha Registrar ou rápido | 009 | `/demo/inicio` |
| Código/câmera/nota/manual/revisão | 010–013 | `/demo/cadastrar`, `/demo/itens` |
| Estoque/seleção parcial | 014 | `/demo/estoque`, `/demo/itens` |
| Lista/mapa/detalhe/rota | 015–017 | `/demo/mapa`, `/demo/ponto` |
| GPS e confirmação consistente | 018–019 | `/demo/presenca` |
| Resultado/histórico/detalhe | 020 | `/demo/concluido`, `/demo/historico`, `/demo/descarte/:id` |
| Básico/bônus/extrato | 021–023 | confirmação e `/demo/extrato` |
| Loja/condições/aquisição | 025–030 | `/demo/loja`, `/demo/oferta/:id`, `/demo/recompensas` |

Metas de campanha (024), adesão real, publicação comercial e todas as garantias transacionais do servidor dependem da API e das PD correspondentes. A demonstração não conclui esses requisitos em produção.

## Contratos para desenvolvimento

Não publicar novos endpoints inferidos. Negociar o contrato versionado com backend e confirmar o suporte das capacidades antes de habilitar escrita. As rotas legadas de transferência e pontuação não garantem a V6.

| Capacidade | Entrada mínima | Resultado/garantia requerida |
|---|---|---|
| Convite | Token opaco, dados aprovados, identificador da operação | Validar expiração/uso/limite e consumir junto com criação, sem duplicação |
| Produto/nota | Código/chave, origem | Itens candidatos com nome/material/unidades e confiança; revisão obrigatória; erro sem crédito |
| Estoque | Nome, material enum `pet/can`, quantidade inteira, versão do registro | Criar/editar/remover unidades sem recompensas; conflito explícito |
| Pontos | Localização se consentida, materiais, horário | Estado, materiais aceitos, funcionamento e validade temporária reais |
| Presença | Ponto, lat/lng, precisão, instante e política aprovada | Resultado assinado/associado à operação; servidor revalida no descarte |
| Descarte | `operationId`, origem `quick/stock`, itens e quantidades, ponto, GPS fresco | Uma transação: entrega, baixa pessoal se houver, entrada no ponto e básico de 10; resposta com IDs e saldo confirmado |
| Consulta de operação | Mesmo `operationId` após timeout | Confirmada/pendente/falha; retry não cria outro descarte |
| Recompensa | Oferta/versionamento de condições, custo confirmado, `operationId` | Validar saldo/estoque/período e debitar com emissão única; conflito sem débito parcial |
| Atividade | Cursor/limite | Créditos básicos e bônus separados; débito com origem e comprovante |

Erros esperados: convite inválido/expirado/usado/limite; identificação ausente/parcial; estoque mudou; ponto incompatível/fechado/lotado/expirado; GPS negado/impreciso/antigo/distante; falha de rede; operação pendente; saldo insuficiente; recompensa esgotada; termos mudaram. Sucesso só aparece com resposta confirmada. O ID de operação precisa ser conservado nos retries; os efeitos também precisam ser idempotentes no servidor, não apenas no botão.

Fixture GPS: raio 100 m, precisão até 60 m, idade máxima 30 s. Estes valores **não são política de produção**. As coordenadas/endereço, saldo inicial de 30, estoque inicial, códigos de identificação, convite, ofertas, prazos e bilhetes são fictícios. Em reload a demonstração reinicia; não conserva saldo real.

## Heurísticas e acessibilidade

1. Status visível: etapa, verificação, loading, impedimento e resultado explícitos.
2. Linguagem do morador: embalagens/unidades, sem pedir kg no descarte.
3. Controle: voltar, revisar, cancelar, sair; explicar perda do rascunho.
4. Consistência: componentes e cinco destinos estáveis.
5. Prevenção: limites de estoque e bloqueio de ponto/saldo inválidos.
6. Reconhecimento: resumo visível antes da entrega e do débito.
7. Eficiência: manual disponível quando scanner/nota falham; caminho rápido sem estoque obrigatório.
8. Foco visual: uma ação principal por etapa.
9. Recuperação: mensagens concretas, retry e preservação dos dados do fluxo.
10. Ajuda contextual: preparação de embalagem, GPS, custo e condições no momento da decisão.

Contraste foi calculado e verificado por axe-core nos estados exercitados. Navegação por teclado, Escape, foco dentro do modal e retorno ao acionador foram testados. A avaliação humana com leitor de tela, a compreensão das mensagens e o desempenho do scanner em dispositivos reais ainda precisam ser realizados. Não se declara certificação global WCAG.

Referências: [contraste de texto WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), [contraste não textual](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html), [reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html), [padrão de diálogo](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

## Validação e próximos passos

Os testes técnicos e capturas ficam em `tmp/morador-v6/docs/ux/evidence`; regras em `tests/model.test.mjs`, navegador em `tests/resident.e2e.mjs`. O resumo final de evidências fica em [validação](02-validacao.md). Scripts de testes reproduzíveis estarão no package.json do frontend.

O [roteiro de teste com moradores](03-teste-com-usuarios.md) está pronto. A meta é pelo menos 4 de 5 moradores concluírem a interação digital de três embalagens em até 2 minutos, excluindo deslocamento físico. Até a sessão real, a usabilidade permanece hipótese.

## Manutenção no Figma

1. Abra o arquivo e localize `03 · Fundamentos`, `04 · Componentes` e frames `05 · ...`.
2. Para novo contêiner, crie um Frame (`F`) e adicione Auto Layout (`Shift+A`). Use direção vertical, gap 24 px e padding 20 px no mobile.
3. Insira instâncias pela aba Assets. Use a variante apropriada; evite desanexar Button/Field/navegação.
4. Para novos campos, largura Fill Container; controle com 48 px de altura e label acima. Inclua erro textual abaixo.
5. Selecione fill/stroke/gap/radius e vincule a variável correspondente. Reuse Inter; use body 16 px e título 28/32 px.
6. Em Prototype, conecte a ação principal com `On click → Navigate to`, sem animação necessária. Mantenha ramos de erro, revisão e cancelamento.
7. Verifique os três tamanhos e o frame de erro antes do handoff. Atualize o manifesto de IDs e a matriz RF quando adicionar telas.
