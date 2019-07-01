import corsInterceptor from './requestInterceptor'
import errorInterceptor from './errorInterceptor'
import unauthorizedInterceptor from './unauthorizedInterceptor'

export default [corsInterceptor, unauthorizedInterceptor, errorInterceptor]
