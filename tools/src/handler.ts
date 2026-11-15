import type { ToolInvocation } from "@desafio/shared";

/**
 * Ponto de entrada das tools. Implementacao na proxima etapa:
 * listar_catalogo, registrar_intencao e realizar_compra com DynamoDB.
 */
export async function handler(event: ToolInvocation): Promise<unknown> {
  return { erro: "NAO_IMPLEMENTADO", mensagem: `Tool ${event.tool} ainda nao implementada.` };
}
