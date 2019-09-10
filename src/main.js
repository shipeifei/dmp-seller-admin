import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'
// 公共样式
import './assets/less/common.less'
import DateUtils from './utils/date'
import i18n from './i18n'
import GucpUi from './components/ui'

// 词云
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('echarts-wordcloud')

Vue.use(DateUtils)
Vue.use(GucpUi)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
