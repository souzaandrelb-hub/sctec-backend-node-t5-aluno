const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntarValor() {
  rl.question("Digite o valor a ser convertido: ", (valorEmReais) => {
    if (valorEmReais.trim() === "" || isNaN(valorEmReais) || valorEmReais < 0) {
      console.log("Valor inválido! Tente novamente");
      
      perguntarValor();
      return;
    }
    valorEmReais = Number(valorEmReais);
    perguntarMoeda(valorEmReais);
  });

}


    
function perguntarMoeda(valorEmReais) {
    rl.question(
      "Digite a moeda para a qual quer converter o valor: ",
      (moedaDestino) => {
        

        let conversao;
        switch (moedaDestino) {
          case "USD":
            conversao = valorEmReais / 5.0;
            break;
          case "EUR":
            conversao = valorEmReais / 5.5;
            break;
          case "GBP":
            conversao = valorEmReais / 6.5;
            break;
          default:
            conversao =
              "Moeda não suportada pelo conversor! Tente outra opção.";
        }
        console.log(conversao);

        rl.close();
      }, 

    ); 
} 

