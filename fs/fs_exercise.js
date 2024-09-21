const fs = require('fs');
const files = fs.readdirSync('./');


    let num = 1;
  
    files.forEach(item => {
        if (!fs.statSync(item).isDirectory() && item != 'fs_exercise.js'){ 
        let newName = num + item;
        fs.rename(item, newName, err => {
            if(err){
                console.log('rename failed');
            }
            else{
                console.log(item + ' has been renamed successfully');
            }
        });
        num++;
        }});
// //  此处是我写错代码时使用的还原代码
//     // 将item的名字中的第一个数字去掉
//     files.forEach(item => {let newName = item.replace(/^\d+/, '');

//     fs.rename(item, newName, err => {
//         if(err){
//             console.log('rename failed');
//         }
//         else{
//             console.log(item + 'has been renamed successfully');
//         }
//     })
// });

