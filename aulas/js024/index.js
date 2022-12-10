//Criando um objeto de data:

d = new Date();
//Pegando datas por partes:
diames = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

dataPadrao = diames + "/" + mes + "/" + ano;
if (diames !== 0 && diames <= 9){
    diames = '0' + diames;
    console.log(dataPadrao);
}

else{
    diames = '' + diames;
    console.log(dataPadrao);
}

//Comparar valores de data. EX: Vencimento

var hoje = new Date();
var vencimento = new Date(2022, 11, 11);

if (hoje < vencimento){
    alert("Sua conta encontra-se invalida, porque está vencida!");
}

else{
    alert("Pode desfrutar avontade, o prazo da sua conta ainda não venceu!");
}

//Diferença entre duas datas em dias:

var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

alert("Faltam " + diferencaDias + " dias para o ano terminar");