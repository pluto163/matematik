const http = require("http")
const url = require("url")
const port = process.env.PORT || 3030
const fs = require("fs")
const path = require("path")
console.log("started")
 
http.createServer((req,res)=>{
    console.log("connection on: "+String(req.socket.remoteAddress))
    var pathName = url.parse(req.url,true).pathname
    console.log(pathName)

    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

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
    else if(pathName == "/script"){
        fs.readFile("script.js",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"text/javascript"
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/styles"){
        fs.readFile("styles.css",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"text/css"
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/home"){
        fs.readFile("home.png",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"image/svg+xml"
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/basic"){
        fs.readFile("basic.html",(err,data)=>{
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
    else if(pathName == "/cebir"){
        fs.readFile("cebir.html",(err,data)=>{
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
    else if(pathName == "/favicon"){
        fs.readFile("favicon.ico",(err,data)=>{
            if(err){console.log(err)}

            else{
            res.writeHead(200, {
                "Content-Type":"favicon"
            })
            res.write(data)
            res.end()
            }

            
        })
    }
    else if(pathName == "/grafik"){
        fs.readFile("grafik.html",(err,data)=>{
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

    else if(pathName == "/wolfram"){
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write("YESS")
        res.end()
    }



    else{
        res.writeHead(404)
        res.end()
    }


    

    
}).listen(port)

console.log("listening on "+port) 
