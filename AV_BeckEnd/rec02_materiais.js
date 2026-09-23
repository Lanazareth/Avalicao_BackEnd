const entrada = require('readline-sync');

const nomePeca = entrada.question(" Digite o nome da Peça: ");
const Qntdd = entrada.questionInt(" Digite a Quantidsade comprada: ");
const valorUnitario = entrada.questionFloat(" Digite o valor unitario da Peça: ");

const totalCompra = Qntdd * valorUnitario;

console.log("=== RESUMO DA COMPRA ===");
console.log(`Peça comprada: ${nomePeca}`);
console.log(`A quantidade comprada foi de: ${Qntdd}`);
console.log(`O valor unitario e de : ${valorUnitario.toFixed(2)}`);
console.log(` O total da compra e de: ${totalCompra.toFixed(2)}`);
console.log("-".repeat(30));