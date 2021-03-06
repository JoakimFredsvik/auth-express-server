const express = require('express')
const app = express()
const volleyball = require('volleyball')
const auth = require('./auth/index.js')
require('dotenv').config()

// port
const PORT = 3456 || env.PORT

// middlewares
app.use(volleyball)
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.use('/auth', auth)



app.listen(PORT)
console.log("Listening on port:"+PORT)