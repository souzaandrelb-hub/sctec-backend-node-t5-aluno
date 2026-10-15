function criarSaldo(saldo) {
    
        return function adicionarSaldo(deposito) {
        saldo += deposito;
        return saldo;
    };

}

const adicionarSaldo = criarSaldo(100);


console.log(adicionarSaldo(50));
console.log(adicionarSaldo(20));
console.log(adicionarSaldo(30));

