const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Digite o valor do salário bruto: "); 
let adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: "); 
let horasExtras = leia.questionFloat("Digite o valor das horas extras: ");
let descontos = leia.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

if (salarioBruto < 0 || adicionalNoturno < 0 || horasExtras < 0 || descontos < 0) {
    console.log(`Valor inválido`);
}
else {
    console.log(`Salário líquido: R$ ${salarioLiquido}`);
}   

// ENTRADA
//Salário Bruto: 2000.00

//Adicional Noturno: 500.00

//Horas Extras: 100.00

//Descontos: 200.00


// SAÍDA
//Salário Líquido: 2800.00
