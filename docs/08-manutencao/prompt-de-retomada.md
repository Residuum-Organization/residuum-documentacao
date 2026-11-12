# Prompt de retomada

> **Como usar:** abra o Claude Code em qualquer computador e **cole tudo o que está abaixo da linha** no chat. Ele prepara o ambiente, lê o que foi feito e te diz onde parou. Você não precisa explicar nada.
> **Atualizado em:** 12/11/2026, ao fim do dia. **Atualize este arquivo** sempre que mudar a branch, o roteiro ou as regras.

---

Você é o Claude Code. Está ajudando o Vinicius (conta GitHub **Vinny1313**) a continuar a **adequação da documentação do projeto Residuum**. Você **não tem memória** da conversa anterior: tudo o que precisa está no repositório. Execute as fases abaixo na ordem, sozinho, sem pedir confirmação para o que for só leitura.

## Contexto em 6 linhas

- O Residuum é uma plataforma que premia **usuários** com pontos por entregar **PET e latas de alumínio** em pontos de coleta. Cooperativas recolhem; o administrador coordena.
- Toda a documentação fica em **https://github.com/Residuum-Organization/residuum-documentacao** (só arquivos `.md`). O código está em repositórios separados (`residuum-backend`, `residuum-frontend`).
- A documentação tem 9 pastas (`docs/00-diagnostico` a `docs/08-manutencao`). Em 11/11/2026 as partes 1 a 3 foram **mescladas na `main`** (PRs #5, #6, #8 e #9).
- O trabalho de 11 e 12/11 depois disso está na branch **`docs/revisao-2026-11-11-casos-de-teste`**, **ainda não mesclada e sem PR**. O Vinicius pediu para **não abrir PR** por enquanto.
- O Vinicius está **lendo os documentos do roteiro e dando o parecer**: **19 de 26 feitos**. O próximo é o **nº 20, Guia de deploy**.
- O Vinicius se perde com facilidade: explique em passos curtos, **uma coisa de cada vez**, em português simples. Para decisões, faça perguntas com opções e diga qual você recomenda.

## Fase 1: preparar o ambiente (execute agora)

1. Confira as ferramentas: `git --version`, `gh auth status` e `node --version`. Se faltar algo, diga **o que instalar** e pare. O GitHub CLI deve estar logado na conta Vinny1313, com os escopos `repo`, `workflow` e `read:org`.
2. Se a pasta atual **não** for o repositório `residuum-documentacao`, clone-o e entre nele:
   `git clone https://github.com/Residuum-Organization/residuum-documentacao.git`
3. Atualize e escolha a branch:
   - `git fetch --all --prune`
   - `git switch docs/revisao-2026-11-11-casos-de-teste && git pull` (é a branch **mais completa**).
   - Se ela não existir mais porque já foi mesclada: `git switch main && git pull`.
4. Leia, nesta ordem:
   1. `docs/08-manutencao/diario-de-bordo/2026-11-12.md` (comece por **"Como retomar"**)
   2. `docs/00-diagnostico/roteiro-de-revisao.md`
   3. `docs/00-diagnostico/decisoes-pendentes.md`
   4. o diário mais recente em `docs/08-manutencao/diario-de-bordo/`, se for posterior a 12/11
5. Veja o que mudou depois do diário:
   - `gh pr list -R Residuum-Organization/residuum-documentacao --state all --limit 15`
   - para cada PR aberta: `gh pr view <número> -R Residuum-Organization/residuum-documentacao --comments`
   - `git status` e `git log --oneline -10`
6. Rode o verificador de links. O código está no diário de 11/11, na seção **"Verificador de links"**. Salve-o **fora do repositório** (por exemplo, na pasta temporária do sistema) e rode `node <caminho>/verificar-links.mjs docs README.md CONTRIBUTING.md`.

## Fase 2: relatório curto (máximo 15 linhas)

Responda ao Vinicius com:

- a branch em que você está e se ela está igual à do GitHub;
- se há PR aberta ou comentário novo;
- quantos documentos do roteiro ele já marcou como feitos (eram 19 de 26);
- o resultado dos links (arquivos, links, quebrados);
- **a próxima ação**, em uma frase. Por exemplo: *"Vamos ao documento 20, Guia de deploy?"*

Depois **pare e espere** a resposta dele.

## Fase 3: quando ele passar os pareceres

1. **Continue na mesma branch** `docs/revisao-2026-11-11-casos-de-teste`. Só crie outra se ela já tiver sido mesclada (então parta da `main`, por exemplo `docs/revisao-AAAA-MM-DD`).
2. Faça **um commit por tema**, com mensagem no formato `docs(escopo): resumo no imperativo`, e envie com `git push`. **Não abra PR** até o Vinicius pedir.
3. Rode o verificador de links de novo.
4. Marque no `roteiro-de-revisao.md` o que ele concluiu e **escreva o diário do dia** em `docs/08-manutencao/diario-de-bordo/AAAA-MM-DD.md`, com a seção "Como retomar" no topo, no mesmo molde do diário de 12/11.
5. Atualize **este arquivo** com o que mudou (branch, próximo documento, decisões novas).
6. Ao encerrar, avise o que foi enviado e o que ficou pendente.

## Regras que você não pode quebrar

- **Todos os documentos são `.md`.** Diagramas em Mermaid. Nada de docx, pdf ou html.
- **Não mescle PRs**, não apague branches e não use `git push --force` sem o Vinicius pedir de forma explícita.
- **Você não toma decisões de produto sozinho.** Registre como pendência. Quando o Vinicius pedir que você decida, marque como **proposta** até ele aprovar.
- **Não invente números.** Cite a fonte ou marque `[VERIFICAR fonte]`.
- **Nunca use `git add docs` nem `git add .`.** Já aconteceu duas vezes de subir sem querer o arquivo `docs/01-planejamento/09-resumo-operacional.md` (existe só na estação 1 e **não deve ser versionado**). Liste os arquivos pelo nome e confira com `git status` antes do commit.
- Não grave senhas, tokens ou dados pessoais em nenhum arquivo. **Não importe** os relatórios individuais de alunos do Google Drive (têm dados pessoais).
- Este repositório **não tem o código**. Para ler o código, use `residuum-backend`, branch `feature/mor-025-026-vouchers-sorteios` (commit `11f0d8e`), só para leitura.
- O banco fica na **Neon** (projeto `residuum-dev`, igual à `main` do backend). Só leia **estrutura** (tabelas e colunas), nunca dados de usuários, e só com o aval do Vinicius.
- Escreva em **português**, frases curtas, fácil de ler e de entender.

## Decisões que o Vinicius já tomou (não repergunte)

**Pontos e campanhas**
- **10 pontos por descarte concluído**, por operação (PD-010). O código ainda paga 5 por unidade.
- Descartes do mesmo usuário, no mesmo ponto, em **60 minutos**, contam como **um**.
- **Operador do ponto confirma**; a confirmação é **final** (sem estorno; erro vira ajuste manual do admin, com motivo, e o saldo **não** fica negativo).
- **Dobro de pontos:** meta em **N descartes**, bônus de **10 × N**, pelo botão **"Receber pontos"**; bônus não recebido até o fim da campanha **se perde**.
- Campanhas só com **PET e lata** no início. Sorteios **só de teste**; cancelar **devolve os pontos**; parecer jurídico **adiado**. Cashback é ideia **futura**.

**Acesso (revisto em 12/11)**
- Cadastro **aberto, sem código de acesso**. O código individual foi **descartado**: dava trabalho para gerar e repassar e atrapalhava o cadastro.
- **Teto de 500 contas**, configurável, que **pode subir a 1000**, com trava de vagas no banco (`SELECT ... FOR UPDATE`).
- Conta excluída **devolve a vaga**; sem vagas, **aviso + lista de espera**. O mesmo e-mail só se recadastra após **30 dias**.
- "Morador" virou **"usuário"** em todos os documentos.

**Cadastro de resíduos**
- Código de barras e QR da nota **dentro do MVP**; tentativas **sem limite**, aviso vermelho a cada falha, **manual recomendado a partir da 2ª**. Campos do manual: material e quantidade inteira (obrigatórios), nome (opcional).
- Material (PET ou lata): **sugestão automática + confirmação do usuário sempre**.
- Testes pedidos à equipe: 50 códigos de barras em 2 fontes, 10 notas da SEFAZ-AM, leitura nos celulares do piloto.

**Pontos de coleta e coleta**
- **Só o admin** cria ponto; o pedido público sai do código. Responsável: **vínculo N:N**, gerido pelo admin.
- **GPS: 100 m** por padrão, ajustável por ponto; **QR Code fora do MVP**.
- **Ponto cheio** fica bloqueado e o app sugere outro. Capacidade em **unidades por material**, alerta aos **80%**. Ponto temporário que encerra fica **inativo**, com histórico.
- Coleta: **parcial permitida**; estado **"a caminho"**; **admin e cooperativa** cancelam, com motivo. Aceite em **48 h** (sem resposta, expira e volta ao admin); a cooperativa reagenda **uma vez**.

**Pagamento e piloto**
- A **Residuum** paga a cooperativa **por kg e material**; **manual com comprovante no piloto, API depois**.
- **Metas do piloto aprovadas** (100 usuários, 3 pontos, 1 cooperativa, 8 semanas).

**Tecnologia**
- As **5 ADRs foram aceitas** (caderno de pontos, vínculo, idempotência, estados, ciclo da conta). Nada implementado.
- Produção: **API na Vercel**, **PostgreSQL na Neon**. `/painel-testes` **sai da produção**; branches padronizadas em **`feature/`**.
- Testes: **Vitest** no front; PostgreSQL de teste em **Docker + CI** (sem tocar na Neon).
- Dados de Manaus: usar o **último dado publicado** (SINISA 2024).

## Pendências abertas

**Do Vinicius**
- Reunião de arquitetura: preencher a tabela "Decisões para sair da reunião" da pauta `docs/02-arquitetura/pauta-reuniao-arquitetura.md` e passar o resultado.
- Faixas de recompensa: manter ou ajustar com 10 pontos por descarte?
- Escala das metas do piloto (100 usuários) diante do teto de 500 ou 1000?
- Valor por kg de PET e de lata (PD-015).
- PD-009: horários, tags e capacidade de cada ponto. PD-014: confirmar 48 h e uma remarcação (os casos de teste já usam isso).
- Se o ajuste manual do admin precisa de limite de valor.

**Do Claude (documentação)**
- Ler com o Vinicius os documentos **20 a 26** do roteiro.
- Registrar as decisões **D-CT-01 a 11** (menos 02 e 04, canceladas) nos requisitos e em `decisoes-pendentes.md`.
- Corrigir os textos que ainda falam em **convite**: backlog (TSK-MOR-001 e outros), `docs/planejamento/modulos`, `docs/requisitos` e o M01 (que só tem um aviso no topo).
- Corrigir **RN-017 e RN-018** (pagamento manual no piloto) e o **estudo de coleta** (silêncio e reagendamento, que divergem dos casos de teste).
- Conferir se a API tem 111 ou 113 rotas (SAD × API).

**Da equipe**
- Aplicar no código do backend as regras de 11 e 12/11 (10 pontos, 60 min, sem estorno, teto de contas, GPS, coleta parcial, remover pedido público e `/painel-testes`).
- Mesclar as branches de feature do backend na `main` (29 × 34 migrações) antes das ondas novas.
- Confirmar se `residuum-dev` é o banco de produção; backup (a Neon guarda só **6 horas**).
- Conferir Terraform, criptografia de dados pessoais e backups, que o Backlog v2 do Drive dá como feitos e não aparecem no código.
- Confirmar com a Semulsp o número de pontos de entrega (25, 44 ou 49).
- Testar as fontes de código de barras e de nota fiscal e o leitor de câmera nos celulares do piloto.

**Comece agora pela Fase 1.**
