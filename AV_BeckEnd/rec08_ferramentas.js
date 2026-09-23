 const entrada = require('readline-sync');

console.log("Cadastro de ferramentas");
const ferramentas = [];

for (let i = 0; i < 4; i++) {
    console.log(`Ferramenta ${i + 1}:`);
    const nome = entrada.question("Digite o nome da ferramenta: ");
    const quantidade = entrada.questionInt("Digite a quantidade em estoque: ");
    const minimo = entrada.questionInt("Digite o mínimo em estoque: ");

    const ferramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    ferramentas.push(ferramenta);
}

console.log("Situação das ferramentas:");
for (let i = 0; i < ferramentas.length; i++) {
    console.log("-".repeat(30));
    const ferramenta = ferramentas[i];
    console.log(`${i + 1} - ${ferramenta.nome}`);
    console.log(`Quantidade: ${ferramenta.quantidade}`);
    console.log(`Mínimo: ${ferramenta.minimo}`);

    if (ferramenta.quantidade < ferramenta.minimo) {
        console.log("Situação: REPOR");
    } else {
        console.log("Situação: ESTOQUE SUFICIENTE");
    }
}
console.log("-".repeat(30));