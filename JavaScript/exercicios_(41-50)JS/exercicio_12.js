colecao = {a: 1, b: 2, c:"ab"}

remover = function(colecao, item)
{
copy = Object.assign({}, colecao)// iguais
copia = {...colecao}//iguais
delete copia[item]
delete copy[item]

return [copia, copy]

}

item = "c"


console.log(Object.is(remover(item, "c"), item)) //para testar se o item é o mesmo do passado para a funcao
console.log(remover(colecao, item ))
console.log(colecao)

