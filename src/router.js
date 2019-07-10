import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import { localStorageApi } from "@/utils/storageApi.js";

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
const sellerError = resolve => require(['@/views/sellerError'], resolve)
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
                component: home,
                meta: {
                    title: '首页'
                }
            }, {
                path: '/sms',
                name: 'sms',
                component: sms,
                meta: {
                    title: '短信'
                }
            }, {
                path: '/sellerLeaveMessage',
                name: 'sellerLeaveMessage',
                component: sellerLeaveMessage,
                meta: {
                    title: '机构留言'
                }
            }, {
                path: '/seller',
                name: 'seller',
                component: seller,
                meta: {
                    title: '机构中心'
                }
            }, {
                path: '/sellerError',
                name: 'sellerError',
                component: sellerError,
                meta: {
                    title: '机构纠错'
                }
            }, {
                path: '/version',
                name: 'version',
                component: version,
                meta: {
                    title: '购买套餐'
                }
            }, {
                path: '/order/:pay',
                name: 'order',
                component: order,
                meta: {
                    title: '订单'
                }
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
    window.document.title = to.meta.title;
    next()
})
router.afterEach((to, next) => {
    // console.log(to)
    // console.log(to.meta.title)

    let currentName = to.meta.title;
    let toPath = to.path;
    // let toName = to.name
    let pathsList = localStorageApi.get('paths') ? JSON.parse(localStorageApi.get('paths')) : [];
    if (pathsList.length > 0) {
        let isExistCurrentIndex = _.findIndex(pathsList, o => {
            return o.path === toPath;
        })
        if (isExistCurrentIndex > -1) {
            pathsList[isExistCurrentIndex]['count'] += 1;
        } else {
            pathsList.push({
                path: toPath,
                // name: toName,
                count: 1,
                menuName: currentName
            })
        }
    } else {
        pathsList.push({
            path: toPath,
            // name: toName,
            count: 1,
            menuName: currentName
        })
    }
    localStorageApi.set('paths', JSON.stringify(pathsList));
    NProgress.done()
})

export default router