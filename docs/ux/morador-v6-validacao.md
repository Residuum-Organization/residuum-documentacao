# Residuum — evidências de validação do morador V6

Data: 10/10/2026. Frontend de base: `4f41b139ba9871c92a5c5a72ca2f9d98ba6af164`. Execução local em Windows, Node 24 e Edge via Playwright. As verificações abaixo usam fixtures; não validam backend de produção.

| Verificação | Resultado | Evidência |
|---|---|---|
| Regras e contratos | 12 testes aprovados | `tests/model.test.mjs`, `tests/contracts.test.mjs` no checkout do frontend |
| Fluxos no navegador | Aprovados; nenhuma falha de JavaScript | `tests/resident.e2e.mjs` |
| Acessibilidade automatizada | 23 vistas/estados, zero violações nas tags WCAG 2A/AA e 2.1A/AA executadas | [Relatório JSON](evidence/morador-v6-accessibility.json) |
| Reflow | Home e cadastro/estoque/mapa/Loja/perfil sem overflow horizontal em 320, 390, 834 e 1440 px | Asserções Playwright e capturas |
| Teclado em diálogo | Foco dentro, Escape fecha, foco retorna ao acionador | Asserções Playwright |
| Compilação Vite | Aprovada | Build de produção local |
| Figma | 35 frames de tela, 14 estilos de texto, variáveis e instâncias; cinco pontos de início | [Manifesto](morador-v6-figma-manifest.json) |
| Edição nativa | Texto editável, instâncias, SVGs e Auto Layout; nenhum texto com dimensão zero na auditoria | Auditoria do arquivo Figma |
| Teste com moradores | Preparado, ainda não executado | [Roteiro](morador-v6-teste-usuarios.md) |

## Fluxos exercitados

- Cadastro no estoque mantém o saldo sem crédito.
- Duas PET + uma lata no caminho rápido geram 10 pontos por operação concluída.
- Estoque parcial baixa somente as unidades selecionadas.
- Repetição da mesma operação não duplica estoque, evento ou crédito na demonstração.
- Ponto fechado, lotado, expirado ou incompatível impede confirmação; nenhum ponto disponível permite revisar.
- GPS ausente, inválido, impreciso, antigo e distante é recusado no modelo.
- Abertura da rota invalida a leitura anterior e exige novo GPS.
- Permissão negada e falha de confirmação preservam os itens no fluxo; retry pode concluir.
- Abandonar o fluxo elimina o rascunho; voltar pelo navegador não recupera os itens.
- Código desconhecido oferece erro e alternativa; código/nota de teste apresentam itens para revisão.
- Convite inválido não cadastra; convite demonstrativo válido permite explorar. Cadastro de produção fica bloqueado até contrato V6.
- Voucher debita custo exato, dialog exige confirmação e mostra saldo após. Saldo insuficiente e oferta esgotada são recusados no modelo.
- Mapa interativo tem controles de zoom em português e alternativa em lista. Detalhe do ponto abre diálogo acessível.
- Login legado continua acessível; `/morador` reutiliza a proteção de perfil.

## Limites da evidência

Nenhuma sessão com os cinco moradores foi realizada. A meta de tempo não foi comprovada. Ainda faltam avaliação humana com leitor de tela, entendimento das mensagens e teste de câmera/GPS em dispositivos e locais reais. Axe não comprova conformidade integral WCAG.

Os testes de idempotência e transação são do modelo da demonstração. A integridade de descarte, estoque do ponto, bônus e recompensas reais precisa de implementação e testes do servidor conforme os contratos do handoff. A confirmação de GPS local não substitui revalidação no backend.

O Figma conserva o logo, frames originais e texto existente. A captura web foi usada como referência e removida depois da montagem nativa. O plano **Starter bloqueou novas chamadas MCP** no último refinamento adicional de navegação desktop e cartões ilustrados da Loja. Esse refinamento não foi aplicado; os 35 frames e os cinco fluxos já criados permanecem disponíveis. Não houve compra ou mudança de plano.

A compilação ainda informa chunk grande na área legada. O morador e as áreas operacionais agora carregam separadamente; o restante da otimização do legado fica fora deste ciclo. O script de captura Figma só carrega em desenvolvimento quando a URL contém o parâmetro de captura.

## Revisão visual

[Home desktop](evidence/morador-v6-home-desktop.png) · [Home móvel](evidence/morador-v6-home-mobile.png).

As capturas de página inteira mostram a navegação fixa na posição do viewport capturado. Para revisar a interação e o restante do conteúdo, use a demonstração no navegador.
