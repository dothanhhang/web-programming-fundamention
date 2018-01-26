'use strict'
let express = require('express')
let app = express()

app.get('/', function (req,res) {
    console.log('get request for /')
    res.status(302).send('hello')
})

app.get('/about', function () {

})

app.listen(8000,function () {
    console.log('app start at http://localhost:8000 ')
})
// Buoc 2 tao them duong dan hien hello
// Ham k ten