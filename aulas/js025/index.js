//Criando um objet:

const carro = {
    marca:"Ford",
 modelo:"F150", 
 motor: ["1.2", "1.4", "1.6", "V8"]
};
//O objeto não será mostrado de uma maneira certa, porque não se cpnsegue ler um objeto de forma escrita, porque o objeto é algo literal;

//Para objeto ser mostrado, devemos criar uma variavél:

//JSON.stringify()--> converte objetos em texto;

let texto = JSON.stringify(carro);
document.getElementById("area").innerHTML = texto;

//Se eu quiser mostrar apenas um valor de uma  propriedade do objeto:

//Terei de criar novamente uma variável e converter em objeto:

let obj = JSON.parse(texto);
//Mostrando somente um valor:
console.log(obj.motor[3]);
