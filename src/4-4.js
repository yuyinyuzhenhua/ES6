// var str = 'imooc'
// console.log(str.padStart(8, 'x'))
// console.log(str.padEnd(8, 'y'))
// console.log(str.padStart(8))
// console.log(str)

// yyyy-mm-dd
// var now = new Date()
// var year = now.getFullYear()
// var month = (now.getMonth() + 1).toString().padStart(2, '0')
// var day = now.getDate().toString().padStart(2, '0')

// console.log(`${year}-${month}-${day}`)

// 15122568545
// var tel = '15122568545';
// let s = tel.slice(-4).padStart(tel.length, '*');
// console.log(s)

var stamp = parseInt(new Date().getTime()/ 1000)
console.log(stamp.toString().padEnd(13, '0'))