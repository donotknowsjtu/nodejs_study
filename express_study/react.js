const express = require('express');
const app = express();
app.get('/', (req, res) => {
    // 重定向响应
    res.redirect('http://donotknowsjtu.top');
    // 下载响应
    res.download(__dirname + '/package.json');
    // json响应
    res.json({
        name: 'zhangsan',
        age: 18
    });
    // 响应文件内容
    res.sendFile(__dirname + '/package.json');
    
})