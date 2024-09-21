const fs = require('fs');
fs.unlink('hellw2.txt', err => {
    if(err){
        console.log('delete failed');
    }
    else{
        console.log('delete sussessful');
    }
})
fs.rm('hellw2.txt', err => {
    if(err){
        console.log('delete failed');
    }
    else{
        console.log('delete sussessful');
    }
})