const path = require('path');
const fs = require('fs');

let lineas = 0;
let espacios = 0;
let caracteres = 0;

data = fs.readFileSync(path.join(__dirname, '/input.txt'), { encoding: 'utf-8'})

var dataLines = data.split('\n');
lineas = dataLines.length;

for (let i = 0; i < data.length ; i++) {
    if (data[i] == ' ') {
        espacios += 1;
    } else {
        caracteres += 1;
    }
}

console.log('Lineas: ', lineas);
console.log('Espacios: ', espacios);
console.log('Caracteres: ', caracteres);