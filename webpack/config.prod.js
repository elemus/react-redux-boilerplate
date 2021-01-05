const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./config');

/**
 * Production config
 */
module.exports = merge(commonConfig, {
  mode: 'production',

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
      maxInitialRequests: Infinity,
      minSize: 10240,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.identifier().match(/[\\/]node_modules[\\/](.+?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace('@', '')}`;
          },
        },
      },
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
