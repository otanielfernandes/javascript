//Uma função para Temperatura de Fahrnheit e Celsius

function ParaCelsius(Fahrnheit){
            return (5/9) * (Fahrnheit - 32);
}

var x = ParaCelsius(77);

alert("A temperatura é igual a" + " " + x + " ºC");
