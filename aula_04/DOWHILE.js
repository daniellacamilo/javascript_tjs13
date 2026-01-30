const leia = require("readline-sync");

let numero, resultado, contador = 3;

do {
    numero = leia.questionInt("Digite um número inteiro: ");
    resultado = numero * 5;

    console.log("\nO resultado da multiplicação é: " + resultado);

}while (contador <= 2);

