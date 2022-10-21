const path = require('path');
const fs = require('fs');
// const server = require(path.join(__dirname, '', 'server.js'))
// console.log(server);

// Crear archivo, si ya existe lo sobreescribe
fs.writeFile(path.join(__dirname, '/ejemplo_1.txt'), 'Remplaza el textoo!', { encoding: 'utf-8'}, (error) =>{
    if (error) throw error
    console.log('Archivo creado!');
})

// Editar archivo, estos metodos son asincronos por eso corre primero esta linea
// depende de la máquina
fs.appendFile(path.join(__dirname, '/ejemplo_1.txt'), '\nNueva linea!!', { encoding: 'utf-8'}, (error, data) =>{
    if (error) throw error
    console.log('Archivo actualizadooo!!');
})

// Leer archivo
fs.readFile(path.join(__dirname, '/ejemplo_1.txt'), { encoding: 'utf-8'}, (error, data) =>{
    if (error) throw error
    console.log(data);
})


// Para hacer funciones sincronas agregar Sync al final de los métodos, no necesitan callback

// Crear archivo, si ya existe lo sobreescribe
fs.writeFileSync(path.join(__dirname, '/ejemplo_1.txt'), 'Remplaza el textoo!', { encoding: 'utf-8'})

// Editar archivo, estos metodos son asincronos por eso corre primero esta linea
// depende de la máquina
fs.appendFileSync(path.join(__dirname, '/ejemplo_1.txt'), '\nNueva linea!!', { encoding: 'utf-8'})

// Leer archivo
data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), { encoding: 'utf-8'})