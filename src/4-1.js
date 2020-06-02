
//  function timeout(){
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             // resolve('success')
//             reject('fail')
//         }, 1000)
//     })
// }

// async function foo(){
//     return await timeout()
// }
// foo().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
 

import ajax from './ajax'

function request(url){
    return new Promise((resolve, reject) => {
        ajax(url, (res) => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
}
async function getData(){
    const res1 = await request('static/a.json')
    console.log(res1)
    const res2 = await request('static/b.json')
    console.log(res2)
    const res3 = await request('static/c.json')
    console.log(res3)
}

getData()

