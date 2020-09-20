const { merge } = require('webpack-merge');

const baseConfig = require('./config');

/**
 * Development config
 */
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: ['react-hot-loader/patch', 'index'],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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
  }
});
