function fazerLogin(email, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin@email.com" && senha === "123456") {
                resolve("Login realizado com sucesso.")
            } else {
                reject("E-mail ou senha inválidos.")
            }
        }, 3000)
    })
}

fazerLogin("admin@email.com", "123456")
    .then((resultado) => {console.log(resultado)})
    .catch((resultado) => {console.log(resultado)})

fazerLogin("admin@email.com", "12345")
    .then((resultado) => {console.log(resultado)})
    .catch((resultado) => {console.log(resultado)})