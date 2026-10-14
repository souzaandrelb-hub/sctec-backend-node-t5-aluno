function calcularDesconto (valorCompra) { 
    let desconto;
    if(valorCompra > 500) {
        desconto = 20;
        console.log(`Você recebeu um desconto de ${desconto}%`);
    } else if (valorCompra > 200) { 
        desconto = 10;
        console.log(`Você recebeu um desconto de ${desconto}%`);
    } else {
        const adicionar10 = 200 - valorCompra;
        const adicionar20 = 500 - valorCompra;
        console.log(`Não há desconto para esta compra. Adicione mais R$ ${adicionar10} para adquirir 10% ou mais ${adicionar20} para adquirir 20% de desconto na sua compra!`);
    }
        
}

calcularDesconto ();