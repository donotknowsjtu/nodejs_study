const fs = require('fs');
// rename
fs.rename('hello.txt', 'rename.txt', err=>{
    if(err){
        console.log('rename failed');
    }
    else{
        console.log('rename successful');
    }
})
// move
fs.rename('rename.txt','rename/rename.txt',error =>{
    if(error){
        console.log('move failed');
    }
    else{
        console.log('move successful');
    }
})