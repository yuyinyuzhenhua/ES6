var url = 'http://musicapi.xiecheng.live/personalized'
function ajax(url, callback){
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
                resolve(obj)
            }
        }
    })
    return promise;

}

ajax('static/a.json').then(res => {
    console.log(res)
})
