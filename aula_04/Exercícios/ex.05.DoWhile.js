const leia = require("readline-sync");

let numeropositivo = 0;
let numeronegativo = 0;
let numero; 


//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
do {
    numero = leia.questionInt("Digite um número inteiro: ");   
 
    if (numero === 0){
            break;
    }
    if (numero > 0){
            numeropositivo += numero;
            }

    else if (numero < 0){
            numeronegativo;
    }
    
}
    

     while (true);
//Mostre na tela a soma de todos os números digitados, que sejam positivos. 
    console.log(`A soma dos números positivos é: ${numeropositivo}`);
    

    // Entrada
    2, 7, -31, 4, -11, 6, 9, -25, 8, 0