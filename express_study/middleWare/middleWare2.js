const express = require('express');
const app = express();  
// const fs = require('fs');
// const path = require('path');   
// // 声明访问日志记录中间件
// function recordMiddleWare(req, res, next){
//     let {url, ip} = req;
//     fs.appendFileSync(path.resolve(__dirname , './access.log'),`url:${url} ip:${ip} \r\n`);
//     // 调用next函数将控制权下移
//     next();
// }
// // 调用中间件
// app.use(recordMiddleWare);
// // 创建路由
function checkCodeMiddleWare(req, res, next){
    if(req.query.code === '521'){
        next();
    }
    else{
        res.send('code error');
    }
}
app.get('/home',checkCodeMiddleWare, (req, res) => {
    res.send('home page');
})
app.get('/about',checkCodeMiddleWare, (req, res) => {
    res.send('about page');
})
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})