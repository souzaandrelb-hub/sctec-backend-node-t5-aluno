const pedro = {
    nome: "Pedro", 
    idade: 15
};
const maria = {
    nome: "Maria Joaquina", 
    idade: 59
};

function maiorDeIdade (usuario) {
    return usuario.idade >= 18;
};

function verificarAcesso(usuario, regra){
    if(regra(usuario)) {
        console.log(`${usuario.nome}: Acesso permitido`);
    } else {
        console.log(`${usuario.nome}: Acesso negado`);
    }
}

verificarAcesso(pedro, maiorDeIdade);
verificarAcesso(maria, maiorDeIdade);


