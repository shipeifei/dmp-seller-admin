import http from '@/http'

// Get https://api.motouat.com.cn/recommconf/plat/getAllChartPlatform/{token}
export const getAllChartPlatform = (token) => {
  return http.get('plat/getAllChartPlatform/' + token)
}
//  Get https://api.motouat.com.cn/recommconf/plat/getAllPlatform/
export const getAllPlatform = () => {
  return http.get('plat/getAllPlatform')
}

// 获取分页Platform  Get https://api.motouat.com.cn/recommconf/plat/getPlatformPage?pageIndex=1&pageSize=30
export const getPlatformPage = ({
  pageIndex,
  pageSize = 10
}) => {
  return http.get(`plat/getPlatformPage?pageIndex=${pageIndex}&pageSize=${pageSize}`)
}

// 根据type获取platform Get https://api.motouat.com.cn/recommconf/plat/getPlatformByType/xxxx(SHOP)
export const getPlatformByType = (type = 'SHOP') => {
  return http.get(`plat/getPlatformByType/${type}`)
}

// 添加platform Post https: //api.motouat.com.cn/recommconf/plat/saveAndUpdatePlatform
export const saveAndUpdatePlatform = options => {
  return http.post('plat/saveAndUpdatePlatform', options)
}

// 获取单个platform Get https://api.motouat.com.cn/recommconf/plat/getPlatform/xxx
export const getPlatform = id => {
  return http.get(`plat/getPlatform/${id}`)
}

// 删除单个platform Post https://api.motouat.com.cn/recommconf/plat/deletePlatform/xxxx
export const deletePlatform = id => {
  return http.post(`plat/deletePlatform/${id}`, {})
}

// 根据platformid 获取  profile列表 Get https://api.motouat.com.cn/recommconf/plat/getProfileByPlatformId/xxxx
export const getProfileByPlatformId = id => {
  return http.get(`plat/getProfileByPlatformId/${id}`)
}

// 根据platformid  获取 场景 列表 Get https://api.motouat.com.cn/recommconf/scenario/getScenarioByPlatformId/xxxxx
export const getScenarioByPlatformId = id => {
  return http.get(`scenario/getScenarioByPlatformId/${id}`)
}
// 获取商品列表https://api.motouat.com.cn/recommconf/plat/getProductCodeByName
export const getProductCodeByName = name => {
  return http.get(`plat/getProductCodeByName?name=${name}`)
}
