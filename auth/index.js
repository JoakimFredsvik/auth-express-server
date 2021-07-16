const express = require('express')
const router = express.Router()
const database = require('../db/index.js')

router.get('/', (req, res) => {
    res.send('☂︎')
})

router.post('/signup', (req, res) => {
    
    database.addUser(req.body)
    //database.validateUser(req.body)
    
    res.send("signup")
})
router.post('/signin', (req, res) => {
    if(database.validateUser(req.body)){
        res.status(200)
        res.send("sucsess!")
        return;
    } else{
        res.status(401)
    res.send("unauthorized")
    }
    
})
module.exports = router