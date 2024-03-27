//IIFE -> Imdediataly invoked function expression
//dessa froma voce consegue fugir do escolpo global!!
(function(){
    console.log('sera executada na hora!')
    console.log('fugindo do escolpo padrao')
})()

console.log()

// ~~~~ diferença ~~~~
//nao foge do escolpo global
function a(){
    console.log('sera executada na hora!')
    console.log('fugindo do escolpo padrao')

}

a()



