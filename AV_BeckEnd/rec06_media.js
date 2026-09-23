const entrada = require('readline-sync');

console.log("Média de tempos de atendimento");

let acumulador = 0;

for (let i = 1; i <= 6; i++) {
    const tempo = entrada.questionFloat(`Digite o tempo de atendimento ${i}: `);
    acumulador += tempo;
}
const media = acumulador / 6;

console.log(`Soma dos tempos: ${acumulador}`);
console.log(`Média dos tempos: ${media}`);
onsole.log("-".repeat(30));