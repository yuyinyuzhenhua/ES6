const validJSON = (json) => {
    try{
        JSON.parse(json)
        return true;
    } catch {
        return false
    }
}

var a = '{"name": "zhangsan", "course": "es"}'
console.log(validJSON(a))