var express = require('express');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, (err) => {
    err ? console.log(err) : console.log('Running on localhost port 9000');
});
