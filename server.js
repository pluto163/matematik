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
    else if(pathName == "/script.js"){
        fs.readFile("script.js",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"javascript"
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/styles.css"){
        fs.readFile("styles.css",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/home.svg"){
        fs.readFile("home.svg",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/basic.html"){
        fs.readFile("basic.html",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"javascript"
            })
            res.write(data)
            res.end()
            }

            
        })
    }

    

    
}).listen(port)

console.log("listening on "+port) 
