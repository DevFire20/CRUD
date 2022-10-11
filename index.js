const express = require('express')
const app = express()
const connectDb = require('./config/db')

connectDb()
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})
app.use('/', require('./routes/post'))

app.listen(3000, () => {
    console.log("app is on port 3000")
})