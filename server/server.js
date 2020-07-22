const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/api')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 8080;

mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/localUsers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//HTTP request logger
app.use(morgan('tiny'))

app.use("/", routes)

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
