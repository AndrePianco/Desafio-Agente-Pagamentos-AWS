import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";
import { Agente } from "./agente";
import { Dados } from "./dados";
import { Tools } from "./tools";

/**
 * Stack do backend. Ja tem: DynamoDB, Lambdas das tools e o agente no
 * AgentCore Runtime. Proximas etapas: Cognito, Lambda do chat e API Gateway.
 */
export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dados = new Dados(this, "Dados");
    const tools = new Tools(this, "Tools", { dados, ttlIntencaoSegundos: 300 });
    const agente = new Agente(this, "Agente", {
      modeloId: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
      tools,
    });

    const saida = (nome: string, valor: string) => new cdk.CfnOutput(this, nome, { value: valor });
    saida("TabelaUsuarios", dados.usuarios.tableName);
    saida("TabelaCatalogo", dados.catalogo.tableName);
    saida("TabelaIntencoes", dados.intencoes.tableName);
    saida("TabelaTransacoes", dados.transacoes.tableName);
    saida("TabelaConversas", dados.conversas.tableName);
    saida("FnListarCatalogo", tools.listarCatalogo.functionName);
    saida("FnRegistrarIntencao", tools.registrarIntencao.functionName);
    saida("FnRealizarCompra", tools.realizarCompra.functionName);
    saida("AgenteRuntimeArn", agente.runtime.attrAgentRuntimeArn);
  }
}
