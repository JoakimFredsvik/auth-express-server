const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('☂︎')
})

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.send("signup")
})
module.exports = router