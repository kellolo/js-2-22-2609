const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyHtmlWebPlugin = require('copy-webpack-plugin')
//var path = require('path');


module.exports = {
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ template: './public/index.html'}),
    new CopyHtmlWebPlugin({
        patterns: [ 
            {from: './src/assets/imgs', to: './images/'}
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
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },    
      ],
    },
  };