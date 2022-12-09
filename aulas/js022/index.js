//Criando uma class:

class Carro{
    constructor(val1,val2,val3){
        this.marca = val1;
        this.modelo = val2;
        this.ano = val3;
        }
        buzina(){
            return this.modelo + " Acelerou: Vrooommmmmmm...";
    }
        travar(){
            return this.modelo + " Travou:Craaarrrrrr";
        }
}

const elantra = new Carro("Hyundai", "Elantra", 2013);

//Trocando o valor de uma propriedade:
elantra.modelo = "Accent";

//
console.log(elantra.buzina());
console.log(elantra);

//novo objecto
const F150 = new Carro("Ford", "F150", 2017);

//Trocando o valor de uma propriedade:
F150.ano = 2019;
console.log(F150);
console.log(F150.travar());