const http = require("http")
const url = require("url")
const port = process.env.PORT || 3030
 
http.createServer((req,res)=>{
    console.log("connection")
    var pathName = url.parse(req.url,true).pathname


    
    res.end(pathName)
}).listen(port)

console.log("listening on "+port) 
