import http from 'http'
const port =3001;
const server=http.createServer((req,res)=>{
    console.log(req.url);
   if(req.url==='/')
    res.end("welcome to home ")
    if(req.url=== '/shahrukh')
        res.end("king is back");
    if(req.url ==='/amir')
        res.end("comeback ");
});
server.listen(port,()=>console.log(`server is runnning on port ${port}`))
// if we see https://localhost3001/wdm   see req contains a lot of different parameters so req.url has the /wdm 
// best framework of node.js is express.js // 
