const leia = require("readline-sync");

let numero1 = leia.questionFloat("Digite o primeiro número: ");
let numero2 = leia.questionFloat("Digite o segundo número: ");              
let numero3 = leia.questionFloat("Digite o terceiro número: ");
let numero4 = leia.questionFloat("Digite o quarto número: ");

let calculo = (numero1 * numero2) - (numero3 * numero4);

if (numero1 < 0 || numero2 < 0 || numero3 < 0 || numero4 < 0) {
    console.log(`Número inválido`);
}   
else {
    console.log(`O resultado do cálculo é: ${calculo}`);
}

//ENTRADA
//Número 1: 5
//Número 2: 6
//Número 3: 7
//Número 4: 8

//SAÍDA
//O resultado do cálculo é: -26


//ENTRADA
//Número 1: 5
//Número 2: 6
//Número 3: -7
//Número 4: 8

//SAÍDA
//O resultado do cálculo é: 86


