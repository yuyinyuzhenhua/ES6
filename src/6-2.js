let str = '  imooc    '
var str1 = str.replace(/^\s+/g, '')
let str2 = str.replace(/\s+$/g, '')
console.log(str1)
console.log(str2)

console.log(str)
// console.log(str.trimStart())
// console.log(str.trimLeft())
// console.log(str.trimEnd())
// console.log(str.trimRight())
// console.log(str.trim())