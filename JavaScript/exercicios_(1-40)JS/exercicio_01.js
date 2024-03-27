// //Crie uma função que dado dois valores (passados como parâmetros) 
// mostre no console a soma, subtração, multiplicação e divisão desses valores.

const operation = function (x, y) {
    console.log(`Resultado de ${x} + ${y} = ${x + y}`)
    console.log(`Resultado de ${x} - ${y} = ${x - y}`)
    console.log(`Resultado de ${x} * ${y} = ${x * y}`)
    console.log(`Resultado de ${x} / ${y} = ${x / y}`)
}

operation(2, 4)