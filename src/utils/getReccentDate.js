// 寻找多少天前的时间yyyy-mm-dd
const doHandleMonth = month => {
  var m = month
  if (month.toString().length === 1) {
    m = '0' + month
  }
  return m
}
export const getDay = day => {
  var today = new Date(new Date() * 1 + 1000 * 60 * 60 * 24 * day)
  var tYear = today.getFullYear()
  var tMonth = today.getMonth()
  var tDate = today.getDate()
  tMonth = doHandleMonth(tMonth + 1)
  tDate = doHandleMonth(tDate)
  return tYear + '-' + tMonth + '-' + tDate
}
