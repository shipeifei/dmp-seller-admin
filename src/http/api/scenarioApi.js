import http from '@/http'

// 获取全部 不分页 Get https: //api.motouat.com.cn/recommconf/plat/getScenarioAll
export const getScenarioAll = () => {
  return http.get('plat/getScenarioAll')
}

// 获取全部 分页 Ge 因为没有返回profilename 只返回scenario实体列表 所以 用 获取全部 分页 2 https://api.motouat.com.cn/recommconf/plat/getScenarioPage 如果不传参数等同于  https://api.motouat.com.cn/recommconf/plat/getScenarioPage?pageIndex=1&pageSize=30
export const getScenarioPage = ({
  pageIndex,
  pageSize = 10
}) => {
  return http.get(`plat/getScenarioPage?pageIndex=${pageIndex}&pageSize=${pageSize}`)
}

// 根据id获取Scenario Get `https://api.motouat.com.cn/recommconf/plat/getScenario/${id}`
export const getScenario = id => {
  return http.get(`plat/getScenario/${id}`)
}

// 根据id删除Scenario Post  没有返回值 `https://api.motouat.com.cn/recommconf/plat/deleteScenario/${id}`
export const deleteScenario = id => {
  return http.post(`plat/deleteScenario/${id}`, {})
}

// 添加和修改Scenario Post 没有返回值 https: //api.motouat.com.cn/recommconf/plat/saveAndUpdateScenario
export const saveAndUpdateScenario = options => {
  return http.post('plat/saveAndUpdateScenario', options)
}
