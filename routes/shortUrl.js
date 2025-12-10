const express=require("express")
const route=express.Router()
route.post('/create',()=>{
    console.log("login")
})
module.exports=route