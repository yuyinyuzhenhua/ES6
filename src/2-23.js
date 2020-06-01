var url = 'http://musicapi.xiecheng.live/personalized'
function ajax(url){
    var promise = new Promise((resolve, reject) => {
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
                // callback(obj)
                // successCallback && successCallback(obj)
                resolve(obj)
            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404){
                // failCallback && failCallback(xmlhttp.statusText)
                reject(xmlhttp.statusText)
            }
        }
    })
    return promise;

}

// ajax('static/a.json').then(res => {
//     console.log(res)
//     console.log('a success')
//     return ajax('static/b.json')
// }).then(res => {
//     console.log(res)
//     console.log('b success')
//     return  ajax('static/c.json')
// }).then(res => {
//     console.log(res)
//     console.log('c success')
// })


ajax('static/a.json').then(res => {
    console.log(res)
    return ajax('static/bl.json')
}).then(res => {
    console.log(res)
    return ajax('static/c.json')
} ).then(res => {
    console.log(res)
}).catch(err => {
    console.log('err:' + err)
})
