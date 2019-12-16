const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.config.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hotOnly: true,
        contentBase: './build',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});