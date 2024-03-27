function meu_objeto() {}
    console.log(meu_objeto.prototype)

const obj1 = new meu_objeto
const obj2 = new meu_objeto

console.log(obj1.__proto__ ===obj2.__proto__)
console.log(obj1.__proto__ === meu_objeto.prototype)

meu_objeto.prototype.name =  'Anonimo'
meu_objeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.name}`)
}

obj1.falar()
obj2.name = 'Rafael'

obj2.falar()

const obj3 = {}
obj3.__proto__ = meu_objeto.prototype
obj3.name = 'Sabrina'
obj3.falar()


//Resumo de defeinições e logica - MUito importante entender isso
console.log((new meu_objeto).__proto__ === meu_objeto.prototype)
console.log(meu_objeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(Object.prototype.__proto__ === null)