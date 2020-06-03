// var obj = {
//     name: 'yu',
//     age:20
// }
// let entries = Object.entries(obj)
// console.log(entries)
// console.log(Object.fromEntries(entries))


// let m = new Map()
// m.set('name', 'zhang')
// m.set('course', 'es')

// console.log(Object.fromEntries(m))


const course = {
    math: 80,
    english: 85,
    chinese: 90
}
console.log(Object.entries(course))
let arr = Object.entries(course).filter(([key, val]) => val >= 85)
console.log(Object.fromEntries(arr))
