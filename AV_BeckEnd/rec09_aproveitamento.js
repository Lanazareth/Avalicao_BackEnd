const entrada = require('readline-sync');

console.log("=== Aproveitamento de produção ===");

const total = entrada.questionInt("Digite a quantidade total: ");
const util = entrada.questionInt("Digite a quantidade util: ");

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const percentual = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(percentual);

console.log(`Percentual de aproveitamento: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);
console.log("-".repeat(30));