//const result = note => note >= 7 ? 'aprovado' : 'reprovado'

// é a mesma coisa que esse de baixo

const result = note => {
    return note >= 7 ? 'aprovado' : 'reprovado'
}

console.log(result(7.1))
console.log(result(6.9))
console.log(result(7))
console.log(result(6.99))
console.log(result(-2))




