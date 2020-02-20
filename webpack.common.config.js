const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.js/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        use:
            [
              'css-hot-loader',
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development',
                  reloadAll: true,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
              'sass-loader',
            ],
      },
    ],
  },
};
