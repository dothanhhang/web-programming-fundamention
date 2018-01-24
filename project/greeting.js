let http = require('http')
let webApp = http.createServer(function (req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' } )
    res.end('Hello World')

})
const PROTOCOL ='http'
const LOCALHOST = '0.0.0.0'
const PORT = 8000
webApp.listen(PORT)
console.log(`listening at port ${PROTOCOL}://${LOCALHOST}:${PORT}`)