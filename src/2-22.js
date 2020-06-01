var url = 'http://musicapi.xiecheng.live/personalized'
function ajax(url, callback){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject('Microsoft .XMLHTTP')
    }

    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj)
            callback(obj)
        }
    }
}

new Promise((resolve, reject) => {
    ajax('static/a.json', res => {
        console.log(res)
        resolve()
    })
}).then(result => {
    console.log('a success')
    return  new Promise((resolve, reject) => {
        ajax('static/b.json', res => {
            console.log(res)
            resolve()
        })
    })
}).then(result => {
    console.log('b success')
    return new Promise((resolve, reject) => {
        ajax('static/c.json', res => {
            console.log(res)
            resolve( )
        })
    })
}).then(result => {
    console.log('c success')
})

// ajax('static/a.json', (res) => {
//     console.log(res)
//     ajax('static/b.json', res => {
//         console.log(res)
//         ajax('static/c.json', res => {
//             console.log(res)
//         })
//     })
// })