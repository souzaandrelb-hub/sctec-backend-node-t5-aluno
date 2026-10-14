const precos = [100, 200, 50];

function processarPrecos(precos, callback) {
    return precos.map(callback);
}

function aplicarDesconto(preco) {
    return preco * 0.9;
}

const precosComDesconto = processarPrecos(precos, aplicarDesconto);

console.log(`A lista sem desconto é ${precos}`);
console.log(`A lista com desconto é ${precos}`);





