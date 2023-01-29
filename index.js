const express=require("express")
const app=express()


app.get("/",(req,res)=>{
    res.send("hello world24")
})

app.get("/users",(req,res)=>{
    res.send("hello userssssssss")
})

app.listen(5000,()=>{
    console.log("port 5000 listening")
})