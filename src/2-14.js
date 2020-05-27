// let s = Symbol('foo')
// console.log(s)
// console.log(s.description)

// var o = {
//     name: 'yu',
//     toString(){
//         return this.name 
//     }
// }
// let s = Symbol(o)
// console.log(s)
// console.log(s.description)

// //  
// var stu1 = '李斯'
// var stu2 = '李斯'
// var grade = {
//     [stu1]: {age: 20, address: 'cdfsv'},
//     [stu2]: {age: 30, address: 'vrebgfcfrvwfd'},
// }
// console.log(grade)


// var stu1 = Symbol('李斯')
// var stu2 = Symbol('李斯')

// var grade = {
//     [stu1]: {age: 20, address: 'cdfsv'},
//     [stu2]: {age: 30, address: 'vrebgfcfrvwfd'},
// }
// console.log(grade)


const sym = 'immoc'
class User{
    constructor(name){
        this.name = name;
        this[sym] = 'immoccds'
    }
    getName(){
        return this.name + this[sym]
    }
}
var p = new User('yu')
// for(let key in p){
//     console.log(key)
// }

// for( let key of Object.keys(p)){
//     console.log(key)
// }

// for(let key of Object.getOwnPropertySymbols(p)){
//     console.log(key)
// }

// for(let key of Reflect.ownKeys(p)){
//     console.log(key)
// }

const shapeType = {
    triangle: Symbol(),
    react: Symbol()
}

function getArea(shape){
    switch(shape){
        case shapeType.triangle:
            return 1;
        case shapeType.react:
            return 2;
        default:
            return 3;
    }
}

console.log(getArea(shapeType.triangle))