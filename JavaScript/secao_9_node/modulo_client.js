//tirar '_' depois de A e B para ver funcionar a funcao require.
const modulo_A = require('./modulo_A_') //nao precisa de '.js'
const modulo_B = require('./modulo_B_') // nao precisa '.js' de padrao ele ja busca o tipo de arquivo JS.

console.log(modulo_A.ola)
console.log(modulo_A.bem_vindo)
console.log(modulo_A.atelogo)
console.log(modulo_A)

console.log(modulo_B.bom_dia)
console.log(modulo_B.boa_noite())
console.log(modulo_B)

