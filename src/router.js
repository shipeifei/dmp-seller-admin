import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const Layout = resolve => require(['@/components/Layout'], resolve)
const Login = resolve => require(['@/components/Login'], resolve)
const forgetPassword = resolve => require(['@/components/forgetPassword'], resolve)
const register = resolve => require(['@/components/register'], resolve)
const Home = resolve => require(['@/views/home'], resolve)

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'layout',
            component: Layout,
            redirect: '/login',
            children: [{
                path: '/home',
                name: 'home',
                component: Home
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/forgetPassword',
            name: 'forgetPassword',
            component: forgetPassword
        },
        {
            path: '/register',
            name: 'register',
            component: register
        }

    ]
})

router.beforeEach((to, from, next) => {
    next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router