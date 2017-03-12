const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./config');

const cssBundleName = '[name].min.css';

/**
 * Production config
 */
module.exports = webpackMerge(baseConfig, {
  cache: false,

  entry: {
    app: 'index',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: { loader: 'file-loader', options: { name: 'fonts/[name].[hash:8].[ext]' } },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: { loader: 'file-loader', options: { name: 'img/[path][name].[hash:8].[ext]' } },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin({ filename: cssBundleName }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    }),
  ],
});
