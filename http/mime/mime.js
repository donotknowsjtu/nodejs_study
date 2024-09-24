const http = require('http');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const mines = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpg': 'image/jpeg'
}
const server = http.createServer((req, res) => {
    let {pathname} = new URL(req.url, `http://${req.headers.host}`);
    let root = __dirname;
    let filePath = root + pathname;
    // 查找filePath路径下的文件并响应
    fs.readFile(filePath, (err, data) => {
        // 查找失败响应报文
        if(err){
            res.writeHead(404, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            res.end('404 Not Found');
      }
      // 获取文件的后缀名
      let ext = path.extname(filePath).slice(1);
      // 获取对应的mine类型
      let type = mines[ext]
      if(type){
        res.setHeader('Content-Type', type);
      }
      else{
        // 没有匹配到对应的mine，保存该mine类型
       res.setHeader('content-type', 'application/octet-stream');  
      
    }
       // 响应文件内容
       res.end(data);
    })
}).listen(9000, () => {
    console.log('server is running');
})

