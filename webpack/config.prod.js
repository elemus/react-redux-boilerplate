const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].min.css' }),
  ],
});
