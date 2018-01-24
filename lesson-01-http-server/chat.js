let http = require('http')
let webApp = http.createServer(function (req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' } )
    res.end('Hello!')

})
const PROTOCOL1 ='http'
//const LOCALHOST = 'localhost'
const PORT1 = 8888
webApp.listen(PORT1)
//console.log(`listening at port ${PROTOCOL}://${LOCALHOST}:${PORT}`)
console.log(`listening at port ${PROTOCOL1}://localhost:${PORT1}/chat`)
