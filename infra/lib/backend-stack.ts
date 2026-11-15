import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";
import { Dados } from "./dados";
import { Tools } from "./tools";

/**
 * Stack do backend. Ja tem: DynamoDB e Lambdas das tools.
 * Proximas etapas: Cognito, AgentCore Runtime, Lambda do chat e API Gateway.
 */
export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dados = new Dados(this, "Dados");
    const tools = new Tools(this, "Tools", { dados, ttlIntencaoSegundos: 300 });

    const saida = (nome: string, valor: string) => new cdk.CfnOutput(this, nome, { value: valor });
    saida("TabelaUsuarios", dados.usuarios.tableName);
    saida("TabelaCatalogo", dados.catalogo.tableName);
    saida("TabelaIntencoes", dados.intencoes.tableName);
    saida("TabelaTransacoes", dados.transacoes.tableName);
    saida("TabelaConversas", dados.conversas.tableName);
    saida("FnListarCatalogo", tools.listarCatalogo.functionName);
    saida("FnRegistrarIntencao", tools.registrarIntencao.functionName);
    saida("FnRealizarCompra", tools.realizarCompra.functionName);
  }
}
