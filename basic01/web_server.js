// // const http = require("http");
// // const server = http.createServer((req,res) => {
// //     console.log("request from server");
// //     res.end("hello from server");
// // });
// // server.listen(8000 , () => {
// //     console.log("server started!");
// // });

// const http = require("http");
// const fs = require("fs");
// const myserver = http.createServer((req,res)=>{
//     const log = `${Date.now()} : ${req.url} new request received \n`;
//     fs.appendFile("log.txt" , log , (err,date) => {
//         switch(req.url){
//             case "/" : res.end("I am home page ");
//             break;
//             case  "/about": res.end("i am about page");
//             break;
//             case "/contact": res.end("i am contact page");
//             break;
//             default:
//                 res.end("404 not found");
//         }
//     });
// })

// myserver.listen(8000,()=>{
//     console.log("server workes fine");
// })
// // fs.unlink(log.txt);

 