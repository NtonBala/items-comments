/* eslint-disable */
const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

const normalizePort = (port) => (parseInt(port, 10));
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get('env') !== 'production';

//production setup
if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
    app.use(express.static(path.resolve(__dirname, 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

if (dev) {
    app.use(morgan('dev'));
}

app.set('port', (process.env.PORT || 5000));

const server = createServer(app);
server.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server started', path.resolve(__dirname, 'build', 'index.html'));
    }
});
