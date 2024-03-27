const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function Meu_objeto() {}
console.log(typeof Object, typeof Meu_objeto)
console.log()
console.log(Object.prototype, Meu_objeto.prototype)