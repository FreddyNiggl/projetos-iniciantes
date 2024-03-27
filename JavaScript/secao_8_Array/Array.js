console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Paulo', 'Ana')
console.log(aprovados)

aprovados = ['BIa', "Paulo", "Ana"]

console.log(aprovados[0])
console.log(aprovados[1])
aprovados[2] = 'fredd' // é possivel substituir um item de array sem ser necessario excluir ele antes.
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Sabrina' //assim voce determina em que espaco voce quer armazenar o daro ou trocar
aprovados.push('Abia') //add item ao final do array/lista
console.log(aprovados.lenght) // assim voce interage com todos os itens da lista sem saber a quantia de itens por exemplo
    
aprovados[9] = 'Freddy'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'caio', 'sabrina']
aprovados.splice(1, 1, 'freddy', 'ste') 
//O primeiro numero dita apartir de qual indice as mudancas serao feitas; 
//O 2°- diz quanto indices serao apagados e o 3°- quais serao adicionados.
console.log(aprovados)