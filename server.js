var http = require('http')

http.createServer((req,res) =>{
    res.end("<h1>Hello Node Server<h1>")
}).listen(4000)

console.log("Server started at http://127.0.0.1:4000")