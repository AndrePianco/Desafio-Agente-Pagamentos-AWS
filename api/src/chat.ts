import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

/**
 * Lambda do chat. Implementacao na proxima etapa: ler o sub das claims
 * do Cognito, carregar o historico, invocar o AgentCore e fazer streaming.
 */
export async function handler(_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  return { statusCode: 501, body: JSON.stringify({ erro: "Nao implementado" }) };
}
