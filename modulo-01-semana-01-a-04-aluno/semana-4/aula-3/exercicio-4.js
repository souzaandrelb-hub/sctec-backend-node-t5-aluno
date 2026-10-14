const notas = [8.5, 9.0, 7.5, 6.0, 10.0];

const total = notas.reduce((soma, notas) => soma + notas, 0);
console.log(`Soma das notas: ${total}`);

const media = (total) => total / 5;

console.log(`Média da turma é ${media}`);