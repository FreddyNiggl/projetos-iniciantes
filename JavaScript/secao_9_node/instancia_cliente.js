const contador_A = require('./instancia_unica')//se o objeto ja tiver sido criado ele retorna sempre a mesma instancia(armazena o dado)
const contador_B = require('./instancia_unica')

const contador_C = require('./instancia_nova')()//precisa desse parenteses para invocar o objeto da funcao a que se refere
const contador_D = require('./instancia_nova')()//gera um novo objeto a partir da chamada

contador_A.inclementar()
contador_A.inclementar()
console.log(contador_A.valor, contador_B.valor)

contador_C.inclementar()
contador_C.inclementar()
console.log(contador_C.valor, contador_D.valor)