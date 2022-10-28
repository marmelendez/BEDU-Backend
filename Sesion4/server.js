const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log(`App corriendo en puerto ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Mi API</h1>')
})

app.get('/html', (req,res) => {
    res.setHeader('Content-Type', 'text/plain')
    const html = fs.readFileSync('index.html')
    res.send(html);
})

const notes = [{
    id: 1,
    title: 'dummy',
    content: 'nota dummy'
}]

app.get('/notes', (req, res) => {
    res.send(notes)
})
