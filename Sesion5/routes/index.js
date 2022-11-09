const express = require('express')
const router = express.Router()

router.user('/notes', require('./notes'))

module.exports = router