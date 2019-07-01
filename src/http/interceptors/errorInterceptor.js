import {
  isSuccess,
  getError
} from '../util'
import store from '@/store'
let requestCount = 0
// 当前请求数
let requests = []
// 当前请求错误

let responseErrors = [] // 当前请求错误

const setHttpStatus = () => {
  if (requestCount === 0) {
    if (responseErrors.length) {
      store.dispatch('afterRequestFailed', responseErrors)
    } else {
      store.dispatch('afterRequestSuccess')
    }
  }
}

// 设置页面加载状态的拦截器
export default request => {
  if (requestCount === 0) {
    requests = []
    responseErrors = []
    store.dispatch('beforeRequest', request)
  }
  requestCount++
  requests.push(request)

  // continue to next interceptor
  return response => {
    requestCount--
    if (!isSuccess(response)) {
      responseErrors.push(getError(response))
    }

    setHttpStatus()
  }
}
