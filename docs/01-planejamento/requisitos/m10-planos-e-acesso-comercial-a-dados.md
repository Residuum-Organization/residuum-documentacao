# M10 — Planos e acesso comercial a dados

[Voltar ao índice](README.md)

> **Estado:** revisão · **Origem:** fatiado sem alterar o texto de `docs/requisitos/requisitos-mvp-v6.md` (linhas 1106 a 1158) em 10/11/2026. Corrija aqui, não na origem.


#### RF-MVP-050 — Representar planos e benefícios de dados

**Situação:** confirmado com pendências bloqueantes. **Fonte:** S7. **Atores:** administrador e responsável pelo ponto.

**Objetivo:** oferecer modalidades grátis, pré-paga e assinatura mensal para acesso a relatórios/indicadores.

**Fluxo:** apresentar modalidade, condições e benefícios aprovados; identificar quais capacidades estão disponíveis; manter uma matriz que relacione plano, relatório e abrangência. Não definir valores, quotas, ciclos ou pacote de dados nesta versão.

**Exceções:** plano grátis não significa ausência de controle operacional. Não confundir assinatura de dados com pontos da loja ou pagamento da coleta.

**Dependências:** RF-MVP-051 e RF-MVP-052. **Pendência:** PD-019.

**Critérios de aceite:**

- **Dado** catálogo de planos aprovado, **quando** o usuário consulta as modalidades, **então** encontra benefícios e condições correspondentes à matriz publicada.
- **Dado** um benefício não definido, **quando** a documentação é utilizada, **então** ele permanece pendente e não é anunciado como liberado.

#### RF-MVP-051 — Associar contratação e vigência de plano

**Situação:** confirmado como necessidade; processo a definir. **Fonte:** S7. **Atores:** titular do acesso e administração comercial a definir.

**Objetivo:** identificar qual plano autoriza cada acesso e em qual período.

**Fluxo condicionado:** após contratação válida pelo processo aprovado, registrar titular, modalidade, situação e vigência aplicável; disponibilizar direitos; ajustar ao fim da validade conforme política. O usuário não definiu se o titular é conta, ponto ou organização.

**Exceções:** não presumir que a API de pagamento de cooperativas também cobra assinaturas. Renovação, inadimplência, pré-pago por tempo/consulta, migração e contratação manual ou automática são PD-019.

**Dependências:** RF-MVP-050 e RF-MVP-052.

**Critérios de aceite:**

- **Dado** contratação reconhecida pelo processo aprovado, **quando** o plano é associado, **então** os acessos previstos ficam vinculados ao titular e à vigência corretos.
- **Dado** direito expirado segundo política aprovada, **quando** consulta benefício pago, **então** o acesso respeita a situação vigente.

#### RF-MVP-052 — Autorizar dados por perfil, vínculo e plano

**Situação:** confirmado com pendências. **Fonte:** S7. **Atores:** administrador e responsável pelo ponto.

**Objetivo:** aplicar restrições comerciais e de acesso em conjunto.

**Pré-condições:** sessão válida e matriz de benefícios aprovada. **Fluxo:** verificar perfil; identificar pontos/organizações autorizados; verificar plano e benefício; retornar somente os dados permitidos. A checagem ocorre no serviço que entrega os dados, não apenas na interface.

**Exceções:** pagar por relatório não autoriza dados pessoais identificáveis de toda a rede. Administrador também está sujeito ao plano para relatórios, conforme decisão; privilégios técnicos e operação mínima precisam ser diferenciados em PD-019.

**Dependências:** RF-MVP-008, RF-MVP-049 a RF-MVP-051 e RNF-MVP-005.

**Critérios de aceite:**

- **Dado** responsável com plano válido, **quando** solicita dados de ponto sem vínculo autorizado, **então** a requisição é negada.
- **Dado** administrador sem benefício de relatório no plano, **quando** pede esse relatório, **então** o privilégio administrativo não libera automaticamente o benefício.
