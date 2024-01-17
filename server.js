http = require("http")
url = require("url")
    

http.createServer((req,res)=>{
    console.log("connection")

    res.end("hello world")
}).listen("8080")

console.log("listening")