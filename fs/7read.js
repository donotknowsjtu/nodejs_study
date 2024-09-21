const fs = require('fs');
const rs = fs.createReadStream('hello.txt');
rs.on('data',chunk => {
    console.log('Data: ',chunk.toString());
})
rs.on('end',() => {
    console.log('Read stream finished');
})