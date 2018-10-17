var utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  use: utils.cssLoaders({
    sourceMap: false,
    extract: isProduction,
    usePostCSS: true
  })
}
