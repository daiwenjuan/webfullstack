/**
 *  Created by daiwenjuan on 2018/1/21 17:31.
 */
const http = require('http')
const fs = require('fs')
const mysql = require('mysql')
const io = require('socket.io')
const url = require('url')

let db = mysql.createPool({host: 'localhost', user: 'root', password: 'rootadmin', database: '20171113'})
let httpServer = http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url, true)
  if (pathname == '/reg') {
    let {user, pass} = query
    //校验数据
    if (!/^\w{6,32}$/.test(user)) {
      res.write(JSON.stringify({code: 1, msg: '用户名不规范'}))
      res.end()
    } else if (!/^.{6,32}$/.test(pass)) {
      res.write(JSON.stringify({code: 1, msg: '密码不规范'}))
      res.end()
    } else {
      //检验用户名是否重复
      db.query(`SELECT * FROM user_table WHERE username='${user}'`, (err, data) => {
        if (err) {
          res.write(JSON.stringify({code: 1, msg: '数据库错误'}))
          res.end()
        } else if (data.length > 0) {
          res.write(JSON.stringify({code: 1, msg: '此用户名已经存在'}))
          res.end()
        } else {
          //插入
          db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`, err => {
            if (err) {
              res.write(JSON.stringify({code: 1, msg: '数据库有错'}))
              res.end()
            } else {
              res.write(JSON.stringify({code: 0, msg: '注册成功'}))
              res.end()
            }
          })
        }
      })
    }
  } else if (req.url == '/login') {

  } else {
    fs.readFile(`www${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write('Not Found')
      } else {
        res.write(data)
      }
      res.end()
    })
  }
})

httpServer.listen(3000)