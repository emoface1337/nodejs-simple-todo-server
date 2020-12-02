const express = require('express')
const bodyParser = require('body-parser')
const inject = require('require-all')
const mongoose = require('mongoose')

const app = express()
const router = express.Router
const port = 7777


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log('server started'))
