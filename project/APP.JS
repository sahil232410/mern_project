const express = require('express');

const app= espress()
app.use(express.json())

app.post("/stud",(req,resp)=>{
    const data =req.body()
    resp.json(data)
    
})
app.listen(4500,(req,resp)=>{
    console.log("connected");
    
})