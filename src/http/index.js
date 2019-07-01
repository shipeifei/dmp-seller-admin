import Vue from 'vue/dist/vue.runtime.esm'
import VueResource from 'vue-resource'
import stringFormat from 'string-format'
import interceptors from './interceptors'
import { isSuccess, getError } from './util'

Vue.use(VueResource)
Vue.http.options.root = process.env.VUE_APP_SERVER
Vue.http.options.timeout = process.env.MAX_TIME_OUT // 请求超时时间

const URL_ENCODED_CONTENT_TYPE =
  'application/x-www-form-urlencoded; charset=UTF-8'

interceptors.forEach(interceptor => Vue.http.interceptors.push(interceptor))

const checkStatus = response => {
  if (isSuccess(response)) {
    return response
  }
  throw getError(response)
}

const encodeData = (data = {}) => {
  let body = ''

  for (let key in data) {
    body += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
  }
  if (body.length) {
    // remote the last '&'
    body = body.substring(0, body.length - 1)
  }

  return body
}

const getData = (data, options = {}) => {
  return options.encodeData ? encodeData(data) : data
}

const getOptions = (options = {}) => {
  let headers = options.headers || {}

  if (options.encodeData) {
    headers['Content-type'] = URL_ENCODED_CONTENT_TYPE
  }
  return {
    ...options,
    headers
  }
}

const isBlobResponseType = options =>
  Boolean(options && options.responseType === 'blob')
// 返回Promise对象
const parseJSON = response => {
  try {
    if (response.status === 200 && response.body === '') {
      return new Promise(resolve => {
        resolve({
          body: {
            code: 0,
            message: 'success'
          }
        })
      })
    }
    return response.json()
  } catch (error) {
    console.log('parseJSON is error:' + error)
  }
}
const parseBlob = response => response.blob()
const parseBody = json => {
  if (json && json.body !== '') {
    return json
  }
  return {
    code: 0,
    message: 'success'
  }
}

export const format = (url, ...args) =>
  stringFormat(url, ...args.map(arg => encodeURIComponent(arg)))

export default {
  postWithCallback (url, datas, cb, errorCb) {
    return Vue.http
      .post(url, encodeData(datas), {
        headers: {
          'Content-type': URL_ENCODED_CONTENT_TYPE
        }
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function (json) {
        if (cb) {
          cb(json)
        }
      })
      .catch(function (ex) {
        if (errorCb) {
          errorCb(ex)
        }
      })
  },
  post (url, datas, options) {
    return Vue.http
      .post(url, getData(datas), getOptions(options))
      .then(checkStatus)
      .then(response => {
        return isBlobResponseType(options)
          ? parseBlob(response)
          : parseJSON(response)
      })
      .then(response => {
        return isBlobResponseType(options) ? response : parseBody(response)
      })
      .catch(err => {
        return Promise.reject(err.body)
      })
  },
  put (url, datas, options) {
    return Vue.http
      .put(url, getData(datas), getOptions(options))
      .then(checkStatus)
      .then(parseJSON)
      .then(parseBody)
  },
  delete (url, datas, options = {}) {
    const newOptions = {
      body: getData(datas),
      ...getOptions(options)
    }

    return Vue.http
      .delete(url, newOptions)
      .then(checkStatus)
      .then(parseJSON)
      .then(parseBody)
  },
  get (url, options = {}) {
    const fetchHeaders = options && options.fetchHeaders

    return Vue.http
      .get(url, options)
      .then(checkStatus)
      .then(async response => {
        const data = isBlobResponseType(options)
          ? await parseBlob(response)
          : await parseJSON(response)

        if (fetchHeaders) {
          return {
            data,
            headers: response.headers
          }
        }
        return data
      })
      .then(response => {
        if (fetchHeaders) {
          return {
            data: isBlobResponseType(options)
              ? response.data
              : parseBody(response.data),
            headers: response.headers
          }
        }

        return isBlobResponseType(options) ? response : parseBody(response)
      })
      .catch(err => {
        return Promise.reject(err.body)
      })
  },
  jsonp (url, options = {}) {
    return Vue.http.jsonp(url, options).then(checkStatus)
  }
}
