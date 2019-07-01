import registerComponents from './registerComponents'

export default Vue => {
  registerComponents(require.context('.', true, /\.vue$/))(Vue)
}
