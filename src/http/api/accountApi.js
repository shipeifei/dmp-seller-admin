import http from '@/http'

// 账户列表 Get  https://api.motouat.com.cn/recommconf/account/
export const getUser = () => {
  return http.get('account')
}

// 账户与角色映射关系 Get https://api.motouat.com.cn/recommconf/account/userList
export const getUserList = () => {
  return http.get('account/userList')
}

// 账户删除 Post https://api.motouat.com.cn/recommconf/account/delete
export const userDelete = (options = {}) => {
  return http.post('account/delete', options)
}

// 账户保存 Post https://api.motouat.com.cn/recommconf/account/save
export const userSave = (options = {}) => {
  return http.post('account/save', options)
}

// 编辑账户角色信息的保存 Post https://api.motouat.com.cn/recommconf/account/role/save
export const roleSave = (options = {}) => {
  return http.post('account/role/save', options)
}
