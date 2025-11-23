// ⭐ Goal

// Form → GET request → Save data → Show success message.
// by post method 
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({extended : true}));
app.get("/",(req,res)=>{
    const form = fs.readFileSync("./practice/index.html" , "utf8");
    res.send(form);
})
app.post("/submit",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    fs.appendFileSync("user_data.txt" , `New Entry ->  Name : ${name} , Age : ${age}`);
    res.send("File Save SuccessFully!");
})
app.listen(3000,()=>{
    console.log("server started")
})