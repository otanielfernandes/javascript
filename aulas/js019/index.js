//Criando um array:

const carros = new Array("Hyundai","Ford","Lexus", "Discovery");

var tamanho = carros.length;
for(i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}