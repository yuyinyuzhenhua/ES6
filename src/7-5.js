// node global
// web window self

function getglobal(){
    if(global !== undefined){
        return global
    }
    if(self !== undefined){
        return self
    }
    if(window !== undefined){
        return window
    }
}

console.log(getglobal())
console.log(globalThis)