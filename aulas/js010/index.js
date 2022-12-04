// Criando uma fábrica (função):

 function Clique(){
    // Quando eu clicar uma vez no botão ele abrirá uma pequena janela dizendo o que está escrito abaixo;

    alert("Olá, você clicou no botão")
}

function DuploClique(){
    // Quando eu der um duplo clique no botão ele irá trocar a cor de fundo do body;
    document.body.style.backgroundColor = "BlueViolet";
}

function viraAmarelo(){
    // Qunado passar o mouse dentro do elemento e o mesmo mudar de cor
    let div = document.getElementById("teste");
    div.style.backgroundColor = "yellow";
}

function viraRoxo(){
    // Quando o mouse passar fora do elemento, o elemento deve voltar a cor inicial
    let div = document.getElementById("teste");
    div.style.backgroundColor = "purple";
}

/* function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('Otaniel Fernandes');
    p.style.color = "red";
}
*/

function precionarBotao(){
    alert('Você pressionou o botão e não soltou ainda');
}

function Focus(){
    let input = document.getElementById("campoTexto");

    input.style.backgroundColor = "yellow";
}

function soltarBotao(){
    alert('Opah, agora você soltou o botão');
}

function Tecla(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}