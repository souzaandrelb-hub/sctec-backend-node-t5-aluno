let funcionarios = ["Ana", "Carlos", "Mariana", "Narciso", "Pedro", "Ricardo"];

let listarFuncionarios = (funcionarios) => {
    
    for(let indice = 0; indice < funcionarios.length - 1; indice++) {
        console.log(`Funcionário ${indice + 1}: ${funcionarios[indice]}`);
    }
};

listarFuncionarios(funcionarios);

