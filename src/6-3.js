// var arr = [1, 2, 3, [4, 5, [6, 7, [8]]], 9]
// console.log(arr.flat(Infinity))

var arr = [1, 2, 3, 4, 5]
// const res = arr.map(item =>[item + 1]).flat()
const res = arr.flatMap(item => [item + 1])
console.log(res)
