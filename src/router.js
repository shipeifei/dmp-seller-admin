import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const Layout = resolve => require(['@/components/Layout'], resolve)
const Login = resolve => require(['@/components/Login'], resolve)
const forgetPassword = resolve => require(['@/components/forgetPassword'], resolve)
const register = resolve => require(['@/components/register'], resolve)
const home = resolve => require(['@/views/home'], resolve)
const sms = resolve => require(['@/views/sms'], resolve)
const sellerLeaveMessage = resolve => require(['@/views/sellerLeaveMessage'], resolve)
const seller = resolve => require(['@/views/seller'], resolve)
const version = resolve => require(['@/views/version'], resolve)
const order = resolve => require(['@/views/version/order'], resolve)

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
                component: home
            }, {
                path: '/sms',
                name: 'sms',
                component: sms
            }, {
                path: '/sellerLeaveMessage',
                name: 'sellerLeaveMessage',
                component: sellerLeaveMessage
            }, {
                path: '/seller',
                name: 'seller',
                component: seller
            }, {
                path: '/version',
                name: 'version',
                component: version
            }, {
                path: '/order/:pay',
                name: 'order',
                component: order
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