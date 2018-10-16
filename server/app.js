const path = require('path')
const Koa = require('koa')
const favicon = require('koa-favicon')
const koaStatic = require('koa-static')
const app = new Koa()

// 配置路由
let router

if (process.env.NODE_ENV === 'development') {
  router = require('./ssr-dev')
} else {
  router = require('./ssr-online')
}

app.use(koaStatic(path.join(__dirname, '../dist')))
app.use(favicon(path.join(__dirname, '../favicon.ico')))
app.use(router.routes())

// 启动
app.listen(8081, () => {
  console.log('koa server starting')
})
