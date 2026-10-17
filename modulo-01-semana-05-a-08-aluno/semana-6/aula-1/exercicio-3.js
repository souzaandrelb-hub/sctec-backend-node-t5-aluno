class ContaBancaria {

    static contas = [];
    
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;

        ContaBancaria.contas.push(this);
    
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
            console.log(`Sr(a) ${this.titular}, o saldo da sua conta bancária após o depósito de R$ ${valor} é de R$ ${this.saldo}`);
        } else {
            console.log("Depósito não realizado. O valor informado deve ser maior que zero.")
        }
    
    }

    sacar(valor) {
        if(this.saldo - valor >= 0) {
            this.saldo -= valor;
            console.log(`Sr(a) ${this.titular}, o saldo da sua conta bancária após o saque de R$ ${valor} é de R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente. Vefique o saldo da sua conta");
        }
    }


}

const conta1 = new ContaBancaria("Pedro Pedreira", 200);
const conta2 = new ContaBancaria("Rafael Ratão", 500);

conta2.depositar(15);
conta2.sacar(500);
conta2.sacar(15);
conta2.sacar(10);

conta1.depositar(-10);
conta1.sacar(201);