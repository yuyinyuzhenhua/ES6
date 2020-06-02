// const reg = /./s
// console.log(reg.test(4))
// console.log(reg.test('x'))
// console.log(reg.test('\n'))
// console.log(reg.test('\r'))
// console.log(reg.test('\u{2028}'))
// console.log(reg.test('\u{2029}'))

// 修饰符： g, i, m, y, u, s

// 具名组
// let res = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-06-02')
// console.log(res)

// let res1 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2020-06-02')
// console.log(res1)
// const {year, month, day} = res1.groups
// console.log(year)
// console.log(month)
// console.log(day)


// 后行断言
var str = 'ecmascript'
console.log(str.match(/ecma(?=script)/)) // ecma 先行断言
console.log(str.match(/(?<=ecma)script/)) // script 后行断言



console.log(str.match(/(?<!ecma)script/)) // null

