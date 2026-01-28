const leia = require("readline-sync");




    console.log({produto1, nomeproduto:"cachorro quente", preco: "10" }),
    console.log({produto2, nomeproduto:"x-salada", preco:"15"}),
    console.log({produto3, nomeproduto:"x-bacon", preco:"18"}),
    console.log({produto4, nomeproduto:"bauru", preco:"12"}),
    console.log({produto5, nomeproduto:"refrigerante", preco:"8"}),
    console.log({produto6, nomeproduto:"suco de laranja", preco:"13"});


let produto = leia.questionIntIn('Digite o numero do produto: ');
let preco 
let nomeproduto


switch (produto) {
    case 1:
        preco =10;
        nomeproduto = "Cachorro Quente";
        break;
    case 2:
        nomeproduto = "X-Salada";
        preco = 15
        break;                              
    case 3:
        nomeproduto = "X-Bacon"
        preco = 18;
        break;
    case 4:
        nomeproduto = "Bauru";
        preco = 12;
        break;
    case 5:
        nomeproduto = "Refrigerante";
        preco = 8  ;     
        break;
    case 6:
        nomeproduto = "Suco de Laranja";
        preco = 13;
        break;

 default:
        console.log('Operacao invalida!');
        break;

}

let quantidade = leia.questionInt("Digite a quantidade: ");

let valorTotal = preco * quantidade;
console.log(`Produto: ${nomeproduto} | Preço unitário: R$ ${preco} | Quantidade: $  {quantidade} | Valor total: R$ ${valorTotal}`);

