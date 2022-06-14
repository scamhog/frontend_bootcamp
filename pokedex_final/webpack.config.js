const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['./src/js/*.js'],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /\.js/i,
                use: {
                    loader: "babel-loader"                   //Transpile new ECMA versions to ES5
                }
            },
            {
                test: /\.html/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}