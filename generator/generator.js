/**
 *  Created by daiwenjuan on 2018/2/1 下午5:24.
 */
function *show(num1, num2) {
  console.log('a')
  console.log(`${num1},${num2}`)
  let a = yield
    console.log('b')
  console.log(a)// 结果 5
}

let genObj = show(1, 2)
genObj.next(12) //没法给yield传参数
genObj.next(5)

console.log('==================')

function *show1() {
  console.log('a')
  yield 12
  console.log('b')
  return 55
}
let gen = show1()
let result1 = gen.next()
console.log(result1) //{ value: 12, done: false }
let result2 = gen.next()
console.log(result2) //{ value: 55, done: true }

console.log('============yield===========')

function *show2(num) {
  console.log('开始 ' + num)
  let aa = yield  num * 2
  console.log('操作 ' + aa)
  let bb = yield aa * 2
  console.log('结果 ' + bb)
  return bb
}

let aa = show2(2)
let bb = aa.next()
// console.log(bb)
let cc = aa.next(bb.value)
// console.log(cc)
let dd = aa.next(cc.value)
// console.log(dd)

console.log('==========aaaaaaaaaaaaaaaaa================')

