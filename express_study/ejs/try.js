const ejs = require('ejs');
const fs = require('fs');
const html = fs.readFileSync('./try.html', 'utf-8');
let china = '中国';
let result = ejs.render('我的国家是<%= china %>', {china: html});
console.log(result); // 我的国家是中国
