import http from '@/http'

// 获取分页profile Get https://api.motouat.com.cn/recommconf/plat/getProfilePage?pageIndex=1&pageSize=30
export const getProfilePage = ({
  pageIndex,
  pageSize = 10
}) => {
  return http.get(`plat/getProfilePage?pageIndex=${pageIndex}&pageSize=${pageSize}`)
}

// 模糊查询接口 Post  https://api.motouat.com.cn/recommconf/plat/getProfileLike
export const getProfileLike = (options = {}) => {
  return http.post('plat/getProfileLike', options)
}

// 获取单个profile Get https: //api.motouat.com.cn/recommconf/plat/getProfile/id
export const getProfile = id => {
  return http.get(`plat/getProfile/${id}`)
}

// 删除profile Post 没有返回值 https://api.motouat.com.cn/recommconf/plat/deleteProfile/xxxxx
export const deleteProfile = id => {
  return http.post(`plat/deleteProfile/${id}`, {})
}

// 添加和修改 Post 没有返回值 https://api.motouat.com.cn/recommconf/plat/saveAndUpdateProfile
export const saveAndUpdateProfile = options => {
  return http.post('plat/saveAndUpdateProfile', options)
}

// 获取 策略和算法的映射 Get https://api.motouat.com.cn/recommconf/tactics/getTacticsMapping
export const getTacticsMapping = () => {
  return http.get('tactics/getTacticsMapping')
}

// 获取return type Get  https://api.motouat.com.cn/recommconf/plat/getReturnTypeAll 数据太少，直接写在前端
export const getReturnTypeAll = () => {
  return http.get('plat/getReturnTypeAll')
}
