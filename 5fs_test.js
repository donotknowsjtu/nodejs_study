// const fs = require('fs');
// let data = fs.readFileSync('hello.txt');
// fs.writeFileSync('hellw2.txt',data);


const fs = require('fs');
const rs = fs.createReadStream('hello.txt');
const ws = fs.createWriteStream('hello3.txt');
rs.on('data', chunk => {
    ws.write(chunk);
})