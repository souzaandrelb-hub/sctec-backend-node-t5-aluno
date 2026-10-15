function buscarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === 10) {
                resolve({ 
                id: 10,
                nome: "Notebook",
                preco: 3500
                });
            } else {
                reject("Produto não encontrado");
            }

            
           
        }, 2000)
    })
}

buscarProduto(10)
    .then((resultado) => {
        console.log(resultado);
    });



