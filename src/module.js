// export const a = 5
// export const b = 6
// export const sum = (x, y) => x + y

// const a = 9;
// export default a


// const add = (x, y) => x + y;
// export default add
// export const str = 'abcd'

const a = 5
const sum = (x, y) => x + y
class People{
    constructor(name){
        this.name = name
    }
    showName(){
        console.log('Hello: ' + this.name)
    }
}

export default{
    a,
    sum,
    People
}

