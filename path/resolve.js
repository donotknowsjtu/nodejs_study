const path = require('path');

console.log(path.resolve(__dirname, 'resolve.js'));
const str = 'D:\\study\\nodejs\\path\\resolve.js';
console.log(path.parse(str));
