//Criando um laço:
var ano = new Date().getFullYear();
for (var    i = ano; i >= 1990; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>"
}