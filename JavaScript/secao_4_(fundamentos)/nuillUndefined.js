let valor // nao inicializada
console.log(valor)
    
valor = null
console.log(valor)
//console.log(valor.toString())// erro

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.90
console.log(prod)

prod.preco = undefined //evite(nao) defina UNDEFINED
console.log(!!prod.preco)
//delete prod.preco //forma correta de retirar o atributo de um objeto
console.log(prod)
prod.preco = null //sem preco
prod.preco = null //sem preco
console.log(!!prod.preco)
console.log(prod)