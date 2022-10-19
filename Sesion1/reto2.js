const http = require('http'); // de sistema
const hostname = '127.0.0.1';
const port = 3003;

const pingRes = {
    success: true,
    body: 'pong'
}

const healthRes = {
    success: true,
    body: {
        version: '1.0.0',
        launchDate: '18/10/22'
    }
}

const defRes = {
    success: true,
    body: 'Bedu API V1'
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    switch (req.url) {
        case '/ping':
            res.end(JSON.stringify(pingRes));
            break;
        case '/health':
            res.end(JSON.stringify(healthRes));
            break;
        default:
            res.end(JSON.stringify(defRes));
            break;
    }
})

server.listen(port, hostname, () => {
    console.log('Servidor corriendo')
})