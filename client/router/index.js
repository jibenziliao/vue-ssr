import Router from 'vue-router'

const Home = () => import('component/home/home.vue')

export default () => {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        component: Home,
        meta: {
          keepAlive: true
        }
      }
    ],
    scrollBehavior (to) {
      return {
        x: 0,
        y: 0
      }
    }
  })
}
