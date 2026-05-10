const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/test/static', (req, res) => {
    res.sendFile('public/test/static.html', { root: __dirname });
});
app.get('/test/canvas', (req, res) => {
    res.sendFile('public/test/canvas.html', { root: __dirname });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});