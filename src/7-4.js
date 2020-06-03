
// Promise.all([
//     Promise.resolve({
//         status: 200,
//         data:[1, 2, 3]
//     }),
//     Promise.reject({
//         status: 500,
//         data: []
//     }),
//     Promise.resolve({
//         status: 200,
//         data:[7, 8, 9]
//     })
// ]).then(res => {
//     console.log(res)
//     console.log('成功')
// }).catch(err => {
//     console.log(err)
//     console.log('失败')
// })


Promise.allSettled([
    Promise.resolve({
        status: 200,
        data:[1, 2, 3]
    }),
    Promise.reject({
        status: 500,
        data: []
    }),
    Promise.resolve({
        status: 200,
        data:[7, 8, 9]
    })
]).then(res => {
    console.log(res)
    let result = res.filter(item => item.status === 'fulfilled')
    console.log(result)
    console.log('成功')
}).catch(err => {
    console.log(err)
    console.log('失败')
})



