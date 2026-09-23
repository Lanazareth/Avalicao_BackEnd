const entrada = require('readline-sync');

console.log("Verificação de nível de óleo");

const nivelOleo = entrada.questionFloat(" digite o nivel de porcentagem do oleo: ");

if (nivelOleo >= 40 && nivelOleo <= 80) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NECESSARIA.");
}