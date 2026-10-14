const funcionarios = [
    {
        nome: "Pedro Silva",
        setor: "Financeiro" 
    },

    {
        nome: "Rogério Martins",
        setor: "TI"
    },
    
    { 
        nome: "Ricardo Pereira",
        setor: "Manutenção"
    },

    {
        nome: "Jandira Constantina",
        setor: "Administrativo"
    },

    {
        nome: "Bárbara Cruz", 
        setor: "TI"
    },

    {
        nome: "Beatriz Nunes", 
        setor: "Administrativo"
    },

    {
        nome: "Júlia Souza", 
        setor: "TI"
    }

];

const funcionarioTI = funcionarios.filter(f => f.setor === "TI");

console.log(funcionarioTI);