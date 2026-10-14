function criarOperacao(operacao) {
    if (operacao === "somar"){
        return function(numero) {
        return numero + 10;
        }
    }   
    if (operacao === "subtrair"){
        return function(numero) {
            return numero - 10;
        }
    }
    if (operacao === "multiplicar"){
        return function(numero) {
            return numero * 10;
        }
    }
    if (operacao === "dividir"){
        return function(numero) {
            return numero / 10;
        }
    }
}

    const somar = criarOperacao("somar");
    const subtrair = criarOperacao("subtrair");
    const multiplicar = criarOperacao("multiplicar");
    const dividir = criarOperacao("dividir");

    console.log(somar(30));
