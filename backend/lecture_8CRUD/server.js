import express from 'express'
const app = express();
const port = 3003;
app.get('/',(req,res)=>{
    res.send("Welcome to home page ")
})
// c- create post
// r- read get
// u - update put 
// d-  delete delete

app.listen(port,()=>{console.log(`server is running on port ${port} `)})
