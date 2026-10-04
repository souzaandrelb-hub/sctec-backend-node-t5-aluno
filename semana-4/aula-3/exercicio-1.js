const vendas = [123, 321, 111, 222, 333, 444, 555]

const total = vendas.reduce((soma, vendas) => soma + vendas, 0);
console.log(`venda total dos produtos: ${total}`);