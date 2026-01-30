const leia = require("readline-sync");

let numero1= leia.questionInt("Digite o primeiro numero inteiro: ");
let numero2= leia.questionInt("Digite o segundo numero inteiro: ");

console.log(`No intervalo entre ${numero1} e ${numero2}:`);

if (numero1 < numero2){
    for(let indice = numero1; indice <= numero2; indice++);
    if (indice % 3 == 0 && indice % 5 ==0);
    console.log(`${indice} é multiplo de 3 e 5`);
    }
else{
    console.log(`O intervalo é inválido!`);           

}
