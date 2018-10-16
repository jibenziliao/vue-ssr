const path = require('path')

module.exports = {
  mode: 'production',
  optimization: {},
  resolve: {
    alias: {
      component: path.resolve(__dirname, '../client/component'),
      common: path.resolve(__dirname, '../client/common'),
      api: path.resolve(__dirname, '../client/api'),
      store: path.resolve(__dirname, '../client/store')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-0'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
