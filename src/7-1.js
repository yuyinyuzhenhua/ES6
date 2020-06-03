const str = `
    <html>
        <body>
            <div>第一个div</div>
            <p>这是p</p>
            <div>第二个div</div>
            <span>这是span</span>
            <div>第三个div</div>
        </body>
    </html>
`

function matchStr(reg, str){
    let res = []
    while(true){
        // console.log(reg.lastIndex)
        let s = reg.exec(str)
        if(s){
            res.push(s[1])
        } else {
            break;
        }
    }
    return res;
}
var reg = /<div>(.*)<\/div>/g
// console.log(reg.exec(str))
// console.log(reg.exec(str))
// console.log(reg.exec(str))
// console.log(matchStr(reg, str))
// console.log(str.match(reg))

// function selectDiv(reg, str){
//     let res = []
//     str.replace(reg, function(all, first){
//         res.push(first)
//     })
//     return res;
// }

// console.log(selectDiv(reg, str))

function selectDiv(reg, str){
    let res = []
    for(let k of str.matchAll(reg)){
        console.log(k)
        res.push(k[1])
    }
    return res;
}
console.log(selectDiv(reg, str))

