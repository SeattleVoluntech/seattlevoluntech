const merge = require('webpack-merge');
const MiniCssPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');

const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = 'production';

webpackProdConfig.plugins = [
  new MiniCssPlugin({
    filename: '[name].[hash].css',
  }),
];

webpackProdConfig.module.rules = [{
  test: /\.scss$/,
  exclude: [/node_modules/],
  use: [
    MiniCssPlugin.loader,
    'css-loader',
    'sass-loader',
  ],
},
{
  test: /\.css$/,
  include: /node_modules/,
  use: ['style-loader', 'css-loader'],
},
];

module.exports = merge(commonConfig, webpackProdConfig);
