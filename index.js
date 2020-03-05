const express = require('express')
const app = express()
const port = 3000
const path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket){
    console.log('user connected.')
    socket.on('message', function(msg){
        console.log('message: ' + msg);
    });
});

http.listen(port, () => console.log(`Scrypta Signing Tool listening on port ${port}!`))