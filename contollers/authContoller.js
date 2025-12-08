const User = require("../models/useSchema");
const { isValidEmail } = require("../utils/validation");

const signUp=async(req,res)=>{
    const {fullname,email,password}=req.body;
    if(!fullname) return res.status(400).send({message:"FullName is required"})
         if(!email) return res.status(400).send({message:"Email is required"})
             if(!password) return res.status(400).send({message:"Password is required"})
                if(!isValidEmail(email)) return res.status(400).send({message:'Enter a valid email address'})
                    const existingUser=await User.findOne({email})
                if(existingUser) return res.status(400).send({message:'User with this email already exist'})
                    const user=new User({
                fullname,
                email,
                password
                })
                await user.save()
res.status(201).send({message:'Registration successful'})
}
const login=async(req,res)=>{
    res.send('login')
}
module.exports={signUp,login}