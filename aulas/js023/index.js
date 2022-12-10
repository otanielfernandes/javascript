//Manipulando datas 
let data = new Date();
console.log(data);

//Pegando somente o ano:

let ano  = data.getFullYear();
alert(ano);

//Pegando o mês:

let mes = data.getMonth() + 1;
console.log(mes);

//Pegando o mês por escrito:

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//Pegando o dia da semana:
    let diaSemana = data.getDay();
    console.log(diaSemana);

//Pegando por escrito:
const diasDaSemana = new Array("Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");

let diaEscrito = diasDaSemana[data.getDay()];
console.log(diaEscrito);

//Pegando a hora:
let hora = data.getHours();
console.log(hora);

//Pegando os minutos:
let minutos = data.getMinutes();
console.log(minutos);

//Pagando segundos:
let segundos = data.getSeconds();
console.log(segundos);

//Pegando o padrão brasileiro da data:

let dataBR = data.toLocaleString("pt-BR", {dateStyle: 'short'});
console.log(dataBR);


