//Criando uma função:


function pegaCor(){
    let cor = document.getElementById("icor").value;
    cor = cor.toLowerCase();

    switch(cor){
        case "azul":
            document.body.style.backgroundColor = "blue";
        break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";
        break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
        break;

        case "roxo":
            document.body.style.backgroundColor = "purple";
        break;

        case "laranja":
            document.body.style.backgroundColor = "orange";
        break;

        case "preto":
            document.body.style.backgroundColor = "black";
        break;

        case "cinzento":
            document.body.style.backgroundColor = "gray";
        break;

        case "verde":
            document.body.style.backgroundColor = "green";
        break;

        case "castanho":
            document.body.style.backgroundColor = "#351601";
        break;

        case "rosa":
            document.body.style.backgroundColor = "pink";
        break;

        default:
            document.getElementById("teste").innerHTML = "Cor indisponível:" +  " " +cor;
    }
}