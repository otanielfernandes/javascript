//criando uma função:

function Verificar(){
    let nome = document.getElementById("inome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "Este campo está vazio, preencha-o";
        p.style.color = "red";

        }

    else{
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns, campo preenchido";
        p.style.color = "green";
    }
}