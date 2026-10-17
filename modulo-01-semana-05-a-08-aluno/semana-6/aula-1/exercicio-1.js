class Carro {
    constructor(marca, modelo, ano, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
}

const carro1 = new Carro("Peugeot", "206", 2005, 15000);
const carro2 = new Carro("Citroen", "C3", 2013, 25000);

console.log(carro1.marca, carro1.modelo);
console.log(carro2.marca, carro2.modelo);

console.log(carro1.ano, carro1.preco);
console.log(carro2.ano, carro2.preco);