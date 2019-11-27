const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
      contentBase: './dist',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "src"),
            ],
            use: {
                loader: "babel-loader",
            }
        },
        ]
    }
};