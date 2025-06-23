import express from 'express'
import path from 'path'
const app=express();
const port =3004;
const dir=path.resolve();
const url =path.join(dir,'./index.html')
const staticurl=path.join(dir,'public');
app.use(express.static(staticurl));
// send response in json form dont use res.send()  rather we use res.json()
// to send a html file we have joined the path 
app.get('/',(req,res)=>{
    res.sendFile(url);
})
// using template engine like ejs embedde javascript we can use js in html
// we need to add the express.static(path)  for all the files included in the static folder becoz otherwise the css or js inside the public will be not included 
const name="soham"
const products=[
    {title:"phone",price:10000},
    {title:"laptop",price:50000}
]
app.get('/ee',(req,res)=>{
    res.render('index.ejs',{name,products})
})
app.listen(port,()=>console.log(`server is running on port ${port}`))