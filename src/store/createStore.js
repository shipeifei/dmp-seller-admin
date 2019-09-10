import Vue from 'vue'
import Vuex from 'vuex'

const getModules = (controllers, moduleNameSuffix = '') => {
  const modules = {}

  if (controllers) {
    controllers.keys().forEach(fileName => {
      let moduleName = fileName
      const index = fileName.lastIndexOf('/')

      if (index >= 0) {
        moduleName = fileName.substring(index + 1)
      }
      moduleName = moduleName.replace(/\.js$/, '')

      let controllerConfig = controllers(fileName)

      controllerConfig = controllerConfig.default || controllerConfig
      modules[moduleName + moduleNameSuffix] = controllerConfig
    })
  }
  return modules
}

export default controllers => {
  Vue.use(Vuex)
  const modules = getModules(controllers)

  return new Vuex.Store({
    'strict': process.env.NODE_ENV !== 'production',
    'modules': {
      ...modules
    }
  })
}
