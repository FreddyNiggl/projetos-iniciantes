const sequencia= {
    _valor: 1, //convencao utiliza _
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //ele gnora pois nao obedece a condicao da funcao (valor > this._valor)
console.log(sequencia.valor, sequencia.valor)
