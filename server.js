const http = require("http")
const url = require("url")
const port = process.env.PORT || 3030
const fs = require("fs")
console.log("started")
 
http.createServer((req,res)=>{
    console.log("connection")
    var pathName = url.parse(req.url,true).pathname
    console.log(pathName)
    if(pathName == "/"){
        fs.readFile("index.html",(err,data)=>{
            console.log("reading")
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"text/html"
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else{res.end("404 not found :'(")}

    
}).listen(port)

console.log("listening on "+port) 
