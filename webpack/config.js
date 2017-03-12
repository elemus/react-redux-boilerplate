const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, '../dist/');
const jsBundleName = '[name].min.js';

/**
 * General webpack settings
 */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  },
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-redux', 'redux', 'react-router'],
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
        options: {
          babelrc: false,
          presets: [
            [
              'es2015',
              { modules: false }
            ],
            'react',
          ],
          plugins: [
            'transform-object-assign',
            'transform-runtime',
          ],
          env: {
            production: {
              plugins: [
                'transform-react-remove-prop-types',
                'transform-react-inline-elements',
                'transform-react-constant-elements'
              ]
            },
            development: {
              plugins: [
                'react-hot-loader/babel'
              ]
            }
          }
        },
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
