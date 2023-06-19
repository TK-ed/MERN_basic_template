// JavaScript has a variety of loops
// => for, forEach, forIn, forOf, while etc..
const n = 10
function forLoop() {
    for(var i=0; i<n;i++){
        console.log(i)
    }
}

function whileLoop() {
    var i = 0
    while(i<10){
        console.log(i)
        i+=1
    }
}

function doWhile() {
    var i = 0
    do {

    } while(n<10)
}

forLoop(n)
whileLoop(n)
