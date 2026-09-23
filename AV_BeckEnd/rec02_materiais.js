const entrada = require('readline-sync');

console.log("Cadastro de peças");

const nomePeca = entrada.question("Digite o nome da peça: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preço unitário: ");

const totalCompra = quantidade * precoUnitario;

console.log("=== RESUMO DA COMPRA ===");
console.log(`Peça comprada: ${nomePeca}`);
console.log(`Quantidade comprada: ${quantidade}`);
console.log(`Preço unitário: ${precoUnitario.toFixed(2)}`);
console.log(`Total da compra: ${totalCompra.toFixed(2)}`);
console.log("-".repeat(30));