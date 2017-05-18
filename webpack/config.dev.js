const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./config');

/**
 * Development config
 */
module.exports = webpackMerge(baseConfig, {
  devtool: 'eval-source-map',

  entry: {
    app: ['react-hot-loader/patch', 'index'],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
