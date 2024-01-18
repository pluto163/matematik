const http = require("http")
const url = require("url")
const port = process.env.PORT || 3030
const fs = require("fs")

console.log("started")

function removeSlashes(str) {
    if (str.charAt(0) === '/' && str.charAt(str.length - 1) === '/') {
      return str.slice(1, -1);
    } else {
      return str;
    }
  }
 
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
    
    else{
        fs.access(removeSlashes(pathName),fs.constants.F_OK,(err)=>{
            if(err){console.log(err)}
            else{
                fs.readFile(String(pathName),(err,data)=>{
                    if(err){console.log(err)}
        
                    else{
                    res.writeHead(200, {})
                    res.write(data)
                    res.end()
                    }
        
                    
                })
            }
        })
    }

    

    
}).listen(port)

console.log("listening on "+port) 
