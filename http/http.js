const http = require('http');

const server = http.createServer((request, response) => {
    // // 获取请求
    // console.log(request.method);
    // console.log(request.url); // url只包含路径和查询字符串，不包含协议和域名
    // console.log(request.headers); // 获取请求头
    // console.log(request.httpVersion); // 获取http版本
    // console.log(request.socket.remoteAddress); // 获取客户端ip
    // console.log(request.socket.remotePort); // 获取客户端端口
    
    // // 设置响应
    // response.setHeader('content-type', 'text/html;charset=utf-8'); // 设置响应头
    // response.end('hello Http Server'); // 设置响应体

// 创建http服务
    // 声明变量
    let body = '';
    // 绑定data时间
    request.on('data', chunk => {
        body += chunk;
        
    })
    // 绑定end事件
    request.on('end', () => {
        console.log(body);
    })

});
// 监听端口，启用服务
server.listen(9000,()=>{
    console.log('server is running ');
}) 