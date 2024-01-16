http = require("http")
url = require("url")

http.createServer((req,res)=>{
 res.end("hello world")
}).listen("8080")
