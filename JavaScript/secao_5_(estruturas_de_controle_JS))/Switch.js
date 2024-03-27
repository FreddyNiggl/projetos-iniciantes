const imprimir_resultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')    
            break    
        default:
            console.log('Nota Invalida')
    }   
    console.log('FIM...')
}

imprimir_resultado(10)
imprimir_resultado(9.5)
imprimir_resultado(8.3)
imprimir_resultado(7.8)
imprimir_resultado(6.5)
imprimir_resultado(5.1)
imprimir_resultado(4,5)
imprimir_resultado(3,9)
imprimir_resultado(2,2,2)
imprimir_resultado(1.5,4)
imprimir_resultado(-1)
imprimir_resultado(11)
imprimir_resultado('?')
imprimir_resultado([]) //tem valor apesar de vazio
imprimir_resultado({})