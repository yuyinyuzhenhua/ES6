
var btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
    setTimeout(function(){
        console.log(this);
    })
})