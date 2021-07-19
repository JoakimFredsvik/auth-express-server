const express = require('express')
const router = express.Router()
const database = require('../db/index.js')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.send('☂︎😎')
})

router.post('/signup', (req, res) => {
    
    database.addUser(req.body)
    
    
    res.send("signup")
})
router.post('/signin', (req, res) => {
    if(database.validateUser(req.body)){
        const payload = {
            username: req.body.username
        }
        jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        }, (err, token) => {
            if(err){
                res.status(402)
                res.send()
                return
            }else{
                res.status(200)
                res.json({
                    token
                })
                return
            }
        })
        
        
        return
    } else{
        res.status(401)
    res.send("unauthorized")
    }
    
})
module.exports = router