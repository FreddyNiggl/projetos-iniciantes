let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.a)

console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem VAR ou LET
abc = 3 /// nao fazer isso!
console.log(this.abc)
console.log(global.abc)