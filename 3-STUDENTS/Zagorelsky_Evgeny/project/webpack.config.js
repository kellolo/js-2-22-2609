const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
  };