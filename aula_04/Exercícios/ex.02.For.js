const leia = require("readline-sync");


let numeropar = 0;
let numeroimpar = 0;


for (let indice = 0; indice < 10; indice++){
 numero = leia.questionInt(`Digite o ${indice + 1} º numero inteiro: `);

    if (numero % 2 == 0){
            numeropar++;
    }
    else {
            numeroimpar++;
    }
}

console.log(`Total de números pares: ${numeropar}`);

    console.log(`Total de números ímpares: ${numeroimpar}`);

    // Entrada
    2, 7, 31, 4, 11, 6, 9, 25, 8, 15