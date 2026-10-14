const usuario = {
    nome: "André",
    idade: 17
}

function maiorDeIdade(usuario) {
    return usuario.idade >= 18;
}

function verificarAcesso(usuario, validacao) {
    if(validacao(usuario)) {
        console.log("Acesso liberado!");
    
    } else {        
        console.log("Acesso não permitido para menores de idade!")
    }

    

}

verificarAcesso(usuario, maiorDeIdade);