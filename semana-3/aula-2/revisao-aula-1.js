function calcularConversao (valorEmReais, moedaDestino) {
    
    let conversao;
    switch (moedaDestino) {
        case "USD": conversao = valorEmReais / 5.0; 
        break;
        case "EUR": conversao = valorEmReais / 5.5;
        break;
        case "GBP": conversao = valorEmReais / 6.5;
        break;
        default: conversao = "Moeda não suportada pelo conversor! Tente outra opção."
    }
    console.log(conversao);
}

calcularConversao (800, "sfg");