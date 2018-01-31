'use strict'
let express = require('express')
let app = express()

app.set('port',8000)

app.get('/ejs', (req,res)=> {
    app.set('view engine','ejs')
    let params = {
        user: {
            name: 'Son',
            birth: '18/12/88'
        },
        products: ['mouse','keyboard']
    }
    res.status(200).render('greeting',params)
})