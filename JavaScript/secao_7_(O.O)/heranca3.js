const pai = {nome: 'Pedro', cor_do_cabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.cor_do_cabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Sabrina'
console.log(`${filha2.nome} tem cabelo de cor ${filha2.cor_do_cabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha1) {
    console.log(key)
}

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por heranca: ${key}`)
}