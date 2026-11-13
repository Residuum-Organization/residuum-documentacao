# Avaliação das conclusões da reunião de arquitetura

[Voltar à pauta](pauta-reuniao-arquitetura.md)

> **Estado:** revisão · **Dono:** Tecnologia · **Elaborado em:** 13/11/2026 · **Propostas da seção 8 aprovadas pelo Vinicius em 13/11/2026**
> **Origem:** dois pareceres de engenheiros de software sobre a [pauta](pauta-reuniao-arquitetura.md), trazidos pelo Vinicius depois da reunião.
> **Natureza:** avaliação do Claude, com pesquisa na internet (13/11/2026). **Nada foi testado.** As 10 propostas da seção 8 foram **aprovadas em 13/11/2026**; as demais recomendações do texto seguem como propostas.

## Resumo

Os dois pareceres **concordam entre si e com a pauta** no essencial: manter o livro único de pontos, o pagamento manual no piloto, o leitor nativo com `zxing-wasm` e a confirmação do operador como defesa contra GPS falso. Os riscos que apontam são **reais**, mas **dois números estão exagerados**, **uma recomendação não serve para este projeto** e **faltam três assuntos** que nenhum dos dois citou.

| | Veredito |
|---|---|
| Nota fiscal (SEFAZ) | ✅ Concordo: trocar a ordem e **pagar a consulta, com teto** |
| Polling do operador | ✏️ Risco real, **custo exagerado**; solução simples com o que já temos |
| Conexões (Neon + Vercel) | ✏️ Concordo com o pooler; **um parecer sugere um driver que não serve** para Python |
| Comprovantes | ✅ Concordo; há **três opções**, uma delas sem serviço novo |
| Cache de produtos | ✅ Concordo, com cautela sobre o tamanho |
| Leitor, GPS, livro de pontos | ✅ Concordo |
| O que faltou | ⚠️ Tarefas agendadas, plano da Vercel e a janela de 60 min |

## 1. Nota fiscal: pagar a consulta, com teto

**O que os pareceres dizem:** ler a página da SEFAZ-AM pelo backend (caminho B) é frágil; a Vercel pode ser bloqueada; ir para o serviço pago (Infosimples, caminho A) com teto financeiro e, estourado o teto, cair no manual (caminho C).

**Avaliação**
- Concordo com a **direção**. O bloqueio por endereço de datacenter é **plausível, mas não está confirmado**: nenhuma fonte achada fala do firewall da SEFAZ-AM, nem de captcha.
- Dá para saber **em uma hora**, sem apostar: publicar uma função de teste na própria Vercel (que usa o endereço de produção) e consultar as 10 notas reais. Fazer o teste no computador local **não vale**, porque o endereço é outro.
- **O teto de R$ 50 não pode ser fixado ainda.** A [Infosimples](https://infosimples.com/consultas/precos/) cobra por consulta, com preço base em faixas e **um adicional por estado** que não apareceu para o Amazonas; a conta de teste é gratuita. Sem o preço, não dá para saber quantas notas R$ 50 cobrem. **Pedir a cotação.**
- Um detalhe do segundo parecer precisa de ajuste: "exigir apenas a digitação da chave" não faz sentido, porque o **QR já traz a chave de 44 dígitos**. O que o usuário digita, no caminho C, são os **itens** da nota.

**Recomendação (proposta)**
1. Guardar cada nota pela **chave** (única): a mesma nota **nunca é paga duas vezes** e também resolve a importação repetida (PD-005).
2. Ordem: **A (Infosimples) com teto mensal → C (itens à mão)**. B vira só um experimento de uma hora.
3. O "disjuntor" sugerido é boa ideia: após 3 falhas seguidas, a rota fica desligada por alguns minutos e o usuário vai direto ao manual.
4. Antes de qualquer coisa: **cotação por escrito** da Infosimples para a SEFAZ-AM.

## 2. Polling do operador

**O que os pareceres dizem:** consultar a API a cada poucos segundos esgota a cota da Vercel; usar 15 a 30 segundos ou SWR.

**Avaliação**
- Fiz a conta, supondo 3 pontos e 8 horas por dia, em 30 dias:

| Intervalo | Chamadas por mês |
|---|---|
| 3 s | cerca de 864 mil |
| 15 s | cerca de 173 mil |
| 30 s | cerca de 86 mil |

- Com 3 s o risco é real. Com 15 a 30 s é **pequeno** para o piloto. O limite exato do plano gratuito da Vercel **não foi confirmado** (as fontes divergem; uma cita 1 milhão por mês).
- **O custo maior pode estar no banco, não na Vercel:** cada consulta acorda o banco da Neon e impede que ele "durma" `[VERIFICAR]` nas regras do plano gratuito da Neon, que não achei.
- **SWR não é necessário.** O frontend já usa o **TanStack Query**, que faz o mesmo: `refetchInterval`, pausa com a aba escondida e atualização ao voltar à aba.

**Recomendação (proposta):** atualizar a fila a cada **20 segundos**, **só com a aba visível**, mais atualização ao voltar à aba e um botão "Atualizar". A janela de 60 minutos não é afetada. Se um dia for preciso aviso instantâneo, ver a seção 7.

## 3. Conexões com o banco (Neon + Vercel)

**O que os pareceres dizem:** é obrigatório usar um pooler; um sugere o driver HTTP/WebSocket da Neon; o outro, o PgBouncer na porta 5432.

**Avaliação**
- Confirmado na [documentação da Neon](https://neon.com/docs/connect/connection-pooling): o pooler é um **PgBouncer em modo transação**, ativado usando o endereço com **`-pooler`** no nome; aceita até 10.000 conexões de clientes e está disponível em todos os planos, inclusive o gratuito.
- **O driver HTTP/WebSocket da Neon é uma biblioteca de JavaScript.** O backend do Residuum é **Python** (FastAPI, SQLAlchemy, psycopg2): **essa recomendação não se aplica.** `[VERIFICAR com o engenheiro]`
- A frase "o pool pode cair antes das 500 vagas" mistura duas coisas: as 500 vagas são **linhas no banco**, não conexões. O que esgota conexões é a quantidade de **requisições ao mesmo tempo**.
- No modo transação, comandos de sessão (`SET`, `LISTEN`, trava de sessão) não funcionam. A trava de **linha** dentro de uma única transação (`UPDATE ... RETURNING` ou `SELECT ... FOR UPDATE`) **deve funcionar**, mas a busca não tratou disso diretamente. **Precisa de teste de concorrência.**

**Recomendação (proposta)**
1. A API usa o endereço **`-pooler`**, com o pool do SQLAlchemy desligado (`NullPool`), para não haver dois pools empilhados.
2. As **migrações** (Alembic) usam o endereço **direto**, sem pooler.
3. **Teste de concorrência** das últimas vagas e do saldo, rodando contra um PostgreSQL de verdade (já decidido: Docker + CI). Repetir uma vez no ambiente real da Neon.

## 4. Comprovantes de pagamento

Os dois pareceres citam Vercel Blob, Amazon S3 ou Cloudflare R2. Todos servem. Comparação:

| Opção | Vantagem | Cuidado |
|---|---|---|
| **Cloudflare R2** | Compatível com S3 (a biblioteca `boto3` do Python funciona); 10 GB grátis por mês e **sem cobrança de saída** ([preços](https://developers.cloudflare.com/r2/pricing)) | Mais uma conta e chaves para guardar |
| **Vercel Blob** | Já no ecossistema | Os limites do plano gratuito **não ficaram claros**; há relatos de armazenamento bloqueado ao passar do limite ([Vercel](https://vercel.com/docs/vercel-blob/usage-and-pricing)) |
| **No próprio PostgreSQL** (arquivo pequeno, até cerca de 1 MB) | **Nenhum serviço novo**; entra no mesmo backup | Aumenta o banco; só serve para poucas dezenas de comprovantes |

**Recomendação (proposta):** esconder o armazenamento atrás de uma **interface única** (`guardar`, `ler`, `apagar`) e começar com o **R2**, em área **privada** com link temporário, porque o comprovante traz dado bancário (LGPD). O PostgreSQL fica como alternativa se o time não quiser abrir outra conta. A mesma interface serve depois para as mídias (PD-024).

## 5. Cache de produtos

A sugestão de **pré-carregar 50 a 100 produtos** por planilha é boa e barata. Dois cuidados:
- Há **milhares** de códigos de barras de bebidas e embalagens; 100 cobrem só os mais comuns. O ganho maior vem do cache que **cresce a cada item confirmado** no piloto.
- Alguém precisa levantar **quais** produtos são os mais vendidos em Manaus: pedir aos operadores dos pontos e à cooperativa, e aproveitar os 50 códigos e as 10 notas do teste já pedido.

## 6. Pontos em que concordo sem ressalva

| Tema | Por quê |
|---|---|
| **Leitor:** nativo, com `zxing-wasm` para iPhone; sem SDK pago | O iPhone não tem leitor nativo; medir nos celulares do piloto antes de pagar |
| **GPS pode ser falsificado** | A confirmação física do operador é a defesa real; manter a validação do servidor como filtro |
| **Livro único intocável** | ADR-0001, com `CHECK` de saldo ≥ 0 e testes de concorrência |
| **Pagamento manual agora** | Já decidido; interface única de provedor para a API depois |

## 7. O que nenhum dos pareceres citou

| Assunto | Por que importa |
|---|---|
| **Tarefas agendadas** | Duas regras já aprovadas precisam de tarefa que rode sozinha: **a coleta sem resposta expira em 48 h** (D-CT-08) e **o aviso da lista de espera**. Na Vercel isso é um agendador próprio, e o limite no plano gratuito **não foi verificado** `[VERIFICAR]` |
| **Plano da Vercel** | A [Vercel diz](https://vercel.com/docs/plans/hobby) que o plano gratuito é só para **uso não comercial**. O projeto vai pagar cooperativas e dar recompensas: `[VERIFICAR]` se exige o plano pago |
| **Migração automática sem teste** | Hoje cada *merge* na `main` roda as migrações e publica, sem rodar testes. O CI deve **rodar os testes antes** |
| **Cadastro aberto** | Captcha e limite de tentativas já estavam na pauta e ninguém respondeu |
| **Janela de 60 minutos** | A pergunta mais importante da pauta continua **sem resposta** (agrupa o descarte ou só o crédito? quem confirma o grupo?) |

**Alternativa de infraestrutura (para registro, sem recomendar agora):** várias dores deste documento (pooler, aviso em tempo real, tarefas agendadas, arquivos) vêm de rodar a API em funções **serverless**. Uma hospedagem com **servidor contínuo** (por exemplo, um serviço de contêiner) resolveria todas de uma vez, ao custo de mudar a decisão já tomada. Para 100 usuários em 3 pontos, **recomendo manter Vercel + Neon** e anotar um **gatilho** para rever: precisar de aviso instantâneo ao operador, de tarefas frequentes ou de lentidão na primeira chamada. O FastAPI é portátil, então a mudança futura não exige reescrita.

## 8. Decisões aprovadas (13/11/2026)

| # | Decisão | Quem executa |
|---|---|---|
| 1 | Nota fiscal: pedir cotação à Infosimples; ordem **A com teto → C**; teste de B em 1 hora a partir da Vercel | Vinicius + engenheiro |
| 2 | Guardar a nota pela **chave única** (não pagar duas vezes; resolve PD-005) | Vinicius |
| 3 | Fila do operador a cada **20 s**, só com a aba visível, mais botão "Atualizar" | Engenheiro |
| 4 | Endereço **`-pooler`** + `NullPool` na API; migrações no endereço **direto** | Engenheiro |
| 5 | Teste de concorrência (vagas e saldo) em PostgreSQL no CI | Engenheiro |
| 6 | Comprovantes: interface única, começando pelo **R2 privado** (alternativa: PostgreSQL) | Vinicius + engenheiro |
| 7 | Cache de produtos: levantar os mais vendidos e pré-carregar; deixar crescer com o piloto | Operação |
| 8 | Confirmar o **plano** da Vercel e como rodar as **tarefas agendadas** | Engenheiro |
| 9 | CI roda os testes **antes** de migrar e publicar | Engenheiro |
| 10 | Responder a **janela de 60 minutos** e a **proteção contra robôs** | Vinicius + engenheiro |

## Fontes

Busca na internet em 13/11/2026: [Neon, pooling](https://neon.com/docs/connect/connection-pooling) · [Vercel, plano Hobby](https://vercel.com/docs/plans/hobby) · [Infosimples, cobrança](https://infosimples.com/consultas/precos/) · [Cloudflare R2, preços](https://developers.cloudflare.com/r2/pricing) · [Vercel Blob, preços](https://vercel.com/docs/vercel-blob/usage-and-pricing).

**Atenção:** aprovar não significa que esteja feito. Estão **por fazer**: a cotação da Infosimples, o teste de uma hora a partir da Vercel, a conferência do plano da Vercel e das tarefas agendadas e os testes de concorrência. O item 10 aprovou que a **janela de 60 minutos** e a **proteção contra robôs** precisam ser respondidas: **as duas continuam sem resposta**.
