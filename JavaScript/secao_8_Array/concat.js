//concat serve para juntar diversos elementos e incluive outros arrays em um só e objetos tbm

const filhas = ['sabrina', 'stephanie']
const filhos = [ 'freddy', 'elano']

const conjunto = filhas.concat(filhos)

console.log(conjunto, filhas, filhos)

console.log(['7676'].concat([1, 2], [3, 4], [5, 6], 8, [[9, 10]], 'a', 'b', {nome: 'fraco'}))