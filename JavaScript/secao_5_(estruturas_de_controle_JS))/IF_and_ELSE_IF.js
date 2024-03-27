Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimir_resultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperacao')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }

    console.log('FIM...')
}

imprimir_resultado(9.9)
imprimir_resultado(7)
imprimir_resultado(6.7)
imprimir_resultado(4.2)
imprimir_resultado(3.1)
imprimir_resultado(-1)
imprimir_resultado(11)