const produtos = [
    {nome: "Notebook", preco: 3500},
    {nome: "Mouse", preco: 120}, 
    {nome: "Monitor", preco: 950}
];

for(i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i].nome} - R$ ${produtos[i].preco}`);
}