//declaracao de funcao
function soma(x,y) {
    return x + y}

//function express
const sub = function (x, y) {
    return x - y }


//named function express
const multi = function multi (x, y) {
    return (x * y)
}

console.log(soma(3, 4)) //por ser uma funcao nativa, voce pode chamr ela ou antes ou depois de declarar a funcao
console.log(sub(2, 3)) // essa so pode ser chamada depois da funcao
console.log(multi(2, 3)) // essa so pode ser chamada depois da funcao
