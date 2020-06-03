// 可选链
const user = {
    address: {
        street: '双清路',
        getNum(){
            return '80号'
        }
    }
}

console.log(user?.address?.street)
console.log(user?.address?.getNum?.())