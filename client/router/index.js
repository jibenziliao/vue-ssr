import Router from 'vue-router'

const Post = () => import('views/post/Post.vue')
const Entry = () => import('views/entry/Entry.vue')
const Home = () => import('views/home/Home.vue')

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
      }, {
        path: '/post/:id',
        component: Post,
        meta: {
          keepAlive: false
        }
      }, {
        path: '/entry/:id',
        component: Entry,
        meta: {
          keepAlive: false
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
