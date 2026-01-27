"use strict"
// console.log(bonus);

var nome = "Rafael";
let Profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.90;
let bonus = 0.05;     
let numrero;

console.log(numero);

console.log("O tipo de variavel nome é: " + typeof(nome));

if (salarioBruto > 10000) {
    let mensagem = "Salário > 1000";
    console.log(mensagem);
    // console.log(mensagem);
}

console.log("Salário Líquido: "), 
	new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(salarioBruto + (bonus * salarioBruto))
