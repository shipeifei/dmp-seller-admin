import http from '@/http'

// 获取列表表格  https://api.motouat.com.cn/recommconf/chartListConditions?startDate=2019-04-14&endDate=2019-04-15&platId=07e4dd9f4e744c10a6a5ff7e90f9e609&typeName=frontpage
export const getChartListConditions = ({ startDate, endDate, typeName, platId, token }) => {
  return http.get(`chartListConditions?startDate=${startDate}&endDate=${endDate}&typeName=${typeName}&platId=${platId}&token=${token}`)
}

// 点击率按用户 -条件 Get https://api.motouat.com.cn/recommconf/clickRateUserConditions?startDate=2016-12-14&endDate=2118-12-14&typeName=cart
export const getClickRateUserConditions = ({ startDate, endDate, typeName, platId, position, token }) => {
  return http.get(`clickRateUserConditions?startDate=${startDate}&endDate=${endDate}&typeName=${typeName}&platId=${platId}&position=${position}&token=${token}`)
}

// 点击率按次数 -条件 Get https://api.motouat.com.cn/recommconf/clickRateNumberConditions?startDate=2016-12-14&endDate=2118-12-14&typeName=cart
export const getClickRateNumberConditions = ({ startDate, endDate, typeName, platId, position, token }) => {
  return http.get(`clickRateNumberConditions?startDate=${startDate}&endDate=${endDate}&typeName=${typeName}&platId=${platId}&position=${position}&token=${token}`)
}

// 推荐策略 查询 Get https://api.motouat.com.cn/recommconf/plat/getStrategyByScenario?id=bd54efbbc6fb43fc8fb1c4c5ae839c97&name=homepage
export const getgetStrategyByScenario = ({ id, name }) => {
  return http.get(`plat/getStrategyByScenario?id=${id}&name=${name}`)
}
