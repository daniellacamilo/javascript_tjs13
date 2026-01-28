const leia = require('readline-sync');


console.log("==========================================================");
console.log("              CALCULADORA COM SWITCH CASE                 ");
console.log("==========================================================");
console.log(" (1) - Saldo                                              ");
console.log(" (2) - Saque                                              ");
console.log(" (3) - Deposito                                           ");
console.log("==========================================================");
console.log("                                                          ");


let operacao = leia.questionInt('Digite o numero da operacao: ');
let saldo = 1000;

switch (operacao) {
    case 1:
        console.log(`Seu saldo é de R$ ${saldo}`);  
        break;
    case 2:
        let saque = leia.questionFloat('Digite o valor do saque: ',
                                {limitmessage: 'Digite um numero float'});

        if (saldo < saque) 
            console.log(`Saque insuficiente!`);
        else if (saldo >= saque) 
            console.log(`Saque feito com sucesso! Seu novo saldo é de R$ ${saldo - saque}`);
        break;
    case 3:
        let deposito = leia.questionFloat('Digite o valor do depósito: ',
                                {limitmessage: 'Digite um numero float'});

        console.log(`Depósito realizado com sucesso! Seu novo saldo é de R$ ${saldo + deposito}`);
        break;
    case 4:
        console.log('Operacao invalida!');
        break;
}