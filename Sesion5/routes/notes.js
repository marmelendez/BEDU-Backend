const express = require('express')
const router = express.Router()

const notes = [{
    id: 1,
    title: 'dummy',
    content: 'nota dummy'
}]

// GET -> Read
router.get('/notes', (req, res) => {
    res.send(notes)
})

// POST -> Create
router.post('/notes', (req, res) => {
    notes.push(req.body);
    res.send(`Nota ${req.body.id} agregada`)
})

// PATCH -> Update
router.patch('/notes', (req, res) => {
    notes[req.body.id-1] = req.body
    response.send(`Nota ${req.body.id} modificada`)
})

// DELETE -> Delete
router.delete('/notes', (req, res) => {
    notes = notes.filter(note => note.id != req.body.id)
    response.send(`Nota ${req.body.id} eliminada`)
})

module.exports = router