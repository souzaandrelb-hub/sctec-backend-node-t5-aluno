const readline = require("readline/promises");

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

async function validarNum ()

async function numeros() {
    const num1 = await rl.question("Digite o primeiro número:");
    const num2 = await rl.question("Digite o segundo número:");
    num1 = Number(num1);
    num2 = Number(num2);
    let maior;
    let menor;

    verIgu = num1 === num2;
    if ()   {

   
        if (!verIgu) {
            if(num1 > num2) {
                maior = num1
                menor = num2
            } else {
                maior = num2
                menor = num1
            } else {
                
            }
        }   
    }

    console.log(`${num1} é igual a ${num2}? ${verIgu}`);
    console.log(`${num1} é diferente de ${num2}? ${!verIgu}`);
    console.log(`O número maior é ${maior}`)
    console.log(`O número menor é ${menor}`)
    rl.close();
}

numeros();



