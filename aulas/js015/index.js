function verificaCor(){
    let cor = document.getElementById("icor").value;
    switch(cor){
        case "Azul":
            document.body.style.backgroundColor = "blue";
        break;
        
        case "Amarelo":
            document.body.style.backgroundColor = "yellow";
        break;

        case "Roxo":
            document.body.style.backgroundColor = "purple";
            break;

        default:
            document.getElementById("teste").innerHTML = "A cor " +  cor + " "  + "encontra-se indisponível no nosso site";
    }
}