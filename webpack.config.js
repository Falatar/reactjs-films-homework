const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.jsx',
  ],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  devServer: {
    hotOnly: true,
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        use:
                ['babel-loader'],

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
              'css-loader',
              'sass-loader',
            ],
      },
      {
        test: /\.js/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },
};

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  devServer: {
    hotOnly: true,
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        use:
                ['babel-loader'],

      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        use:
            [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development',
                  reloadAll: true,
                },
              },
              'css-loader',
              'sass-loader',
            ],
      },
      {
        test: /\.js/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },
};