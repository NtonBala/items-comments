/* eslint-disable */
const webpak = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config');

const host = 'localhost',
    port = 3000;

new webpackDevServer(webpak(config), {
    hot: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}).listen(port, host, (err) => {
    err ? console.log(err) : console.log(
        `Listening at host ${host} on port ${port}`
    );
});
