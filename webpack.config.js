const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolveAppPath = relativePath => path.resolve(__dirname, relativePath);

const isProd = process.env.NODE_ENV == 'production';

let config = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ inject: true, template: resolveAppPath('src/index.html') })
    ],
    resolve: {},
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'astroturf/loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        }]
    }
};

if (isProd) {

} else {
    config.devServer = {
        contentBase: resolveAppPath('dist'),
        port: 3000,

    }
}

module.exports = config;