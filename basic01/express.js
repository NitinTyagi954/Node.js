// const express = require("express");
// const { log } = require("console");
// const app = express();
// app.get('/',(req,res)=>{
//     return res.send("hello from home page");
// });
// app.get("/about" , (req,res)=>{
//     return res.send("hello from about page");
// });
// app.listen(3000,()=>{
//     console.log("surver started!");
// })
// practice 2.....................
// const express = require("express");
// const app = express();
// app.get("/",(req , res)=>{
//     console.log(`${req.url} hello url `);
//     return res.send("Hello from Home page");
// })
// app.get("/about" , (req , res)=>{
//     return res.send("Hello from the About page");
// })
// app.listen(3000,()=>{
//     console.log("Server started!");
// })


// question practice .
// (Q-1)=> 
// Write a server that returns HTML instead of text
// Expected Output:
// <h1>Welcome</h1>
// <p>This is HTML response</p>
// solution 
// const express = require("express");
// const app = express();
// app.get("/" , (req,res)=>{
//     res.send(`
//     <h1>Welcome</h1>
//     <p>This is HTML response</p>
//     `
//     );
// })
// app.listen(3000,()=>{
//     console.log("server started!");
// })

// question - 2 
// Q3. Create a route /products that returns this JSON
// {
//   "item": "Laptop",
//   "price": 50000
// }
// answer 
const express = require("express");
const app = express();
app.get("/products" , (req,res)=>{
    res.json({
        "item": "laptop",
        "price": "30000",
    });
})
app.listen(3000);
