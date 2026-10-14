const login = {
    email: "pedrocabecudo@gmail.com",
    senha: "123456789"
}

function validarEmail(email) {
    return email.includes("@");
}

function validarSenha(senha) {
    return senha.length > 8;
}

function validar(dadosAcesso, validacaoEmail, validacaoSenha) {
    const email = dadosAcesso.email;
    const senha = dadosAcesso.senha;

    if (validacaoEmail(email) && validacaoSenha(senha)) {
        console.log("Acesso realizado com sucesso!");
    } else {
        console.log("E-mail e/ou senha inválido(s)!");
    } 

  
}

validar(login, validarEmail, validarSenha);
