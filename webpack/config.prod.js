const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./config');

/**
 * Production config
 */
module.exports = webpackMerge(commonConfig, {
  mode: 'production',
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
        use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash].[ext]' } },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: { loader: 'file-loader', options: { name: 'img/[path][name].[hash].[ext]' } },
      },
    ],
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({ filename: '[name].[hash].min.css' }),
  ],
});
