const entrada = require('readline-sync');

console.log("Classificação de vibracao");

const vibracao = entrada.questionFloat("Digite o valor da vibracao: ");

let situacao;
 
if (vibracao <= 3){
    situacao = "ESTAVEl";
}else if ( vibracao > 3 && vibracao <=6){
    situacao = "ATENCAO";
} else {
    situacao = "CRITICO";
}

console.log("-".repeat(30));
console.log(` A vibracao de valor: ${vibracao}`);
console.log(`Esta classificada em: ${situacao}`);
console.log("-".repeat(30));
