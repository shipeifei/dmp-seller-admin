// ProductRelationship 关联商品维护
import http from '@/http'

// 分页查询 Get https://api.motouat.com.cn/recommconf/plat/getProductRelationshipPage?pageIndex=1&pageSize=1
export const getProductRelationshipPage = ({ pageIndex, pageSize = 10 }) => {
  return http.get(`plat/getProductRelationshipPage?pageIndex=${pageIndex}&pageSize=${pageSize}`)
}

// 单个查询 Get https://api.motouat.com.cn/recommconf/plat/getProductRelationship/(id)
export const getProductRelationship = id => {
  return http.get(`plat/getProductRelationship/${id}`)
}

// 删除 Post https://api.motouat.com.cn/recommconf/plat/deleteProductRelationship/(id)
export const deleteProductRelationship = id => {
  return http.post(`plat/deleteProductRelationship/${id}`, {})
}

// 添加和修改  Post https://api.motouat.com.cn/recommconf/plat/saveAndUpdateProductRelationship
export const saveAndUpdateProductRelationship = options => {
  return http.post('plat/saveAndUpdateProductRelationship', options)
}
