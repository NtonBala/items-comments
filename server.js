var express = require('express');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');

app.set('port', (process.env.PORT || 5000));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'), (err) => {
    err ? console.log(err) : console.log('Running on localhost port 5000');
});
