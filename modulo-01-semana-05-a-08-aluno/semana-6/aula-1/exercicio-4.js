class Aluno {
    static alunos = [];

    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;

        Aluno.alunos.push(this);

    }

    calcularMedia() {
        
        
        return (this.nota1 + this.nota2) / 2;
    }

    verificarAprovacao() {
        if(this.calcularMedia() >= 7) {
            return "aprovado";
        } else {
            return "reprovado"
        }

    }

    exibirResultado() {
        console.log(`${this.nome}, sua média é ${this.calcularMedia()}. Você foi ${this.verificarAprovacao()}`);
    }
}

const aluno1 = new Aluno("Javi Mattar", 7.5, 6.8);
const aluno2 = new Aluno("Mirela Capela", 6.5, 6.0);
const aluno3 = new Aluno("Michael Joca", 10, 10);


Aluno.alunos.forEach((aluno) => {
    aluno.exibirResultado();
});
