//O Laço de Repetição WHILE
const leia = require("readline-sync");

let idadeMenorque21 = 0;
let idadeMaiorque50 = 0;
let continua = true;


while (continua) {
    idade= leia.questionInt("Digite uma idade: ");
    if (idade < 21 && idade > 0){
            idadeMenorque21++;
    }
    else if (idade > 50){
            idadeMaiorque50++;
   
    }
    console.log("------------------------------------------------");
    continua = leia.keyInYNStrict("\nDeseja continuar? (s/n): ");  
    console.log("------------------------------------------------");
}


 console.log(`Total de pessoas menores de 21 anos: ${idadeMenorque21}`);

    console.log(`Total de pessoas maiores de 50 anos: ${idadeMaiorque50}`);

  
// Entrada
80, 15, 20, 13, 5, 52, 33, 26, 71, 18, -1

 