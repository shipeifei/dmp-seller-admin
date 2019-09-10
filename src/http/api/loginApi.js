// Login
import http from '@/http'
// 验证码 Get https://api.motouat.com.cn/recommconf/captcha
export const getCaptcha = () => {
  return http.get('captcha')
}

// 登录 Post  https://api.motouat.com.cn/recommconf/account/login
export const userLogin = options => {
  return http.post('account/login', options)
}
