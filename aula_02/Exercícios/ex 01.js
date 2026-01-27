const leia = require("readline-sync");

let salario = leia.questionFloat("Digite o valor do seu salário: ");
let abono = leia.questionFloat("Digite o valor do abono");

let novoSalario;

if (salario < 0 || abono < 0) { 
    console.log(`Salário e/ou abono inválidos.`);
}   
else
     novoSalario = salario + abono;
console.log(`Novo salário: R$ ${novoSalario}`);


// ENTRADA
//Salário: 10000

//Abono: 1000


// SAÍDA
//Novo salário: 11000.00