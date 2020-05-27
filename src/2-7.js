// function foo(a, b ,c){
//     console.log(a, b, c)
// }
// var arr = [1,2,3]
// foo(...arr)

// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr = arr1.concat(arr2)
// Array.prototype.push.apply(arr1, arr2)
// arr1.push(...arr2)
// console.log(arr1, arr2)

// var str = 'yuzhenhua'
// console.log(...str)

// function foo(x, y, z){
//     let sum = 0;
//     // Array.prototype.forEach.call(arguments, function(ele){
//     //     sum += ele
//     // })
//     // Array.from(arguments).forEach(function(ele){
//     //     sum+=ele
//     // })
//     // sum = Array.from(arguments).reduce(function(prev, cur, index, array){
//     //     return prev + cur
//     // },0)
//     sum = Array.prototype.reduce.call(arguments, function(prev, cur, index, array){
//         return prev + cur
//     }, 0)
//     return sum;
// }
// console.log(foo(1, 2))
// console.log(foo(1, 2, 3))


// function  foo(...aa){
//     let sum = 0;
//     aa.forEach(function(ele){
//         sum += ele
//     })
//     return sum
// }
// console.log(foo(1,2,3))

// function foo(x, ...args){
//     console.log(x, args)
// }
// foo(1, 2,3,4,5)

let [a, b, ...c] = [1,2,3,4,5,6]
console.log(a, b, c)