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
        name: 'Home',
        meta: {
          keepAlive: true
        }
      }, {
        path: '/post/:id',
        component: Post,
        name: 'Post',
        meta: {
          keepAlive: false
        }
      }, {
        path: '/entry/:id',
        component: Entry,
        name: 'Entry',
        meta: {
          keepAlive: false
        }
      }
    ]
  })
}
