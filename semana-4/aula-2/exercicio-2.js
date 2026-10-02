const produtos = [ 
{nome: "Cadeira", preco: 300},
{nome: "Mesa", preco: 2000},
{nome: "Sofá", preco: 6000}    
];

for(let i = 0; i < produtos.length; i++) {

    const dados = `${produtos[i].nome} - R$ ${produtos[i].preco}`


    console.log(dados);
}