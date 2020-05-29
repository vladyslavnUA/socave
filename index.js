const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req,res) {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('listing on port -- 3000 --');
})
