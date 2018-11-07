const path = require('path')
const Koa = require('koa')
const favicon = require('koa-favicon')
const koaStatic = require('koa-static')
const proxy = require('http-proxy-middleware')
const config = require('./config')
const app = new Koa()

// 配置路由
let router

if (process.env.NODE_ENV === 'development') {
  router = require('./ssr-dev')
} else {
  router = require('./ssr-online')
}

// 代理掘金数据接口
app.use(async (ctx, next) => {
  if (ctx.url.startsWith('/api')) {
    ctx.respond = false
    return proxy(config.proxyOptions)(ctx.req, ctx.res, next)
  }
  return next()
})
app.use(koaStatic(path.join(__dirname, '../dist')))
app.use(favicon(path.join(__dirname, '../favicon.ico')))
app.use(router.routes())

let port = 8085
app.listen(port, () => {
  console.log(`[info]: koa server is deploy on port: ${port}`)
})
