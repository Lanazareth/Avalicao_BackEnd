const entrada = require('readline-sync');

console.log("Cadastro de setores");

const setores = [];

for (let i = 0; i < 6; i++) {
    const nomeSetor = entrada.question(`Digite o nome do setor ${i + 1}: `);
    setores.push(nomeSetor);
}

console.log("\nSetores cadastrados:");
for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}
console.log("-".repeat(30));