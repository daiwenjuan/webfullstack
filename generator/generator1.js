/**
 *  Created by daiwenjuan on 2018/2/1 下午6:23.
 */
const runner = require('yield-runner-blue')
const jquery = require('jquery')
runner(function *() {
  let a=yield jquery.ajax({ url: 'data/1.txt', dataType: 'json' })
  yield jquery.ajax({ url: 'data/1.txt', dataType: 'json' })
  yield jquery.ajax({ url: 'data/1.txt', dataType: 'json' })
})