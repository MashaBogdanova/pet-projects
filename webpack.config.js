const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './css-selectors/src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './css-selectors/dist'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './css-selectors/dist')
        },
        port: 8080,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './css-selectors/src', 'index.html'),
            filename: 'index.html',
        }),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[tj]s$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
};
