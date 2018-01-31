/**
 *  Created by daiwenjuan on 2018/1/18 07:39.
 */
const http = require('http')
const io = require('socket.io')

const httpServer = http.createServer()
httpServer.listen(3000)

//ws服务
const wsServer = io.listen(httpServer)
wsServer.on('connection', sock => {
  sock.emit()
})
