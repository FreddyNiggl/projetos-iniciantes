const imprimir_resultado = function(nota) {
    if(nota >= 7) {
        console.log('Aluno Aprovado')
    } 
    else{
        (nota < 7)
        console.log("Aluno Reprovado")
    }
}

imprimir_resultado(5)
imprimir_resultado(6.9)
imprimir_resultado(8, 4)
imprimir_resultado(8)
imprimir_resultado('epaaa') // cuidado