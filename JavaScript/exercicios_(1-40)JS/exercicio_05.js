// Lidar com números em JavaScript pode dar muita dor de cabeça. 
// Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); 
// O resultado será: 0.30000000000000004. Outra coisa importante de observar, 
// é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. 
// Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e 
// retorne R$0,30 (observe a vírgula e o ponto).


//console.log(0.1 + 0.2)

//Math.round arredonda para o valor inteiro mais proximo, nesse caso, 0.
const x = 0.30000000000000004
function valor_certo (valor) {
    valor_lapidado = Math.round(valor)
    return valor_lapidado
}

console.log(valor_certo(x))
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//toFixed serve para trava/escolher no numero de casas decimais que vc quer apos a virgula
const y = 0.30000000000000004
function valor_certo2 (valor) {
    valor_lapidado = valor.toFixed(2)
    return valor_lapidado
}

console.log(valor_certo2(y))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*O método toLocaleString() recebe alguns argumento 
- um objeto literal com as propriedades -, no meu caso eu utilizei:
style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:
decimal para representar números simples.
currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
percent para formato percentual.
currency: A moeda para usar na formatação monetária
*/

const z = 0.30000000000000004
function valor_certo3 (valor) {
    // valor_lapidado = valor.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})
    valor_lapidado = valor.toLocaleString('brl', {style: 'currency', currency: 'brl'})

    return valor_lapidado
}

console.log(valor_certo3(z))