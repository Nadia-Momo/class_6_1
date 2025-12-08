const mongoose=require('mongoose')
const bcrypt = require("bcrypt");
const userSchema=new mongoose.Schema({
   fullname:{
    type:String,
    required:true
   } ,
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   }
},{timestamps:true})
userSchema.pre('save', async function() {
  const user = this;
  if (!user.isModified('password')) return ;
  try {
    user.password = await bcrypt.hash(user.password, 10); 
  
  } catch (error) {
  
  }
});
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User=mongoose.model('user',userSchema)
module.exports=User