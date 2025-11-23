// 🟦 Q1. Build a Form (HTML) → Send Data Using GET Method
// 🎯 Task

// Make a simple HTML form:

// Input: name

// Submit using GET

// Server receives data and responds:
// "Hello <name>"
const express = require("express");
const fs = require("fs");
const app = express();
app.get("/" , (req,res)=>{
    const html_file = fs.readFileSync("./basic01/index.html" , "utf8");
    res.send(html_file);
})
app.get("/submit" , (req,res)=>{
    const name = req.query.name;
    res.send(`<h1>hello ${name} <`);
})
app.listen(3000 , ()=>{
    console.log("server started!");
})