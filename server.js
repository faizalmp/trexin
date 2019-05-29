const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./controller/router')
const key = require('./keys').mongoURI
const cors = require('cors')

const app = express();

mongoose
    .connect(key)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err))

const db = mongoose.connection
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.use(cors())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.send({ message : "Welcome to tracking apps" })
    res.end()
})

app.listen(process.env.PORT || 3000, () => {
    console.log("listening port 3000")
})