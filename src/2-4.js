var arr = [1,2,3,4, 2, 4, 5]
// arr.forEach(function(ele, index, array){
//     ele = ele + 1;
//     return ele;
//     console.log(ele, index)
// })
// console.log(arr)
// let result = arr.map(function(ele){
//     val = ele + 1;
//     return val;
// })
// console.log(result, arr)

// let res = arr.filter(item => {
//     return item == 2
// })
// console.log(res, arr)

// let sum = arr.reduce(function(prev, cur, index, array){
//     return prev + cur
// }, 0)
// console.log(sum, arr)

// let ary = [
//     {
//         key: 'name',
//         value: 'yu'
//     },
//     {
//         key: 'age',
//         value: 20
//     }
// ]
// let obj = ary.reduce(function(prev, cur, index, array){
//     var key = cur.key, value = cur.value;
//      prev[key] = value;
//      return prev
// }, {})
// console.log(obj, ary)

// console.log(Math.max.call(null, ...arr))
// 
// var max = arr.reduce(function(prev, cur, index, array){
//     return Math.max(prev, cur)
// })
// console.log(max);


// let arr1 = arr.reduce(function(prev, cur, index, array){
//     prev.indexOf(cur) == -1 && prev.push(cur)
//     return prev;
// }, [])
// console.log(arr1, arr)

// Array.prototype.foo = function(){
//     console.log(9)
// }
// for(let key in arr){
//     console.log(key, arr[key])
// }

// var a = arr.findIndex(function(val){
//     return val == 2;
// })
// console.log(a, arr)

// for(let item of arr){
//     console.log(item)
// }

// for(let item of arr.keys()){
//     console.log(item)
// }


// for(let item of arr.values()){
//     console.log(item)
// }

for(let [index,item] of arr.entries()){
    console.log(index,item)
}
