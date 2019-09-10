import http from '@/http'

// 右侧chart
export const getChartData = () => {
  return http.get('homeData/statistical')
}
// 总金额
export const getTotalAmountMoney = () => {
  return http.get('homeData/totalAmountMoney')
}
// 总点击量
export const getTotalClick = () => {
  return http.get('homeData/totalClick')
}
// 默认 List
export const getLoadP002Default = () => {
  return http.get('loadP002Default')
}
