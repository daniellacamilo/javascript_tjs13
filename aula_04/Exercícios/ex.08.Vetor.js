const leia = require("readline-sync");

let vetor = [];
let elementosNosImpares = "";
let elementosPares = "";
let soma = 0;
let media = 0;



// Leia 10 números inteiros e armazene em um vetor.
for (let indice = 0; indice < 10; indice++) {
    vetor[indice] = leia.questionInt(`Digite o ${indice + 1}º numero: `);
    soma += vetor[indice];
    
}

// Percorra o vetor para encontrar elementos nos índices ímpares e todos os elementos que são pares.
for (let indice = 0; indice < 10; indice++) {

    if (indice % 2 !== 0) {
        elementosNosImpares += vetor[indice] + " ";
    }

    if (vetor[indice] % 2 === 0) {
        elementosPares += vetor[indice] + " ";
    }
}

console.log("\nOs elementos nos índices ímpares são:");
console.log(elementosNosImpares);

console.log("\nOs elementos pares são:");
console.log(elementosPares);


//Calcule a soma.
console.log(`\nA soma é: ${soma}`);

// Calcule a média dos elementos do vetor.
media = soma / 10;
console.log(`A média é: ${media.toFixed(2)}`);

//Entrada   
2, 5, 1, 3, 4, 9, 7, 8, 10, 6