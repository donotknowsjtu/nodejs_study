var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 处理对上传页面的请求
router.get('/portrait', (req, res) => {
  res.render('portrait');
});
// 处理上传请求
router.post('/portrait', (req, res) => {
  // 创建form对象
  const form = formidable({multiples: true,
    uploadDir: './public/images',
    // 保持文件扩展名
    keepExtensions: true
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(fields);
    console.log(files);
    res.send('上传成功');
  });
});

module.exports = router;
