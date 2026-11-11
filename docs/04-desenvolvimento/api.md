# Documentação da API

> **Estado:** esboço · **Dono:** Backend · **Atualizado em:** 10/11/2026
> **Fontes:** rotas citadas nas análises. **A lista completa deve vir do OpenAPI (`/openapi.json`) do backend** `[VERIFICAR NO CÓDIGO]`.
> **Lacunas:** exemplos de requisição/resposta e códigos de erro por rota.

## Resumo

A API é REST em JSON, autenticada por **JWT Bearer**. Escritas sensíveis passarão a exigir o header `Idempotency-Key`. Abaixo, as rotas já identificadas, com o que muda. Para a lista completa, abra `/docs` (Swagger) com o backend rodando.

## Convenções

| Item | Valor |
|---|---|
| Autenticação | `Authorization: Bearer <token>`; rotas `@public` não exigem |
| Idempotência | `Idempotency-Key` (8–128 caracteres) `[DECISÃO: padronizar header]` |
| Erros | 400 inválido · 401 sem sessão · 403 sem permissão · 409 conflito de estado · 422 validação |

## Rotas por área

### Conta
| Método | Rota | Perfil | Observação |
|---|---|---|---|
| POST | `/usuarios` | público | Passará a exigir convite |
| POST | `/login`, `/refresh` | público | Refresh deverá conferir `ativo` |
| POST | `/senha/recuperar`, `/senha/redefinir` | público | **Novo** |

### Morador
| Método | Rota | Observação |
|---|---|---|
| POST/PUT/DELETE | `/inventario` | Só PET e lata, inteiros |
| POST | `/inventario/transferencias` | Lote; passa a só reservar |
| POST | `/descarte/` | Passa a criar pendente sem crédito |
| POST | `/inventario/{id}/descartar` | 🔴 **remover** (confirma sozinho) |
| GET | `/pontos-coleta` | Passa a trazer `disponivel_para_descarte` e `motivo` |
| GET | `/pontuacao/extrato` | Passa a ler o ledger |

### Operação (ponto / cooperativa)
| Método | Rota | Observação |
|---|---|---|
| GET | `/descarte/pendentes` | Filtrar por vínculo |
| PUT | `/descarte/{id}/confirmar` | Único ponto de crédito `[DECISÃO: D2]` |
| POST | `/cooperativa/solicitacoes-coleta/{id}/aceitar\|iniciar\|concluir\|recusar` | `iniciar` é novo |
| POST | `/cooperativa/cadastro-cooperativa` | 🔴 **fechar** (hoje público) |
| POST | `/cooperativa/lancamento-avulso` | Desligar no MVP |
| POST | `/pontos-coleta/{id}/pedidos-coleta` | **Novo** (responsável) |

### Administrador
| Método | Rota | Observação |
|---|---|---|
| POST | `/sorteios/{id}/publicar\|cancelar\|sortear` | `publicar`/`cancelar` novos |
| DELETE | `/sorteios/{id}` | 409 se houver bilhetes |
| POST | `/pontuacao/resgates` | 🔴 **remover** (qualquer usuário debita) |
| POST | `/admin/descartes/{id}/reverter` | Exige motivo; 409 com déficit |
| POST | `/admin/usuarios`, PATCH `/admin/usuarios/{id}/ativo` | **Novos** |
| POST | `/admin/convites`, `/admin/cooperativas` | **Novos** |

### Públicas de apoio
`GET /config/publica` → materiais e `pontos_por_unidade` (novo).

## Exemplo (esboço)

```http
POST /inventario/transferencias
Idempotency-Key: 7c1f...e2
```
`[LACUNA]` corpo e resposta reais: preencher a partir do OpenAPI.

## O que falta para fechar

- [ ] Exportar `/openapi.json` e gerar tabela por rota
- [ ] Exemplos reais e erros por rota
- [ ] Marcar rotas descontinuadas com data
