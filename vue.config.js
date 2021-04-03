
/**
 * 配置参考:
 * https://cli.vuejs.org/zh/config/
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
// const url = 'http://10.140.65.133:8080/'
// const url = 'http://192.168.3.38:8080/'
// const url = 'http://192.168.1.105:8082'
// const url = 'http://10.140.65.133:8082'
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  // 配置转发代理

}
