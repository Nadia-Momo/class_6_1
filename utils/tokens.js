const jwt = require('jsonwebtoken');
const generateAccessToken=(payload)=>{
     const token = jwt.sign(payload, process.env.JWT_SEC);
     console.log(token)
return token
   
// console.log(token)
// res.cookie("acc_token",token)

}
module.exports={generateAccessToken}
// { id:existingUser._id,email:existingUser.email }