const entrada = require('readline-sync');

console.log("=== Producao em ciclos ===");

const pecas = entrada.questionInt("Digite a quantidade de peças por ciclo: ");

let acumulado =  0;

for (let ciclo = 1;ciclo <=12; ciclo++) {
  acumulado += pecas;
  console.log(`Ciclo ${ciclo} - Producao acumulada: ${acumulado}`);
};