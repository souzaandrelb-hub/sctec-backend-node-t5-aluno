const consultas = [
    {
    paciente: "Júlio",
    medico: "Rogério", 
    horario: "14h"
    },

    {
    paciente: "Pedro",
    medico: "Denílson", 
    horario: "15h"
    },

    {
    paciente: "Laís", 
    medico: "Samanta", 
    horario: "16h"
    }
];

console.log(consultas);

consultas[1].horario = "15h30";

console.log(consultas);

const consultasJSON = JSON.stringify(consultas);

console.log(consultas);

const JSONconsultas = JSON.parse(consultasJSON);
console.log(consultas);