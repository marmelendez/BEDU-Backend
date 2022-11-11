const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(PORT, () => {
    console.log(`App corriendo en puerto ${PORT}`)
}) 

app.get('/', (req, res) => {
    res.send('<h1>Mi API</h1>')
})

app.get('/api/', require('./routes/index.js'))
