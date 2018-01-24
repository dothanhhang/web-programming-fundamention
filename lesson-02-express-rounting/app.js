'use strict'
let express = require('express')
let app = express()

app.get('/', function () {

})

app.get('/about', function () {

})

app.listen(8000,function () {
    console.log('app start at http://localhost:8000 ')
})
// Buoc 1 tao express