Object.defineProperty(window, 'a', {
    value: 11,
    writeable: false
})
console.log(a)
a=12
console.log(a)

// var obj = {name: 'yu', family: { fa: 'bao'}}
// Object.freeze(obj)
// obj.name = 'zhang'
// obj.family.fa = 'zhang'
// console.log(obj)


const f = {age: 20, name: 'yu'}
f.name='zhang'
console.log(f) 

