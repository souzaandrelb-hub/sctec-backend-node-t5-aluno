let cliente = {
    nome: "André Bertonça",
    idade: 43,
    cidade: "Florianópolis",
    endereco:{
    rua: "Rua João Meirelles",
    numero: 1451,
    bairro: "Abraão",
    estado: "Santa Catarina", 
    cep: "88085-201",
    pais: "Brasil"  
    }
}


let clienteJSON = JSON.stringify(cliente);
console.log(clienteJSON);