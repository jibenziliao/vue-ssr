import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const OrganizationList = () => import('views/organization/OrganizationList.vue')

export default () => {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        component: OrganizationList,
        meta: {
          keepAlive: true
        }
      }, {
        path: '/organizations/:id',
        component: Home,
        meta: {
          keepAlive: false
        }
      }, {
        path: '/organization_list',
        component: OrganizationList,
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
