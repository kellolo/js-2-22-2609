const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const path = require('path');

module.exports = {
    plugins: [new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({ 
            template: './public/index.html'
        }),
        new CopyPlugin({ 
            patterns: [
                { from: './src/assets/imgs', to: 'images'}
            ]
        })],
        
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
            test: /\.(png|jpe?g|gif)$/i,
            use: ['file-loader'],
            },
        ]
    }
}