var s = new Set([1,2,3,2])
s.add('a').add('immoc')
s.delete('a')
// console.log(s.has(2))
s.delete(2)
// s.clear()
// console.log(s)
// s.forEach(item => {
//     console.log(item)
// }) 

// for(let key of s){
//     console.log(key, s[key])
// }

// for(let key of s.keys()){
//     console.log(key)
// }

// for(let key of s.values()){
//     console.log(key)
// }

// for(let item of s.entries()){
//     // console.log(item)
//     console.log(item[0], item[1])
// }


// var arr = [1,2,3,3,2,4,5]
// var s = new Set(arr)
// s = Array.from(s)
// console.log(s)


// var arr1 = [1,2,3,4]
// var arr2 = [2,3,4,5,6,7]
// // var arr = new Set(arr1.concat(arr2))
// var arr = new Set([...arr1, ...arr2])
// console.log([...arr])

// 交集
// var s1 = new Set(arr1)
// var s2 = new Set(arr2)
// var s =  arr1.filter(item => s2.has(item))
// console.log(s) 

// 差集
// var q1 = arr1.filter(item => !s2.has(item))
// var q2 = arr2.filter(item => !s1.has(item))
// console.log(q1,q2)
// console.log([...q1, ...q2])

var s = new WeakSet()
var o1 = {name: 'zhang'}
var o2 = {name: 'yu'}
s.add(o1).add(o2)
s.delete(o1)
console.log(s)
console.log(s.has(o2))