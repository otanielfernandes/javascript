
const pessoa = ["Otaniel", "Lourenço"];
pessoa[2] = 19;
pessoa[3] = "Rico";
pessoa[4] = "Milionário";
pessoa[pessoa.length] = "Magnata";
pessoa.pop();
document.getElementById("teste").innerHTML = pessoa.join(" + ");

const produtos = new Array ("Arroz", "Massa", "Feijão", "Maçã", "Mandioca", 20);

produtos.shift();
//Ao eliminar o primeiro valor da matriz, o valor a seguir ganha a posição[0], neste caso, a posição [0] = "Massa";
alert(produtos[0]);


//Criando um array parav os meses do ano:


const meses = ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
meses.unshift("Janeiro");
document.write(meses);




//Criando novos Arrays:

const lista1 = ["Arroz", "Feijão", "Massa", "Funge"];
 const lista2 = ["Peixe", "Frango", "Picanha"];
const lista3 = ["Doces", "Salgados"];



//Concatenando arrays:

 const listaTotal = lista1.concat(lista2, lista3);
 // const listaTotal = lista1.concat(lista2); --- Mesma coisa que o de cima.
 alert(listaTotal);

 //Criando um novo array:

 const jogadores = ["Eliseu", "DiCaprio", "Otaniel Fernandes", "Aceltino Quianvo", "Neymar", "Ronaldinho", "Eurico"];

 const craque = jogadores.slice(2,6);//Mostrará de Otaniel Fernandes até ROnaldinho.

 alert(craque);


 //Criando um novo Array:
 const linguagens = ["PHP", "HTML", "CSS", "Java Script", "Java", "Phyton", "C#"];

 //Ordenando as linguagens em forma crescente/alfebética:
 const linguagemOrdem = linguagens.sort();
 alert(linguagemOrdem);


//Criando um novo array:

const nomes = ["Otaniel", "Denilson", "Maureth", "Eurico", "Aceltion"];
const ordemDecrescente = nomes.reverse();
alert(ordemDecrescente);

// Criando um novo array:
const numeros = [100, 500, 200, 350, 400];

numeros.sort(function(a,b){return b - a});
alert(numeros);

//Pegando o maior valor do array:

function MaiorNumero(array){
    return Math.min.apply(null, array);
}
alert(MaiorNumero(numeros));

//Pegando o menor valor: é fazer o mesmo, mas ao invés do "max" usamos o "min".

function MenorNumero(menor){
    return Math.min.apply(null,menor);
}
alert(MenorNumero(numeros));


//Criando um array:
const notas = new Array(19, 20, 17, 16, 14, 15, 9, 8, 5, 7, 4);
const notasApto = notas.filter(filtragem);

//Criando uma função:
function filtragem(value, index, array){
    return value > 15;
}
 document.getElementById("testando").innerHTML = notasApto;
