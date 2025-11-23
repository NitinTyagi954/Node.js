// Here is the full **project question written in a clean paragraph form**, just like an exam or interview question:

// ---

// # ⭐ **FINAL PARAGRAPH-STYLE QUESTION (Copy to Notebook)**

// Create a complete user management backend system using **Express.js** and the **Node.js File System (fs) module**. The application should first display a registration form (using a GET route) where the user can enter their name, email, and age. When the user submits the form using the POST method, the server should read the submitted data, convert it into a JavaScript object, and then store it inside a file named **`users.json`**. If the file does not already exist, your code must create the file automatically. If the file exists, your application must first read the existing users, append the new user to the list, and then save all users back into the same file.

// Additionally, create a GET route **`/users`** that reads all user data from `users.json` and displays the full list on a webpage in a clean, readable HTML format. Then create another GET route named **`/delete`**, which should accept an email as a query parameter (like `/delete?email=test@gmail.com`). When this route is accessed, the server must locate that user inside `users.json`, remove them from the list, and save the updated list back to the file, finally responding with a message such as “User deleted successfully.”

// Also create a route **`/clear`** that deletes the entire `users.json` file using `fs.unlinkSync()`. Lastly, add a route **`/stats`** that uses `fs.statSync()` to show important file details such as size, creation time, and last modified time. The goal of this question is to test your understanding of Express routing, GET and POST methods, query parameters, JSON handling, and all major operations of the fs module including reading, writing, appending, deleting, checking file existence, and fetching file statistics.

// ---

// If you want, I can also:

// ✅ Break this into tasks
// ✅ Give full solution code
// ✅ Give hints step-by-step (so you solve yourself)

// Just tell me!

const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({extended : true}));
app.get("/",(req,res)=>{
    const form = fs.readFileSync("./practice/index.html");
    res.send(form);
})
app.post("/submit",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const mail = req.body.email;  
})