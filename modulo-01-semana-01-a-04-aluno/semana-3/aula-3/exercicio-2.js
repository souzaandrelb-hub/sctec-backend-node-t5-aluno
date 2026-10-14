// Criação de Array

let disciplinas = ["Português", "Matemática", "História", "Geografia", "Ciências"]

// Exibição de todas as disciplinas
console.log("Exibição de todas as disciplinas:")
let disciplinasText = "As disciplinas disponíveis para matrícula são: "

for(let indice = 0; indice < disciplinas.length; indice++) {
    disciplinasText = disciplinasText + disciplinas[indice];
    if(indice < disciplinas.length - 1) {
        disciplinasText = disciplinasText + ", ";
    } else {
        disciplinasText = disciplinasText + ".";
    }
}

console.log(disciplinasText);

// Outra opção utilizando o join
console.log("Outra opção utilizando o join:");
let disciplinasTextB = 
"As disciplinas disponíveis para matrícula são: " + disciplinas.join(", ");
console.log(disciplinasTextB);


// Exibição da primeira disciplina
console.log("Exibição da primeira disciplina:");
let indicePrim = 1;
console.log(`A ${indicePrim}ª disciplina é ${disciplinas[indicePrim - 1]}`);


// Exibição da última disciplina
console.log("Exibição da última disciplina:");
console.log(`A última disciplina é ${disciplinas[disciplinas.length - 1]}`);

//Exibição da quantidade total de disciplinas cadastradas
console.log("Exibição da quantidade total de disciplinas cadatradas: ")
console.log(`A quantidade total de disciplinas cadastradas é ${disciplinas.length}`);