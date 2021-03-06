const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const utils = require('./utils')
const baseConfig = require('./webpack.base')
const isDev = process.env.NODE_ENV === 'development'
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: {
    app: './client/client-entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: isDev ? 'http://localhost:8082/' : '/',
    chunkFilename: 'js/[name].[hash].js'
  },
  module: {
    rules: utils.styleLoaders()
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true
    },
    runtimeChunk: true
  },
  plugins: [
    new VueClientPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ],
  devServer: {
    hot: true,
    compress: true,
    port: 8082,
    https: false,
    hot: true,
    historyApiFallback: true,
    hotOnly: true
  }
})
