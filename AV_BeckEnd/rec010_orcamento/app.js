const entrada = require('readline-sync');

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento");
 
const nomeCliente = entrada.question("Digite o seu nome: ");
const valorMateriais = entrada.questionFloat("Digite o valor dos materias: ");
const horaServico = entrada.questionInt("digite a Quantidade de horas de servico: ");

const maoDeObra = calcularMaoDeObra(horaServico);
const total = calcularTotal(valorMateriais, horaServico);
const desconto = verificarDesconto(total);


console.log("=== Resumo do Orçamento ===");
console.log(`Cliente: ${nomeCliente}`);
console.log(`Valor dos Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mão de Obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: ${desconto}`);
console.log("-".repeat(40));
