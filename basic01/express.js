const express = require("express");
const { log } = require("console");
const app = express();
app.get('/',(req,res)=>{
    return res.send("hello from home page");
});
app.get("/about" , (req,res)=>{
    return res.send("hello from about page");
});
app.listen(3000,()=>{
    console.log("surver started!");
})