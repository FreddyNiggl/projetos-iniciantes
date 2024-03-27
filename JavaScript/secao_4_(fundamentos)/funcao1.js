//funcao sem retorno
function imprimesoma(a, b) {
    console.log(a + b)
}

imprimesoma(2, 3)
imprimesoma(2)
imprimesoma(2, 3, 4, 5, 6, 7, 8, 9)
imprimesoma()

//funcao com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())