function buscarFilme(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
                if(id === 7) { 
                    resolve({
                        id: 7,
                        titulo: "Interestelar", 
                        ano: 2014, 
                        genero: "Ficção científica"})              
                
                } else {
                    reject("Filme não encontrado")
                }
        }, 3000)
    });
}

buscarFilme(8)
    .then((resultado) => {
        console.log(resultado);
    })

    .catch((resultado => {
        console.log(resultado);
    }))