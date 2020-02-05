const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.jsx',
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hotOnly: true,
    contentBase: './build',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
