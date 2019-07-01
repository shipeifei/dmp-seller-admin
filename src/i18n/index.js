import Vue from 'vue'
import langENUS from './languages_en'
import langZHCN from './languages_zh'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  'locale': 'zh',
  'messages': {
    'zh': {
      ...zhLocale,
      ...langZHCN
    },
    'en': {
      ...enLocale,
      ...langENUS
    }
  }
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
