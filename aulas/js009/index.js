//Trabalhando com Objectos

let carro = {
    marca:"Hyundai", 
    modelo:"Elantra", 
    ano:2013, 
    matricula:"LD-9379-AG",
    buzina: function(){alert('Biiiiiii');}, 

    completo: function(){
        return "A marca deste carro é " + " " + this.marca + " de modelo" + " " + this.modelo + " fabricado em" + " " + this.ano}
};

//Mostrando todas as propriedades do objeto:
console.log(carro);

//Mostrando uma propriedade específica:
    alert(carro.modelo);
    alert(carro["marca"]);
    alert(carro["ano"]);
    alert(carro.buzina());
    alert(carro.completo());