import _ from 'lodash'

export default components => {
  const PREFIX = 'gucp-'

  return Vue => {
    const componentNames = {}
    components.keys().forEach(fileName => {
      let componentConfig = components(fileName)
      componentConfig = componentConfig.default || componentConfig
      let name = componentConfig.name
      const file = componentConfig.__file || ''
      if (name) {
        if (name.startsWith('Gucp')) {
          name = name.substring('Gucp'.length)
        }
        if (!componentNames[name]) {
          componentNames[name] = file
          Vue.component(PREFIX + _.kebabCase(name), componentConfig)
        } else {
          console.warn(
            `Component name '${name}' for file '${file}' is already used by another file '${componentNames[name]}'.`
          )
        }
      }
    })
  }
}
