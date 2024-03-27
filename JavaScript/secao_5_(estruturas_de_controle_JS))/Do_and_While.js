function entre_numero(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let alternativas = -1

do {
    alternativas = entre_numero(-1, 10)
    console.log(`Opcao escolhida foi: ${alternativas}.` )
}   while (alternativas != -1)

console.log('Ate a proxima!')

// A diferenca de do_while e while
//No do while ele adentra a funcao mesmo se o valor da const for o de saida
// pois a regra so é verificada ao fim da funcao; ex: 'while (alternativas != -1)'
