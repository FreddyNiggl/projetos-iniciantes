// pessoa -> 123 -> {...}
const pessoa =  {nome: 'sabrina'}
pessoa.nome = 'freddy'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'ana'}

Object.freeze(pessoa)
//esse comeando serve para congelar o OBjeto


pessoa.nome = 'Elano'
pessoa.end = 'AABB'
delete pessoa.nome
// nao permite alterar, add, excluir

console.log(pessoa.nome)
console.log(pessoa)

//criar uma constante objeto invariavel
const ID_pessoa = Object.freeze({nome: 'Sabrina'})
ID_pessoa.nome = 'HUUKK' // nao dá erro, porem tbm nao altera.

console.log(ID_pessoa)