const leia = require("readline-sync");


//Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let diagonalPrincipal = "";
let diagonalSecundaria = "";
let somaPrincipal = 0;
let somaSecundaria = 0;

// Percorra a matriz para obter os elementos das diagonais e calcular suas somas.
for (let indice = 0; indice < 3; indice++) {
    diagonalPrincipal += matriz[indice][indice] + " ";
    somaPrincipal += matriz[indice][indice];

    diagonalSecundaria += matriz[indice][2 - indice] + " ";
    somaSecundaria += matriz[indice][2 - indice];
}

console.log("\nOs elementos da Diagonal Principal são: ");
console.log(diagonalPrincipal);

console.log("\nOs elementos da Diagonal Secundária são: ");
console.log(diagonalSecundaria);

console.log(`\nA soma dos Elementos da Diagonal Principal é: ${somaPrincipal}`);
console.log(`\nA soma dos Elementos da Diagonal Secundária é: ${somaSecundaria}`);