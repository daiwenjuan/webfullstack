/**
 *  Created by daiwenjuan on 2018/1/21 16:42.
 */
const mysql = require('mysql')
let db = mysql.createConnection({host: 'localhost', user: 'dwj', password: 'rootadmin', database: '20171113'})
//console.log(db)

db.query('SELECT * FROM user_table', (err, data) => {

})