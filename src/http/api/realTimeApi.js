// 沙盘接口
import http from '@/http'

// 获取历史行为数据接口
export const getRealTimeData = params => {
  // let url = 'http://10.120.112.205:8803/api/v1.0/recsys/history/'
  let url = 'https://sendbox.motouat.com.cn/api/v1.0/recsys/history/'
  return http.get(url, {
    params: {
      features: params
    }
  })
}
// 获取用户画像数据接口
// URL:https://api.motouat.com.cn/cn/gucpApi/getUserLabelByParamId
// let apiServer = null
// if (process.env.NODE_ENV === 'production') {
//     apiServer = process.env.VUE_APP_APISERVER
// } else {
//     apiServer =
// }

export const userPortraitData = params => {
  let url = process.env.VUE_APP_ORIGIN + 'cn/gucpApi/getUserLabelByParamId'
  return http.get(url, {
    params: {
      paramId: params
    }
  })
}

// 用户画像二级数据显示接口
export const userLabelData = params => {
  // let url = 'http://10.120.112.205:8803/api/v1.0/recsys/up/'
  let url = 'https://sendbox.motouat.com.cn/api/api/v1.0/recsys/up/'
  return http.get(url, {
    params: {
      features: params
    }
  })
}

// 获取实时策略数据接口
export const getRealTimeStrategy = params => {
  // let url = 'http://10.120.112.205:8803/api/v1.0/recsys/rt/'
  let url = 'https://sendbox.motouat.com.cn/api/v1.0/recsys/rt/'

  return http.get(url, {
    params: {
      features: params
    }
  })
}

// 获取业务推荐数据接口
export const getRecommendData = () => {
  //   return http.get('http://10.120.112.205:8803/api/v1.0/recsys/default/')
  return http.get('https://sendbox.motouat.com.cn/api/v1.0/recsys/default/')
}
