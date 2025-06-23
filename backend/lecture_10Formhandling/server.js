import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import { userRegister } from './controllers/user.js'
const app=express();
const port=3005;
const dir = path.resolve();
const staticUrl=path.join(dir,'public');
app.use(express.static(staticUrl)); // middleware to connect express and the static files like the css files present in public folder 
app.use(express.urlencoded({ extended: true })); // middleware that parses incoming form data (application/x-www-form-urlencoded) and makes it available in req.body. The extended: true option allows it to parse nested objects using the qs library (instead of the basic querystring library)
// connect with mongoose ,here mongosse acts as the bridge bw mongo db and react js 
// copy the connection string from mongodb ccompass 
mongoose.connect("mongodb+srv://sohamduttasd:p4iJ13HwNpLwTbrD@cluster0.zu9eju7.mongodb.net/",
    {
       dbName: "NodeJs_Mastery_Course"
    }
).then(()=>console.log("Mongodb is connected!")).catch((err)=>console.log(err))
app.get('/',(req,res)=>{
    console.log(req.body);
    res.render('index.ejs');
})
// since we are sending data to a database so we have to use an async function 
app.post('/form-submit',userRegister);


app.listen(port,()=>console.log( `server is running on port ${port}`));
// password of mongodb is :p4iJ13HwNpLwTbrD