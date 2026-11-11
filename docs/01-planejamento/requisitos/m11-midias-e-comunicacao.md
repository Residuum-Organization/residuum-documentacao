# M11 — Mídias e comunicação

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1159 a 1179) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-053 — Armazenar e apresentar imagens e vídeos da loja

**Situação:** confirmado com parâmetros pendentes. **Fontes:** S4/RF028 e S7. **Ator:** administrador; morador visualiza.

**Objetivo:** permitir mídia nas campanhas e demais ofertas que suportem a configuração.

**Pré-condições:** permissão administrativa e armazenamento disponível. **Fluxo:** selecionar imagem/vídeo; validar formato e tamanho aprovados; enviar e vincular à oferta; apresentar mídia aos moradores com descrição textual independente.

**Exceções:** upload falho não deve ser exibido como concluído; arquivo incompatível é rejeitado. O limite anterior de 5 MB não será imposto indistintamente a vídeo. Upload de arquivo versus link externo, formatos, tamanhos, duração e tratamento aguardam PD-024.

**Dependências:** RF-MVP-027 a RF-MVP-030 e integração I06.

**Critérios de aceite:**

- **Dado** vídeo em formato e tamanho aprovados, **quando** o administrador o adiciona à campanha, **então** a oferta consegue apresentá-lo aos usuários autorizados.
- **Dado** mídia rejeitada ou envio interrompido, **quando** a ação termina, **então** o sistema informa a falha e não apresenta um arquivo inexistente como disponível.

**Comunicação transversal:** solicitações e agendamentos devem aparecer nos respectivos painéis. Canal externo adicional, por e-mail ou outro meio, é uma proposta herdada que depende de PD-021 e integração I05; não confundir atualização de painel com entrega de uma mensagem externa.
