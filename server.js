const http=require('http');
const fs=require('fs');
const path=require('path');

function servePath(filePath,res){
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) 
  {
    res.writeHead(500,{"Content-Type":"text/html"})
    res.end("<h1>500- Internal Server Error</h1>")
  }
  else{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end(data)
  }
});
}
const server=http.createServer((req,res)=>{
    if(req.url=='/' ||req.url=="/home")
    servePath(path.join(__dirname,"public","home.html"),res)
else if(req.url=="/aboutus")
    servePath(path.join(__dirname,"public","aboutus.html"),res)
else if(req.url=="/contactus")
    servePath(path.join(__dirname,"public","contactus.html"),res)
else{
    res.writeHead(404,{"Content-Type":"text/html"})
    res.end("<h1>404-Page Not Found</h1>")
}
})

const PORT=4000;



//creating server
server.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`)
})