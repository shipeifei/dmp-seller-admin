import {
  sessionStorageApi
} from '@/utils/storageApi'

export default request => {
  const token = sessionStorageApi.get('token')

  if (token && !request.url.includes('captcha') && !request.url.includes('account/login')) {
    request.headers.set('token', token)
  }
}
