const fs = require("fs");
const http = require("http");
const path = require("path");


const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    // const pathContent = path.join(__dirname,"index.html");
    const htmlContent = fs.readFileSync(__dirname+"/index.html")
    res.end(htmlContent)
})

server.listen(4000,()=>{
    console.log("server listen at port 4000");
    
})