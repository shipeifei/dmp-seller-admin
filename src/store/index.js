import createStore from './createStore'
export default createStore(require.context('./modules', false, /\.js$/))

// require.context
// 其中第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件，第三个参数表示引入的文件匹配的正则表达式。
