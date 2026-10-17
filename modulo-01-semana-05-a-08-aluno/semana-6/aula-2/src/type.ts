type Usuario = {
    nome: string;
    idade: number;
};

let usuario1: Usuario = {
    nome: "André Luiz",
    idade: 43
}

let usuario2: Usuario = {
    nome: "João", 
    idade: 49
}

type Status = "pendente" | "aprovado" | "reprovado"

let situacao: Status = "reprovado";


type Produto = {
    nome: string;
    preco: Number;
}

const produtos: Produto[] = [
    {nome: "Teclado", preco: 120}, 
    {nome: "Mouse", preco: 80},
    {nome: "Monitor", preco: 900},
    {nome: "Cabo USB", preco: 90}
]