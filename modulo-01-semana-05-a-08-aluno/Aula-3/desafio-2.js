function verificarNome(nome) {
  return nome.length >= 3;
}

function validarCadastro(nome, callback) {
  if (callback(nome)) {
    console.log("Cadastro permitido");
  } else {
    console.log("Nome inválido");
  }
}

validarCadastro("Ana", verificarNome);
validarCadastro("Jo", verificarNome);
