// user authority
import http from '@/http'

// 添加 Post https://api.motouat.com.cn/recommconf/authority/save
export const authoritySave = (options = {}) => {
  return http.post('authority/save', options)
}

// {
//   "name": "test",
//   "itemicon": "itemicon",
//   "mid": "mid",
//   "matchurl": "matchurl",
//   "position": 12,
//   "version": 0,
//   "url": "0"
// }
// Version 和 url 是隐藏字段

// 更新权限 Post https://api.motouat.com.cn/recommconf/authority/update
export const authorityUpdate = (options = {}) => {
  return http.post('authority/update', options)
}

// {
//   "name": "test",
//   "itemicon": "itemicon",
//   "mid": "mid",
//   "matchurl": "matchurl",
//   "position": 12,
//   "version": 0,
//   "url": "0"
// }

// 根据角色id获取权限 Get https://api.motouat.com.cn/recommconf/authority/(id)
export const getAuthorityList = id => {
  return http.get(`authority/${id}`)
}

// 删除 Post https://api.motouat.com.cn/recommconf/authority/delete
export const authorityDelete = (options = {}) => {
  return http.post('authority/delete', options)
}

// {
//   "aid": [
//       "c00ce1fd2fd6404a8b885a3b0512916a"
//   ]
// }

// 获取无子属关系 Get https://api.motouat.com.cn/recommconf/authority/all
export const getAuthorityAll = () => {
  return http.get('authority/all')
}

// 获取有子属关系  Get https://api.motouat.com.cn/recommconf/authority/get
export const getAuthority = () => {
  return http.get('authority/get')
}
