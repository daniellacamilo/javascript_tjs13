const leia = require("readline-sync");

let numero = leia.questionFloat("Digite um numero: ");

if (numero > 0) {
  console.log("O número é positivo");
} else {
  console.log("O número é negativo");
}

if (numero % 2 == 0 && numero < 0) {
  console.log("O número é par e negativo!");
} else if (numero % 2 != 0 && numero > 0) {
  console.log("O número é ímpar e positivo!");
}
