const fs = require('fs');
fs.mkdir('test', err => {
    if(err){
        console.log('create failed');
    }
    else{
        console.log('create successful');
    }
}
)
fs.readdir('test', (err, files) => {
    if(err){
        console.log('read failed');
    }
    else{
        console.log('read successful');
        console.log(files);
    }
})