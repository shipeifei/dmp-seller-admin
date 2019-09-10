import _ from 'lodash'

// 用户未登录时的重定向
export const isRequireAuthentication = response => {
  if (response.status === 400 && response.body.errorCode === 'INVALID_TOKEN') {
    return true
  }
  return false
}

export const isSuccess = response => {
  if (response.status >= 200 && response.status < 300) {
    if (response.bodyBlob) {
      // 返回的是二进制数据，比如是导出Excel
      return true
    }
    return true
  }
  return false
}

export const getError = response => {
  let error = new Error(response.body && (response.body.message ? response.body.message : ''))

  error.response = response
  error.body = response.body ? response.body.body : void 0
  return error
}

export const hasErrorWithStatus = (errors, statusOrFunc) => {
  if (!_.isEmpty(errors)) {
    for (let error of errors) {
      if (typeof statusOrFunc === 'function') {
        if (statusOrFunc(error.response.status)) {
          return true
        }
      } else if (error.response.status === statusOrFunc) {
        return true
      }
    }
  }

  return false
}
