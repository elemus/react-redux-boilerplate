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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash:8].[ext]' } },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: { loader: 'file-loader', options: { name: 'img/[path][name].[hash:8].[ext]' } },
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
