require('dotenv').config()
const express = require('express')
const massive = require('massive')
const c = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

//endpoints


//listening
app.listen(SERVER_PORT, ()=> console.log(`server ${SERVER_PORT} is on and ready to rock`))