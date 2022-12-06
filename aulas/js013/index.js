//Declaração de uma variavél com o seu valor:

var interruptor = "on";
//Instrução condicional:

if (interruptor == "on"){
    alert("A lampada encontra-se ligada.");
}

else {
    alert("A lampada encontra-se desligada.");
}

//Declarando outra variável para mostrar hora:

var hora = new Date().getHours();
var min = new Date().getMinutes();

if (hora < 12 ){
    alert("Muito bom dia, são " + hora + ":" + min +  "da manhã!");
}
else if (hora > 12 && hora < 18){
    alert("Olá, muito boa tarde, são" + hora + ":" + min + "h da tarde!");
}
else {
    alert("Boa noite, são" + hora + ":" + min +  "h da noite!");
}