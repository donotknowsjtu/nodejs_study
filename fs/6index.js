const fs = require('fs');
fs.writeFile('./hello.txt', 'Hello from Node.js!',{flag:'a'},err => {
    // err write wrong;
    if(err){
        console.log('error with writing file');
        return;
    }
    console.log('file written successfully');
});
fs.appendFile('./hello.txt', '\r\nhello', err => {
    if(err){
        console.log('error with writing file');
        return;
    }
    console.log('file written successfully');
})
const ws = fs.createWriteStream('./hello.txt');
ws.write('ssss');
ws.write("sssss");
ws.close();