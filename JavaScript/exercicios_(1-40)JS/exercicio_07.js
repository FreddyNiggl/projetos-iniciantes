/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/



bhaskara = function (a, b, c) {
    // del = b ** 2
    // ta = - '4' * a * c
    // delta = del + ta

    let delta = b ** 2 - '4' * a * c
    
    x1  = (-b + delta) / ('2' * a)
    x2  = (-b - delta) / ('2' * a)
    
    if (x1 < 0 && x2 < 0) {
        console.log('x1 e x2 sao negativos')
    } else if (x1 < 0 ) {
        console.log('valor de x1 negativo!')
    } else if (x2 < 0) {
        console.log('valor de x2 negativo')
    }

    return x1, x2
}

console.log(bhaskara(3, -5, 12))
// console.log(del)
// console.log(ta)