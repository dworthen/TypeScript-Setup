const path = require('path');

module.exports = (env, argv) => {

    return {
        mode: argv && argv.mode ? argv.mode : 'development',
        devtool: 'source-map',
        entry: {
            'index': path.resolve(__dirname, './lib/esm/index.js')
        },
        output: {
            path: path.resolve(__dirname, './lib/umd'), // builds to ./lib/umd/
            filename: '[name].js', // index.js
            library: 'MyMath', // aka window.myLibrary
            libraryTarget: 'umd', // supports commonjs, amd and web browsers
            globalObject: 'this'
        },
        module: {
            rules: [
                { test: /\.t|js$/, use: 'babel-loader' }
            ]
        }
    };

};