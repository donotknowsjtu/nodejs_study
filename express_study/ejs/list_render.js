const ejs = require('ejs');
const fs = require('fs');
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚'];

// js
let str = '<ul>';
xiyou.forEach(item => {
    str += '<li>' + item + '</li>';
})
str += '</ul>';
 console.log(str);


// ejs
let result = ejs.render(
    fs.readFileSync('./list_render.html').toString(), {xiyou: xiyou});
console.log(result);