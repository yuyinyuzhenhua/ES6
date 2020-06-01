// var arr = ['es5', 'es6', 'es7']
// console.log(arr.includes('es6', 1))
// console.log(arr.includes('es6', 3))
// console.log(arr.includes('es6', -1))
// console.log(arr.includes('es6', -2))

// console.log(arr.indexOf('es6'))
// console.log(arr.indexOf('es6') > -1)

// var arr = ['es5', 'es6', ['es7', 'es8'], 'es9']
// console.log(arr.includes(['es7', 'es8']))  // false
// console.log(arr.indexOf(['es7', 'es8'])) // -1

var arr = ['es5', 'es6', NaN, 'es7', '2']
// console.log(arr.includes(NaN))
// console.log(arr.indexOf(NaN))
console.log(arr.includes(2));
console.log(arr.includes('2'));
console.log(arr.indexOf('2'));  // 4
console.log(arr.indexOf(2));   // -1 都是===


