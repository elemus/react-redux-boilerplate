const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, '../dist/');
const jsBundleName = '[name].[hash:8].min.js';

const babelLoaderOptions = {
  babelrc: false,
  presets: [
    [
      'es2015',
      { modules: false },
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
        'transform-react-constant-elements',
      ]
    },
    development: {
      plugins: [
        'react-hot-loader/babel',
      ],
    },
  },
};

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
        use: {
          loader: 'babel-loader',
          options: babelLoaderOptions,
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
