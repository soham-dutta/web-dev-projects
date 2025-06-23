// express is the best framework for node its called the engine and on installing it it brings the node modules 
// always set the type=module in package.json bcoz we use import 
// here we set the server in express
import express from 'express'
const app =express();
const port =3002;
// routing in express is easier see below 

app.get('/',(req,res)=>{
    res.send("Welcome to home page");
})
app.get('/srk',(req,res)=>{
    res.send("Jawan");
})
app.listen(port,()=>{console.log(`server is runniing on port ${port}`)})
