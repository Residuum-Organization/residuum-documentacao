# Residuum V2 — estado da construção no Lovable

Projeto independente: https://lovable.dev/projects/d0d6096b-3659-438f-bbc6-6c3cba741263

Prévia: https://id-preview--d0d6096b-3659-438f-bbc6-6c3cba741263.lovable.app/demo/inicio

## Entrega parcial

A etapa 1 gerou a jornada demonstrativa, componentes, regras em memória e páginas de revisão. Commit: `dd069c3915ea34635918f3330cdf92f4c46b85fa`. O Lovable informou erros de tipagem e não executou build/testes. Após login, a prévia da Home e o fluxo registro/entrega do estoque abriram no navegador. Renderizar a prévia não comprova aprovação da compilação.

Verificação direta: registrar duas garrafas aumentou PET de 6 para 8 mantendo saldo de 30; entregar duas reduziu PET de 8 para 6, preservou quatro latas e aumentou saldo para 40. A confirmação bloqueou o botão durante o carregamento. Esses testes exploratórios cobrem apenas esse fluxo; não equivalem à validação integral ou com usuários.

## Bloqueio

A mensagem de correção foi rejeitada: `Your workspace is out of credits`. Nenhuma compra, publicação, banco ou integração real foi realizada. As etapas 2–4 não começaram. Figma V1 e frontend V1 foram preservados.

Os arquivos originais logo.jpeg, embalagens.svg, capturas mobile/desktop da V1 e handoff foram enviados ao armazenamento de anexos, porém a mensagem que os anexaria ao projeto foi rejeitada por falta de créditos. Sua incorporação ainda está pendente; o primeiro build usou logo provisório e imagem gerada. Em uma retomada, renovar os uploads se as referências temporárias tiverem expirado.

## Ordem de retomada

1. Corrigir os diagnósticos reais de tipagem e executar build/testes. Incorporar logo/SVG originais e referências da Home. Incluir materiais aceitos nos pontos e bloquear combinações incompatíveis; validar quantidades também no descarte rápido; calcular idade real do GPS ao confirmar; garantir resgates idempotentes. Conferir os 35 estados.
2. Criar /aprenda e dois guias públicos originais. Cartão na Home, cinco destinos preservados. Um AdSlot demonstrativo após duas seções em cada guia, com quatro estados e 48 px dos controles. Sem AdSense ou rastreamento.
3. Implementar motion de botões: hover 150 ms, press 80 ms/1 px com alvo estável, retorno 120 ms, sucesso confirmado 180 ms, loading com texto e bloqueio. Respeitar movimento reduzido; criar laboratório e comparativos V1/V2 em /evolucao.
4. Validar 320/390/834/1440 px, teclado, foco, contraste, erros, cinco fluxos, publicidade e movimento reduzido. Registrar evidências reais e handoff; deixar testes humanos pendentes.

Consultar o resultado de cada etapa antes de enviar a próxima. Não publicar nem provisionar serviços reais nesta entrega.
