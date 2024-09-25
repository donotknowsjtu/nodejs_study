const express = require('express');
const app = express();
app.get('/:id.html', (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
