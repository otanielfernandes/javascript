//Aprendendo Operadores

//Declarando variáveis
var valor1, valor2, total;

//Atribuindo valores

valor1 = 5;
valor2 = 3;

/* total = valor1 + valor2;
alert('O total é =' + " " + total) */

/* ++valor1;
alert('O valor1 foi incrementado, logo ficou:' + " " + valor1); */

/* valor1 += valor2;

alert('O valor1 é = ' + " " + valor1); */

total = (valor1 !== valor2);
alert(total);


var idade, eleitor, resultado;
idade = 64;

eleitor = (idade < 18) ? "Não eleitor." : "Sim, eleitor.";

alert('A resposta é : ' + eleitor + " " +'A idade dele é' + " " + idade);

resultado = (idade > 60 && idade < 70);
alert(resultado);