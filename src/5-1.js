// let arr = ['es6', 'es7', 'es8', 'es9']

// arr[Symbol.iterator] = function(){
//     let index = 0;
//     return {
//         next(){
//             return index < arr.length ? {
//                 value: arr[index++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

// for(let k of arr){
//     console.log(k)
// }

function getPromise(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: time,
                done: false
            })
        }, time)
    })
}



var arr = [ getPromise(1000),  getPromise(2000),  getPromise(3000)]

arr[Symbol.asyncIterator] = function(){
    let nextIndex = 0;
    return {
        next(){
            return nextIndex < arr.length ? arr[nextIndex++] : Promise.resolve({
                value: undefined,
                done: true
            })
        }
    }
}

async function test(){
    for await (let key of arr){
        console.log(key)
    }
}
test()

for(let k of arr){
    console.log(k)
}
