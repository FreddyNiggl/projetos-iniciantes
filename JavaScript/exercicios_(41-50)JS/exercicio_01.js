
pessoa = ' Joao'

comprimento = function () {
    return 'Olá,'
}

console.log(comprimento().concat(pessoa), '!')

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
pessoa = ' Joao'

comprimento = function(pessoa) {
    return `Olá, ${pessoa} !`
}

console.log(comprimento(pessoa))    