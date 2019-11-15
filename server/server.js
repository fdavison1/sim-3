require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const c = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

//middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}))

//endpoints
app.post('/auth/register', c.register)
app.post('/auth/login', c.login)
app.delete('/auth/logout', c.logout)

//listening
massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, ()=> console.log(`server ${SERVER_PORT} is on and ready to rock`))
})



