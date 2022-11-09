const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const sequelize = require('../config/db') 

router.post('/login', async (req, res) => {
    const {body} = req
    const user = await sequelize.models.users.findOne({where: {email: body.email}})

    if (!user) return res.status(401).json({message: 'Unauthorized'})
    if (!user.validPassword(body.password)) return res.status(401).json({message: 'Invalid credentials!'})

    const token = jwt.sign({userId: user.id}, 'secretKey', {
        expiresIn: 3600 //seg
    })

    return res.json({message: 'Authenticated succesfully!'})
})

router.post('/signup', (req, res) => {
    // TODO implement sign up
})  

module.exports = router