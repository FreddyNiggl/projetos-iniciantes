const valores = [4.4, 4.3, 7.6, 9.8]
console.log(valores[0], valores[3])
console.log(valores[4])

valores [5] = 10

console.log(valores)

console.log(valores.length)// verificar tamanho do Array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())// retira o ultimo valor do ARRAY e retorna ele
console.log(valores)
delete valores[0]
console.log(valores)
console.log(typeof valores) //Array é um objeto em JAVASCRIPT

