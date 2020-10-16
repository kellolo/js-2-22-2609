const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ template: './public/index.html'})],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader,'css-loader'],
        },
      ],
    },
  };