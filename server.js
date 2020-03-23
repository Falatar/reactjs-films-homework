const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const config = require('./webpack.dev.config');


const app = express();


const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});

app.listen(3000);
