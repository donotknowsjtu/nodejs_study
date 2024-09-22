const http = require('http');
const server = http.createServer((request, response) => {
    response.end('hello Http Server'); // 设置响应体
});
// 监听端口，启用服务
server.listen(9000,()=>{
    console.log('server is running ');
})