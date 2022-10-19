const http = require('http'); // de sistema
const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
    res.statusCode = 418;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        success: true,
        canIGetCoffee: false,
        responseCode: 123
    }))
})

server.listen(port, hostname, () => {
    console.log('Servidor corriendo')
})

// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain') 
//     res.end('Hola mundo!')
// })

// server.listen(port, hostname, () => {
//     console.log('Servidor corriendo')
// })
