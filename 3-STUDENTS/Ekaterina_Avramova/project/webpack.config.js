const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const path = require('path');

module.exports = {
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ template: './public/index.html'}),
    new CopyWebpackPlugin({ 
        patterns: [
            {
                from: './src/assets/imgs', to: 'images'
            }
        ]
    })

],
    module: {
      rules: [
        { 
            test: /\.css$/i, 
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
             test: /\.(png|jpg|svg|gif)$/i,
             use: ['file-loader']
         }
      ],
    },
  };