const fs = require('fs');   
fs.stat('read.js', (err, stats) => {
    if(err){
        console.log('status failed');
    }
    else{
        console.log('status successful');
        console.log(stats);
    }
})