const http = require('http');
// 方式二：通过URL类解析url并返回
const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://sss.sss.sss.com:111');
    console.log(url.pathname);
    // 获取查询字符串
    console.log(url.searchParams.get('keyword'));
    response.end('hello2');
}
)
const listen = server.listen(9000, () => {  
    console.log('server is running');
}
)
