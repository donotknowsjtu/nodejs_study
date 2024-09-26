// 在express中使用ejs模板引擎
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
// 设置模板引擎
app.set('view engine', 'ejs');
// 设置模板文件目录，模板文件是具有模板语法内容的文件   
app.set('views', path.resolve(__dirname, './views' ));
// 创建路由 
app.get('/home', (req, res) => {
    // 渲染模板文件
    let title = 'this is home page';
    res.render('home', {title});

})
app.listen(3000, () => {
    console.log('server is running at localhost:3000');
})
