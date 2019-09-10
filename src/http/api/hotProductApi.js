// Default product 热品维护
import http from '@/http'

// 分页查询 Get https://api.motouat.com.cn/recommconf/plat/getDefaultProductPage?pageIndex=1&pageSize=1
export const getDefaultProductPage = ({ pageIndex, pageSize = 10 }) => {
  return http.get(`plat/getDefaultProductPage?pageIndex=${pageIndex}&pageSize=${pageSize}`)
}
// 单个查询 Get https://api.motouat.com.cn/recommconf/plat/getDefaultProduct/df0a157e6bbd46aa9c1e566e76fd8c8e
export const getDefaultProduct = id => {
  return http.get(`plat/getDefaultProduct/${id}`)
}

// 删除 Post https://api.motouat.com.cn/recommconf/plat/deleteDefaultProduct/xxxxx
export const deleteDefaultProduct = id => {
  return http.post(`plat/deleteDefaultProduct/${id}`, {})
}

// 添加和修改  Post https://api.motouat.com.cn/recommconf/plat/defaultProductAndDetailAddAndUpdate
export const defaultProductAndDetailAddAndUpdate = (options, dataResource) => {
  return http.post(`plat/defaultProductAndDetailAddAndUpdate/${dataResource}`, options)
}
