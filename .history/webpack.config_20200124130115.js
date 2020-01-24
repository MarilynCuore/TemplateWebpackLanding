const path = require('path');

const config = {
    entry : {
        app: './src/app.js'
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filname: '[name].bundle.js'
    }
}