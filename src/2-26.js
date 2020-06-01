// function makeIterator(arr){
//     var idx = 0;
//     return {
//         next(){
//             return idx < arr.length ? {value: arr[idx++], done: false} : {value: undefined, done: true}
//         }
//     }
// }

// var arr = ['a', 'b', 'c'];
// let n = makeIterator(arr)
// console.log(n.next())
// console.log(n.next())
// console.log(n.next())
// console.log(n.next())

let courses = {
    allCourse: {
        frontend: ['ES6', 'Vue', 'React'],
        backend: ['java', 'php', 'c++'],
        webapp: ['Android', 'IOS']
    }
}

// 可迭代协议 Symbol.iterator
// 迭代器协议 return{ next(){ return { value, done }} }
courses[Symbol.iterator] = function(){
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    return {
        next(){
            if(!values.length){
                if(keys.length){
                    values = allCourse[keys[0]]
                    keys.shift()
                }
            }
            return {
                done: !values.length,
                value: values.shift() 
            }
        }
    }
}

for(let item of courses){
    console.log(item)
}

