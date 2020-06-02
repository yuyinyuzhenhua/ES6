// function makeIterator(arr){
//     let index = 0;
//     return {
//         next(){
//             return index < arr.length ? {
//                 value: arr[index++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

// let m =makeIterator(['a', 'b', 'c'])
// console.log(m.next())
// console.log(m.next())
// console.log(m.next())
// console.log(m.next())
// console.log(m.next())


// let arr = ['a', 'b', 'c']
// let p = arr[Symbol.iterator]()
// console.log(p.next())

// let m = new Map()
// m.set('name', 'yu')
// m.set('age', 22)
// m.set('school', 'imooc')
// console.log(m)
// let p = m[Symbol.iterator]()
// console.log(p.next())
// console.log(p.next())
// console.log(p.next())
// console.log(p.next())
// console.log(p.next())



// 可迭代协议 : [Symbol.iterator]
// 迭代器协议: return {next(){return {value, done}}}

let courses = {
    allCourse: {
        frontend: ['ES6', 'Vue', 'React'],
        backend: ['java', 'php', 'c++'],
        webapp: ['Android', 'IOS']
    }
}

// courses[Symbol.iterator] = function(){
//     let allCourse = this.allCourse;
//     let keys = Reflect.ownKeys(allCourse)
//     let values = []
//     return {
//         next(){
//             if(!values.length){
//                 console.log(values)
//                 if(keys.length){
//                     console.log(keys)
//                     values = allCourse[keys[0]]
//                     keys.shift()
//                 }
//             }
//             return{
//                 done: !values.length,
//                 value: values.shift()
//             }
//         }
//     }
// }

// let c = courses[Symbol.iterator]()
// for(let c of courses){
//     console.log(c)
// }


courses[Symbol.iterator] = function* (){
    let allCourse = this.allCourse;
    let keys = Reflect.ownKeys(allCourse)
    let values = []

    while(1){
        if(!values.length){
            if(keys.length){
                values = allCourse[keys[0]]
                keys.shift()
                yield values.shift()
            } else {
                return false
            }
        } else {
            yield values.shift()
        }
    }
}

for(let c of courses){
    console.log(c)
}

