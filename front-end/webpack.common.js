require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: '',
  }),
  new DefinePlugin({
    API_URL: JSON.stringify(process.env.API_URL),
  }),
];

webpackConfig.module = {};
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|ttf|gif)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/react'],
        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
        cacheDirectory: true,
      },
    },
  },
];
