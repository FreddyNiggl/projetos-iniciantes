const soma = function (x, y) {
    return x + y
}

const imprimir_resultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimir_resultado(3, 4)
imprimir_resultado(3, 4, soma)
imprimir_resultado(3, 4, function(c, d){
    return c - d
})
imprimir_resultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('opa')
    }
}

pessoa.falar()