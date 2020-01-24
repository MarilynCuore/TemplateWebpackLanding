const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry : {
        app: './src/app.js'
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filname: '[name].bundle.js',
    },
    devServer : {
        port: 3000,
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
     if (argv.mode === 'production') {}
    return config;
}