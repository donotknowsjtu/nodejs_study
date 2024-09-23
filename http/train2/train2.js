const http = require('http');   
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.end(fs.readFileSync(__dirname + '/table.html'));
    }
);
server.listen(9000,() => {
    console.log('Server running at http://localhost:9000/');
});