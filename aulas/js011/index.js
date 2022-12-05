let h3 = document.getElementById("lista");
h3.append('Arroz, Feijão, Massa.');


                 //0      //1       //2       //3
const lista = ["Arroz", "Feijão", "Leite", "Açucar"];
alert(lista);

//Os arrays podem ser escritos da seguinte forma:
/*
const lista = [];
lista[0] = "Arroz";
lista[1] = "Feijão"
lista[2] = "Leite";
lista[3] = "Açucar";
*/
//Este array é igual ao primeiro, o que mudou foi apenas a forma da declaração

// A outra forma também é a seguinte:
/*
    const lista = new Array("Arroz", "Feijão", "Leite", "Açucar");
*/


// A diferença entre matriz e objeto:

const pessoa = ["Otaniel", "Fernandes", 19]; //array
let result = pessoa[0] +  pessoa[1];
const Pessoa = {nome:"Otaniel", sobrenome:"Fernandes", idade:19}; //objeto

console.log(result);
console.log(Pessoa.idade);

const itens = new Array("Pão", "Chá", "Ovo", "Farinha", "Iogurte", "Sal", "Salsicha", "Bacalhau", "Lasanha", "Mandioca");

//Para sabermos os tamanho do array, ou seja, para sabermos quantos valores está armazenando o array.
alert(itens.length);

//Para sabermos o último elemento do array:
alert(itens[itens.length - 1]);

// Caso queiramos asicionar mais um elemento no array:

itens.push("Manteiga");
console.log(itens);

// Ou pode ser também destab forma: 
// itens[itens.length] = "Manteiga"

//Ou ainda, indicando a posição:
// itens[10] = "Manteiga";

alert(Array.isArray(itens));