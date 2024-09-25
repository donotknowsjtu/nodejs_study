const express = require('express');
const {singers} = require('./singer.json');
const app = express();
app.get('/singer/:id.html',(req, res) => {
    let {id} = req.params;
    let result = singers.find(item =>{
        if (item.id === Number(id)){
            return true;
        };
    })
    res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${result.singer_name}</title>
            </head>
        <body>             
                <h1>${result.singer_name}</h1>
                <img src="${result.singer_pic}" alt="${result.singer_name}">
                <p>${result.other_name}</p>
                <p>${result.id}</p>

        </body>
        </html>
                `);
});

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});