const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            { 
                test: /\.scss$|\.css$/, 
                loader: [
                  // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
                ]
              }
        ]
    }
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') { }
    if (argv.mode === 'production') { }
    return config;
}