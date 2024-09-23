const http = require('http');
const server = http.createServer((req, res) => {
    // 设置响应码
    res.statusCode = 200;
    // 设置响应状态的描述
    res.statusMessage = 'OK';
    // 设置响应头
    res.setHeader('contenet-type', 'text/plain');
      // 设置多个同名响应头
    res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript', 'type=ninja']);
    // 设置响应体
    res.write('Hello World1\n');
    res.write('Hello World2\n');
    // write 和 end二选一，且end最多存在一个
    res.end('Hello World3\n');
    }
);  
server.listen(9000,() => {
    console.log('Server running at http://localhost:9000/');
});