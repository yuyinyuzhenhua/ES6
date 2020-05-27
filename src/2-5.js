// var divs = document.getElementsByTagName('div')
// console.log(divs instanceof Array)
// var dvs = Array.prototype.slice(divs)
// console.log(dvs instanceof Array)

// var o = {
//     2: 'yu',
//     1: 'zhang',
//     length: 5
// }
// var b = Array.from(o)
// b.push('zheshi')
// console.log(b, o)


// var arr = new Array(1,2,3)
// console.log(arr)
// var brr = new Array(4)
// console.log(brr)


// var arr = Array.of(1,2,3)
// console.log(arr)
// var brr = Array.of(4)
// console.log(brr)

// var crr = Array.of(1, 'yu', 'zhang', {name: 'zhe'}, [10, 20, 30], function(){console.log(9)})
// console.log(crr)

// var arr = [20, 30, 1, 6, 88, 9, 88, 64, 99]
// var arr1 = arr.copyWithin(1, 5) 
// console.log(arr1, arr) //??

// var arr = new Array(3).fill(7)
// var arr = new Array(7).fill('imooc', 2, 5)
// var arr = [2,3,4,5,6]
// arr.fill(9)
// console.log(arr)


// var arr = [1,2,3,4, NaN, 3]
// console.log(arr.indexOf(3))
// console.log(arr.indexOf(NaN))
// console.log(arr.includes(NaN))
// console.log(arr.includes(3))


// var arr = new Array(3)
// var arr = Array.of(3)
var arr = Array.of('imooc', 1,2, 45, 'fdsf', [1,2,3], {name: 'yu'})
console.log(arr)