/**
 *  Created by daiwenjuan on 2018/1/18 07:39.
 */
const http = require('http')
let server = http.createServer(function (req, res) {
  //req 参数实际上是看客户端要什么，要不然请求啥服务器都返回相同的数据
  res.write('aa')
  res.end()
})
server.listen(3000)

console.log('监听成功')