const express=require("express")
const app=express()

// app.use("/",(req,res)=>{
//     res.json({message:"hello world1"})
// })

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/users",(req,res)=>{
    res.send("hello userssssssss")
})

app.listen(5000,()=>{
    console.log("port 5000 listening")
})