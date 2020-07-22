const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/api')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT

mongoose.connect( process.env.MONGODB_URL, {
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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/client/build'))
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
