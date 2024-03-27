
//Como criar uma funcao de mesmo trabalho que o ForEach.
Array.prototype.forEach2 = function(baba) {
    for (let i = 0; i < this.length; i++) {
        baba(this[i], i, this)
    }
}

const aprovados = ['sabrina', 'freddy', 'caio', 'elano']

aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1} ${nome} - ${array}`)
})