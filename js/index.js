
//1. definir variables
let num1, num2, suma, resta, multi, divi, operacion;
let resultado = document.getElementById("resultado")

// el dom es la capacidad que tiene java scrip para manejar los elementos

//.2 Funciones: son pequeñas lineas de codigo que se corren cuando las usamos

function iniciar() {  
    // capturo las variables
    num1 = prompt("introduzca el 1º numero: ");
    num2 = prompt("introduzca el 2º numero: ");
    // paso las variables a decimales
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

}

function sumar(){
    suma = num1 + num2;
    resultado.innerHTML = "el resultado de la operacion es: " + suma;
    console.lon(num1 + num2);
}

function restar(){
    resta = num1 - num2;
    resultado.innerHTML = "el resultado de la operacion es: " + resta;
    
    console.lon(num1 - num2);
}

function multiplicar(){
    multi = num1 * num2;
    resultado.innerHTML = "el resultado de la operacion es: " + multi;
    
    console.lon(num1 * num2);
}

function dividir(){
    divi = num1 / num2;
    resultado.innerHTML = "el resultado de la operacion es: " + divi;
    
    console.lon(num1 / num2);
}


