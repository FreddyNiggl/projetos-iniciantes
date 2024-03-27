function rand({min = 0, max = 1000} ={}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 60, min: 1}
const obj2 = {min: 955}
console.log(rand(obj))
console.log(rand(obj2))
console.log(rand({}))
console.log(rand())

//sem definir valor para a funcao caso a chamada seja vazia '={}'
/*
 function rand({min = 0, max = 1000} ={}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 60, min: 1}
const obj2 = {min: 955}
console.log(rand(obj))
console.log(rand(obj2))
console.log(rand({}))
console.log(rand())
 */
