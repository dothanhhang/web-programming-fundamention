let http = require('http')
let webApp = http.createServer(function (req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' } )
    res.end('greeting!')

})
const PROTOCOL ='http'
//const LOCALHOST = 'localhost'
const PORT = 8888
webApp.listen(PORT.)
//console.log(`listening at port ${PROTOCOL}://${LOCALHOST}:${PORT}`)
console.log(`listening at port ${PROTOCOL}://localhost:${PORT}`)
