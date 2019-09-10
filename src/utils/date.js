import dateFormat from 'dateformat'

const FORMAT_YYYY_MM_DD = 'yyyy-mm-dd'

const formatDate = (date, format = FORMAT_YYYY_MM_DD) => dateFormat(date, format)

const currentDate = format => formatDate(new Date(), format)

const DateUtils = {
  formatDate,
  currentDate
}

DateUtils.install = function (Vue) {
  const proto = Vue.prototype
  Object.keys(DateUtils).forEach(key => {
    proto[`$${key}`] = DateUtils[key]
  })
}

export default DateUtils
