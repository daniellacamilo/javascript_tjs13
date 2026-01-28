const leia = require('readline-sync');

console.log("==========================================================");
console.log("              CALCULADORA COM SWITCH CASE                 ");
console.log("==========================================================");
console.log(" (+) - Soma                                               ");
console.log(" (-) - Subtracao                                          ");
console.log(" (*) - Multiplicacao                                      ");
console.log(" (/) - Divisao                                            ");
console.log("==========================================================");
console.log("                                                          ");


let numero1 = leia.questionFloat('Digite o primeiro numero: ',
                                {limitmessage: 'Digite um numero float'});

let numero2 = leia.questionFloat('Digite o segundo numero: ',
                                {limitmessage: 'Digite um numero float'});

let operacao = leia.keyIn('Digite o numero da operacao: ');

                                

switch (operacao) {
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break
    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);   
        break
     case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`); 
        break;
    default:
        console.log('Operacao invalida!');
        break;
}