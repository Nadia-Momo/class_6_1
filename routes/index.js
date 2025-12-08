const express=require("express")
const route=express.Router()
const authRoutes=require('./auth')
const shortUrl=require('./shortUrl')
route.get('/',(req,res)=>{
    res.status(200).send('hello')
})
route.use('/auth',authRoutes)
route.use('/url',shortUrl)
route.use((req,res)=>{
    res.send('404 not found')
})
module.exports=route