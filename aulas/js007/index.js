            //Criando funções

//Função para o câmbio do Dolar
function KwanzaparaDolar(Kwanza, Dolar){
    return Kwanza * Dolar;
}

var resultado;
/* 
resultado = KwanzaparaDolar(2000,650);
alert(resultado);
*/

/*
resultado = KwanzaparaDolar(cambio, valorDolar);

alert("O valor em Kwanzas é = " + resultado + " AOA ");
*/

//Função do câmbio do Euro

function KwanzaforEuro(Kwanza, cambioEuro){
    return Kwanza * cambioEuro;
}

const valKwanza = 590;
var valEuro = 150;

resultado = KwanzaforEuro(valKwanza, valEuro);

alert(resultado + " AOA" + " " +"é equivalente a " + valEuro + "Euros");


//Outra função
alert("Tente clicar no botão a seguir.");
function AlertaHello(){
    alert("Olá, você clicou no botão");
}

//Invocando esta mesma função de forma direta:
AlertaHello();