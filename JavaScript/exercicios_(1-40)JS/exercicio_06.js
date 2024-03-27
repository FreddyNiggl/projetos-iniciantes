function simples (capital_inicial, juros_simples, tempo_aplicado) {
    montante =  capital_inicial *  juros_simples * tempo_aplicado + capital_inicial
    return montante
}

function composto (capital_inicial, juros_simples, tempo_aplicado) {
    montante = capital_inicial * (1 + juros_simples) ** tempo_aplicado
    return montante.toFixed(2)
}

console.log(simples(1000, 0.1, 5))
console.log(composto(1000, 0.1, 5))