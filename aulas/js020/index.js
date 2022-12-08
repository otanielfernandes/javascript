//criando uma função:

function ativarContagem(){
    document.getElementById("teste").innerHTML = "Iniciou contagem";
    tempo = setTimeout(function(){
        document.getElementById("teste").innerHTML = "Executou o setTIimeout()";
        document.body.style.backgroundColor = "yellow";
    }, 5000);
}

function pararContagem(){
    clearTimeout(tempo);
        document.getElementById("teste").innerHTML = "Você parou a contagem";
    
}
