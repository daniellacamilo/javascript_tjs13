const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite a nota 1 ");
let n2 = leia.questionFloat("Digite a nota 2 ");
let n3 = leia.questionFloat("Digite a nota 3 ");
let n4 = leia.questionFloat("Digite a nota 4 ");

let media = (n1 + n2 + n3 + n4) / 4;   

if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 ) {
    console.log(`Nota inválida`);
}       
else
    console.log(`A média final é: ${media}`);



//ENTRADA
//Nota 1: 10
//Nota 2: 8.0
//Nota 3: 7.0
//Nota 4: 7.5


//SAÍDA
//A média final é: 8.125