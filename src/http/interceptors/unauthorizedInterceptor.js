import {
  isRequireAuthentication
} from '../util'
import {
  sessionStorageApi
} from '@/utils/storageApi'
import store from '@/store'

// 处理401响应的拦截器
export default request => {
  return response => {
    if (isRequireAuthentication(response)) {
      // 如果请求401，说明每户没有登录（或者登录Session已经失效），这个时候弹出登录对话框，
      // 用户登录后重新发送失败的请求
      store.dispatch('setServerLoading', false)
      window.history.go(0)
      sessionStorageApi.clear()
    }
  }
}
