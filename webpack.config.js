const path = require("path");

module.exports = {
    entry: {
        app: './src/ts/Main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build/prod/js'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [

    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}