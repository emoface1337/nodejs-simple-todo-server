require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = 7777

const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NANE
const mongoUrl = `mongodb+srv://userface:${password}@cluster0.cdzyo.mongodb.net/${dbName}`

const tasksRoute = require('./routes/tasks')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/tasks', tasksRoute)

const start = () => {
    try {
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('connected to mongodb')
            })
        app.listen(port, () => console.log(`server started on port ${port}`))
    } catch
        (e) {
        console.log(e)
    }
}

start()
