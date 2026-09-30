const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual foi a nota da primeira prova? ", function(nota1) {
    rl.question("Qual foi anota da segunda prova? ", function(nota2) {
        rl.question("Qual foi a nota de terceira prova? ", function(nota3) {
            nota1 = Number(nota1);
            nota2 = Number(nota2);
            nota3 = Number(nota3);

            function calcularMedia (nota1, nota2, nota3) {
                let media = (nota1 + nota2 + nota3)/3;
                console.log(`A média das notas deste aluno é ${media}`);
                return media;
                
            }
            

        calcularMedia(nota1, nota2, nota3);                       

            rl.close();
        })
    })

});


            



