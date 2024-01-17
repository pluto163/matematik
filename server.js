const http = require("http")
const url = require("url")
 
http.createServer((req,res)=>{
    console.log("connection")

    res.end("hello world")
}).listen(process.env.PORT || 3030)

console.log("listening")