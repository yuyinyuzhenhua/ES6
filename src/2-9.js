
// let name = 'yu'
// let age = 20
// let s = 'imooc'

// window.name = 'zhe'
// let obj = {
//     name: 'zhang', 
//     age,
//     [s]: 12,
//     study () {
//         console.log(this)
//         console.log(this.name + ' is learning')
//     }
// }
// console.log(obj)
// obj.study()

// console.log(Object.is(2, '2'))
// console.log(Object.is(NaN, NaN))
// var obj1 = {name: 'yu'}
// // let obj2 = {name: 'yu'}
// let obj2 = obj1
// console.log(Object.is(obj1, obj2))
// console.log(obj1 === obj2)

// let x = {a:1, b: 2}
// let y = {...x}
// console.log(x)
// console.log('ad' in x)
// console.log(x === y)

// var arr = [1,2,3]
// console.log(3 in arr)

// 对象便利
let obj  = {name: 'zhang', age :20}
// for(let key in obj){
//     console.log(key, obj[key])
// }

// Object.keys(obj).forEach(key => {
//     console.log(key, obj[key])
// })

// Object.getOwnPropertyNames(obj).forEach(key => {
//     console.log(key, obj[key])
// })

Reflect.ownKeys(obj).forEach(key => {
        console.log(key, obj[key])
    })
