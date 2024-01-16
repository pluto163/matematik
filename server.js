http = require("http")
url = requires("url")

http.createServer((req,res)=>{
 res.end("hello world")
}).listen("8080")
