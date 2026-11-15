# Agente de Pagamentos na AWS

Chatbot com login que conversa com um agente de IA e realiza compras simuladas
por meio de três ferramentas, levado da Fase 1 (local, com Ollama) para a AWS:
modelo do Amazon Bedrock, agente Strands no Bedrock AgentCore Runtime, tools em
AWS Lambda, estado em DynamoDB e toda a infraestrutura em AWS CDK (`us-east-1`).

> 🚧 Em construção. Seções marcadas com _TODO_ serão preenchidas ao longo das etapas.

## Estrutura

| Pasta | Responsabilidade |
|---|---|
| `frontend/` | App React (Vite) com login Cognito. Roda local por enquanto. |
| `api/` | Lambda do chat atrás do API Gateway: lê o `sub` do token e invoca o agente. |
| `agent/` | Agente Strands (Python) implantado no Bedrock AgentCore Runtime. |
| `tools/` | Lambdas das tools `listar_catalogo`, `registrar_intencao`, `realizar_compra`. |
| `shared/` | Contrato de tipos compartilhado (herdado da Fase 1). |
| `infra/` | AWS CDK: DynamoDB, Cognito, Lambdas, API Gateway, AgentCore, IAM. |
| `data/` | Seed do catálogo. |
| `scripts/` | Scripts de administração (criar usuário convidado, seed). |

## Diagrama da arquitetura

_TODO_

## Pré-requisitos e deploy

_TODO_

## Modelo do Bedrock

Claude Haiku 4.5 (`us.anthropic.claude-haiku-4-5-20251001-v1:0`), o recomendado pelo desafio.

## Modelagem do DynamoDB

_TODO_

## Permissões IAM

_TODO_

## Evidências

_TODO_

## Remoção dos recursos

_TODO_
