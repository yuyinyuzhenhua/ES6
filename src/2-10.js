// var target = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3,
//         e: 4
//     }
// }
// var obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// }
// Object.assign(target, obj)
// console.log(obj,target)
let obj = {
    a: 1,
    b: 'a',
    c: true,
    d: null,
    e: undefined,
    f: [1,2,3],
    g: {name: 'zhang'},
    h: function aa(){console.log(99)},
    i: new Date(),
    j: Math.PI,
    k: /abc/
}

// let obj2 = JSON.parse(JSON.stringify(obj))
// console.log(obj2);
function CheckType(val){
    return  Object.prototype.toString.call(val)
}

function deepClone(target){
    if(target == null || typeof target != 'object'){
        return target
    }
    let o;
    if(CheckType(target) === '[object Object]'){
         o = {}
    }
    if(CheckType(target) === '[object Array]'){
         o = []
    }
    if(CheckType(target) === '[object Function]'){
        return new Function(target)
    }
    if(CheckType(target) === '[object RegExp]'){
        return new RegExp(target)
    }
    if(CheckType(target) === '[object Date]'){
        return new Date(target)
    }

    
    for(let key in target){
        o[key] = deepClone(target[key])
    }
    return o
}
let obj2 = deepClone(obj)
console.log(obj, obj2);
console.log(obj.h());
console.log(obj2.h());

