const pessoa = {
    nome: "sabrina",
    idade: 2,
    peso: 15
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
console.log()
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'Data_Nascimento', {
    enumerable: true,
    writable: false,
    value: '01/08/2003'
})
console.log()
pessoa.Data_Nascimento = '14/05/1997' // nao foi atribuido por conta do ''Writable = false''
console.log(pessoa.Data_Nascimento)
console.log(Object.keys(pessoa))

const dest = {a : 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)