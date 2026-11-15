"""Agente Strands que roda no Bedrock AgentCore Runtime.

Implementacao na proxima etapa: system prompt da Fase 1, modelo do
Bedrock (Claude Haiku 4.5) e as 3 tools chamando a Lambda de tools com o
user_id injetado a partir do payload enviado pela Lambda do chat.
"""

from bedrock_agentcore.runtime import BedrockAgentCoreApp

app = BedrockAgentCoreApp()


@app.entrypoint
def invoke(payload: dict) -> dict:
    return {"erro": "NAO_IMPLEMENTADO"}


if __name__ == "__main__":
    app.run()
