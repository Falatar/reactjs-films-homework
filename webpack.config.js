const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devServer: {
        hotOnly: true,
        contentBase: './dist',
    },
    module: {
        rules: [
        {
            test: /\.js/,
            include: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "components"),
            ],
            use: 
                ["babel-loader", "eslint-loader"]
            
        },
        {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "components"),
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
                'sass-loader'
            ]
        }
        ]
    }
};