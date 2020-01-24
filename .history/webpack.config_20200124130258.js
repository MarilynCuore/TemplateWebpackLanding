const path = require('path');

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
    }
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
     if (argv.mode === 'production') {}
    return config;
    }