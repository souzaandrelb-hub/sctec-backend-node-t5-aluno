function callback(nome, email) {
    const nomeValido = nome.length >= 5;
    const emailValido = email.includes("@") && email.includes(".");

    return nomeValido && emailValido;
}

function validarCadastro(nome, email, callback) {
    if(callback(nome, email)) {
        console.log("Cadastro permitido");
    } else {
        console.log("Nome ou e-mail inválido");
    }
    
}

validarCadastro("Pedro", "juquinha@gmailcom", callback);

