//armazenando uma funcao em uma variavel
const imprimirsoma = function (a, b) {
    console.log(a, b)
}

imprimirsoma(2, 3)

//armazenando uma funcao ARROW em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(1, 8))

//retorno implicito     
const subtracao = (a, b) => a - b
console.log(subtracao(2, 5))

const blabla = a => console.log(a)
blabla('vamos dormir amor')