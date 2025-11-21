


const fs = require("fs");
const{transform} = require("stream");
const upperCaseTransform = new Transform({
    transform(chunk, encoding,callback){
        this.push(chunk.tostring(UpperCse()));
        callback();
    }
})
fs.createReadStream('input.txt','utf8')
.pipe(upperCaseTransform)
.pipe(fs.createWriteStream)('output.txt')