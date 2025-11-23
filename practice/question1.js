const express = require("express");
const fs = require("fs");
const app = express();
app.get("/",(req,res)=>{
    const form = fs.readFileSync("./practice/index.html","utf8");
    res.send(form);
})
app.get("/submit" , (req,res) =>{
    res.send(`Name : ${req.query.name} <br> 
        Age : ${req.query.age}`);
});
app.listen(3000,()=>{
    console.log("Server Started");
})