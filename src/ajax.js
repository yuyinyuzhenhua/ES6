var url = 'http://musicapi.xiecheng.live/personalized'


export default function ajax(url, successCallback, failCallback){
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
                successCallback && successCallback(obj)
            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404){
                failCallback && failCallback(xmlhttp.statusText)
            }
        }

}