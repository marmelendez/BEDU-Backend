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

console.log(random(1, 50))