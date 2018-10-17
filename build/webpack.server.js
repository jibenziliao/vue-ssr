const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'
const baseConfig = require('./webpack.base')

const plugins = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env.VUE_ENV': '"server"'
  })
]

if (isDev) {
  plugins.push(new VueServerPlugin())
}

module.exports = merge(baseConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-build.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: false
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: utils.styleLoaders()
  },
  plugins
})
