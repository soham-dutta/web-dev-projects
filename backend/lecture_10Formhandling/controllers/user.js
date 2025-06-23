import {User} from "../Models/User.js";  // .js is very necesaary
export const userRegister = async (req,res) =>{
    try{
    const user =await User.create(req.body);
    res.json({
        message:"User Created !",
        NewUser: user,
        success:true,
    })
   }
   catch (error){
   res.json({message:error.message})
   }
};