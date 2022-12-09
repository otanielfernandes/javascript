//Criando uma função:
function ativarContagem(){
    tempo = setInterval(function(){
    var cronometro = document.getElementById("teste").innerHTML;

        var soma = parseInt(cronometro) - 1;

        if(soma === 0){
            document.getElementById("teste").innerHTML = "Tempo esgotado";
            pararContagem()
        }

        else{
            document.getElementById("teste").innerHTML = soma;
        }
    }, 1000);

}

function pararContagem(){
    clearInterval(tempo);
}