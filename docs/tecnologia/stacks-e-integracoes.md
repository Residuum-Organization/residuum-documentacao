# Residuum — stacks e integrações

[Voltar ao guia dos documentos](../README.md)

**Base:** [diagnóstico de 09/10/2026](../diagnostico/comparativo-mvp-estagio-v1.md). Este documento reúne tecnologias identificadas naquele estudo; não define uma nova arquitetura nem confirma o ambiente atualmente implantado.

## 1. Base tecnológica examinada

| Camada | Tecnologias registradas | Situação e referência |
|---|---|---|
| Frontend | React, Vite, React Query e serviços HTTP | Base existente; [componentes reaproveitáveis](../diagnostico/comparativo-mvp-estagio-v1.md#2-bases-que-vale-preservar) |
| Backend | Python, FastAPI, Pydantic e SQLAlchemy | Base existente; [ambiente e versões dos testes](../diagnostico/comparativo-mvp-estagio-v1.md#52-testes-existentes-do-backend) |
| Autenticação | JWT, refresh e hashing de senha; python-jose, passlib e bcrypt | Implementação existente com revisão de autorização/vínculos necessária |
| Banco e migrations | PostgreSQL como banco referido para validação operacional; Alembic e 29 migrations examinadas | Aplicação real das migrations e concorrência ainda precisam de verificação; testes locais usaram SQLite em memória |
| Mapas do frontend | Leaflet/OpenStreetMap e abertura externa do Google Maps | Base localizada; não comprova rota/ETA operacional da cooperativa |
| Execução | Docker/Compose e Uvicorn | Arquivos identificados; infraestrutura vigente, recuperação e implantação precisam de confirmação |
| Build e entrega | Node, pnpm e CI do frontend | Build local registrado; falhas de formatação ignoradas no CI; workflow backend não localizado no snapshot |

Os testes documentados usaram Python 3.12.14, enquanto o Docker declara Python 3.11. O build local usou Node 24.19.0/pnpm 11.25.0 e o CI declara Node 20/pnpm 9. São diferenças a conciliar, não escolhas novas deste documento. Consulte as [verificações do diagnóstico](../diagnostico/comparativo-mvp-estagio-v1.md#5-verificações-executadas) para versões e resultados completos.

## 2. Ferramentas de design e demonstração

| Ferramenta | Uso documentado | Limite |
|---|---|---|
| Figma | Fundamentos, componentes, telas e protótipo do morador | [Handoff V6](../ux/morador-v6-handoff.md); validação com moradores pendente |
| Frontend demonstrativo V6 | Jornada com dados de demonstração e patch para revisão | Integração backend pendente; não houve implantação nessa entrega |
| Lovable | Projeto independente de demonstração V2 | [Entrega parcial](../ux/residuum-v2-lovable-status.md), erros de tipagem reportados e retomada bloqueada por créditos |

Essas entregas não comprovam migração da stack do MVP.

## 3. Integrações previstas e decisões abertas

| Integração | Objetivo | O que falta definir ou validar |
|---|---|---|
| Catálogo de produtos | Identificar embalagem a partir do código de barras | Fonte, cobertura, autorização e limites — PD-004 |
| Nota fiscal | Importar itens para revisão | Fonte, tipos de nota e tratamento de repetição — PD-004/005 |
| Geolocalização | Validar presença no descarte | Raio, precisão, idade da posição e falhas — PD-008 |
| Serviços Google de mapas | Fornecer orientação de rota à cooperativa | Serviços, forma de navegação e ETA — PD-017 |
| API de pagamentos | Pagar coleta por iniciativa do administrador | Provedor, recursos, valores, autorização e conciliação — PD-015/016 |
| Planos e cobrança | Controlar acesso comercial a dados | Pacotes, titularidade, contratação e cobrança — PD-019 |
| Mídias da Loja | Apresentar imagens e vídeos | Formatos, limites, armazenamento e publicação — PD-024 |

Detalhamento: [dados e integrações da V6](../requisitos/requisitos-mvp-v6.md#9-dados-e-integrações) e [pendências](../requisitos/requisitos-mvp-v6.md#12-pendências-de-decisão).

## 4. Como interpretar as stacks dos documentos antigos

Opções de hospedagem e infraestrutura das versões em `historico` são referências anteriores, não confirmação da infraestrutura vigente. A equipe precisa registrar o ambiente efetivamente adotado e resolver PD-026. O diagnóstico recomenda evolução da base por capacidade, sem presumir reconstrução integral.
