// Promise 静态方法


// function Foo(flag){
//     if(flag){
//         return new Promise((resolve, reject) => {
//             resolve('success')
//         })
//     } else {
//         return Promise.reject('fail')
//     }
// }

// Foo(false).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })


// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('p1')
//         resolve()
//     }, 5000)
// })
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('p2')
//         resolve()
//     }, 2000)
// })
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('p3')
//         resolve()
//     }, 3000)
// })



// Promise.all([p1, p2, p3]).then(res => {
//     console.log('success')
// }).catch(err => {
//     console.log('err')
// })
// Promise.race([p1, p2, p3]).then(res => {
//     console.log('success')
// }).catch(err => {
//     console.log('err')
// })

// var imgArr = ['1.png', '2.jpg', '3.jpg']
// var promiseArr = []
// imgArr.forEach(item => {
//     promiseArr.push(new Promise((resolve, reject) => {
//         // 
//         resolve(item)
//     }))
// })
// Promise.all(promiseArr).then(res => {
//     console.log('全部上传完成')
// })


function loadImg(){
    return new Promise((resolve, reject) => {
        var img = new Image()
        img.onload = function(){
            resolve(img)
        }
        img.src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4010773572,2691712521&fm=58&s=2B9CA34A4532858261C18210030070D7&bpow=121&bpoh=75 "
    })
}

function Timeout(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('图片加载超时')
        }, 2000)
    })
}
Promise.race([loadImg(), Timeout()]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


