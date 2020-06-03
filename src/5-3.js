const obj1 = {
    name: 'yu',
    age: 20,
    family: {
        fa:'fa',
        ma: 'ma'
    }
}

var obj3 = {...obj1}
console.log(obj3)
obj3.family.fa = 'fafafa'
console.log(obj1);
console.log(obj3);


var o = {name: 'yu', age: 20, sex: 'woman'}

const {name, ...rest} = o
console.log(name)
console.log(rest)