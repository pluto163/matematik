const http = require("http")
const url = require("url")
const express = require("express")
 
http.createServer((req,res)=>{
    console.log("connection")

    res.end("hello world")
}).listen(process.env.PORT || 3030)

console.log("listening")