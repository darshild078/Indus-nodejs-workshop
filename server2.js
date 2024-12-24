var http = require('http')
var a = 10
var b = 20
var c = a + b
var msg
if ( c == 30){
    msg = "The sum of a and b is 30"
}
else{
    msg = "The sum of a and b is not 30"
}
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("<b>A Value is"+a)
    res.write("</br>B is "+b)
    res.write(`</br><b>Sum is ${a+b}</br>`)
    res.end(msg)
}).listen(4000)

console.log("started the server at http://127.0.0.1:4000")