// roles
import http from '@/http'

// 获取全部 Get https: //api.motouat.com.cn/recommconf/role/
export const getRoleList = () => {
  return http.get('role/')
}

// 添加角色  Post https://api.motouat.com.cn/recommconf/role/save
export const roleAdd = (options = {}) => {
  return http.post('role/save', options)
}

// 修改角色 开启/关闭 Post https://api.motouat.com.cn/recommconf/role/switch
export const roleSwitch = (options = {}) => {
  return http.post('role/switch', options)
}

// 修改角色的权限  Post https://api.motouat.com.cn/recommconf/role/modify
export const roleModify = (options = {}) => {
  return http.post('role/modify', options)
}
