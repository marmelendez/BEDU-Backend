// Modulos que nosotros mismos creamos

// Classic function
function sumarFn(num1, num2) {
    console.log(num1 + num2);
}

// Restar
function restarFn(num1, num2) {
    console.log(num1 - num2);
}

// Dividir
function dividirFn(num1, num2) {
    console.log(num1 / num2);
}

//  Multiplicar 
function multiplicarFn(num1, num2) {
    console.log(num1 * num2);
}

// Random
random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

module.exports = {sumarFn, restarFn, dividirFn, multiplicarFn, random};
// Ya se puede utilizar en otros archivos


// Arrow function
// const sumar = (num1, num2) => console.log(num1 + num2);
