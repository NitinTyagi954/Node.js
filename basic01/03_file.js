const fs = require('fs');
// fs.writeFileSync("./text.txt","hey i am nitin from 03_file.js");
// console.log(fs.readFileSync("./text.txt" , "utf-8")); // sync...
// fs.readFile("./text.txt" , "utf-8" , (err , result)=>{
//     if(err){
//         console.log("Error" , err);
//     }else{
//         console.log(result);
//     }
// }); // async it expect the call back it dont return value directly 
// it expect one callback which cantrol error and return 

fs.appendFileSync("./text.txt" , `${Date.now()} hey there \n`);
fs.cpSync("./text.txt" , "./copy.txt");
fs.unlinkSync("./copy.txt")
console.log(fs.statSync("./text.txt").isFile());

// blocking (Sync) 
// when we call Blocking Operation i will got to Thread Pool
//Thread Assign to it if free then after completion it return result 
// so if all the threads are busy user should wait for result 
//(Non - Blocking (Async))}
// it will directly executed but it also require thread