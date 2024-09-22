const http = require('http');
// 方式一：通过url模块解析url并返回

const url = require('url');
const server = http.createServer((request, response) => {
    let res = url.parse(request.url, true);
    let pathname = res.pathname;
    let keyword = res.query.keyword;  
    console.log(pathname);
    // 获取查询字符串

    console.log(keyword);
    response.end('hello');
})
const listen = server.listen(9000, () => {
    console.log('server is running');
}
)

