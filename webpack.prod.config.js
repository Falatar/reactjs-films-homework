const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],
});