import mongoose from 'mongoose';
const userSchema =new mongoose.Schema({
    name :{type:String,required:true},
    email :{type:String,required:true},
    password :{type:String,required:true},
    age :{type:Number},
    phone :{type:Number},
    createdAt :{type:Date,default:Date.now}

})
// userSchema contains the scheme in which data will be present
export const User = mongoose.model("user",userSchema); // creates a collection names "users" which contains the database with dbname as u can see in the server.js file 
