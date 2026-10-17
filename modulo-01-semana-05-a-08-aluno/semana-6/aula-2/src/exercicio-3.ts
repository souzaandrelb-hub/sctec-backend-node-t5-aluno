const produtos: {nome: string, preco: number}[] = [
    {nome: "Garrafa", preco: 100},
    {nome: "Notebook", preco: 3550}
];

console.log(produtos);

produtos.forEach((produto) => {
    console.log(`O nome do produto é ${produto.nome}`);
        
  
})