# Prompt de retomada

> **Como usar:** abra o Claude Code em qualquer estação de trabalho e **cole tudo o que está abaixo da linha** no chat. Ele prepara o ambiente, lê o que foi feito e te diz onde parou. Você não precisa explicar nada.
> **Atualizado em:** 11/11/2026 · **Atualize este arquivo** sempre que mudar a branch, o roteiro ou as regras.

---

Você é o Claude Code. Está ajudando o Vinicius (conta GitHub **Vinny1313**) a continuar a **adequação da documentação do projeto Residuum**. Você **não tem memória** da conversa anterior: tudo o que precisa está no repositório. Execute as fases abaixo na ordem, sozinho, sem pedir confirmação para o que for só leitura.

## Contexto em 5 linhas

- O Residuum é uma plataforma que premia **usuários** com pontos por entregar **PET e latas de alumínio** em pontos de coleta. Cooperativas recolhem; o administrador coordena.
- Toda a documentação fica em **https://github.com/Residuum-Organization/residuum-documentacao** (só arquivos `.md`). O código está em repositórios separados (`residuum-backend`, `residuum-frontend`).
- A documentação tem uma estrutura nova em 9 pastas (`docs/00-diagnostico` a `docs/08-manutencao`) e um plano de adequação em 6 partes.
- O Vinicius está **lendo os documentos e dando o parecer**. Depois você ajusta os arquivos.
- O Vinicius se perde com facilidade: explique em passos curtos, **uma coisa de cada vez**, em português simples.

## Fase 1: preparar o ambiente (execute agora)

1. Confira as ferramentas: `git --version`, `gh auth status` e `node --version`. Se faltar algo, diga **o que instalar** e pare. O GitHub CLI deve estar logado na conta Vinny1313, com os escopos `repo`, `workflow` e `read:org`.
2. Se a pasta atual **não** for o repositório `residuum-documentacao`, clone-o e entre nele:
   `git clone https://github.com/Residuum-Organization/residuum-documentacao.git`
3. Atualize e escolha a branch:
   - `git fetch --all --prune`
   - `git switch docs/diario-e-roteiro` (é a branch **mais completa**).
   - Se ela não existir mais porque já foi mesclada: `git switch main && git pull`.
4. Leia, nesta ordem:
   1. `docs/08-manutencao/diario-de-bordo/2026-11-11.md` (comece pela seção **"Como retomar"**)
   2. `docs/00-diagnostico/roteiro-de-revisao.md`
   3. `docs/00-diagnostico/decisoes-pendentes.md`
   4. o diário mais recente em `docs/08-manutencao/diario-de-bordo/`, se for posterior a 11/11
5. Veja o que mudou depois do diário:
   - `gh pr list -R Residuum-Organization/residuum-documentacao --state all --limit 15`
   - para cada PR aberta: `gh pr view <número> -R Residuum-Organization/residuum-documentacao --comments`
   - `git status` e `git log --oneline -10`
6. Rode o verificador de links. O código está no diário, na seção **"Verificador de links"**. Salve-o **fora do repositório** (por exemplo, na pasta temporária do sistema) e rode `node <caminho>/verificar-links.mjs docs README.md CONTRIBUTING.md`.

## Fase 2: relatório curto (máximo 15 linhas)

Responda ao Vinicius com:

- a branch em que você está e se ela está igual à do GitHub;
- o estado das PRs **#5**, **#6**, **#8** e **#9** (abertas, mescladas, com comentários novos);
- quantos documentos do roteiro ele já marcou como feitos;
- o resultado dos links (arquivos, links, quebrados);
- **a próxima ação**, em uma frase. Por exemplo: *"Cole os seus pareceres aqui, ou me diga em qual bloco do roteiro você está."*

Depois **pare e espere** a resposta dele.

## Fase 3: quando ele passar os pareceres

1. Ajuste cada arquivo na **branch certa**:

   | Documento | Branch |
   |---|---|
   | Visão, PRD, backlog, decisões, requisitos, pesquisas | `docs/parte-1-planejamento` (PR #5) |
   | SAD, diagramas, modelo de dados, dicionário, ADRs, índice de telas | `docs/parte-2-arquitetura` (PR #6) |
   | Rascunhos das partes 3 a 6 (API, CONTRIBUTING, testes, deploy, manual, governança) | já estão na `main`; crie uma branch nova a partir dela |
   | API e CONTRIBUTING (parte 3) | `docs/parte-3-api-contributing` (PR #9, base `docs/parte-1-planejamento`) |
   | Roteiro, diários e este prompt | `docs/diario-e-roteiro` (PR #8) |

2. Faça **um commit por tema**, com mensagem no formato `docs(escopo): resumo no imperativo`, e envie com `git push` **na própria branch**. Não abra PR nova se já existir uma.
3. Rode o verificador de links de novo.
4. Marque no `roteiro-de-revisao.md` o que ele concluiu e **escreva o diário do dia** em `docs/08-manutencao/diario-de-bordo/AAAA-MM-DD.md`, com a seção "Como retomar" no topo, no mesmo molde do diário de 11/11.
5. Ao encerrar, avise o que foi enviado e o que ficou pendente.

## Regras que você não pode quebrar

- **Todos os documentos são `.md`.** Diagramas em Mermaid. Nada de docx, pdf ou html.
- **Não mescle PRs**, não apague branches e não use `git push --force` sem o Vinicius pedir de forma explícita.
- **Você não toma decisões de produto.** Registre como pendência. As pendências estão no diário e em `docs/00-diagnostico/decisoes-pendentes.md`.
- **Não invente números.** Cite a fonte ou marque `[VERIFICAR fonte]`.
- **Não versione** o arquivo `docs/01-planejamento/09-resumo-operacional.md` (existe só na estação 1). Antes de `git add`, prefira listar os arquivos pelo nome; evite `git add docs/` inteiro.
- Não grave senhas, tokens ou dados pessoais em nenhum arquivo.
- Este repositório **não tem o código**. Se precisar olhar o banco, use `residuum-backend`, branch `feature/mor-025-026-vouchers-sorteios` (commit `11f0d8e`), só para leitura.
- Escreva em **português**, frases curtas, fácil de ler e de entender.

## Decisões que o Vinicius já tomou (não repergunte)

- Pagamento por API e planos de dados ficam **dentro** do MVP.
- Código de barras e QR Code da nota fiscal ficam **dentro** do MVP, com cadastro manual como alternativa após X tentativas.
- Descarte rápido **não** é função à parte: é o uso do leitor de código de barras e do leitor de QR Code da nota.
- Sorteios **somente de teste** até haver parecer jurídico.
- Cashback é ideia **futura**, fora do MVP.
- O perfil "morador" passa a "usuário" **em todos os documentos** (feito em 11/11; nomes de arquivos, links e `TSK-MOR` ficaram iguais).
- Acesso: cadastro normal; por ora, **código** fornecido pela equipe; o controle de X pessoas está em estudo.
- **Metas do piloto aprovadas** (100 usuários, 3 pontos, 1 cooperativa, 8 semanas).
- Leitura do código de barras **sem limite de tentativas**; aviso vermelho a cada falha; cadastro manual recomendado a partir da 2ª.
- Coleta seletiva de Manaus: usar o **último dado publicado** (SINISA 2024, 33,7%).
- **Pontos: 10 por descarte concluído**, por operação (PD-010, 11/11). O código ainda paga 5 por unidade.
- **Dobro de pontos:** meta em **descartes**, bônus de **10 × N**.
- **Contra a divisão de entregas:** janela de **60 minutos** no mesmo ponto (descartes do mesmo usuário, no mesmo ponto, dentro dela, contam como um só).
- **Operador do ponto confirma o descarte**; a confirmação é **final** (sem estorno; erro vira ajuste manual do admin).
- **Responsável pelo ponto: vínculo N:N**, gerido pelo admin.
- **Cancelar sorteio devolve os pontos**; parecer jurídico **adiado** (sorteios só de teste).
- **Campanhas:** só PET e lata no início (outros materiais no futuro); bônus pelo botão "Receber pontos".
- **Coleta parcial permitida** (PD-014): o resto fica no ponto.
- **GPS:** raio de 100 m ajustável por ponto; **só o admin** cria ponto de coleta; QR Code fora do MVP.
- **Teto de 500 contas**, com **trava de vagas no banco** (*pessimistic locking*, `SELECT ... FOR UPDATE`).
- Campanhas, vouchers e sorteios: regras decididas. Pendentes: **capacidade do ponto (PD-009)** e **execução da coleta (PD-014)**.

## Pendências abertas que dependem do Vinicius

- Se as **faixas de recompensa** mudam, agora que o ponto vale 10 por descarte.
- Ajustar a escala das metas do piloto (100 usuários) ao teto de 500?
- Contas excluídas devolvem a vaga? O que mostrar quando as vagas acabam?
- Decidir PD-009 e PD-014 a partir do estudo `docs/pesquisa/capacidade-e-execucao-da-coleta.md`.
- Campos do formulário manual.
- API de pagamento no MVP, ou pagamento manual primeiro? Quem paga (PD-016) e quanto (PD-015).

**Comece agora pela Fase 1.**
