function buscarPrevisao(cidade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cidade === "Fortaleza") {
                resolve({
                    cidade: "Fortaleza",
                    temperatura: 48, 
                    condicao: "Ensolarado"
                })
            } else {
                reject("Previsão não encontrada.")
            }
        }, 3000)
    })
}

buscarPrevisao("Florianópolis")
    .then((resultado) => {console.log(resultado)})
    .catch((resultado) => {console.log(resultado)})