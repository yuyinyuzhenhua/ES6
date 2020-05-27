// function foo(x, y = 'world'){
//     console.log(x, y)
// }
// foo('hello')


// function foo(x, y = 'world'){
//     let x = 'zhe' //wrong
//     console.log(x, y)
// }
// foo('hello')

// function foo(x, y='zhe', z){
//     console.log(x, y, z)
// }
// foo('aa', null, 'cc')

// function foo({x, y=5}){
//     console.log(x,y)
// }
// foo({})
// foo({x: 22})
// foo({x: 22, y:66})
// foo() //wrong 


// function ajax(url, {
//     body,
//     method = 'GET',
//     headers
// } = {}){
//     console.log(method)
// }
// ajax('www.baidu.com')

// function foo(a=1, b=2, c=3){
//     console.log(a,b,c)
// }
// console.log(foo.length)




// let x = 1;
// function foo(x, y = x){
//     console.log(y)
// }
// foo()   //undefined



// let x = 1;
// function foo(x, y = x){
//     console.log(y)
// }
// foo(2)   //2


// let x = 23;
// function foo(y = x){
//     let x = 390
//     console.log(y)
// }
// foo()   //23

// function foo(y = x){
//     let x = 2
//     console.log(y)
// }
// foo() //x is not defined

// function foo(){

// }
// console.log(foo.name)
// console.log((new Function).name) //anonymous

function foo(x, y){
    console.log(this, x, y)
}
foo.bind({name: 'yu'})(1,2)
console.log( foo.bind({}).name )
console.log( (function(){}).bind({}).name )


