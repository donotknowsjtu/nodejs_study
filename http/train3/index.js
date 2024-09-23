// train3 和train2的主要区别在于train3将css单独取出，这里考察了对响应报文的理解，响应报文只会响应设置好的报文
// 无法自动链接到其余报文，当html链接到css时，浏览器会向服务器发送请求，理论上服务器应该返回请求路径下的css文件
// 但是由于响应报文的问题，服务器只会把已经发送好的html再次发送，将会导致css根本没有被发送给浏览器，进而导致css无法加载

const http = require('http');   
const fs = require('fs');
let html = fs.readFileSync(__dirname + '/index.html');
const server = http.createServer((req, res) => {
    let {pathname} = new URL(req.url, `http://dd.com:9000`);
    // 一直报错什么响应都没返回，是因为这里的默认路径应为/，而不是/index.html，如果是/index.html则由于请求路径没有/index.html
    // 会导致无法找到文件，进而导致报错
    if (pathname === '/') {
        
        res.end(html);
    }
    // 这里是因为html中的引用css的方式写错了，应该在head中用link标签来引入css，我的hs基础太差了
    
    else if (pathname === '/index.css') { 
       
        res.end(fs.readFileSync(__dirname + '/index.css'));
    }else{
        res.end('404');
    }
    console.log(pathname);
});
server.listen(9000,() => {
    console.log('Server running at http://localhost:9000/');
});