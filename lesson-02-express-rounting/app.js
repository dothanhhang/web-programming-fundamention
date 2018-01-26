'use strict'
let express = require('express')
let app = express()

app.get('/', function (req,res) {
    console.log('get request for /')
    res.status(302).send('hello')
})

app.get('/about', function (req,res) {
    console.log('get request for /about')
    res.status(200).send ('hello world!!! i am Sam')

})

app.listen(8000,function () {
    console.log('app start at http://localhost:8000 ')
})
// Buoc 3 get request for /about
