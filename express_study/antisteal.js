const express = require('express');
const app = express();
app.use((req, res, next) => {
    let referer = req.get(referer);
    if(referer) {
        let url = new URL(refereer);
        let hostname = url.hostname;
        if (hostname != '127.0.0.1') {
            res.status(404).send('not found');
            return;
        }else{
            next();
        }
    } else {
        res.status(404).send('not found');
        return;
    }

})