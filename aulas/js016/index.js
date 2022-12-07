function diaSemana(){
    var dia = new Date().getDay();
     switch(dia){
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é domingo";
        break;

        case 1:
            document.getElementById("teste").innerHTML = "Hoje é segunda-feira";
        break;

        case 2:
            document.getElementById("teste").innerHTML = "Hoje é terça-feira";
        break;

        case 3:
            document.getElementById("teste").innerHTML = "Hoje é quarta-feira";
        break;

        case 4:
            document.getElementById("teste").innerHTML = "Hoje é quinta-feira";
        break;

        case 5:
            document.getElementById("teste").innerHTML = "Viva o dia do HOMEM";
        break;

        case 6:
            document.getElementById("teste").innerHTML = "Hoje é sabado";
        break;

        default:
            document.getElementById("teste").innerHTML = "Não sei que dia é hoje";


    }

}