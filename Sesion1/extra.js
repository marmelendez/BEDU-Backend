// FizzBuzz
function fizzBuzz() {
    for(let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        }
    }
}

// fizzBuzz()

let { random } = require('./principal.js')
const lista = []

for (let i = 0; i < 50; i++) {
    lista.push(random(i, 100))
}

console.log(lista);