const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, '../dist/');
const jsBundleName = '[name].[hash:8].min.js';

/**
 * General webpack settings
 */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  },
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'prop-types', 'react-redux', 'react-router', 'redux',
      'redux-thunk', 'redux-logger', 'classnames', 'history'],
  },
  output: {
    path: outputPath,
    filename: jsBundleName,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: jsBundleName }),
  ],
};
