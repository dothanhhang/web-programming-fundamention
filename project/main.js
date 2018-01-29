'use strict'
let express = require('express')
let app = express()

app.get('/',  (req,res)=> {
    console.log('get request for /')
    res.status(302).send('Trang chủ')
})

app.get('/dsthu', (req,res)=> {
    console.log('get request for /about')
    res.status(200).send ('Danh sách thư')


})



    app.listen(8000,function () {
    console.log('app start at http://localhost:8000 ')
})
// Buoc 4 mot cach dung khac function
