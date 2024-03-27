const notas = [4.5, 6.5, 7.2, 8.5, 9.4]

//sem call back

let notas_baixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notas_baixas.push(notas [i])
    }
}

console.log(notas_baixas)

//com call back
const notas_baixas2 = notas.filter(function (note) {
    return note < 7 })

console.log(notas_baixas2)

//const notas_baixas3 = notas.filter(note => note < 7)
const nota_menor_7 = note => note < 7
const notas_baixas3 = notas.filter(nota_menor_7)

console.log(notas_baixas3)