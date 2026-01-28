const leia = require("readline-sync");

let A = leia.questionFloat("Digite o valor de A aluno: ");

let B = leia.questionFloat("Digite o valor de B aluno: ");

let C = leia.questionFloat("Digite o valor de C aluno: ");

let soma = A + B

if (soma > C) {
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    console.log("A Soma de A + B é Menor do que C");
}if (soma == C) {
    console.log("A Soma de A + B é Igual a C");
}