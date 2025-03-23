require('dotenv').config() // stores sensitive info in .env file

const express = require('express') // common - uses require()
//import express from "express"  module - uses import

const app = express()
const port = 4000 // this is also in .env file

app.get('/', (req, res) => { // callback()
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => { // '/name' - '/' is very imp and genrelly a common mistake 
    res.send('anter@twitter')
})

app.get('/login',(req,res) => {
    res.send('<h1>Login here</h1>') // we can write anything
})

app.get('/youtube', (req,res) => { // may need to rerun the npm run start command after every new callback function
    res.send('<h2>Welcome to YT</h2>')
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`) // server is listening to the port
// })

//for dotenv
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
