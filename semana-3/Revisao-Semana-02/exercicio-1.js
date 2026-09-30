const nomeProduto = "copo";
const precoUnitario = 2.;
const quantidade = 20;
const clientePremium = true;

let precoFinal = precoUnitario * quantidade;

if (clientePremium) {
    precoFinal *= 0.8;
} else if (quantidade >=5) {
    precoFinal *= 0.9;
}

console.log(`O valor total da compra do produto ${nomeProduto} na quantidade de ${quantidade} unidades é de R$ ${precoFinal}`);

console.log(` 
    ---- RESUMO DA COMPRA -----
    Produto: ${nomeProduto}
    Preço Unitário: R$ ${precoUnitario}
    Quantidade: ${quantidade}
    Cliente Premium: ${clientePremium ? "Sim" : "Não"}
    Valor Final a pagar: R$ ${precoFinal}
    `);
  