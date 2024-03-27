const pilotos = [ 'sabrina', 'caio', 'fredy', 'biel']

pilotos.pop() //remove o ultimo item do array
console.log(pilotos)

pilotos.push('rafael')//add item ao ultimo indice do array
console.log(pilotos)

pilotos.shift()//remove o primeiro item da lista
console.log(pilotos)

pilotos.unshift('marcela')//add item ao primeiro indice do array
console.log(pilotos)

//splice pode add, remover, e substituir itens do array

//adicioando
pilotos.splice(1, 0, 'antonio', 'joao')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//slice - cria um novo array com uma quantidade determinada de itens de uma lista preexistentes
const pilotos_aprovados = pilotos.slice(2) //cria um novo array pegando o indice '2' em diante.
console.log(pilotos_aprovados)

const pilotos_reprovados = pilotos.slice(1, 3)// cria um array do item 1 ao 2 - '(1, 3)'
console.log(pilotos_reprovados)