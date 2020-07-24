const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/style.css',
            chunkFilename: '[hash:4].css',
        }),
        new HTMLWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html',
            minify: true,
        }),
        new HTMLWebpackPugPlugin(),
    ],
};
