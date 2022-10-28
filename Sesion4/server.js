const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

app.get('/html', (req,res) => {
    res.setHeader('Content-Type', 'text/plain')
    const html = fs.readFileSync('index.html')
    res.send(html);
})

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(PORT, () => {
    console.log(`App corriendo en puerto ${PORT}`)
})