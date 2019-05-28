const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./controller/router')
const key = require('./keys').mongoURI

const app = express();

mongoose
    .connect(key)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err))

const db = mongoose.connection
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.get('/', (req, res) => {
    res.send({ message : "Welcome to tracking apps" })
    res.end()
})

app.listen(process.env.PORT || 3000, () =>{
    console.log("listening port 3000")
})